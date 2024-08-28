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

import { Watchdogs$ } from './endpoints/Watchdogs$.js'


export function WatchdogsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This is to support local ds development scenarios Required Permission: NAMESPACE:{namespace}:AMS:LOCALDS [CREATE] 
   */
  async function getConnect_ByWatchdogId(watchdogID:string): Promise<AxiosResponse<unknown>> {
    const $ = new Watchdogs$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConnect_ByWatchdogId(watchdogID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: NAMESPACE:{namespace}:ARMADA:WATCHDOG [CREATE] 
   */
  async function getConnect_ByWatchdogId_ByNS(watchdogID:string): Promise<AxiosResponse<unknown>> {
    const $ = new Watchdogs$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConnect_ByWatchdogId_ByNS(watchdogID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getConnect_ByWatchdogId,getConnect_ByWatchdogId_ByNS,
  }
}
  