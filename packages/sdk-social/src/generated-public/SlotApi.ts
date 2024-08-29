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
import { SlotInfo } from '../generated-definitions/SlotInfo.js'
import { SlotInfoArray } from '../generated-definitions/SlotInfoArray.js'
import { SlotMetadataUpdate } from '../generated-definitions/SlotMetadataUpdate.js'
import { Slot$ } from './endpoints/Slot$.js'


export function SlotApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get list of slots for a given user in namespace.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of slots&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getSlots_ByUserId(userId:string): Promise<AxiosResponse<SlotInfoArray>> {
    const $ = new Slot$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSlots_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Creates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created slot info&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createSlot_ByUserId(userId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]}): Promise<AxiosResponse<unknown>> {
    const $ = new Slot$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSlot_ByUserId(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Deletes the slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;/ul&gt; 
   */
  async function deleteSlot_ByUserId_BySlotId(userId:string, slotId:string): Promise<AxiosResponse<unknown>> {
    const $ = new Slot$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSlot_ByUserId_BySlotId(userId, slotId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Get slot data.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: slot data&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getSlot_ByUserId_BySlotId(userId:string, slotId:string): Promise<AxiosResponse<unknown>> {
    const $ = new Slot$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSlot_ByUserId_BySlotId(userId, slotId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates a slot.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateSlot_ByUserId_BySlotId(userId:string, slotId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]}): Promise<AxiosResponse<SlotInfo>> {
    const $ = new Slot$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSlot_ByUserId_BySlotId(userId, slotId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt;&lt;br&gt;Updates the slot metadata.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated slot&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateMetadata_ByUserId_BySlotId(userId:string, slotId:string, data: SlotMetadataUpdate): Promise<AxiosResponse<SlotInfo>> {
    const $ = new Slot$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMetadata_ByUserId_BySlotId(userId, slotId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getSlots_ByUserId,createSlot_ByUserId,deleteSlot_ByUserId_BySlotId,getSlot_ByUserId_BySlotId,updateSlot_ByUserId_BySlotId,updateMetadata_ByUserId_BySlotId,
  }
}
  