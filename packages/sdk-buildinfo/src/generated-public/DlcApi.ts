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
import { RetrieveBaseGameResponseArray } from '../generated-definitions/RetrieveBaseGameResponseArray.js'
import { RetrieveDependencyCompatibilityResponse } from '../generated-definitions/RetrieveDependencyCompatibilityResponse.js'
import { RetrieveDependencyLinkResponse } from '../generated-definitions/RetrieveDependencyLinkResponse.js'
import { RetrieveLatestDlcResponseArray } from '../generated-definitions/RetrieveLatestDlcResponseArray.js'
import { Dlc$ } from './endpoints/Dlc$.js'


export function DlcApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to retrieve DLC versions against the game version. 
   */
  async function getLink_ByBuildId(buildId:string): Promise<AxiosResponse<RetrieveDependencyLinkResponse>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLink_ByBuildId(buildId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to retrieve compatibility of specific DLC versions against the game version. 
   */
  async function getCompatibility_ByBuildId(buildId:string): Promise<AxiosResponse<RetrieveDependencyCompatibilityResponse>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCompatibility_ByBuildId(buildId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve the list of DLC available on specific game. Use game&#39;s appId to query. 
   */
  async function getDlcLatestByGameAppId_ByAppId(appId:string): Promise<AxiosResponse<RetrieveLatestDlcResponseArray>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlcLatestByGameAppId_ByAppId(appId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve the list of DLC available on specific game. Use DLC&#39;s appId to query. 
   */
  async function getAppLatestByDlcAppId_ByDlcAppId(dlcAppId:string): Promise<AxiosResponse<RetrieveBaseGameResponseArray>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAppLatestByDlcAppId_ByDlcAppId(dlcAppId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getLink_ByBuildId,getCompatibility_ByBuildId,getDlcLatestByGameAppId_ByAppId,getAppLatestByDlcAppId_ByDlcAppId,
  }
}
  