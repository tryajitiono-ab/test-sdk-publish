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
import { SeasonAdminApi } from "../SeasonAdminApi.js"

import { BulkUserProgressionRequest } from '../../generated-definitions/BulkUserProgressionRequest.js'
import { ClaimableUserSeasonInfo } from '../../generated-definitions/ClaimableUserSeasonInfo.js'
import { ExpGrantHistoryPagingSlicedResult } from '../../generated-definitions/ExpGrantHistoryPagingSlicedResult.js'
import { FullSeasonInfo } from '../../generated-definitions/FullSeasonInfo.js'
import { ListSeasonInfoPagingSlicedResult } from '../../generated-definitions/ListSeasonInfoPagingSlicedResult.js'
import { ListUserSeasonInfoPagingSlicedResult } from '../../generated-definitions/ListUserSeasonInfoPagingSlicedResult.js'
import { Ownership } from '../../generated-definitions/Ownership.js'
import { ReasonTagsResult } from '../../generated-definitions/ReasonTagsResult.js'
import { SeasonCloneRequest } from '../../generated-definitions/SeasonCloneRequest.js'
import { SeasonCreate } from '../../generated-definitions/SeasonCreate.js'
import { SeasonInfo } from '../../generated-definitions/SeasonInfo.js'
import { SeasonSummary } from '../../generated-definitions/SeasonSummary.js'
import { SeasonUpdate } from '../../generated-definitions/SeasonUpdate.js'
import { UserPurchasable } from '../../generated-definitions/UserPurchasable.js'
import { UserSeasonSummary } from '../../generated-definitions/UserSeasonSummary.js'
import { UserSeasonSummaryArray } from '../../generated-definitions/UserSeasonSummaryArray.js'


export enum Key_SeasonAdmin {
  Seasons = 'Seasonpass.SeasonAdmin.Seasons',
Season = 'Seasonpass.SeasonAdmin.Season',
SeasonsCurrent = 'Seasonpass.SeasonAdmin.SeasonsCurrent',
Season_BySeasonId = 'Seasonpass.SeasonAdmin.Season_BySeasonId',
Seasons_ByUserId = 'Seasonpass.SeasonAdmin.Seasons_ByUserId',
Full_BySeasonId = 'Seasonpass.SeasonAdmin.Full_BySeasonId',
Clone_BySeasonId = 'Seasonpass.SeasonAdmin.Clone_BySeasonId',
Retire_BySeasonId = 'Seasonpass.SeasonAdmin.Retire_BySeasonId',
Publish_BySeasonId = 'Seasonpass.SeasonAdmin.Publish_BySeasonId',
Unpublish_BySeasonId = 'Seasonpass.SeasonAdmin.Unpublish_BySeasonId',
SeasonsExpHistory_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsExpHistory_ByUserId',
SeasonCurrentReset_ByUserId = 'Seasonpass.SeasonAdmin.SeasonCurrentReset_ByUserId',
SeasonCurrentUserBulkProgression = 'Seasonpass.SeasonAdmin.SeasonCurrentUserBulkProgression',
Data_ByUserId_BySeasonId = 'Seasonpass.SeasonAdmin.Data_ByUserId_BySeasonId',
SeasonsExpHistoryTags_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsExpHistoryTags_ByUserId',
SeasonsCurrentProgression_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsCurrentProgression_ByUserId',
SeasonCurrentPurchasable_ByUserId = 'Seasonpass.SeasonAdmin.SeasonCurrentPurchasable_ByUserId',
SeasonsCurrentPassesOwnershipAny_ByUserId = 'Seasonpass.SeasonAdmin.SeasonsCurrentPassesOwnershipAny_ByUserId',

}

  

export const useSeasonAdminApi_GetSeasons = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, status?: string[]} },
    options?: Omit<UseQueryOptions<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListSeasonInfoPagingSlicedResult>) => void
  ): UseQueryResult<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeasons>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeasons(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListSeasonInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Seasons, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_CreateSeason = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SeasonCreate }>, 'mutationKey'>,
    callback?: (data: SeasonInfo) => void
  ): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SeasonCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: SeasonCreate }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSeason(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetSeasonsCurrent = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<SeasonSummary, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SeasonSummary>) => void
  ): UseQueryResult<SeasonSummary, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeasonsCurrent>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeasonsCurrent())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SeasonSummary, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrent, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_DeleteSeason_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteSeason_BySeasonId(input.seasonId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetSeason_BySeasonId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { seasonId:string },
    options?: Omit<UseQueryOptions<SeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SeasonInfo>) => void
  ): UseQueryResult<SeasonInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeason_BySeasonId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeason_BySeasonId(input.seasonId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Season_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_PatchSeason_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: SeasonUpdate }>, 'mutationKey'>,
    callback?: (data: SeasonInfo) => void
  ): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: SeasonUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, data: SeasonUpdate }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchSeason_BySeasonId(input.seasonId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.Season_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetSeasons_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListUserSeasonInfoPagingSlicedResult>) => void
  ): UseQueryResult<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeasons_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeasons_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListUserSeasonInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Seasons_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetFull_BySeasonId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { seasonId:string },
    options?: Omit<UseQueryOptions<FullSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullSeasonInfo>) => void
  ): UseQueryResult<FullSeasonInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetFull_BySeasonId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getFull_BySeasonId(input.seasonId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Full_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_CreateClone_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: SeasonCloneRequest }>, 'mutationKey'>,
    callback?: (data: SeasonInfo) => void
  ): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string, data: SeasonCloneRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string, data: SeasonCloneRequest }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createClone_BySeasonId(input.seasonId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.Clone_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_UpdateRetire_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string,  queryParams?: {force?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: SeasonInfo) => void
  ): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string,  queryParams?: {force?: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string,  queryParams?: {force?: boolean | null} }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRetire_BySeasonId(input.seasonId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.Retire_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_UpdatePublish_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string }>, 'mutationKey'>,
    callback?: (data: SeasonInfo) => void
  ): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePublish_BySeasonId(input.seasonId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.Publish_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_UpdateUnpublish_BySeasonId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string,  queryParams?: {force?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: SeasonInfo) => void
  ): UseMutationResult<SeasonInfo, AxiosError<ApiError>, SdkSetConfigParam & { seasonId:string,  queryParams?: {force?: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { seasonId:string,  queryParams?: {force?: boolean | null} }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUnpublish_BySeasonId(input.seasonId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.Unpublish_BySeasonId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetSeasonsExpHistory_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {from?: string | null, limit?: number, offset?: number, seasonId?: string | null, source?: 'PAID_FOR' | 'SWEAT', tags?: string[], to?: string | null} },
    options?: Omit<UseQueryOptions<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ExpGrantHistoryPagingSlicedResult>) => void
  ): UseQueryResult<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeasonsExpHistory_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeasonsExpHistory_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ExpGrantHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsExpHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_DeleteSeasonCurrentReset_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteSeasonCurrentReset_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentReset_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_CreateSeasonCurrentUserBulkProgression = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserSeasonSummaryArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserProgressionRequest }>, 'mutationKey'>,
    callback?: (data: UserSeasonSummaryArray) => void
  ): UseMutationResult<UserSeasonSummaryArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserProgressionRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserProgressionRequest }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSeasonCurrentUserBulkProgression(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentUserBulkProgression],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetData_ByUserId_BySeasonId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, seasonId:string },
    options?: Omit<UseQueryOptions<ClaimableUserSeasonInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ClaimableUserSeasonInfo>) => void
  ): UseQueryResult<ClaimableUserSeasonInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetData_ByUserId_BySeasonId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getData_ByUserId_BySeasonId(input.userId, input.seasonId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ClaimableUserSeasonInfo, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.Data_ByUserId_BySeasonId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetSeasonsExpHistoryTags_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {seasonId?: string | null} },
    options?: Omit<UseQueryOptions<ReasonTagsResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ReasonTagsResult>) => void
  ): UseQueryResult<ReasonTagsResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeasonsExpHistoryTags_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeasonsExpHistoryTags_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ReasonTagsResult, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsExpHistoryTags_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetSeasonsCurrentProgression_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserSeasonSummary, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserSeasonSummary>) => void
  ): UseQueryResult<UserSeasonSummary, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeasonsCurrentProgression_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeasonsCurrentProgression_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserSeasonSummary, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrentProgression_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSeasonAdminApi_CreateSeasonCurrentPurchasable_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPurchasable }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPurchasable }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserPurchasable }) => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSeasonCurrentPurchasable_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SeasonAdmin.SeasonCurrentPurchasable_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useSeasonAdminApi_GetSeasonsCurrentPassesOwnershipAny_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {passCodes?: string[]} },
    options?: Omit<UseQueryOptions<Ownership, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<Ownership>) => void
  ): UseQueryResult<Ownership, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSeasonAdminApi_GetSeasonsCurrentPassesOwnershipAny_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SeasonAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSeasonsCurrentPassesOwnershipAny_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<Ownership, AxiosError<ApiError>>({
    queryKey: [Key_SeasonAdmin.SeasonsCurrentPassesOwnershipAny_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  