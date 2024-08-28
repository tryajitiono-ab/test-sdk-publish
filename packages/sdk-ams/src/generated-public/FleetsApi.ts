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
import { FleetClaimByKeysReq } from '../generated-definitions/FleetClaimByKeysReq.js'
import { FleetClaimReq } from '../generated-definitions/FleetClaimReq.js'
import { FleetClaimResponse } from '../generated-definitions/FleetClaimResponse.js'
import { Fleets$ } from './endpoints/Fleets$.js'


export function FleetsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Claim a dedicated server from fleets with matching claim keys Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE] 
   */
  async function updateServerClaim(data: FleetClaimByKeysReq): Promise<AxiosResponse<FleetClaimResponse>> {
    const $ = new Fleets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateServerClaim(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: NAMESPACE:{namespace}:AMS:SERVER:CLAIM [UPDATE] 
   */
  async function updateClaim_ByFleetId(fleetID:string, data: FleetClaimReq): Promise<AxiosResponse<FleetClaimResponse>> {
    const $ = new Fleets$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClaim_ByFleetId(fleetID, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    updateServerClaim,updateClaim_ByFleetId,
  }
}
  