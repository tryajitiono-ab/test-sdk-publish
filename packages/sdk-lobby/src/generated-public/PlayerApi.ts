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
import { BlockPlayerRequest } from '../generated-definitions/BlockPlayerRequest.js'
import { GetAllPlayerBlockedByUsersResponse } from '../generated-definitions/GetAllPlayerBlockedByUsersResponse.js'
import { GetAllPlayerBlockedUsersResponse } from '../generated-definitions/GetAllPlayerBlockedUsersResponse.js'
import { UnblockPlayerRequest } from '../generated-definitions/UnblockPlayerRequest.js'
import { Player$ } from './endpoints/Player$.js'


export function PlayerApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;add blocked players in a namespace based on user id &lt;br/&gt; 
   */
  async function createPlayerUserMeBlock(data: BlockPlayerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Player$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlayerUserMeBlock(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load blocked players in a namespace based on user id &lt;br/&gt; Action Code: 50101 
   */
  async function getPlayerUsersMeBlocked(): Promise<AxiosResponse<GetAllPlayerBlockedUsersResponse>> {
    const $ = new Player$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlayerUsersMeBlocked()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authorization &lt;br/&gt; unblock player in a namespace based on user id &lt;br/&gt; 
   */
  async function createPlayerUserMeUnblock(data: UnblockPlayerRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Player$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlayerUserMeUnblock(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load get players who blocked this player in a namespace based on user id &lt;br/&gt; Action Code: 50101 
   */
  async function getPlayerUsersMeBlockedBy(): Promise<AxiosResponse<GetAllPlayerBlockedByUsersResponse>> {
    const $ = new Player$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlayerUsersMeBlockedBy()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createPlayerUserMeBlock,getPlayerUsersMeBlocked,createPlayerUserMeUnblock,getPlayerUsersMeBlockedBy,
  }
}
  