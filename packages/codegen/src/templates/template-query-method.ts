/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { capitalize } from '../helpers/utils'
import { ParserUtils } from '../ParserUtils'
import { EndpointParameters } from '../Swagger'

/* Table query doesn't have permission, will revisit later */
const POST_FETCH_INCLUDES_PATH = ['/table-query/']

export const templateQueryMethod = ({
  classMethod,
  httpMethod,
  path,
  pathParams,
  responseClass,
  methodParams,
  apiGenName
}: {
  classMethod: string
  httpMethod: string
  path: string
  pathParams: EndpointParameters[]
  responseClass: string
  methodParams: string
  apiGenName: string
}) => {
  const isPostFetch = httpMethod === 'post' && (POST_FETCH_INCLUDES_PATH.some(p => path.includes(p)) || path.endsWith('/list'))

  const isFetch = classMethod.startsWith('fetch')
  const isGet = httpMethod === 'get' || isPostFetch || isFetch

  const queryMethod = isGet ? 'useQuery' : 'useMutation'
  let mParams = ''
  let mParamsNoTypes = ''
  let newPath = `'${path}'`

  const sortedPathParams = ParserUtils.sortPathParamsByPath(pathParams, path)
  for (const pathParam of sortedPathParams) {
    const type = ParserUtils.parseType(pathParam)
    if (pathParam.name !== 'namespace') {
      mParams += pathParam.name + `:${type}` + ', '
      mParamsNoTypes += pathParam.name + ', '
    }
    const pName = pathParam.name === 'namespace' ? 'this.namespace' : pathParam.name
    if (path.match(`{${pathParam.name}}`)) {
      if (type === 'string') {
        newPath = `${newPath}.replace('{${pathParam.name}}', ${pName})`
      } else {
        newPath = `${newPath}.replace('{${pathParam.name}}', String(${pName}))`
      }
    }
  }

  const resolvedResponseClass = responseClass || 'unknown'

  let _methodName = convertMethodNameToHook({ classMethod, apiGenName, isPostFetch, isFetch })
  const _responseType = resolvedResponseClass !== 'unknown' ? `${resolvedResponseClass}` : 'unknown'
  const _methodParams = methodParams && methodParams.length > 0 ? `& { ${methodParams} }` : ''
  const _methodParamsImpl = convertToMethodImplArgs(methodParams)
  const queryKey = createQueryKey(apiGenName, classMethod)

  const queryMethodImpl = `\n
/**
 * ### Default Query Options
 * 
 * The default options include:
 * \`\`\`
 * {
 *    queryKey: [${queryKey}, input]
 * }
 * \`\`\`
 */
export const ${_methodName} = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ${_methodParams},
    options?: Omit<UseQueryOptions<${_responseType}, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<${_responseType}>) => void
  ): UseQueryResult<${_responseType}, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof ${_methodName}>[1]
  ) => async () => {
      const response = 
            (await ${apiGenName}(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                ${classMethod}(${_methodParamsImpl}))
      callback && callback(response)
      return response.data
  }
  
  return ${queryMethod}<${_responseType}, AxiosError<ApiError>>({
    queryKey: [${queryKey}, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}\n  
  `

  const mutationMethodImpl = `\n
export const ${_methodName} = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<${_responseType}, AxiosError<ApiError>, SdkSetConfigParam ${_methodParams}>, 'mutationKey'>,
    callback?: (data: ${_responseType}) => void
  ): UseMutationResult<${_responseType}, AxiosError<ApiError>, SdkSetConfigParam ${_methodParams}> => { 
  
  const mutationFn = async (input: SdkSetConfigParam ${_methodParams}) => {
      const response = 
            (await ${apiGenName}(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                ${classMethod}(${_methodParamsImpl}))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [${createQueryKey(apiGenName, classMethod)}],
    mutationFn,
    ...options
  })
}\n  
  `

  return isGet ? queryMethodImpl : mutationMethodImpl
}

/*
 * Converts "SomethingApi.get|post|etcWhatever" to "Something.Whatever"
 */
function createQueryKey(className, methodName) {
  const prefixRegex = /^(get|create|update|delete|patch|post|fetch)[_]?/i
  const cleanedMethodName = methodName.replace(prefixRegex, '').trim()
  const finalMethodName = cleanedMethodName.charAt(0).toUpperCase() + cleanedMethodName.slice(1)
  return `Key_${className.replace('Api', '')}.${finalMethodName}`
}

const prefixMappings = {
  get: 'use',
  create: 'useCreate',
  patch: 'usePatch',
  update: 'useUpdate',
  delete: 'useDelete',
  post: 'usePost',
  fetch: 'useFetch'
} as const

function versionMutationSuffixMethodName(baseMethodName: string): string {
  // Use regex to split the method name at the last occurrence of a version pattern
  const parts = baseMethodName.split(/(_v\d+)$/)
  const name = parts[0] // The base name without the version
  const versionSuffix = parts[1] || '' // The version suffix or empty if not present

  // Insert the version suffix after "Mutation" correctly, even if it's deeply embedded
  const res = `${name}Mutation${versionSuffix}`
  return res
}

function convertMethodNameToHook({
  classMethod,
  apiGenName,
  isPostFetch,
  isFetch
}: {
  classMethod: string
  apiGenName: string
  isPostFetch: boolean
  isFetch: boolean
}) {
  for (const [originalPrefix, newPrefix] of Object.entries(prefixMappings)) {
    if (classMethod.startsWith(originalPrefix)) {
      return `use${apiGenName}_${capitalize(classMethod)}`
    }
  }
  return classMethod
}

/**
 * Converts "data: UpgradeHeadlessAccountV3Request, queryParams?: etc"
 * To: "input.data, input.queryParams"
 */
function convertToMethodImplArgs(methodArgs) {
  // Split the input string on commas to separate each property
  const properties = methodArgs
    .split(/,\s*(?![^{}]*\})/)
    .map(prop => prop.trim())
    .filter(Boolean)

  // Initialize an array to hold the formatted properties
  const formattedProperties = []

  // Process each property
  properties.forEach(prop => {
    // Check if the property includes an object (detecting a colon followed by a curly brace)
    if (prop.includes(': {')) {
      // Extract the property name, considering optional '?'
      const propertyName = prop.split(': {')[0].replace('?', '').trim()
      formattedProperties.push(`input.${propertyName}`)
    } else {
      // Regular property (no object)
      const colonIndex = prop.indexOf(':')
      const propertyName = prop.substring(0, colonIndex).replace('?', '').trim()
      formattedProperties.push(`input.${propertyName}`)
    }
  })

  // Join the formatted property names with ', '
  return formattedProperties.join(', ')
}
