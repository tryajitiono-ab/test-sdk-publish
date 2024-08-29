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
import { LeaderboardDataV3AdminApi } from "../LeaderboardDataV3AdminApi.js"

import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UserRankingResponseV3 } from '../../generated-definitions/UserRankingResponseV3.js'


export enum Key_LeaderboardDataV3Admin {
  User_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3Admin.User_ByUserId_v3',
Reset_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3Admin.Reset_ByLeaderboardCode_v3',
Alltime_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardDataV3Admin.Alltime_ByLeaderboardCode_v3',
User_ByLeaderboardCode_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3',
Cycle_ByLeaderboardCode_ByCycleId_v3 = 'Leaderboard.LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId_v3',
Reset_ByLeaderboardCode_ByCycleId_v3 = 'Leaderboard.LeaderboardDataV3Admin.Reset_ByLeaderboardCode_ByCycleId_v3',
User_ByLeaderboardCode_ByCycleId_ByUserId_v3 = 'Leaderboard.LeaderboardDataV3Admin.User_ByLeaderboardCode_ByCycleId_ByUserId_v3',

}

  

export const useLeaderboardDataV3AdminApi_DeleteUser_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams: {leaderboardCode: string[]} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams: {leaderboardCode: string[]} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string,  queryParams: {leaderboardCode: string[]} }) => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUser_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardDataV3AdminApi_DeleteReset_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string }) => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteReset_ByLeaderboardCode_v3(input.leaderboardCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.Reset_ByLeaderboardCode_v3],
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
 *    queryKey: [Key_LeaderboardDataV3Admin.Alltime_ByLeaderboardCode_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_GetAlltime_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataV3AdminApi_GetAlltime_ByLeaderboardCode_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAlltime_ByLeaderboardCode_v3(input.leaderboardCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.Alltime_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardDataV3AdminApi_DeleteUser_ByLeaderboardCode_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, userId:string }) => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUser_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3],
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
 *    queryKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_GetUser_ByLeaderboardCode_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string, userId:string },
    options?: Omit<UseQueryOptions<UserRankingResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserRankingResponseV3>) => void
  ): UseQueryResult<UserRankingResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataV3AdminApi_GetUser_ByLeaderboardCode_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByLeaderboardCode_ByUserId_v3(input.leaderboardCode, input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserRankingResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByUserId_v3, input],
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
 *    queryKey: [Key_LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId_v3, input]
 * }
 * ```
 */
export const useLeaderboardDataV3AdminApi_GetCycle_ByLeaderboardCode_ByCycleId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string, cycleId:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataV3AdminApi_GetCycle_ByLeaderboardCode_ByCycleId_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCycle_ByLeaderboardCode_ByCycleId_v3(input.leaderboardCode, input.cycleId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataV3Admin.Cycle_ByLeaderboardCode_ByCycleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardDataV3AdminApi_DeleteReset_ByLeaderboardCode_ByCycleId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, cycleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, cycleId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, cycleId:string }) => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteReset_ByLeaderboardCode_ByCycleId_v3(input.leaderboardCode, input.cycleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.Reset_ByLeaderboardCode_ByCycleId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardDataV3AdminApi_DeleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, cycleId:string, userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, cycleId:string, userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, cycleId:string, userId:string }) => {
      const response = 
            (await LeaderboardDataV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUser_ByLeaderboardCode_ByCycleId_ByUserId_v3(input.leaderboardCode, input.cycleId, input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataV3Admin.User_ByLeaderboardCode_ByCycleId_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  
  