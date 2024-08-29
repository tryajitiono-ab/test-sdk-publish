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
import { ContentDownloadResponseV2 } from '../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../generated-definitions/ContentDownloadResponseV2Array.js'
import { ContentRequestV2 } from '../generated-definitions/ContentRequestV2.js'
import { CreateContentResponseV2 } from '../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { PaginatedContentDownloadResponseV2 } from '../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PublicGetContentBulkRequest } from '../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequestV2 } from '../generated-definitions/UpdateContentRequestV2.js'
import { UpdateContentResponseV2 } from '../generated-definitions/UpdateContentResponseV2.js'
import { UpdateContentShareCodeRequest } from '../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateFileLocationRequest } from '../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../generated-definitions/UpdateScreenshotResponse.js'
import { PublicContentV2$ } from './endpoints/PublicContentV2$.js'


export function PublicContentV2Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * For advance tag filtering supports &amp; as AND operator and | as OR operator and parentheses ( ) for priority. e.g: *tags=red* *tags=red&amp;animal* *tags=red|animal* *tags=red&amp;animal|wild* *tags=red&amp;(animal|wild)* The precedence of logical operator is AND &gt; OR, so if no parentheses, AND logical operator will be executed first. Allowed character for operand: alphanumeric, underscore _ and dash - Allowed character for operator: &amp; | ( ) **Please note that value of tags query param should be URL encoded** 
   */
  async function getContents_v2( queryParams?: {isOfficial?: boolean | null, limit?: number, name?: string | null, offset?: number, sortBy?: string | null, subType?: string | null, tags?: string[], type?: string | null}): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_v2( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Maximum requested Ids: 100. Public user can access without token or if token specified, requires valid user token 
   */
  async function createContentBulk_v2(data: PublicGetContentBulkRequest): Promise<AxiosResponse<ContentDownloadResponseV2Array>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContentBulk_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public user can access without token or if token specified, requires valid user token 
   */
  async function getContent_ByContentId_v2(contentId:string): Promise<AxiosResponse<ContentDownloadResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContent_ByContentId_v2(contentId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public user can access without token or if token specified, required permission &lt;b&gt;NAMESPACE:{namespace}:USER:{userId}:CONTENT [READ]&lt;/b&gt;. 
   */
  async function getContents_ByUserId_v2(userId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null}): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_v2(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Require valid user token. Maximum sharecodes per request 100 
   */
  async function createContentSharecodeBulk_v2(data: GetContentBulkByShareCodesRequest): Promise<AxiosResponse<ContentDownloadResponseV2Array>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContentSharecodeBulk_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public user can access without token or if token specified, requires valid user token 
   */
  async function getContents_ByChannelId_v2(channelId:string,  queryParams?: {limit?: number, name?: string | null, offset?: number, sortBy?: string | null}): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByChannelId_v2(channelId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public user can access without token or if token specified, requires valid user token 
   */
  async function getContentSharecode_ByShareCode_v2(shareCode:string): Promise<AxiosResponse<ContentDownloadResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentSharecode_ByShareCode_v2(shareCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a new content 
   */
  async function createContent_ByUserId_ByChannelId_v2(userId:string, channelId:string, data: ContentRequestV2): Promise<AxiosResponse<CreateContentResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createContent_ByUserId_ByChannelId_v2(userId, channelId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint used to request upload URL from content&#39;s screenshot. If *contentType* is not specified, it will use *fileExtension* value. Supported file extensions: pjp, jpg, jpeg, jfif, bmp, png. Maximum description length: 1024 
   */
  async function createScreenshot_ByUserId_ByContentId_v2(userId:string, contentId:string, data: CreateScreenshotRequest): Promise<AxiosResponse<CreateScreenshotResponse>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createScreenshot_ByUserId_ByContentId_v2(userId, contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Maximum description length: 1024 
   */
  async function updateScreenshot_ByUserId_ByContentId_v2(userId:string, contentId:string, data: UpdateScreenshotRequest): Promise<AxiosResponse<UpdateScreenshotResponse>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateScreenshot_ByUserId_ByContentId_v2(userId, contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete existing content 
   */
  async function deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update existing content 
   */
  async function patchContent_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: UpdateContentRequestV2): Promise<AxiosResponse<UpdateContentResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchContent_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete screenshot from a content 
   */
  async function deleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2(userId:string, contentId:string, screenshotId:string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2(userId, contentId, screenshotId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to modify the shareCode of a content. However, this operation is restricted by default and requires the above permission to be granted to the User role.&lt;br&gt; &lt;code&gt;shareCode&lt;/code&gt; format should follows: Max length: 7 Available characters: abcdefhkpqrstuxyz 
   */
  async function patchSharecode_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: UpdateContentShareCodeRequest): Promise<AxiosResponse<CreateContentResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchSharecode_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Generate content upload URL 
   */
  async function patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: GenerateContentUploadUrlRequest): Promise<AxiosResponse<GenerateContentUploadUrlResponse>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete existing content by share code 
   */
  async function deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(userId, channelId, shareCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint should be used after calling generate upload url endpoint to commit the changes 
   */
  async function patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(userId:string, channelId:string, contentId:string, data: UpdateFileLocationRequest): Promise<AxiosResponse<UpdateContentResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(userId, channelId, contentId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update content by share code 
   */
  async function updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(userId:string, channelId:string, shareCode:string, data: UpdateContentRequestV2): Promise<AxiosResponse<CreateContentResponseV2>> {
    const $ = new PublicContentV2$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(userId, channelId, shareCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getContents_v2,createContentBulk_v2,getContent_ByContentId_v2,getContents_ByUserId_v2,createContentSharecodeBulk_v2,getContents_ByChannelId_v2,getContentSharecode_ByShareCode_v2,createContent_ByUserId_ByChannelId_v2,createScreenshot_ByUserId_ByContentId_v2,updateScreenshot_ByUserId_ByContentId_v2,deleteContent_ByUserId_ByChannelId_ByContentId_v2,patchContent_ByUserId_ByChannelId_ByContentId_v2,deleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2,patchSharecode_ByUserId_ByChannelId_ByContentId_v2,patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2,deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2,patchFileLocation_ByUserId_ByChannelId_ByContentId_v2,updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2,
  }
}
  