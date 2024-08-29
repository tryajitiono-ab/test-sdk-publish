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
import { ConfigurationAdminApi } from "../ConfigurationAdminApi.js"

import { CreateGroupConfigurationRequestV1 } from '../../generated-definitions/CreateGroupConfigurationRequestV1.js'
import { CreateGroupConfigurationResponseV1 } from '../../generated-definitions/CreateGroupConfigurationResponseV1.js'
import { GetGroupConfigurationResponseV1 } from '../../generated-definitions/GetGroupConfigurationResponseV1.js'
import { ListConfigurationResponseV1 } from '../../generated-definitions/ListConfigurationResponseV1.js'
import { UpdateGroupConfigurationGlobalRulesRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationGlobalRulesRequestV1.js'
import { UpdateGroupConfigurationRequestV1 } from '../../generated-definitions/UpdateGroupConfigurationRequestV1.js'
import { UpdateGroupConfigurationResponseV1 } from '../../generated-definitions/UpdateGroupConfigurationResponseV1.js'


export enum Key_ConfigurationAdmin {
  Configuration = 'Groups.ConfigurationAdmin.Configuration',
ConfigurationInitiate = 'Groups.ConfigurationAdmin.ConfigurationInitiate',
Configuration_ByConfigurationCode = 'Groups.ConfigurationAdmin.Configuration_ByConfigurationCode',
Rule_ByConfigurationCode_ByAllowedAction = 'Groups.ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ConfigurationAdmin.Configuration, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetConfiguration = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<ListConfigurationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListConfigurationResponseV1>) => void
  ): UseQueryResult<ListConfigurationResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigurationAdminApi_GetConfiguration>[1]
  ) => async () => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfiguration(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListConfigurationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Configuration, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigurationAdminApi_CreateConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateGroupConfigurationRequestV1 }>, 'mutationKey'>,
    callback?: (data: CreateGroupConfigurationResponseV1) => void
  ): UseMutationResult<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateGroupConfigurationRequestV1 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateGroupConfigurationRequestV1 }) => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConfiguration(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationAdminApi_CreateConfigurationInitiate = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: CreateGroupConfigurationResponseV1) => void
  ): UseMutationResult<CreateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConfigurationInitiate())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.ConfigurationInitiate],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationAdminApi_DeleteConfiguration_ByConfigurationCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { configurationCode:string }) => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteConfiguration_ByConfigurationCode(input.configurationCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode],
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
 *    queryKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode, input]
 * }
 * ```
 */
export const useConfigurationAdminApi_GetConfiguration_ByConfigurationCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { configurationCode:string },
    options?: Omit<UseQueryOptions<GetGroupConfigurationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetGroupConfigurationResponseV1>) => void
  ): UseQueryResult<GetGroupConfigurationResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigurationAdminApi_GetConfiguration_ByConfigurationCode>[1]
  ) => async () => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfiguration_ByConfigurationCode(input.configurationCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetGroupConfigurationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigurationAdminApi_PatchConfiguration_ByConfigurationCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string, data: UpdateGroupConfigurationRequestV1 }>, 'mutationKey'>,
    callback?: (data: UpdateGroupConfigurationResponseV1) => void
  ): UseMutationResult<UpdateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string, data: UpdateGroupConfigurationRequestV1 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { configurationCode:string, data: UpdateGroupConfigurationRequestV1 }) => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchConfiguration_ByConfigurationCode(input.configurationCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Configuration_ByConfigurationCode],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationAdminApi_DeleteRule_ByConfigurationCode_ByAllowedAction = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string, allowedAction:string }>, 'mutationKey'>,
    callback?: (data: UpdateGroupConfigurationResponseV1) => void
  ): UseMutationResult<UpdateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string, allowedAction:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { configurationCode:string, allowedAction:string }) => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRule_ByConfigurationCode_ByAllowedAction(input.configurationCode, input.allowedAction))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationAdminApi_UpdateRule_ByConfigurationCode_ByAllowedAction = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string, allowedAction:string, data: UpdateGroupConfigurationGlobalRulesRequestV1 }>, 'mutationKey'>,
    callback?: (data: UpdateGroupConfigurationResponseV1) => void
  ): UseMutationResult<UpdateGroupConfigurationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { configurationCode:string, allowedAction:string, data: UpdateGroupConfigurationGlobalRulesRequestV1 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { configurationCode:string, allowedAction:string, data: UpdateGroupConfigurationGlobalRulesRequestV1 }) => {
      const response = 
            (await ConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRule_ByConfigurationCode_ByAllowedAction(input.configurationCode, input.allowedAction, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationAdmin.Rule_ByConfigurationCode_ByAllowedAction],
    mutationFn,
    ...options
  })
}
  
  
  