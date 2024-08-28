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
import { ReportListResponse } from '../generated-definitions/ReportListResponse.js'
import { TicketListResponse } from '../generated-definitions/TicketListResponse.js'
import { TicketResponse } from '../generated-definitions/TicketResponse.js'
import { TicketStatisticResponse } from '../generated-definitions/TicketStatisticResponse.js'
import { UpdateTicketResolutionsRequest } from '../generated-definitions/UpdateTicketResolutionsRequest.js'
import { TicketsAdmin$ } from './endpoints/TicketsAdmin$.js'


export function TicketsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Tickets list can be ordered by: - createdAt - reportsCount - status (currently there are OPEN, AUTO_MODERATED and CLOSED statuses, desc order will put ticket with CLOSED status at the top) 
   */
  async function getTickets( queryParams?: {category?: string | null, extensionCategory?: string | null, limit?: number, offset?: number, order?: string | null, reportedUserId?: string | null, sortBy?: string | null, status?: string | null}): Promise<AxiosResponse<TicketListResponse>> {
    const $ = new TicketsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTickets( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Ticket statistic can be filtered by: - category - extension category 
   */
  async function getTicketsStatistic( queryParams: {category: string | null, extensionCategory?: string | null}): Promise<AxiosResponse<TicketStatisticResponse>> {
    const $ = new TicketsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicketsStatistic( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint will delete ticket and all its reports.  
   */
  async function deleteTicket_ByTicketId(ticketId:string): Promise<AxiosResponse<unknown>> {
    const $ = new TicketsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTicket_ByTicketId(ticketId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint will return ticket detail with ticket id. 
   */
  async function getTicket_ByTicketId(ticketId:string): Promise<AxiosResponse<TicketResponse>> {
    const $ = new TicketsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTicket_ByTicketId(ticketId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * List reports ordered by createdAt in descending order. 
   */
  async function getReports_ByTicketId(ticketId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<ReportListResponse>> {
    const $ = new TicketsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReports_ByTicketId(ticketId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update ticket resolution status to either OPEN or CLOSED. It is mandatory to provide notes 
   */
  async function updateResolution_ByTicketId(ticketId:string, data: UpdateTicketResolutionsRequest): Promise<AxiosResponse<TicketResponse>> {
    const $ = new TicketsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateResolution_ByTicketId(ticketId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getTickets,getTicketsStatistic,deleteTicket_ByTicketId,getTicket_ByTicketId,getReports_ByTicketId,updateResolution_ByTicketId,
  }
}
  