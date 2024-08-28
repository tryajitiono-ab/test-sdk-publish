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
import { CountryBlacklistRequest } from '../generated-definitions/CountryBlacklistRequest.js'
import { CountryBlacklistResponse } from '../generated-definitions/CountryBlacklistResponse.js'
import { CountryResponseArray } from '../generated-definitions/CountryResponseArray.js'
import { CountryAdmin$ } from './endpoints/CountryAdmin$.js'


export function CountryAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Admin get country list 
   */
  async function getCountries_v3( queryParams?: {filterBlacklist?: boolean | null}): Promise<AxiosResponse<CountryResponseArray>> {
    const $ = new CountryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCountries_v3( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Admin get country blacklist 
   */
  async function getCountriesBlacklist_v3(): Promise<AxiosResponse<CountryBlacklistResponse>> {
    const $ = new CountryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCountriesBlacklist_v3()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Admin update country blacklist 
   */
  async function updateCountryBlacklist_v3(data: CountryBlacklistRequest): Promise<AxiosResponse<unknown>> {
    const $ = new CountryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCountryBlacklist_v3(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getCountries_v3,getCountriesBlacklist_v3,updateCountryBlacklist_v3,
  }
}
  