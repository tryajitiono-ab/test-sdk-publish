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
import { StatCycleConfigurationAdminApi } from "../StatCycleConfigurationAdminApi.js"

import { BulkCycleStatsAdd } from '../../generated-definitions/BulkCycleStatsAdd.js'
import { BulkStatCycleOperationResultArray } from '../../generated-definitions/BulkStatCycleOperationResultArray.js'
import { BulkStatCycleRequest } from '../../generated-definitions/BulkStatCycleRequest.js'
import { BulkStatCycleResult } from '../../generated-definitions/BulkStatCycleResult.js'
import { StatCycleCreate } from '../../generated-definitions/StatCycleCreate.js'
import { StatCycleInfo } from '../../generated-definitions/StatCycleInfo.js'
import { StatCyclePagingSlicedResult } from '../../generated-definitions/StatCyclePagingSlicedResult.js'
import { StatCycleUpdate } from '../../generated-definitions/StatCycleUpdate.js'
import { StatImportInfo } from '../../generated-definitions/StatImportInfo.js'


export enum Key_StatCycleConfigurationAdmin {
  StatCycles = 'Social.StatCycleConfigurationAdmin.StatCycles',
StatCycle = 'Social.StatCycleConfigurationAdmin.StatCycle',
StatCycleBulk = 'Social.StatCycleConfigurationAdmin.StatCycleBulk',
StatCyclesExport = 'Social.StatCycleConfigurationAdmin.StatCyclesExport',
StatCycleImport = 'Social.StatCycleConfigurationAdmin.StatCycleImport',
StatCycle_ByCycleId = 'Social.StatCycleConfigurationAdmin.StatCycle_ByCycleId',
Stop_ByCycleId = 'Social.StatCycleConfigurationAdmin.Stop_ByCycleId',
StatAddBulk_ByCycleId = 'Social.StatCycleConfigurationAdmin.StatAddBulk_ByCycleId',

}

  

export const useStatCycleConfigurationAdminApi_GetStatCycles = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {cycleType?: 'ANNUALLY' | 'DAILY' | 'MONTHLY' | 'SEASONAL' | 'WEEKLY', limit?: number, name?: string | null, offset?: number, sortBy?: string | null, status?: 'ACTIVE' | 'INIT' | 'STOPPED'} },
    options?: Omit<UseQueryOptions<StatCyclePagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StatCyclePagingSlicedResult>) => void
  ): UseQueryResult<StatCyclePagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStatCycleConfigurationAdminApi_GetStatCycles>[1]
  ) => async () => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatCycles(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StatCyclePagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCycles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_CreateStatCycle = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCycleCreate }>, 'mutationKey'>,
    callback?: (data: StatCycleInfo) => void
  ): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCycleCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: StatCycleCreate }) => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatCycle(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle],
    mutationFn,
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_CreateStatCycleBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatCycleResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkStatCycleRequest }>, 'mutationKey'>,
    callback?: (data: BulkStatCycleResult) => void
  ): UseMutationResult<BulkStatCycleResult, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkStatCycleRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkStatCycleRequest }) => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatCycleBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycleBulk],
    mutationFn,
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_GetStatCyclesExport = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStatCycleConfigurationAdminApi_GetStatCyclesExport>[1]
  ) => async () => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatCyclesExport())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCyclesExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_CreateStatCycleImport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatImportInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {replaceExisting?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: StatImportInfo) => void
  ): UseMutationResult<StatImportInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {replaceExisting?: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File}, queryParams?: {replaceExisting?: boolean | null} }) => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatCycleImport(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycleImport],
    mutationFn,
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_DeleteStatCycle_ByCycleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { cycleId:string }) => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteStatCycle_ByCycleId(input.cycleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId],
    mutationFn,
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_GetStatCycle_ByCycleId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { cycleId:string },
    options?: Omit<UseQueryOptions<StatCycleInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StatCycleInfo>) => void
  ): UseQueryResult<StatCycleInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStatCycleConfigurationAdminApi_GetStatCycle_ByCycleId>[1]
  ) => async () => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatCycle_ByCycleId(input.cycleId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StatCycleInfo, AxiosError<ApiError>>({
    queryKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_UpdateStatCycle_ByCycleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string, data: StatCycleUpdate }>, 'mutationKey'>,
    callback?: (data: StatCycleInfo) => void
  ): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string, data: StatCycleUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { cycleId:string, data: StatCycleUpdate }) => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatCycle_ByCycleId(input.cycleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatCycle_ByCycleId],
    mutationFn,
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_UpdateStop_ByCycleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string }>, 'mutationKey'>,
    callback?: (data: StatCycleInfo) => void
  ): UseMutationResult<StatCycleInfo, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { cycleId:string }) => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStop_ByCycleId(input.cycleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.Stop_ByCycleId],
    mutationFn,
    ...options
  })
}
  
  

export const useStatCycleConfigurationAdminApi_CreateStatAddBulk_ByCycleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatCycleOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string, data: BulkCycleStatsAdd }>, 'mutationKey'>,
    callback?: (data: BulkStatCycleOperationResultArray) => void
  ): UseMutationResult<BulkStatCycleOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { cycleId:string, data: BulkCycleStatsAdd }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { cycleId:string, data: BulkCycleStatsAdd }) => {
      const response = 
            (await StatCycleConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatAddBulk_ByCycleId(input.cycleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatCycleConfigurationAdmin.StatAddBulk_ByCycleId],
    mutationFn,
    ...options
  })
}
  
  
  