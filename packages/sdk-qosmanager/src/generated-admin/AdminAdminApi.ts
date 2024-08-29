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
import { SetAliasRequest } from '../generated-definitions/SetAliasRequest.js'
import { UpdateServerRequest } from '../generated-definitions/UpdateServerRequest.js'
import { AdminAdmin$ } from './endpoints/AdminAdmin$.js'


export function AdminAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * ``` Required permission: ADMIN:QOS:SERVER [DELETE] Required scope: social This endpoint delete a registered QoS service record. ``` 
   */
  async function deleteServer_ByRegion(region:string): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteServer_ByRegion(region, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ``` Required permission: ADMIN:QOS:SERVER [UDPATE] Required scope: social This endpoint modifies a registered QoS service&#39;s region alias. ``` 
   */
  async function createAlia_ByRegion(region:string, data: SetAliasRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAlia_ByRegion(region, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ``` Required permission: ADMIN:NAMESPACE:{namespace}:QOS:SERVER [UPDATE] Required scope: social This endpoint updates the registered QoS service&#39;s configurable configuration&#39;. ``` 
   */
  async function patchServer_ByRegion(region:string, data: UpdateServerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchServer_ByRegion(region, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteServer_ByRegion,createAlia_ByRegion,patchServer_ByRegion,
  }
}
  