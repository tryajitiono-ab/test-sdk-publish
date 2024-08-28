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
import { LeaderboardConfigurationV3AdminApi } from "../LeaderboardConfigurationV3AdminApi.js"

import { DeleteBulkLeaderboardsReq } from '../../generated-definitions/DeleteBulkLeaderboardsReq.js'
import { DeleteBulkLeaderboardsResp } from '../../generated-definitions/DeleteBulkLeaderboardsResp.js'
import { GetAllLeaderboardConfigsRespV3 } from '../../generated-definitions/GetAllLeaderboardConfigsRespV3.js'
import { GetLeaderboardConfigRespV3 } from '../../generated-definitions/GetLeaderboardConfigRespV3.js'
import { LeaderboardConfigReqV3 } from '../../generated-definitions/LeaderboardConfigReqV3.js'
import { UpdateLeaderboardConfigReqV3 } from '../../generated-definitions/UpdateLeaderboardConfigReqV3.js'


export enum Key_LeaderboardConfigurationV3Admin {
  Leaderboards_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Leaderboards_v3',
Leaderboard_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Leaderboard_v3',
LeaderboardDelete_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.LeaderboardDelete_v3',
Leaderboard_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3',
Hard_ByLeaderboardCode_v3 = 'Leaderboard.LeaderboardConfigurationV3Admin.Hard_ByLeaderboardCode_v3',

}

  

export const useLeaderboardConfigurationV3AdminApi_GetLeaderboards_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {isDeleted?: boolean | null, limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetAllLeaderboardConfigsRespV3>) => void
  ): UseQueryResult<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardConfigurationV3AdminApi_GetLeaderboards_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardConfigurationV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLeaderboards_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetAllLeaderboardConfigsRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboards_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardConfigurationV3AdminApi_CreateLeaderboard_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GetLeaderboardConfigRespV3, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReqV3 }>, 'mutationKey'>,
    callback?: (data: GetLeaderboardConfigRespV3) => void
  ): UseMutationResult<GetLeaderboardConfigRespV3, AxiosError<ApiError>, SdkSetConfigParam & { data: LeaderboardConfigReqV3 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: LeaderboardConfigReqV3 }) => {
      const response = 
            (await LeaderboardConfigurationV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeaderboard_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationV3AdminApi_CreateLeaderboardDelete_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }>, 'mutationKey'>,
    callback?: (data: DeleteBulkLeaderboardsResp) => void
  ): UseMutationResult<DeleteBulkLeaderboardsResp, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteBulkLeaderboardsReq }) => {
      const response = 
            (await LeaderboardConfigurationV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeaderboardDelete_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.LeaderboardDelete_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationV3AdminApi_DeleteLeaderboard_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string }) => {
      const response = 
            (await LeaderboardConfigurationV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLeaderboard_ByLeaderboardCode_v3(input.leaderboardCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationV3AdminApi_GetLeaderboard_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { leaderboardCode:string },
    options?: Omit<UseQueryOptions<GetLeaderboardConfigRespV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLeaderboardConfigRespV3>) => void
  ): UseQueryResult<GetLeaderboardConfigRespV3, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLeaderboardConfigurationV3AdminApi_GetLeaderboard_ByLeaderboardCode_v3>[1]
  ) => async () => {
      const response = 
            (await LeaderboardConfigurationV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLeaderboard_ByLeaderboardCode_v3(input.leaderboardCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLeaderboardConfigRespV3, AxiosError<ApiError>>({
    queryKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useLeaderboardConfigurationV3AdminApi_UpdateLeaderboard_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GetLeaderboardConfigRespV3, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, data: UpdateLeaderboardConfigReqV3 }>, 'mutationKey'>,
    callback?: (data: GetLeaderboardConfigRespV3) => void
  ): UseMutationResult<GetLeaderboardConfigRespV3, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string, data: UpdateLeaderboardConfigReqV3 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string, data: UpdateLeaderboardConfigReqV3 }) => {
      const response = 
            (await LeaderboardConfigurationV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateLeaderboard_ByLeaderboardCode_v3(input.leaderboardCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Leaderboard_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useLeaderboardConfigurationV3AdminApi_DeleteHard_ByLeaderboardCode_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { leaderboardCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { leaderboardCode:string }) => {
      const response = 
            (await LeaderboardConfigurationV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteHard_ByLeaderboardCode_v3(input.leaderboardCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_LeaderboardConfigurationV3Admin.Hard_ByLeaderboardCode_v3],
    mutationFn,
    ...options
  })
}
  
  
  