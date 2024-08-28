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
import { NamespaceAdminApi } from "../NamespaceAdminApi.js"

import { NamespaceContext } from '../../generated-definitions/NamespaceContext.js'
import { NamespaceCreate } from '../../generated-definitions/NamespaceCreate.js'
import { NamespaceInfo } from '../../generated-definitions/NamespaceInfo.js'
import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceStatusUpdate } from '../../generated-definitions/NamespaceStatusUpdate.js'
import { NamespaceUpdate } from '../../generated-definitions/NamespaceUpdate.js'


export enum Key_NamespaceAdmin {
  Namespaces = 'Basic.NamespaceAdmin.Namespaces',
Namespace = 'Basic.NamespaceAdmin.Namespace',
Namespace_ByNamespace = 'Basic.NamespaceAdmin.Namespace_ByNamespace',
Game = 'Basic.NamespaceAdmin.Game',
Basic = 'Basic.NamespaceAdmin.Basic',
Child = 'Basic.NamespaceAdmin.Child',
Status = 'Basic.NamespaceAdmin.Status',
Context = 'Basic.NamespaceAdmin.Context',
Publisher = 'Basic.NamespaceAdmin.Publisher',

}

  

export const useNamespaceAdminApi_GetNamespaces = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
  ): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceAdminApi_GetNamespaces>[1]
  ) => async () => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNamespaces(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Namespaces, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNamespaceAdminApi_CreateNamespace = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceCreate }>, 'mutationKey'>,
    callback?: (data: NamespaceInfo) => void
  ): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: NamespaceCreate }) => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNamespace(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Namespace],
    mutationFn,
    ...options
  })
}
  
  

export const useNamespaceAdminApi_DeleteNamespace_ByNamespace = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: NamespaceInfo) => void
  ): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteNamespace_ByNamespace())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Namespace_ByNamespace],
    mutationFn,
    ...options
  })
}
  
  

export const useNamespaceAdminApi_GetNamespace_ByNamespace = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<NamespaceInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceInfo>) => void
  ): UseQueryResult<NamespaceInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceAdminApi_GetNamespace_ByNamespace>[1]
  ) => async () => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNamespace_ByNamespace(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceInfo, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Namespace_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNamespaceAdminApi_GetGame = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
  ): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceAdminApi_GetGame>[1]
  ) => async () => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGame(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Game, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNamespaceAdminApi_PatchBasic = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceUpdate }>, 'mutationKey'>,
    callback?: (data: NamespaceInfo) => void
  ): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: NamespaceUpdate }) => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchBasic(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Basic],
    mutationFn,
    ...options
  })
}
  
  

export const useNamespaceAdminApi_GetChild = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
  ): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceAdminApi_GetChild>[1]
  ) => async () => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChild(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Child, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNamespaceAdminApi_PatchStatus = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceStatusUpdate }>, 'mutationKey'>,
    callback?: (data: NamespaceInfo) => void
  ): UseMutationResult<NamespaceInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: NamespaceStatusUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: NamespaceStatusUpdate }) => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStatus(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NamespaceAdmin.Status],
    mutationFn,
    ...options
  })
}
  
  

export const useNamespaceAdminApi_GetContext = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<NamespaceContext, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceContext>) => void
  ): UseQueryResult<NamespaceContext, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceAdminApi_GetContext>[1]
  ) => async () => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContext())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceContext, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Context, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNamespaceAdminApi_GetPublisher = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<NamespacePublisherInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespacePublisherInfo>) => void
  ): UseQueryResult<NamespacePublisherInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceAdminApi_GetPublisher>[1]
  ) => async () => {
      const response = 
            (await NamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPublisher())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespacePublisherInfo, AxiosError<ApiError>>({
    queryKey: [Key_NamespaceAdmin.Publisher, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  