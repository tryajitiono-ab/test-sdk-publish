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
import { PlatformAccountClosureClientRequest } from '../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../generated-definitions/PlatformAccountClosureClientResponse.js'
import { PlatformAccountClosureClientAdmin$ } from './endpoints/PlatformAccountClosureClientAdmin$.js'


export function PlatformAccountClosureClientAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Delete platform account closure client. 
   */
  async function deleteClosureClient_ByPlatform(platform:string): Promise<AxiosResponse<unknown>> {
    const $ = new PlatformAccountClosureClientAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClosureClient_ByPlatform(platform, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get platform account closure config. Scope: account 
   */
  async function getClosureClient_ByPlatform(platform:string): Promise<AxiosResponse<PlatformAccountClosureClientResponse>> {
    const $ = new PlatformAccountClosureClientAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClosureClient_ByPlatform(platform, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update platform account closure client. Scope: account 
   */
  async function updateClosureClient_ByPlatform(platform:string, data: PlatformAccountClosureClientRequest): Promise<AxiosResponse<unknown>> {
    const $ = new PlatformAccountClosureClientAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClosureClient_ByPlatform(platform, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteClosureClient_ByPlatform,getClosureClient_ByPlatform,updateClosureClient_ByPlatform,
  }
}
  