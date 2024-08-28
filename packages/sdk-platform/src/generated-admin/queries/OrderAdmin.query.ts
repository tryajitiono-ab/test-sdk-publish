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
import { OrderAdminApi } from "../OrderAdminApi.js"

import { AdminOrderCreate } from '../../generated-definitions/AdminOrderCreate.js'
import { OrderGrantInfo } from '../../generated-definitions/OrderGrantInfo.js'
import { OrderHistoryInfoArray } from '../../generated-definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../../generated-definitions/OrderInfo.js'
import { OrderPagingResult } from '../../generated-definitions/OrderPagingResult.js'
import { OrderPagingSlicedResult } from '../../generated-definitions/OrderPagingSlicedResult.js'
import { OrderRefundCreate } from '../../generated-definitions/OrderRefundCreate.js'
import { OrderStatistics } from '../../generated-definitions/OrderStatistics.js'
import { OrderUpdate } from '../../generated-definitions/OrderUpdate.js'
import { PurchasedItemCount } from '../../generated-definitions/PurchasedItemCount.js'
import { TradeNotification } from '../../generated-definitions/TradeNotification.js'


export enum Key_OrderAdmin {
  Orders = 'Platform.OrderAdmin.Orders',
OrdersStats = 'Platform.OrderAdmin.OrdersStats',
Order_ByOrderNo = 'Platform.OrderAdmin.Order_ByOrderNo',
Orders_ByUserId = 'Platform.OrderAdmin.Orders_ByUserId',
Order_ByUserId = 'Platform.OrderAdmin.Order_ByUserId',
Refund_ByOrderNo = 'Platform.OrderAdmin.Refund_ByOrderNo',
Order_ByUserId_ByOrderNo = 'Platform.OrderAdmin.Order_ByUserId_ByOrderNo',
OrdersCountOfItem_ByUserId = 'Platform.OrderAdmin.OrdersCountOfItem_ByUserId',
Grant_ByUserId_ByOrderNo = 'Platform.OrderAdmin.Grant_ByUserId_ByOrderNo',
Fulfill_ByUserId_ByOrderNo = 'Platform.OrderAdmin.Fulfill_ByUserId_ByOrderNo',
History_ByUserId_ByOrderNo = 'Platform.OrderAdmin.History_ByUserId_ByOrderNo',
ReceiptPdf_ByUserId_ByOrderNo = 'Platform.OrderAdmin.ReceiptPdf_ByUserId_ByOrderNo',
Notification_ByUserId_ByOrderNo = 'Platform.OrderAdmin.Notification_ByUserId_ByOrderNo',

}

  

export const useOrderAdminApi_GetOrders = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {endTime?: string | null, limit?: number, offset?: number, orderNos?: string[], sortBy?: string | null, startTime?: string | null, status?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'CHARGED' | 'CLOSED' | 'DELETED' | 'FULFILLED' | 'FULFILL_FAILED' | 'INIT' | 'REFUNDED' | 'REFUNDING' | 'REFUND_FAILED', withTotal?: boolean | null} },
    options?: Omit<UseQueryOptions<OrderPagingResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderPagingResult>) => void
  ): UseQueryResult<OrderPagingResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetOrders>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrders(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderPagingResult, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Orders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_GetOrdersStats = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<OrderStatistics, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderStatistics>) => void
  ): UseQueryResult<OrderStatistics, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetOrdersStats>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrdersStats())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderStatistics, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.OrdersStats, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_GetOrder_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { orderNo:string },
    options?: Omit<UseQueryOptions<OrderInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderInfo>) => void
  ): UseQueryResult<OrderInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetOrder_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrder_ByOrderNo(input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Order_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_GetOrders_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {discounted?: boolean | null, itemId?: string | null, limit?: number, offset?: number, status?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'CHARGED' | 'CLOSED' | 'DELETED' | 'FULFILLED' | 'FULFILL_FAILED' | 'INIT' | 'REFUNDED' | 'REFUNDING' | 'REFUND_FAILED'} },
    options?: Omit<UseQueryOptions<OrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderPagingSlicedResult>) => void
  ): UseQueryResult<OrderPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetOrders_ByUserId>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrders_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Orders_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_CreateOrder_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AdminOrderCreate }>, 'mutationKey'>,
    callback?: (data: OrderInfo) => void
  ): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AdminOrderCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: AdminOrderCreate }) => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createOrder_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OrderAdmin.Order_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useOrderAdminApi_UpdateRefund_ByOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { orderNo:string, data: OrderRefundCreate }>, 'mutationKey'>,
    callback?: (data: OrderInfo) => void
  ): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { orderNo:string, data: OrderRefundCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { orderNo:string, data: OrderRefundCreate }) => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRefund_ByOrderNo(input.orderNo, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OrderAdmin.Refund_ByOrderNo],
    mutationFn,
    ...options
  })
}
  
  

export const useOrderAdminApi_GetOrder_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, orderNo:string },
    options?: Omit<UseQueryOptions<OrderInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderInfo>) => void
  ): UseQueryResult<OrderInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetOrder_ByUserId_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrder_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Order_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_UpdateOrder_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string, data: OrderUpdate }>, 'mutationKey'>,
    callback?: (data: OrderInfo) => void
  ): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string, data: OrderUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, orderNo:string, data: OrderUpdate }) => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateOrder_ByUserId_ByOrderNo(input.userId, input.orderNo, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OrderAdmin.Order_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}
  
  

export const useOrderAdminApi_GetOrdersCountOfItem_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams: {itemId: string | null} },
    options?: Omit<UseQueryOptions<PurchasedItemCount, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PurchasedItemCount>) => void
  ): UseQueryResult<PurchasedItemCount, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetOrdersCountOfItem_ByUserId>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrdersCountOfItem_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PurchasedItemCount, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.OrdersCountOfItem_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_GetGrant_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, orderNo:string },
    options?: Omit<UseQueryOptions<OrderGrantInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderGrantInfo>) => void
  ): UseQueryResult<OrderGrantInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetGrant_ByUserId_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGrant_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderGrantInfo, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.Grant_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_UpdateFulfill_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string }>, 'mutationKey'>,
    callback?: (data: OrderInfo) => void
  ): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, orderNo:string }) => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateFulfill_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OrderAdmin.Fulfill_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}
  
  

export const useOrderAdminApi_GetHistory_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, orderNo:string },
    options?: Omit<UseQueryOptions<OrderHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderHistoryInfoArray>) => void
  ): UseQueryResult<OrderHistoryInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetHistory_ByUserId_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getHistory_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.History_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_GetReceiptPdf_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, orderNo:string },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderAdminApi_GetReceiptPdf_ByUserId_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getReceiptPdf_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_OrderAdmin.ReceiptPdf_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderAdminApi_CreateNotification_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string, data: TradeNotification }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string, data: TradeNotification }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, orderNo:string, data: TradeNotification }) => {
      const response = 
            (await OrderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createNotification_ByUserId_ByOrderNo(input.userId, input.orderNo, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OrderAdmin.Notification_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}
  
  
  