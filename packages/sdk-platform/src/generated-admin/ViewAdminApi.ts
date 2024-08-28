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
import { FullViewInfo } from '../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../generated-definitions/ListViewInfoArray.js'
import { ViewCreate } from '../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../generated-definitions/ViewUpdate.js'
import { ViewAdmin$ } from './endpoints/ViewAdmin$.js'


export function ViewAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to list all views.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of views&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getViews( queryParams?: {storeId?: string | null}): Promise<AxiosResponse<ListViewInfoArray>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getViews( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to create a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created a view&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 
   */
  async function createView(data: ViewCreate, queryParams: {storeId: string | null}): Promise<AxiosResponse<FullViewInfo>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createView(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to delete a view.It will also delete all the related sections 
   */
  async function deleteView_ByViewId(viewId:string,  queryParams: {storeId: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteView_ByViewId(viewId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to get a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: view data&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getView_ByViewId(viewId:string,  queryParams?: {storeId?: string | null}): Promise<AxiosResponse<FullViewInfo>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getView_ByViewId(viewId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to update a view.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated view data&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for localization extension&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 
   */
  async function updateView_ByViewId(viewId:string, data: ViewUpdate, queryParams: {storeId: string | null}): Promise<AxiosResponse<FullViewInfo>> {
    const $ = new ViewAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateView_ByViewId(viewId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getViews,createView,deleteView_ByViewId,getView_ByViewId,updateView_ByViewId,
  }
}
  