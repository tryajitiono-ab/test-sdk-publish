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
import { OAuth20AdminApi } from "../OAuth20AdminApi.js"

import { TokenThirdPartyResponse } from '../../generated-definitions/TokenThirdPartyResponse.js'


export enum Key_OAuth20Admin {
  RevokeOauth_ByUserId_v3 = 'Iam.OAuth20Admin.RevokeOauth_ByUserId_v3',
PlatformTokenOauth_ByUserId_ByPlatformId_v3 = 'Iam.OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId_v3',

}

  

export const useOAuth20AdminApi_UpdateRevokeOauth_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams?: {includeGameNamespace?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams?: {includeGameNamespace?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string,  queryParams?: {includeGameNamespace?: boolean | null} }) => {
      const response = 
            (await OAuth20AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRevokeOauth_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Admin.RevokeOauth_ByUserId_v3],
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
 *    queryKey: [Key_OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useOAuth20AdminApi_GetPlatformTokenOauth_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, platformId:string,  queryParams?: {platformUserId?: string | null} },
    options?: Omit<UseQueryOptions<TokenThirdPartyResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TokenThirdPartyResponse>) => void
  ): UseQueryResult<TokenThirdPartyResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20AdminApi_GetPlatformTokenOauth_ByUserId_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformTokenOauth_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TokenThirdPartyResponse, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20Admin.PlatformTokenOauth_ByUserId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  