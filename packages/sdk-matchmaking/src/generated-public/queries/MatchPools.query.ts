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
import { MatchPoolsApi } from "../MatchPoolsApi.js"

import { ListMatchPoolTicketsResponse } from '../../generated-definitions/ListMatchPoolTicketsResponse.js'
import { ListMatchPoolsResponse } from '../../generated-definitions/ListMatchPoolsResponse.js'
import { MatchPool } from '../../generated-definitions/MatchPool.js'
import { MatchPoolConfig } from '../../generated-definitions/MatchPoolConfig.js'
import { PlayerMetricRecord } from '../../generated-definitions/PlayerMetricRecord.js'
import { TicketMetricResultRecord } from '../../generated-definitions/TicketMetricResultRecord.js'


export enum Key_MatchPools {
  MatchPools = 'Matchmaking.MatchPools.MatchPools',
MatchPool = 'Matchmaking.MatchPools.MatchPool',
MatchPool_ByPool = 'Matchmaking.MatchPools.MatchPool_ByPool',
Metrics_ByPool = 'Matchmaking.MatchPools.Metrics_ByPool',
Tickets_ByPool = 'Matchmaking.MatchPools.Tickets_ByPool',
MetricsPlayer_ByPool = 'Matchmaking.MatchPools.MetricsPlayer_ByPool',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchPools.MatchPools, input]
 * }
 * ```
 */
export const useMatchPoolsApi_GetMatchPools = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, name?: string | null, offset?: number} },
    options?: Omit<UseQueryOptions<ListMatchPoolsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListMatchPoolsResponse>) => void
  ): UseQueryResult<ListMatchPoolsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchPoolsApi_GetMatchPools>[1]
  ) => async () => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMatchPools(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListMatchPoolsResponse, AxiosError<ApiError>>({
    queryKey: [Key_MatchPools.MatchPools, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchPoolsApi_CreateMatchPool = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchPool }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchPool }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchPool }) => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createMatchPool(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchPools.MatchPool],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchPoolsApi_DeleteMatchPool_ByPool = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { pool:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { pool:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { pool:string }) => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMatchPool_ByPool(input.pool))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchPools.MatchPool_ByPool],
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
 *    queryKey: [Key_MatchPools.MatchPool_ByPool, input]
 * }
 * ```
 */
export const useMatchPoolsApi_GetMatchPool_ByPool = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { pool:string },
    options?: Omit<UseQueryOptions<MatchPool, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<MatchPool>) => void
  ): UseQueryResult<MatchPool, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchPoolsApi_GetMatchPool_ByPool>[1]
  ) => async () => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMatchPool_ByPool(input.pool))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<MatchPool, AxiosError<ApiError>>({
    queryKey: [Key_MatchPools.MatchPool_ByPool, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchPoolsApi_UpdateMatchPool_ByPool = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MatchPool, AxiosError<ApiError>, SdkSetConfigParam & { pool:string, data: MatchPoolConfig }>, 'mutationKey'>,
    callback?: (data: MatchPool) => void
  ): UseMutationResult<MatchPool, AxiosError<ApiError>, SdkSetConfigParam & { pool:string, data: MatchPoolConfig }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { pool:string, data: MatchPoolConfig }) => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateMatchPool_ByPool(input.pool, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchPools.MatchPool_ByPool],
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
 *    queryKey: [Key_MatchPools.Metrics_ByPool, input]
 * }
 * ```
 */
export const useMatchPoolsApi_GetMetrics_ByPool = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { pool:string },
    options?: Omit<UseQueryOptions<TicketMetricResultRecord, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TicketMetricResultRecord>) => void
  ): UseQueryResult<TicketMetricResultRecord, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchPoolsApi_GetMetrics_ByPool>[1]
  ) => async () => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMetrics_ByPool(input.pool))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TicketMetricResultRecord, AxiosError<ApiError>>({
    queryKey: [Key_MatchPools.Metrics_ByPool, input],
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
 *    queryKey: [Key_MatchPools.Tickets_ByPool, input]
 * }
 * ```
 */
export const useMatchPoolsApi_GetTickets_ByPool = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { pool:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<ListMatchPoolTicketsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListMatchPoolTicketsResponse>) => void
  ): UseQueryResult<ListMatchPoolTicketsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchPoolsApi_GetTickets_ByPool>[1]
  ) => async () => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getTickets_ByPool(input.pool, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListMatchPoolTicketsResponse, AxiosError<ApiError>>({
    queryKey: [Key_MatchPools.Tickets_ByPool, input],
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
 *    queryKey: [Key_MatchPools.MetricsPlayer_ByPool, input]
 * }
 * ```
 */
export const useMatchPoolsApi_GetMetricsPlayer_ByPool = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { pool:string },
    options?: Omit<UseQueryOptions<PlayerMetricRecord, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerMetricRecord>) => void
  ): UseQueryResult<PlayerMetricRecord, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchPoolsApi_GetMetricsPlayer_ByPool>[1]
  ) => async () => {
      const response = 
            (await MatchPoolsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMetricsPlayer_ByPool(input.pool))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerMetricRecord, AxiosError<ApiError>>({
    queryKey: [Key_MatchPools.MetricsPlayer_ByPool, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  