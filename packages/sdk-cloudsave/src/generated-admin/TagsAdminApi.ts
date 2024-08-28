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
import { ListTagsResponse } from '../generated-definitions/ListTagsResponse.js'
import { TagRequest } from '../generated-definitions/TagRequest.js'
import { TagsAdmin$ } from './endpoints/TagsAdmin$.js'


export function TagsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * ## Description Retrieve list of available tags by namespace 
   */
  async function getTags( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<ListTagsResponse>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTags( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ## Description This endpoint will create new tags 
   */
  async function createTag(data: TagRequest): Promise<AxiosResponse<unknown>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTag(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ## Description This endpoint will delete tag by name 
   */
  async function deleteTag_ByTag(tag:string): Promise<AxiosResponse<unknown>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTag_ByTag(tag, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getTags,createTag,deleteTag_ByTag,
  }
}
  