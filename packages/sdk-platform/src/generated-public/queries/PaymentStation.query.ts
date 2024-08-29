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
import { PaymentStationApi } from "../PaymentStationApi.js"

import { Customization } from '../../generated-definitions/Customization.js'
import { PaymentMethodArray } from '../../generated-definitions/PaymentMethodArray.js'
import { PaymentOrderDetails } from '../../generated-definitions/PaymentOrderDetails.js'
import { PaymentOrderPaidResult } from '../../generated-definitions/PaymentOrderPaidResult.js'
import { PaymentProcessResult } from '../../generated-definitions/PaymentProcessResult.js'
import { PaymentToken } from '../../generated-definitions/PaymentToken.js'
import { PaymentUrl } from '../../generated-definitions/PaymentUrl.js'
import { PaymentUrlCreate } from '../../generated-definitions/PaymentUrlCreate.js'
import { TaxResult } from '../../generated-definitions/TaxResult.js'


export enum Key_PaymentStation {
  PaymentTax = 'Platform.PaymentStation.PaymentTax',
PaymentLink = 'Platform.PaymentStation.PaymentLink',
PaymentQrcode = 'Platform.PaymentStation.PaymentQrcode',
PaymentMethods = 'Platform.PaymentStation.PaymentMethods',
PaymentReturnurl = 'Platform.PaymentStation.PaymentReturnurl',
PaymentPublicconfig = 'Platform.PaymentStation.PaymentPublicconfig',
PaymentCustomization = 'Platform.PaymentStation.PaymentCustomization',
PayPayment_ByPaymentOrderNo = 'Platform.PaymentStation.PayPayment_ByPaymentOrderNo',
InfoPayment_ByPaymentOrderNo = 'Platform.PaymentStation.InfoPayment_ByPaymentOrderNo',
StatusPayment_ByPaymentOrderNo = 'Platform.PaymentStation.StatusPayment_ByPaymentOrderNo',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PaymentStation.PaymentTax, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentTax = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {paymentOrderNo: string | null, paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', zipCode?: string | null} },
    options?: Omit<UseQueryOptions<TaxResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TaxResult>) => void
  ): UseQueryResult<TaxResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetPaymentTax>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentTax(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TaxResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentTax, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentStationApi_CreatePaymentLink = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PaymentUrl, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentUrlCreate }>, 'mutationKey'>,
    callback?: (data: PaymentUrl) => void
  ): UseMutationResult<PaymentUrl, AxiosError<ApiError>, SdkSetConfigParam & { data: PaymentUrlCreate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: PaymentUrlCreate }) => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPaymentLink(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentStation.PaymentLink],
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
 *    queryKey: [Key_PaymentStation.PaymentQrcode, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentQrcode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {code: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetPaymentQrcode>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentQrcode(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentQrcode, input],
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
 *    queryKey: [Key_PaymentStation.PaymentMethods, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentMethods = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {paymentOrderNo: string | null} },
    options?: Omit<UseQueryOptions<PaymentMethodArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentMethodArray>) => void
  ): UseQueryResult<PaymentMethodArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetPaymentMethods>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentMethods(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentMethodArray, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentMethods, input],
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
 *    queryKey: [Key_PaymentStation.PaymentReturnurl, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentReturnurl = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {orderNo: string | null, paymentOrderNo: string | null, paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', returnUrl: string | null, PayerID?: string | null, foreinginvoice?: string | null, invoice_id?: string | null, payload?: string | null, redirectResult?: string | null, resultCode?: string | null, sessionId?: string | null, status?: string | null, token?: string | null, type?: string | null, user_id?: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetPaymentReturnurl>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentReturnurl(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentReturnurl, input],
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
 *    queryKey: [Key_PaymentStation.PaymentPublicconfig, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentPublicconfig = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', region: string | null, sandbox?: boolean | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetPaymentPublicconfig>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentPublicconfig(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentPublicconfig, input],
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
 *    queryKey: [Key_PaymentStation.PaymentCustomization, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetPaymentCustomization = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {paymentProvider: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', region: string | null, sandbox?: boolean | null} },
    options?: Omit<UseQueryOptions<Customization, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<Customization>) => void
  ): UseQueryResult<Customization, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetPaymentCustomization>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPaymentCustomization(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<Customization, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.PaymentCustomization, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePaymentStationApi_CreatePayPayment_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PaymentProcessResult, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentToken, queryParams?: {paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', zipCode?: string | null} }>, 'mutationKey'>,
    callback?: (data: PaymentProcessResult) => void
  ): UseMutationResult<PaymentProcessResult, AxiosError<ApiError>, SdkSetConfigParam & { paymentOrderNo:string, data: PaymentToken, queryParams?: {paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', zipCode?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { paymentOrderNo:string, data: PaymentToken, queryParams?: {paymentProvider?: 'ADYEN' | 'ALIPAY' | 'CHECKOUT' | 'NEONPAY' | 'PAYPAL' | 'STRIPE' | 'WALLET' | 'WXPAY' | 'XSOLLA', zipCode?: string | null} }) => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPayPayment_ByPaymentOrderNo(input.paymentOrderNo, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PaymentStation.PayPayment_ByPaymentOrderNo],
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
 *    queryKey: [Key_PaymentStation.InfoPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetInfoPayment_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { paymentOrderNo:string },
    options?: Omit<UseQueryOptions<PaymentOrderDetails, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentOrderDetails>) => void
  ): UseQueryResult<PaymentOrderDetails, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetInfoPayment_ByPaymentOrderNo>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInfoPayment_ByPaymentOrderNo(input.paymentOrderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentOrderDetails, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.InfoPayment_ByPaymentOrderNo, input],
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
 *    queryKey: [Key_PaymentStation.StatusPayment_ByPaymentOrderNo, input]
 * }
 * ```
 */
export const usePaymentStationApi_GetStatusPayment_ByPaymentOrderNo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { paymentOrderNo:string },
    options?: Omit<UseQueryOptions<PaymentOrderPaidResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaymentOrderPaidResult>) => void
  ): UseQueryResult<PaymentOrderPaidResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePaymentStationApi_GetStatusPayment_ByPaymentOrderNo>[1]
  ) => async () => {
      const response = 
            (await PaymentStationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatusPayment_ByPaymentOrderNo(input.paymentOrderNo))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaymentOrderPaidResult, AxiosError<ApiError>>({
    queryKey: [Key_PaymentStation.StatusPayment_ByPaymentOrderNo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  