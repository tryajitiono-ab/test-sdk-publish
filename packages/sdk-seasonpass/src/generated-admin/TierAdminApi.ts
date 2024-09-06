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
import { Tier } from '../generated-definitions/Tier.js'
import { TierArray } from '../generated-definitions/TierArray.js'
import { TierCreate } from '../generated-definitions/TierCreate.js'
import { TierInput } from '../generated-definitions/TierInput.js'
import { TierPagingSlicedResult } from '../generated-definitions/TierPagingSlicedResult.js'
import { TierReorder } from '../generated-definitions/TierReorder.js'
import { UserExpGrant } from '../generated-definitions/UserExpGrant.js'
import { UserSeasonSummary } from '../generated-definitions/UserSeasonSummary.js'
import { UserTierGrant } from '../generated-definitions/UserTierGrant.js'
import { TierAdmin$ } from './endpoints/TierAdmin$.js'

export function TierAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to query paginated tiers for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of passes&lt;/li&gt;&lt;/ul&gt;
   */
  async function getTiers_BySeasonId(
    seasonId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<TierPagingSlicedResult>> {
    const $ = new TierAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTiers_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to create tier for a draft season, can create multiple tiers at same time.&lt;p&gt;
   */
  async function createTier_BySeasonId(seasonId: string, data: TierCreate): Promise<AxiosResponse<TierArray>> {
    const $ = new TierAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTier_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to delete a tier permanently, only draft season pass can be deleted. &lt;p&gt;
   */
  async function deleteTier_BySeasonId_ById(seasonId: string, id: string): Promise<AxiosResponse<unknown>> {
    const $ = new TierAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTier_BySeasonId_ById(seasonId, id)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to update a tier. Only draft season pass can be updated.&lt;p&gt;
   */
  async function updateTier_BySeasonId_ById(seasonId: string, id: string, data: TierInput): Promise<AxiosResponse<Tier>> {
    const $ = new TierAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateTier_BySeasonId_ById(seasonId, id, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to grant exp to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentExp_ByUserId(userId: string, data: UserExpGrant): Promise<AxiosResponse<UserSeasonSummary>> {
    const $ = new TierAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentExp_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to grant tier to user, it will auto enroll if there&#39;s no user season but active published season exist, season only located in non-publisher namespace, otherwise ignore.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: user season data&lt;/li&gt;&lt;/ul&gt;
   */
  async function createSeasonCurrentTier_ByUserId(userId: string, data: UserTierGrant): Promise<AxiosResponse<UserSeasonSummary>> {
    const $ = new TierAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createSeasonCurrentTier_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to reorder a tier. Only draft season pass can be updated.&lt;p&gt;
   */
  async function updateReorder_BySeasonId_ById(seasonId: string, id: string, data: TierReorder): Promise<AxiosResponse<Tier>> {
    const $ = new TierAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateReorder_BySeasonId_ById(seasonId, id, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getTiers_BySeasonId,
    createTier_BySeasonId,
    deleteTier_BySeasonId_ById,
    updateTier_BySeasonId_ById,
    createSeasonCurrentExp_ByUserId,
    createSeasonCurrentTier_ByUserId,
    updateReorder_BySeasonId_ById
  }
}
