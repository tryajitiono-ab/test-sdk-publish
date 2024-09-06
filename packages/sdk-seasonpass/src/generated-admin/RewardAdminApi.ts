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
import { RewardCreate } from '../generated-definitions/RewardCreate.js'
import { RewardInfo } from '../generated-definitions/RewardInfo.js'
import { RewardInfoArray } from '../generated-definitions/RewardInfoArray.js'
import { RewardUpdate } from '../generated-definitions/RewardUpdate.js'
import { RewardAdmin$ } from './endpoints/RewardAdmin$.js'

export function RewardAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to query rewards for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: the list of rewards&lt;/li&gt;&lt;/ul&gt;
   */
  async function getRewards_BySeasonId(seasonId: string, queryParams?: { q?: string | null }): Promise<AxiosResponse<RewardInfoArray>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRewards_BySeasonId(seasonId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to create a reward for a draft season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created reward&lt;/li&gt;&lt;/ul&gt;
   */
  async function createReward_BySeasonId(seasonId: string, data: RewardCreate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReward_BySeasonId(seasonId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to delete a reward permanently, only draft season reward can be deleted. &lt;p&gt;Other detail info: &lt;ul&gt;&lt;/ul&gt;
   */
  async function deleteReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<AxiosResponse<unknown>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteReward_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to get a reward for a season.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: reward data&lt;/li&gt;&lt;/ul&gt;
   */
  async function getReward_BySeasonId_ByCode(seasonId: string, code: string): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReward_BySeasonId_ByCode(seasonId, code)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This API is used to update a reward. Only draft season reward can be updated.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated reward&lt;/li&gt;&lt;/ul&gt;
   */
  async function patchReward_BySeasonId_ByCode(seasonId: string, code: string, data: RewardUpdate): Promise<AxiosResponse<RewardInfo>> {
    const $ = new RewardAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchReward_BySeasonId_ByCode(seasonId, code, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getRewards_BySeasonId,
    createReward_BySeasonId,
    deleteReward_BySeasonId_ByCode,
    getReward_BySeasonId_ByCode,
    patchReward_BySeasonId_ByCode
  }
}
