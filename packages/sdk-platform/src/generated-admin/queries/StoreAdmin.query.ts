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
import { StoreAdminApi } from "../StoreAdminApi.js"

import { CatalogConfigInfo } from '../../generated-definitions/CatalogConfigInfo.js'
import { CatalogConfigUpdate } from '../../generated-definitions/CatalogConfigUpdate.js'
import { CatalogDefinitionInfoArray } from '../../generated-definitions/CatalogDefinitionInfoArray.js'
import { ExportStoreRequest } from '../../generated-definitions/ExportStoreRequest.js'
import { ExportStoreToCsvRequest } from '../../generated-definitions/ExportStoreToCsvRequest.js'
import { ImportStoreHistoryPagingResult } from '../../generated-definitions/ImportStoreHistoryPagingResult.js'
import { ImportStoreResult } from '../../generated-definitions/ImportStoreResult.js'
import { StoreBackupInfo } from '../../generated-definitions/StoreBackupInfo.js'
import { StoreCreate } from '../../generated-definitions/StoreCreate.js'
import { StoreInfo } from '../../generated-definitions/StoreInfo.js'
import { StoreInfoArray } from '../../generated-definitions/StoreInfoArray.js'
import { StoreUpdate } from '../../generated-definitions/StoreUpdate.js'


export enum Key_StoreAdmin {
  Stores = 'Platform.StoreAdmin.Stores',
Store = 'Platform.StoreAdmin.Store',
StoreImport = 'Platform.StoreAdmin.StoreImport',
CatalogConfigs = 'Platform.StoreAdmin.CatalogConfigs',
CatalogConfig = 'Platform.StoreAdmin.CatalogConfig',
Store_ByStoreId = 'Platform.StoreAdmin.Store_ByStoreId',
StorePublished = 'Platform.StoreAdmin.StorePublished',
StoresPublished = 'Platform.StoreAdmin.StoresPublished',
StoreImport_v2 = 'Platform.StoreAdmin.StoreImport_v2',
StoreExportByCsv = 'Platform.StoreAdmin.StoreExportByCsv',
Clone_ByStoreId = 'Platform.StoreAdmin.Clone_ByStoreId',
Export_ByStoreId = 'Platform.StoreAdmin.Export_ByStoreId',
StoresPublishedBackup = 'Platform.StoreAdmin.StoresPublishedBackup',
StoresCatalogDefinition = 'Platform.StoreAdmin.StoresCatalogDefinition',
StorePublishedRollback = 'Platform.StoreAdmin.StorePublishedRollback',
Export_ByStoreId_v2 = 'Platform.StoreAdmin.Export_ByStoreId_v2',
StoresDownloadCsvTemplates = 'Platform.StoreAdmin.StoresDownloadCsvTemplates',
ImportByCsv_ByStoreId = 'Platform.StoreAdmin.ImportByCsv_ByStoreId',
ImportHistory_ByStoreId = 'Platform.StoreAdmin.ImportHistory_ByStoreId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.Stores, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStores = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<StoreInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StoreInfoArray>) => void
  ): UseQueryResult<StoreInfoArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetStores>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStores())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StoreInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Stores, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStoreAdminApi_CreateStore = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StoreCreate }>, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StoreCreate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: StoreCreate }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStore(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.Store],
    mutationFn,
    ...options
  })
}
  
  

export const useStoreAdminApi_UpdateStoreImport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {storeId?: string | null} }>, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {storeId?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File}, queryParams?: {storeId?: string | null} }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStoreImport(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreImport],
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
 *    queryKey: [Key_StoreAdmin.CatalogConfigs, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetCatalogConfigs = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<CatalogConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CatalogConfigInfo>) => void
  ): UseQueryResult<CatalogConfigInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetCatalogConfigs>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCatalogConfigs())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CatalogConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.CatalogConfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStoreAdminApi_UpdateCatalogConfig = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CatalogConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CatalogConfigUpdate }>, 'mutationKey'>,
    callback?: (data: CatalogConfigInfo) => void
  ): UseMutationResult<CatalogConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CatalogConfigUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CatalogConfigUpdate }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCatalogConfig(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.CatalogConfig],
    mutationFn,
    ...options
  })
}
  
  

export const useStoreAdminApi_DeleteStore_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }>, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteStore_ByStoreId(input.storeId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.Store_ByStoreId],
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
 *    queryKey: [Key_StoreAdmin.Store_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStore_ByStoreId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { storeId:string },
    options?: Omit<UseQueryOptions<StoreInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StoreInfo>) => void
  ): UseQueryResult<StoreInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetStore_ByStoreId>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStore_ByStoreId(input.storeId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StoreInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Store_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStoreAdminApi_UpdateStore_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, data: StoreUpdate }>, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, data: StoreUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string, data: StoreUpdate }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStore_ByStoreId(input.storeId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.Store_ByStoreId],
    mutationFn,
    ...options
  })
}
  
  

export const useStoreAdminApi_DeleteStorePublished = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteStorePublished())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.StorePublished],
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
 *    queryKey: [Key_StoreAdmin.StoresPublished, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresPublished = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<StoreInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StoreInfo>) => void
  ): UseQueryResult<StoreInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetStoresPublished>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStoresPublished())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StoreInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresPublished, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStoreAdminApi_UpdateStoreImport_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ImportStoreResult, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {storeId?: string | null, strictMode?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: ImportStoreResult) => void
  ): UseMutationResult<ImportStoreResult, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {storeId?: string | null, strictMode?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File}, queryParams?: {storeId?: string | null, strictMode?: boolean | null} }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStoreImport_v2(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreImport_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useStoreAdminApi_CreateStoreExportByCsv = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ExportStoreToCsvRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ExportStoreToCsvRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ExportStoreToCsvRequest }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStoreExportByCsv(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.StoreExportByCsv],
    mutationFn,
    ...options
  })
}
  
  

export const useStoreAdminApi_UpdateClone_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string,  queryParams?: {targetStoreId?: string | null} }>, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string,  queryParams?: {targetStoreId?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string,  queryParams?: {targetStoreId?: string | null} }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateClone_ByStoreId(input.storeId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.Clone_ByStoreId],
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
 *    queryKey: [Key_StoreAdmin.Export_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetExport_ByStoreId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { storeId:string },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetExport_ByStoreId>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getExport_ByStoreId(input.storeId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.Export_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoresPublishedBackup, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresPublishedBackup = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<StoreBackupInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StoreBackupInfo>) => void
  ): UseQueryResult<StoreBackupInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetStoresPublishedBackup>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStoresPublishedBackup())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StoreBackupInfo, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresPublishedBackup, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_StoreAdmin.StoresCatalogDefinition, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresCatalogDefinition = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {catalogType: 'APP' | 'CATEGORY' | 'ITEM' | 'SECTION' | 'VIEW'} },
    options?: Omit<UseQueryOptions<CatalogDefinitionInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CatalogDefinitionInfoArray>) => void
  ): UseQueryResult<CatalogDefinitionInfoArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetStoresCatalogDefinition>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStoresCatalogDefinition(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CatalogDefinitionInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresCatalogDefinition, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStoreAdminApi_UpdateStorePublishedRollback = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: StoreInfo) => void
  ): UseMutationResult<StoreInfo, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStorePublishedRollback())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.StorePublishedRollback],
    mutationFn,
    ...options
  })
}
  
  

export const useStoreAdminApi_CreateExport_ByStoreId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, data: ExportStoreRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, data: ExportStoreRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string, data: ExportStoreRequest }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createExport_ByStoreId_v2(input.storeId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.Export_ByStoreId_v2],
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
 *    queryKey: [Key_StoreAdmin.StoresDownloadCsvTemplates, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetStoresDownloadCsvTemplates = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetStoresDownloadCsvTemplates>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStoresDownloadCsvTemplates())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.StoresDownloadCsvTemplates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStoreAdminApi_CreateImportByCsv_ByStoreId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ImportStoreResult, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, data: {category: File,display: File,item: File,notes: string | null,section: File} }>, 'mutationKey'>,
    callback?: (data: ImportStoreResult) => void
  ): UseMutationResult<ImportStoreResult, AxiosError<ApiError>, SdkSetConfigParam & { storeId:string, data: {category: File,display: File,item: File,notes: string | null,section: File} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { storeId:string, data: {category: File,display: File,item: File,notes: string | null,section: File} }) => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createImportByCsv_ByStoreId(input.storeId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StoreAdmin.ImportByCsv_ByStoreId],
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
 *    queryKey: [Key_StoreAdmin.ImportHistory_ByStoreId, input]
 * }
 * ```
 */
export const useStoreAdminApi_GetImportHistory_ByStoreId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { storeId:string,  queryParams?: {end?: string | null, limit?: number, offset?: number, sortBy?: string | null, start?: string | null, success?: boolean | null} },
    options?: Omit<UseQueryOptions<ImportStoreHistoryPagingResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ImportStoreHistoryPagingResult>) => void
  ): UseQueryResult<ImportStoreHistoryPagingResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreAdminApi_GetImportHistory_ByStoreId>[1]
  ) => async () => {
      const response = 
            (await StoreAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getImportHistory_ByStoreId(input.storeId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ImportStoreHistoryPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_StoreAdmin.ImportHistory_ByStoreId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  