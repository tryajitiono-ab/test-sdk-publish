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
import { ChannelV1 } from '../generated-definitions/ChannelV1.js'
import { GetSessionHistoryDetailedResponseItemArray } from '../generated-definitions/GetSessionHistoryDetailedResponseItemArray.js'
import { GetSessionHistorySearchResponse } from '../generated-definitions/GetSessionHistorySearchResponse.js'
import { GetSessionHistorySearchResponseV2 } from '../generated-definitions/GetSessionHistorySearchResponseV2.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'
import { MatchAddUserIntoSessionRequest } from '../generated-definitions/MatchAddUserIntoSessionRequest.js'
import { MatchingPartyArray } from '../generated-definitions/MatchingPartyArray.js'
import { MatchmakingResultArray } from '../generated-definitions/MatchmakingResultArray.js'
import { StatResumeResponse } from '../generated-definitions/StatResumeResponse.js'
import { UpdateChannelRequest } from '../generated-definitions/UpdateChannelRequest.js'
import { MatchmakingAdmin$ } from './endpoints/MatchmakingAdmin$.js'


export function MatchmakingAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Export channels configuration to file. Action Code: 510114 
   */
  async function getChannelsExport(): Promise<AxiosResponse<unknown>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannelsExport()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Import channels configuration from file. It will merge with existing channels. Available import strategy: - leaveOut: if channel with same key exist, the existing will be used and imported one will be ignored (default) - replace: if channel with same key exist, the imported channel will be used and existing one will be removed Action Code: 510113 
   */
  async function updateChannelImport(data: {file?: File,strategy?: string | null}): Promise<AxiosResponse<ImportConfigResponse>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateChannelImport(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get all parties queueing in all channels. 
   */
  async function getChannelsAllParties(): Promise<AxiosResponse<unknown>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannelsAllParties()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Reads single channel based on namespace and channel name Action Code: 510112 
   */
  async function getChannel_ByChannelName(channelName:string): Promise<AxiosResponse<ChannelV1>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannel_ByChannelName(channelName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update channel based on namespace and channel name Action Code: 510111 
   */
  async function patchChannel_ByChannelName(channelName:string, data: UpdateChannelRequest): Promise<AxiosResponse<unknown>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchChannel_ByChannelName(channelName, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   *  &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Search sessions. 
   */
  async function getSessionsHistorySearch( queryParams: {limit: number, offset: number, channel?: string | null, deleted?: boolean | null, matchID?: string | null, partyID?: string | null, userID?: string | null}): Promise<AxiosResponse<GetSessionHistorySearchResponse>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSessionsHistorySearch( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/history/search [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Search sessions. Optimize the query by differentiating query with filter namespace only and filter with namespace &amp; other filter (partyID, userID, matchID). Query with filter namespace only will not group whole session data while query with filter namespace &amp; other filter will include session data. 
   */
  async function getSessionsHistorySearch_v2( queryParams: {limit: number, offset: number, channel?: string | null, deleted?: boolean | null, matchID?: string | null, partyID?: string | null, userID?: string | null}): Promise<AxiosResponse<GetSessionHistorySearchResponseV2>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSessionsHistorySearch_v2( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Bulk get sessions. 
   */
  async function getChannelsAllSessionsBulk( queryParams?: {matchIDs?: string | null}): Promise<AxiosResponse<MatchmakingResultArray>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannelsAllSessionsBulk( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Get a channel&#39;s stat data (mean, stddev, min, max) according to the stats collected from statistics service. &#39; 
   */
  async function getStats_ByChannelName(channelName:string): Promise<AxiosResponse<StatResumeResponse>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStats_ByChannelName(channelName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get all parties queueing in a channel. 
   */
  async function getParties_ByChannelName(channelName:string): Promise<AxiosResponse<MatchingPartyArray>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getParties_ByChannelName(channelName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get all sessions in a channel. if party_id value empty/null, field will not show in response body. 
   */
  async function getSessions_ByChannelName(channelName:string): Promise<AxiosResponse<MatchmakingResultArray>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSessions_ByChannelName(channelName, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   *  &lt;p&gt; &lt;h2&gt;The endpoint is going to be deprecated&lt;/h2&gt; &lt;/br&gt; &lt;strong&gt;Endpoint migration guide&lt;/strong&gt; &lt;ul&gt; &lt;li&gt;&lt;b&gt;Substitute endpoint: &lt;i&gt;/sessionbrowser/admin/namespaces/{namespace}/sessions/{sessionId}/history/detailed [GET]&lt;/i&gt;&lt;/b&gt;&lt;/li&gt; &lt;/ul&gt; &lt;/p&gt; Get session history detailed. if party_id value empty/null, field will not show in response body. 
   */
  async function getHistoryDetailed_ByMatchId(matchID:string): Promise<AxiosResponse<GetSessionHistoryDetailedResponseItemArray>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistoryDetailed_ByMatchId(matchID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a session in a channel. 
   */
  async function deleteSession_ByChannelName_ByMatchId(channelName:string, matchID:string): Promise<AxiosResponse<unknown>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSession_ByChannelName_ByMatchId(channelName, matchID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Add user into the session in a channel. 
   */
  async function createSession_ByChannelName_ByMatchId(channelName:string, matchID:string, data: MatchAddUserIntoSessionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSession_ByChannelName_ByMatchId(channelName, matchID, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a user from a session in the channel. 
   */
  async function deleteUser_ByChannelName_ByMatchId_ByUserId(channelName:string, matchID:string, userID:string): Promise<AxiosResponse<unknown>> {
    const $ = new MatchmakingAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByChannelName_ByMatchId_ByUserId(channelName, matchID, userID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getChannelsExport,updateChannelImport,getChannelsAllParties,getChannel_ByChannelName,patchChannel_ByChannelName,getSessionsHistorySearch,getSessionsHistorySearch_v2,getChannelsAllSessionsBulk,getStats_ByChannelName,getParties_ByChannelName,getSessions_ByChannelName,getHistoryDetailed_ByMatchId,deleteSession_ByChannelName_ByMatchId,createSession_ByChannelName_ByMatchId,deleteUser_ByChannelName_ByMatchId_ByUserId,
  }
}
  