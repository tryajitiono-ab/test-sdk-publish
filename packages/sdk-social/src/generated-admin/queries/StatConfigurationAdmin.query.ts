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
import { StatConfigurationAdminApi } from "../StatConfigurationAdminApi.js"

import { StatCreate } from '../../generated-definitions/StatCreate.js'
import { StatImportInfo } from '../../generated-definitions/StatImportInfo.js'
import { StatInfo } from '../../generated-definitions/StatInfo.js'
import { StatPagingSlicedResult } from '../../generated-definitions/StatPagingSlicedResult.js'
import { StatUpdate } from '../../generated-definitions/StatUpdate.js'


export enum Key_StatConfigurationAdmin {
  Stats = 'Social.StatConfigurationAdmin.Stats',
Stat = 'Social.StatConfigurationAdmin.Stat',
StatsExport = 'Social.StatConfigurationAdmin.StatsExport',
StatImport = 'Social.StatConfigurationAdmin.StatImport',
StatsSearch = 'Social.StatConfigurationAdmin.StatsSearch',
Stat_ByStatCode = 'Social.StatConfigurationAdmin.Stat_ByStatCode',
Tied_ByStatCode = 'Social.StatConfigurationAdmin.Tied_ByStatCode',

}

  

export const useStatConfigurationAdminApi_GetStats = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {cycleIds?: string | null, isGlobal?: boolean | null, isPublic?: boolean | null, limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<StatPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StatPagingSlicedResult>) => void
  ): UseQueryResult<StatPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStatConfigurationAdminApi_GetStats>[1]
  ) => async () => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStats(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StatPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.Stats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_CreateStat = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }>, 'mutationKey'>,
    callback?: (data: StatInfo) => void
  ): UseMutationResult<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: StatCreate }) => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStat(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat],
    mutationFn,
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_GetStatsExport = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStatConfigurationAdminApi_GetStatsExport>[1]
  ) => async () => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatsExport())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.StatsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_CreateStatImport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatImportInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {replaceExisting?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: StatImportInfo) => void
  ): UseMutationResult<StatImportInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams?: {replaceExisting?: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File}, queryParams?: {replaceExisting?: boolean | null} }) => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatImport(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.StatImport],
    mutationFn,
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_GetStatsSearch = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {keyword: string | null, isGlobal?: boolean | null, isPublic?: boolean | null, limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<StatPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StatPagingSlicedResult>) => void
  ): UseQueryResult<StatPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStatConfigurationAdminApi_GetStatsSearch>[1]
  ) => async () => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatsSearch(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StatPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.StatsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_DeleteStat_ByStatCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { statCode:string }) => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteStat_ByStatCode(input.statCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat_ByStatCode],
    mutationFn,
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_GetStat_ByStatCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { statCode:string },
    options?: Omit<UseQueryOptions<StatInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StatInfo>) => void
  ): UseQueryResult<StatInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStatConfigurationAdminApi_GetStat_ByStatCode>[1]
  ) => async () => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStat_ByStatCode(input.statCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StatInfo, AxiosError<ApiError>>({
    queryKey: [Key_StatConfigurationAdmin.Stat_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_PatchStat_ByStatCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { statCode:string, data: StatUpdate }>, 'mutationKey'>,
    callback?: (data: StatInfo) => void
  ): UseMutationResult<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { statCode:string, data: StatUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { statCode:string, data: StatUpdate }) => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStat_ByStatCode(input.statCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Stat_ByStatCode],
    mutationFn,
    ...options
  })
}
  
  

export const useStatConfigurationAdminApi_DeleteTied_ByStatCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { statCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { statCode:string }) => {
      const response = 
            (await StatConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteTied_ByStatCode(input.statCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatConfigurationAdmin.Tied_ByStatCode],
    mutationFn,
    ...options
  })
}
  
  
  