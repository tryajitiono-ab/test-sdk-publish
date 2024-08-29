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
import { PublicReasonListResponse } from '../generated-definitions/PublicReasonListResponse.js'
import { ReasonGroupListResponse } from '../generated-definitions/ReasonGroupListResponse.js'
import { PublicReasons$ } from './endpoints/PublicReasons$.js'


export function PublicReasonsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  
  
  async function getReasons( queryParams?: {group?: string | null, limit?: number, offset?: number, title?: string | null}): Promise<AxiosResponse<PublicReasonListResponse>> {
    const $ = new PublicReasons$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReasons( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Return list of reason groups ID and title under given namespace. 
   */
  async function getReasonGroups( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<ReasonGroupListResponse>> {
    const $ = new PublicReasons$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReasonGroups( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getReasons,getReasonGroups,
  }
}
  