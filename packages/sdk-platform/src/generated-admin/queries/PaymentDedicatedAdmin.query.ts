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
import { PaymentDedicatedAdminApi } from "../PaymentDedicatedAdminApi.js"

import { ExternalPaymentOrderCreate } from '../../generated-definitions/ExternalPaymentOrderCreate.js'
import { PaymentOrderCreateResult } from '../../generated-definitions/PaymentOrderCreateResult.js'
import { PaymentOrderRefund } from '../../generated-definitions/PaymentOrderRefund.js'
import { PaymentOrderRefundResult } from '../../generated-definitions/PaymentOrderRefundResult.js'
import { PaymentOrderSyncResult } from '../../generated-definitions/PaymentOrderSyncResult.js'


export enum Key_PaymentDedicatedAdmin {
  PaymentOrders = 'Platform.PaymentDedicatedAdmin.PaymentOrders',
PaymentOrder = 'Platform.PaymentDedicatedAdmin.PaymentOrder',
RefundPayment_ByPaymentOrderNo = 'Platform.PaymentDedicatedAdmin.RefundPayment_ByPaymentOrderNo',

}

  

export const usePaymentDedicatedAdminApi_GetPaymentOrders = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {end: string | null, start: string | null, nextEvaluatedKey?: string | null} },
    options?: Omit<UseQueryOptions<PaymentOrderSyncResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentOrderSyncResult>) => void
  ): UseQueryResult<PaymentOrderSyncResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentDedicatedAdminApi_GetPaymentOrders>[1]
  ) => async () => {
      const response = 
            (await PaymentDedicatedAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentOrders(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentOrderSyncResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentDedicatedAdmin.PaymentOrders, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentDedicatedAdminApi_CreatePaymentOrder = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PaymentOrderCreateResult, AxiosError<ApiError>, SdkSetConfigParam & { data: ExternalPaymentOrderCreate }>, 'mutationKey'>,
    callback?: (data: PaymentOrderCreateResult) => void
  ): UseMutationResult<PaymentOrderCreateResult, AxiosError<ApiError>, SdkSetConfigParam & { data: ExternalPaymentOrderCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ExternalPaymentOrderCreate }) => {
      const response = 
            (await PaymentDedicatedAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPaymentOrder(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentDedicatedAdmin.PaymentOrder],
    mutationFn,
    ...options
  })
}
  
  

export const usePaymentDedicatedAdminApi_UpdateRefundPayment_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PaymentOrderRefundResult, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderRefund }>, 'mutationKey'>,
    callback?: (data: PaymentOrderRefundResult) => void
  ): UseMutationResult<PaymentOrderRefundResult, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderRefund }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { paymentOrderNo:string, data: PaymentOrderRefund }) => {
      const response = 
            (await PaymentDedicatedAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRefundPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentDedicatedAdmin.RefundPayment_ByPaymentOrderNo],
    mutationFn,
    ...options
  })
}
  
  
  