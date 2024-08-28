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
import { DataDeletionApi } from "../DataDeletionApi.js"

import { DeletionStatus } from '../../generated-definitions/DeletionStatus.js'
import { RequestDeleteResponse } from '../../generated-definitions/RequestDeleteResponse.js'


export enum Key_DataDeletion {
  UserMeDeletion = 'Gdpr.DataDeletion.UserMeDeletion',
UsersMeDeletionsStatus = 'Gdpr.DataDeletion.UsersMeDeletionsStatus',
Deletion_ByUserId = 'Gdpr.DataDeletion.Deletion_ByUserId',
DeletionsStatus_ByUserId = 'Gdpr.DataDeletion.DeletionsStatus_ByUserId',

}

  

export const useDataDeletionApi_DeleteUserMeDeletion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeDeletion())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataDeletion.UserMeDeletion],
    mutationFn,
    ...options
  })
}
  
  

export const useDataDeletionApi_PostUserMeDeletion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {platformId: string | null,platformToken: string | null} }>, 'mutationKey'>,
    callback?: (data: RequestDeleteResponse) => void
  ): UseMutationResult<RequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {platformId: string | null,platformToken: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {platformId: string | null,platformToken: string | null} }) => {
      const response = 
            (await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeDeletion(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataDeletion.UserMeDeletion],
    mutationFn,
    ...options
  })
}
  
  

export const useDataDeletionApi_GetUsersMeDeletionsStatus = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<DeletionStatus, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DeletionStatus>) => void
  ): UseQueryResult<DeletionStatus, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDataDeletionApi_GetUsersMeDeletionsStatus>[1]
  ) => async () => {
      const response = 
            (await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeDeletionsStatus())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DeletionStatus, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletion.UsersMeDeletionsStatus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDataDeletionApi_DeleteDeletion_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteDeletion_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataDeletion.Deletion_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useDataDeletionApi_PostDeletion_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {password: string | null,languageTag?: string | null} }>, 'mutationKey'>,
    callback?: (data: RequestDeleteResponse) => void
  ): UseMutationResult<RequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {password: string | null,languageTag?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: {password: string | null,languageTag?: string | null} }) => {
      const response = 
            (await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postDeletion_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataDeletion.Deletion_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useDataDeletionApi_GetDeletionsStatus_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<DeletionStatus, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DeletionStatus>) => void
  ): UseQueryResult<DeletionStatus, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDataDeletionApi_GetDeletionsStatus_ByUserId>[1]
  ) => async () => {
      const response = 
            (await DataDeletionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDeletionsStatus_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DeletionStatus, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletion.DeletionsStatus_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  