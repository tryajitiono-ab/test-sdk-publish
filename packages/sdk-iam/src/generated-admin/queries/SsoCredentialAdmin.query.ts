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
import { SsoCredentialAdminApi } from "../SsoCredentialAdminApi.js"

import { SsoPlatformCredentialRequest } from '../../generated-definitions/SsoPlatformCredentialRequest.js'
import { SsoPlatformCredentialResponse } from '../../generated-definitions/SsoPlatformCredentialResponse.js'
import { SsoPlatformCredentialResponseArray } from '../../generated-definitions/SsoPlatformCredentialResponseArray.js'


export enum Key_SsoCredentialAdmin {
  PlatformsSso_v3 = 'Iam.SsoCredentialAdmin.PlatformsSso_v3',
Sso_ByPlatformId_v3 = 'Iam.SsoCredentialAdmin.Sso_ByPlatformId_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SsoCredentialAdmin.PlatformsSso_v3, input]
 * }
 * ```
 */
export const useSsoCredentialAdminApi_GetPlatformsSso_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<SsoPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SsoPlatformCredentialResponseArray>) => void
  ): UseQueryResult<SsoPlatformCredentialResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSsoCredentialAdminApi_GetPlatformsSso_v3>[1]
  ) => async () => {
      const response = 
            (await SsoCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsSso_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SsoPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_SsoCredentialAdmin.PlatformsSso_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSsoCredentialAdminApi_DeleteSso_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string }) => {
      const response = 
            (await SsoCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteSso_ByPlatformId_v3(input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3],
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
 *    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useSsoCredentialAdminApi_GetSso_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string },
    options?: Omit<UseQueryOptions<SsoPlatformCredentialResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SsoPlatformCredentialResponse>) => void
  ): UseQueryResult<SsoPlatformCredentialResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSsoCredentialAdminApi_GetSso_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await SsoCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSso_ByPlatformId_v3(input.platformId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SsoPlatformCredentialResponse, AxiosError<ApiError>>({
    queryKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSsoCredentialAdminApi_PatchSso_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SsoPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: SsoPlatformCredentialRequest }>, 'mutationKey'>,
    callback?: (data: SsoPlatformCredentialResponse) => void
  ): UseMutationResult<SsoPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: SsoPlatformCredentialRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: SsoPlatformCredentialRequest }) => {
      const response = 
            (await SsoCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchSso_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useSsoCredentialAdminApi_CreateSso_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SsoPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: SsoPlatformCredentialRequest }>, 'mutationKey'>,
    callback?: (data: SsoPlatformCredentialResponse) => void
  ): UseMutationResult<SsoPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: SsoPlatformCredentialRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: SsoPlatformCredentialRequest }) => {
      const response = 
            (await SsoCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSso_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SsoCredentialAdmin.Sso_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  
  