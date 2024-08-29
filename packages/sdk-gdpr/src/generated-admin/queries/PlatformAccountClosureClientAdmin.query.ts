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
import { PlatformAccountClosureClientAdminApi } from "../PlatformAccountClosureClientAdminApi.js"

import { PlatformAccountClosureClientRequest } from '../../generated-definitions/PlatformAccountClosureClientRequest.js'
import { PlatformAccountClosureClientResponse } from '../../generated-definitions/PlatformAccountClosureClientResponse.js'


export enum Key_PlatformAccountClosureClientAdmin {
  ClosureClient_ByPlatform = 'Gdpr.PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform',

}

  

export const usePlatformAccountClosureClientAdminApi_DeleteClosureClient_ByPlatform = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platform:string }) => {
      const response = 
            (await PlatformAccountClosureClientAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteClosureClient_ByPlatform(input.platform))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform],
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
 *    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform, input]
 * }
 * ```
 */
export const usePlatformAccountClosureClientAdminApi_GetClosureClient_ByPlatform = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platform:string },
    options?: Omit<UseQueryOptions<PlatformAccountClosureClientResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlatformAccountClosureClientResponse>) => void
  ): UseQueryResult<PlatformAccountClosureClientResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlatformAccountClosureClientAdminApi_GetClosureClient_ByPlatform>[1]
  ) => async () => {
      const response = 
            (await PlatformAccountClosureClientAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getClosureClient_ByPlatform(input.platform))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlatformAccountClosureClientResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlatformAccountClosureClientAdminApi_UpdateClosureClient_ByPlatform = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform:string, data: PlatformAccountClosureClientRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platform:string, data: PlatformAccountClosureClientRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platform:string, data: PlatformAccountClosureClientRequest }) => {
      const response = 
            (await PlatformAccountClosureClientAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateClosureClient_ByPlatform(input.platform, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlatformAccountClosureClientAdmin.ClosureClient_ByPlatform],
    mutationFn,
    ...options
  })
}
  
  
  