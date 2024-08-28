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
import { PluginsAdminApi } from "../PluginsAdminApi.js"

import { PluginAssignmentRequest } from '../../generated-definitions/PluginAssignmentRequest.js'
import { PluginAssignmentResponse } from '../../generated-definitions/PluginAssignmentResponse.js'


export enum Key_PluginsAdmin {
  PluginAssignment = 'Challenge.PluginsAdmin.PluginAssignment',
PluginsAssignment = 'Challenge.PluginsAdmin.PluginsAssignment',

}

  

export const usePluginsAdminApi_DeletePluginAssignment = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await PluginsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePluginAssignment())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PluginsAdmin.PluginAssignment],
    mutationFn,
    ...options
  })
}
  
  

export const usePluginsAdminApi_GetPluginsAssignment = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PluginAssignmentResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PluginAssignmentResponse>) => void
  ): UseQueryResult<PluginAssignmentResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePluginsAdminApi_GetPluginsAssignment>[1]
  ) => async () => {
      const response = 
            (await PluginsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPluginsAssignment())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PluginAssignmentResponse, AxiosError<ApiError>>({
    queryKey: [Key_PluginsAdmin.PluginsAssignment, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePluginsAdminApi_CreatePluginAssignment = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PluginAssignmentResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginAssignmentRequest }>, 'mutationKey'>,
    callback?: (data: PluginAssignmentResponse) => void
  ): UseMutationResult<PluginAssignmentResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginAssignmentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PluginAssignmentRequest }) => {
      const response = 
            (await PluginsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPluginAssignment(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PluginsAdmin.PluginAssignment],
    mutationFn,
    ...options
  })
}
  
  

export const usePluginsAdminApi_UpdatePluginAssignment = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PluginAssignmentResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginAssignmentRequest }>, 'mutationKey'>,
    callback?: (data: PluginAssignmentResponse) => void
  ): UseMutationResult<PluginAssignmentResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: PluginAssignmentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PluginAssignmentRequest }) => {
      const response = 
            (await PluginsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePluginAssignment(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PluginsAdmin.PluginAssignment],
    mutationFn,
    ...options
  })
}
  
  
  