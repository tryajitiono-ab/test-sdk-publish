/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosResponse } from 'axios'
import { ConfigValueResponseV3 } from '../generated-definitions/ConfigValueResponseV3.js'
import { Config$ } from './endpoints/Config$.js'


export function ConfigApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  
  
  /**
   * This endpoint return the value of config key. The namespace should be publisher namespace or studio namespace. Note: this endpoint does not need any authorization. **Supported config key:** * uniqueDisplayNameEnabled * usernameDisabled * mandatoryEmailVerificationEnabled  
   */
  async function getConfig_ByConfigKey_v3(configKey:string): Promise<AxiosResponse<ConfigValueResponseV3>> {
    const $ = new Config$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByConfigKey_v3(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getConfig_ByConfigKey_v3,
  }
}
  