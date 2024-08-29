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
import { PluginAssignmentRequest } from '../generated-definitions/PluginAssignmentRequest.js'
import { PluginAssignmentResponse } from '../generated-definitions/PluginAssignmentResponse.js'
import { PluginsAdmin$ } from './endpoints/PluginsAdmin$.js'


export function PluginsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [DELETE]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function deletePluginAssignment(): Promise<AxiosResponse<unknown>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePluginAssignment()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [READ]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getPluginsAssignment(): Promise<AxiosResponse<PluginAssignmentResponse>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPluginsAssignment()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [CREATE]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createPluginAssignment(data: PluginAssignmentRequest): Promise<AxiosResponse<PluginAssignmentResponse>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPluginAssignment(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PLUGIN [UPDATE]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updatePluginAssignment(data: PluginAssignmentRequest): Promise<AxiosResponse<PluginAssignmentResponse>> {
    const $ = new PluginsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePluginAssignment(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deletePluginAssignment,getPluginsAssignment,createPluginAssignment,updatePluginAssignment,
  }
}
  