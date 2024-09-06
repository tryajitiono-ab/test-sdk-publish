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
import { CreateTemplateRequest } from '../generated-definitions/CreateTemplateRequest.js'
import { FreeFormNotificationRequest } from '../generated-definitions/FreeFormNotificationRequest.js'
import { NotificationWithTemplateRequest } from '../generated-definitions/NotificationWithTemplateRequest.js'
import { TemplateLocalization } from '../generated-definitions/TemplateLocalization.js'
import { TemplateLocalizationResponse } from '../generated-definitions/TemplateLocalizationResponse.js'
import { TemplateResponseArray } from '../generated-definitions/TemplateResponseArray.js'
import { UpdateTemplateRequest } from '../generated-definitions/UpdateTemplateRequest.js'
import { Admin$ } from './endpoints/Admin$.js'

export function AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Sends notification to all connected users in a namespace.
   */
  async function createNotificationFreeform(data: FreeFormNotificationRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationFreeform(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Sends notification to all connected users in a namespace with predefined template. &lt;br&gt;In the request body, specify which template slug (template identifier) to use and the template language. &lt;br&gt;NotificationTemplate context is the key-value pair defining the value of each handlebar specified in the template content. Template need to be published before it can be use to send notifications
   */
  async function createNotificationTemplated(data: NotificationWithTemplateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTemplated(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get all templates in a namespace
   */
  async function getNotificationTemplates(): Promise<AxiosResponse<TemplateResponseArray>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTemplates()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Create new notification template. Include handlebars {{key}} for replaceable contexts. The the key inside handlebars will be the key to be replaced when sending notification. Already existing template with the same slug and language can not be created. &lt;br&gt;Check model description for detailed input restrictions.
   */
  async function createNotificationTemplate(data: CreateTemplateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotificationTemplate(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete localization template
   */
  async function deleteNotificationTemplate_ByTemplateSlug(templateSlug: string): Promise<AxiosResponse<unknown>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteNotificationTemplate_ByTemplateSlug(templateSlug)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get all templates in a namespace
   */
  async function getNotificationTemplate_ByTemplateSlug(
    templateSlug: string,
    queryParams?: { after?: string | null; before?: string | null; limit?: number }
  ): Promise<AxiosResponse<TemplateLocalizationResponse>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNotificationTemplate_ByTemplateSlug(templateSlug, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete all template in a slug
   */
  async function deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get a template localization
   */
  async function getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<AxiosResponse<TemplateLocalization>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Modify draft template
   */
  async function updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string,
    data: UpdateTemplateRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Publish notification template draft. Empty draft can not be published.
   */
  async function createPublishNotification_ByTemplateSlug_ByTemplateLanguage(
    templateSlug: string,
    templateLanguage: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPublishNotification_ByTemplateSlug_ByTemplateLanguage(templateSlug, templateLanguage)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    createNotificationFreeform,
    createNotificationTemplated,
    getNotificationTemplates,
    createNotificationTemplate,
    deleteNotificationTemplate_ByTemplateSlug,
    getNotificationTemplate_ByTemplateSlug,
    deleteLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    getLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    updateLanguageNotification_ByTemplateSlug_ByTemplateLanguage,
    createPublishNotification_ByTemplateSlug_ByTemplateLanguage
  }
}
