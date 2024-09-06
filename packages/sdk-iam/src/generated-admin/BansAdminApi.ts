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
import { BanReasonsV3 } from '../generated-definitions/BanReasonsV3.js'
import { BansV3 } from '../generated-definitions/BansV3.js'
import { BulkBanCreateRequestV3 } from '../generated-definitions/BulkBanCreateRequestV3.js'
import { BulkUnbanCreateRequestV3 } from '../generated-definitions/BulkUnbanCreateRequestV3.js'
import { GetUserBanV3Response } from '../generated-definitions/GetUserBanV3Response.js'
import { ListBulkUserBanResponseV3 } from '../generated-definitions/ListBulkUserBanResponseV3.js'
import { BansAdmin$ } from './endpoints/BansAdmin$.js'

export function BansAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  async function getBans_v3(): Promise<AxiosResponse<BansV3>> {
    const $ = new BansAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Ban reasons is the code available to justify ban assignment. It is applicable globally for any namespace. action code : 10202
   */
  async function getBansReasons_v3(): Promise<AxiosResponse<BanReasonsV3>> {
    const $ = new BansAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBansReasons_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  async function getBantypes_v3(): Promise<AxiosResponse<BansV3>> {
    const $ = new BansAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBantypes_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Ban type is the code available for ban assignment. It is applicable globally for any namespace. action code : 10201
   */
  async function getBansUsers_v3(queryParams?: {
    activeOnly?: boolean | null
    banType?: string | null
    limit?: number
    offset?: number
  }): Promise<AxiosResponse<GetUserBanV3Response>> {
    const $ = new BansAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBansUsers_v3(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Bulk ban user with specific type of ban. Ban types and reason can be queried. The maximum limit value is 100 userIDs action code : 10141
   */
  async function createBanUser_v3(data: BulkBanCreateRequestV3): Promise<AxiosResponse<ListBulkUserBanResponseV3>> {
    const $ = new BansAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBanUser_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * disable bulk ban user. The maximum limit value is 100 action code : 10142
   */
  async function patchBanUserDisabled_v3(data: BulkUnbanCreateRequestV3): Promise<AxiosResponse<ListBulkUserBanResponseV3>> {
    const $ = new BansAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchBanUserDisabled_v3(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getBans_v3,
    getBansReasons_v3,
    getBantypes_v3,
    getBansUsers_v3,
    createBanUser_v3,
    patchBanUserDisabled_v3
  }
}
