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
import { TierAdminApi } from "../TierAdminApi.js"

import { Tier } from '../../generated-definitions/Tier.js'
import { TierArray } from '../../generated-definitions/TierArray.js'
import { TierCreate } from '../../generated-definitions/TierCreate.js'
import { TierInput } from '../../generated-definitions/TierInput.js'
import { TierPagingSlicedResult } from '../../generated-definitions/TierPagingSlicedResult.js'
import { TierReorder } from '../../generated-definitions/TierReorder.js'
import { UserExpGrant } from '../../generated-definitions/UserExpGrant.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'
import { UserTierGrant } from '../../generated-definitions/UserTierGrant.js'


export enum Key_TierAdmin {
  Tiers_BySeasonId = 'Seasonpass.TierAdmin.Tiers_BySeasonId',
Tier_BySeasonId = 'Seasonpass.TierAdmin.Tier_BySeasonId',
Tier_BySeasonId_ById = 'Seasonpass.TierAdmin.Tier_BySeasonId_ById',
SeasonCurrentExp_ByUserId = 'Seasonpass.TierAdmin.SeasonCurrentExp_ByUserId',
SeasonCurrentTier_ByUserId = 'Seasonpass.TierAdmin.SeasonCurrentTier_ByUserId',
Reorder_BySeasonId_ById = 'Seasonpass.TierAdmin.Reorder_BySeasonId_ById',

}

  

export const useTierAdminApi_GetTiers_BySeasonId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { seasonId:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<TierPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TierPagingSlicedResult>) => void
  ): UseQueryResult<TierPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useTierAdminApi_GetTiers_BySeasonId>[1]
  ) => async () => {
      const response = 
            (await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getTiers_BySeasonId(input.seasonId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TierPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_TierAdmin.Tiers_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useTierAdminApi_CreateTier_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TierArray, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: TierCreate }>, 'mutationKey'>,
    callback?: (data: TierArray) => void
  ): UseMutationResult<TierArray, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: TierCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, data: TierCreate }) => {
      const response = 
            (await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createTier_BySeasonId(input.seasonId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useTierAdminApi_DeleteTier_BySeasonId_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, id:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, id:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, id:string }) => {
      const response = 
            (await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteTier_BySeasonId_ById(input.seasonId, input.id))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId_ById],
    mutationFn,
    ...options
  })
}
  
  

export const useTierAdminApi_UpdateTier_BySeasonId_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, id:string, data: TierInput }>, 'mutationKey'>,
    callback?: (data: Tier) => void
  ): UseMutationResult<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, id:string, data: TierInput }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, id:string, data: TierInput }) => {
      const response = 
            (await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateTier_BySeasonId_ById(input.seasonId, input.id, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_TierAdmin.Tier_BySeasonId_ById],
    mutationFn,
    ...options
  })
}
  
  

export const useTierAdminApi_CreateSeasonCurrentExp_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserExpGrant }>, 'mutationKey'>,
    callback?: (data: UserSeasonSummary) => void
  ): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserExpGrant }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserExpGrant }) => {
      const response = 
            (await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSeasonCurrentExp_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_TierAdmin.SeasonCurrentExp_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useTierAdminApi_CreateSeasonCurrentTier_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserTierGrant }>, 'mutationKey'>,
    callback?: (data: UserSeasonSummary) => void
  ): UseMutationResult<UserSeasonSummary, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserTierGrant }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserTierGrant }) => {
      const response = 
            (await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSeasonCurrentTier_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_TierAdmin.SeasonCurrentTier_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useTierAdminApi_UpdateReorder_BySeasonId_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, id:string, data: TierReorder }>, 'mutationKey'>,
    callback?: (data: Tier) => void
  ): UseMutationResult<Tier, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, id:string, data: TierReorder }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, id:string, data: TierReorder }) => {
      const response = 
            (await TierAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateReorder_BySeasonId_ById(input.seasonId, input.id, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_TierAdmin.Reorder_BySeasonId_ById],
    mutationFn,
    ...options
  })
}
  
  
  