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
import { SubscriptionApi } from "../SubscriptionApi.js"

import { BillingHistoryPagingSlicedResult } from '../../generated-definitions/BillingHistoryPagingSlicedResult.js'
import { CancelRequest } from '../../generated-definitions/CancelRequest.js'
import { Subscribable } from '../../generated-definitions/Subscribable.js'
import { SubscribeRequest } from '../../generated-definitions/SubscribeRequest.js'
import { SubscriptionInfo } from '../../generated-definitions/SubscriptionInfo.js'
import { SubscriptionPagingSlicedResult } from '../../generated-definitions/SubscriptionPagingSlicedResult.js'


export enum Key_Subscription {
  Subscriptions_ByUserId = 'Platform.Subscription.Subscriptions_ByUserId',
Subscription_ByUserId = 'Platform.Subscription.Subscription_ByUserId',
Subscription_ByUserId_BySubscriptionId = 'Platform.Subscription.Subscription_ByUserId_BySubscriptionId',
SubscriptionsSubscribableByItemId_ByUserId = 'Platform.Subscription.SubscriptionsSubscribableByItemId_ByUserId',
Cancel_ByUserId_BySubscriptionId = 'Platform.Subscription.Cancel_ByUserId_BySubscriptionId',
History_ByUserId_BySubscriptionId = 'Platform.Subscription.History_ByUserId_BySubscriptionId',
BillingAccount_ByUserId_BySubscriptionId = 'Platform.Subscription.BillingAccount_ByUserId_BySubscriptionId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Subscription.Subscriptions_ByUserId, input]
 * }
 * ```
 */
export const useSubscriptionApi_GetSubscriptions_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {chargeStatus?: 'CHARGED' | 'CHARGE_FAILED' | 'NEVER' | 'RECURRING_CHARGING' | 'SETUP', itemId?: string | null, limit?: number, offset?: number, sku?: string | null, status?: 'ACTIVE' | 'CANCELLED' | 'EXPIRED' | 'INIT', subscribedBy?: 'PLATFORM' | 'USER'} },
    options?: Omit<UseQueryOptions<SubscriptionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SubscriptionPagingSlicedResult>) => void
  ): UseQueryResult<SubscriptionPagingSlicedResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSubscriptionApi_GetSubscriptions_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SubscriptionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSubscriptions_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SubscriptionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Subscription.Subscriptions_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSubscriptionApi_CreateSubscription_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SubscribeRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SubscribeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SubscribeRequest }) => {
      const response = 
            (await SubscriptionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSubscription_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Subscription.Subscription_ByUserId],
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
 *    queryKey: [Key_Subscription.Subscription_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionApi_GetSubscription_ByUserId_BySubscriptionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, subscriptionId:string },
    options?: Omit<UseQueryOptions<SubscriptionInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SubscriptionInfo>) => void
  ): UseQueryResult<SubscriptionInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSubscriptionApi_GetSubscription_ByUserId_BySubscriptionId>[1]
  ) => async () => {
      const response = 
            (await SubscriptionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSubscription_ByUserId_BySubscriptionId(input.userId, input.subscriptionId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SubscriptionInfo, AxiosError<ApiError>>({
    queryKey: [Key_Subscription.Subscription_ByUserId_BySubscriptionId, input],
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
 *    queryKey: [Key_Subscription.SubscriptionsSubscribableByItemId_ByUserId, input]
 * }
 * ```
 */
export const useSubscriptionApi_GetSubscriptionsSubscribableByItemId_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams: {itemId: string | null} },
    options?: Omit<UseQueryOptions<Subscribable, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<Subscribable>) => void
  ): UseQueryResult<Subscribable, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSubscriptionApi_GetSubscriptionsSubscribableByItemId_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SubscriptionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSubscriptionsSubscribableByItemId_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<Subscribable, AxiosError<ApiError>>({
    queryKey: [Key_Subscription.SubscriptionsSubscribableByItemId_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSubscriptionApi_UpdateCancel_ByUserId_BySubscriptionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, subscriptionId:string, data: CancelRequest }>, 'mutationKey'>,
    callback?: (data: SubscriptionInfo) => void
  ): UseMutationResult<SubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, subscriptionId:string, data: CancelRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, subscriptionId:string, data: CancelRequest }) => {
      const response = 
            (await SubscriptionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCancel_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Subscription.Cancel_ByUserId_BySubscriptionId],
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
 *    queryKey: [Key_Subscription.History_ByUserId_BySubscriptionId, input]
 * }
 * ```
 */
export const useSubscriptionApi_GetHistory_ByUserId_BySubscriptionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, subscriptionId:string,  queryParams?: {excludeFree?: boolean | null, limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<BillingHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BillingHistoryPagingSlicedResult>) => void
  ): UseQueryResult<BillingHistoryPagingSlicedResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSubscriptionApi_GetHistory_ByUserId_BySubscriptionId>[1]
  ) => async () => {
      const response = 
            (await SubscriptionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getHistory_ByUserId_BySubscriptionId(input.userId, input.subscriptionId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BillingHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Subscription.History_ByUserId_BySubscriptionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSubscriptionApi_UpdateBillingAccount_ByUserId_BySubscriptionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, subscriptionId:string }>, 'mutationKey'>,
    callback?: (data: SubscriptionInfo) => void
  ): UseMutationResult<SubscriptionInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, subscriptionId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, subscriptionId:string }) => {
      const response = 
            (await SubscriptionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateBillingAccount_ByUserId_BySubscriptionId(input.userId, input.subscriptionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Subscription.BillingAccount_ByUserId_BySubscriptionId],
    mutationFn,
    ...options
  })
}
  
  
  