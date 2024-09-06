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
import { CreateIntegrationConfigurationReq } from '../generated-definitions/CreateIntegrationConfigurationReq.js'
import { IntegrationConfigurationResp } from '../generated-definitions/IntegrationConfigurationResp.js'
import { ListIntegrationConfigurationsResp } from '../generated-definitions/ListIntegrationConfigurationsResp.js'
import { UpdateIntegrationConfigurationReq } from '../generated-definitions/UpdateIntegrationConfigurationReq.js'
import { UpdateStatusIntegrationConfigurationReq } from '../generated-definitions/UpdateStatusIntegrationConfigurationReq.js'
import { IntegrationConfigurationsAdmin$ } from './endpoints/IntegrationConfigurationsAdmin$.js'

export function IntegrationConfigurationsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   *  Listing all integration configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [READ]
   */
  async function getIntegrationConfigurations(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc'
  }): Promise<AxiosResponse<ListIntegrationConfigurationsResp>> {
    const $ = new IntegrationConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getIntegrationConfigurations(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   *  Creating integration configuration. There cannot be one duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [CREATE]
   */
  async function createIntegrationConfiguration(
    data: CreateIntegrationConfigurationReq
  ): Promise<AxiosResponse<IntegrationConfigurationResp>> {
    const $ = new IntegrationConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createIntegrationConfiguration(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   *  to update integration configuration There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
   */
  async function updateIntegrationConfiguration_ByIntegrationConfigurationId(
    integrationConfigurationId: string,
    data: UpdateIntegrationConfigurationReq
  ): Promise<AxiosResponse<IntegrationConfigurationResp>> {
    const $ = new IntegrationConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateIntegrationConfiguration_ByIntegrationConfigurationId(integrationConfigurationId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   *  to update status integration configuration to be Active / Not Active. There cannot be duplicate serviceName per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:INTEGRATIONCONFIGURATION [UPDATE]
   */
  async function updateStatus_ByIntegrationConfigurationId(
    integrationConfigurationId: string,
    data: UpdateStatusIntegrationConfigurationReq
  ): Promise<AxiosResponse<IntegrationConfigurationResp>> {
    const $ = new IntegrationConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatus_ByIntegrationConfigurationId(integrationConfigurationId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getIntegrationConfigurations,
    createIntegrationConfiguration,
    updateIntegrationConfiguration_ByIntegrationConfigurationId,
    updateStatus_ByIntegrationConfigurationId
  }
}
