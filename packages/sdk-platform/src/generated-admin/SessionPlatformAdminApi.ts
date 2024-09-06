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
import { XblUserSessionRequest } from '../generated-definitions/XblUserSessionRequest.js'
import { SessionPlatformAdmin$ } from './endpoints/SessionPlatformAdmin$.js'

export function SessionPlatformAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to register/update a session on xbox.
   */
  async function updateSessionXbl_ByUserId(userId: string, data: XblUserSessionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new SessionPlatformAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSessionXbl_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    updateSessionXbl_ByUserId
  }
}
