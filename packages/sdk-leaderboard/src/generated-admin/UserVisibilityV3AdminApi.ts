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
import { GetHiddenUserResponse } from '../generated-definitions/GetHiddenUserResponse.js'
import { GetUserVisibilityResponse } from '../generated-definitions/GetUserVisibilityResponse.js'
import { SetUserVisibilityRequest } from '../generated-definitions/SetUserVisibilityRequest.js'
import { UserVisibilityV3Admin$ } from './endpoints/UserVisibilityV3Admin$.js'


export function UserVisibilityV3AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry 
   */
  async function updateVisibility_ByUserId_v3(userId:string, data: SetUserVisibilityRequest): Promise<AxiosResponse<GetUserVisibilityResponse>> {
    const $ = new UserVisibilityV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVisibility_ByUserId_v3(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Return hidden users on a leaderboard 
   */
  async function getUsersHidden_ByLeaderboardCode_v3(leaderboardCode:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<GetHiddenUserResponse>> {
    const $ = new UserVisibilityV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersHidden_ByLeaderboardCode_v3(leaderboardCode,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry 
   */
  async function getVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string): Promise<AxiosResponse<GetUserVisibilityResponse>> {
    const $ = new UserVisibilityV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode, userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * User with false visibility status will have &lt;b&gt;hidden&lt;/b&gt; attribute set to true on it&#39;s leaderboard entry 
   */
  async function updateVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode:string, userId:string, data: SetUserVisibilityRequest): Promise<AxiosResponse<GetUserVisibilityResponse>> {
    const $ = new UserVisibilityV3Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVisibility_ByLeaderboardCode_ByUserId_v3(leaderboardCode, userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    updateVisibility_ByUserId_v3,getUsersHidden_ByLeaderboardCode_v3,getVisibility_ByLeaderboardCode_ByUserId_v3,updateVisibility_ByLeaderboardCode_ByUserId_v3,
  }
}
  