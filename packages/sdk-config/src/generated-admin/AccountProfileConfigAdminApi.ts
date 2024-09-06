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
import { ConfigInfo } from '../generated-definitions/ConfigInfo.js'
import { CreateConfig } from '../generated-definitions/CreateConfig.js'
import { UpdateConfig } from '../generated-definitions/UpdateConfig.js'
import { AccountProfileConfigAdmin$ } from './endpoints/AccountProfileConfigAdmin$.js'

export function AccountProfileConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Created account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled
   */
  async function createConfigAccount(data: CreateConfig): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new AccountProfileConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfigAccount(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled
   */
  async function getConfigAccount_ByConfigKey(configKey: string): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new AccountProfileConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigAccount_ByConfigKey(configKey)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update account profile related config values. **Supported Config Key:** * uniqueDisplayNameEnabled * usernameDisabled
   */
  async function updateConfigAccount_ByConfigKey(configKey: string, data: UpdateConfig): Promise<AxiosResponse<ConfigInfo>> {
    const $ = new AccountProfileConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfigAccount_ByConfigKey(configKey, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    createConfigAccount,
    getConfigAccount_ByConfigKey,
    updateConfigAccount_ByConfigKey
  }
}
