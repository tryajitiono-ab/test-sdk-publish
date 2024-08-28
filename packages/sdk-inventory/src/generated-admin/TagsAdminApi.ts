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
import { CreateTagReq } from '../generated-definitions/CreateTagReq.js'
import { CreateTagResp } from '../generated-definitions/CreateTagResp.js'
import { ListTagsResp } from '../generated-definitions/ListTagsResp.js'
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
   *  This endpoint will list all tags in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [READ]  
   */
  async function getTags( queryParams?: {limit?: number, offset?: number, owner?: string | null, sortBy?: 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'name' | 'name:asc' | 'name:desc'}): Promise<AxiosResponse<ListTagsResp>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTags( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  This endpoint will create a new tag. The tag name must be unique per namespace. It is safe to call this endpoint even if the tag already exists. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [CREATE]  
   */
  async function createTag(data: CreateTagReq): Promise<AxiosResponse<CreateTagResp>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTag(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  This endpoint will delete a tag by tagName in a specified namespace. If the tagName doesn&#39;t exist in a namespace, it&#39;ll return not found. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:TAG [DELETE]  
   */
  async function deleteTag_ByTagName(tagName:string): Promise<AxiosResponse<unknown>> {
    const $ = new TagsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTag_ByTagName(tagName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getTags,createTag,deleteTag_ByTagName,
  }
}
  