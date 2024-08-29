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
import { ConfigAdminApi } from "../ConfigAdminApi.js"

import { CreateDsmConfigRequest } from '../../generated-definitions/CreateDsmConfigRequest.js'
import { CreatePortRequest } from '../../generated-definitions/CreatePortRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { ImportResponse } from '../../generated-definitions/ImportResponse.js'
import { ListConfigResponse } from '../../generated-definitions/ListConfigResponse.js'
import { UpdateDsmConfigRequest } from '../../generated-definitions/UpdateDsmConfigRequest.js'
import { UpdatePortRequest } from '../../generated-definitions/UpdatePortRequest.js'


export enum Key_ConfigAdmin {
  Configs = 'Dsmcontroller.ConfigAdmin.Configs',
Config = 'Dsmcontroller.ConfigAdmin.Config',
Configs_ByNS = 'Dsmcontroller.ConfigAdmin.Configs_ByNS',
Config_ByNS = 'Dsmcontroller.ConfigAdmin.Config_ByNS',
ConfigCache = 'Dsmcontroller.ConfigAdmin.ConfigCache',
ConfigsExport = 'Dsmcontroller.ConfigAdmin.ConfigsExport',
ConfigImport = 'Dsmcontroller.ConfigAdmin.ConfigImport',
ConfigPort_ByName = 'Dsmcontroller.ConfigAdmin.ConfigPort_ByName',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Configs, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigs = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ListConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListConfigResponse>) => void
  ): UseQueryResult<ListConfigResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigAdminApi_GetConfigs>[1]
  ) => async () => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigs())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Configs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigAdminApi_CreateConfig = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsmConfigRecord }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsmConfigRecord }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: DsmConfigRecord }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConfig(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigAdminApi_DeleteConfig = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteConfig())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
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
 *    queryKey: [Key_ConfigAdmin.Configs_ByNS, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigs_ByNS = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DsmConfigRecord>) => void
  ): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigAdminApi_GetConfigs_ByNS>[1]
  ) => async () => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigs_ByNS())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Configs_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigAdminApi_PatchConfig = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateDsmConfigRequest }>, 'mutationKey'>,
    callback?: (data: DsmConfigRecord) => void
  ): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateDsmConfigRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UpdateDsmConfigRequest }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchConfig(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigAdminApi_CreateConfig_ByNS = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDsmConfigRequest }>, 'mutationKey'>,
    callback?: (data: DsmConfigRecord) => void
  ): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDsmConfigRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateDsmConfigRequest }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConfig_ByNS(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByNS],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigAdminApi_DeleteConfigCache = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteConfigCache())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigCache],
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
 *    queryKey: [Key_ConfigAdmin.ConfigsExport, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigsExport = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigAdminApi_GetConfigsExport>[1]
  ) => async () => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigsExport())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigAdminApi_CreateConfigImport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ImportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File} }>, 'mutationKey'>,
    callback?: (data: ImportResponse) => void
  ): UseMutationResult<ImportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File} }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConfigImport(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigImport],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigAdminApi_DeleteConfigPort_ByName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name:string }>, 'mutationKey'>,
    callback?: (data: DsmConfigRecord) => void
  ): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { name:string }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteConfigPort_ByName(input.name))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigAdminApi_PatchConfigPort_ByName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: UpdatePortRequest }>, 'mutationKey'>,
    callback?: (data: DsmConfigRecord) => void
  ): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: UpdatePortRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { name:string, data: UpdatePortRequest }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchConfigPort_ByName(input.name, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigAdminApi_CreateConfigPort_ByName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: CreatePortRequest }>, 'mutationKey'>,
    callback?: (data: DsmConfigRecord) => void
  ): UseMutationResult<DsmConfigRecord, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: CreatePortRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { name:string, data: CreatePortRequest }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConfigPort_ByName(input.name, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigPort_ByName],
    mutationFn,
    ...options
  })
}
  
  
  