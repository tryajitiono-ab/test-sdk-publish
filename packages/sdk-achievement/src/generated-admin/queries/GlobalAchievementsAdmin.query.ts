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
import { GlobalAchievementsAdminApi } from "../GlobalAchievementsAdminApi.js"

import { PaginatedContributorResponse } from '../../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../../generated-definitions/PaginatedUserContributionResponse.js'


export enum Key_GlobalAchievementsAdmin {
  GlobalAchievements = 'Achievement.GlobalAchievementsAdmin.GlobalAchievements',
GlobalAchievements_ByUserId = 'Achievement.GlobalAchievementsAdmin.GlobalAchievements_ByUserId',
ResetGlobal_ByAchievementCode = 'Achievement.GlobalAchievementsAdmin.ResetGlobal_ByAchievementCode',
ContributorsGlobal_ByAchievementCode = 'Achievement.GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements, input]
 * }
 * ```
 */
export const useGlobalAchievementsAdminApi_GetGlobalAchievements = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {achievementCodes?: string | null, limit?: number, offset?: number, sortBy?: string | null, status?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedGlobalAchievementResponse>) => void
  ): UseQueryResult<PaginatedGlobalAchievementResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGlobalAchievementsAdminApi_GetGlobalAchievements>[1]
  ) => async () => {
      const response = 
            (await GlobalAchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGlobalAchievements(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedGlobalAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements, input],
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
 *    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements_ByUserId, input]
 * }
 * ```
 */
export const useGlobalAchievementsAdminApi_GetGlobalAchievements_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {achievementCodes?: string | null, limit?: number, offset?: number, sortBy?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<PaginatedUserContributionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedUserContributionResponse>) => void
  ): UseQueryResult<PaginatedUserContributionResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGlobalAchievementsAdminApi_GetGlobalAchievements_ByUserId>[1]
  ) => async () => {
      const response = 
            (await GlobalAchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGlobalAchievements_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedUserContributionResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.GlobalAchievements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGlobalAchievementsAdminApi_DeleteResetGlobal_ByAchievementCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { achievementCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { achievementCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { achievementCode:string }) => {
      const response = 
            (await GlobalAchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteResetGlobal_ByAchievementCode(input.achievementCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GlobalAchievementsAdmin.ResetGlobal_ByAchievementCode],
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
 *    queryKey: [Key_GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode, input]
 * }
 * ```
 */
export const useGlobalAchievementsAdminApi_GetContributorsGlobal_ByAchievementCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { achievementCode:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContributorResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContributorResponse>) => void
  ): UseQueryResult<PaginatedContributorResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGlobalAchievementsAdminApi_GetContributorsGlobal_ByAchievementCode>[1]
  ) => async () => {
      const response = 
            (await GlobalAchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContributorsGlobal_ByAchievementCode(input.achievementCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContributorResponse, AxiosError<ApiError>>({
    queryKey: [Key_GlobalAchievementsAdmin.ContributorsGlobal_ByAchievementCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  