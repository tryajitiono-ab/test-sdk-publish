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
import { ArchiveLeaderboardSignedUrlResponseArray } from '../generated-definitions/ArchiveLeaderboardSignedUrlResponseArray.js'
import { GetLeaderboardRankingResp } from '../generated-definitions/GetLeaderboardRankingResp.js'
import { GetPublicLeaderboardRankingResponse } from '../generated-definitions/GetPublicLeaderboardRankingResponse.js'
import { UserRankingResponse } from '../generated-definitions/UserRankingResponse.js'
import { LeaderboardData$ } from './endpoints/LeaderboardData$.js'

export function LeaderboardDataApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;p&gt;Get rankings in current week leaderboard.&lt;/p&gt;
   */
  async function getWeek_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getWeek_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * &lt;p&gt;Get rankings in current month leaderboard.&lt;/p&gt;
   */
  async function getMonth_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMonth_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * &lt;p&gt;Get rankings in today leaderboard.&lt;/p&gt;
   */
  async function getToday_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getToday_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * &lt;p&gt;Get rankings in current season leaderboard.&lt;/p&gt;
   */
  async function getSeason_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number; previousVersion?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSeason_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get rankings in an all time leaderboard.
   */
  async function getAlltime_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetLeaderboardRankingResp>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAlltime_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get rankings in an all time leaderboard.
   */
  async function getAlltime_ByLeaderboardCode_v2(
    leaderboardCode: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<GetPublicLeaderboardRankingResponse>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAlltime_ByLeaderboardCode_v2(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get signed url in an all time leaderboard that archived. NOTE: This will be a bulk endpoint to get sign url
   */
  async function getArchived_ByLeaderboardCode(
    leaderboardCode: string,
    queryParams: { leaderboardCodes: string | null; slug?: string | null }
  ): Promise<AxiosResponse<ArchiveLeaderboardSignedUrlResponseArray>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getArchived_ByLeaderboardCode(leaderboardCode, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete user ranking Remove entry with provided userId from leaderboard. If leaderboard with given leaderboard code not found, it will return http status not found (404). If the leaderboard is found and no entry found in it, it will still return success (204)
   */
  async function deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode: string, userId: string): Promise<AxiosResponse<unknown>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * &lt;p&gt;Get user ranking in leaderboard&lt;/p&gt;
   */
  async function getUser_ByLeaderboardCode_ByUserId(
    leaderboardCode: string,
    userId: string,
    queryParams?: { previousVersion?: number }
  ): Promise<AxiosResponse<UserRankingResponse>> {
    const $ = new LeaderboardData$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUser_ByLeaderboardCode_ByUserId(leaderboardCode, userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getWeek_ByLeaderboardCode,
    getMonth_ByLeaderboardCode,
    getToday_ByLeaderboardCode,
    getSeason_ByLeaderboardCode,
    getAlltime_ByLeaderboardCode,
    getAlltime_ByLeaderboardCode_v2,
    getArchived_ByLeaderboardCode,
    deleteUser_ByLeaderboardCode_ByUserId,
    getUser_ByLeaderboardCode_ByUserId
  }
}
