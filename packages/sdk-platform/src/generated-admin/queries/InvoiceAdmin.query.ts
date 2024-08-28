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
import { InvoiceAdminApi } from "../InvoiceAdminApi.js"

import { InvoiceSummary } from '../../generated-definitions/InvoiceSummary.js'


export enum Key_InvoiceAdmin {
  InvoiceSummary = 'Platform.InvoiceAdmin.InvoiceSummary',
InvoiceDetailsCsv = 'Platform.InvoiceAdmin.InvoiceDetailsCsv',

}

  

export const useInvoiceAdminApi_GetInvoiceSummary = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {endTime: string | null, feature: string | null, itemId: string | null, itemType: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', startTime: string | null} },
    options?: Omit<UseQueryOptions<InvoiceSummary, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<InvoiceSummary>) => void
  ): UseQueryResult<InvoiceSummary, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useInvoiceAdminApi_GetInvoiceSummary>[1]
  ) => async () => {
      const response = 
            (await InvoiceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInvoiceSummary(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<InvoiceSummary, AxiosError<ApiError>>({
    queryKey: [Key_InvoiceAdmin.InvoiceSummary, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useInvoiceAdminApi_GetInvoiceDetailsCsv = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {endTime: string | null, feature: string | null, itemId: string | null, itemType: 'APP' | 'BUNDLE' | 'CODE' | 'COINS' | 'EXTENSION' | 'INGAMEITEM' | 'LOOTBOX' | 'MEDIA' | 'OPTIONBOX' | 'SEASON' | 'SUBSCRIPTION', startTime: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useInvoiceAdminApi_GetInvoiceDetailsCsv>[1]
  ) => async () => {
      const response = 
            (await InvoiceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInvoiceDetailsCsv(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_InvoiceAdmin.InvoiceDetailsCsv, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  