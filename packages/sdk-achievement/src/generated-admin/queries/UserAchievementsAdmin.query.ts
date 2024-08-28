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
import { UserAchievementsAdminApi } from "../UserAchievementsAdminApi.js"

import { PaginatedUserAchievementResponse } from '../../generated-definitions/PaginatedUserAchievementResponse.js'


export enum Key_UserAchievementsAdmin {
  Achievements_ByUserId = 'Achievement.UserAchievementsAdmin.Achievements_ByUserId',
Reset_ByUserId_ByAchievementCode = 'Achievement.UserAchievementsAdmin.Reset_ByUserId_ByAchievementCode',
Unlock_ByUserId_ByAchievementCode = 'Achievement.UserAchievementsAdmin.Unlock_ByUserId_ByAchievementCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserAchievementsAdmin.Achievements_ByUserId, input]
 * }
 * ```
 */
export const useUserAchievementsAdminApi_GetAchievements_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, preferUnlocked?: boolean | null, sortBy?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<PaginatedUserAchievementResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedUserAchievementResponse>) => void
  ): UseQueryResult<PaginatedUserAchievementResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserAchievementsAdminApi_GetAchievements_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserAchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAchievements_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedUserAchievementResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserAchievementsAdmin.Achievements_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserAchievementsAdminApi_DeleteReset_ByUserId_ByAchievementCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, achievementCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, achievementCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, achievementCode:string }) => {
      const response = 
            (await UserAchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteReset_ByUserId_ByAchievementCode(input.userId, input.achievementCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserAchievementsAdmin.Reset_ByUserId_ByAchievementCode],
    mutationFn,
    ...options
  })
}
  
  

export const useUserAchievementsAdminApi_UpdateUnlock_ByUserId_ByAchievementCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, achievementCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, achievementCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, achievementCode:string }) => {
      const response = 
            (await UserAchievementsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUnlock_ByUserId_ByAchievementCode(input.userId, input.achievementCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserAchievementsAdmin.Unlock_ByUserId_ByAchievementCode],
    mutationFn,
    ...options
  })
}
  
  
  