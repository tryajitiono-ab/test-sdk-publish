/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, SdkSetConfigParam, ApiError } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { ItemsAdminApi } from "../ItemsAdminApi.js"

import { AdminUpdateItemReq } from '../../generated-definitions/AdminUpdateItemReq.js'
import { BulkSaveItemRespArray } from '../../generated-definitions/BulkSaveItemRespArray.js'
import { ConsumeItemReq } from '../../generated-definitions/ConsumeItemReq.js'
import { ItemResp } from '../../generated-definitions/ItemResp.js'
import { ListItemResp } from '../../generated-definitions/ListItemResp.js'
import { RemoveInventoryItemReq } from '../../generated-definitions/RemoveInventoryItemReq.js'
import { SaveItemReq } from '../../generated-definitions/SaveItemReq.js'
import { SaveItemToInventoryReq } from '../../generated-definitions/SaveItemToInventoryReq.js'
import { UpdateItemRespArray } from '../../generated-definitions/UpdateItemRespArray.js'


export enum Key_ItemsAdmin {
  Item_ByUserId = 'Inventory.ItemsAdmin.Item_ByUserId',
ItemBulk_ByUserId = 'Inventory.ItemsAdmin.ItemBulk_ByUserId',
Items_ByInventoryId = 'Inventory.ItemsAdmin.Items_ByInventoryId',
ItemEntitlementSync_ByUserId = 'Inventory.ItemsAdmin.ItemEntitlementSync_ByUserId',
Item_ByUserId_ByInventoryId = 'Inventory.ItemsAdmin.Item_ByUserId_ByInventoryId',
Consume_ByUserId_ByInventoryId = 'Inventory.ItemsAdmin.Consume_ByUserId_ByInventoryId',
ItemBulk_ByUserId_ByInventoryId = 'Inventory.ItemsAdmin.ItemBulk_ByUserId_ByInventoryId',
SourceItem_ByInventoryId_BySlotId_BySourceItemId = 'Inventory.ItemsAdmin.SourceItem_ByInventoryId_BySlotId_BySourceItemId',

}

  

export const useItemsAdminApi_CreateItem_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SaveItemReq }>, 'mutationKey'>,
    callback?: (data: ItemResp) => void
  ): UseMutationResult<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SaveItemReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SaveItemReq }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createItem_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemsAdminApi_CreateItemBulk_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkSaveItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SaveItemReq[] }>, 'mutationKey'>,
    callback?: (data: BulkSaveItemRespArray) => void
  ): UseMutationResult<BulkSaveItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SaveItemReq[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SaveItemReq[] }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createItemBulk_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.ItemBulk_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.Items_ByInventoryId, input]
 * }
 * ```
 */
export const useItemsAdminApi_GetItems_ByInventoryId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { inventoryId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc', sourceItemId?: string | null, tags?: string | null} },
    options?: Omit<UseQueryOptions<ListItemResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListItemResp>) => void
  ): UseQueryResult<ListItemResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemsAdminApi_GetItems_ByInventoryId>[1]
  ) => async () => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItems_ByInventoryId(input.inventoryId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListItemResp, AxiosError<ApiError>>({
    queryKey: [Key_ItemsAdmin.Items_ByInventoryId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemsAdminApi_UpdateItemEntitlementSync_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateItemEntitlementSync_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.ItemEntitlementSync_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemsAdminApi_DeleteItem_ByUserId_ByInventoryId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: RemoveInventoryItemReq[] }>, 'mutationKey'>,
    callback?: (data: UpdateItemRespArray) => void
  ): UseMutationResult<UpdateItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: RemoveInventoryItemReq[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, inventoryId:string, data: RemoveInventoryItemReq[] }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteItem_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemsAdminApi_CreateItem_ByUserId_ByInventoryId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: SaveItemToInventoryReq }>, 'mutationKey'>,
    callback?: (data: ItemResp) => void
  ): UseMutationResult<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: SaveItemToInventoryReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, inventoryId:string, data: SaveItemToInventoryReq }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createItem_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemsAdminApi_UpdateItem_ByUserId_ByInventoryId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: AdminUpdateItemReq[] }>, 'mutationKey'>,
    callback?: (data: UpdateItemRespArray) => void
  ): UseMutationResult<UpdateItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: AdminUpdateItemReq[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, inventoryId:string, data: AdminUpdateItemReq[] }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateItem_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.Item_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemsAdminApi_CreateConsume_ByUserId_ByInventoryId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: ConsumeItemReq }>, 'mutationKey'>,
    callback?: (data: ItemResp) => void
  ): UseMutationResult<ItemResp, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: ConsumeItemReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, inventoryId:string, data: ConsumeItemReq }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConsume_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.Consume_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemsAdminApi_CreateItemBulk_ByUserId_ByInventoryId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkSaveItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: SaveItemToInventoryReq[] }>, 'mutationKey'>,
    callback?: (data: BulkSaveItemRespArray) => void
  ): UseMutationResult<BulkSaveItemRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryId:string, data: SaveItemToInventoryReq[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, inventoryId:string, data: SaveItemToInventoryReq[] }) => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createItemBulk_ByUserId_ByInventoryId(input.userId, input.inventoryId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemsAdmin.ItemBulk_ByUserId_ByInventoryId],
    mutationFn,
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ItemsAdmin.SourceItem_ByInventoryId_BySlotId_BySourceItemId, input]
 * }
 * ```
 */
export const useItemsAdminApi_GetSourceItem_ByInventoryId_BySlotId_BySourceItemId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { inventoryId:string, slotId:string, sourceItemId:string },
    options?: Omit<UseQueryOptions<ItemResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemResp>) => void
  ): UseQueryResult<ItemResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemsAdminApi_GetSourceItem_ByInventoryId_BySlotId_BySourceItemId>[1]
  ) => async () => {
      const response = 
            (await ItemsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSourceItem_ByInventoryId_BySlotId_BySourceItemId(input.inventoryId, input.slotId, input.sourceItemId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemResp, AxiosError<ApiError>>({
    queryKey: [Key_ItemsAdmin.SourceItem_ByInventoryId_BySlotId_BySourceItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  