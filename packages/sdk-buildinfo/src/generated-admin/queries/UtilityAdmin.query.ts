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
import { UtilityAdminApi } from "../UtilityAdminApi.js"

import { CleanerConfigObject } from '../../generated-definitions/CleanerConfigObject.js'
import { ClientPayload } from '../../generated-definitions/ClientPayload.js'
import { ConfigurationInfo } from '../../generated-definitions/ConfigurationInfo.js'
import { ConfigurationUpdate } from '../../generated-definitions/ConfigurationUpdate.js'
import { PingResultResponse } from '../../generated-definitions/PingResultResponse.js'


export enum Key_UtilityAdmin {
  PingDiffer = 'Buildinfo.UtilityAdmin.PingDiffer',
Configurations = 'Buildinfo.UtilityAdmin.Configurations',
Configuration = 'Buildinfo.UtilityAdmin.Configuration',
ValidateSdkConfig = 'Buildinfo.UtilityAdmin.ValidateSdkConfig',
CleanerConfigurations = 'Buildinfo.UtilityAdmin.CleanerConfigurations',

}

  

export const useUtilityAdminApi_GetPingDiffer = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PingResultResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PingResultResponse>) => void
  ): UseQueryResult<PingResultResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUtilityAdminApi_GetPingDiffer>[1]
  ) => async () => {
      const response = 
            (await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPingDiffer())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PingResultResponse, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.PingDiffer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUtilityAdminApi_GetConfigurations = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ConfigurationInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ConfigurationInfo>) => void
  ): UseQueryResult<ConfigurationInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUtilityAdminApi_GetConfigurations>[1]
  ) => async () => {
      const response = 
            (await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigurations())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ConfigurationInfo, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUtilityAdminApi_PatchConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ConfigurationInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigurationUpdate }>, 'mutationKey'>,
    callback?: (data: ConfigurationInfo) => void
  ): UseMutationResult<ConfigurationInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigurationUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigurationUpdate }) => {
      const response = 
            (await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchConfiguration(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UtilityAdmin.Configuration],
    mutationFn,
    ...options
  })
}
  
  

export const useUtilityAdminApi_GetValidateSdkConfig = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {clientId: string | null, redirectUri: string | null} },
    options?: Omit<UseQueryOptions<ClientPayload, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ClientPayload>) => void
  ): UseQueryResult<ClientPayload, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUtilityAdminApi_GetValidateSdkConfig>[1]
  ) => async () => {
      const response = 
            (await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getValidateSdkConfig(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ClientPayload, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.ValidateSdkConfig, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUtilityAdminApi_GetCleanerConfigurations = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<CleanerConfigObject, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CleanerConfigObject>) => void
  ): UseQueryResult<CleanerConfigObject, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUtilityAdminApi_GetCleanerConfigurations>[1]
  ) => async () => {
      const response = 
            (await UtilityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCleanerConfigurations())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CleanerConfigObject, AxiosError<ApiError>>({
    queryKey: [Key_UtilityAdmin.CleanerConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  