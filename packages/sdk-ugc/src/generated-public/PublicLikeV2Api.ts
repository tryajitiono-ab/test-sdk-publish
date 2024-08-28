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
import { PaginatedContentLikersResponse } from '../generated-definitions/PaginatedContentLikersResponse.js'
import { PublicLikeV2$ } from './endpoints/PublicLikeV2$.js'


export function PublicLikeV2Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This endpoint will only display the list of users who performed like from v2 endpoint. 
   */
  async function getLike_ByContentId_v2(contentId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null}): Promise<AxiosResponse<PaginatedContentLikersResponse>> {
    const $ = new PublicLikeV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLike_ByContentId_v2(contentId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint will update like/unlike state from a content 
   */
  async function updateLike_ByContentId_v2(contentId:string, data: ContentLikeRequest): Promise<AxiosResponse<ContentLikeResponse>> {
    const $ = new PublicLikeV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLike_ByContentId_v2(contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getLike_ByContentId_v2,updateLike_ByContentId_v2,
  }
}
  