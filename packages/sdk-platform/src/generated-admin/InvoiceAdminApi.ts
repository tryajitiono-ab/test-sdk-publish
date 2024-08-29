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
import { InvoiceSummary } from '../generated-definitions/InvoiceSummary.js'
import { InvoiceAdmin$ } from './endpoints/InvoiceAdmin$.js'


export function InvoiceAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Generate invoice summary.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query orders&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getInvoiceSummary( queryParams: {endTime: string | null, feature: string | null, itemId: string | null, itemType: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', startTime: string | null}): Promise<AxiosResponse<InvoiceSummary>> {
    const $ = new InvoiceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInvoiceSummary( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Download invoice details as a csv file.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: invoice details csv file&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getInvoiceDetailsCsv( queryParams: {endTime: string | null, feature: string | null, itemId: string | null, itemType: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', startTime: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new InvoiceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInvoiceDetailsCsv( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getInvoiceSummary,getInvoiceDetailsCsv,
  }
}
  