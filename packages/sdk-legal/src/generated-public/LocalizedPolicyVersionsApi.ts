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
import { RetrieveLocalizedPolicyVersionPublicResponse } from '../generated-definitions/RetrieveLocalizedPolicyVersionPublicResponse.js'
import { LocalizedPolicyVersions$ } from './endpoints/LocalizedPolicyVersions$.js'


export function LocalizedPolicyVersionsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Retrieve specific localized policy version including the policy version and base policy version where the localized policy version located.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt; 
   */
  async function getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string): Promise<AxiosResponse<RetrieveLocalizedPolicyVersionPublicResponse>> {
    const $ = new LocalizedPolicyVersions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
  }
}
  