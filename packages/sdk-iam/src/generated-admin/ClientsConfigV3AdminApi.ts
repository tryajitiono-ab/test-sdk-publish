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
import { ListClientPermissionSet } from '../generated-definitions/ListClientPermissionSet.js'
import { ListTemplatesResponse } from '../generated-definitions/ListTemplatesResponse.js'
import { ListUpsertModulesRequest } from '../generated-definitions/ListUpsertModulesRequest.js'
import { PermissionSetDeleteGroupRequest } from '../generated-definitions/PermissionSetDeleteGroupRequest.js'
import { ClientsConfigV3Admin$ } from './endpoints/ClientsConfigV3Admin$.js'

export function ClientsConfigV3AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * List client templates
   */
  async function getClientConfigTemplates_v3(): Promise<AxiosResponse<ListTemplatesResponse>> {
    const $ = new ClientsConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClientConfigTemplates_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete Client config permissions by module and group.
   */
  async function deleteClientConfigPermission_v3(
    data: PermissionSetDeleteGroupRequest,
    queryParams?: { forceDelete?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClientConfigPermission_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * List Client available permissions
   */
  async function getClientConfigPermissions_v3(queryParams?: {
    excludePermissions?: boolean | null
  }): Promise<AxiosResponse<ListClientPermissionSet>> {
    const $ = new ClientsConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClientConfigPermissions_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update Client available permissions, if module or group not exists, it will auto create.
   */
  async function updateClientConfigPermission_v3(
    data: ListUpsertModulesRequest,
    queryParams?: { forceDelete?: boolean | null }
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ClientsConfigV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClientConfigPermission_v3(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getClientConfigTemplates_v3,
    deleteClientConfigPermission_v3,
    getClientConfigPermissions_v3,
    updateClientConfigPermission_v3
  }
}
