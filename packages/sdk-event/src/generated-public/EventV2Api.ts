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
import { EventResponseV2 } from '../generated-definitions/EventResponseV2.js'
import { EventV2$ } from './endpoints/EventV2$.js'


export function EventV2Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Requires valid user access token 
   */
  async function getEvent_ByUserId_v2(userId:string,  queryParams?: {endDate?: string | null, eventName?: string | null, offset?: number, pageSize?: number, startDate?: string | null}): Promise<AxiosResponse<EventResponseV2>> {
    const $ = new EventV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEvent_ByUserId_v2(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Available Type: * email * password * displayname * dateofbirth * country * language  
   */
  async function getEdithistory_ByUserId_v2(userId:string,  queryParams?: {endDate?: string | null, offset?: number, pageSize?: number, startDate?: string | null, type?: string | null}): Promise<AxiosResponse<EventResponseV2>> {
    const $ = new EventV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEdithistory_ByUserId_v2(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getEvent_ByUserId_v2,getEdithistory_ByUserId_v2,
  }
}
  