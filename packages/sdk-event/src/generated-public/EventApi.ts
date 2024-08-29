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
import { Event } from '../generated-definitions/Event.js'
import { EventResponse } from '../generated-definitions/EventResponse.js'
import { Event$ } from './endpoints/Event$.js'


export function EventApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getNamespace_ByNamespace( queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNamespace_ByNamespace( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [CREATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function createNamespace_ByNamespace(data: Event): Promise<AxiosResponse<unknown>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNamespace_ByNamespace(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getUser_ByUserId(userId:string,  queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getEventId_ByEventId(eventId:number,  queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByEventId(eventId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getEventType_ByEventType(eventType:number,  queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventType_ByEventType(eventType,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getEventId_ByUserId_ByEventId(userId:string, eventId:number,  queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByUserId_ByEventId(userId, eventId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getEventType_ByUserId_ByEventType(userId:string, eventType:number,  queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventType_ByUserId_ByEventType(userId, eventType,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getEventId_ByEventType_ByEventId(eventType:number, eventId:number,  queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByEventType_ByEventId(eventType, eventId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Required permission &lt;code&gt;NAMESPACE:{namespace}:EVENT [UPDATE]&lt;/code&gt;and scope &lt;code&gt;analytics&lt;/code&gt; 
   */
  async function getEventId_ByUserId_ByEventType_ByEventId(userId:string, eventType:number, eventId:number,  queryParams: {endDate: string | null, pageSize: number, startDate: string | null, offset?: number}): Promise<AxiosResponse<EventResponse>> {
    const $ = new Event$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEventId_ByUserId_ByEventType_ByEventId(userId, eventType, eventId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getNamespace_ByNamespace,createNamespace_ByNamespace,getUser_ByUserId,getEventId_ByEventId,getEventType_ByEventType,getEventId_ByUserId_ByEventId,getEventType_ByUserId_ByEventType,getEventId_ByEventType_ByEventId,getEventId_ByUserId_ByEventType_ByEventId,
  }
}
  