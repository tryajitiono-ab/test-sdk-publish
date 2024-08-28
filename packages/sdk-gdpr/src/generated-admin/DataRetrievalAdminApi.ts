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
import { DataRetrievalResponse } from '../generated-definitions/DataRetrievalResponse.js'
import { ListPersonalDataResponse } from '../generated-definitions/ListPersonalDataResponse.js'
import { UserDataUrl } from '../generated-definitions/UserDataUrl.js'
import { UserPersonalDataResponse } from '../generated-definitions/UserPersonalDataResponse.js'
import { DataRetrievalAdmin$ } from './endpoints/DataRetrievalAdmin$.js'


export function DataRetrievalAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get list personal data requests Scope: account 
   */
  async function getRequests( queryParams?: {limit?: number, offset?: number, requestDate?: string | null}): Promise<AxiosResponse<ListPersonalDataResponse>> {
    const $ = new DataRetrievalAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRequests( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get user&#39;s personal data requests Scope: account 
   */
  async function getRequests_ByUserId(userId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<UserPersonalDataResponse>> {
    const $ = new DataRetrievalAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRequests_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Submit user personal data retrieval request. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded**  
   */
  async function postRequest_ByUserId(userId:string, data: {password?: string | null}): Promise<AxiosResponse<DataRetrievalResponse>> {
    const $ = new DataRetrievalAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postRequest_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Cancel user&#39;s personal data requests Scope: account 
   */
  async function deleteRequest_ByUserId_ByRequestDate(userId:string, requestDate:string): Promise<AxiosResponse<unknown>> {
    const $ = new DataRetrievalAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRequest_ByUserId_ByRequestDate(userId, requestDate, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Generate personal data download url. Scope: account ### Request Header: - **Content-Type: application/x-www-form-urlencoded** 
   */
  async function postGenerate_ByUserId_ByRequestDate(userId:string, requestDate:string, data: {password: string | null}): Promise<AxiosResponse<UserDataUrl>> {
    const $ = new DataRetrievalAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postGenerate_ByUserId_ByRequestDate(userId, requestDate, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getRequests,getRequests_ByUserId,postRequest_ByUserId,deleteRequest_ByUserId_ByRequestDate,postGenerate_ByUserId_ByRequestDate,
  }
}
  