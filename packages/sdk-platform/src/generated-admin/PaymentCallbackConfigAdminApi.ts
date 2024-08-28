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
import { PaymentCallbackConfigInfo } from '../generated-definitions/PaymentCallbackConfigInfo.js'
import { PaymentCallbackConfigUpdate } from '../generated-definitions/PaymentCallbackConfigUpdate.js'
import { PaymentCallbackConfigAdmin$ } from './endpoints/PaymentCallbackConfigAdmin$.js'


export function PaymentCallbackConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getPaymentConfigCallback(): Promise<AxiosResponse<PaymentCallbackConfigInfo>> {
    const $ = new PaymentCallbackConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentConfigCallback()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Update payment callback configuration.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment callback config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updatePaymentConfigCallback(data: PaymentCallbackConfigUpdate): Promise<AxiosResponse<PaymentCallbackConfigInfo>> {
    const $ = new PaymentCallbackConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePaymentConfigCallback(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getPaymentConfigCallback,updatePaymentConfigCallback,
  }
}
  