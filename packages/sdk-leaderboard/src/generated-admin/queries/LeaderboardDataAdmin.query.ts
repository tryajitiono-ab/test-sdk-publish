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
import { LeaderboardDataAdminApi } from "../LeaderboardDataAdminApi.js"

import { ArchiveLeaderboardReq } from '../../generated-definitions/ArchiveLeaderboardReq.js'
import { ArchiveLeaderboardSignedUrlResponseArray } from '../../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../../generated-definitions/GetLeaderboardRankingResp.js'
import { UpdateUserPointAdminV1Request } from '../../generated-definitions/UpdateUserPointAdminV1Request.js'
import { UpdateUserPointAdminV1Response } from '../../generated-definitions/UpdateUserPointAdminV1Response.js'
import { UserRankingResponse } from '../../generated-definitions/UserRankingResponse.js'


export enum Key_LeaderboardDataAdmin {
  User_ByUserId = 'Leaderboard.LeaderboardDataAdmin.User_ByUserId',
LeaderboardsArchived = 'Leaderboard.LeaderboardDataAdmin.LeaderboardsArchived',
LeaderboardArchived = 'Leaderboard.LeaderboardDataAdmin.LeaderboardArchived',
Week_ByLeaderboardCode = 'Leaderboard.LeaderboardDataAdmin.Week_ByLeaderboardCode',
Month_ByLeaderboardCode = 'Leaderboard.LeaderboardDataAdmin.Month_ByLeaderboardCode',
Reset_ByLeaderboardCode = 'Leaderboard.LeaderboardDataAdmin.Reset_ByLeaderboardCode',
Today_ByLeaderboardCode = 'Leaderboard.LeaderboardDataAdmin.Today_ByLeaderboardCode',
Season_ByLeaderboardCode = 'Leaderboard.LeaderboardDataAdmin.Season_ByLeaderboardCode',
Alltime_ByLeaderboardCode = 'Leaderboard.LeaderboardDataAdmin.Alltime_ByLeaderboardCode',
User_ByLeaderboardCode_ByUserId = 'Leaderboard.LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId',

}

  

export const useLeaderboardDataAdminApi_DeleteUser_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams: {leaderboardCode: string[]} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams: {leaderboardCode: string[]} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string,  queryParams: {leaderboardCode: string[]} }) => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUser_ByUserId(input.userId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.User_ByUserId],
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
 *    queryKey: [Key_LeaderboardDataAdmin.LeaderboardsArchived, input]
 * }
 * ```
 */
export const useLeaderboardDataAdminApi_GetLeaderboardsArchived = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {leaderboardCodes: string | null, slug?: string | null} },
    options?: Omit<UseQueryOptions<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ArchiveLeaderboardSignedUrlResponseArray>) => void
  ): UseQueryResult<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataAdminApi_GetLeaderboardsArchived>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLeaderboardsArchived(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ArchiveLeaderboardSignedUrlResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.LeaderboardsArchived, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardDataAdminApi_CreateLeaderboardArchived = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ArchiveLeaderboardReq }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ArchiveLeaderboardReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ArchiveLeaderboardReq }) => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeaderboardArchived(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.LeaderboardArchived],
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
 *    queryKey: [Key_LeaderboardDataAdmin.Week_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataAdminApi_GetWeek_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string,  queryParams?: {limit?: number, offset?: number, previousVersion?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataAdminApi_GetWeek_ByLeaderboardCode>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getWeek_ByLeaderboardCode(input.leaderboardCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Week_ByLeaderboardCode, input],
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
 *    queryKey: [Key_LeaderboardDataAdmin.Month_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataAdminApi_GetMonth_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string,  queryParams?: {limit?: number, offset?: number, previousVersion?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataAdminApi_GetMonth_ByLeaderboardCode>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMonth_ByLeaderboardCode(input.leaderboardCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Month_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardDataAdminApi_DeleteReset_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string }) => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteReset_ByLeaderboardCode(input.leaderboardCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.Reset_ByLeaderboardCode],
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
 *    queryKey: [Key_LeaderboardDataAdmin.Today_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataAdminApi_GetToday_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string,  queryParams?: {limit?: number, offset?: number, previousVersion?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataAdminApi_GetToday_ByLeaderboardCode>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getToday_ByLeaderboardCode(input.leaderboardCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Today_ByLeaderboardCode, input],
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
 *    queryKey: [Key_LeaderboardDataAdmin.Season_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataAdminApi_GetSeason_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string,  queryParams?: {limit?: number, offset?: number, previousVersion?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataAdminApi_GetSeason_ByLeaderboardCode>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeason_ByLeaderboardCode(input.leaderboardCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Season_ByLeaderboardCode, input],
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
 *    queryKey: [Key_LeaderboardDataAdmin.Alltime_ByLeaderboardCode, input]
 * }
 * ```
 */
export const useLeaderboardDataAdminApi_GetAlltime_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetLeaderboardRankingResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardRankingResp>) => void
  ): UseQueryResult<GetLeaderboardRankingResp, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataAdminApi_GetAlltime_ByLeaderboardCode>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAlltime_ByLeaderboardCode(input.leaderboardCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardRankingResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.Alltime_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardDataAdminApi_DeleteUser_ByLeaderboardCode_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, userId:string }) => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId],
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
 *    queryKey: [Key_LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId, input]
 * }
 * ```
 */
export const useLeaderboardDataAdminApi_GetUser_ByLeaderboardCode_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string, userId:string,  queryParams?: {previousVersion?: number} },
    options?: Omit<UseQueryOptions<UserRankingResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserRankingResponse>) => void
  ): UseQueryResult<UserRankingResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardDataAdminApi_GetUser_ByLeaderboardCode_ByUserId>[1]
  ) => async () => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserRankingResponse, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardDataAdminApi_UpdateUser_ByLeaderboardCode_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateUserPointAdminV1Response, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, userId:string, data: UpdateUserPointAdminV1Request }>, 'mutationKey'>,
    callback?: (data: UpdateUserPointAdminV1Response) => void
  ): UseMutationResult<UpdateUserPointAdminV1Response, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, userId:string, data: UpdateUserPointAdminV1Request }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, userId:string, data: UpdateUserPointAdminV1Request }) => {
      const response = 
            (await LeaderboardDataAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUser_ByLeaderboardCode_ByUserId(input.leaderboardCode, input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardDataAdmin.User_ByLeaderboardCode_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  