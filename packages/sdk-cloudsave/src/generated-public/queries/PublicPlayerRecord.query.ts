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
import { PublicPlayerRecordApi } from "../PublicPlayerRecordApi.js"

import { BulkGetPlayerRecordResponse } from '../../generated-definitions/BulkGetPlayerRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerRecordKeysResponse } from '../../generated-definitions/ListPlayerRecordKeysResponse.js'
import { PlayerRecordRequest } from '../../generated-definitions/PlayerRecordRequest.js'
import { PlayerRecordResponse } from '../../generated-definitions/PlayerRecordResponse.js'


export enum Key_PublicPlayerRecord {
  UsersMeRecords = 'Cloudsave.PublicPlayerRecord.UsersMeRecords',
UserMeRecordBulk = 'Cloudsave.PublicPlayerRecord.UserMeRecordBulk',
Record_ByUserId_ByKey = 'Cloudsave.PublicPlayerRecord.Record_ByUserId_ByKey',
RecordsPublic_ByUserId = 'Cloudsave.PublicPlayerRecord.RecordsPublic_ByUserId',
PublicMeUser_ByKey = 'Cloudsave.PublicPlayerRecord.PublicMeUser_ByKey',
PublicBulkUser_ByKey = 'Cloudsave.PublicPlayerRecord.PublicBulkUser_ByKey',
RecordBulk_ByUserId = 'Cloudsave.PublicPlayerRecord.RecordBulk_ByUserId',
Public_ByUserId_ByKey = 'Cloudsave.PublicPlayerRecord.Public_ByUserId_ByKey',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicPlayerRecord.UsersMeRecords, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetUsersMeRecords = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
  ): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerRecordApi_GetUsersMeRecords>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeRecords(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.UsersMeRecords, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerRecordApi_CreateUserMeRecordBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }>, 'mutationKey'>,
    callback?: (data: BulkGetPlayerRecordResponse) => void
  ): UseMutationResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkGetPlayerRecordsRequest }) => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeRecordBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.UserMeRecordBulk],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerRecordApi_DeleteRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string }) => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRecord_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey],
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
 *    queryKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
  ): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerRecordApi_GetRecord_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecord_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerRecordApi_CreateRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRecord_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerRecordApi_UpdateRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRecord_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Record_ByUserId_ByKey],
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
 *    queryKey: [Key_PublicPlayerRecord.RecordsPublic_ByUserId, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetRecordsPublic_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListPlayerRecordKeysResponse>) => void
  ): UseQueryResult<ListPlayerRecordKeysResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerRecordApi_GetRecordsPublic_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecordsPublic_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.RecordsPublic_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerRecordApi_DeletePublicMeUser_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string }) => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePublicMeUser_ByKey(input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.PublicMeUser_ByKey],
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
 *    queryKey: [Key_PublicPlayerRecord.PublicBulkUser_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_FetchPublicBulkUser_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { key:string, data: BulkUserIDsRequest },
    options?: Omit<UseQueryOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetPlayerRecordResponse>) => void
  ): UseQueryResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerRecordApi_FetchPublicBulkUser_ByKey>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchPublicBulkUser_ByKey(input.key, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.PublicBulkUser_ByKey, input],
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
 *    queryKey: [Key_PublicPlayerRecord.RecordBulk_ByUserId, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_FetchRecordBulk_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, data: BulkGetPlayerRecordsRequest },
    options?: Omit<UseQueryOptions<BulkGetPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetPlayerRecordResponse>) => void
  ): UseQueryResult<BulkGetPlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerRecordApi_FetchRecordBulk_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchRecordBulk_ByUserId(input.userId, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.RecordBulk_ByUserId, input],
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
 *    queryKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey, input]
 * }
 * ```
 */
export const usePublicPlayerRecordApi_GetPublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<PlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerRecordResponse>) => void
  ): UseQueryResult<PlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicPlayerRecordApi_GetPublic_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPublic_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicPlayerRecordApi_CreatePublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPublic_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicPlayerRecordApi_UpdatePublic_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: PlayerRecordResponse) => void
  ): UseMutationResult<PlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: PlayerRecordRequest }) => {
      const response = 
            (await PublicPlayerRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePublic_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicPlayerRecord.Public_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  