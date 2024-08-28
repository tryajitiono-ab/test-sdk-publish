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
import { MatchmakingApi } from "../MatchmakingApi.js"

import { ChannelRequest } from '../../generated-definitions/ChannelRequest.js'
import { ChannelV1 } from '../../generated-definitions/ChannelV1.js'
import { ChannelV1Array } from '../../generated-definitions/ChannelV1Array.js'
import { CreateChannelResponse } from '../../generated-definitions/CreateChannelResponse.js'
import { DequeueRequest } from '../../generated-definitions/DequeueRequest.js'
import { GetChannelsResponse } from '../../generated-definitions/GetChannelsResponse.js'
import { MatchResultRequest } from '../../generated-definitions/MatchResultRequest.js'
import { MatchResultResponse } from '../../generated-definitions/MatchResultResponse.js'
import { MatchmakingResult } from '../../generated-definitions/MatchmakingResult.js'
import { RebalanceRequest } from '../../generated-definitions/RebalanceRequest.js'
import { RebalanceResponse } from '../../generated-definitions/RebalanceResponse.js'
import { TicketMetricResultRecord } from '../../generated-definitions/TicketMetricResultRecord.js'


export enum Key_Matchmaking {
  Channels = 'Matchmaking.Matchmaking.Channels',
Channel = 'Matchmaking.Matchmaking.Channel',
Session = 'Matchmaking.Matchmaking.Session',
Rebalance = 'Matchmaking.Matchmaking.Rebalance',
Matchresult = 'Matchmaking.Matchmaking.Matchresult',
SessionDequeue = 'Matchmaking.Matchmaking.SessionDequeue',
Channel_ByChannel = 'Matchmaking.Matchmaking.Channel_ByChannel',
Channels_ByNS = 'Matchmaking.Matchmaking.Channels_ByNS',
Status_ByMatchId = 'Matchmaking.Matchmaking.Status_ByMatchId',
Metrics_ByChannelName = 'Matchmaking.Matchmaking.Metrics_ByChannelName',
Channel_ByChannelName = 'Matchmaking.Matchmaking.Channel_ByChannelName',

}

  

export const useMatchmakingApi_GetChannels = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetChannelsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetChannelsResponse>) => void
  ): UseQueryResult<GetChannelsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchmakingApi_GetChannels>[1]
  ) => async () => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChannels(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetChannelsResponse, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Channels, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchmakingApi_CreateChannel = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ChannelRequest }>, 'mutationKey'>,
    callback?: (data: CreateChannelResponse) => void
  ): UseMutationResult<CreateChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ChannelRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ChannelRequest }) => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createChannel(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Matchmaking.Channel],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchmakingApi_CreateSession = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchmakingResult }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchmakingResult }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchmakingResult }) => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSession(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Matchmaking.Session],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchmakingApi_UpdateRebalance = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RebalanceResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: RebalanceRequest }>, 'mutationKey'>,
    callback?: (data: RebalanceResponse) => void
  ): UseMutationResult<RebalanceResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: RebalanceRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: RebalanceRequest }) => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRebalance(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Matchmaking.Rebalance],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchmakingApi_CreateMatchresult = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MatchResultResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchResultRequest }>, 'mutationKey'>,
    callback?: (data: MatchResultResponse) => void
  ): UseMutationResult<MatchResultResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchResultRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchResultRequest }) => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createMatchresult(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Matchmaking.Matchresult],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchmakingApi_UpdateSessionDequeue = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DequeueRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DequeueRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DequeueRequest }) => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSessionDequeue(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Matchmaking.SessionDequeue],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchmakingApi_DeleteChannel_ByChannel = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channel:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channel:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channel:string }) => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteChannel_ByChannel(input.channel))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Matchmaking.Channel_ByChannel],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchmakingApi_GetChannels_ByNS = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ChannelV1Array, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ChannelV1Array>) => void
  ): UseQueryResult<ChannelV1Array, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchmakingApi_GetChannels_ByNS>[1]
  ) => async () => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChannels_ByNS())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ChannelV1Array, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Channels_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchmakingApi_GetStatus_ByMatchId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { matchID:string },
    options?: Omit<UseQueryOptions<MatchmakingResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<MatchmakingResult>) => void
  ): UseQueryResult<MatchmakingResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchmakingApi_GetStatus_ByMatchId>[1]
  ) => async () => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatus_ByMatchId(input.matchID))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<MatchmakingResult, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Status_ByMatchId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchmakingApi_GetMetrics_ByChannelName = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { channelName:string },
    options?: Omit<UseQueryOptions<TicketMetricResultRecord, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TicketMetricResultRecord>) => void
  ): UseQueryResult<TicketMetricResultRecord, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchmakingApi_GetMetrics_ByChannelName>[1]
  ) => async () => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMetrics_ByChannelName(input.channelName))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TicketMetricResultRecord, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Metrics_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchmakingApi_GetChannel_ByChannelName = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { channelName:string },
    options?: Omit<UseQueryOptions<ChannelV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ChannelV1>) => void
  ): UseQueryResult<ChannelV1, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchmakingApi_GetChannel_ByChannelName>[1]
  ) => async () => {
      const response = 
            (await MatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChannel_ByChannelName(input.channelName))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ChannelV1, AxiosError<ApiError>>({
    queryKey: [Key_Matchmaking.Channel_ByChannelName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  