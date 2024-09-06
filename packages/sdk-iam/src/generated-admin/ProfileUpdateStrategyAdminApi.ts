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
import { SimpleProfileUpdateStrategyConfigs } from '../generated-definitions/SimpleProfileUpdateStrategyConfigs.js'
import { UpdateProfileUpdateStrategyConfigRequest } from '../generated-definitions/UpdateProfileUpdateStrategyConfigRequest.js'
import { ProfileUpdateStrategyAdmin$ } from './endpoints/ProfileUpdateStrategyAdmin$.js'

export function ProfileUpdateStrategyAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is for admin to get profile update strategy by namespace and field. Note: If the config is not found, this API will return a config with unlimited.
   */
  async function getProfileUpdateStrategies_v3(queryParams?: {
    field?: 'country' | 'display_name' | 'dob' | 'username'
  }): Promise<AxiosResponse<GetProfileUpdateStrategyConfigResponse>> {
    const $ = new ProfileUpdateStrategyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfileUpdateStrategies_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API includes upsert behavior. Note: 1. field &#39;config&#39;&#39; in request body will only work when type is limited
   */
  async function updateProfileUpdateStrategy_v3(
    data: UpdateProfileUpdateStrategyConfigRequest,
    queryParams: { field: 'country' | 'display_name' | 'dob' | 'username' }
  ): Promise<AxiosResponse<SimpleProfileUpdateStrategyConfigs>> {
    const $ = new ProfileUpdateStrategyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfileUpdateStrategy_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getProfileUpdateStrategies_v3,
    updateProfileUpdateStrategy_v3
  }
}
