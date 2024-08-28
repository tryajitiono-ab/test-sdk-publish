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
import { BulkGetGameRecordRequest } from '../generated-definitions/BulkGetGameRecordRequest.js'
import { BulkGetGameRecordResponse } from '../generated-definitions/BulkGetGameRecordResponse.js'
import { GameRecordRequest } from '../generated-definitions/GameRecordRequest.js'
import { GameRecordResponse } from '../generated-definitions/GameRecordResponse.js'
import { PublicGameRecord$ } from './endpoints/PublicGameRecord$.js'


export function PublicGameRecordApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Bulk get game records. Maximum key per request 20. 
   */
  async function fetchRecordBulk(data: BulkGetGameRecordRequest): Promise<AxiosResponse<BulkGetGameRecordResponse>> {
    const $ = new PublicGameRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchRecordBulk(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete records by its key 
   */
  async function deleteRecord_ByKey(key:string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicGameRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRecord_ByKey(key, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get game record by its key. 
   */
  async function getRecord_ByKey(key:string): Promise<AxiosResponse<GameRecordResponse>> {
    const $ = new PublicGameRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRecord_ByKey(key, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ## Description This endpoints will create new game record or append the existing game record. **Append example:** Example 1 - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: &#34;value&#34;, &#34;data2&#34;: &#34;new value&#34; }` Example 2 - Existing JSON: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data1&#34;: { &#34;data3&#34;: &#34;new value&#34; }` - Result: `{ &#34;data1&#34;: { &#34;data2&#34;: &#34;value&#34;, &#34;data3&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.  
   */
  async function createRecord_ByKey(key:string, data: GameRecordRequest): Promise<AxiosResponse<GameRecordResponse>> {
    const $ = new PublicGameRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRecord_ByKey(key, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ## Description This endpoints will create new game record or replace the existing game record. **Replace behaviour:** The existing value will be replaced completely with the new value. Example - Existing JSON: `{ &#34;data1&#34;: &#34;value&#34; }` - New JSON: `{ &#34;data2&#34;: &#34;new value&#34; }` - Result: `{ &#34;data2&#34;: &#34;new value&#34; }` ## Restriction This is the restriction of Key Naming for the record: 1. Cannot use **&#34;.&#34;** as the key name - `{ &#34;data.2&#34;: &#34;value&#34; }` 2. Cannot use **&#34;$&#34;** as the prefix in key names - `{ &#34;$data&#34;: &#34;value&#34; }` 3. Cannot use empty string in key names - `{ &#34;&#34;: &#34;value&#34; }` ## Reserved Word Reserved Word List: **__META** The reserved word cannot be used as a field in record value, If still defining the field when creating or updating the record, it will be ignored.  
   */
  async function updateRecord_ByKey(key:string, data: GameRecordRequest): Promise<AxiosResponse<GameRecordResponse>> {
    const $ = new PublicGameRecord$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRecord_ByKey(key, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    fetchRecordBulk,deleteRecord_ByKey,getRecord_ByKey,createRecord_ByKey,updateRecord_ByKey,
  }
}
  