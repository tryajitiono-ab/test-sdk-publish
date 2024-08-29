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
import { PlayerRewardApi } from "../PlayerRewardApi.js"

import { ClaimUserRewardsReq } from '../../generated-definitions/ClaimUserRewardsReq.js'
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'


export enum Key_PlayerReward {
  UsersMeRewards = 'Challenge.PlayerReward.UsersMeRewards',
UserMeRewardClaim = 'Challenge.PlayerReward.UserMeRewardClaim',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PlayerReward.UsersMeRewards, input]
 * }
 * ```
 */
export const usePlayerRewardApi_GetUsersMeRewards = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, sortBy?: string | null, status?: 'CLAIMED' | 'UNCLAIMED'} },
    options?: Omit<UseQueryOptions<ListUserRewardsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListUserRewardsResponse>) => void
  ): UseQueryResult<ListUserRewardsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRewardApi_GetUsersMeRewards>[1]
  ) => async () => {
      const response = 
            (await PlayerRewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeRewards(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListUserRewardsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerReward.UsersMeRewards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerRewardApi_CreateUserMeRewardClaim = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUserRewardsReq }>, 'mutationKey'>,
    callback?: (data: UserRewardArray) => void
  ): UseMutationResult<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUserRewardsReq }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ClaimUserRewardsReq }) => {
      const response = 
            (await PlayerRewardApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeRewardClaim(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerReward.UserMeRewardClaim],
    mutationFn,
    ...options
  })
}
  
  
  