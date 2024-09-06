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
import { ChannelRequest } from '../generated-definitions/ChannelRequest.js'
import { ChannelResponse } from '../generated-definitions/ChannelResponse.js'
import { PaginatedGetChannelResponse } from '../generated-definitions/PaginatedGetChannelResponse.js'
import { UpdateChannelRequest } from '../generated-definitions/UpdateChannelRequest.js'
import { ChannelAdmin$ } from './endpoints/ChannelAdmin$.js'

export function ChannelAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get official channel paginated
   */
  async function getChannels(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<PaginatedGetChannelResponse>> {
    const $ = new ChannelAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannels(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Create official channel
   */
  async function createChannel(data: ChannelRequest): Promise<AxiosResponse<ChannelResponse>> {
    const $ = new ChannelAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createChannel(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete official channel
   */
  async function deleteChannel_ByChannelId(channelId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ChannelAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChannel_ByChannelId(channelId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update official channel
   */
  async function updateChannel_ByChannelId(channelId: string, data: UpdateChannelRequest): Promise<AxiosResponse<ChannelResponse>> {
    const $ = new ChannelAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateChannel_ByChannelId(channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get user channel paginated
   */
  async function getChannels_ByUserId(
    userId: string,
    queryParams?: { limit?: number; name?: string | null; offset?: number }
  ): Promise<AxiosResponse<PaginatedGetChannelResponse>> {
    const $ = new ChannelAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChannels_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete user channel
   */
  async function deleteChannel_ByUserId_ByChannelId(userId: string, channelId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ChannelAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChannel_ByUserId_ByChannelId(userId, channelId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Update user channel
   */
  async function updateChannel_ByUserId_ByChannelId(
    userId: string,
    channelId: string,
    data: UpdateChannelRequest
  ): Promise<AxiosResponse<ChannelResponse>> {
    const $ = new ChannelAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateChannel_ByUserId_ByChannelId(userId, channelId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getChannels,
    createChannel,
    deleteChannel_ByChannelId,
    updateChannel_ByChannelId,
    getChannels_ByUserId,
    deleteChannel_ByUserId_ByChannelId,
    updateChannel_ByUserId_ByChannelId
  }
}
