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
import { AxiosResponse } from 'axios'
import { QoSEndpointResponse } from '../generated-definitions/QoSEndpointResponse.js'
import { UpdateServerRequest } from '../generated-definitions/UpdateServerRequest.js'
import { AmsQoSAdmin$ } from './endpoints/AmsQoSAdmin$.js'


export function AmsQoSAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
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
   * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [READ] This endpoint lists all QoS services available in all regions. This endpoint is intended to be called by game client to find out all available regions. After getting a list of QoS on each region, game client is expected to ping each one with UDP connection as described below: 1. Make UDP connection to each QoS&#39;s IP:Port 2. Send string &#34;PING&#34; after connection established 3. Wait for string &#34;PONG&#34; response 4. Note the request-response latency for each QoS in each region The game then can use ping latency information to either: 1. Inform the player on these latencies and let player choose preferred region 2. Send the latency list to Matchmaking Service so that player can be matched with other players in nearby regions  
   */
  async function getQos( queryParams?: {status?: string | null}): Promise<AxiosResponse<QoSEndpointResponse>> {
    const $ = new AmsQoSAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getQos( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ``` Required Permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] This endpoint updates the registered QoS service&#39;s configurable configuration.  
   */
  async function patchQo_ByRegion(region:string, data: UpdateServerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AmsQoSAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchQo_ByRegion(region, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getQos,patchQo_ByRegion,
  }
}
  