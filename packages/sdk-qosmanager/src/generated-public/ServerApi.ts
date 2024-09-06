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
import { HeartbeatRequest } from '../generated-definitions/HeartbeatRequest.js'
import { Server$ } from './endpoints/Server$.js'

export function ServerApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * ``` Required permission: QOS:SERVER [CREATE][UPDATE] Required scope: social This endpoint is intended to be called by QoS service to register and periodically let QoS Manager know that it is still alive. ```
   */
  async function createServerHeartbeat(data: HeartbeatRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Server$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createServerHeartbeat(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    createServerHeartbeat
  }
}
