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
import { BlockManifest } from '../generated-definitions/BlockManifest.js'
import { CommitMultipartUploadRequest } from '../generated-definitions/CommitMultipartUploadRequest.js'
import { MultipartUploadSummary } from '../generated-definitions/MultipartUploadSummary.js'
import { MultipartUploadedPart } from '../generated-definitions/MultipartUploadedPart.js'
import { StartMultipartUploadRequest } from '../generated-definitions/StartMultipartUploadRequest.js'
import { MultipartUploaderAdmin$ } from './endpoints/MultipartUploaderAdmin$.js'


export function MultipartUploaderAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to &lt;b&gt;start multipart file upload&lt;/b&gt;. The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;Make sure to upload the Parts in-order based on the presigned urls order.The size of each Part should above or equals to 5MB, except the last one. 
   */
  async function createBlockMultipart(data: StartMultipartUploadRequest): Promise<AxiosResponse<MultipartUploadSummary>> {
    const $ = new MultipartUploaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBlockMultipart(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to &lt;b&gt;start resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The service will returns the list of presigned urls that will be used to upload the Parts.&lt;br/&gt;If there&#39;s a missing Part in the presigned urls list, it indicates that the Part already uploaded previously, so it can be skipped.&lt;br/&gt;The size of each Part should above or equals to 5MB, except the last Part. 
   */
  async function createBlockMultipart_v2(data: StartMultipartUploadRequest): Promise<AxiosResponse<MultipartUploadSummary>> {
    const $ = new MultipartUploaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBlockMultipart_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to &lt;b&gt;abort multipart file upload&lt;/b&gt;. The aborted multipart file upload cannot be continued again. 
   */
  async function deleteBlockMultipart_ByHash(hash:string): Promise<AxiosResponse<BlockManifest>> {
    const $ = new MultipartUploaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBlockMultipart_ByHash(hash, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to &lt;b&gt;commit multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;The request should contains list of PartNumber along with its ETag value. The list should be in-order. 
   */
  async function patchBlockMultipart_ByHash(hash:string, data: CommitMultipartUploadRequest): Promise<AxiosResponse<BlockManifest>> {
    const $ = new MultipartUploaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchBlockMultipart_ByHash(hash, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to &lt;b&gt;abort resumable multipart file upload&lt;/b&gt;.&lt;br/&gt;The aborted multipart file upload cannot be continued again. 
   */
  async function deleteBlockMultipart_ByHash_v2(hash:string): Promise<AxiosResponse<BlockManifest>> {
    const $ = new MultipartUploaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBlockMultipart_ByHash_v2(hash, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to &lt;b&gt;commit resumable multipart file upload&lt;/b&gt; to signal the upload completion.&lt;br/&gt;If there&#39;s a missing Part that not uploaded yet, then the multipart file upload cannot be committed. 
   */
  async function patchBlockMultipart_ByHash_v2(hash:string): Promise<AxiosResponse<BlockManifest>> {
    const $ = new MultipartUploaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchBlockMultipart_ByHash_v2(hash, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to &lt;b&gt;commit the Part of multipart upload&lt;/b&gt;.&lt;br/&gt;The committed Part will be marked as completed, so in case the multipart file upload retries, it won&#39;t be included in the list of unuploaded parts. 
   */
  async function createPartBlock_ByHash_v2(hash:string, data: MultipartUploadedPart): Promise<AxiosResponse<MultipartUploadSummary>> {
    const $ = new MultipartUploaderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPartBlock_ByHash_v2(hash, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createBlockMultipart,createBlockMultipart_v2,deleteBlockMultipart_ByHash,patchBlockMultipart_ByHash,deleteBlockMultipart_ByHash_v2,patchBlockMultipart_ByHash_v2,createPartBlock_ByHash_v2,
  }
}
  