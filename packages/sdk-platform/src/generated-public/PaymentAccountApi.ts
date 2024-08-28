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
import { PaymentAccountArray } from '../generated-definitions/PaymentAccountArray.js'
import { PaymentAccount$ } from './endpoints/PaymentAccount$.js'


export function PaymentAccountApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Get payment accounts.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Payment account list&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getPaymentAccounts_ByUserId(userId:string): Promise<AxiosResponse<PaymentAccountArray>> {
    const $ = new PaymentAccount$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPaymentAccounts_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt;Delete payment account.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;:&lt;/li&gt;&lt;/ul&gt; 
   */
  async function deletePaymentAccount_ByUserId_ByType_ById(userId:string, type:string, id:string): Promise<AxiosResponse<unknown>> {
    const $ = new PaymentAccount$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePaymentAccount_ByUserId_ByType_ById(userId, type, id, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getPaymentAccounts_ByUserId,deletePaymentAccount_ByUserId_ByType_ById,
  }
}
  