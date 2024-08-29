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
import { FleetCreateResponse } from '../generated-definitions/FleetCreateResponse.js'
import { FleetGetResponse } from '../generated-definitions/FleetGetResponse.js'
import { FleetListResponse } from '../generated-definitions/FleetListResponse.js'
import { FleetParameters } from '../generated-definitions/FleetParameters.js'
import { FleetServersResponse } from '../generated-definitions/FleetServersResponse.js'
import { FleetsAdmin$ } from './endpoints/FleetsAdmin$.js'


export function FleetsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ] 
   */
  async function getFleets(): Promise<AxiosResponse<FleetListResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFleets()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Optionally, sampling rules for the fleet can also be specified Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [CREATE] 
   */
  async function createFleet(data: FleetParameters): Promise<AxiosResponse<FleetCreateResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFleet(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [DELETE] 
   */
  async function deleteFleet_ByFleetId(fleetID:string): Promise<AxiosResponse<unknown>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteFleet_ByFleetId(fleetID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ] 
   */
  async function getFleet_ByFleetId(fleetID:string): Promise<AxiosResponse<FleetGetResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFleet_ByFleetId(fleetID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Optionally, sampling rules for the fleet can also be updated Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [UPDATE] 
   */
  async function updateFleet_ByFleetId(fleetID:string, data: FleetParameters): Promise<AxiosResponse<unknown>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFleet_ByFleetId(fleetID, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:FLEET [READ] 
   */
  async function getServers_ByFleetId(fleetID:string,  queryParams?: {count?: string | null, offset?: number}): Promise<AxiosResponse<FleetServersResponse>> {
    const $ = new FleetsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getServers_ByFleetId(fleetID,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getFleets,createFleet,deleteFleet_ByFleetId,getFleet_ByFleetId,updateFleet_ByFleetId,getServers_ByFleetId,
  }
}
  