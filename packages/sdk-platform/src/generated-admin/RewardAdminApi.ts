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
import { ConditionMatchResult } from '../generated-definitions/ConditionMatchResult.js'
import { DeleteRewardConditionRequest } from '../generated-definitions/DeleteRewardConditionRequest.js'
import { EventPayload } from '../generated-definitions/EventPayload.js'
import { RewardCreate } from '../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../generated-definitions/RewardInfo.js'
import { RewardPagingSlicedResult } from '../generated-definitions/RewardPagingSlicedResult.js'
import { RewardUpdate } from '../generated-definitions/RewardUpdate.js'
import { RewardAdmin$ } from './endpoints/RewardAdmin$.js'


export function RewardAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to create a reward.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward data&lt;/li&gt;&lt;li&gt;&lt;i&gt;Acceptable values for rewardItem&#39;s identityType are&lt;/i&gt;: ITEM_ID or ITEM_SKU&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createReward(data: RewardCreate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReward(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Export reward configurations for a given namespace into file. At current, only JSON file is supported. 
   */
  async function getRewardsExport(): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewardsExport()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Import reward configurations for a given namespace from file. At current, only JSON file is supported. 
   */
  async function createRewardImport(data: {file?: File}, queryParams: {replaceExisting: boolean | null}): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRewardImport(data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to delete a reward by reward Id. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the deleted reward data&lt;/li&gt;&lt;/ul&gt; 
   */
  async function deleteReward_ByRewardId(rewardId:string): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReward_ByRewardId(rewardId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to get reward by reward Id.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getReward_ByRewardId(rewardId:string): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReward_ByRewardId(rewardId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to update a reward.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward instance&lt;/li&gt;&lt;li&gt;&lt;i&gt;Acceptable values for rewardItem&#39;s identityType are&lt;/i&gt;: ITEM_ID or ITEM_SKU&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateReward_ByRewardId(rewardId:string, data: RewardUpdate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateReward_ByRewardId(rewardId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to query rewards by criteria.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getRewardsByCriteria( queryParams?: {eventTopic?: string | null, limit?: number, offset?: number, sortBy?: string[]}): Promise<AxiosResponse<RewardPagingSlicedResult>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewardsByCriteria( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: match result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateMatch_ByRewardId(rewardId:string, data: EventPayload): Promise<AxiosResponse<ConditionMatchResult>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMatch_ByRewardId(rewardId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[TEST FACILITY ONLY] Forbidden in live environment. &lt;/b&gt; This API is used to delete a reward condition record by reward Id and condition Name (optional). &lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: 204 No Content &lt;/li&gt;&lt;/ul&gt; 
   */
  async function deleteRecord_ByRewardId(rewardId:string, data: DeleteRewardConditionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRecord_ByRewardId(rewardId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createReward,getRewardsExport,createRewardImport,deleteReward_ByRewardId,getReward_ByRewardId,updateReward_ByRewardId,getRewardsByCriteria,updateMatch_ByRewardId,deleteRecord_ByRewardId,
  }
}
  