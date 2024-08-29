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
import { WalletApi } from "../WalletApi.js"

import { PlatformWallet } from '../../generated-definitions/PlatformWallet.js'
import { WalletTransactionPagingSlicedResult } from '../../generated-definitions/WalletTransactionPagingSlicedResult.js'


export enum Key_Wallet {
  UserMeWallet_ByCurrencyCode = 'Platform.Wallet.UserMeWallet_ByCurrencyCode',
Wallet_ByUserId_ByCurrencyCode = 'Platform.Wallet.Wallet_ByUserId_ByCurrencyCode',
Transactions_ByUserId_ByCurrencyCode = 'Platform.Wallet.Transactions_ByUserId_ByCurrencyCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Wallet.UserMeWallet_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletApi_GetUserMeWallet_ByCurrencyCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { currencyCode:string },
    options?: Omit<UseQueryOptions<PlatformWallet, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlatformWallet>) => void
  ): UseQueryResult<PlatformWallet, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useWalletApi_GetUserMeWallet_ByCurrencyCode>[1]
  ) => async () => {
      const response = 
            (await WalletApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUserMeWallet_ByCurrencyCode(input.currencyCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlatformWallet, AxiosError<ApiError>>({
    queryKey: [Key_Wallet.UserMeWallet_ByCurrencyCode, input],
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
 *    queryKey: [Key_Wallet.Wallet_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletApi_GetWallet_ByUserId_ByCurrencyCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, currencyCode:string },
    options?: Omit<UseQueryOptions<PlatformWallet, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlatformWallet>) => void
  ): UseQueryResult<PlatformWallet, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useWalletApi_GetWallet_ByUserId_ByCurrencyCode>[1]
  ) => async () => {
      const response = 
            (await WalletApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getWallet_ByUserId_ByCurrencyCode(input.userId, input.currencyCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlatformWallet, AxiosError<ApiError>>({
    queryKey: [Key_Wallet.Wallet_ByUserId_ByCurrencyCode, input],
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
 *    queryKey: [Key_Wallet.Transactions_ByUserId_ByCurrencyCode, input]
 * }
 * ```
 */
export const useWalletApi_GetTransactions_ByUserId_ByCurrencyCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, currencyCode:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<WalletTransactionPagingSlicedResult>) => void
  ): UseQueryResult<WalletTransactionPagingSlicedResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useWalletApi_GetTransactions_ByUserId_ByCurrencyCode>[1]
  ) => async () => {
      const response = 
            (await WalletApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getTransactions_ByUserId_ByCurrencyCode(input.userId, input.currencyCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<WalletTransactionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Wallet.Transactions_ByUserId_ByCurrencyCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  