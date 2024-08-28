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
import { CurrencyConfig } from '../generated-definitions/CurrencyConfig.js'
import { CurrencyCreate } from '../generated-definitions/CurrencyCreate.js'
import { CurrencyInfo } from '../generated-definitions/CurrencyInfo.js'
import { CurrencyInfoArray } from '../generated-definitions/CurrencyInfoArray.js'
import { CurrencySummary } from '../generated-definitions/CurrencySummary.js'
import { CurrencyUpdate } from '../generated-definitions/CurrencyUpdate.js'
import { CurrencyAdmin$ } from './endpoints/CurrencyAdmin$.js'


export function CurrencyAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * List currencies of a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Currency List&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getCurrencies( queryParams?: {currencyType?: 'REAL' | 'VIRTUAL'}): Promise<AxiosResponse<CurrencyInfoArray>> {
    const $ = new CurrencyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCurrencies( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a currency.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created currency&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createCurrency(data: CurrencyCreate): Promise<AxiosResponse<CurrencyInfo>> {
    const $ = new CurrencyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCurrency(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: &lt;/li&gt;&lt;/ul&gt; 
   */
  async function deleteCurrency_ByCurrencyCode(currencyCode:string): Promise<AxiosResponse<CurrencyInfo>> {
    const $ = new CurrencyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCurrency_ByCurrencyCode(currencyCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a currency by currency code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated currency&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateCurrency_ByCurrencyCode(currencyCode:string, data: CurrencyUpdate): Promise<AxiosResponse<CurrencyInfo>> {
    const $ = new CurrencyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCurrency_ByCurrencyCode(currencyCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Get currency config by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getConfig_ByCurrencyCode(currencyCode:string): Promise<AxiosResponse<CurrencyConfig>> {
    const $ = new CurrencyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByCurrencyCode(currencyCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get currency summary by code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: simplified Currency&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getSummary_ByCurrencyCode(currencyCode:string): Promise<AxiosResponse<CurrencySummary>> {
    const $ = new CurrencyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSummary_ByCurrencyCode(currencyCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getCurrencies,createCurrency,deleteCurrency_ByCurrencyCode,updateCurrency_ByCurrencyCode,getConfig_ByCurrencyCode,getSummary_ByCurrencyCode,
  }
}
  