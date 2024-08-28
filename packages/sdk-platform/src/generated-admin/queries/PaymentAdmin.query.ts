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
import { PaymentAdminApi } from "../PaymentAdminApi.js"

import { NotificationProcessResult } from '../../generated-definitions/NotificationProcessResult.js'
import { PaymentNotificationPagingSlicedResult } from '../../generated-definitions/PaymentNotificationPagingSlicedResult.js'
import { PaymentOrderChargeRequest } from '../../generated-definitions/PaymentOrderChargeRequest.js'
import { PaymentOrderChargeStatus } from '../../generated-definitions/PaymentOrderChargeStatus.js'
import { PaymentOrderCreate } from '../../generated-definitions/PaymentOrderCreate.js'
import { PaymentOrderInfo } from '../../generated-definitions/PaymentOrderInfo.js'
import { PaymentOrderNotifySimulation } from '../../generated-definitions/PaymentOrderNotifySimulation.js'
import { PaymentOrderPagingSlicedResult } from '../../generated-definitions/PaymentOrderPagingSlicedResult.js'
import { PaymentOrderRefund } from '../../generated-definitions/PaymentOrderRefund.js'


export enum Key_PaymentAdmin {
  PaymentOrders = 'Platform.PaymentAdmin.PaymentOrders',
PaymentNotifications = 'Platform.PaymentAdmin.PaymentNotifications',
PaymentOrdersByExtTxId = 'Platform.PaymentAdmin.PaymentOrdersByExtTxId',
PaymentOrder_ByUserId = 'Platform.PaymentAdmin.PaymentOrder_ByUserId',
PaymentOrder_ByPaymentOrderNo = 'Platform.PaymentAdmin.PaymentOrder_ByPaymentOrderNo',
StatusPayment_ByPaymentOrderNo = 'Platform.PaymentAdmin.StatusPayment_ByPaymentOrderNo',
SimulateNotificationPayment_ByPaymentOrderNo = 'Platform.PaymentAdmin.SimulateNotificationPayment_ByPaymentOrderNo',
RefundPayment_ByUserId_ByPaymentOrderNo = 'Platform.PaymentAdmin.RefundPayment_ByUserId_ByPaymentOrderNo',

}

  

export const usePaymentAdminApi_GetPaymentOrders = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {channel?: 'EXTERNAL' | 'INTERNAL', extTxId?: string | null, limit?: number, offset?: number, status?: 'AUTHORISED' | 'AUTHORISE_FAILED' | 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'CHARGED' | 'CHARGE_FAILED' | 'DELETED' | 'INIT' | 'NOTIFICATION_OF_CHARGEBACK' | 'REFUNDED' | 'REFUNDING' | 'REFUND_FAILED' | 'REQUEST_FOR_INFORMATION'} },
    options?: Omit<UseQueryOptions<PaymentOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentOrderPagingSlicedResult>) => void
  ): UseQueryResult<PaymentOrderPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentAdminApi_GetPaymentOrders>[1]
  ) => async () => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentOrders(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentAdminApi_GetPaymentNotifications = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {endDate?: string | null, externalId?: string | null, limit?: number, notificationSource?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', notificationType?: string | null, offset?: number, paymentOrderNo?: string | null, startDate?: string | null, status?: 'ERROR' | 'IGNORED' | 'PROCESSED' | 'WARN'} },
    options?: Omit<UseQueryOptions<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentNotificationPagingSlicedResult>) => void
  ): UseQueryResult<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentAdminApi_GetPaymentNotifications>[1]
  ) => async () => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentNotifications(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentNotificationPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentNotifications, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentAdminApi_GetPaymentOrdersByExtTxId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {extTxId: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentAdminApi_GetPaymentOrdersByExtTxId>[1]
  ) => async () => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentOrdersByExtTxId(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrdersByExtTxId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentAdminApi_CreatePaymentOrder_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PaymentOrderCreate }>, 'mutationKey'>,
    callback?: (data: PaymentOrderInfo) => void
  ): UseMutationResult<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PaymentOrderCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: PaymentOrderCreate }) => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPaymentOrder_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentAdmin.PaymentOrder_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const usePaymentAdminApi_GetPaymentOrder_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { paymentOrderNo:string },
    options?: Omit<UseQueryOptions<PaymentOrderInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentOrderInfo>) => void
  ): UseQueryResult<PaymentOrderInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentAdminApi_GetPaymentOrder_ByPaymentOrderNo>[1]
  ) => async () => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentOrder_ByPaymentOrderNo(input.paymentOrderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentOrderInfo, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentAdminApi_UpdatePaymentOrder_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderChargeRequest }>, 'mutationKey'>,
    callback?: (data: PaymentOrderInfo) => void
  ): UseMutationResult<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderChargeRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderChargeRequest }) => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePaymentOrder_ByPaymentOrderNo(input.paymentOrderNo, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentAdmin.PaymentOrder_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
  
  

export const usePaymentAdminApi_GetStatusPayment_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { paymentOrderNo:string },
    options?: Omit<UseQueryOptions<PaymentOrderChargeStatus, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentOrderChargeStatus>) => void
  ): UseQueryResult<PaymentOrderChargeStatus, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentAdminApi_GetStatusPayment_ByPaymentOrderNo>[1]
  ) => async () => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatusPayment_ByPaymentOrderNo(input.paymentOrderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentOrderChargeStatus, AxiosError<ApiError>>({
    queryKey: [Key_PaymentAdmin.StatusPayment_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentAdminApi_UpdateSimulateNotificationPayment_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<NotificationProcessResult, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderNotifySimulation }>, 'mutationKey'>,
    callback?: (data: NotificationProcessResult) => void
  ): UseMutationResult<NotificationProcessResult, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderNotifySimulation }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderNotifySimulation }) => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSimulateNotificationPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentAdmin.SimulateNotificationPayment_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
  
  

export const usePaymentAdminApi_UpdateRefundPayment_ByUserId_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, paymentOrderNo:string, data: PaymentOrderRefund }>, 'mutationKey'>,
    callback?: (data: PaymentOrderInfo) => void
  ): UseMutationResult<PaymentOrderInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, paymentOrderNo:string, data: PaymentOrderRefund }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, paymentOrderNo:string, data: PaymentOrderRefund }) => {
      const response = 
            (await PaymentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRefundPayment_ByUserId_ByPaymentOrderNo(input.userId, input.paymentOrderNo, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentAdmin.RefundPayment_ByUserId_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
  
  
  