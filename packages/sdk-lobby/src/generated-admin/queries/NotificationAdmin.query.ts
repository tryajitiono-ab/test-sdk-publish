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
import { NotificationAdminApi } from "../NotificationAdminApi.js"

import { BulkUsersFreeFormNotificationRequestV1 } from '../../generated-definitions/BulkUsersFreeFormNotificationRequestV1.js'
import { CreateTemplateRequest } from '../../generated-definitions/CreateTemplateRequest.js'
import { CreateTopicRequestV1 } from '../../generated-definitions/CreateTopicRequestV1.js'
import { FreeFormNotificationRequestV1 } from '../../generated-definitions/FreeFormNotificationRequestV1.js'
import { GetAllNotificationTemplateSlugResp } from '../../generated-definitions/GetAllNotificationTemplateSlugResp.js'
import { GetAllNotificationTopicsResponse } from '../../generated-definitions/GetAllNotificationTopicsResponse.js'
import { Localization } from '../../generated-definitions/Localization.js'
import { NotificationTemplateResponseArray } from '../../generated-definitions/NotificationTemplateResponseArray.js'
import { NotificationTopicResponseV1 } from '../../generated-definitions/NotificationTopicResponseV1.js'
import { NotificationWithTemplateRequestV1 } from '../../generated-definitions/NotificationWithTemplateRequestV1.js'
import { UpdateTemplateRequest } from '../../generated-definitions/UpdateTemplateRequest.js'
import { UpdateTopicRequest } from '../../generated-definitions/UpdateTopicRequest.js'


export enum Key_NotificationAdmin {
  NotificationTopics = 'Lobby.NotificationAdmin.NotificationTopics',
NotificationTopic = 'Lobby.NotificationAdmin.NotificationTopic',
NotificationTemplates = 'Lobby.NotificationAdmin.NotificationTemplates',
NotificationTemplate = 'Lobby.NotificationAdmin.NotificationTemplate',
NotificationFreeformNotify = 'Lobby.NotificationAdmin.NotificationFreeformNotify',
NotificationTemplateNotify = 'Lobby.NotificationAdmin.NotificationTemplateNotify',
NotificationTopic_ByTopicName = 'Lobby.NotificationAdmin.NotificationTopic_ByTopicName',
NotificationTemplate_ByTemplateSlug = 'Lobby.NotificationAdmin.NotificationTemplate_ByTemplateSlug',
NotificationBulkUserFreeformNotify = 'Lobby.NotificationAdmin.NotificationBulkUserFreeformNotify',
FreeformNotifyNotification_ByUserId = 'Lobby.NotificationAdmin.FreeformNotifyNotification_ByUserId',
TemplateNotifyNotification_ByUserId = 'Lobby.NotificationAdmin.TemplateNotifyNotification_ByUserId',
FreeformNotifyNotification_ByPartyId = 'Lobby.NotificationAdmin.FreeformNotifyNotification_ByPartyId',
TemplateNotifyNotification_ByPartyId = 'Lobby.NotificationAdmin.TemplateNotifyNotification_ByPartyId',
LanguageNotification_ByTemplateSlug_ByTemplateLanguage = 'Lobby.NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage',
PublishNotification_ByTemplateSlug_ByTemplateLanguage = 'Lobby.NotificationAdmin.PublishNotification_ByTemplateSlug_ByTemplateLanguage',

}

  

export const useNotificationAdminApi_GetNotificationTopics = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {after?: string | null, before?: string | null, limit?: number} },
    options?: Omit<UseQueryOptions<GetAllNotificationTopicsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetAllNotificationTopicsResponse>) => void
  ): UseQueryResult<GetAllNotificationTopicsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationAdminApi_GetNotificationTopics>[1]
  ) => async () => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNotificationTopics(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetAllNotificationTopicsResponse, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTopics, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateNotificationTopic = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTopicRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTopicRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTopicRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNotificationTopic(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTopic],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_GetNotificationTemplates = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<NotificationTemplateResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NotificationTemplateResponseArray>) => void
  ): UseQueryResult<NotificationTemplateResponseArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationAdminApi_GetNotificationTemplates>[1]
  ) => async () => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNotificationTemplates())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NotificationTemplateResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTemplates, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateNotificationTemplate = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTemplateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTemplateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTemplateRequest }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNotificationTemplate(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTemplate],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateNotificationFreeformNotify = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: FreeFormNotificationRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: FreeFormNotificationRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: FreeFormNotificationRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNotificationFreeformNotify(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationFreeformNotify],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateNotificationTemplateNotify = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: NotificationWithTemplateRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: NotificationWithTemplateRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: NotificationWithTemplateRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNotificationTemplateNotify(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTemplateNotify],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_DeleteNotificationTopic_ByTopicName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topicName:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topicName:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { topicName:string }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteNotificationTopic_ByTopicName(input.topicName))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTopic_ByTopicName],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_GetNotificationTopic_ByTopicName = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { topicName:string },
    options?: Omit<UseQueryOptions<NotificationTopicResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NotificationTopicResponseV1>) => void
  ): UseQueryResult<NotificationTopicResponseV1, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationAdminApi_GetNotificationTopic_ByTopicName>[1]
  ) => async () => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNotificationTopic_ByTopicName(input.topicName))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NotificationTopicResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTopic_ByTopicName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationAdminApi_UpdateNotificationTopic_ByTopicName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topicName:string, data: UpdateTopicRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { topicName:string, data: UpdateTopicRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { topicName:string, data: UpdateTopicRequest }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateNotificationTopic_ByTopicName(input.topicName, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTopic_ByTopicName],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_DeleteNotificationTemplate_ByTemplateSlug = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug:string }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteNotificationTemplate_ByTemplateSlug(input.templateSlug))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationTemplate_ByTemplateSlug],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_GetNotificationTemplate_ByTemplateSlug = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { templateSlug:string,  queryParams?: {after?: string | null, before?: string | null, limit?: number} },
    options?: Omit<UseQueryOptions<GetAllNotificationTemplateSlugResp, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetAllNotificationTemplateSlugResp>) => void
  ): UseQueryResult<GetAllNotificationTemplateSlugResp, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationAdminApi_GetNotificationTemplate_ByTemplateSlug>[1]
  ) => async () => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNotificationTemplate_ByTemplateSlug(input.templateSlug, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetAllNotificationTemplateSlugResp, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.NotificationTemplate_ByTemplateSlug, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateNotificationBulkUserFreeformNotify = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUsersFreeFormNotificationRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUsersFreeFormNotificationRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUsersFreeFormNotificationRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNotificationBulkUserFreeformNotify(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.NotificationBulkUserFreeformNotify],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateFreeformNotifyNotification_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: FreeFormNotificationRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: FreeFormNotificationRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: FreeFormNotificationRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFreeformNotifyNotification_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.FreeformNotifyNotification_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateTemplateNotifyNotification_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: NotificationWithTemplateRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: NotificationWithTemplateRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: NotificationWithTemplateRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createTemplateNotifyNotification_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.TemplateNotifyNotification_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateFreeformNotifyNotification_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: FreeFormNotificationRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: FreeFormNotificationRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: FreeFormNotificationRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFreeformNotifyNotification_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.FreeformNotifyNotification_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreateTemplateNotifyNotification_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: NotificationWithTemplateRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: NotificationWithTemplateRequestV1 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: NotificationWithTemplateRequestV1 }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createTemplateNotifyNotification_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.TemplateNotifyNotification_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_DeleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string, templateLanguage:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string, templateLanguage:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug:string, templateLanguage:string }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_GetLanguageNotification_ByTemplateSlug_ByTemplateLanguage = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { templateSlug:string, templateLanguage:string },
    options?: Omit<UseQueryOptions<Localization, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<Localization>) => void
  ): UseQueryResult<Localization, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNotificationAdminApi_GetLanguageNotification_ByTemplateSlug_ByTemplateLanguage>[1]
  ) => async () => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<Localization, AxiosError<ApiError>>({
    queryKey: [Key_NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNotificationAdminApi_UpdateLanguageNotification_ByTemplateSlug_ByTemplateLanguage = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string, templateLanguage:string, data: UpdateTemplateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string, templateLanguage:string, data: UpdateTemplateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug:string, templateLanguage:string, data: UpdateTemplateRequest }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.LanguageNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}
  
  

export const useNotificationAdminApi_CreatePublishNotification_ByTemplateSlug_ByTemplateLanguage = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string, templateLanguage:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { templateSlug:string, templateLanguage:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { templateSlug:string, templateLanguage:string }) => {
      const response = 
            (await NotificationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPublishNotification_ByTemplateSlug_ByTemplateLanguage(input.templateSlug, input.templateLanguage))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_NotificationAdmin.PublishNotification_ByTemplateSlug_ByTemplateLanguage],
    mutationFn,
    ...options
  })
}
  
  
  