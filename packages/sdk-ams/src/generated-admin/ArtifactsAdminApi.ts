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
import { ArtifactListResponse } from '../generated-definitions/ArtifactListResponse.js'
import { ArtifactUrlResponse } from '../generated-definitions/ArtifactUrlResponse.js'
import { ArtifactUsageResponse } from '../generated-definitions/ArtifactUsageResponse.js'
import { FleetArtifactsSampleRules } from '../generated-definitions/FleetArtifactsSampleRules.js'
import { ArtifactsAdmin$ } from './endpoints/ArtifactsAdmin$.js'


export function ArtifactsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA [DELETE] 
   */
  async function deleteArtifact( queryParams?: {artifactType?: string | null, fleetId?: string | null, uploadedBefore?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteArtifact( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get all artifacts matching the provided search criteria. When criteria is not specified the data returned won&#39;t have been filtered on those parameters Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ] 
   */
  async function getArtifacts( queryParams?: {artifactType?: string | null, count?: number, endDate?: string | null, fleetID?: string | null, imageID?: string | null, maxSize?: number, minSize?: number, offset?: number, region?: string | null, serverId?: string | null, startDate?: string | null, status?: string | null}): Promise<AxiosResponse<ArtifactListResponse>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getArtifacts( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ] 
   */
  async function getArtifactsUsage(): Promise<AxiosResponse<ArtifactUsageResponse>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getArtifactsUsage()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [DELETE] 
   */
  async function deleteArtifact_ByArtifactId(artifactID:string): Promise<AxiosResponse<unknown>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteArtifact_ByArtifactId(artifactID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ] 
   */
  async function getUrl_ByArtifactId(artifactID:string): Promise<AxiosResponse<ArtifactUrlResponse>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUrl_ByArtifactId(artifactID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [READ] 
   */
  async function getArtifactsSamplingRules_ByFleetId(fleetID:string): Promise<AxiosResponse<FleetArtifactsSampleRules>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getArtifactsSamplingRules_ByFleetId(fleetID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:ARTIFACT [UPDATE] 
   */
  async function updateArtifactsSamplingRule_ByFleetId(fleetID:string, data: FleetArtifactsSampleRules): Promise<AxiosResponse<FleetArtifactsSampleRules>> {
    const $ = new ArtifactsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateArtifactsSamplingRule_ByFleetId(fleetID, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteArtifact,getArtifacts,getArtifactsUsage,deleteArtifact_ByArtifactId,getUrl_ByArtifactId,getArtifactsSamplingRules_ByFleetId,updateArtifactsSamplingRule_ByFleetId,
  }
}
  