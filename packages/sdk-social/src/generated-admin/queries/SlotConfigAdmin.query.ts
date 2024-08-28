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
import { SlotConfigAdminApi } from "../SlotConfigAdminApi.js"

import { NamespaceSlotConfigInfo } from '../../generated-definitions/NamespaceSlotConfigInfo.js'
import { SlotConfigUpdate } from '../../generated-definitions/SlotConfigUpdate.js'
import { UserSlotConfigInfo } from '../../generated-definitions/UserSlotConfigInfo.js'


export enum Key_SlotConfigAdmin {
  Config = 'Social.SlotConfigAdmin.Config',
Config_ByUserId = 'Social.SlotConfigAdmin.Config_ByUserId',

}

  

export const useSlotConfigAdminApi_DeleteConfig = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteConfig())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config],
    mutationFn,
    ...options
  })
}
  
  

export const useSlotConfigAdminApi_GetConfig = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<NamespaceSlotConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceSlotConfigInfo>) => void
  ): UseQueryResult<NamespaceSlotConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSlotConfigAdminApi_GetConfig>[1]
  ) => async () => {
      const response = 
            (await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfig())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceSlotConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_SlotConfigAdmin.Config, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSlotConfigAdminApi_UpdateConfig = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<NamespaceSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SlotConfigUpdate }>, 'mutationKey'>,
    callback?: (data: NamespaceSlotConfigInfo) => void
  ): UseMutationResult<NamespaceSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SlotConfigUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: SlotConfigUpdate }) => {
      const response = 
            (await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConfig(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config],
    mutationFn,
    ...options
  })
}
  
  

export const useSlotConfigAdminApi_DeleteConfig_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteConfig_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useSlotConfigAdminApi_GetConfig_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserSlotConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserSlotConfigInfo>) => void
  ): UseQueryResult<UserSlotConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSlotConfigAdminApi_GetConfig_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfig_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserSlotConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_SlotConfigAdmin.Config_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSlotConfigAdminApi_UpdateConfig_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SlotConfigUpdate }>, 'mutationKey'>,
    callback?: (data: UserSlotConfigInfo) => void
  ): UseMutationResult<UserSlotConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SlotConfigUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SlotConfigUpdate }) => {
      const response = 
            (await SlotConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConfig_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SlotConfigAdmin.Config_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  