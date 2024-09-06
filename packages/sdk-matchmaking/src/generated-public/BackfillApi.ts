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
import { BackFillAcceptRequest } from '../generated-definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../generated-definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../generated-definitions/BackFillRejectRequest.js'
import { BackfillCreateResponse } from '../generated-definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../generated-definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../generated-definitions/BackfillProposalResponse.js'
import { GameSession } from '../generated-definitions/GameSession.js'
import { Backfill$ } from './endpoints/Backfill$.js'

export function BackfillApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Create backfill ticket.
   */
  async function createBackfill(data: BackFillCreateRequest): Promise<AxiosResponse<BackfillCreateResponse>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBackfill(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get backfill proposal
   */
  async function getBackfillProposal(queryParams: { sessionID: string | null }): Promise<AxiosResponse<BackfillProposalResponse>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBackfillProposal(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete backfill ticket.
   */
  async function deleteBackfill_ByBackfillId(backfillID: string): Promise<AxiosResponse<unknown>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get backfill ticket by ID
   */
  async function getBackfill_ByBackfillId(backfillID: string): Promise<AxiosResponse<BackfillGetResponse>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBackfill_ByBackfillId(backfillID)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Accept backfill proposal.
   */
  async function updateProposalAccept_ByBackfillId(backfillID: string, data: BackFillAcceptRequest): Promise<AxiosResponse<GameSession>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProposalAccept_ByBackfillId(backfillID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Reject backfill proposal
   */
  async function updateProposalReject_ByBackfillId(backfillID: string, data: BackFillRejectRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Backfill$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProposalReject_ByBackfillId(backfillID, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    createBackfill,
    getBackfillProposal,
    deleteBackfill_ByBackfillId,
    getBackfill_ByBackfillId,
    updateProposalAccept_ByBackfillId,
    updateProposalReject_ByBackfillId
  }
}
