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
import { PlatformCredentialAdminApi } from "../PlatformCredentialAdminApi.js"

import { PlatformCredentials } from '../../generated-definitions/PlatformCredentials.js'
import { PutPlatformCredentialsRequest } from '../../generated-definitions/PutPlatformCredentialsRequest.js'


export enum Key_PlatformCredentialAdmin {
  PlatformCredential = 'Session.PlatformCredentialAdmin.PlatformCredential',
PlatformCredentials = 'Session.PlatformCredentialAdmin.PlatformCredentials',

}

  

export const usePlatformCredentialAdminApi_DeletePlatformCredential = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await PlatformCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePlatformCredential())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlatformCredentialAdmin.PlatformCredential],
    mutationFn,
    ...options
  })
}
  
  

export const usePlatformCredentialAdminApi_GetPlatformCredentials = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PlatformCredentials, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlatformCredentials>) => void
  ): UseQueryResult<PlatformCredentials, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlatformCredentialAdminApi_GetPlatformCredentials>[1]
  ) => async () => {
      const response = 
            (await PlatformCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformCredentials())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlatformCredentials, AxiosError<ApiError>>({
    queryKey: [Key_PlatformCredentialAdmin.PlatformCredentials, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlatformCredentialAdminApi_UpdatePlatformCredential = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlatformCredentials, AxiosError<ApiError>, SdkSetConfigParam & { data: PutPlatformCredentialsRequest }>, 'mutationKey'>,
    callback?: (data: PlatformCredentials) => void
  ): UseMutationResult<PlatformCredentials, AxiosError<ApiError>, SdkSetConfigParam & { data: PutPlatformCredentialsRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PutPlatformCredentialsRequest }) => {
      const response = 
            (await PlatformCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePlatformCredential(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlatformCredentialAdmin.PlatformCredential],
    mutationFn,
    ...options
  })
}
  
  
  