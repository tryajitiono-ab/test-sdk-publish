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
import { DevelopmentAdminApi } from "../DevelopmentAdminApi.js"

import { DevelopmentServerConfigurationCreateRequest } from '../../generated-definitions/DevelopmentServerConfigurationCreateRequest.js'
import { DevelopmentServerConfigurationCreateResponse } from '../../generated-definitions/DevelopmentServerConfigurationCreateResponse.js'
import { DevelopmentServerConfigurationGetResponse } from '../../generated-definitions/DevelopmentServerConfigurationGetResponse.js'
import { DevelopmentServerConfigurationListResponse } from '../../generated-definitions/DevelopmentServerConfigurationListResponse.js'


export enum Key_DevelopmentAdmin {
  DevelopmentServerConfigurations = 'Ams.DevelopmentAdmin.DevelopmentServerConfigurations',
DevelopmentServerConfiguration = 'Ams.DevelopmentAdmin.DevelopmentServerConfiguration',
DevelopmentServerConfiguration_ByDevelopmentServerConfigId = 'Ams.DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId',

}

  

export const useDevelopmentAdminApi_GetDevelopmentServerConfigurations = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {count?: number, offset?: number} },
    options?: Omit<UseQueryOptions<DevelopmentServerConfigurationListResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DevelopmentServerConfigurationListResponse>) => void
  ): UseQueryResult<DevelopmentServerConfigurationListResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDevelopmentAdminApi_GetDevelopmentServerConfigurations>[1]
  ) => async () => {
      const response = 
            (await DevelopmentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDevelopmentServerConfigurations(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DevelopmentServerConfigurationListResponse, AxiosError<ApiError>>({
    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfigurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDevelopmentAdminApi_CreateDevelopmentServerConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DevelopmentServerConfigurationCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: DevelopmentServerConfigurationCreateRequest }>, 'mutationKey'>,
    callback?: (data: DevelopmentServerConfigurationCreateResponse) => void
  ): UseMutationResult<DevelopmentServerConfigurationCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: DevelopmentServerConfigurationCreateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DevelopmentServerConfigurationCreateRequest }) => {
      const response = 
            (await DevelopmentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDevelopmentServerConfiguration(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration],
    mutationFn,
    ...options
  })
}
  
  

export const useDevelopmentAdminApi_DeleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { developmentServerConfigID:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { developmentServerConfigID:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { developmentServerConfigID:string }) => {
      const response = 
            (await DevelopmentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteDevelopmentServerConfiguration_ByDevelopmentServerConfigId(input.developmentServerConfigID))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId],
    mutationFn,
    ...options
  })
}
  
  

export const useDevelopmentAdminApi_GetDevelopmentServerConfiguration_ByDevelopmentServerConfigId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { developmentServerConfigID:string },
    options?: Omit<UseQueryOptions<DevelopmentServerConfigurationGetResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DevelopmentServerConfigurationGetResponse>) => void
  ): UseQueryResult<DevelopmentServerConfigurationGetResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDevelopmentAdminApi_GetDevelopmentServerConfiguration_ByDevelopmentServerConfigId>[1]
  ) => async () => {
      const response = 
            (await DevelopmentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDevelopmentServerConfiguration_ByDevelopmentServerConfigId(input.developmentServerConfigID))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DevelopmentServerConfigurationGetResponse, AxiosError<ApiError>>({
    queryKey: [Key_DevelopmentAdmin.DevelopmentServerConfiguration_ByDevelopmentServerConfigId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  