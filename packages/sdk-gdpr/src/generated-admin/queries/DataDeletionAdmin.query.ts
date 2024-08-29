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
import { DataDeletionAdminApi } from "../DataDeletionAdminApi.js"

import { DeletionData } from '../../generated-definitions/DeletionData.js'
import { ListDeletionDataResponse } from '../../generated-definitions/ListDeletionDataResponse.js'
import { RequestDeleteResponse } from '../../generated-definitions/RequestDeleteResponse.js'


export enum Key_DataDeletionAdmin {
  Deletions = 'Gdpr.DataDeletionAdmin.Deletions',
Deletion_ByUserId = 'Gdpr.DataDeletionAdmin.Deletion_ByUserId',
Deletions_ByUserId = 'Gdpr.DataDeletionAdmin.Deletions_ByUserId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletionAdmin.Deletions, input]
 * }
 * ```
 */
export const useDataDeletionAdminApi_GetDeletions = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {after?: string | null, before?: string | null, limit?: number, offset?: number, requestDate?: string | null} },
    options?: Omit<UseQueryOptions<ListDeletionDataResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListDeletionDataResponse>) => void
  ): UseQueryResult<ListDeletionDataResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDataDeletionAdminApi_GetDeletions>[1]
  ) => async () => {
      const response = 
            (await DataDeletionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDeletions(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListDeletionDataResponse, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletionAdmin.Deletions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDataDeletionAdminApi_DeleteDeletion_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await DataDeletionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteDeletion_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataDeletionAdmin.Deletion_ByUserId],
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
 *    queryKey: [Key_DataDeletionAdmin.Deletions_ByUserId, input]
 * }
 * ```
 */
export const useDataDeletionAdminApi_GetDeletions_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<DeletionData, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DeletionData>) => void
  ): UseQueryResult<DeletionData, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDataDeletionAdminApi_GetDeletions_ByUserId>[1]
  ) => async () => {
      const response = 
            (await DataDeletionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDeletions_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DeletionData, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletionAdmin.Deletions_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDataDeletionAdminApi_CreateDeletion_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: RequestDeleteResponse) => void
  ): UseMutationResult<RequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await DataDeletionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDeletion_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataDeletionAdmin.Deletion_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  