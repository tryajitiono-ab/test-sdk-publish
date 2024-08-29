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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { PublicReportsApi } from "../PublicReportsApi.js"

import { SubmitReportRequest } from '../../generated-definitions/SubmitReportRequest.js'
import { SubmitReportResponse } from '../../generated-definitions/SubmitReportResponse.js'


export enum Key_PublicReports {
  Report = 'Reporting.PublicReports.Report',

}

  

export const usePublicReportsApi_CreateReport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SubmitReportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SubmitReportRequest }>, 'mutationKey'>,
    callback?: (data: SubmitReportResponse) => void
  ): UseMutationResult<SubmitReportResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: SubmitReportRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: SubmitReportRequest }) => {
      const response = 
            (await PublicReportsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createReport(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicReports.Report],
    mutationFn,
    ...options
  })
}
  
  
  