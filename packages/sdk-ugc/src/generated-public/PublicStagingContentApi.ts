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
import { PaginatedListStagingContentResponse } from '../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../generated-definitions/StagingContentResponse.js'
import { UpdateStagingContentRequest } from '../generated-definitions/UpdateStagingContentRequest.js'
import { PublicStagingContent$ } from './endpoints/PublicStagingContent$.js'


export function PublicStagingContentApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * List user staging contents 
   */
  async function getStagingContents_ByUserId_v2(userId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null, status?: string | null}): Promise<AxiosResponse<PaginatedListStagingContentResponse>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContents_ByUserId_v2(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete user staging content by ID 
   */
  async function deleteStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStagingContent_ByUserId_ByContentId_v2(userId, contentId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get user staging content by ID 
   */
  async function getStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContent_ByUserId_ByContentId_v2(userId, contentId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update staging content 
   */
  async function updateStagingContent_ByUserId_ByContentId_v2(userId:string, contentId:string, data: UpdateStagingContentRequest): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new PublicStagingContent$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStagingContent_ByUserId_ByContentId_v2(userId, contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getStagingContents_ByUserId_v2,deleteStagingContent_ByUserId_ByContentId_v2,getStagingContent_ByUserId_ByContentId_v2,updateStagingContent_ByUserId_ByContentId_v2,
  }
}
  