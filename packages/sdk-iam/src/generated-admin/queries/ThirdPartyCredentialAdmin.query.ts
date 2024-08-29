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
import { ThirdPartyCredentialAdminApi } from "../ThirdPartyCredentialAdminApi.js"

import { CheckAvailabilityResponse } from '../../generated-definitions/CheckAvailabilityResponse.js'
import { PlatformDomainDeleteRequest } from '../../generated-definitions/PlatformDomainDeleteRequest.js'
import { PlatformDomainResponse } from '../../generated-definitions/PlatformDomainResponse.js'
import { PlatformDomainUpdateRequest } from '../../generated-definitions/PlatformDomainUpdateRequest.js'
import { ThirdPartyLoginPlatformCredentialRequest } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialRequest.js'
import { ThirdPartyLoginPlatformCredentialResponse } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponse.js'
import { ThirdPartyLoginPlatformCredentialResponseArray } from '../../generated-definitions/ThirdPartyLoginPlatformCredentialResponseArray.js'


export enum Key_ThirdPartyCredentialAdmin {
  Availability_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.Availability_ByPlatformId_v3',
PlatformsAllClients_v3 = 'Iam.ThirdPartyCredentialAdmin.PlatformsAllClients_v3',
PlatformsAllClientsActive_v3 = 'Iam.ThirdPartyCredentialAdmin.PlatformsAllClientsActive_v3',
Client_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.Client_ByPlatformId_v3',
Clients_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.Clients_ByPlatformId_v3',
ClientDomain_ByPlatformId_v3 = 'Iam.ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.Availability_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetAvailability_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string },
    options?: Omit<UseQueryOptions<CheckAvailabilityResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CheckAvailabilityResponse>) => void
  ): UseQueryResult<CheckAvailabilityResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useThirdPartyCredentialAdminApi_GetAvailability_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAvailability_ByPlatformId_v3(input.platformId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CheckAvailabilityResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.Availability_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClients_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetPlatformsAllClients_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ThirdPartyLoginPlatformCredentialResponseArray>) => void
  ): UseQueryResult<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useThirdPartyCredentialAdminApi_GetPlatformsAllClients_v3>[1]
  ) => async () => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsAllClients_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClients_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClientsActive_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetPlatformsAllClientsActive_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ThirdPartyLoginPlatformCredentialResponseArray>) => void
  ): UseQueryResult<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useThirdPartyCredentialAdminApi_GetPlatformsAllClientsActive_v3>[1]
  ) => async () => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsAllClientsActive_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ThirdPartyLoginPlatformCredentialResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.PlatformsAllClientsActive_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useThirdPartyCredentialAdminApi_DeleteClient_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string }) => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteClient_ByPlatformId_v3(input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3],
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
 *    queryKey: [Key_ThirdPartyCredentialAdmin.Clients_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useThirdPartyCredentialAdminApi_GetClients_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string },
    options?: Omit<UseQueryOptions<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ThirdPartyLoginPlatformCredentialResponse>) => void
  ): UseQueryResult<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useThirdPartyCredentialAdminApi_GetClients_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getClients_ByPlatformId_v3(input.platformId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>>({
    queryKey: [Key_ThirdPartyCredentialAdmin.Clients_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useThirdPartyCredentialAdminApi_PatchClient_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: ThirdPartyLoginPlatformCredentialRequest }>, 'mutationKey'>,
    callback?: (data: ThirdPartyLoginPlatformCredentialResponse) => void
  ): UseMutationResult<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: ThirdPartyLoginPlatformCredentialRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: ThirdPartyLoginPlatformCredentialRequest }) => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchClient_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useThirdPartyCredentialAdminApi_CreateClient_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: ThirdPartyLoginPlatformCredentialRequest }>, 'mutationKey'>,
    callback?: (data: ThirdPartyLoginPlatformCredentialResponse) => void
  ): UseMutationResult<ThirdPartyLoginPlatformCredentialResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: ThirdPartyLoginPlatformCredentialRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: ThirdPartyLoginPlatformCredentialRequest }) => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createClient_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.Client_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useThirdPartyCredentialAdminApi_DeleteClientDomain_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformDomainDeleteRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformDomainDeleteRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: PlatformDomainDeleteRequest }) => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteClientDomain_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useThirdPartyCredentialAdminApi_UpdateClientDomain_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlatformDomainResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformDomainUpdateRequest }>, 'mutationKey'>,
    callback?: (data: PlatformDomainResponse) => void
  ): UseMutationResult<PlatformDomainResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformDomainUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: PlatformDomainUpdateRequest }) => {
      const response = 
            (await ThirdPartyCredentialAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateClientDomain_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ThirdPartyCredentialAdmin.ClientDomain_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  
  