/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { generateImports } from './template-class'

const getImportableVarMap = () => ({
  '@accelbyte/sdk': ['CodeGenUtil', 'Response', 'Validate', 'SdkSetConfigParam', 'Network', 'AccelByteSDK'],
  axios: ['AxiosDefaults', 'HeadersDefaults']
})

const makeNewImportVarMap = () => ({
  '@accelbyte/sdk': ['AccelByteSDK', 'SdkSetConfigParam', 'ApiUtils', 'Network'],
  axios: ['AxiosResponse']
})

// TODO localStorage('ZodEnabled')=false disables Zod validation in browser only. TODO move to Featureflag instead
export const templateApiClass = (className: string, body: string, importStatements: string[], returnMethods: string): string => {
  const $className = className.replace(/Api$/, '$')
  return `/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
${generateImports(body, importStatements, makeNewImportVarMap(), getImportableVarMap())}
${`import { ${$className} } from './endpoints/${$className}.js'\n`}

export function ${className}(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  ${body}
  
  return {
    ${returnMethods}
  }
}
  `
}
