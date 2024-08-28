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
import { NamespaceInfoArray } from '../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceSimpleInfo } from '../generated-definitions/NamespaceSimpleInfo.js'
import { Namespace$ } from './endpoints/Namespace$.js'


export function NamespaceApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get all namespaces.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11303&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of namespaces&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getNamespaces( queryParams?: {activeOnly?: boolean | null}): Promise<AxiosResponse<NamespaceInfoArray>> {
    const $ = new Namespace$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNamespaces( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get a namespace info.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: namespace info&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getNamespace_ByNamespace(): Promise<AxiosResponse<NamespaceSimpleInfo>> {
    const $ = new Namespace$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNamespace_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get namespace info related publisher namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11305&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Namespace info related publisher namespace&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getPublisher(): Promise<AxiosResponse<NamespacePublisherInfo>> {
    const $ = new Namespace$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublisher()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getNamespaces,getNamespace_ByNamespace,getPublisher,
  }
}
  