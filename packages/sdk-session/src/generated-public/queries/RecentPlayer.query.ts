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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { RecentPlayerApi } from "../RecentPlayerApi.js"

import { RecentPlayerQueryResponse } from '../../generated-definitions/RecentPlayerQueryResponse.js'


export enum Key_RecentPlayer {
  RecentPlayer = 'Session.RecentPlayer.RecentPlayer',
RecentTeamPlayer = 'Session.RecentPlayer.RecentTeamPlayer',

}

  

export const useRecentPlayerApi_GetRecentPlayer = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number} },
    options?: Omit<UseQueryOptions<RecentPlayerQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RecentPlayerQueryResponse>) => void
  ): UseQueryResult<RecentPlayerQueryResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecentPlayerApi_GetRecentPlayer>[1]
  ) => async () => {
      const response = 
            (await RecentPlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecentPlayer(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RecentPlayerQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecentPlayer.RecentPlayer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRecentPlayerApi_GetRecentTeamPlayer = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number} },
    options?: Omit<UseQueryOptions<RecentPlayerQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RecentPlayerQueryResponse>) => void
  ): UseQueryResult<RecentPlayerQueryResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecentPlayerApi_GetRecentTeamPlayer>[1]
  ) => async () => {
      const response = 
            (await RecentPlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecentTeamPlayer(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RecentPlayerQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecentPlayer.RecentTeamPlayer, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  