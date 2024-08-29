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
import { LeaderboardDataV3Api } from "../LeaderboardDataV3Api.js"

import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { BulkUserRankingResponseV3 } from '../../generated-definitions/BulkUserRankingResponseV3.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../../generated-definitions/UserRankingResponseV3.js'


export enum Key_LeaderboardDataV3 {
  Alltime_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3.Alltime_ByLeaderboardCode_v3',
UserBulk_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3.UserBulk_ByLeaderboardCode_v3',
User_ByLeaderboardCode_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3.User_ByLeaderboardCode_ByUserId_v3',
Cycle_ByLeaderboardCode_ByCycleId_v3 = 'Leaderboard.LeaderboardDataV3.Cycle_ByLeaderboardCode_ByCycleId_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_LeaderboardDataV3.Alltime_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3Api_GetAlltime_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataV3Api_GetAlltime_ByLeaderboardCode_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataV3Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAlltime_ByLeaderboardCode_v3(input.leaderboardCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3.Alltime_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardDataV3Api_CreateUserBulk_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkUserRankingResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, data: BulkUserIDsRequest }>, 'mutationKey'>,
    callback?: (data: BulkUserRankingResponseV3) => void
  ): UseMutationResult<BulkUserRankingResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, data: BulkUserIDsRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, data: BulkUserIDsRequest }) => {
      const response = 
            (await LeaderboardDataV3Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserBulk_ByLeaderboardCode_v3(input.leaderboardCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataV3.UserBulk_ByLeaderboardCode_v3],
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
 *    queryKey: [Key_LeaderboardDataV3.User_ByLeaderboardCode_ByUserId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3Api_GetUser_ByLeaderboardCode_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string, userId:string },
    options?: Omit<UseQueryOptions<UserRankingResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserRankingResponseV3>) => void
  ): UseQueryResult<UserRankingResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataV3Api_GetUser_ByLeaderboardCode_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataV3Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserRankingResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3.User_ByLeaderboardCode_ByUserId_v3, input],
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
 *    queryKey: [Key_LeaderboardDataV3.Cycle_ByLeaderboardCode_ByCycleId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3Api_GetCycle_ByLeaderboardCode_ByCycleId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string, cycleId:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataV3Api_GetCycle_ByLeaderboardCode_ByCycleId_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataV3Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCycle_ByLeaderboardCode_ByCycleId_v3(input.leaderboardCode, input.cycleId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3.Cycle_ByLeaderboardCode_ByCycleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  