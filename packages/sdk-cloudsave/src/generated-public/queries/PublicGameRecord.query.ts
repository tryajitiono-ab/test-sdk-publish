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
import { PublicGameRecordApi } from "../PublicGameRecordApi.js"

import { BulkGetGameRecordRequest } from '../../generated-definitions/BulkGetGameRecordRequest.js'
import { BulkGetGameRecordResponse } from '../../generated-definitions/BulkGetGameRecordResponse.js'
import { GameRecordRequest } from '../../generated-definitions/GameRecordRequest.js'
import { GameRecordResponse } from '../../generated-definitions/GameRecordResponse.js'


export enum Key_PublicGameRecord {
  RecordBulk = 'Cloudsave.PublicGameRecord.RecordBulk',
Record_ByKey = 'Cloudsave.PublicGameRecord.Record_ByKey',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicGameRecord.RecordBulk, input]
 * }
 * ```
 */
export const usePublicGameRecordApi_FetchRecordBulk = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: BulkGetGameRecordRequest },
    options?: Omit<UseQueryOptions<BulkGetGameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetGameRecordResponse>) => void
  ): UseQueryResult<BulkGetGameRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicGameRecordApi_FetchRecordBulk>[1]
  ) => async () => {
      const response = 
            (await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchRecordBulk(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetGameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGameRecord.RecordBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicGameRecordApi_DeleteRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string }) => {
      const response = 
            (await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRecord_ByKey(input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicGameRecord.Record_ByKey],
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
 *    queryKey: [Key_PublicGameRecord.Record_ByKey, input]
 * }
 * ```
 */
export const usePublicGameRecordApi_GetRecord_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { key:string },
    options?: Omit<UseQueryOptions<GameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GameRecordResponse>) => void
  ): UseQueryResult<GameRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicGameRecordApi_GetRecord_ByKey>[1]
  ) => async () => {
      const response = 
            (await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecord_ByKey(input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicGameRecord.Record_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicGameRecordApi_CreateRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }>, 'mutationKey'>,
    callback?: (data: GameRecordResponse) => void
  ): UseMutationResult<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: GameRecordRequest }) => {
      const response = 
            (await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicGameRecord.Record_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicGameRecordApi_UpdateRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }>, 'mutationKey'>,
    callback?: (data: GameRecordResponse) => void
  ): UseMutationResult<GameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: GameRecordRequest }) => {
      const response = 
            (await PublicGameRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicGameRecord.Record_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  