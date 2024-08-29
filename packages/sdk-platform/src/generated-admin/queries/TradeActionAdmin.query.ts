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
import { TradeActionAdminApi } from "../TradeActionAdminApi.js"

import { TradeActionPagingSlicedResult } from '../../generated-definitions/TradeActionPagingSlicedResult.js'
import { TradeChainActionHistoryInfo } from '../../generated-definitions/TradeChainActionHistoryInfo.js'
import { TradeChainedActionCommitRequest } from '../../generated-definitions/TradeChainedActionCommitRequest.js'


export enum Key_TradeActionAdmin {
  TradeCommit = 'Platform.TradeActionAdmin.TradeCommit',
Trade_ByTransactionId = 'Platform.TradeActionAdmin.Trade_ByTransactionId',
TradeHistoryByCriteria = 'Platform.TradeActionAdmin.TradeHistoryByCriteria',

}

  

export const useTradeActionAdminApi_CreateTradeCommit = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TradeChainActionHistoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TradeChainedActionCommitRequest }>, 'mutationKey'>,
    callback?: (data: TradeChainActionHistoryInfo) => void
  ): UseMutationResult<TradeChainActionHistoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TradeChainedActionCommitRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: TradeChainedActionCommitRequest }) => {
      const response = 
            (await TradeActionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createTradeCommit(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_TradeActionAdmin.TradeCommit],
    mutationFn,
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TradeActionAdmin.Trade_ByTransactionId, input]
 * }
 * ```
 */
export const useTradeActionAdminApi_GetTrade_ByTransactionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { transactionId:string },
    options?: Omit<UseQueryOptions<TradeChainActionHistoryInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TradeChainActionHistoryInfo>) => void
  ): UseQueryResult<TradeChainActionHistoryInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useTradeActionAdminApi_GetTrade_ByTransactionId>[1]
  ) => async () => {
      const response = 
            (await TradeActionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getTrade_ByTransactionId(input.transactionId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TradeChainActionHistoryInfo, AxiosError<ApiError>>({
    queryKey: [Key_TradeActionAdmin.Trade_ByTransactionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_TradeActionAdmin.TradeHistoryByCriteria, input]
 * }
 * ```
 */
export const useTradeActionAdminApi_GetTradeHistoryByCriteria = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, status?: 'FAILED' | 'INIT' | 'SUCCESS', type?: string | null, userId?: string | null} },
    options?: Omit<UseQueryOptions<TradeActionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TradeActionPagingSlicedResult>) => void
  ): UseQueryResult<TradeActionPagingSlicedResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useTradeActionAdminApi_GetTradeHistoryByCriteria>[1]
  ) => async () => {
      const response = 
            (await TradeActionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getTradeHistoryByCriteria(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TradeActionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_TradeActionAdmin.TradeHistoryByCriteria, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  