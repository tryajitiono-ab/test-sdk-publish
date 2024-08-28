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

import { AnonymizationAdmin$ } from './endpoints/AnonymizationAdmin$.js'


export function AnonymizationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Anonymize order. At current it will only anonymize order, order history. 
   */
  async function deleteAnonymizationOrder_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationOrder_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize payment. At current it will only anonymize payment order, payment order history. 
   */
  async function deleteAnonymizationPayment_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationPayment_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize wallet. At current it will only anonymize wallet, wallet transaction. 
   */
  async function deleteAnonymizationWallet_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationWallet_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize campaign. At current it will only anonymize redeem history. 
   */
  async function deleteAnonymizationCampaign_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationCampaign_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize revocation. At current it will only anonymize revocation history. 
   */
  async function deleteAnonymizationRevocation_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationRevocation_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize fulfillment. At current it will only anonymize fulfillment history. 
   */
  async function deleteAnonymizationFulfillment_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationFulfillment_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize entitlement. At current it will only anonymize entitlement, entitlement history. 
   */
  async function deleteAnonymizationEntitlement_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationEntitlement_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize integrations. At current it will only anonymize iap histories. 
   */
  async function deleteAnonymizationIntegration_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationIntegration_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Anonymize subscription. At current it will anonymize subscription, billing history and subscription activity. 
   */
  async function deleteAnonymizationSubscription_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new AnonymizationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAnonymizationSubscription_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteAnonymizationOrder_ByUserId,deleteAnonymizationPayment_ByUserId,deleteAnonymizationWallet_ByUserId,deleteAnonymizationCampaign_ByUserId,deleteAnonymizationRevocation_ByUserId,deleteAnonymizationFulfillment_ByUserId,deleteAnonymizationEntitlement_ByUserId,deleteAnonymizationIntegration_ByUserId,deleteAnonymizationSubscription_ByUserId,
  }
}
  