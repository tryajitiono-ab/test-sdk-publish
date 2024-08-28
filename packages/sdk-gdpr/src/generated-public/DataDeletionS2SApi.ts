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
import { ListFinishedDataDeletion } from '../generated-definitions/ListFinishedDataDeletion.js'
import { S2SRequestDeleteResponse } from '../generated-definitions/S2SRequestDeleteResponse.js'
import { DataDeletionS2S$ } from './endpoints/DataDeletionS2S$.js'


export function DataDeletionS2SApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Scope: account Get list of finished account deletion requests based on the finished time period. Unfinished deletion requests will not appear here, i.e. have Status **Request**, **Pending** or **In-Progress**. **Anonymize userId for deleted account:** For user accounts that have been deleted, the **userId** field in this API will be anonymized automatically after **7 days** from the success deletion. This measure is implemented to ensure compliance with GDPR regulations. Please make sure to synchronize the data from this API before it undergoes anonymization. --- ## This API for S2S integration purpose only  
   */
  async function getS2SDeletionsFinished( queryParams: {end: string | null, start: string | null}): Promise<AxiosResponse<ListFinishedDataDeletion>> {
    const $ = new DataDeletionS2S$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getS2SDeletionsFinished( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Scope: account Submit user&#39;s account deletion request. **Limitation:** This API only accepts requests with a publisher userId and does not support game userId requests at this time. --- ## This API for S2S integration purpose only **Notes:** 1. This API will **not send GDPR email notification** both for player and admin notification. 2. This API will **perform account deletion immediately** without GDPR grace period (i.e. 28 days grace period). 
   */
  async function createDeletionS2_ByUserId(userId:string): Promise<AxiosResponse<S2SRequestDeleteResponse>> {
    const $ = new DataDeletionS2S$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeletionS2_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getS2SDeletionsFinished,createDeletionS2_ByUserId,
  }
}
  