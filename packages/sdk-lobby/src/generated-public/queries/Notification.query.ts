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
import { NotificationApi } from "../NotificationApi.js"

import { CreateTopicRequest } from '../../generated-definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from '../../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationResponse } from '../../generated-definitions/NotificationResponse.js'
import { NotificationTopicResponse } from '../../generated-definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from '../../generated-definitions/NotificationWithTemplateRequest.js'
import { TopicByNamespacesResponse } from '../../generated-definitions/TopicByNamespacesResponse.js'
import { UpdateTopicRequest } from '../../generated-definitions/UpdateTopicRequest.js'


export enum Key_Notification {
  NotificationMe = 'Lobby.Notification.NotificationMe',
NotificationTopics = 'Lobby.Notification.NotificationTopics',
NotificationTopic = 'Lobby.Notification.NotificationTopic',
NotificationTopic_ByTopic = 'Lobby.Notification.NotificationTopic_ByTopic',
FreeformNotification_ByUserId = 'Lobby.Notification.FreeformNotification_ByUserId',
TemplatedNotification_ByUserId = 'Lobby.Notification.TemplatedNotification_ByUserId',

}

  

export const useNotificationApi_GetNotificationMe = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {endTime?: number, limit?: number, offset?: number, startTime?: number} },
    options?: Omit<UseQueryOptions<NotificationResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NotificationResponse>) => void
  ): UseQueryResult<NotificationResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationApi_GetNotificationMe>[1]
  ) => async () => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNotificationMe(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NotificationResponse, AxiosError<ApiError>>({
    queryKey: [Key_Notification.NotificationMe, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationApi_GetNotificationTopics = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {after?: string | null, before?: string | null, limit?: number} },
    options?: Omit<UseQueryOptions<TopicByNamespacesResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TopicByNamespacesResponse>) => void
  ): UseQueryResult<TopicByNamespacesResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationApi_GetNotificationTopics>[1]
  ) => async () => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNotificationTopics(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TopicByNamespacesResponse, AxiosError<ApiError>>({
    queryKey: [Key_Notification.NotificationTopics, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationApi_CreateNotificationTopic = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTopicRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTopicRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTopicRequest }) => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNotificationTopic(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Notification.NotificationTopic],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationApi_DeleteNotificationTopic_ByTopic = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { topic:string }) => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteNotificationTopic_ByTopic(input.topic))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Notification.NotificationTopic_ByTopic],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationApi_GetNotificationTopic_ByTopic = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { topic:string },
    options?: Omit<UseQueryOptions<NotificationTopicResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NotificationTopicResponse>) => void
  ): UseQueryResult<NotificationTopicResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationApi_GetNotificationTopic_ByTopic>[1]
  ) => async () => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNotificationTopic_ByTopic(input.topic))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NotificationTopicResponse, AxiosError<ApiError>>({
    queryKey: [Key_Notification.NotificationTopic_ByTopic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationApi_UpdateNotificationTopic_ByTopic = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic:string, data: UpdateTopicRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topic:string, data: UpdateTopicRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { topic:string, data: UpdateTopicRequest }) => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateNotificationTopic_ByTopic(input.topic, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Notification.NotificationTopic_ByTopic],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationApi_CreateFreeformNotification_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: FreeFormNotificationRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: FreeFormNotificationRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: FreeFormNotificationRequest }) => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFreeformNotification_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Notification.FreeformNotification_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationApi_CreateTemplatedNotification_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: NotificationWithTemplateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: NotificationWithTemplateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: NotificationWithTemplateRequest }) => {
      const response = 
            (await NotificationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createTemplatedNotification_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Notification.TemplatedNotification_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  