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
import { AuditLogInfo } from '../generated-definitions/AuditLogInfo.js'
import { CategoryResponse } from '../generated-definitions/CategoryResponse.js'
import { PaginatedAuditLogsResponse } from '../generated-definitions/PaginatedAuditLogsResponse.js'
import { TimeRangeConfigResponse } from '../generated-definitions/TimeRangeConfigResponse.js'
import { AuditLogsAdmin$ } from './endpoints/AuditLogsAdmin$.js'


export function AuditLogsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to query audit logs. The **{namespace}** permission value will be pointed to &#34;namespace&#34; query param. **1. If &#34;namespace&#34; query param exist:** The permission validation will validate that single namespace value. **2. If &#34;namespace&#34; query param not exist:** The permission validation will automatically check the users audit permissions (ADMIN:NAMESPACE:{namespace}:AUDIT). The query result can only returns data that matched with the namespace from the users AUDIT permissions e.g: If current user was assign permission with namespaces [game1, game2], then API will query by game1 &amp; game2  
   */
  async function getLogs( queryParams?: {action?: string | null, actor?: string | null, actorType?: 'CLIENT' | 'USER', category?: string | null, endDate?: number, limit?: number, namespace?: string | null, objectId?: string | null, objectType?: string | null, offset?: number, order?: -1 | 1, startDate?: number}): Promise<AxiosResponse<PaginatedAuditLogsResponse>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLogs( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to query category and related action names. 
   */
  async function getConfigCategories( queryParams?: {endDate?: number, namespace?: string | null, startDate?: number}): Promise<AxiosResponse<CategoryResponse>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigCategories( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * We do not support query all time audit log. This API will return the number of days between the earliest day can be query and the current date. eg: if current date is 2023-01-10 and this API return 5, then it mean: API commitment can query to the data of the earliest date is 2023-01-05. The &#39;commitment&#39; means expiration of the log file will be archived but may not be executed immediately.  
   */
  async function getConfigTimeRange(): Promise<AxiosResponse<TimeRangeConfigResponse>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigTimeRange()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to get audit details. 
   */
  async function getLog_ByLogId(logId:string): Promise<AxiosResponse<AuditLogInfo>> {
    const $ = new AuditLogsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLog_ByLogId(logId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getLogs,getConfigCategories,getConfigTimeRange,getLog_ByLogId,
  }
}
  