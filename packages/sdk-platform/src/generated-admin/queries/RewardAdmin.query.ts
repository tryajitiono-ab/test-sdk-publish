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

import { ConditionMatchResult } from '../../generated-definitions/ConditionMatchResult.js'
import { DeleteRewardConditionRequest } from '../../generated-definitions/DeleteRewardConditionRequest.js'
import { EventPayload } from '../../generated-definitions/EventPayload.js'
import { RewardCreate } from '../../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../../generated-definitions/RewardPagingSlicedResult.js'
import { RewardUpdate } from '../../generated-definitions/RewardUpdate.js'


export enum Key_RewardAdmin {
  Reward = 'Platform.RewardAdmin.Reward',
RewardsExport = 'Platform.RewardAdmin.RewardsExport',
RewardImport = 'Platform.RewardAdmin.RewardImport',
Reward_ByRewardId = 'Platform.RewardAdmin.Reward_ByRewardId',
RewardsByCriteria = 'Platform.RewardAdmin.RewardsByCriteria',
Match_ByRewardId = 'Platform.RewardAdmin.Match_ByRewardId',
Record_ByRewardId = 'Platform.RewardAdmin.Record_ByRewardId',

}

  

export const useRewardAdminApi_CreateReward = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RewardCreate }>, 'mutationKey'>,
    callback?: (data: RewardInfo) => void
  ): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: RewardCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: RewardCreate }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createReward(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardAdminApi_GetRewardsExport = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRewardAdminApi_GetRewardsExport>[1]
  ) => async () => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRewardsExport())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.RewardsExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRewardAdminApi_CreateRewardImport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams: {replaceExisting: boolean | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File}, queryParams: {replaceExisting: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File}, queryParams: {replaceExisting: boolean | null} }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRewardImport(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.RewardImport],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardAdminApi_DeleteReward_ByRewardId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string }>, 'mutationKey'>,
    callback?: (data: RewardInfo) => void
  ): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { rewardId:string }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteReward_ByRewardId(input.rewardId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_ByRewardId],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardAdminApi_GetReward_ByRewardId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { rewardId:string },
    options?: Omit<UseQueryOptions<RewardInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RewardInfo>) => void
  ): UseQueryResult<RewardInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRewardAdminApi_GetReward_ByRewardId>[1]
  ) => async () => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getReward_ByRewardId(input.rewardId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RewardInfo, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.Reward_ByRewardId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRewardAdminApi_UpdateReward_ByRewardId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string, data: RewardUpdate }>, 'mutationKey'>,
    callback?: (data: RewardInfo) => void
  ): UseMutationResult<RewardInfo, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string, data: RewardUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { rewardId:string, data: RewardUpdate }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateReward_ByRewardId(input.rewardId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Reward_ByRewardId],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardAdminApi_GetRewardsByCriteria = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {eventTopic?: string | null, limit?: number, offset?: number, sortBy?: string[]} },
    options?: Omit<UseQueryOptions<RewardPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RewardPagingSlicedResult>) => void
  ): UseQueryResult<RewardPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRewardAdminApi_GetRewardsByCriteria>[1]
  ) => async () => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRewardsByCriteria(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RewardPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_RewardAdmin.RewardsByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRewardAdminApi_UpdateMatch_ByRewardId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ConditionMatchResult, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string, data: EventPayload }>, 'mutationKey'>,
    callback?: (data: ConditionMatchResult) => void
  ): UseMutationResult<ConditionMatchResult, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string, data: EventPayload }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { rewardId:string, data: EventPayload }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateMatch_ByRewardId(input.rewardId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Match_ByRewardId],
    mutationFn,
    ...options
  })
}
  
  

export const useRewardAdminApi_DeleteRecord_ByRewardId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string, data: DeleteRewardConditionRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { rewardId:string, data: DeleteRewardConditionRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { rewardId:string, data: DeleteRewardConditionRequest }) => {
      const response = 
            (await RewardAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRecord_ByRewardId(input.rewardId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RewardAdmin.Record_ByRewardId],
    mutationFn,
    ...options
  })
}
  
  
  