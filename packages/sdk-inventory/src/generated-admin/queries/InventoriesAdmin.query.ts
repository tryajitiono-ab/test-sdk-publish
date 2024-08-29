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
import { InventoriesAdminApi } from "../InventoriesAdminApi.js"

import { CreateInventoryReq } from '../../generated-definitions/CreateInventoryReq.js'
import { DeleteInventoryReq } from '../../generated-definitions/DeleteInventoryReq.js'
import { InventoryResp } from '../../generated-definitions/InventoryResp.js'
import { InventoryRespArray } from '../../generated-definitions/InventoryRespArray.js'
import { ListInventoryResp } from '../../generated-definitions/ListInventoryResp.js'
import { PurchaseValidationReq } from '../../generated-definitions/PurchaseValidationReq.js'
import { UpdateInventoryReq } from '../../generated-definitions/UpdateInventoryReq.js'


export enum Key_InventoriesAdmin {
  Inventories = 'Inventory.InventoriesAdmin.Inventories',
Inventory = 'Inventory.InventoriesAdmin.Inventory',
Inventory_ByInventoryId = 'Inventory.InventoriesAdmin.Inventory_ByInventoryId',
Purchaseable_ByUserId = 'Inventory.InventoriesAdmin.Purchaseable_ByUserId',
Inventory_ByUserId_ByInventoryConfigurationCode = 'Inventory.InventoriesAdmin.Inventory_ByUserId_ByInventoryConfigurationCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InventoriesAdmin.Inventories, input]
 * }
 * ```
 */
export const useInventoriesAdminApi_GetInventories = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {inventoryConfigurationCode?: string | null, limit?: number, offset?: number, sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'inventoryConfigurationCode' | 'inventoryConfigurationCode:asc' | 'inventoryConfigurationCode:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc', userId?: string | null} },
    options?: Omit<UseQueryOptions<ListInventoryResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListInventoryResp>) => void
  ): UseQueryResult<ListInventoryResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useInventoriesAdminApi_GetInventories>[1]
  ) => async () => {
      const response = 
            (await InventoriesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInventories(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListInventoryResp, AxiosError<ApiError>>({
    queryKey: [Key_InventoriesAdmin.Inventories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useInventoriesAdminApi_CreateInventory = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InventoryResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateInventoryReq }>, 'mutationKey'>,
    callback?: (data: InventoryResp) => void
  ): UseMutationResult<InventoryResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateInventoryReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateInventoryReq }) => {
      const response = 
            (await InventoriesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInventory(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoriesAdmin.Inventory],
    mutationFn,
    ...options
  })
}
  
  

export const useInventoriesAdminApi_DeleteInventory_ByInventoryId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId:string, data: DeleteInventoryReq }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId:string, data: DeleteInventoryReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { inventoryId:string, data: DeleteInventoryReq }) => {
      const response = 
            (await InventoriesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteInventory_ByInventoryId(input.inventoryId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoriesAdmin.Inventory_ByInventoryId],
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
 *    queryKey: [Key_InventoriesAdmin.Inventory_ByInventoryId, input]
 * }
 * ```
 */
export const useInventoriesAdminApi_GetInventory_ByInventoryId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { inventoryId:string },
    options?: Omit<UseQueryOptions<InventoryResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<InventoryResp>) => void
  ): UseQueryResult<InventoryResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useInventoriesAdminApi_GetInventory_ByInventoryId>[1]
  ) => async () => {
      const response = 
            (await InventoriesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInventory_ByInventoryId(input.inventoryId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<InventoryResp, AxiosError<ApiError>>({
    queryKey: [Key_InventoriesAdmin.Inventory_ByInventoryId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useInventoriesAdminApi_UpdateInventory_ByInventoryId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InventoryResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId:string, data: UpdateInventoryReq }>, 'mutationKey'>,
    callback?: (data: InventoryResp) => void
  ): UseMutationResult<InventoryResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryId:string, data: UpdateInventoryReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { inventoryId:string, data: UpdateInventoryReq }) => {
      const response = 
            (await InventoriesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateInventory_ByInventoryId(input.inventoryId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoriesAdmin.Inventory_ByInventoryId],
    mutationFn,
    ...options
  })
}
  
  

export const useInventoriesAdminApi_CreatePurchaseable_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PurchaseValidationReq }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PurchaseValidationReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: PurchaseValidationReq }) => {
      const response = 
            (await InventoriesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPurchaseable_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoriesAdmin.Purchaseable_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useInventoriesAdminApi_UpdateInventory_ByUserId_ByInventoryConfigurationCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InventoryRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryConfigurationCode:string, data: UpdateInventoryReq }>, 'mutationKey'>,
    callback?: (data: InventoryRespArray) => void
  ): UseMutationResult<InventoryRespArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, inventoryConfigurationCode:string, data: UpdateInventoryReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, inventoryConfigurationCode:string, data: UpdateInventoryReq }) => {
      const response = 
            (await InventoriesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateInventory_ByUserId_ByInventoryConfigurationCode(input.userId, input.inventoryConfigurationCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoriesAdmin.Inventory_ByUserId_ByInventoryConfigurationCode],
    mutationFn,
    ...options
  })
}
  
  
  