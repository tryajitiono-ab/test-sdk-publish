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
import { ConsumeItemReq } from '../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../generated-definitions/ItemResp.js'
import { ListItemResp } from '../generated-definitions/ListItemResp.js'
import { MoveItemsReq } from '../generated-definitions/MoveItemsReq.js'
import { MoveItemsResp } from '../generated-definitions/MoveItemsResp.js'
import { RemoveInventoryItemReq } from '../generated-definitions/RemoveInventoryItemReq.js'
import { UpdateItemReq } from '../generated-definitions/UpdateItemReq.js'
import { UpdateItemRespArray } from '../generated-definitions/UpdateItemRespArray.js'
import { PublicItems$ } from './endpoints/PublicItems$.js'


export function PublicItemsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   *  Bulk remove user&#39;s own items.  
   */
  async function deleteItemMeUser_ByInventoryId(inventoryId:string, data: RemoveInventoryItemReq[]): Promise<AxiosResponse<UpdateItemRespArray>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteItemMeUser_ByInventoryId(inventoryId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Listing all user&#39;s owned items in an inventory. The response body will be in the form of standard pagination.  
   */
  async function getItemsMeUsers_ByInventoryId(inventoryId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc', sourceItemId?: string | null, tags?: string | null}): Promise<AxiosResponse<ListItemResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getItemsMeUsers_ByInventoryId(inventoryId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Bulk Updating user&#39;s own items.  
   */
  async function updateItemMeUser_ByInventoryId(inventoryId:string, data: UpdateItemReq[]): Promise<AxiosResponse<UpdateItemRespArray>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateItemMeUser_ByInventoryId(inventoryId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Consume user&#39;s own item.  
   */
  async function createConsumeUser_ByInventoryId(inventoryId:string, data: ConsumeItemReq): Promise<AxiosResponse<ItemResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConsumeUser_ByInventoryId(inventoryId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Move items between inventories that is owned by the same user. Currently, this endpoint supports transferring items exclusively from source OTHER. Items from source ECOMMERCE are not yet eligible for transfer. We are working on expanding support to include source ECOMMERCE in future updates.  
   */
  async function createItemMovementUser_ByInventoryId(inventoryId:string, data: MoveItemsReq): Promise<AxiosResponse<MoveItemsResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createItemMovementUser_ByInventoryId(inventoryId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Getting an user&#39;s owned item info.  
   */
  async function getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(inventoryId:string, slotId:string, sourceItemId:string): Promise<AxiosResponse<ItemResp>> {
    const $ = new PublicItems$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId(inventoryId, slotId, sourceItemId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteItemMeUser_ByInventoryId,getItemsMeUsers_ByInventoryId,updateItemMeUser_ByInventoryId,createConsumeUser_ByInventoryId,createItemMovementUser_ByInventoryId,getSourceItemMeUser_ByInventoryId_BySlotId_BySourceItemId,
  }
}
  