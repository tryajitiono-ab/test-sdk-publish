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
import { DlcConfigRewardShortInfo } from '../generated-definitions/DlcConfigRewardShortInfo.js'
import { EpicGamesDlcSyncRequest } from '../generated-definitions/EpicGamesDlcSyncRequest.js'
import { PlayStationDlcSyncMultiServiceLabelsRequest } from '../generated-definitions/PlayStationDlcSyncMultiServiceLabelsRequest.js'
import { PlayStationDlcSyncRequest } from '../generated-definitions/PlayStationDlcSyncRequest.js'
import { SimpleUserDlcRewardContentsResponse } from '../generated-definitions/SimpleUserDlcRewardContentsResponse.js'
import { SteamDlcSyncRequest } from '../generated-definitions/SteamDlcSyncRequest.js'
import { XblDlcSyncRequest } from '../generated-definitions/XblDlcSyncRequest.js'
import { Dlc$ } from './endpoints/Dlc$.js'


export function DlcApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get user dlc reward contents. If includeAllNamespaces is false, will only return the dlc synced from the current namespace&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user dlc&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getUsersMeDlcContent( queryParams: {type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX', includeAllNamespaces?: boolean | null}): Promise<AxiosResponse<SimpleUserDlcRewardContentsResponse>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeDlcContent( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get dlc reward simple map, only return the sku of durable item reward. 
   */
  async function getDlcRewardsDurableMap( queryParams: {dlcType: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'}): Promise<AxiosResponse<DlcConfigRewardShortInfo>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlcRewardsDurableMap( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Synchronize with dlc entitlements in PSN Store.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateDlcPsnSync_ByUserId(userId:string, data: PlayStationDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcPsnSync_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sync Xbox inventory&#39;s dlc items 
   */
  async function updateDlcXblSync_ByUserId(userId:string, data: XblDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcXblSync_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sync steam dlc 
   */
  async function updateDlcSteamSync_ByUserId(userId:string, data: SteamDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcSteamSync_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sync oculus dlc 
   */
  async function updateDlcOculuSync_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcOculuSync_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Sync epic games dlc items 
   */
  async function updateDlcEpicgameSync_ByUserId(userId:string, data: EpicGamesDlcSyncRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcEpicgameSync_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Synchronize with dlc entitlements in PSN Store with multiple service labels.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: result of synchronization&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateDlcPsnSyncMultiServiceLabel_ByUserId(userId:string, data: PlayStationDlcSyncMultiServiceLabelsRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Dlc$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDlcPsnSyncMultiServiceLabel_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getUsersMeDlcContent,getDlcRewardsDurableMap,updateDlcPsnSync_ByUserId,updateDlcXblSync_ByUserId,updateDlcSteamSync_ByUserId,updateDlcOculuSync_ByUserId,updateDlcEpicgameSync_ByUserId,updateDlcPsnSyncMultiServiceLabel_ByUserId,
  }
}
  