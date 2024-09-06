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
import { NamespaceConfig } from '../generated-definitions/NamespaceConfig.js'
import { NamespaceConfigList } from '../generated-definitions/NamespaceConfigList.js'
import { PatchNamespaceConfigRequest } from '../generated-definitions/PatchNamespaceConfigRequest.js'
import { Config$ } from './endpoints/Config$.js'

export function ConfigApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get matchmaking config of all namespaces. Will only return namespace configs than have been updated.
   */
  async function getConfig(): Promise<AxiosResponse<NamespaceConfigList>> {
    const $ = new Config$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get matchmaking config of a namespaces.
   */
  async function getConfig_ByNamespace(): Promise<AxiosResponse<NamespaceConfig>> {
    const $ = new Config$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfig_ByNamespace()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Patch update matchmaking config of a namespaces. Partially update matchmaking config, will only update value that defined on the request.
   */
  async function patchConfig_ByNamespace(data: PatchNamespaceConfigRequest): Promise<AxiosResponse<NamespaceConfig>> {
    const $ = new Config$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchConfig_ByNamespace(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getConfig,
    getConfig_ByNamespace,
    patchConfig_ByNamespace
  }
}
