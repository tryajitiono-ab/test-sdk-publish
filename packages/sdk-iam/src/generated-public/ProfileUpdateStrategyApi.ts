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
import { GetProfileUpdateStrategyConfigResponse } from '../generated-definitions/GetProfileUpdateStrategyConfigResponse.js'
import { ProfileUpdateStrategy$ } from './endpoints/ProfileUpdateStrategy$.js'

export function ProfileUpdateStrategyApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getProfileUpdateStrategies_v3(queryParams?: {
    field?: 'country' | 'display_name' | 'dob' | 'username'
  }): Promise<AxiosResponse<GetProfileUpdateStrategyConfigResponse>> {
    const $ = new ProfileUpdateStrategy$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfileUpdateStrategies_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * This API is for public user to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
     */
    getProfileUpdateStrategies_v3
  }
}
