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
import { Attribute } from '../generated-definitions/Attribute.js'
import { GameProfileHeaderArray } from '../generated-definitions/GameProfileHeaderArray.js'
import { GameProfileInfo } from '../generated-definitions/GameProfileInfo.js'
import { GameProfileRequest } from '../generated-definitions/GameProfileRequest.js'
import { UserGameProfilesArray } from '../generated-definitions/UserGameProfilesArray.js'
import { GameProfile$ } from './endpoints/GameProfile$.js'


export function GameProfileApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Returns all profiles for specified users.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/ul&gt; 
   */
  async function getProfiles( queryParams: {userIds: string[]}): Promise<AxiosResponse<UserGameProfilesArray>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfiles( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Returns all profiles&#39; header for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of profiles&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getProfiles_ByUserId(userId:string): Promise<AxiosResponse<GameProfileHeaderArray>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfiles_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create new profile for user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/li&gt;: created game profile&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createProfile_ByUserId(userId:string, data: GameProfileRequest): Promise<AxiosResponse<unknown>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfile_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Deletes game profile.&lt;br&gt; 
   */
  async function deleteProfile_ByUserId_ByProfileId(userId:string, profileId:string): Promise<AxiosResponse<unknown>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteProfile_ByUserId_ByProfileId(userId, profileId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Returns profile for a user.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: game profile info&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getProfile_ByUserId_ByProfileId(userId:string, profileId:string): Promise<AxiosResponse<GameProfileInfo>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfile_ByUserId_ByProfileId(userId, profileId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Updates user game profile, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated game profile&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateProfile_ByUserId_ByProfileId(userId:string, profileId:string, data: GameProfileRequest): Promise<AxiosResponse<GameProfileInfo>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfile_ByUserId_ByProfileId(userId, profileId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Returns game profile attribute.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: attribute info&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getAttribute_ByUserId_ByProfileId_ByAttributeName(userId:string, profileId:string, attributeName:string): Promise<AxiosResponse<Attribute>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAttribute_ByUserId_ByProfileId_ByAttributeName(userId, profileId, attributeName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Updates game profile attribute, returns updated profile.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated attribute&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateAttribute_ByUserId_ByProfileId_ByAttributeName(userId:string, profileId:string, attributeName:string, data: Attribute): Promise<AxiosResponse<GameProfileInfo>> {
    const $ = new GameProfile$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAttribute_ByUserId_ByProfileId_ByAttributeName(userId, profileId, attributeName, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getProfiles,getProfiles_ByUserId,createProfile_ByUserId,deleteProfile_ByUserId_ByProfileId,getProfile_ByUserId_ByProfileId,updateProfile_ByUserId_ByProfileId,getAttribute_ByUserId_ByProfileId_ByAttributeName,updateAttribute_ByUserId_ByProfileId_ByAttributeName,
  }
}
  