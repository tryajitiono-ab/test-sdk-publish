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
import { ListBaseResponseStr } from '../generated-definitions/ListBaseResponseStr.js'
import { PagedResponseGetNamespaceEventResponse } from '../generated-definitions/PagedResponseGetNamespaceEventResponse.js'
import { TelemetryAdmin$ } from './endpoints/TelemetryAdmin$.js'


export function TelemetryAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves namespace list 
   */
  async function getNamespaces(): Promise<AxiosResponse<ListBaseResponseStr>> {
    const $ = new TelemetryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getNamespaces()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint requires valid JWT token and telemetry permission This endpoint retrieves event list 
   */
  async function getEvents( queryParams?: {startTime?: string | null, endTime?: string | null, offset?: number, limit?: number, userId?: string | null, flightId?: string | null, eventId?: string | null, eventName?: string | null, eventPayload?: string | null, deviceType?: string | null}): Promise<AxiosResponse<PagedResponseGetNamespaceEventResponse>> {
    const $ = new TelemetryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEvents( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getNamespaces,getEvents,
  }
}
  