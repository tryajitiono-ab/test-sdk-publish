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
import { ChatSnapshots } from '../generated-definitions/ChatSnapshots.js'
import { ModerationAdmin$ } from './endpoints/ModerationAdmin$.js'

export function ModerationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
    ...(args?.coreConfig?.baseURL ? { baseURL: args?.coreConfig?.baseURL } : {}),
    ...args?.axiosConfig?.request
  })
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  async function deleteSnapshot_ByChatId(chatId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ModerationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteSnapshot_ByChatId(chatId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getSnapshot_ByChatId(chatId: string): Promise<AxiosResponse<ChatSnapshots>> {
    const $ = new ModerationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getSnapshot_ByChatId(chatId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Delete the chat snapshot
     */
    deleteSnapshot_ByChatId,
    /**
     * Get the chat snapshot
     */
    getSnapshot_ByChatId
  }
}
