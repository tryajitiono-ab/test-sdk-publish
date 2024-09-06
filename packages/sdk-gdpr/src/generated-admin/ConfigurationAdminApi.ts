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
import { ServiceConfigurationUpdateRequest } from '../generated-definitions/ServiceConfigurationUpdateRequest.js'
import { ServicesConfigurationResponse } from '../generated-definitions/ServicesConfigurationResponse.js'
import { ConfigurationAdmin$ } from './endpoints/ConfigurationAdmin$.js'

export function ConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Delete a list of admin email addresses to stop receiving personal data request notification. Scope: account
   */
  async function deleteEmailConfiguration(queryParams: { emails: string[] }): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteEmailConfiguration(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get list of admin email address configuration. Scope: account
   */
  async function getEmailsConfigurations(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailsConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Add admin email address for receiving personal data request notification. Scope: account
   */
  async function createEmailConfiguration(data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEmailConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update admin email address for receiving personal data request notification. Scope: account
   */
  async function updateEmailConfiguration(data: string[]): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEmailConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get Registered Services Configuration. Scope: account
   */
  async function getServicesConfigurations(): Promise<AxiosResponse<ServicesConfigurationResponse>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServicesConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update Registered Services Configuration. Scope: account
   */
  async function updateServiceConfiguration(
    data: ServiceConfigurationUpdateRequest
  ): Promise<AxiosResponse<ServiceConfigurationUpdateRequest>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateServiceConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * **[TEST FACILITY ONLY]** Reset Registered Services Configuration to use the default configuration. Scope: account
   */
  async function deleteServiceConfigurationReset(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServiceConfigurationReset()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * **[TEST FACILITY ONLY]** Reset registered platform account closure services configuration to use the default configuration. Scope: account
   */
  async function deleteServicePlatformClosureConfig(): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServicePlatformClosureConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get registered platform account closure services configuration. Scope: account
   */
  async function getServicesPlatformsClosureConfig(): Promise<AxiosResponse<ServicesConfigurationResponse>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServicesPlatformsClosureConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update registered platform account closure services configuration. Scope: account
   */
  async function updateServicePlatformClosureConfig(
    data: ServiceConfigurationUpdateRequest
  ): Promise<AxiosResponse<ServiceConfigurationUpdateRequest>> {
    const $ = new ConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateServicePlatformClosureConfig(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    deleteEmailConfiguration,
    getEmailsConfigurations,
    createEmailConfiguration,
    updateEmailConfiguration,
    getServicesConfigurations,
    updateServiceConfiguration,
    deleteServiceConfigurationReset,
    deleteServicePlatformClosureConfig,
    getServicesPlatformsClosureConfig,
    updateServicePlatformClosureConfig
  }
}
