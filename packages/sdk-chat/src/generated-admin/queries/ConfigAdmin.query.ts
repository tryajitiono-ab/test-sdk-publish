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

import { ConfigExportArray } from '../../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../../generated-definitions/ConfigResponse.js'
import { Configuration } from '../../generated-definitions/Configuration.js'
import { ImportConfigResponse } from '../../generated-definitions/ImportConfigResponse.js'


export enum Key_ConfigAdmin {
  Config = 'Chat.ConfigAdmin.Config',
ConfigLog = 'Chat.ConfigAdmin.ConfigLog',
Config_ByNamespace = 'Chat.ConfigAdmin.Config_ByNamespace',
ConfigExport = 'Chat.ConfigAdmin.ConfigExport',
ConfigImport = 'Chat.ConfigAdmin.ConfigImport',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigAdmin.Config, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfig = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ConfigList, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ConfigList>) => void
  ): UseQueryResult<ConfigList, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigAdminApi_GetConfig>[1]
  ) => async () => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfig())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ConfigList, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config, input],
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
 *    queryKey: [Key_ConfigAdmin.ConfigLog, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigLog = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<Configuration, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<Configuration>) => void
  ): UseQueryResult<Configuration, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigAdminApi_GetConfigLog>[1]
  ) => async () => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigLog())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<Configuration, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigLog, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigAdminApi_PatchConfigLog = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Configuration, AxiosError<ApiError>, SdkSetConfigParam & { data: Configuration }>, 'mutationKey'>,
    callback?: (data: Configuration) => void
  ): UseMutationResult<Configuration, AxiosError<ApiError>, SdkSetConfigParam & { data: Configuration }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: Configuration }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchConfigLog(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigLog],
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
 *    queryKey: [Key_ConfigAdmin.Config_ByNamespace, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfig_ByNamespace = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ConfigResponse>) => void
  ): UseQueryResult<ConfigResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigAdminApi_GetConfig_ByNamespace>[1]
  ) => async () => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfig_ByNamespace())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.Config_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigAdminApi_UpdateConfig_ByNamespace = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigResponse }>, 'mutationKey'>,
    callback?: (data: ConfigResponse) => void
  ): UseMutationResult<ConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigResponse }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigResponse }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConfig_ByNamespace(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.Config_ByNamespace],
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
 *    queryKey: [Key_ConfigAdmin.ConfigExport, input]
 * }
 * ```
 */
export const useConfigAdminApi_GetConfigExport = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ConfigExportArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ConfigExportArray>) => void
  ): UseQueryResult<ConfigExportArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigAdminApi_GetConfigExport>[1]
  ) => async () => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigExport())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ConfigExportArray, AxiosError<ApiError>>({
    queryKey: [Key_ConfigAdmin.ConfigExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigAdminApi_UpdateConfigImport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ImportConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File} }>, 'mutationKey'>,
    callback?: (data: ImportConfigResponse) => void
  ): UseMutationResult<ImportConfigResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File} }) => {
      const response = 
            (await ConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConfigImport(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigAdmin.ConfigImport],
    mutationFn,
    ...options
  })
}
  
  
  