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
import { AddPlayerRequest } from '../generated-definitions/AddPlayerRequest.js'
import { AddPlayerResponse } from '../generated-definitions/AddPlayerResponse.js'
import { CreateSessionRequest } from '../generated-definitions/CreateSessionRequest.js'
import { JoinGameSessionRequest } from '../generated-definitions/JoinGameSessionRequest.js'
import { RecentPlayerQueryResponse } from '../generated-definitions/RecentPlayerQueryResponse.js'
import { SessionByUserIDsResponse } from '../generated-definitions/SessionByUserIDsResponse.js'
import { SessionQueryResponse } from '../generated-definitions/SessionQueryResponse.js'
import { SessionResponse } from '../generated-definitions/SessionResponse.js'
import { UpdateSessionRequest } from '../generated-definitions/UpdateSessionRequest.js'
import { UpdateSettingsRequest } from '../generated-definitions/UpdateSettingsRequest.js'
import { Session$ } from './endpoints/Session$.js'

export function SessionApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Query available game session
   */
  async function getGamesession(queryParams: {
    session_type: string | null
    game_mode?: string | null
    game_version?: string | null
    joinable?: string | null
    limit?: number
    match_exist?: string | null
    match_id?: string | null
    offset?: number
    server_status?: string | null
    user_id?: string | null
  }): Promise<AxiosResponse<SessionQueryResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This end point intended to be called directly by P2P game client host or by DSMC
   */
  async function createGamesession(data: CreateSessionRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGamesession(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query game sessions by comma separated user ids
   */
  async function getGamesessionBulk(queryParams: { user_ids: string | null }): Promise<AxiosResponse<SessionByUserIDsResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesessionBulk(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Query recent player by user ID
   */
  async function getRecentplayer_ByUserId(userID: string): Promise<AxiosResponse<RecentPlayerQueryResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRecentplayer_ByUserId(userID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete the session (p2p) by session ID
   */
  async function deleteGamesession_BySessionId(sessionID: string): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get the session by session ID
   */
  async function getGamesession_BySessionId(sessionID: string): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGamesession_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update game session, used to update the current player
   */
  async function updateGamesession_BySessionId(sessionID: string, data: UpdateSessionRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGamesession_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Join the specified session by session ID. Possible the game required a password to join
   */
  async function fetchJoin_BySessionId(sessionID: string, data: JoinGameSessionRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchJoin_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Add player to game session
   */
  async function updatePlayer_BySessionId(sessionID: string, data: AddPlayerRequest): Promise<AxiosResponse<AddPlayerResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlayer_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Only use for local DS entry, will error when calling non local DS entry
   */
  async function deleteLocald_BySessionId(sessionID: string): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteLocald_BySessionId(sessionID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update game session, used to update OtherSettings
   */
  async function updateSetting_BySessionId(sessionID: string, data: UpdateSettingsRequest): Promise<AxiosResponse<SessionResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateSetting_BySessionId(sessionID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Remove player from game session
   */
  async function deletePlayer_BySessionId_ByUserId(sessionID: string, userID: string): Promise<AxiosResponse<AddPlayerResponse>> {
    const $ = new Session$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlayer_BySessionId_ByUserId(sessionID, userID)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getGamesession,
    createGamesession,
    getGamesessionBulk,
    getRecentplayer_ByUserId,
    deleteGamesession_BySessionId,
    getGamesession_BySessionId,
    updateGamesession_BySessionId,
    fetchJoin_BySessionId,
    updatePlayer_BySessionId,
    deleteLocald_BySessionId,
    updateSetting_BySessionId,
    deletePlayer_BySessionId_ByUserId
  }
}
