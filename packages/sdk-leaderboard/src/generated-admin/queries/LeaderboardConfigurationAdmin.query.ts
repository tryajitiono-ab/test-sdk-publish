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
import { LeaderboardConfigurationAdminApi } from "../LeaderboardConfigurationAdminApi.js"

import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsResp } from '../../generated-definitions/GetAllLeaderboardConfigsResp.js'
import { GetLeaderboardConfigResp } from '../../generated-definitions/GetLeaderboardConfigResp.js'
import { LeaderboardConfigReq } from '../../generated-definitions/LeaderboardConfigReq.js'
import { UpdateLeaderboardConfigReq } from '../../generated-definitions/UpdateLeaderboardConfigReq.js'


export enum Key_LeaderboardConfigurationAdmin {
  Leaderboards = 'Leaderboard.LeaderboardConfigurationAdmin.Leaderboards',
Leaderboard = 'Leaderboard.LeaderboardConfigurationAdmin.Leaderboard',
LeaderboardDelete = 'Leaderboard.LeaderboardConfigurationAdmin.LeaderboardDelete',
Leaderboard_ByLeaderboardCode = 'Leaderboard.LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode',
Hard_ByLeaderboardCode = 'Leaderboard.LeaderboardConfigurationAdmin.Hard_ByLeaderboardCode',

}

  

export const useLeaderboardConfigurationAdminApi_GetLeaderboards = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {isArchived?: boolean | null, isDeleted?: boolean | null, limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetAllLeaderboardConfigsResp>) => void
  ): UseQueryResult<GetAllLeaderboardConfigsResp, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardConfigurationAdminApi_GetLeaderboards>[1]
  ) => async () => {
      const response = 
            (await LeaderboardConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLeaderboards(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetAllLeaderboardConfigsResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboards, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardConfigurationAdminApi_CreateLeaderboard = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }>, 'mutationKey'>,
    callback?: (data: LeaderboardConfigReq) => void
  ): UseMutationResult<LeaderboardConfigReq, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: LeaderboardConfigReq }) => {
      const response = 
            (await LeaderboardConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeaderboard(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationAdminApi_CreateLeaderboardDelete = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }>, 'mutationKey'>,
    callback?: (data: DeleteBulkLeaderboardsResp) => void
  ): UseMutationResult<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }) => {
      const response = 
            (await LeaderboardConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeaderboardDelete(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.LeaderboardDelete],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationAdminApi_DeleteLeaderboard_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string }) => {
      const response = 
            (await LeaderboardConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLeaderboard_ByLeaderboardCode(input.leaderboardCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationAdminApi_GetLeaderboard_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string },
    options?: Omit<UseQueryOptions<GetLeaderboardConfigResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardConfigResp>) => void
  ): UseQueryResult<GetLeaderboardConfigResp, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardConfigurationAdminApi_GetLeaderboard_ByLeaderboardCode>[1]
  ) => async () => {
      const response = 
            (await LeaderboardConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLeaderboard_ByLeaderboardCode(input.leaderboardCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardConfigResp, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardConfigurationAdminApi_UpdateLeaderboard_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GetLeaderboardConfigResp, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, data: UpdateLeaderboardConfigReq }>, 'mutationKey'>,
    callback?: (data: GetLeaderboardConfigResp) => void
  ): UseMutationResult<GetLeaderboardConfigResp, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, data: UpdateLeaderboardConfigReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, data: UpdateLeaderboardConfigReq }) => {
      const response = 
            (await LeaderboardConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateLeaderboard_ByLeaderboardCode(input.leaderboardCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Leaderboard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationAdminApi_DeleteHard_ByLeaderboardCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string }) => {
      const response = 
            (await LeaderboardConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteHard_ByLeaderboardCode(input.leaderboardCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationAdmin.Hard_ByLeaderboardCode],
    mutationFn,
    ...options
  })
}
  
  
  