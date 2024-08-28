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
import { AddDownloadCountResponse } from '../generated-definitions/AddDownloadCountResponse.js'
import { PublicDownloadCountLegacy$ } from './endpoints/PublicDownloadCountLegacy$.js'


export function PublicDownloadCountLegacyApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This endpoint can be used to count how many the ugc downloaded 
   */
  async function createDownloadcount_ByContentId(contentId:string): Promise<AxiosResponse<AddDownloadCountResponse>> {
    const $ = new PublicDownloadCountLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDownloadcount_ByContentId(contentId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createDownloadcount_ByContentId,
  }
}
  