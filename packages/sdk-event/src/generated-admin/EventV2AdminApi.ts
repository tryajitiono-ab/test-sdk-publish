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
import { EventResponseV2 } from '../generated-definitions/EventResponseV2.js'
import { GenericQueryPayload } from '../generated-definitions/GenericQueryPayload.js'
import { EventV2Admin$ } from './endpoints/EventV2Admin$.js'


export function EventV2AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This endpoint is using POST which is somewhat unfamiliar, but it&#39;s logical that we have to send/post a filter (search term) in order to get the data. This endpoint will not return anything if you give it an empty filters in the request body.  
   */
  async function fetchQuery_v2(data: GenericQueryPayload, queryParams?: {endDate?: string | null, offset?: number, pageSize?: number, startDate?: string | null}): Promise<AxiosResponse<EventResponseV2>> {
    const $ = new EventV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchQuery_v2(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get events from a specific user 
   */
  async function getEvent_ByUserId_v2(userId:string,  queryParams?: {endDate?: string | null, eventName?: string | null, offset?: number, pageSize?: number, startDate?: string | null}): Promise<AxiosResponse<EventResponseV2>> {
    const $ = new EventV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEvent_ByUserId_v2(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    fetchQuery_v2,getEvent_ByUserId_v2,
  }
}
  