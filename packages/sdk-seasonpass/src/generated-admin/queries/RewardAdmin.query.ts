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
import { RewardAdminApi } from "../RewardAdminApi.js"

import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'


export enum Key_RewardAdmin {
  Rewards_BySeasonId = 'Seasonpass.RewardAdmin.Rewards_BySeasonId',
Reward_BySeasonId = 'Seasonpass.RewardAdmin.Reward_BySeasonId',
Reward_BySeasonId_ByCode = 'Seasonpass.RewardAdmin.Reward_BySeasonId_ByCode',

}

  

export const useRewardAdminApi_GetRewards_BySeasonId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { seasonId:string,  queryParams?: {q?: string | null} },
    options?: Omit<UseQueryOptions<RewardInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RewardInfoArray>) => void
  ): UseQueryResult<RewardInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRewardAdminApi_GetRewards_BySeasonId>[1]
  ) => async () => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRewards_BySeasonId(input.seasonId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RewardInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Rewards_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRewardAdminApi_CreateReward_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: RewardCreate }>, 'mutationKey'>,
    callback?: (data: RewardInfo) => void
  ): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: RewardCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, data: RewardCreate }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createReward_BySeasonId(input.seasonId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardAdminApi_DeleteReward_BySeasonId_ByCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, code:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, code:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, code:string }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteReward_BySeasonId_ByCode(input.seasonId, input.code))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardAdminApi_GetReward_BySeasonId_ByCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { seasonId:string, code:string },
    options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RewardInfo>) => void
  ): UseQueryResult<RewardInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRewardAdminApi_GetReward_BySeasonId_ByCode>[1]
  ) => async () => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getReward_BySeasonId_ByCode(input.seasonId, input.code))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRewardAdminApi_PatchReward_BySeasonId_ByCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, code:string, data: RewardUpdate }>, 'mutationKey'>,
    callback?: (data: RewardInfo) => void
  ): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, code:string, data: RewardUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, code:string, data: RewardUpdate }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchReward_BySeasonId_ByCode(input.seasonId, input.code, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_BySeasonId_ByCode],
    mutationFn,
    ...options
  })
}
  
  
  