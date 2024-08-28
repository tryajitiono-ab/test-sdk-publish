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
import { AchievementPlatformAdminApi } from "../AchievementPlatformAdminApi.js"

import { SteamAchievementUpdateRequest } from '../../generated-definitions/SteamAchievementUpdateRequest.js'
import { XblAchievementUpdateRequest } from '../../generated-definitions/XblAchievementUpdateRequest.js'
import { XblUserAchievements } from '../../generated-definitions/XblUserAchievements.js'


export enum Key_AchievementPlatformAdmin {
  AchievementXbl_ByUserId = 'Platform.AchievementPlatformAdmin.AchievementXbl_ByUserId',
AchievementSteam_ByUserId = 'Platform.AchievementPlatformAdmin.AchievementSteam_ByUserId',

}

  

export const useAchievementPlatformAdminApi_GetAchievementXbl_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams: {xboxUserId: string | null} },
    options?: Omit<UseQueryOptions<XblUserAchievements, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<XblUserAchievements>) => void
  ): UseQueryResult<XblUserAchievements, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAchievementPlatformAdminApi_GetAchievementXbl_ByUserId>[1]
  ) => async () => {
      const response = 
            (await AchievementPlatformAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAchievementXbl_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<XblUserAchievements, AxiosError<ApiError>>({
    queryKey: [Key_AchievementPlatformAdmin.AchievementXbl_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useAchievementPlatformAdminApi_UpdateAchievementXbl_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: XblAchievementUpdateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: XblAchievementUpdateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: XblAchievementUpdateRequest }) => {
      const response = 
            (await AchievementPlatformAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAchievementXbl_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_AchievementPlatformAdmin.AchievementXbl_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useAchievementPlatformAdminApi_UpdateAchievementSteam_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SteamAchievementUpdateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SteamAchievementUpdateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SteamAchievementUpdateRequest }) => {
      const response = 
            (await AchievementPlatformAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAchievementSteam_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_AchievementPlatformAdmin.AchievementSteam_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  