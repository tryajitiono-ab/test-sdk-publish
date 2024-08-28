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
import { AxiosResponse } from 'axios'
import { ConfigCreate } from '../generated-definitions/ConfigCreate.js'
import { ConfigInfo } from '../generated-definitions/ConfigInfo.js'
import { ConfigUpdate } from '../generated-definitions/ConfigUpdate.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'


export function ConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
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
   * Create a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createConfig(data: ConfigCreate): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfig(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function deleteConfig_ByConfigKey(configKey:string): Promise<AxiosResponse<unknown>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfig_ByConfigKey(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getConfig_ByConfigKey(configKey:string): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByConfigKey(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a config.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function patchConfig_ByConfigKey(configKey:string, data: ConfigUpdate): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfig_ByConfigKey(configKey, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get a publisher config.&lt;br&gt;It will return a publisher namespace config of the given namespace and key.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getPublisherConfig_ByConfigKey(configKey:string): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublisherConfig_ByConfigKey(configKey, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createConfig,deleteConfig_ByConfigKey,getConfig_ByConfigKey,patchConfig_ByConfigKey,getPublisherConfig_ByConfigKey,
  }
}
  