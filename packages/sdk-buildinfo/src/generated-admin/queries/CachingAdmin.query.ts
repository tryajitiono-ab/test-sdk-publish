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
import { CachingAdminApi } from "../CachingAdminApi.js"

import { BulkCalculateDiffCacheRequest } from '../../generated-definitions/BulkCalculateDiffCacheRequest.js'
import { CalculateDiffCacheRequest } from '../../generated-definitions/CalculateDiffCacheRequest.js'
import { CommitDiffCacheRequest } from '../../generated-definitions/CommitDiffCacheRequest.js'
import { CreateDiffCacheRequest } from '../../generated-definitions/CreateDiffCacheRequest.js'


export enum Key_CachingAdmin {
  DiffCache = 'Buildinfo.CachingAdmin.DiffCache',
DiffCalculate = 'Buildinfo.CachingAdmin.DiffCalculate',
DiffCalculateBulk = 'Buildinfo.CachingAdmin.DiffCalculateBulk',

}

  

export const useCachingAdminApi_CreateDiffCache = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDiffCacheRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDiffCacheRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateDiffCacheRequest }) => {
      const response = 
            (await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiffCache(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCache],
    mutationFn,
    ...options
  })
}
  
  

export const useCachingAdminApi_UpdateDiffCache = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CommitDiffCacheRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CommitDiffCacheRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CommitDiffCacheRequest }) => {
      const response = 
            (await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDiffCache(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCache],
    mutationFn,
    ...options
  })
}
  
  

export const useCachingAdminApi_CreateDiffCalculate = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CalculateDiffCacheRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CalculateDiffCacheRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CalculateDiffCacheRequest }) => {
      const response = 
            (await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiffCalculate(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCalculate],
    mutationFn,
    ...options
  })
}
  
  

export const useCachingAdminApi_CreateDiffCalculateBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCalculateDiffCacheRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCalculateDiffCacheRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkCalculateDiffCacheRequest }) => {
      const response = 
            (await CachingAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiffCalculateBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CachingAdmin.DiffCalculateBulk],
    mutationFn,
    ...options
  })
}
  
  
  