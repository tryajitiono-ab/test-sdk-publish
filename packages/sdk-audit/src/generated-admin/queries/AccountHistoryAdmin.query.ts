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
import { AccountHistoryAdminApi } from "../AccountHistoryAdminApi.js"

import { PaginatedAccountHistoryResponse } from '../../generated-definitions/PaginatedAccountHistoryResponse.js'


export enum Key_AccountHistoryAdmin {
  UsersMeAccountHistories = 'Audit.AccountHistoryAdmin.UsersMeAccountHistories',
AccountHistories_ByUserId = 'Audit.AccountHistoryAdmin.AccountHistories_ByUserId',

}

  

export const useAccountHistoryAdminApi_GetUsersMeAccountHistories = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {endDate?: number, limit?: number, offset?: number, property?: string | null, startDate?: number} },
    options?: Omit<UseQueryOptions<PaginatedAccountHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedAccountHistoryResponse>) => void
  ): UseQueryResult<PaginatedAccountHistoryResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAccountHistoryAdminApi_GetUsersMeAccountHistories>[1]
  ) => async () => {
      const response = 
            (await AccountHistoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeAccountHistories(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedAccountHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountHistoryAdmin.UsersMeAccountHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useAccountHistoryAdminApi_GetAccountHistories_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {endDate?: number, limit?: number, offset?: number, property?: string | null, startDate?: number} },
    options?: Omit<UseQueryOptions<PaginatedAccountHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedAccountHistoryResponse>) => void
  ): UseQueryResult<PaginatedAccountHistoryResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAccountHistoryAdminApi_GetAccountHistories_ByUserId>[1]
  ) => async () => {
      const response = 
            (await AccountHistoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAccountHistories_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedAccountHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_AccountHistoryAdmin.AccountHistories_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  