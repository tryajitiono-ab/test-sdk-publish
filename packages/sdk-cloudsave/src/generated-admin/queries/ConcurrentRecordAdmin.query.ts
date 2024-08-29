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
import { ConcurrentRecordAdminApi } from "../ConcurrentRecordAdminApi.js"

import { AdminConcurrentRecordRequest } from '../../generated-definitions/AdminConcurrentRecordRequest.js'
import { AdminGameConcurrentRecordRequest } from '../../generated-definitions/AdminGameConcurrentRecordRequest.js'
import { AdminPlayerConcurrentRecordRequest } from '../../generated-definitions/AdminPlayerConcurrentRecordRequest.js'
import { PlayerRecordConcurrentUpdateResponse } from '../../generated-definitions/PlayerRecordConcurrentUpdateResponse.js'


export enum Key_ConcurrentRecordAdmin {
  ConcurrentRecord_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentRecord_ByKey',
ConcurrentAdminrecord_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentAdminrecord_ByKey',
ConcurrentRecord_ByUserId_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentRecord_ByUserId_ByKey',
ConcurrentAdminrecord_ByUserId_ByKey = 'Cloudsave.ConcurrentRecordAdmin.ConcurrentAdminrecord_ByUserId_ByKey',
PublicConcurrent_ByUserId_ByKey = 'Cloudsave.ConcurrentRecordAdmin.PublicConcurrent_ByUserId_ByKey',

}

  

export const useConcurrentRecordAdminApi_UpdateConcurrentRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminConcurrentRecordRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminConcurrentRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: AdminConcurrentRecordRequest }) => {
      const response = 
            (await ConcurrentRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConcurrentRecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentRecord_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useConcurrentRecordAdminApi_UpdateConcurrentAdminrecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminGameConcurrentRecordRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminGameConcurrentRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: AdminGameConcurrentRecordRequest }) => {
      const response = 
            (await ConcurrentRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConcurrentAdminrecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentAdminrecord_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useConcurrentRecordAdminApi_UpdateConcurrentRecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
  ): UseMutationResult<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: AdminConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }) => {
      const response = 
            (await ConcurrentRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConcurrentRecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentRecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useConcurrentRecordAdminApi_UpdateConcurrentAdminrecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
  ): UseMutationResult<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }) => {
      const response = 
            (await ConcurrentRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConcurrentAdminrecord_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.ConcurrentAdminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useConcurrentRecordAdminApi_UpdatePublicConcurrent_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: PlayerRecordConcurrentUpdateResponse) => void
  ): UseMutationResult<PlayerRecordConcurrentUpdateResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: AdminConcurrentRecordRequest, queryParams?: {responseBody?: boolean | null} }) => {
      const response = 
            (await ConcurrentRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePublicConcurrent_ByUserId_ByKey(input.userId, input.key, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConcurrentRecordAdmin.PublicConcurrent_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  