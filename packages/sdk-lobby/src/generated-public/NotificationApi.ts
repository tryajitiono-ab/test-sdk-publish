/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CreateTopicRequest } from '../generated-definitions/CreateTopicRequest.js'
import { FreeFormNotificationRequest } from '../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationResponse } from '../generated-definitions/NotificationResponse.js'
import { NotificationTopicResponse } from '../generated-definitions/NotificationTopicResponse.js'
import { NotificationWithTemplateRequest } from '../generated-definitions/NotificationWithTemplateRequest.js'
import { TopicByNamespacesResponse } from '../generated-definitions/TopicByNamespacesResponse.js'
import { UpdateTopicRequest } from '../generated-definitions/UpdateTopicRequest.js'
import { Notification$ } from './endpoints/Notification$.js'

export function NotificationApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  /**
   * Get list of notifications in a namespace. The query parameters **startTime** and **endTime** can be filled with the **sequenceID** value in the notification, where the value is an epoch timestamp. Example **sequenceID** or epoch timestamp value: **1706595813**
   */
  async function getNotificationMe(queryParams?: {
    endTime?: number
    limit?: number
    offset?: number
    startTime?: number
  }): Promise<AxiosResponse<NotificationResponse>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationMe(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * get topic by namespace.
   */
  async function getNotificationTopics(queryParams?: {
    after?: string | null
    before?: string | null
    limit?: number
  }): Promise<AxiosResponse<TopicByNamespacesResponse>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopics(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function createNotificationTopic(data: CreateTopicRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTopic(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function deleteNotificationTopic_ByTopic(topic: string): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * get topic information by topic name.
   */
  async function getNotificationTopic_ByTopic(topic: string): Promise<AxiosResponse<NotificationTopicResponse>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopic_ByTopic(topic)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created
   */
  async function updateNotificationTopic_ByTopic(topic: string, data: UpdateTopicRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateNotificationTopic_ByTopic(topic, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Sends notification to a user.
   */
  async function createFreeformNotification_ByUserId(userId: string, data: FreeFormNotificationRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFreeformNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Sends notification to a user with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  async function createTemplatedNotification_ByUserId(
    userId: string,
    data: NotificationWithTemplateRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Notification$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTemplatedNotification_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getNotificationMe,
    getNotificationTopics,
    createNotificationTopic,
    deleteNotificationTopic_ByTopic,
    getNotificationTopic_ByTopic,
    updateNotificationTopic_ByTopic,
    createFreeformNotification_ByUserId,
    createTemplatedNotification_ByUserId
  }
}
