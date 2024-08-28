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

import { SessionStorageAdmin$ } from './endpoints/SessionStorageAdmin$.js'


export function SessionStorageAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   *  Delete Session Storage By sessionID Session Storage feature only available for Gamesession  
   */
  async function deleteStorage_BySessionId(sessionId:string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorageAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStorage_BySessionId(sessionId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Read Session Storage by sessionID Session Storage feature only available for Gamesession  
   */
  async function getStorage_BySessionId(sessionId:string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorageAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStorage_BySessionId(sessionId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Read Session Storage by sessionID and userID Session Storage feature only available for Gamesession  
   */
  async function getStorageUser_BySessionId_ByUserId(sessionId:string, userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new SessionStorageAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStorageUser_BySessionId_ByUserId(sessionId, userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteStorage_BySessionId,getStorage_BySessionId,getStorageUser_BySessionId_ByUserId,
  }
}
  