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
import { PartyData } from '../generated-definitions/PartyData.js'
import { PartyAdmin$ } from './endpoints/PartyAdmin$.js'

export function PartyAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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

  async function getPartyParty_ByPartyId(partyId: string): Promise<AxiosResponse<PartyData>> {
    const $ = new PartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPartyParty_ByPartyId(partyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getParty_ByUserId(userId: string): Promise<AxiosResponse<PartyData>> {
    const $ = new PartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getParty_ByUserId(userId)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Get party data in a namespace.
     */
    getPartyParty_ByPartyId,
    /**
     * Get party data in a namespace.
     */
    getParty_ByUserId
  }
}
