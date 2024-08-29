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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { ConcurrentRecordApi } from "../ConcurrentRecordApi.js"

import { ConcurrentRecordRequest } from '../../generated-definitions/ConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'


export enum Key_ConcurrentRecord {
  ConcurrentRecord_ByKey = 'Cloudsave.ConcurrentRecord.ConcurrentRecord_ByKey',
ConcurrentRecord_ByUserId_ByKey = 'Cloudsave.ConcurrentRecord.ConcurrentRecord_ByUserId_ByKey',
PublicConcurrent_ByUserId_ByKey = 'Cloudsave.ConcurrentRecord.PublicConcurrent_ByUserId_ByKey',

}

  

export const useConcurrentRecordApi_UpdateConcurrentRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: ConcurrentRecordRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: ConcurrentRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: ConcurrentRecordRequest }) => {
      const response = 
            (await ConcurrentRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConcurrentRecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecord.ConcurrentRecord_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useConcurrentRecordApi_UpdateConcurrentRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: ConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
  ): UseMutationResult<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: ConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: ConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }) => {
      const response = 
            (await ConcurrentRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConcurrentRecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecord.ConcurrentRecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useConcurrentRecordApi_UpdatePublicConcurrent_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: ConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
  ): UseMutationResult<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: ConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: ConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }) => {
      const response = 
            (await ConcurrentRecordApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePublicConcurrent_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecord.PublicConcurrent_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  