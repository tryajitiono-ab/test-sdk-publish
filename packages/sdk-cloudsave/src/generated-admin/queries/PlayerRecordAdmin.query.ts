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
import { PlayerRecordAdminApi } from "../PlayerRecordAdminApi.js"

import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkGetPlayerRecordResponse } from '../../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordSizeResponse } from '../../generated-definitions/BulkGetPlayerRecordSizeResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUpdatePlayerRecordByKeyResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordByKeyResponseArray.js'
import { BulkUpdatePlayerRecordResponseArray } from '../../generated-definitions/BulkUpdatePlayerRecordResponseArray.js'
import { BulkUpdatePlayerRecordsByKeyRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsByKeyRequest.js'
import { BulkUpdatePlayerRecordsRequest } from '../../generated-definitions/BulkUpdatePlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserKeyRequest } from '../../generated-definitions/BulkUserKeyRequest.js'
import { ListPlayerRecordKeysResponse } from '../../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../../generated-definitions/PlayerRecordResponse.js'
import { PlayerRecordSizeResponse } from '../../generated-definitions/PlayerRecordSizeResponse.js'


export enum Key_PlayerRecordAdmin {
  UsersRecords = 'Cloudsave.PlayerRecordAdmin.UsersRecords',
Records_ByUserId = 'Cloudsave.PlayerRecordAdmin.Records_ByUserId',
UserBulkRecordSize = 'Cloudsave.PlayerRecordAdmin.UserBulkRecordSize',
BulkUser_ByKey = 'Cloudsave.PlayerRecordAdmin.BulkUser_ByKey',
RecordBulk_ByUserId = 'Cloudsave.PlayerRecordAdmin.RecordBulk_ByUserId',
Record_ByUserId_ByKey = 'Cloudsave.PlayerRecordAdmin.Record_ByUserId_ByKey',
Size_ByUserId_ByKey = 'Cloudsave.PlayerRecordAdmin.Size_ByUserId_ByKey',
Public_ByUserId_ByKey = 'Cloudsave.PlayerRecordAdmin.Public_ByUserId_ByKey',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerRecordAdmin.UsersRecords, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetUsersRecords = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, query?: string | null} },
    options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
  ): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_GetUsersRecords>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersRecords(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.UsersRecords, input],
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
 *    queryKey: [Key_PlayerRecordAdmin.Records_ByUserId, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetRecords_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, query?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
  ): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_GetRecords_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecords_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Records_ByUserId, input],
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
 *    queryKey: [Key_PlayerRecordAdmin.UserBulkRecordSize, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_FetchUserBulkRecordSize = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: BulkUserKeyRequest },
    options?: Omit<UseQueryOptions<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetPlayerRecordSizeResponse>) => void
  ): UseQueryResult<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_FetchUserBulkRecordSize>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchUserBulkRecordSize(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetPlayerRecordSizeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.UserBulkRecordSize, input],
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
 *    queryKey: [Key_PlayerRecordAdmin.BulkUser_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_FetchBulkUser_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { key:string, data: BulkUserIDsRequest },
    options?: Omit<UseQueryOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetPlayerRecordResponse>) => void
  ): UseQueryResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_FetchBulkUser_ByKey>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchBulkUser_ByKey(input.key, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.BulkUser_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_UpdateBulkUser_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkUpdatePlayerRecordByKeyResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: BulkUpdatePlayerRecordsByKeyRequest }>, 'mutationKey'>,
    callback?: (data: BulkUpdatePlayerRecordByKeyResponseArray) => void
  ): UseMutationResult<BulkUpdatePlayerRecordByKeyResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: BulkUpdatePlayerRecordsByKeyRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: BulkUpdatePlayerRecordsByKeyRequest }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateBulkUser_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.BulkUser_ByKey],
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
 *    queryKey: [Key_PlayerRecordAdmin.RecordBulk_ByUserId, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_FetchRecordBulk_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, data: BulkGetPlayerRecordsRequest },
    options?: Omit<UseQueryOptions<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetAdminPlayerRecordResponse>) => void
  ): UseQueryResult<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_FetchRecordBulk_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchRecordBulk_ByUserId(input.userId, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.RecordBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_UpdateRecordBulk_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkUpdatePlayerRecordResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkUpdatePlayerRecordsRequest }>, 'mutationKey'>,
    callback?: (data: BulkUpdatePlayerRecordResponseArray) => void
  ): UseMutationResult<BulkUpdatePlayerRecordResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkUpdatePlayerRecordsRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BulkUpdatePlayerRecordsRequest }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRecordBulk_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.RecordBulk_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_DeleteRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRecord_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey],
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
 *    queryKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
  ): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_GetRecord_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecord_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_CreateRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRecord_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_UpdateRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRecord_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Record_ByUserId_ByKey],
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
 *    queryKey: [Key_PlayerRecordAdmin.Size_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetSize_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<PlayerRecordSizeResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerRecordSizeResponse>) => void
  ): UseQueryResult<PlayerRecordSizeResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_GetSize_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSize_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerRecordSizeResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Size_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_DeletePublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePublic_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey],
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
 *    queryKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePlayerRecordAdminApi_GetPublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
  ): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRecordAdminApi_GetPublic_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPublic_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_CreatePublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPublic_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePlayerRecordAdminApi_UpdatePublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PlayerRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePublic_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRecordAdmin.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  