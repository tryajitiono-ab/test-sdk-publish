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
import { ClientsAdminApi } from "../ClientsAdminApi.js"

import { ClientCreationV3Request } from '../../generated-definitions/ClientCreationV3Request.js'
import { ClientPermissionsV3 } from '../../generated-definitions/ClientPermissionsV3.js'
import { ClientUpdateV3Request } from '../../generated-definitions/ClientUpdateV3Request.js'
import { ClientV3Response } from '../../generated-definitions/ClientV3Response.js'
import { ClientsUpdateRequestV3 } from '../../generated-definitions/ClientsUpdateRequestV3.js'
import { ClientsV3Response } from '../../generated-definitions/ClientsV3Response.js'
import { V3ClientUpdateSecretRequest } from '../../generated-definitions/V3ClientUpdateSecretRequest.js'


export enum Key_ClientsAdmin {
  Clients_v3 = 'Iam.ClientsAdmin.Clients_v3',
Client_v3 = 'Iam.ClientsAdmin.Client_v3',
Secret_ByClientId_v3 = 'Iam.ClientsAdmin.Secret_ByClientId_v3',
Client_ByClientId_v3 = 'Iam.ClientsAdmin.Client_ByClientId_v3',
Permission_ByClientId_v3 = 'Iam.ClientsAdmin.Permission_ByClientId_v3',
Permission_ByClientId_ByNS_v3 = 'Iam.ClientsAdmin.Permission_ByClientId_ByNS_v3',
Permission_ByClientId_ByResource_ByAction_v3 = 'Iam.ClientsAdmin.Permission_ByClientId_ByResource_ByAction_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ClientsAdmin.Clients_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_GetClients_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {clientId?: string | null, clientName?: string | null, clientType?: string | null, limit?: number, offset?: number, skipLoginQueue?: boolean | null} },
    options?: Omit<UseQueryOptions<ClientsV3Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ClientsV3Response>) => void
  ): UseQueryResult<ClientsV3Response, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useClientsAdminApi_GetClients_v3>[1]
  ) => async () => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getClients_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ClientsV3Response, AxiosError<ApiError>>({
    queryKey: [Key_ClientsAdmin.Clients_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useClientsAdminApi_CreateClient_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreationV3Request }>, 'mutationKey'>,
    callback?: (data: ClientV3Response) => void
  ): UseMutationResult<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientCreationV3Request }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ClientCreationV3Request }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createClient_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useClientsAdminApi_UpdateClient_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientsUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClientsUpdateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ClientsUpdateRequestV3 }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateClient_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useClientsAdminApi_UpdateSecret_ByClientId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: V3ClientUpdateSecretRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: V3ClientUpdateSecretRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { clientId:string, data: V3ClientUpdateSecretRequest }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSecret_ByClientId_v3(input.clientId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Secret_ByClientId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useClientsAdminApi_DeleteClient_ByClientId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { clientId:string }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteClient_ByClientId_v3(input.clientId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_ByClientId_v3],
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
 *    queryKey: [Key_ClientsAdmin.Client_ByClientId_v3, input]
 * }
 * ```
 */
export const useClientsAdminApi_GetClient_ByClientId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { clientId:string },
    options?: Omit<UseQueryOptions<ClientV3Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ClientV3Response>) => void
  ): UseQueryResult<ClientV3Response, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useClientsAdminApi_GetClient_ByClientId_v3>[1]
  ) => async () => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getClient_ByClientId_v3(input.clientId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ClientV3Response, AxiosError<ApiError>>({
    queryKey: [Key_ClientsAdmin.Client_ByClientId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useClientsAdminApi_PatchClient_ByClientId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: ClientUpdateV3Request }>, 'mutationKey'>,
    callback?: (data: ClientV3Response) => void
  ): UseMutationResult<ClientV3Response, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: ClientUpdateV3Request }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { clientId:string, data: ClientUpdateV3Request }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchClient_ByClientId_v3(input.clientId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Client_ByClientId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useClientsAdminApi_UpdatePermission_ByClientId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: ClientPermissionsV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: ClientPermissionsV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { clientId:string, data: ClientPermissionsV3 }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePermission_ByClientId_v3(input.clientId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useClientsAdminApi_UpdatePermission_ByClientId_ByNS_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: ClientPermissionsV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, data: ClientPermissionsV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { clientId:string, data: ClientPermissionsV3 }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePermission_ByClientId_ByNS_v3(input.clientId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId_ByNS_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useClientsAdminApi_DeletePermission_ByClientId_ByResource_ByAction_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, resource:string, action:number }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { clientId:string, resource:string, action:number }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { clientId:string, resource:string, action:number }) => {
      const response = 
            (await ClientsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePermission_ByClientId_ByResource_ByAction_v3(input.clientId, input.resource, input.action))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClientsAdmin.Permission_ByClientId_ByResource_ByAction_v3],
    mutationFn,
    ...options
  })
}
  
  
  