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
import { UserStatCycleItemPagingSlicedResult } from '../generated-definitions/UserStatCycleItemPagingSlicedResult.js'
import { UserStatisticCycleAdmin$ } from './endpoints/UserStatisticCycleAdmin$.js'


export function UserStatisticCycleAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
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
   * List user&#39;s statCycleItems by statCycle.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat cycle items&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getStatCycleitems_ByUserId_ByCycleId(userId:string, cycleId:string,  queryParams?: {isPublic?: boolean | null, limit?: number, offset?: number, sortBy?: string | null, statCodes?: string | null}): Promise<AxiosResponse<UserStatCycleItemPagingSlicedResult>> {
    const $ = new UserStatisticCycleAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatCycleitems_ByUserId_ByCycleId(userId, cycleId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getStatCycleitems_ByUserId_ByCycleId,
  }
}
  