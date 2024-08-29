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
import { InventoryConfigurationsAdminApi } from "../InventoryConfigurationsAdminApi.js"

import { CreateInventoryConfigurationReq } from '../../generated-definitions/CreateInventoryConfigurationReq.js'
import { InventoryConfigurationReq } from '../../generated-definitions/InventoryConfigurationReq.js'
import { InventoryConfigurationResp } from '../../generated-definitions/InventoryConfigurationResp.js'
import { ListInventoryConfigurationsResp } from '../../generated-definitions/ListInventoryConfigurationsResp.js'


export enum Key_InventoryConfigurationsAdmin {
  InventoryConfigurations = 'Inventory.InventoryConfigurationsAdmin.InventoryConfigurations',
InventoryConfiguration = 'Inventory.InventoryConfigurationsAdmin.InventoryConfiguration',
InventoryConfiguration_ByInventoryConfigurationId = 'Inventory.InventoryConfigurationsAdmin.InventoryConfiguration_ByInventoryConfigurationId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InventoryConfigurationsAdmin.InventoryConfigurations, input]
 * }
 * ```
 */
export const useInventoryConfigurationsAdminApi_GetInventoryConfigurations = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {code?: string | null, limit?: number, offset?: number, sortBy?: 'code' | 'code:asc' | 'code:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'} },
    options?: Omit<UseQueryOptions<ListInventoryConfigurationsResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListInventoryConfigurationsResp>) => void
  ): UseQueryResult<ListInventoryConfigurationsResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useInventoryConfigurationsAdminApi_GetInventoryConfigurations>[1]
  ) => async () => {
      const response = 
            (await InventoryConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInventoryConfigurations(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListInventoryConfigurationsResp, AxiosError<ApiError>>({
    queryKey: [Key_InventoryConfigurationsAdmin.InventoryConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useInventoryConfigurationsAdminApi_CreateInventoryConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InventoryConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateInventoryConfigurationReq }>, 'mutationKey'>,
    callback?: (data: InventoryConfigurationResp) => void
  ): UseMutationResult<InventoryConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateInventoryConfigurationReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateInventoryConfigurationReq }) => {
      const response = 
            (await InventoryConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInventoryConfiguration(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoryConfigurationsAdmin.InventoryConfiguration],
    mutationFn,
    ...options
  })
}
  
  

export const useInventoryConfigurationsAdminApi_DeleteInventoryConfiguration_ByInventoryConfigurationId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { inventoryConfigurationId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { inventoryConfigurationId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { inventoryConfigurationId:string }) => {
      const response = 
            (await InventoryConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteInventoryConfiguration_ByInventoryConfigurationId(input.inventoryConfigurationId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoryConfigurationsAdmin.InventoryConfiguration_ByInventoryConfigurationId],
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
 *    queryKey: [Key_InventoryConfigurationsAdmin.InventoryConfiguration_ByInventoryConfigurationId, input]
 * }
 * ```
 */
export const useInventoryConfigurationsAdminApi_GetInventoryConfiguration_ByInventoryConfigurationId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { inventoryConfigurationId:string },
    options?: Omit<UseQueryOptions<InventoryConfigurationResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<InventoryConfigurationResp>) => void
  ): UseQueryResult<InventoryConfigurationResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useInventoryConfigurationsAdminApi_GetInventoryConfiguration_ByInventoryConfigurationId>[1]
  ) => async () => {
      const response = 
            (await InventoryConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInventoryConfiguration_ByInventoryConfigurationId(input.inventoryConfigurationId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<InventoryConfigurationResp, AxiosError<ApiError>>({
    queryKey: [Key_InventoryConfigurationsAdmin.InventoryConfiguration_ByInventoryConfigurationId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useInventoryConfigurationsAdminApi_UpdateInventoryConfiguration_ByInventoryConfigurationId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InventoryConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryConfigurationId:string, data: InventoryConfigurationReq }>, 'mutationKey'>,
    callback?: (data: InventoryConfigurationResp) => void
  ): UseMutationResult<InventoryConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { inventoryConfigurationId:string, data: InventoryConfigurationReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { inventoryConfigurationId:string, data: InventoryConfigurationReq }) => {
      const response = 
            (await InventoryConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateInventoryConfiguration_ByInventoryConfigurationId(input.inventoryConfigurationId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InventoryConfigurationsAdmin.InventoryConfiguration_ByInventoryConfigurationId],
    mutationFn,
    ...options
  })
}
  
  
  