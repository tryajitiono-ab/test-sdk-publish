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
import { ChannelAdminApi } from "../ChannelAdminApi.js"

import { ChannelRequest } from '../../generated-definitions/ChannelRequest.js'
import { ChannelResponse } from '../../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../../generated-definitions/PaginatedGetChannelResponse.js'
import { UpdateChannelRequest } from '../../generated-definitions/UpdateChannelRequest.js'


export enum Key_ChannelAdmin {
  Channels = 'Ugc.ChannelAdmin.Channels',
Channel = 'Ugc.ChannelAdmin.Channel',
Channel_ByChannelId = 'Ugc.ChannelAdmin.Channel_ByChannelId',
Channels_ByUserId = 'Ugc.ChannelAdmin.Channels_ByUserId',
Channel_ByUserId_ByChannelId = 'Ugc.ChannelAdmin.Channel_ByUserId_ByChannelId',

}

  

export const useChannelAdminApi_GetChannels = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<PaginatedGetChannelResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedGetChannelResponse>) => void
  ): UseQueryResult<PaginatedGetChannelResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useChannelAdminApi_GetChannels>[1]
  ) => async () => {
      const response = 
            (await ChannelAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChannels(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedGetChannelResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChannelAdmin.Channels, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useChannelAdminApi_CreateChannel = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ChannelRequest }>, 'mutationKey'>,
    callback?: (data: ChannelResponse) => void
  ): UseMutationResult<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ChannelRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ChannelRequest }) => {
      const response = 
            (await ChannelAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createChannel(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChannelAdmin.Channel],
    mutationFn,
    ...options
  })
}
  
  

export const useChannelAdminApi_DeleteChannel_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channelId:string }) => {
      const response = 
            (await ChannelAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteChannel_ByChannelId(input.channelId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChannelAdmin.Channel_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  

export const useChannelAdminApi_UpdateChannel_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, data: UpdateChannelRequest }>, 'mutationKey'>,
    callback?: (data: ChannelResponse) => void
  ): UseMutationResult<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, data: UpdateChannelRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channelId:string, data: UpdateChannelRequest }) => {
      const response = 
            (await ChannelAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateChannel_ByChannelId(input.channelId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChannelAdmin.Channel_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  

export const useChannelAdminApi_GetChannels_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, name?: string | null, offset?: number} },
    options?: Omit<UseQueryOptions<PaginatedGetChannelResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedGetChannelResponse>) => void
  ): UseQueryResult<PaginatedGetChannelResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useChannelAdminApi_GetChannels_ByUserId>[1]
  ) => async () => {
      const response = 
            (await ChannelAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChannels_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedGetChannelResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChannelAdmin.Channels_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useChannelAdminApi_DeleteChannel_ByUserId_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string }) => {
      const response = 
            (await ChannelAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteChannel_ByUserId_ByChannelId(input.userId, input.channelId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChannelAdmin.Channel_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  

export const useChannelAdminApi_UpdateChannel_ByUserId_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: UpdateChannelRequest }>, 'mutationKey'>,
    callback?: (data: ChannelResponse) => void
  ): UseMutationResult<ChannelResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: UpdateChannelRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, data: UpdateChannelRequest }) => {
      const response = 
            (await ChannelAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateChannel_ByUserId_ByChannelId(input.userId, input.channelId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChannelAdmin.Channel_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  
  