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
import { ConfigResponse } from '../generated-definitions/ConfigResponse.js'
import { ReportingLimit } from '../generated-definitions/ReportingLimit.js'
import { ConfigurationsAdmin$ } from './endpoints/ConfigurationsAdmin$.js'


export function ConfigurationsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * TimeInterval is in nanoseconds. When there&#39;s no configuration set, the response is the default value (configurable through envar).  
   */
  async function getConfigurations( queryParams?: {category?: 'all' | 'extension'}): Promise<AxiosResponse<ConfigResponse>> {
    const $ = new ConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigurations( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * The behaviour of this endpoint is upsert based on the namespace. So, you can use this for both creating &amp; updating the configuration. TimeInterval is in nanoseconds.  
   */
  async function createConfiguration(data: ReportingLimit): Promise<AxiosResponse<ConfigResponse>> {
    const $ = new ConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfiguration(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getConfigurations,createConfiguration,
  }
}
  