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
import { GetUsersPresenceResponse } from '../generated-definitions/GetUsersPresenceResponse.js'
import { RequestUserPresence } from '../generated-definitions/RequestUserPresence.js'
import { Presence$ } from './endpoints/Presence$.js'


export function PresenceApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Query users presence with given namespace and userIds. 
   */
  async function getPresenceUsersPresence( queryParams: {userIds: string | null, countOnly?: boolean | null}): Promise<AxiosResponse<GetUsersPresenceResponse>> {
    const $ = new Presence$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPresenceUsersPresence( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Query users presence with given namespace and userIds. 
   */
  async function createPresenceUserPresence(data: RequestUserPresence, queryParams?: {countOnly?: boolean | null}): Promise<AxiosResponse<GetUsersPresenceResponse>> {
    const $ = new Presence$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPresenceUserPresence(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getPresenceUsersPresence,createPresenceUserPresence,
  }
}
  