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
import { GetImageDetailResponse } from '../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../generated-definitions/GetImageLimitResponse.js'
import { ListImageResponse } from '../generated-definitions/ListImageResponse.js'
import { ImageConfig$ } from './endpoints/ImageConfig$.js'


export function ImageConfigApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required permission: ADMIN:NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint lists all of dedicated servers images. Parameter Offset and Count is Required 
   */
  async function getImages( queryParams?: {count?: number, offset?: number, q?: string | null, sortBy?: 'createdAt' | 'updatedAt' | 'version', sortDirection?: 'asc' | 'desc'}): Promise<AxiosResponse<ListImageResponse>> {
    const $ = new ImageConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImages( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get DS image limit for specific namespace.This endpoint also give the non-persistent image which is used by any deployments 
   */
  async function getImagesLimit(): Promise<AxiosResponse<GetImageLimitResponse>> {
    const $ = new ImageConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImagesLimit()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get specific version of dedicated servers images. 
   */
  async function getImageVersion_ByVersion(version:string): Promise<AxiosResponse<GetImageDetailResponse>> {
    const $ = new ImageConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImageVersion_ByVersion(version, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getImages,getImagesLimit,getImageVersion_ByVersion,
  }
}
  