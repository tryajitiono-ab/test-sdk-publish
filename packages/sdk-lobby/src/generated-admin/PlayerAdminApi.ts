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
import { GetAllPlayerBlockedByUsersResponse } from '../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { GetAllPlayerSessionAttributeResponse } from '../generated-definitions/GetAllPlayerSessionAttributeResponse.js'
import { GetBulkAllPlayerBlockedUsersRequest } from '../generated-definitions/GetBulkAllPlayerBlockedUsersRequest.js'
import { GetBulkAllPlayerBlockedUsersResponse } from '../generated-definitions/GetBulkAllPlayerBlockedUsersResponse.js'
import { GetLobbyCcuResponse } from '../generated-definitions/GetLobbyCcuResponse.js'
import { GetPlayerSessionAttributeResponse } from '../generated-definitions/GetPlayerSessionAttributeResponse.js'
import { ListBlockedPlayerRequest } from '../generated-definitions/ListBlockedPlayerRequest.js'
import { ListUnblockPlayerRequest } from '../generated-definitions/ListUnblockPlayerRequest.js'
import { SetPlayerSessionAttributeRequest } from '../generated-definitions/SetPlayerSessionAttributeRequest.js'
import { PlayerAdmin$ } from './endpoints/PlayerAdmin$.js'


export function PlayerAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get the number of players connected to the Lobby in the given namespace. 
   */
  async function getPlayerCcu(): Promise<AxiosResponse<GetLobbyCcuResponse>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlayerCcu()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get blocked players data by bulk user ids in a namespace. 
   */
  async function fetchPlayerUserBulkBlocked(data: GetBulkAllPlayerBlockedUsersRequest): Promise<AxiosResponse<GetBulkAllPlayerBlockedUsersResponse>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchPlayerUserBulkBlocked(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get blocked players data by user id in a namespace. 
   */
  async function getBlockedPlayer_ByUserId(userId:string): Promise<AxiosResponse<GetAllPlayerBlockedUsersResponse>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBlockedPlayer_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get all player&#39;s session attribute by user id in a namespace. 
   */
  async function getAttributesPlayer_ByUserId(userId:string): Promise<AxiosResponse<GetAllPlayerSessionAttributeResponse>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAttributesPlayer_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Set player&#39;s session attribute by user id in a namespace. 
   */
  async function updateAttributePlayer_ByUserId(userId:string, data: SetPlayerSessionAttributeRequest): Promise<AxiosResponse<unknown>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAttributePlayer_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Load get players who blocked this player in a namespace based on user id 
   */
  async function getBlockedByPlayer_ByUserId(userId:string): Promise<AxiosResponse<GetAllPlayerBlockedByUsersResponse>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBlockedByPlayer_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Bulk block player in a namespace by list of user id 
   */
  async function createBulkBlockPlayer_ByUserId(userId:string, data: ListBlockedPlayerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBulkBlockPlayer_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Bulk unblock player in a namespace by list of user id 
   */
  async function deleteBulkUnblockPlayer_ByUserId(userId:string, data: ListUnblockPlayerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBulkUnblockPlayer_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get player&#39;s specific session attribute by user id in a namespace. 
   */
  async function getAttributePlayer_ByUserId_ByAttribute(userId:string, attribute:string): Promise<AxiosResponse<GetPlayerSessionAttributeResponse>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAttributePlayer_ByUserId_ByAttribute(userId, attribute, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getPlayerCcu,fetchPlayerUserBulkBlocked,getBlockedPlayer_ByUserId,getAttributesPlayer_ByUserId,updateAttributePlayer_ByUserId,getBlockedByPlayer_ByUserId,createBulkBlockPlayer_ByUserId,deleteBulkUnblockPlayer_ByUserId,getAttributePlayer_ByUserId_ByAttribute,
  }
}
  