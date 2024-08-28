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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { GlobalAchievementsApi } from "../GlobalAchievementsApi.js"

import { PaginatedContributorResponse } from '../../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../../generated-definitions/PaginatedUserContributionResponse.js'


export enum Key_GlobalAchievements {
  GlobalAchievements = 'Achievement.GlobalAchievements.GlobalAchievements',
GlobalAchievements_ByUserId = 'Achievement.GlobalAchievements.GlobalAchievements_ByUserId',
ContributorsGlobal_ByAchievementCode = 'Achievement.GlobalAchievements.ContributorsGlobal_ByAchievementCode',
ClaimGlobal_ByUserId_ByAchievementCode = 'Achievement.GlobalAchievements.ClaimGlobal_ByUserId_ByAchievementCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievements.GlobalAchievements, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_GetGlobalAchievements = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {achievementCodes?: string | null, limit?: number, offset?: number, sortBy?: string | null, status?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedGlobalAchievementResponse>) => void
  ): UseQueryResult<PaginatedGlobalAchievementResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGlobalAchievementsApi_GetGlobalAchievements>[1]
  ) => async () => {
      const response = 
            (await GlobalAchievementsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGlobalAchievements(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievements.GlobalAchievements, input],
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
 *    queryKey: [Key_GlobalAchievements.GlobalAchievements_ByUserId, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_GetGlobalAchievements_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {achievementCodes?: string | null, limit?: number, offset?: number, sortBy?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<PaginatedUserContributionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedUserContributionResponse>) => void
  ): UseQueryResult<PaginatedUserContributionResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGlobalAchievementsApi_GetGlobalAchievements_ByUserId>[1]
  ) => async () => {
      const response = 
            (await GlobalAchievementsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGlobalAchievements_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedUserContributionResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievements.GlobalAchievements_ByUserId, input],
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
 *    queryKey: [Key_GlobalAchievements.ContributorsGlobal_ByAchievementCode, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_GetContributorsGlobal_ByAchievementCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { achievementCode:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContributorResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContributorResponse>) => void
  ): UseQueryResult<PaginatedContributorResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGlobalAchievementsApi_GetContributorsGlobal_ByAchievementCode>[1]
  ) => async () => {
      const response = 
            (await GlobalAchievementsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContributorsGlobal_ByAchievementCode(input.achievementCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContributorResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievements.ContributorsGlobal_ByAchievementCode, input],
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
 *    queryKey: [Key_GlobalAchievements.ClaimGlobal_ByUserId_ByAchievementCode, input]
 * }
 * ```
 */
export const useGlobalAchievementsApi_FetchClaimGlobal_ByUserId_ByAchievementCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, achievementCode:string },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGlobalAchievementsApi_FetchClaimGlobal_ByUserId_ByAchievementCode>[1]
  ) => async () => {
      const response = 
            (await GlobalAchievementsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchClaimGlobal_ByUserId_ByAchievementCode(input.userId, input.achievementCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievements.ClaimGlobal_ByUserId_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  