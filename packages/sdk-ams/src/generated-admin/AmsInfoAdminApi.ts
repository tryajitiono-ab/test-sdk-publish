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
import { AmsRegionsResponse } from '../generated-definitions/AmsRegionsResponse.js'
import { AvailableInstanceTypesResponse } from '../generated-definitions/AvailableInstanceTypesResponse.js'
import { AmsInfoAdmin$ } from './endpoints/AmsInfoAdmin$.js'

export function AmsInfoAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getRegions(): Promise<AxiosResponse<AmsRegionsResponse>> {
    const $ = new AmsInfoAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRegions()
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSupportedInstances(): Promise<AxiosResponse<AvailableInstanceTypesResponse>> {
    const $ = new AmsInfoAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSupportedInstances()
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
     */
    getRegions,
    /**
     * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [READ]
     */
    getSupportedInstances
  }
}
