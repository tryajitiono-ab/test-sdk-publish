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
import { CatalogChangesAdminApi } from "../CatalogChangesAdminApi.js"

import { CatalogChangePagingResult } from '../../generated-definitions/CatalogChangePagingResult.js'
import { CatalogChangeStatistics } from '../../generated-definitions/CatalogChangeStatistics.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'


export enum Key_CatalogChangesAdmin {
  CatalogChangeSelectAll_ByStoreId = 'Platform.CatalogChangesAdmin.CatalogChangeSelectAll_ByStoreId',
CatalogChangesByCriteria_ByStoreId = 'Platform.CatalogChangesAdmin.CatalogChangesByCriteria_ByStoreId',
CatalogChangePublishAll_ByStoreId = 'Platform.CatalogChangesAdmin.CatalogChangePublishAll_ByStoreId',
CatalogChangesStatistics_ByStoreId = 'Platform.CatalogChangesAdmin.CatalogChangesStatistics_ByStoreId',
CatalogChangeUnselectAll_ByStoreId = 'Platform.CatalogChangesAdmin.CatalogChangeUnselectAll_ByStoreId',
CatalogChangePublishSelected_ByStoreId = 'Platform.CatalogChangesAdmin.CatalogChangePublishSelected_ByStoreId',
Select_ByStoreId_ByChangeId = 'Platform.CatalogChangesAdmin.Select_ByStoreId_ByChangeId',
Unselect_ByStoreId_ByChangeId = 'Platform.CatalogChangesAdmin.Unselect_ByStoreId_ByChangeId',
CatalogChangeSelectAllByCriteria_ByStoreId = 'Platform.CatalogChangesAdmin.CatalogChangeSelectAllByCriteria_ByStoreId',

}

  

export const useCatalogChangesAdminApi_UpdateCatalogChangeSelectAll_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string }) => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCatalogChangeSelectAll_ByStoreId(input.storeId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangeSelectAll_ByStoreId],
    mutationFn,
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_GetCatalogChangesByCriteria_ByStoreId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { storeId:string,  queryParams?: {action?: 'CREATE' | 'DELETE' | 'UPDATE', itemSku?: string | null, itemType?: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', limit?: number, offset?: number, selected?: boolean | null, sortBy?: string[], status?: 'PUBLISHED' | 'UNPUBLISHED', type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW', updatedAtEnd?: string | null, updatedAtStart?: string | null, withTotal?: boolean | null} },
    options?: Omit<UseQueryOptions<CatalogChangePagingResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CatalogChangePagingResult>) => void
  ): UseQueryResult<CatalogChangePagingResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCatalogChangesAdminApi_GetCatalogChangesByCriteria_ByStoreId>[1]
  ) => async () => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCatalogChangesByCriteria_ByStoreId(input.storeId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CatalogChangePagingResult, AxiosError<ApiError>>({
    queryKey: [Key_CatalogChangesAdmin.CatalogChangesByCriteria_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_UpdateCatalogChangePublishAll_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }>, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string }) => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCatalogChangePublishAll_ByStoreId(input.storeId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangePublishAll_ByStoreId],
    mutationFn,
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_GetCatalogChangesStatistics_ByStoreId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { storeId:string,  queryParams?: {action?: 'CREATE' | 'DELETE' | 'UPDATE', itemSku?: string | null, itemType?: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW', updatedAtEnd?: string | null, updatedAtStart?: string | null} },
    options?: Omit<UseQueryOptions<CatalogChangeStatistics, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CatalogChangeStatistics>) => void
  ): UseQueryResult<CatalogChangeStatistics, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCatalogChangesAdminApi_GetCatalogChangesStatistics_ByStoreId>[1]
  ) => async () => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCatalogChangesStatistics_ByStoreId(input.storeId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CatalogChangeStatistics, AxiosError<ApiError>>({
    queryKey: [Key_CatalogChangesAdmin.CatalogChangesStatistics_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_UpdateCatalogChangeUnselectAll_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string }) => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCatalogChangeUnselectAll_ByStoreId(input.storeId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangeUnselectAll_ByStoreId],
    mutationFn,
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_UpdateCatalogChangePublishSelected_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }>, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string }) => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCatalogChangePublishSelected_ByStoreId(input.storeId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangePublishSelected_ByStoreId],
    mutationFn,
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_UpdateSelect_ByStoreId_ByChangeId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, changeId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, changeId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string, changeId:string }) => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSelect_ByStoreId_ByChangeId(input.storeId, input.changeId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.Select_ByStoreId_ByChangeId],
    mutationFn,
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_UpdateUnselect_ByStoreId_ByChangeId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, changeId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, changeId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string, changeId:string }) => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUnselect_ByStoreId_ByChangeId(input.storeId, input.changeId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.Unselect_ByStoreId_ByChangeId],
    mutationFn,
    ...options
  })
}
  
  

export const useCatalogChangesAdminApi_UpdateCatalogChangeSelectAllByCriteria_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string,  queryParams?: {action?: 'CREATE' | 'DELETE' | 'UPDATE', itemSku?: string | null, itemType?: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', selected?: boolean | null, type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW', updatedAtEnd?: string | null, updatedAtStart?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string,  queryParams?: {action?: 'CREATE' | 'DELETE' | 'UPDATE', itemSku?: string | null, itemType?: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', selected?: boolean | null, type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW', updatedAtEnd?: string | null, updatedAtStart?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string,  queryParams?: {action?: 'CREATE' | 'DELETE' | 'UPDATE', itemSku?: string | null, itemType?: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', selected?: boolean | null, type?: 'CATEGORY' | 'ITEM' | 'SECTION' | 'STORE' | 'VIEW', updatedAtEnd?: string | null, updatedAtStart?: string | null} }) => {
      const response = 
            (await CatalogChangesAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCatalogChangeSelectAllByCriteria_ByStoreId(input.storeId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CatalogChangesAdmin.CatalogChangeSelectAllByCriteria_ByStoreId],
    mutationFn,
    ...options
  })
}
  
  
  