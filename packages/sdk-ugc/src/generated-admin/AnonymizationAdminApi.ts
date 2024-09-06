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

import { AnonymizationAdmin$ } from './endpoints/AnonymizationAdmin$.js'

export function AnonymizationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Delete all user group
   */
  async function deleteGroup_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required permission ADMIN:NAMESPACE:{namespace}:USER:{userId} [DELETE]
   */
  async function deleteState_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteState_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete all user channel
   */
  async function deleteChannel_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChannel_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required permission &lt;b&gt;ADMIN:NAMESPACE:{namespace}:USER:{userId}:CONTENT [DELETE]&lt;/b&gt;.
   */
  async function deleteContent_ByUserId(userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteContent_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    deleteGroup_ByUserId,
    deleteState_ByUserId,
    deleteChannel_ByUserId,
    deleteContent_ByUserId
  }
}
