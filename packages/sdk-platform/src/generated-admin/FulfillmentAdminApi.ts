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
import { FulfillCodeRequest } from '../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentHistoryPagingSlicedResult } from '../generated-definitions/FulfillmentHistoryPagingSlicedResult.js'
import { FulfillmentItemArray } from '../generated-definitions/FulfillmentItemArray.js'
import { FulfillmentRequest } from '../generated-definitions/FulfillmentRequest.js'
import { FulfillmentResult } from '../generated-definitions/FulfillmentResult.js'
import { FulfillmentV2Request } from '../generated-definitions/FulfillmentV2Request.js'
import { FulfillmentV2Result } from '../generated-definitions/FulfillmentV2Result.js'
import { PreCheckFulfillmentRequest } from '../generated-definitions/PreCheckFulfillmentRequest.js'
import { RevokeFulfillmentV2Result } from '../generated-definitions/RevokeFulfillmentV2Result.js'
import { RewardsRequest } from '../generated-definitions/RewardsRequest.js'
import { FulfillmentAdmin$ } from './endpoints/FulfillmentAdmin$.js'


export function FulfillmentAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Query fulfillments in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment info, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getFulfillments_v2( queryParams?: {endTime?: string | null, limit?: number, offset?: number, startTime?: string | null, state?: 'FULFILLED' | 'FULFILL_FAILED' | 'REVOKED' | 'REVOKE_FAILED', transactionId?: string | null, userId?: string | null}): Promise<AxiosResponse<FulfillmentHistoryPagingSlicedResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFulfillments_v2( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Query fulfillment histories in a namespace.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query fulfillment history&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getFulfillmentHistory( queryParams?: {limit?: number, offset?: number, status?: 'FAIL' | 'SUCCESS', userId?: string | null}): Promise<AxiosResponse<FulfillmentHistoryPagingSlicedResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFulfillmentHistory( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Fulfill item.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createFulfillment_ByUserId(userId:string, data: FulfillmentRequest): Promise<AxiosResponse<FulfillmentResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillment_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Redeem campaign code.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createFulfillmentCode_ByUserId(userId:string, data: FulfillCodeRequest): Promise<AxiosResponse<FulfillmentResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentCode_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createFulfillmentReward_ByUserId(userId:string, data: RewardsRequest): Promise<AxiosResponse<unknown>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentReward_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve and check fulfillment items based on the provided request.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of fulfillment items&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createFulfillmentPreCheck_ByUserId(userId:string, data: PreCheckFulfillmentRequest): Promise<AxiosResponse<FulfillmentItemArray>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentPreCheck_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; Fulfill rewards.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment result&lt;/li&gt;&lt;li&gt;&lt;i&gt;rewards Item unsupported Type&lt;/i&gt;: SUBSCRIPTION&lt;/ul&gt; 
   */
  async function createFulfillmentReward_ByUserId_v2(userId:string, data: RewardsRequest): Promise<AxiosResponse<FulfillmentResult>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFulfillmentReward_ByUserId_v2(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Fulfill items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Request body&lt;/i&gt;: storeId, region, language, and entitlementCollectionId can be ignored.&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateFulfillment_ByUserId_ByTransactionId_v2(userId:string, transactionId:string, data: FulfillmentV2Request): Promise<AxiosResponse<FulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFulfillment_ByUserId_ByTransactionId_v2(userId, transactionId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[Not supported yet in AGS Shared Cloud]&lt;/b&gt; Revoke items by transactionId.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: revoke fulfillment v2 result, storeId field can be ignored.&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateRevoke_ByUserId_ByTransactionId_v2(userId:string, transactionId:string): Promise<AxiosResponse<RevokeFulfillmentV2Result>> {
    const $ = new FulfillmentAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevoke_ByUserId_ByTransactionId_v2(userId, transactionId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getFulfillments_v2,getFulfillmentHistory,createFulfillment_ByUserId,createFulfillmentCode_ByUserId,createFulfillmentReward_ByUserId,createFulfillmentPreCheck_ByUserId,createFulfillmentReward_ByUserId_v2,updateFulfillment_ByUserId_ByTransactionId_v2,updateRevoke_ByUserId_ByTransactionId_v2,
  }
}
  