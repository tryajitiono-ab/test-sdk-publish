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
import { PlayerAttributesResponseBody } from '../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayerAttributesResponseBodyArray } from '../generated-definitions/PlayerAttributesResponseBodyArray.js'
import { PlayerAdmin$ } from './endpoints/PlayerAdmin$.js'

export function PlayerAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Admin get attributes of players. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  async function getUsersAttributes(queryParams?: { users?: string | null }): Promise<AxiosResponse<PlayerAttributesResponseBodyArray>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersAttributes(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Admin get attributes of a player. Field descriptions: - userID : user who owns the attributes. - crossplayEnabled : set to true if the player wants to enable crossplay to their session (default: false). - platforms : list of the player&#39;s 3rd party platform account information. - name : platform name. supported platforms: STEAM, XBOX, PSN - userID : platform userID - data : other data that the player wants to store. - PSN_PUSH_CONTEXT_ID: if provided, session will refer to this when performing session sync with PSN, otherwise will populate from session attributes - currentPlatform : latest user game platform. - roles : user role for matchmaking role base support.
   */
  async function getAttributes_ByUserId(userId: string): Promise<AxiosResponse<PlayerAttributesResponseBody>> {
    const $ = new PlayerAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAttributes_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getUsersAttributes,
    getAttributes_ByUserId
  }
}
