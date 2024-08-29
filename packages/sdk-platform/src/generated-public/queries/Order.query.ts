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
import { OrderApi } from "../OrderApi.js"

import { OrderCreate } from '../../generated-definitions/OrderCreate.js'
import { OrderDiscountPreviewRequest } from '../../generated-definitions/OrderDiscountPreviewRequest.js'
import { OrderDiscountPreviewResponse } from '../../generated-definitions/OrderDiscountPreviewResponse.js'
import { OrderHistoryInfoArray } from '../../generated-definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../../generated-definitions/OrderInfo.js'
import { OrderPagingSlicedResult } from '../../generated-definitions/OrderPagingSlicedResult.js'


export enum Key_Order {
  Orders_ByUserId = 'Platform.Order.Orders_ByUserId',
Order_ByUserId = 'Platform.Order.Order_ByUserId',
Order_ByUserId_ByOrderNo = 'Platform.Order.Order_ByUserId_ByOrderNo',
Cancel_ByUserId_ByOrderNo = 'Platform.Order.Cancel_ByUserId_ByOrderNo',
OrderDiscountPreview_ByUserId = 'Platform.Order.OrderDiscountPreview_ByUserId',
History_ByUserId_ByOrderNo = 'Platform.Order.History_ByUserId_ByOrderNo',
ReceiptPdf_ByUserId_ByOrderNo = 'Platform.Order.ReceiptPdf_ByUserId_ByOrderNo',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Order.Orders_ByUserId, input]
 * }
 * ```
 */
export const useOrderApi_GetOrders_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {discounted?: boolean | null, itemId?: string | null, limit?: number, offset?: number, status?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'CHARGED' | 'CLOSED' | 'DELETED' | 'FULFILLED' | 'FULFILL_FAILED' | 'INIT' | 'REFUNDED' | 'REFUNDING' | 'REFUND_FAILED'} },
    options?: Omit<UseQueryOptions<OrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderPagingSlicedResult>) => void
  ): UseQueryResult<OrderPagingSlicedResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderApi_GetOrders_ByUserId>[1]
  ) => async () => {
      const response = 
            (await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrders_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_Order.Orders_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderApi_CreateOrder_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: OrderCreate }>, 'mutationKey'>,
    callback?: (data: OrderInfo) => void
  ): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: OrderCreate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: OrderCreate }) => {
      const response = 
            (await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createOrder_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Order.Order_ByUserId],
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
 *    queryKey: [Key_Order.Order_ByUserId_ByOrderNo, input]
 * }
 * ```
 */
export const useOrderApi_GetOrder_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, orderNo:string },
    options?: Omit<UseQueryOptions<OrderInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderInfo>) => void
  ): UseQueryResult<OrderInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderApi_GetOrder_ByUserId_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOrder_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_Order.Order_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOrderApi_UpdateCancel_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string }>, 'mutationKey'>,
    callback?: (data: OrderInfo) => void
  ): UseMutationResult<OrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, orderNo:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, orderNo:string }) => {
      const response = 
            (await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCancel_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Order.Cancel_ByUserId_ByOrderNo],
    mutationFn,
    ...options
  })
}
  
  

export const useOrderApi_CreateOrderDiscountPreview_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OrderDiscountPreviewResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: OrderDiscountPreviewRequest }>, 'mutationKey'>,
    callback?: (data: OrderDiscountPreviewResponse) => void
  ): UseMutationResult<OrderDiscountPreviewResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: OrderDiscountPreviewRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: OrderDiscountPreviewRequest }) => {
      const response = 
            (await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createOrderDiscountPreview_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Order.OrderDiscountPreview_ByUserId],
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
 *    queryKey: [Key_Order.History_ByUserId_ByOrderNo, input]
 * }
 * ```
 */
export const useOrderApi_GetHistory_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, orderNo:string },
    options?: Omit<UseQueryOptions<OrderHistoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OrderHistoryInfoArray>) => void
  ): UseQueryResult<OrderHistoryInfoArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderApi_GetHistory_ByUserId_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getHistory_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OrderHistoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Order.History_ByUserId_ByOrderNo, input],
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
 *    queryKey: [Key_Order.ReceiptPdf_ByUserId_ByOrderNo, input]
 * }
 * ```
 */
export const useOrderApi_GetReceiptPdf_ByUserId_ByOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, orderNo:string },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOrderApi_GetReceiptPdf_ByUserId_ByOrderNo>[1]
  ) => async () => {
      const response = 
            (await OrderApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getReceiptPdf_ByUserId_ByOrderNo(input.userId, input.orderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Order.ReceiptPdf_ByUserId_ByOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  