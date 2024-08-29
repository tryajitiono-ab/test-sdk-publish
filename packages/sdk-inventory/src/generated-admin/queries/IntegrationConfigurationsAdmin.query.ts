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
import { IntegrationConfigurationsAdminApi } from "../IntegrationConfigurationsAdminApi.js"

import { CreateIntegrationConfigurationReq } from '../../generated-definitions/CreateIntegrationConfigurationReq.js'
import { IntegrationConfigurationResp } from '../../generated-definitions/IntegrationConfigurationResp.js'
import { ListIntegrationConfigurationsResp } from '../../generated-definitions/ListIntegrationConfigurationsResp.js'
import { UpdateIntegrationConfigurationReq } from '../../generated-definitions/UpdateIntegrationConfigurationReq.js'
import { UpdateStatusIntegrationConfigurationReq } from '../../generated-definitions/UpdateStatusIntegrationConfigurationReq.js'


export enum Key_IntegrationConfigurationsAdmin {
  IntegrationConfigurations = 'Inventory.IntegrationConfigurationsAdmin.IntegrationConfigurations',
IntegrationConfiguration = 'Inventory.IntegrationConfigurationsAdmin.IntegrationConfiguration',
IntegrationConfiguration_ByIntegrationConfigurationId = 'Inventory.IntegrationConfigurationsAdmin.IntegrationConfiguration_ByIntegrationConfigurationId',
Status_ByIntegrationConfigurationId = 'Inventory.IntegrationConfigurationsAdmin.Status_ByIntegrationConfigurationId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfigurations, input]
 * }
 * ```
 */
export const useIntegrationConfigurationsAdminApi_GetIntegrationConfigurations = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc'} },
    options?: Omit<UseQueryOptions<ListIntegrationConfigurationsResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListIntegrationConfigurationsResp>) => void
  ): UseQueryResult<ListIntegrationConfigurationsResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIntegrationConfigurationsAdminApi_GetIntegrationConfigurations>[1]
  ) => async () => {
      const response = 
            (await IntegrationConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIntegrationConfigurations(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListIntegrationConfigurationsResp, AxiosError<ApiError>>({
    queryKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIntegrationConfigurationsAdminApi_CreateIntegrationConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<IntegrationConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateIntegrationConfigurationReq }>, 'mutationKey'>,
    callback?: (data: IntegrationConfigurationResp) => void
  ): UseMutationResult<IntegrationConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateIntegrationConfigurationReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateIntegrationConfigurationReq }) => {
      const response = 
            (await IntegrationConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createIntegrationConfiguration(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfiguration],
    mutationFn,
    ...options
  })
}
  
  

export const useIntegrationConfigurationsAdminApi_UpdateIntegrationConfiguration_ByIntegrationConfigurationId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<IntegrationConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { integrationConfigurationId:string, data: UpdateIntegrationConfigurationReq }>, 'mutationKey'>,
    callback?: (data: IntegrationConfigurationResp) => void
  ): UseMutationResult<IntegrationConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { integrationConfigurationId:string, data: UpdateIntegrationConfigurationReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { integrationConfigurationId:string, data: UpdateIntegrationConfigurationReq }) => {
      const response = 
            (await IntegrationConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIntegrationConfiguration_ByIntegrationConfigurationId(input.integrationConfigurationId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IntegrationConfigurationsAdmin.IntegrationConfiguration_ByIntegrationConfigurationId],
    mutationFn,
    ...options
  })
}
  
  

export const useIntegrationConfigurationsAdminApi_UpdateStatus_ByIntegrationConfigurationId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<IntegrationConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { integrationConfigurationId:string, data: UpdateStatusIntegrationConfigurationReq }>, 'mutationKey'>,
    callback?: (data: IntegrationConfigurationResp) => void
  ): UseMutationResult<IntegrationConfigurationResp, AxiosError<ApiError>, SdkSetConfigParam & { integrationConfigurationId:string, data: UpdateStatusIntegrationConfigurationReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { integrationConfigurationId:string, data: UpdateStatusIntegrationConfigurationReq }) => {
      const response = 
            (await IntegrationConfigurationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatus_ByIntegrationConfigurationId(input.integrationConfigurationId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IntegrationConfigurationsAdmin.Status_ByIntegrationConfigurationId],
    mutationFn,
    ...options
  })
}
  
  
  