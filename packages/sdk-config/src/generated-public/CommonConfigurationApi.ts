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
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { ConfigInfo } from '../generated-definitions/ConfigInfo.js'
import { ConfigInfoArray } from '../generated-definitions/ConfigInfoArray.js'
import { CommonConfiguration$ } from './endpoints/CommonConfiguration$.js'


export function CommonConfigurationApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
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
   * Get all public configs in the namespace 
   */
  async function getConfigs(): Promise<AxiosResponse<ConfigInfoArray>> {
    const $ = new CommonConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigs()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get public config by namespace and key 
   */
  async function getConfig_ByConfigKey(configKey:string): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new CommonConfiguration$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByConfigKey(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getConfigs,getConfig_ByConfigKey,
  }
}
  