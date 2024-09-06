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
import { ApproveStagingContentRequest } from '../generated-definitions/ApproveStagingContentRequest.js'
import { PaginatedListStagingContentResponse } from '../generated-definitions/PaginatedListStagingContentResponse.js'
import { StagingContentResponse } from '../generated-definitions/StagingContentResponse.js'
import { StagingContentAdmin$ } from './endpoints/StagingContentAdmin$.js'

export function StagingContentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  /**
   * List content that need admin&#39;s approval
   */
  async function getStagingContents_v2(queryParams?: {
    limit?: number
    offset?: number
    sortBy?: string | null
    status?: string | null
  }): Promise<AxiosResponse<PaginatedListStagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContents_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get staging content by ID
   */
  async function getStagingContent_ByContentId_v2(contentId: string): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContent_ByContentId_v2(contentId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * List user content&#39;s that need admin approval
   */
  async function getStagingContents_ByUserId_v2(
    userId: string,
    queryParams?: { limit?: number; offset?: number; sortBy?: string | null; status?: string | null }
  ): Promise<AxiosResponse<PaginatedListStagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStagingContents_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Approved content will shown to public player. Rejected content stays in staging area and couldn&#39;t be seen by other player
   */
  async function createApprove_ByContentId_v2(
    contentId: string,
    data: ApproveStagingContentRequest
  ): Promise<AxiosResponse<StagingContentResponse>> {
    const $ = new StagingContentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createApprove_ByContentId_v2(contentId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getStagingContents_v2,
    getStagingContent_ByContentId_v2,
    getStagingContents_ByUserId_v2,
    createApprove_ByContentId_v2
  }
}
