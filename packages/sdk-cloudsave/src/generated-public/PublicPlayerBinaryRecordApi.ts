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
import { BinaryRecordRequest } from '../generated-definitions/BinaryRecordRequest.js'
import { BulkGetPlayerBinaryRecordResponse } from '../generated-definitions/BulkGetPlayerBinaryRecordResponse.js'
import { BulkGetPlayerRecordsRequest } from '../generated-definitions/BulkGetPlayerRecordsRequest.js'
import { BulkUserIDsRequest } from '../generated-definitions/BulkUserIDsRequest.js'
import { ListPlayerBinaryRecordsResponse } from '../generated-definitions/ListPlayerBinaryRecordsResponse.js'
import { PlayerBinaryRecordMetadataPublicRequest } from '../generated-definitions/PlayerBinaryRecordMetadataPublicRequest.js'
import { PlayerBinaryRecordResponse } from '../generated-definitions/PlayerBinaryRecordResponse.js'
import { PublicPlayerBinaryRecordCreate } from '../generated-definitions/PublicPlayerBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'
import { PublicPlayerBinaryRecord$ } from './endpoints/PublicPlayerBinaryRecord$.js'


export function PublicPlayerBinaryRecordApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Retrieve list of my binary records by namespace. 
   */
  async function getUsersMeBinaries( queryParams?: {limit?: number, offset?: number, query?: string | null, tags?: string[]}): Promise<AxiosResponse<ListPlayerBinaryRecordsResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeBinaries( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve player record key and payload in bulk under given namespace. Maximum bulk key limit per request 20 
   */
  async function createUserMeBinaryBulk(data: BulkGetPlayerRecordsRequest): Promise<AxiosResponse<BulkGetPlayerBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeBinaryBulk(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a player binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.  
   */
  async function createBinary_ByUserId(userId:string, data: PublicPlayerBinaryRecordCreate): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBinary_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a player binary record. Only player who own the record can delete it 
   */
  async function deleteBinary_ByUserId_ByKey(userId:string, key:string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBinary_ByUserId_ByKey(userId, key, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get a player binary record by its key. **Private Record**: Only user who own the record could retrieve it. 
   */
  async function getBinary_ByUserId_ByKey(userId:string, key:string): Promise<AxiosResponse<PlayerBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinary_ByUserId_ByKey(userId, key, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a player binary record file by its key 
   */
  async function updateBinary_ByUserId_ByKey(userId:string, key:string, data: BinaryRecordRequest): Promise<AxiosResponse<PlayerBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBinary_ByUserId_ByKey(userId, key, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve list of other player public binary records under given namespace. 
   */
  async function getBinariesPublic_ByUserId(userId:string,  queryParams?: {limit?: number, offset?: number, tags?: string[]}): Promise<AxiosResponse<ListPlayerBinaryRecordsResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinariesPublic_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Bulk get other player&#39;s public binary record by userIds, max allowed 20 at a time. Only record with `isPublic=true` can be retrieved using this endpoint. 
   */
  async function fetchPublicBulkUser_ByKey(key:string, data: BulkUserIDsRequest): Promise<AxiosResponse<BulkGetPlayerBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchPublicBulkUser_ByKey(key, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve other player public binary record in bulk under given namespace. Maximum bulk key limit per request 20 
   */
  async function fetchBinaryBulk_ByUserId(userId:string, data: BulkGetPlayerRecordsRequest): Promise<AxiosResponse<BulkGetPlayerBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchBinaryBulk_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get other player&#39;s public binary record. Only record with `isPublic=true` can be retrieved using this endpoint. 
   */
  async function getPublic_ByUserId_ByKey(userId:string, key:string): Promise<AxiosResponse<PlayerBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPublic_ByUserId_ByKey(userId, key, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a player binary record metadata by its key 
   */
  async function updateMetadata_ByUserId_ByKey(userId:string, key:string, data: PlayerBinaryRecordMetadataPublicRequest): Promise<AxiosResponse<PlayerBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMetadata_ByUserId_ByKey(userId, key, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.  
   */
  async function createPresigned_ByUserId_ByKey(userId:string, key:string, data: UploadBinaryRecordRequest): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new PublicPlayerBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPresigned_ByUserId_ByKey(userId, key, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getUsersMeBinaries,createUserMeBinaryBulk,createBinary_ByUserId,deleteBinary_ByUserId_ByKey,getBinary_ByUserId_ByKey,updateBinary_ByUserId_ByKey,getBinariesPublic_ByUserId,fetchPublicBulkUser_ByKey,fetchBinaryBulk_ByUserId,getPublic_ByUserId_ByKey,updateMetadata_ByUserId_ByKey,createPresigned_ByUserId_ByKey,
  }
}
  