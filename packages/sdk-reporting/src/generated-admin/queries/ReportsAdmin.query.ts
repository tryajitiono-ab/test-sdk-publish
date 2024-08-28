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
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { ReportsAdminApi } from "../ReportsAdminApi.js"

import { ReportListResponse } from '../../generated-definitions/ReportListResponse.js'
import { SubmitReportRequest } from '../../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../../generated-definitions/SubmitReportResponse.js'


export enum Key_ReportsAdmin {
  Reports = 'Reporting.ReportsAdmin.Reports',
Report = 'Reporting.ReportsAdmin.Report',

}

  

export const useReportsAdminApi_GetReports = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {category?: string | null, limit?: number, offset?: number, reportedUserId?: string | null, sortBy?: string | null} },
    options?: Omit<UseQueryOptions<ReportListResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ReportListResponse>) => void
  ): UseQueryResult<ReportListResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useReportsAdminApi_GetReports>[1]
  ) => async () => {
      const response = 
            (await ReportsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getReports(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ReportListResponse, AxiosError<ApiError>>({
    queryKey: [Key_ReportsAdmin.Reports, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useReportsAdminApi_CreateReport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SubmitReportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SubmitReportRequest }>, 'mutationKey'>,
    callback?: (data: SubmitReportResponse) => void
  ): UseMutationResult<SubmitReportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SubmitReportRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: SubmitReportRequest }) => {
      const response = 
            (await ReportsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createReport(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ReportsAdmin.Report],
    mutationFn,
    ...options
  })
}
  
  
  