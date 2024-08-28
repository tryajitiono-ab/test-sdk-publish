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
import { PublicPlayerBinaryRecordApi } from "../PublicPlayerBinaryRecordApi.js"

import { BinaryRecordRequest } from '../../generated-definitions/BinaryRecordRequest.js'
import { BulkGetPlayerBinaryRecordResponse } from '../../generated-definitions/BulkGetPlayerBinaryRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordMetadataPublicRequest } from '../../generated-definitions/PlayerBinaryRecordMetadataPublicRequest.js'
import { PlayerBinaryRecordResponse } from '../../generated-definitions/PlayerBinaryRecordResponse.js'
import { PublicPlayerBinaryRecordCreate } from '../../generated-definitions/PublicPlayerBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../../generated-definitions/UploadBinaryRecordResponse.js'


export enum Key_PublicPlayerBinaryRecord {
  UsersMeBinaries = 'Cloudsave.PublicPlayerBinaryRecord.UsersMeBinaries',
UserMeBinaryBulk = 'Cloudsave.PublicPlayerBinaryRecord.UserMeBinaryBulk',
Binary_ByUserId = 'Cloudsave.PublicPlayerBinaryRecord.Binary_ByUserId',
Binary_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Binary_ByUserId_ByKey',
BinariesPublic_ByUserId = 'Cloudsave.PublicPlayerBinaryRecord.BinariesPublic_ByUserId',
PublicBulkUser_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.PublicBulkUser_ByKey',
BinaryBulk_ByUserId = 'Cloudsave.PublicPlayerBinaryRecord.BinaryBulk_ByUserId',
Public_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Public_ByUserId_ByKey',
Metadata_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Metadata_ByUserId_ByKey',
Presigned_ByUserId_ByKey = 'Cloudsave.PublicPlayerBinaryRecord.Presigned_ByUserId_ByKey',

}

  

export const usePublicPlayerBinaryRecordApi_GetUsersMeBinaries = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, query?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListPlayerBinaryRecordsResponse>) => void
  ): UseQueryResult<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetUsersMeBinaries>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeBinaries(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.UsersMeBinaries, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_CreateUserMeBinaryBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }>, 'mutationKey'>,
    callback?: (data: BulkGetPlayerBinaryRecordResponse) => void
  ): UseMutationResult<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }) => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeBinaryBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.UserMeBinaryBulk],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_CreateBinary_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PublicPlayerBinaryRecordCreate }>, 'mutationKey'>,
    callback?: (data: UploadBinaryRecordResponse) => void
  ): UseMutationResult<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PublicPlayerBinaryRecordCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: PublicPlayerBinaryRecordCreate }) => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createBinary_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_DeleteBinary_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string }) => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteBinary_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_GetBinary_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerBinaryRecordResponse>) => void
  ): UseQueryResult<PlayerBinaryRecordResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetBinary_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBinary_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_UpdateBinary_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: BinaryRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerBinaryRecordResponse) => void
  ): UseMutationResult<PlayerBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: BinaryRecordRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: BinaryRecordRequest }) => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateBinary_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Binary_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_GetBinariesPublic_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListPlayerBinaryRecordsResponse>) => void
  ): UseQueryResult<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetBinariesPublic_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBinariesPublic_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListPlayerBinaryRecordsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.BinariesPublic_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_FetchPublicBulkUser_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { key:string, data: BulkUserIDsRequest },
    options?: Omit<UseQueryOptions<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetPlayerBinaryRecordResponse>) => void
  ): UseQueryResult<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerBinaryRecordApi_FetchPublicBulkUser_ByKey>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchPublicBulkUser_ByKey(input.key, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.PublicBulkUser_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_FetchBinaryBulk_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, data: BulkGetPlayerRecordsRequest },
    options?: Omit<UseQueryOptions<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetPlayerBinaryRecordResponse>) => void
  ): UseQueryResult<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerBinaryRecordApi_FetchBinaryBulk_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchBinaryBulk_ByUserId(input.userId, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetPlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.BinaryBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_GetPublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerBinaryRecordResponse>) => void
  ): UseQueryResult<PlayerBinaryRecordResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerBinaryRecordApi_GetPublic_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPublic_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerBinaryRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerBinaryRecord.Public_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_UpdateMetadata_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerBinaryRecordMetadataPublicRequest }>, 'mutationKey'>,
    callback?: (data: PlayerBinaryRecordResponse) => void
  ): UseMutationResult<PlayerBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerBinaryRecordMetadataPublicRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerBinaryRecordMetadataPublicRequest }) => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateMetadata_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Metadata_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerBinaryRecordApi_CreatePresigned_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: UploadBinaryRecordRequest }>, 'mutationKey'>,
    callback?: (data: UploadBinaryRecordResponse) => void
  ): UseMutationResult<UploadBinaryRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: UploadBinaryRecordRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: UploadBinaryRecordRequest }) => {
      const response = 
            (await PublicPlayerBinaryRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPresigned_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerBinaryRecord.Presigned_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  