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
import { UserAchievementsApi } from "../UserAchievementsApi.js"

import { PaginatedUserAchievementResponse } from '../../generated-definitions/PaginatedUserAchievementResponse.js'


export enum Key_UserAchievements {
  Achievements_ByUserId = 'Achievement.UserAchievements.Achievements_ByUserId',
Unlock_ByUserId_ByAchievementCode = 'Achievement.UserAchievements.Unlock_ByUserId_ByAchievementCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserAchievements.Achievements_ByUserId, input]
 * }
 * ```
 */
export const useUserAchievementsApi_GetAchievements_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, preferUnlocked?: boolean | null, sortBy?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<PaginatedUserAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedUserAchievementResponse>) => void
  ): UseQueryResult<PaginatedUserAchievementResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserAchievementsApi_GetAchievements_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserAchievementsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAchievements_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedUserAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserAchievements.Achievements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserAchievementsApi_UpdateUnlock_ByUserId_ByAchievementCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, achievementCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, achievementCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, achievementCode:string }) => {
      const response = 
            (await UserAchievementsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUnlock_ByUserId_ByAchievementCode(input.userId, input.achievementCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserAchievements.Unlock_ByUserId_ByAchievementCode],
    mutationFn,
    ...options
  })
}
  
  
  