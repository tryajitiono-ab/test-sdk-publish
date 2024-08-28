/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, SdkSetConfigParam, ApiError } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { AuditLogsAdminApi } from "../AuditLogsAdminApi.js"

import { AuditLogInfo } from '../../generated-definitions/AuditLogInfo.js'
import { CategoryResponse } from '../../generated-definitions/CategoryResponse.js'
import { PaginatedAuditLogsResponse } from '../../generated-definitions/PaginatedAuditLogsResponse.js'
import { TimeRangeConfigResponse } from '../../generated-definitions/TimeRangeConfigResponse.js'


export enum Key_AuditLogsAdmin {
  Logs = 'Audit.AuditLogsAdmin.Logs',
ConfigCategories = 'Audit.AuditLogsAdmin.ConfigCategories',
ConfigTimeRange = 'Audit.AuditLogsAdmin.ConfigTimeRange',
Log_ByLogId = 'Audit.AuditLogsAdmin.Log_ByLogId',

}

  

export const useAuditLogsAdminApi_GetLogs = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {action?: string | null, actor?: string | null, actorType?: 'CLIENT' | 'USER', category?: string | null, endDate?: number, limit?: number, namespace?: string | null, objectId?: string | null, objectType?: string | null, offset?: number, order?: -1 | 1, startDate?: number} },
    options?: Omit<UseQueryOptions<PaginatedAuditLogsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedAuditLogsResponse>) => void
  ): UseQueryResult<PaginatedAuditLogsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAuditLogsAdminApi_GetLogs>[1]
  ) => async () => {
      const response = 
            (await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLogs(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedAuditLogsResponse, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.Logs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useAuditLogsAdminApi_GetConfigCategories = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {endDate?: number, namespace?: string | null, startDate?: number} },
    options?: Omit<UseQueryOptions<CategoryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CategoryResponse>) => void
  ): UseQueryResult<CategoryResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAuditLogsAdminApi_GetConfigCategories>[1]
  ) => async () => {
      const response = 
            (await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigCategories(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CategoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.ConfigCategories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useAuditLogsAdminApi_GetConfigTimeRange = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<TimeRangeConfigResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TimeRangeConfigResponse>) => void
  ): UseQueryResult<TimeRangeConfigResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAuditLogsAdminApi_GetConfigTimeRange>[1]
  ) => async () => {
      const response = 
            (await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigTimeRange())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TimeRangeConfigResponse, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.ConfigTimeRange, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useAuditLogsAdminApi_GetLog_ByLogId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { logId:string },
    options?: Omit<UseQueryOptions<AuditLogInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AuditLogInfo>) => void
  ): UseQueryResult<AuditLogInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAuditLogsAdminApi_GetLog_ByLogId>[1]
  ) => async () => {
      const response = 
            (await AuditLogsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLog_ByLogId(input.logId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AuditLogInfo, AxiosError<ApiError>>({
    queryKey: [Key_AuditLogsAdmin.Log_ByLogId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  