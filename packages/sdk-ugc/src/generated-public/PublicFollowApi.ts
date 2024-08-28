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
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedCreatorOverviewResponse } from '../generated-definitions/PaginatedCreatorOverviewResponse.js'
import { UserFollowRequest } from '../generated-definitions/UserFollowRequest.js'
import { UserFollowResponse } from '../generated-definitions/UserFollowResponse.js'
import { PublicFollow$ } from './endpoints/PublicFollow$.js'


export function PublicFollowApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Requires valid user token 
   */
  async function getUsersFollowed( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<PaginatedCreatorOverviewResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersFollowed( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Requires valid user token 
   */
  async function getContentsFollowed( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContentsFollowed( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Requires valid user token 
   */
  async function updateFollow_ByUserId(userId:string, data: UserFollowRequest): Promise<AxiosResponse<UserFollowResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFollow_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  async function getFollowers_ByUserId(userId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<PaginatedCreatorOverviewResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFollowers_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  async function getFollowing_ByUserId(userId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<PaginatedCreatorOverviewResponse>> {
    const $ = new PublicFollow$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFollowing_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getUsersFollowed,getContentsFollowed,updateFollow_ByUserId,getFollowers_ByUserId,getFollowing_ByUserId,
  }
}
  