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
import { BulkGetGameBinaryRecordResponse } from '../generated-definitions/BulkGetGameBinaryRecordResponse.js'
import { BulkGetGameRecordRequest } from '../generated-definitions/BulkGetGameRecordRequest.js'
import { GameBinaryRecordResponse } from '../generated-definitions/GameBinaryRecordResponse.js'
import { ListGameBinaryRecordsResponse } from '../generated-definitions/ListGameBinaryRecordsResponse.js'
import { PublicGameBinaryRecordCreate } from '../generated-definitions/PublicGameBinaryRecordCreate.js'
import { UploadBinaryRecordRequest } from '../generated-definitions/UploadBinaryRecordRequest.js'
import { UploadBinaryRecordResponse } from '../generated-definitions/UploadBinaryRecordResponse.js'
import { PublicGameBinaryRecord$ } from './endpoints/PublicGameBinaryRecord$.js'

export function PublicGameBinaryRecordApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
    ...(args?.coreConfig?.baseURL ? { baseURL: args?.coreConfig?.baseURL } : {}),
    ...args?.axiosConfig?.request
  })
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  async function getBinaries(queryParams?: {
    limit?: number
    offset?: number
    query?: string | null
    tags?: string[]
  }): Promise<AxiosResponse<ListGameBinaryRecordsResponse>> {
    const $ = new PublicGameBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinaries(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBinary(data: PublicGameBinaryRecordCreate): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new PublicGameBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBinary(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createBinaryBulk(data: BulkGetGameRecordRequest): Promise<AxiosResponse<BulkGetGameBinaryRecordResponse>> {
    const $ = new PublicGameBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBinaryBulk(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function deleteBinary_ByKey(key: string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicGameBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getBinary_ByKey(key: string): Promise<AxiosResponse<GameBinaryRecordResponse>> {
    const $ = new PublicGameBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBinary_ByKey(key)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function updateBinary_ByKey(key: string, data: BinaryRecordRequest): Promise<AxiosResponse<GameBinaryRecordResponse>> {
    const $ = new PublicGameBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBinary_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function createPresigned_ByKey(key: string, data: UploadBinaryRecordRequest): Promise<AxiosResponse<UploadBinaryRecordResponse>> {
    const $ = new PublicGameBinaryRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPresigned_ByKey(key, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Retrieve list of binary records by namespace.
     */
    getBinaries,
    /**
     * Create a game binary record. Other detail info: `key` should follow these rules: 1. support uppercase and lowercase letters, numbers, and separators **&#34;-&#34;**, **&#34;_&#34;**, **&#34;.&#34;** are allowed 2. begin and end with letters or numbers 3. spaces are not allowed 4. separators must not appears twice in a row Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
     */
    createBinary,
    /**
     * Bulk get game binary records. Maximum key per request 20.
     */
    createBinaryBulk,
    /**
     * Delete a game binary record.
     */
    deleteBinary_ByKey,
    /**
     * Get a game binary record by its key.
     */
    getBinary_ByKey,
    /**
     * Update a game binary record file by its key
     */
    updateBinary_ByKey,
    /**
     * Request presigned URL to upload the binary record to s3. Other detail info: Supported file types: jpeg, jpg, png, bmp, gif, mp3, webp, and bin.
     */
    createPresigned_ByKey
  }
}
