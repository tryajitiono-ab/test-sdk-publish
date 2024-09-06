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
import { XRayAcquiringDsQueryResponse } from '../generated-definitions/XRayAcquiringDsQueryResponse.js'
import { XRayAcquiringDsWaitTimeQueryResponse } from '../generated-definitions/XRayAcquiringDsWaitTimeQueryResponse.js'
import { XRayBulkTicketObservabilityRequest } from '../generated-definitions/XRayBulkTicketObservabilityRequest.js'
import { XRayBulkTicketObservabilityResponse } from '../generated-definitions/XRayBulkTicketObservabilityResponse.js'
import { XRayCanceledMatchmakingTicketQueryResponse } from '../generated-definitions/XRayCanceledMatchmakingTicketQueryResponse.js'
import { XRayCreatedMatchmakingTicketQueryResponse } from '../generated-definitions/XRayCreatedMatchmakingTicketQueryResponse.js'
import { XRayExpiredMatchmakingTicketQueryResponse } from '../generated-definitions/XRayExpiredMatchmakingTicketQueryResponse.js'
import { XRayMatchHistorQueryResponse } from '../generated-definitions/XRayMatchHistorQueryResponse.js'
import { XRayMatchLengthDurationQueryResponse } from '../generated-definitions/XRayMatchLengthDurationQueryResponse.js'
import { XRayMatchMatchmakingQueryResponse } from '../generated-definitions/XRayMatchMatchmakingQueryResponse.js'
import { XRayMatchMatchmakingTicketQueryResponse } from '../generated-definitions/XRayMatchMatchmakingTicketQueryResponse.js'
import { XRayMatchPoolPodTickMatchResponse } from '../generated-definitions/XRayMatchPoolPodTickMatchResponse.js'
import { XRayMatchPoolPodTickQueryResponse } from '../generated-definitions/XRayMatchPoolPodTickQueryResponse.js'
import { XRayMatchPoolPodTickTicketResponse } from '../generated-definitions/XRayMatchPoolPodTickTicketResponse.js'
import { XRayMatchPoolQueryResponse } from '../generated-definitions/XRayMatchPoolQueryResponse.js'
import { XRayMatchTicketHistoryQueryResponse } from '../generated-definitions/XRayMatchTicketHistoryQueryResponse.js'
import { XRayMatchesQueryResponse } from '../generated-definitions/XRayMatchesQueryResponse.js'
import { XRayTicketObservabilityRequest } from '../generated-definitions/XRayTicketObservabilityRequest.js'
import { XRayTicketObservabilityResponse } from '../generated-definitions/XRayTicketObservabilityResponse.js'
import { XRayTicketQueryResponse } from '../generated-definitions/XRayTicketQueryResponse.js'
import { XRayTotalActiveSessionQueryResponse } from '../generated-definitions/XRayTotalActiveSessionQueryResponse.js'
import { XRayTotalPlayerPersessionAvgQueryResponse } from '../generated-definitions/XRayTotalPlayerPersessionAvgQueryResponse.js'
import { XRayAdmin$ } from './endpoints/XRayAdmin$.js'

export function XRayAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  /**
   * Create ticket observability request Request body details (all attributes are optional): Timestamp : timestamp when calling this endpoint Action : support one of the following value: 1. &#34;matchFound&#34; 2. &#34;matchNotFound&#34; 3. &#34;flexed&#34; PartyID : ticket Party ID MatchID : match ID will be filled only when match found Namespace : ticket current namespace GameMode : ticket current matchpool ActiveAllianceRule : current active alliance ruleset ActiveMatchingRule : current active matching ruleset Function : name of the function that called the endpoint Iteration : total iteration before match found TimeToMatchSec : time to match (in seconds) will be filled only when match found UnmatchReason : reason when unable to find match RemainingTickets : remaining ticket when unable to find match RemainingPlayersPerTicket : remaining players when unable to find match UnbackfillReason : reason when unable to backfill IsBackfillMatch : flag to distinguish between new match and backfill match IsRuleSetFlexed : flag if ruleset is getting flexed TickID : tick id for the matchmaking tick SessionTickID : session tick id for differentiate session when doing matches
   */
  async function createXrayTicket_v2(data: XRayTicketObservabilityRequest): Promise<AxiosResponse<XRayTicketObservabilityResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createXrayTicket_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Create bulk ticket observability request Request body details (all attributes are optional): Timestamp : timestamp when calling this endpoint Action : support one of the following value: 1. &#34;matchFound&#34; 2. &#34;matchNotFound&#34; 3. &#34;flexed&#34; PartyID : ticket Party ID MatchID : match ID will be filled only when match found Namespace : ticket current namespace GameMode : ticket current matchpool ActiveAllianceRule : current active alliance ruleset ActiveMatchingRule : current active matching ruleset Function : name of the function that called the endpoint Iteration : total iteration before match found TimeToMatchSec : time to match (in seconds) will be filled only when match found UnmatchReason : reason when unable to find match RemainingTickets : remaining ticket when unable to find match RemainingPlayersPerTicket : remaining players when unable to find match UnbackfillReason : reason when unable to backfill IsBackfillMatch : flag to distinguish between new match and backfill match IsRuleSetFlexed : flag if ruleset is getting flexed TickID : tick id for the matchmaking tick SessionTickID : session tick id for differentiate session when doing matches
   */
  async function createXrayTicketBulk_v2(
    data: XRayBulkTicketObservabilityRequest
  ): Promise<AxiosResponse<XRayBulkTicketObservabilityResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createXrayTicketBulk_v2(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray timeline by ticketID
   */
  async function getXrayTicket_ByTicketId_v2(
    ticketId: string,
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  ): Promise<AxiosResponse<XRayTicketQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayTicket_ByTicketId_v2(ticketId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total match.
   */
  async function getXrayMetricsTotalMatch_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayMatchMatchmakingQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalMatch_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total success and failed claim DS.
   */
  async function getXrayMetricsAcquiringDs_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayAcquiringDsQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsAcquiringDs_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray match pool. query can using matchpool array with separate &#34;,&#34;
   */
  async function getXrayMatchPool_ByPoolName_v2(
    poolName: string[],
    queryParams: { endDate: string | null; startDate: string | null }
  ): Promise<AxiosResponse<XRayMatchPoolQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMatchPool_ByPoolName_v2(poolName, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray timeline by userID or ticketID
   */
  async function getTicketsXray_ByUserId_v2(
    userId: string,
    queryParams: { endDate: string | null; startDate: string | null; limit?: number; offset?: number }
  ): Promise<AxiosResponse<XRayTicketQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicketsXray_ByUserId_v2(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray timeline by matchID.
   */
  async function getTicketsXray_ByMatchId_v2(matchId: string): Promise<AxiosResponse<XRayMatchesQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicketsXray_ByMatchId_v2(matchId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total ticket match.
   */
  async function getXrayMetricsTotalTicketMatch_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayMatchMatchmakingTicketQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketMatch_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray match histories.
   */
  async function getHistoriesXray_ByMatchId_v2(
    matchId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<XRayMatchHistorQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistoriesXray_ByMatchId_v2(matchId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total active session.
   */
  async function getXrayMetricsTotalActiveSession_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
    region?: string | null
  }): Promise<AxiosResponse<XRayTotalActiveSessionQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalActiveSession_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total ticket created.
   */
  async function getXrayMetricsTotalTicketCreated_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayCreatedMatchmakingTicketQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketCreated_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total ticket expired.
   */
  async function getXrayMetricsTotalTicketExpired_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayExpiredMatchmakingTicketQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketExpired_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total ticket canceled.
   */
  async function getXrayMetricsTotalTicketCanceled_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayCanceledMatchmakingTicketQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalTicketCanceled_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query match length duration avg. time in seconds
   */
  async function getXrayMetricsMatchLengthDurationAvg_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayMatchLengthDurationQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsMatchLengthDurationAvg_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query match length duration p99. time in seconds
   */
  async function getXrayMetricsMatchLengthDurationP99_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayMatchLengthDurationQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsMatchLengthDurationP99_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray match ticket histories.
   */
  async function getTicketHistoriesXray_ByMatchId_v2(matchId: string): Promise<AxiosResponse<XRayMatchTicketHistoryQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicketHistoriesXray_ByMatchId_v2(matchId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query acquiring ds wait time average. time in seconds
   */
  async function getXrayMetricsAcquiringDsWaitTimeAvg_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayAcquiringDsWaitTimeQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsAcquiringDsWaitTimeAvg_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query total player persession average.
   */
  async function getXrayMetricsTotalPlayerPersessionAvg_v2(queryParams: {
    endDate: string | null
    startDate: string | null
    matchPool?: string[]
  }): Promise<AxiosResponse<XRayTotalPlayerPersessionAvgQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getXrayMetricsTotalPlayerPersessionAvg_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray match pool ticks.
   */
  async function getTicksXray_ByPoolName_ByPodName_v2(
    poolName: string,
    podName: string,
    queryParams: { endDate: string | null; startDate: string | null; all?: boolean | null; limit?: number; offset?: number }
  ): Promise<AxiosResponse<XRayMatchPoolPodTickQueryResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicksXray_ByPoolName_ByPodName_v2(poolName, podName, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray match pool tick matches by tick id.
   */
  async function getMatchesXray_ByPoolName_ByPodName_ByTickId_v2(
    poolName: string,
    podName: string,
    tickId: string
  ): Promise<AxiosResponse<XRayMatchPoolPodTickMatchResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchesXray_ByPoolName_ByPodName_ByTickId_v2(poolName, podName, tickId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query xray match pool tick tickets detail by tick id.
   */
  async function getTicketsXray_ByPoolName_ByPodName_ByTickId_v2(
    poolName: string,
    podName: string,
    tickId: string
  ): Promise<AxiosResponse<XRayMatchPoolPodTickTicketResponse>> {
    const $ = new XRayAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicketsXray_ByPoolName_ByPodName_ByTickId_v2(poolName, podName, tickId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    createXrayTicket_v2,
    createXrayTicketBulk_v2,
    getXrayTicket_ByTicketId_v2,
    getXrayMetricsTotalMatch_v2,
    getXrayMetricsAcquiringDs_v2,
    getXrayMatchPool_ByPoolName_v2,
    getTicketsXray_ByUserId_v2,
    getTicketsXray_ByMatchId_v2,
    getXrayMetricsTotalTicketMatch_v2,
    getHistoriesXray_ByMatchId_v2,
    getXrayMetricsTotalActiveSession_v2,
    getXrayMetricsTotalTicketCreated_v2,
    getXrayMetricsTotalTicketExpired_v2,
    getXrayMetricsTotalTicketCanceled_v2,
    getXrayMetricsMatchLengthDurationAvg_v2,
    getXrayMetricsMatchLengthDurationP99_v2,
    getTicketHistoriesXray_ByMatchId_v2,
    getXrayMetricsAcquiringDsWaitTimeAvg_v2,
    getXrayMetricsTotalPlayerPersessionAvg_v2,
    getTicksXray_ByPoolName_ByPodName_v2,
    getMatchesXray_ByPoolName_ByPodName_ByTickId_v2,
    getTicketsXray_ByPoolName_ByPodName_ByTickId_v2
  }
}
