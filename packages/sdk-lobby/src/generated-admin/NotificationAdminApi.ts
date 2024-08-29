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
import { BulkUsersFreeFormNotificationRequestV1 } from '../generated-definitions/BulkUsersFreeFormNotificationRequestV1.js'
import { CreateTemplateRequest } from '../generated-definitions/CreateTemplateRequest.js'
import { CreateTopicRequestV1 } from '../generated-definitions/CreateTopicRequestV1.js'
import { FreeFormNotificationRequestV1 } from '../generated-definitions/FreeFormNotificationRequestV1.js'
import { GetAllNotificationTemplateSlugResp } from '../generated-definitions/GetAllNotificationTemplateSlugResp.js'
import { GetAllNotificationTopicsResponse } from '../generated-definitions/GetAllNotificationTopicsResponse.js'
import { Localization } from '../generated-definitions/Localization.js'
import { NotificationTemplateResponseArray } from '../generated-definitions/NotificationTemplateResponseArray.js'
import { NotificationTopicResponseV1 } from '../generated-definitions/NotificationTopicResponseV1.js'
import { NotificationWithTemplateRequestV1 } from '../generated-definitions/NotificationWithTemplateRequestV1.js'
import { UpdateTemplateRequest } from '../generated-definitions/UpdateTemplateRequest.js'
import { UpdateTopicRequest } from '../generated-definitions/UpdateTopicRequest.js'
import { NotificationAdmin$ } from './endpoints/NotificationAdmin$.js'


export function NotificationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * Get topic by namespace.&lt;br/&gt; Action Code: 50213 
   */
  async function getNotificationTopics( queryParams?: {after?: string | null, before?: string | null, limit?: number}): Promise<AxiosResponse<GetAllNotificationTopicsResponse>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopics( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create new notification topic. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created&lt;br/&gt; Action Code: 50214 
   */
  async function createNotificationTopic(data: CreateTopicRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTopic(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get all templates in a namespace&lt;br&gt; Action Code: 50203 
   */
  async function getNotificationTemplates(): Promise<AxiosResponse<NotificationTemplateResponseArray>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTemplates()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create new notification template. Include handlebars {{key}} for replaceable contexts. The key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.&lt;br&gt; Action Code: 50204 
   */
  async function createNotificationTemplate(data: CreateTemplateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTemplate(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sends notification to all connected users in a namespace.&lt;br&gt; Action Code: 50201 
   */
  async function createNotificationFreeformNotify(data: FreeFormNotificationRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationFreeformNotify(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br/&gt; Action Code: 50202 
   */
  async function createNotificationTemplateNotify(data: NotificationWithTemplateRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTemplateNotify(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50217 
   */
  async function deleteNotificationTopic_ByTopicName(topicName:string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTopic_ByTopicName(topicName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get topic information by topic name.&lt;br/&gt; Action Code: 50215 
   */
  async function getNotificationTopic_ByTopicName(topicName:string): Promise<AxiosResponse<NotificationTopicResponseV1>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTopic_ByTopicName(topicName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update topic information by topic name. &lt;br&gt;topic should be alphabets, no special char except underscore, uppercase and no spacing. for example: TOPIC_TEST. Already existing topic can not be created &lt;br/&gt; Action Code: 50216 
   */
  async function updateNotificationTopic_ByTopicName(topicName:string, data: UpdateTopicRequest): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateNotificationTopic_ByTopicName(topicName, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete template slug in notification template&lt;br&gt; Action Code: 50206 
   */
  async function deleteNotificationTemplate_ByTemplateSlug(templateSlug:string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTemplate_ByTemplateSlug(templateSlug, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get all templates in a namespace&lt;br&gt; Action Code: 50205 
   */
  async function getNotificationTemplate_ByTemplateSlug(templateSlug:string,  queryParams?: {after?: string | null, before?: string | null, limit?: number}): Promise<AxiosResponse<GetAllNotificationTemplateSlugResp>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTemplate_ByTemplateSlug(templateSlug,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sends notification to multiple user. Action Code: 50211 
   */
  async function createNotificationBulkUserFreeformNotify(data: BulkUsersFreeFormNotificationRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationBulkUserFreeformNotify(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sends notification to a user. Action Code: 50211 
   */
  async function createFreeformNotifyNotification_ByUserId(userId:string, data: FreeFormNotificationRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFreeformNotifyNotification_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sends templated notification to a user. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt; Action Code: 50212 
   */
  async function createTemplateNotifyNotification_ByUserId(userId:string, data: NotificationWithTemplateRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTemplateNotifyNotification_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sends notification to a party. 
   */
  async function createFreeformNotifyNotification_ByPartyId(partyId:string, data: FreeFormNotificationRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFreeformNotifyNotification_ByPartyId(partyId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sends templated notification to a party. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications&lt;br&gt; 
   */
  async function createTemplateNotifyNotification_ByPartyId(partyId:string, data: NotificationWithTemplateRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTemplateNotifyNotification_ByPartyId(partyId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete template localization&lt;br/&gt; Action Code: 50209 
   */
  async function deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get a template localization&lt;br/&gt; Action Code: 50207 
   */
  async function getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string): Promise<AxiosResponse<Localization>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update template localization&lt;br/&gt; Action Code: 50208 
   */
  async function updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string, data: UpdateTemplateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Publish notification template draft. Empty draft can not be published.&lt;br/&gt; Action Code: 50210 
   */
  async function createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug:string, templateLanguage:string): Promise<AxiosResponse<unknown>> {
    const $ = new NotificationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getNotificationTopics,createNotificationTopic,getNotificationTemplates,createNotificationTemplate,createNotificationFreeformNotify,createNotificationTemplateNotify,deleteNotificationTopic_ByTopicName,getNotificationTopic_ByTopicName,updateNotificationTopic_ByTopicName,deleteNotificationTemplate_ByTemplateSlug,getNotificationTemplate_ByTemplateSlug,createNotificationBulkUserFreeformNotify,createFreeformNotifyNotification_ByUserId,createTemplateNotifyNotification_ByUserId,createFreeformNotifyNotification_ByPartyId,createTemplateNotifyNotification_ByPartyId,deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage,getLanguageNotification_ByTemplateSlug_ByTemplateLanguage,updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage,createPublishNotification_ByTemplateSlug_ByTemplateLanguage,
  }
}
  