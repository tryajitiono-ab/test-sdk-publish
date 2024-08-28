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
import { CreateTypeRequest } from '../generated-definitions/CreateTypeRequest.js'
import { CreateTypeResponse } from '../generated-definitions/CreateTypeResponse.js'
import { PaginatedGetTypeResponse } from '../generated-definitions/PaginatedGetTypeResponse.js'
import { TypeAdmin$ } from './endpoints/TypeAdmin$.js'


export function TypeAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get available types paginated 
   */
  async function getTypes( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<PaginatedGetTypeResponse>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTypes( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Creates a new type and subtype 
   */
  async function createType(data: CreateTypeRequest): Promise<AxiosResponse<CreateTypeResponse>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createType(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete existing type 
   */
  async function deleteType_ByTypeId(typeId:string): Promise<AxiosResponse<unknown>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteType_ByTypeId(typeId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Updates a type and subtype 
   */
  async function updateType_ByTypeId(typeId:string, data: CreateTypeRequest): Promise<AxiosResponse<CreateTypeResponse>> {
    const $ = new TypeAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateType_ByTypeId(typeId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getTypes,createType,deleteType_ByTypeId,updateType_ByTypeId,
  }
}
  