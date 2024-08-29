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
import { ConfigInfo } from '../generated-definitions/ConfigInfo.js'
import { ConfigsWithPagination } from '../generated-definitions/ConfigsWithPagination.js'
import { CreateConfig } from '../generated-definitions/CreateConfig.js'
import { UpdateConfig } from '../generated-definitions/UpdateConfig.js'
import { CommonConfigurationAdmin$ } from './endpoints/CommonConfigurationAdmin$.js'


export function CommonConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get all configs in the namespace 
   */
  async function getConfigs( queryParams?: {limit?: string | null, offset?: string | null}): Promise<AxiosResponse<ConfigsWithPagination>> {
    const $ = new CommonConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigs( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a config in the namespace with the given key 
   */
  async function createConfig(data: CreateConfig): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new CommonConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfig(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get a config by namespace and key 
   */
  async function getConfig_ByConfigKey(configKey:string): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new CommonConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByConfigKey(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a config by namespace and key. 
   */
  async function deleteConfig_ByConfigKey(configKey:string): Promise<AxiosResponse<unknown>> {
    const $ = new CommonConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfig_ByConfigKey(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a config by namespace and key 
   */
  async function patchConfig_ByConfigKey(configKey:string, data: UpdateConfig): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new CommonConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfig_ByConfigKey(configKey, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * It will return a publisher namespace config of the given namespace and key. 
   */
  async function getPublisherConfig_ByConfigKey(configKey:string): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new CommonConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublisherConfig_ByConfigKey(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getConfigs,createConfig,getConfig_ByConfigKey,deleteConfig_ByConfigKey,patchConfig_ByConfigKey,getPublisherConfig_ByConfigKey,
  }
}
  