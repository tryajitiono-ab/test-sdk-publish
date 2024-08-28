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
import { FulfillCodeRequest } from '../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentResult } from '../generated-definitions/FulfillmentResult.js'
import { Fulfillment$ } from './endpoints/Fulfillment$.js'


export function FulfillmentApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Redeem campaign code, this api have rate limit, default: only allow request once per user in 2 seconds&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createFulfillmentCode_ByUserId(userId:string, data: FulfillCodeRequest): Promise<AxiosResponse<FulfillmentResult>> {
    const $ = new Fulfillment$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentCode_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createFulfillmentCode_ByUserId,
  }
}
  