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
import { PlayerRewardAdminApi } from "../PlayerRewardAdminApi.js"

import { ClaimUserRewardsReq } from '../../generated-definitions/ClaimUserRewardsReq.js'
import { ClaimUsersRewardsRequest } from '../../generated-definitions/ClaimUsersRewardsRequest.js'
import { ClaimUsersRewardsResponseArray } from '../../generated-definitions/ClaimUsersRewardsResponseArray.js'
import { ListUserRewardsResponse } from '../../generated-definitions/ListUserRewardsResponse.js'
import { UserRewardArray } from '../../generated-definitions/UserRewardArray.js'


export enum Key_PlayerRewardAdmin {
  UserRewardClaim = 'Challenge.PlayerRewardAdmin.UserRewardClaim',
Rewards_ByUserId = 'Challenge.PlayerRewardAdmin.Rewards_ByUserId',
RewardClaim_ByUserId = 'Challenge.PlayerRewardAdmin.RewardClaim_ByUserId',

}

  

export const usePlayerRewardAdminApi_CreateUserRewardClaim = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ClaimUsersRewardsResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUsersRewardsRequest[] }>, 'mutationKey'>,
    callback?: (data: ClaimUsersRewardsResponseArray) => void
  ): UseMutationResult<ClaimUsersRewardsResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimUsersRewardsRequest[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ClaimUsersRewardsRequest[] }) => {
      const response = 
            (await PlayerRewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserRewardClaim(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRewardAdmin.UserRewardClaim],
    mutationFn,
    ...options
  })
}
  
  

export const usePlayerRewardAdminApi_GetRewards_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null, status?: 'CLAIMED' | 'UNCLAIMED'} },
    options?: Omit<UseQueryOptions<ListUserRewardsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListUserRewardsResponse>) => void
  ): UseQueryResult<ListUserRewardsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerRewardAdminApi_GetRewards_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PlayerRewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRewards_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListUserRewardsResponse, AxiosError<ApiError>>({
    queryKey: [Key_PlayerRewardAdmin.Rewards_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerRewardAdminApi_CreateRewardClaim_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: ClaimUserRewardsReq }>, 'mutationKey'>,
    callback?: (data: UserRewardArray) => void
  ): UseMutationResult<UserRewardArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: ClaimUserRewardsReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: ClaimUserRewardsReq }) => {
      const response = 
            (await PlayerRewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRewardClaim_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlayerRewardAdmin.RewardClaim_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  