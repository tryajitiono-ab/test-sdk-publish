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
import { BlockDownloadUrls } from '../generated-definitions/BlockDownloadUrls.js'
import { BlockDownloadUrlsRequest } from '../generated-definitions/BlockDownloadUrlsRequest.js'
import { DownloaderAdmin$ } from './endpoints/DownloaderAdmin$.js'


export function DownloaderAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to Generate Download URLs for the requested blocks inside the specified buildId.&lt;br/&gt;The download URL generation may returns Signed URL or Public URL, depends on service configurations. 
   */
  async function createBlockUrl_ByBuildId(buildId:string, data: BlockDownloadUrlsRequest): Promise<AxiosResponse<BlockDownloadUrls>> {
    const $ = new DownloaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBlockUrl_ByBuildId(buildId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createBlockUrl_ByBuildId,
  }
}
  