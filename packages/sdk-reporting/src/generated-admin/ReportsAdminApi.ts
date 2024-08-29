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
import { ReportListResponse } from '../generated-definitions/ReportListResponse.js'
import { SubmitReportRequest } from '../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../generated-definitions/SubmitReportResponse.js'
import { ReportsAdmin$ } from './endpoints/ReportsAdmin$.js'


export function ReportsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required permission: ADMIN:NAMESPACE:{namespace}:TICKET [READ] Reports list can be ordered by: - createdAt - updatedAt 
   */
  async function getReports( queryParams?: {category?: string | null, limit?: number, offset?: number, reportedUserId?: string | null, sortBy?: string | null}): Promise<AxiosResponse<ReportListResponse>> {
    const $ = new ReportsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReports( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Submit a report and will return ticket for reported object. New ticket will be created if no OPEN ticket present for reported object (based by objectId and objectType) in a namespace. Admin can only submit report once for each different user / object reported in the same OPEN ticket. Reporting the same user / object in the same OPEN ticket will return HTTP code 409 (conflict). Fill the &#39;reason&#39; field with a &#39;reason title&#39; Supported category: - UGC - USER - CHAT - EXTENSION  
   */
  async function createReport(data: SubmitReportRequest): Promise<AxiosResponse<SubmitReportResponse>> {
    const $ = new ReportsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createReport(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getReports,createReport,
  }
}
  