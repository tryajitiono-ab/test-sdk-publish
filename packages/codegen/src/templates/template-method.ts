/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { extractDescription } from '../helpers/utils'
import { ParserUtils } from '../ParserUtils'
import { EndpointParameters } from '../Swagger'

export const templateMethod = ({
  classMethod,
  description,
  httpMethod,
  path,
  pathParams,
  bodyParams,
  queryParams,
  isFormUrlEncoded,
  responseClass,
  deprecated
}: {
  classMethod: string
  description: string
  httpMethod: string
  path: string
  pathParams: EndpointParameters[]
  bodyParams: EndpointParameters[]
  queryParams: EndpointParameters[]
  isFormUrlEncoded: boolean
  responseClass: string
  deprecated: boolean
}) => {
  let methodParams = ''
  let methodParamsNoTypes = ''
  let newPath = `'${path}'`
  let importStatements: string[] = []

  const sortedPathParams = ParserUtils.sortPathParamsByPath(pathParams, path)
  for (const pathParam of sortedPathParams) {
    const type = ParserUtils.parseType(pathParam)
    if (pathParam.name !== 'namespace') {
      methodParams += pathParam.name + `:${type}` + ', '
      methodParamsNoTypes += pathParam.name + ', '
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

  let dataType = null
  if (httpMethod !== 'get') {
    dataType = ParserUtils.parseBodyParamsType(bodyParams)
    importStatements = ParserUtils.parseBodyParamsImports(bodyParams)
    methodParams += dataType ? `data: ${dataType},` : ''
    methodParamsNoTypes += dataType ? `data,` : ''
  }

  const isAnyRequired = ParserUtils.isAnyQueryParamRequired(queryParams)
  const queryParamsType = queryParams.length
    ? `queryParams${isAnyRequired ? '' : '?'}: {${ParserUtils.parseQueryParamsType(queryParams)}}`
    : ''

  const queryParamsDefault = queryParams.length
    ? `const params = {${ParserUtils.parseQueryParamsDefault(queryParams)} ...queryParams} as AxiosRequestConfig`
    : 'const params = {} as AxiosRequestConfig'

  const isPostPutPatch = ['post', 'put', 'patch'].includes(httpMethod)
  const isDelete = ['delete'].includes(httpMethod)
  let dataPayload = '{params}'

  const descriptionText = extractDescription(description, { isDeprecated: deprecated })

  let formPayloadString = ''
  if (isFormUrlEncoded) {
    formPayloadString = ``
    const params = "{ ...params, headers: { ...params.headers, 'content-type': 'application/x-www-form-urlencoded' } }"

    dataPayload = dataType ? `CodeGenUtil.getFormUrlEncodedData(data), ${params}` : `null, ${params}`
  } else if (isPostPutPatch) {
    dataPayload = dataType ? `data, {params}` : 'null, {params}'
  } else if (isDelete) {
    dataPayload = dataType ? `{data, params}` : '{params}'
  }
  const isFileUpload = methodParams.indexOf('data: {file') > -1

  const resolvedResponseClass = responseClass || 'unknown'
  const resolvedResponseClassValidated = responseClass || 'z.unknown()'
  methodParams = (queryParamsType ? `${methodParams} ${queryParamsType}` : methodParams).replace(/,\s*$/, '')
  methodParamsNoTypes = queryParamsType ? `${methodParamsNoTypes} queryParams` : methodParamsNoTypes

  const isGuardInvoked = ['get', 'post', 'put', 'patch', 'delete'].includes(httpMethod)
  const responseType = resolvedResponseClass !== 'unknown' ? `${resolvedResponseClass}` : 'unknown'

  const responseSyncType = 'Response'
  const generatedMethodName = `${classMethod}(${methodParams}): Promise<${responseSyncType}<${responseType}>>`

  let methodImpl = `${descriptionText}
  ${generatedMethodName} {
    ${queryParamsDefault}
    const url = ${newPath}    ${formPayloadString} ${isFileUpload ? '\n// TODO file upload not implemented' : ''}
    const resultPromise = this.axiosInstance.${httpMethod}(url, ${dataPayload})

${`    return Validate.validateOrReturnResponse(this.useSchemaValidation, () => resultPromise, ${resolvedResponseClassValidated}, '${resolvedResponseClassValidated}')`}
  }
  `

  if (!isGuardInvoked) {
    methodImpl = ``
  }

  const res = {
    methodImpl,
    methodParams,
    methodParamsNoTypes,
    importStatements
  }
  return res
}
