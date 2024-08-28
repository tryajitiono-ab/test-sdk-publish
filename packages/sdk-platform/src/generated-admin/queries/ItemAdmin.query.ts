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
import { ItemAdminApi } from "../ItemAdminApi.js"

import { AppUpdate } from '../../generated-definitions/AppUpdate.js'
import { AvailablePredicateArray } from '../../generated-definitions/AvailablePredicateArray.js'
import { BasicItemArray } from '../../generated-definitions/BasicItemArray.js'
import { BulkRegionDataChangeRequest } from '../../generated-definitions/BulkRegionDataChangeRequest.js'
import { EstimatedPriceInfo } from '../../generated-definitions/EstimatedPriceInfo.js'
import { FullAppInfo } from '../../generated-definitions/FullAppInfo.js'
import { FullItemInfo } from '../../generated-definitions/FullItemInfo.js'
import { FullItemInfoArray } from '../../generated-definitions/FullItemInfoArray.js'
import { FullItemPagingResult } from '../../generated-definitions/FullItemPagingResult.js'
import { FullItemPagingSlicedResult } from '../../generated-definitions/FullItemPagingSlicedResult.js'
import { InGameItemSync } from '../../generated-definitions/InGameItemSync.js'
import { ItemAcquireRequest } from '../../generated-definitions/ItemAcquireRequest.js'
import { ItemAcquireResult } from '../../generated-definitions/ItemAcquireResult.js'
import { ItemCreate } from '../../generated-definitions/ItemCreate.js'
import { ItemDynamicDataInfo } from '../../generated-definitions/ItemDynamicDataInfo.js'
import { ItemId } from '../../generated-definitions/ItemId.js'
import { ItemIdArray } from '../../generated-definitions/ItemIdArray.js'
import { ItemInfoArray } from '../../generated-definitions/ItemInfoArray.js'
import { ItemPurchaseConditionValidateRequest } from '../../generated-definitions/ItemPurchaseConditionValidateRequest.js'
import { ItemPurchaseConditionValidateResultArray } from '../../generated-definitions/ItemPurchaseConditionValidateResultArray.js'
import { ItemReturnRequest } from '../../generated-definitions/ItemReturnRequest.js'
import { ItemTypeConfigCreate } from '../../generated-definitions/ItemTypeConfigCreate.js'
import { ItemTypeConfigInfo } from '../../generated-definitions/ItemTypeConfigInfo.js'
import { ItemTypeConfigInfoArray } from '../../generated-definitions/ItemTypeConfigInfoArray.js'
import { ItemTypeConfigUpdate } from '../../generated-definitions/ItemTypeConfigUpdate.js'
import { ItemUpdate } from '../../generated-definitions/ItemUpdate.js'
import { PopulatedItemInfo } from '../../generated-definitions/PopulatedItemInfo.js'
import { PurchaseConditionUpdate } from '../../generated-definitions/PurchaseConditionUpdate.js'


export enum Key_ItemAdmin {
  ItemsConfigs = 'Platform.ItemAdmin.ItemsConfigs',
ItemConfig = 'Platform.ItemAdmin.ItemConfig',
ItemConfig_ById = 'Platform.ItemAdmin.ItemConfig_ById',
ItemsConfigsSearch = 'Platform.ItemAdmin.ItemsConfigsSearch',
Item = 'Platform.ItemAdmin.Item',
ItemsByIds = 'Platform.ItemAdmin.ItemsByIds',
ItemsBySku = 'Platform.ItemAdmin.ItemsBySku',
ItemsSearch = 'Platform.ItemAdmin.ItemsSearch',
ItemsByAppId = 'Platform.ItemAdmin.ItemsByAppId',
Item_ByItemId = 'Platform.ItemAdmin.Item_ByItemId',
ItemsByCriteria = 'Platform.ItemAdmin.ItemsByCriteria',
ItemRegiondata = 'Platform.ItemAdmin.ItemRegiondata',
App_ByItemId = 'Platform.ItemAdmin.App_ByItemId',
ItemsBySkuLocale = 'Platform.ItemAdmin.ItemsBySkuLocale',
ItemsItemIdBySku = 'Platform.ItemAdmin.ItemsItemIdBySku',
ItemsLocaleByIds = 'Platform.ItemAdmin.ItemsLocaleByIds',
ItemsItemIdBySkus = 'Platform.ItemAdmin.ItemsItemIdBySkus',
ItemsUncategorized = 'Platform.ItemAdmin.ItemsUncategorized',
ItemsByCriteria_v2 = 'Platform.ItemAdmin.ItemsByCriteria_v2',
ItemsEstimatedPrice = 'Platform.ItemAdmin.ItemsEstimatedPrice',
Enable_ByItemId = 'Platform.ItemAdmin.Enable_ByItemId',
Locale_ByItemId = 'Platform.ItemAdmin.Locale_ByItemId',
Return_ByItemId = 'Platform.ItemAdmin.Return_ByItemId',
ItemsPredicateTypes = 'Platform.ItemAdmin.ItemsPredicateTypes',
Acquire_ByItemId = 'Platform.ItemAdmin.Acquire_ByItemId',
Disable_ByItemId = 'Platform.ItemAdmin.Disable_ByItemId',
Dynamic_ByItemId = 'Platform.ItemAdmin.Dynamic_ByItemId',
ItemsByFeaturesBasic = 'Platform.ItemAdmin.ItemsByFeaturesBasic',
Feature_ByItemId_ByFeature = 'Platform.ItemAdmin.Feature_ByItemId_ByFeature',
PurchaseCondition_ByItemId = 'Platform.ItemAdmin.PurchaseCondition_ByItemId',
ItemPurchaseConditionValidate = 'Platform.ItemAdmin.ItemPurchaseConditionValidate',

}

  

export const useItemAdminApi_GetItemsConfigs = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ItemTypeConfigInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemTypeConfigInfoArray>) => void
  ): UseQueryResult<ItemTypeConfigInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsConfigs>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsConfigs())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemTypeConfigInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsConfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_CreateItemConfig = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemTypeConfigCreate }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemTypeConfigCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ItemTypeConfigCreate }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createItemConfig(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_DeleteItemConfig_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { id:string }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteItemConfig_ById(input.id))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig_ById],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemConfig_ById = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { id:string },
    options?: Omit<UseQueryOptions<ItemTypeConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemTypeConfigInfo>) => void
  ): UseQueryResult<ItemTypeConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemConfig_ById>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemConfig_ById(input.id))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemTypeConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemConfig_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateItemConfig_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ItemTypeConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: ItemTypeConfigUpdate }>, 'mutationKey'>,
    callback?: (data: ItemTypeConfigInfo) => void
  ): UseMutationResult<ItemTypeConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: ItemTypeConfigUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { id:string, data: ItemTypeConfigUpdate }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateItemConfig_ById(input.id, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemConfig_ById],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsConfigsSearch = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {itemType: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', clazz?: string | null} },
    options?: Omit<UseQueryOptions<ItemTypeConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemTypeConfigInfo>) => void
  ): UseQueryResult<ItemTypeConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsConfigsSearch>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsConfigsSearch(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemTypeConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsConfigsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_CreateItem = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemCreate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemCreate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ItemCreate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createItem(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Item],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateItem = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: InGameItemSync, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: InGameItemSync, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: InGameItemSync, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateItem(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Item],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsByIds = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {itemIds: string | null, activeOnly?: boolean | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemInfoArray>) => void
  ): UseQueryResult<FullItemInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsByIds>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsByIds(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsBySku = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {sku: string | null, activeOnly?: boolean | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemInfo>) => void
  ): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsBySku>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsBySku(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsSearch = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {keyword: string | null, language: string | null, activeOnly?: boolean | null, itemType?: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', limit?: number, offset?: number, sortBy?: string | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemPagingSlicedResult>) => void
  ): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsSearch>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsSearch(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsByAppId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {appId: string | null, activeOnly?: boolean | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemInfo>) => void
  ): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsByAppId>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsByAppId(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_DeleteItem_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string,  queryParams?: {force?: boolean | null, storeId?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string,  queryParams?: {force?: boolean | null, storeId?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string,  queryParams?: {force?: boolean | null, storeId?: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteItem_ByItemId(input.itemId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Item_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetItem_ByItemId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { itemId:string,  queryParams?: {activeOnly?: boolean | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullItemInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemInfo>) => void
  ): UseQueryResult<FullItemInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItem_ByItemId>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItem_ByItemId(input.itemId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Item_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateItem_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: ItemUpdate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: ItemUpdate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string, data: ItemUpdate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateItem_ByItemId(input.itemId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Item_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsByCriteria = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null, appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE', availableDate?: string | null, baseAppId?: string | null, categoryPath?: string | null, features?: string | null, includeSubCategoryItem?: boolean | null, itemType?: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', limit?: number, offset?: number, region?: string | null, sortBy?: string[], storeId?: string | null, tags?: string | null, targetNamespace?: string | null} },
    options?: Omit<UseQueryOptions<FullItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemPagingSlicedResult>) => void
  ): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsByCriteria>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsByCriteria(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateItemRegiondata = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkRegionDataChangeRequest, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkRegionDataChangeRequest, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkRegionDataChangeRequest, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateItemRegiondata(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemRegiondata],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetApp_ByItemId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { itemId:string,  queryParams?: {activeOnly?: boolean | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullAppInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullAppInfo>) => void
  ): UseQueryResult<FullAppInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetApp_ByItemId>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getApp_ByItemId(input.itemId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullAppInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.App_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateApp_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullAppInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: AppUpdate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullAppInfo) => void
  ): UseMutationResult<FullAppInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: AppUpdate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string, data: AppUpdate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateApp_ByItemId(input.itemId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.App_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsBySkuLocale = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {sku: string | null, activeOnly?: boolean | null, language?: string | null, populateBundle?: boolean | null, region?: string | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<PopulatedItemInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PopulatedItemInfo>) => void
  ): UseQueryResult<PopulatedItemInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsBySkuLocale>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsBySkuLocale(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PopulatedItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsBySkuLocale, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsItemIdBySku = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {sku: string | null, activeOnly?: boolean | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<ItemId, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemId>) => void
  ): UseQueryResult<ItemId, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsItemIdBySku>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsItemIdBySku(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemId, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsItemIdBySku, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsLocaleByIds = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {itemIds: string | null, activeOnly?: boolean | null, language?: string | null, region?: string | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<ItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemInfoArray>) => void
  ): UseQueryResult<ItemInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsLocaleByIds>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsLocaleByIds(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsLocaleByIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsItemIdBySkus = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {sku?: string[], storeId?: string | null} },
    options?: Omit<UseQueryOptions<ItemIdArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemIdArray>) => void
  ): UseQueryResult<ItemIdArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsItemIdBySkus>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsItemIdBySkus(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemIdArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsItemIdBySkus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsUncategorized = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null, limit?: number, offset?: number, sortBy?: string[], storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemPagingSlicedResult>) => void
  ): UseQueryResult<FullItemPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsUncategorized>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsUncategorized(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsUncategorized, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsByCriteria_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {appType?: 'DEMO' | 'DLC' | 'GAME' | 'SOFTWARE', availableDate?: string | null, baseAppId?: string | null, categoryPath?: string | null, features?: string | null, includeSubCategoryItem?: boolean | null, itemName?: string | null, itemStatus?: 'ACTIVE' | 'INACTIVE', itemType?: string[], limit?: number, offset?: number, region?: string | null, sectionExclusive?: boolean | null, sortBy?: string[], storeId?: string | null, tags?: string | null, targetNamespace?: string | null, withTotal?: boolean | null} },
    options?: Omit<UseQueryOptions<FullItemPagingResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullItemPagingResult>) => void
  ): UseQueryResult<FullItemPagingResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsByCriteria_v2>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsByCriteria_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullItemPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByCriteria_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsEstimatedPrice = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {itemIds: string | null, userId: string | null, platform?: string | null, region?: string | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<EstimatedPriceInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EstimatedPriceInfo>) => void
  ): UseQueryResult<EstimatedPriceInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsEstimatedPrice>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsEstimatedPrice(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EstimatedPriceInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsEstimatedPrice, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateEnable_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string,  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string,  queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string,  queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEnable_ByItemId(input.itemId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Enable_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetLocale_ByItemId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { itemId:string,  queryParams?: {activeOnly?: boolean | null, language?: string | null, populateBundle?: boolean | null, region?: string | null, storeId?: string | null} },
    options?: Omit<UseQueryOptions<PopulatedItemInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PopulatedItemInfo>) => void
  ): UseQueryResult<PopulatedItemInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetLocale_ByItemId>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLocale_ByItemId(input.itemId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PopulatedItemInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Locale_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateReturn_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: ItemReturnRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: ItemReturnRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string, data: ItemReturnRequest }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateReturn_ByItemId(input.itemId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Return_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsPredicateTypes = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<AvailablePredicateArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AvailablePredicateArray>) => void
  ): UseQueryResult<AvailablePredicateArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsPredicateTypes>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsPredicateTypes())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AvailablePredicateArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsPredicateTypes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateAcquire_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ItemAcquireResult, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: ItemAcquireRequest }>, 'mutationKey'>,
    callback?: (data: ItemAcquireResult) => void
  ): UseMutationResult<ItemAcquireResult, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: ItemAcquireRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string, data: ItemAcquireRequest }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAcquire_ByItemId(input.itemId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Acquire_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateDisable_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string,  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string,  queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string,  queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDisable_ByItemId(input.itemId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Disable_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_GetDynamic_ByItemId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { itemId:string },
    options?: Omit<UseQueryOptions<ItemDynamicDataInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ItemDynamicDataInfo>) => void
  ): UseQueryResult<ItemDynamicDataInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetDynamic_ByItemId>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDynamic_ByItemId(input.itemId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ItemDynamicDataInfo, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.Dynamic_ByItemId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_GetItemsByFeaturesBasic = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null, features?: string[]} },
    options?: Omit<UseQueryOptions<BasicItemArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BasicItemArray>) => void
  ): UseQueryResult<BasicItemArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useItemAdminApi_GetItemsByFeaturesBasic>[1]
  ) => async () => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getItemsByFeaturesBasic(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BasicItemArray, AxiosError<ApiError>>({
    queryKey: [Key_ItemAdmin.ItemsByFeaturesBasic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useItemAdminApi_DeleteFeature_ByItemId_ByFeature = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, feature:string,  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, feature:string,  queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string, feature:string,  queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteFeature_ByItemId_ByFeature(input.itemId, input.feature, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_UpdateFeature_ByItemId_ByFeature = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, feature:string,  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, feature:string,  queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string, feature:string,  queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateFeature_ByItemId_ByFeature(input.itemId, input.feature, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.Feature_ByItemId_ByFeature],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_UpdatePurchaseCondition_ByItemId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: PurchaseConditionUpdate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullItemInfo) => void
  ): UseMutationResult<FullItemInfo, AxiosError<ApiError>, SdkSetConfigParam & { itemId:string, data: PurchaseConditionUpdate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { itemId:string, data: PurchaseConditionUpdate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePurchaseCondition_ByItemId(input.itemId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.PurchaseCondition_ByItemId],
    mutationFn,
    ...options
  })
}
  
  

export const useItemAdminApi_CreateItemPurchaseConditionValidate = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ItemPurchaseConditionValidateResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest, queryParams: {userId: string | null, platform?: string | null} }>, 'mutationKey'>,
    callback?: (data: ItemPurchaseConditionValidateResultArray) => void
  ): UseMutationResult<ItemPurchaseConditionValidateResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest, queryParams: {userId: string | null, platform?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ItemPurchaseConditionValidateRequest, queryParams: {userId: string | null, platform?: string | null} }) => {
      const response = 
            (await ItemAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createItemPurchaseConditionValidate(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ItemAdmin.ItemPurchaseConditionValidate],
    mutationFn,
    ...options
  })
}
  
  
  