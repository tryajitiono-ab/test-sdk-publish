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
import { FileUploadUrlInfo } from '../generated-definitions/FileUploadUrlInfo.js'
import { FileUpload$ } from './endpoints/FileUpload$.js'


export function FileUploadApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Generate an upload URL for user content. It&#39;s valid for 10 minutes.&lt;br/&gt;There are 2 kinds of storage limitation per user : maximum file count and maximum file size.&lt;br/&gt;The threshold of those limitations is different between upload category that is used.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11102&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file count per user&lt;/i&gt;: 10 files&lt;/li&gt;&lt;li&gt;&lt;i&gt;Default maximum file size per user&lt;/i&gt;: 104857600 bytes&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createFile_ByUserId(userId:string,  queryParams: {fileType: string | null, category?: string | null}): Promise<AxiosResponse<FileUploadUrlInfo>> {
    const $ = new FileUpload$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFile_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Generate an upload URL. It&#39;s valid for 10 minutes.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11101&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: URL data&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createFile_ByFolder(folder:string,  queryParams: {fileType: string | null}): Promise<AxiosResponse<FileUploadUrlInfo>> {
    const $ = new FileUpload$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFile_ByFolder(folder,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createFile_ByUserId,createFile_ByFolder,
  }
}
  