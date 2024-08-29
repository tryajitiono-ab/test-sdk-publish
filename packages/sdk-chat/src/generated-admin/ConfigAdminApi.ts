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
import { ConfigExportArray } from '../generated-definitions/ConfigExportArray.js'
import { ConfigList } from '../generated-definitions/ConfigList.js'
import { ConfigResponse } from '../generated-definitions/ConfigResponse.js'
import { Configuration } from '../generated-definitions/Configuration.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'
import { ConfigAdmin$ } from './endpoints/ConfigAdmin$.js'


export function ConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get chat config of all namespaces. 
   */
  async function getConfig(): Promise<AxiosResponse<ConfigList>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get Log Configuration.&lt;br&gt; 
   */
  async function getConfigLog(): Promise<AxiosResponse<Configuration>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigLog()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update Log Configuration.&lt;br&gt; 
   */
  async function patchConfigLog(data: Configuration): Promise<AxiosResponse<Configuration>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfigLog(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get chat config of a namespace. 
   */
  async function getConfig_ByNamespace(): Promise<AxiosResponse<ConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update chat config of a namespace. 
   */
  async function updateConfig_ByNamespace(data: ConfigResponse): Promise<AxiosResponse<ConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfig_ByNamespace(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Export chat configuration to a json file. The file can then be imported from the /import endpoint.  
   */
  async function getConfigExport(): Promise<AxiosResponse<ConfigExportArray>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigExport()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Import config configuration from file. The existing configuration will be replaced. The json file to import can be obtained from the /export endpoint.  
   */
  async function updateConfigImport(data: {file?: File}): Promise<AxiosResponse<ImportConfigResponse>> {
    const $ = new ConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfigImport(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getConfig,getConfigLog,patchConfigLog,getConfig_ByNamespace,updateConfig_ByNamespace,getConfigExport,updateConfigImport,
  }
}
  