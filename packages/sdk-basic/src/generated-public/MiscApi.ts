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
import { CountryObjectArray } from '../generated-definitions/CountryObjectArray.js'
import { RetrieveTimeResponse } from '../generated-definitions/RetrieveTimeResponse.js'
import { Misc$ } from './endpoints/Misc$.js'

export function MiscApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  /**
   * Get server time
   */
  async function getMiscTime(): Promise<AxiosResponse<RetrieveTimeResponse>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscTime()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * @deprecated
   * List countries.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: country code list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscCountries(queryParams?: { lang?: string | null }): Promise<AxiosResponse<CountryObjectArray>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscCountries(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscLanguages(): Promise<AxiosResponse<unknown>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscLanguages()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt;
   */
  async function getMiscTimezones(): Promise<AxiosResponse<unknown>> {
    const $ = new Misc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscTimezones()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getMiscTime,
    getMiscCountries,
    getMiscLanguages,
    getMiscTimezones
  }
}
