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
import { EvaluatePlayerProgressionRequest } from '../generated-definitions/EvaluatePlayerProgressionRequest.js'
import { ChallengeProgressionAdmin$ } from './endpoints/ChallengeProgressionAdmin$.js'


export function ChallengeProgressionAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE:PROGRESSION [UPDATE]&lt;/li&gt;&lt;li&gt;Limited up to 10 users per request&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createProgresEvaluate(data: EvaluatePlayerProgressionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ChallengeProgressionAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProgresEvaluate(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createProgresEvaluate,
  }
}
  