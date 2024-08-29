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
import { LeaderboardConfigurationApi } from "../LeaderboardConfigurationApi.js"

import { GetAllLeaderboardConfigsPublicResp } from '../../generated-definitions/GetAllLeaderboardConfigsPublicResp.js'
import { LeaderboardConfigReq } from '../../generated-definitions/LeaderboardConfigReq.js'


export enum Key_LeaderboardConfiguration {
  Leaderboards = 'Leaderboard.LeaderboardConfiguration.Leaderboards',
Leaderboard = 'Leaderboard.LeaderboardConfiguration.Leaderboard',
Leaderboards_v2 = 'Leaderboard.LeaderboardConfiguration.Leaderboards_v2',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardConfiguration.Leaderboards, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationApi_GetLeaderboards = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {isArchived?: boolean | null, isDeleted?: boolean | null, limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetAllLeaderboardConfigsPublicResp>) => void
  ): UseQueryResult<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardConfigurationApi_GetLeaderboards>[1]
  ) => async () => {
      const response = 
            (await LeaderboardConfigurationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLeaderboards(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfiguration.Leaderboards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardConfigurationApi_CreateLeaderboard = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }>, 'mutationKey'>,
    callback?: (data: LeaderboardConfigReq) => void
  ): UseMutationResult<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: LeaderboardConfigReq }) => {
      const response = 
            (await LeaderboardConfigurationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeaderboard(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfiguration.Leaderboard],
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
 *    queryKey: [Key_LeaderboardConfiguration.Leaderboards_v2, input]
 * }
 * ```
 */
export const useLeaderboardConfigurationApi_GetLeaderboards_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetAllLeaderboardConfigsPublicResp>) => void
  ): UseQueryResult<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardConfigurationApi_GetLeaderboards_v2>[1]
  ) => async () => {
      const response = 
            (await LeaderboardConfigurationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLeaderboards_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetAllLeaderboardConfigsPublicResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfiguration.Leaderboards_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  