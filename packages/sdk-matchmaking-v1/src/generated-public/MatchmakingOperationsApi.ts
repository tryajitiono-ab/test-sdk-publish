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
import { AppMessageDeclarationArray } from '../generated-definitions/AppMessageDeclarationArray.js'
import { MatchmakingOperations$ } from './endpoints/MatchmakingOperations$.js'


export function MatchmakingOperationsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  
  
  async function getVersion(): Promise<AxiosResponse<unknown>> {
    const $ = new MatchmakingOperations$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVersion()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * get the list of messages. 
   */
  async function getMessages(): Promise<AxiosResponse<AppMessageDeclarationArray>> {
    const $ = new MatchmakingOperations$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMessages()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getVersion,getMessages,
  }
}
  