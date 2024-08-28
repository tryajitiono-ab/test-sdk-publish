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
import { AxiosResponse } from 'axios'
import { PartyQueryResponse } from '../generated-definitions/PartyQueryResponse.js'
import { PartyAdmin$ } from './endpoints/PartyAdmin$.js'


export function PartyAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * Query parties. 
   */
  async function getParties( queryParams?: {isSoftDeleted?: string | null, joinability?: string | null, key?: string | null, leaderID?: string | null, limit?: number, memberID?: string | null, memberStatus?: string | null, offset?: number, order?: string | null, orderBy?: string | null, partyID?: string | null, value?: string | null}): Promise<AxiosResponse<PartyQueryResponse>> {
    const $ = new PartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getParties( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Trigger user&#39;s active party session to native platform.  
   */
  async function createNativeSync_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new PartyAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNativeSync_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getParties,createNativeSync_ByUserId,
  }
}
  