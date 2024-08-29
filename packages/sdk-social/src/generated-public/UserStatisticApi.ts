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
import { ADtoObjectForUserStatItemValueArray } from '../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemInc } from '../generated-definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../generated-definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../generated-definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../generated-definitions/StatItemInc.js'
import { StatItemIncResult } from '../generated-definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../generated-definitions/StatItemUpdate.js'
import { UserStatItemInfoArray } from '../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../generated-definitions/UserStatItemPagingSlicedResult.js'
import { UserStatistic$ } from './endpoints/UserStatistic$.js'


export function UserStatisticApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Public bulk fetch multiple user&#39;s statitem value for a given namespace and statCode. Other detail info: + *Returns*: list of user&#39;s statItem 
   */
  async function getStatitemsBulk( queryParams: {statCode: string | null, userIds: string | null}): Promise<AxiosResponse<UserStatItemInfoArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitemsBulk( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getUsersMeStatitems( queryParams?: {limit?: number, offset?: number, sortBy?: string | null, statCodes?: string[], tags?: string[]}): Promise<AxiosResponse<UserStatItemPagingSlicedResult>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeStatitems( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function patchStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStatitemValueBulk(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public bulk update multiple user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateStatitemValueBulk(data: BulkUserStatItemInc[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public bulk update multiple user&#39;s statitems value with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value Other detail info: + *Returns*: bulk updated result 
   */
  async function updateStatitemValueBulk_v2(data: BulkUserStatItemUpdate[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public list all statItems by pagination.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getStatitems_ByUserId(userId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null, statCodes?: string | null, tags?: string | null}): Promise<AxiosResponse<UserStatItemPagingSlicedResult>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitems_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Bulk reset multiple user&#39;s statitems value. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: bulk updated result 
   */
  async function updateStatitemValueResetBulk(data: BulkUserStatItemReset[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueResetBulk(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Bulk create statItems.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk created result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createStatitemBulk_ByUserId(userId:string, data: BulkStatItemCreate[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatitemBulk_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getUsersMeStatitemsValueBulk( queryParams?: {additionalKey?: string | null, statCodes?: string[], tags?: string[]}): Promise<AxiosResponse<ADtoObjectForUserStatItemValueArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeStatitemsValueBulk( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getStatitemsValueBulk_ByUserId(userId:string,  queryParams?: {additionalKey?: string | null, statCodes?: string[], tags?: string[]}): Promise<AxiosResponse<ADtoObjectForUserStatItemValueArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitemsValueBulk_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt; 
   */
  async function patchStatitemValueBulk_ByUserId(userId:string, data: BulkStatItemInc[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStatitemValueBulk_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public bulk update user&#39;s statitems value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: bulk updated result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateStatitemValueBulk_ByUserId(userId:string, data: BulkStatItemInc[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public list all statItems of user.&lt;br&gt;NOTE: &lt;li&gt;If stat code does not exist, will ignore this stat code.&lt;/li&gt;&lt;li&gt;If stat item does not exist, will return default value&lt;/li&gt;&lt;/ul&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: stat items&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getStatitemsValueBulk_ByUserId_v2(userId:string,  queryParams?: {additionalKey?: string | null, statCodes?: string[], tags?: string[]}): Promise<AxiosResponse<ADtoObjectForUserStatItemValueArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatitemsValueBulk_ByUserId_v2(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public bulk update user&#39;s statitems value for given namespace and user with specific update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: bulk updated result 
   */
  async function updateStatitemValueBulk_ByUserId_v2(userId:string, data: BulkStatItemUpdate[], queryParams?: {additionalKey?: string | null}): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueBulk_ByUserId_v2(userId, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public bulk reset user&#39;s statitems value for given namespace and user. Other detail info: + *Returns*: bulk updated result 
   */
  async function updateStatitemValueResetBulk_ByUserId(userId:string, data: BulkStatItemReset[]): Promise<AxiosResponse<BulkStatOperationResultArray>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueResetBulk_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete user&#39;s statItems given stat code.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: no content&lt;/li&gt;&lt;/li&gt; 
   */
  async function deleteStatitem_ByUserId_ByStatCode(userId:string, statCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteStatitem_ByUserId_ByStatCode(userId, statCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create user&#39;s statItem.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created user&#39;s statItem&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createStatitem_ByUserId_ByStatCode(userId:string, statCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStatitem_ByUserId_ByStatCode(userId, statCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt; 
   */
  async function patchStatitemValue_ByUserId_ByStatCode(userId:string, statCode:string, data: StatItemInc): Promise<AxiosResponse<StatItemIncResult>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchStatitemValue_ByUserId_ByStatCode(userId, statCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public update user&#39;s statitem value.&lt;br&gt;Other detail info:&lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated user&#39;s statItem&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateStatitemValue_ByUserId_ByStatCode(userId:string, statCode:string, data: StatItemInc): Promise<AxiosResponse<StatItemIncResult>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode(userId, statCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Public update user&#39;s statitem value for a given namespace and user with a certain update strategy. There are four supported update strategies: + *OVERRIDE*: update user statitem with the new value + *INCREMENT*: increment user statitem with the specified value + *MAX*: update user statitem with the specified value if it&#39;s larger than the existing value + *MIN*: update user statitem with the specified value if it&#39;s lower than the existing value The *additionalKey* parameter will be suffixed to *userId* and is used to support multi level user&#39;s statitems, such as character&#39;s statitems. If provided, user&#39;s statitems will be saved with key: *userId_additionalKey* Other detail info: + *Returns*: updated user&#39;s statItem 
   */
  async function updateStatitemValue_ByUserId_ByStatCode_v2(userId:string, statCode:string, data: StatItemUpdate, queryParams?: {additionalKey?: string | null}): Promise<AxiosResponse<StatItemIncResult>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValue_ByUserId_ByStatCode_v2(userId, statCode, data, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Reset user&#39;s statitem value for a given namespace and user. User&#39;s statitem value will be reset to the default value defined in the statistic configuration. Other detail info: + *Returns*: updated user&#39;s statItem 
   */
  async function updateStatitemValueReset_ByUserId_ByStatCode(userId:string, statCode:string): Promise<AxiosResponse<StatItemIncResult>> {
    const $ = new UserStatistic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateStatitemValueReset_ByUserId_ByStatCode(userId, statCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getStatitemsBulk,getUsersMeStatitems,patchStatitemValueBulk,updateStatitemValueBulk,updateStatitemValueBulk_v2,getStatitems_ByUserId,updateStatitemValueResetBulk,createStatitemBulk_ByUserId,getUsersMeStatitemsValueBulk,getStatitemsValueBulk_ByUserId,patchStatitemValueBulk_ByUserId,updateStatitemValueBulk_ByUserId,getStatitemsValueBulk_ByUserId_v2,updateStatitemValueBulk_ByUserId_v2,updateStatitemValueResetBulk_ByUserId,deleteStatitem_ByUserId_ByStatCode,createStatitem_ByUserId_ByStatCode,patchStatitemValue_ByUserId_ByStatCode,updateStatitemValue_ByUserId_ByStatCode,updateStatitemValue_ByUserId_ByStatCode_v2,updateStatitemValueReset_ByUserId_ByStatCode,
  }
}
  