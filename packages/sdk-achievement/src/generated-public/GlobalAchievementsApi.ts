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
import { PaginatedContributorResponse } from '../generated-definitions/PaginatedContributorResponse.js'
import { PaginatedGlobalAchievementResponse } from '../generated-definitions/PaginatedGlobalAchievementResponse.js'
import { PaginatedUserContributionResponse } from '../generated-definitions/PaginatedUserContributionResponse.js'
import { GlobalAchievements$ } from './endpoints/GlobalAchievements$.js'


export function GlobalAchievementsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement status value mean: &lt;code&gt;status = 1 (in progress)&lt;/code&gt; and &lt;code&gt;status = 2 (unlocked)&lt;/code&gt;&lt;/p&gt; 
   */
  async function getGlobalAchievements( queryParams?: {achievementCodes?: string | null, limit?: number, offset?: number, sortBy?: string | null, status?: string | null, tags?: string[]}): Promise<AxiosResponse<PaginatedGlobalAchievementResponse>> {
    const $ = new GlobalAchievements$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalAchievements( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; 
   */
  async function getGlobalAchievements_ByUserId(userId:string,  queryParams?: {achievementCodes?: string | null, limit?: number, offset?: number, sortBy?: string | null, tags?: string[]}): Promise<AxiosResponse<PaginatedUserContributionResponse>> {
    const $ = new GlobalAchievements$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalAchievements_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; 
   */
  async function getContributorsGlobal_ByAchievementCode(achievementCode:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null}): Promise<AxiosResponse<PaginatedContributorResponse>> {
    const $ = new GlobalAchievements$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContributorsGlobal_ByAchievementCode(achievementCode,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;NAMESPACE:{namespace}:USER:{userId}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; &lt;p&gt;Note:&lt;/p&gt; &lt;p&gt; Global achievement should be unlocked to claim the reward. Only contributor of global achievement are eligible for rewards 
   */
  async function fetchClaimGlobal_ByUserId_ByAchievementCode(userId:string, achievementCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new GlobalAchievements$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchClaimGlobal_ByUserId_ByAchievementCode(userId, achievementCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getGlobalAchievements,getGlobalAchievements_ByUserId,getContributorsGlobal_ByAchievementCode,fetchClaimGlobal_ByUserId_ByAchievementCode,
  }
}
  