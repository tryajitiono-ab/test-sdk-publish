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
import { ContentLikeRequest } from '../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PublicLikeLegacy$ } from './endpoints/PublicLikeLegacy$.js'


export function PublicLikeLegacyApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded** 
   */
  async function getContentsLiked( queryParams?: {isofficial?: boolean | null, limit?: number, name?: string | null, offset?: number, orderby?: string | null, sortby?: string | null, subtype?: string | null, tags?: string[], type?: string | null}): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new PublicLikeLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentsLiked( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint will update like/unlike state from a content 
   */
  async function updateLike_ByContentId(contentId:string, data: ContentLikeRequest): Promise<AxiosResponse<ContentLikeResponse>> {
    const $ = new PublicLikeLegacy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLike_ByContentId(contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getContentsLiked,updateLike_ByContentId,
  }
}
  