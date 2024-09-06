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
import { DsHistoryList } from '../generated-definitions/DsHistoryList.js'
import { FleetServerConnectionInfoResponse } from '../generated-definitions/FleetServerConnectionInfoResponse.js'
import { FleetServerHistoryResponse } from '../generated-definitions/FleetServerHistoryResponse.js'
import { FleetServerInfoResponse } from '../generated-definitions/FleetServerInfoResponse.js'
import { ServersAdmin$ } from './endpoints/ServersAdmin$.js'

export function ServersAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  async function getServer_ByServerId(serverID: string): Promise<AxiosResponse<FleetServerInfoResponse>> {
    const $ = new ServersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServer_ByServerId(serverID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  async function getHistory_ByServerId(serverID: string): Promise<AxiosResponse<FleetServerHistoryResponse>> {
    const $ = new ServersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistory_ByServerId(serverID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ]
   */
  async function getServersHistory_ByFleetId(
    fleetID: string,
    queryParams?: {
      count?: number
      offset?: number
      reason?: string | null
      region?: string | null
      serverId?: string | null
      sortDirection?: string | null
      status?: string | null
    }
  ): Promise<AxiosResponse<DsHistoryList>> {
    const $ = new ServersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServersHistory_ByFleetId(fleetID, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:DS:LOGS [READ]
   */
  async function getConnectioninfo_ByServerId(serverID: string): Promise<AxiosResponse<FleetServerConnectionInfoResponse>> {
    const $ = new ServersAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConnectioninfo_ByServerId(serverID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getServer_ByServerId,
    getHistory_ByServerId,
    getServersHistory_ByFleetId,
    getConnectioninfo_ByServerId
  }
}
