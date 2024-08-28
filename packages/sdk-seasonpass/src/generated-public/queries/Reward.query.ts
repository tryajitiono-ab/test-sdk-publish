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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { RewardApi } from "../RewardApi.js"

import { ClaimableRewards } from '../../generated-definitions/ClaimableRewards.js'
import { UserRewardClaim } from '../../generated-definitions/UserRewardClaim.js'


export enum Key_Reward {
  SeasonCurrentReward_ByUserId = 'Seasonpass.Reward.SeasonCurrentReward_ByUserId',
SeasonCurrentRewardBulk_ByUserId = 'Seasonpass.Reward.SeasonCurrentRewardBulk_ByUserId',

}

  

export const useRewardApi_CreateSeasonCurrentReward_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserRewardClaim }>, 'mutationKey'>,
    callback?: (data: ClaimableRewards) => void
  ): UseMutationResult<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserRewardClaim }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserRewardClaim }) => {
      const response = 
            (await RewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSeasonCurrentReward_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Reward.SeasonCurrentReward_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardApi_CreateSeasonCurrentRewardBulk_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: ClaimableRewards) => void
  ): UseMutationResult<ClaimableRewards, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await RewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSeasonCurrentRewardBulk_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Reward.SeasonCurrentRewardBulk_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  