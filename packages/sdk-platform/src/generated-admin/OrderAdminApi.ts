/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosResponse } from 'axios'
import { AdminOrderCreate } from '../generated-definitions/AdminOrderCreate.js'
import { OrderGrantInfo } from '../generated-definitions/OrderGrantInfo.js'
import { OrderHistoryInfoArray } from '../generated-definitions/OrderHistoryInfoArray.js'
import { OrderInfo } from '../generated-definitions/OrderInfo.js'
import { OrderPagingResult } from '../generated-definitions/OrderPagingResult.js'
import { OrderPagingSlicedResult } from '../generated-definitions/OrderPagingSlicedResult.js'
import { OrderRefundCreate } from '../generated-definitions/OrderRefundCreate.js'
import { OrderStatistics } from '../generated-definitions/OrderStatistics.js'
import { OrderUpdate } from '../generated-definitions/OrderUpdate.js'
import { PurchasedItemCount } from '../generated-definitions/PurchasedItemCount.js'
import { TradeNotification } from '../generated-definitions/TradeNotification.js'
import { OrderAdmin$ } from './endpoints/OrderAdmin$.js'


export function OrderAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * Query orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: query orders&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getOrders( queryParams?: {endTime?: string | null, limit?: number, offset?: number, orderNos?: string[], sortBy?: string | null, startTime?: string | null, status?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'CHARGED' | 'CLOSED' | 'DELETED' | 'FULFILLED' | 'FULFILL_FAILED' | 'INIT' | 'REFUNDED' | 'REFUNDING' | 'REFUND_FAILED', withTotal?: boolean | null}): Promise<AxiosResponse<OrderPagingResult>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOrders( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get Order Statistics.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order statistics&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getOrdersStats(): Promise<AxiosResponse<OrderStatistics>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOrdersStats()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get order by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order instance&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getOrder_ByOrderNo(orderNo:string): Promise<AxiosResponse<OrderInfo>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOrder_ByOrderNo(orderNo, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Query user orders.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getOrders_ByUserId(userId:string,  queryParams?: {discounted?: boolean | null, itemId?: string | null, limit?: number, offset?: number, status?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'CHARGED' | 'CLOSED' | 'DELETED' | 'FULFILLED' | 'FULFILL_FAILED' | 'INIT' | 'REFUNDED' | 'REFUNDING' | 'REFUND_FAILED'}): Promise<AxiosResponse<OrderPagingSlicedResult>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOrders_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Admin Create an order. The result contains the checkout link and payment token. User with permission SANDBOX will create sandbox order that not real paid for xsolla/alipay and not validate price for wxpay.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;It will be forbidden while the user is banned: ORDER_INITIATE or ORDER_AND_PAYMENT&lt;/li&gt;&lt;li&gt;sandbox default value is &lt;b&gt;false&lt;/b&gt;&lt;/li&gt;&lt;li&gt;platform default value is &lt;b&gt;Other&lt;/b&gt;&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: created order&lt;/li&gt;&lt;/ul&gt;&lt;h2&gt;Restrictions for ext field&lt;/h2&gt; 1. Cannot use &lt;b&gt;&#34;.&#34;&lt;/b&gt; as the key name - &lt;pre&gt;{ &#34;data.2&#34;: &#34;value&#34; }&lt;/pre&gt; 2. Cannot use &lt;b&gt;&#34;$&#34;&lt;/b&gt; as the prefix in key names - &lt;pre&gt;{ &#34;$data&#34;: &#34;value&#34; }&lt;/pre&gt; 
   */
  async function createOrder_ByUserId(userId:string, data: AdminOrderCreate): Promise<AxiosResponse<OrderInfo>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createOrder_ByUserId(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Refund order by orderNo. 
   */
  async function updateRefund_ByOrderNo(orderNo:string, data: OrderRefundCreate): Promise<AxiosResponse<OrderInfo>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRefund_ByOrderNo(orderNo, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get an order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getOrder_ByUserId_ByOrderNo(userId:string, orderNo:string): Promise<AxiosResponse<OrderInfo>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOrder_ByUserId_ByOrderNo(userId, orderNo, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update order status.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated order&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateOrder_ByUserId_ByOrderNo(userId:string, orderNo:string, data: OrderUpdate): Promise<AxiosResponse<OrderInfo>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateOrder_ByUserId_ByOrderNo(userId, orderNo, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to get the count of purchased item which is the order target.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Item purchased count&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getOrdersCountOfItem_ByUserId(userId:string,  queryParams: {itemId: string | null}): Promise<AxiosResponse<PurchasedItemCount>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOrdersCountOfItem_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Get user order grant that fulfilled by this order.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order grant&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getGrant_ByUserId_ByOrderNo(userId:string, orderNo:string): Promise<AxiosResponse<OrderGrantInfo>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGrant_ByUserId_ByOrderNo(userId, orderNo, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Fulfill an order if the order is charged but fulfill failed.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: fulfilled order&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateFulfill_ByUserId_ByOrderNo(userId:string, orderNo:string): Promise<AxiosResponse<OrderInfo>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateFulfill_ByUserId_ByOrderNo(userId, orderNo, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get user order history.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: get order history&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getHistory_ByUserId_ByOrderNo(userId:string, orderNo:string): Promise<AxiosResponse<OrderHistoryInfoArray>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getHistory_ByUserId_ByOrderNo(userId, orderNo, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Download user order receipt by orderNo.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: order receipt pdf&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getReceiptPdf_ByUserId_ByOrderNo(userId:string, orderNo:string): Promise<AxiosResponse<unknown>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getReceiptPdf_ByUserId_ByOrderNo(userId, orderNo, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;b&gt;[SERVICE COMMUNICATION ONLY]&lt;/b&gt; This API is used as a web hook for payment notification from justice payment service.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: Process result&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createNotification_ByUserId_ByOrderNo(userId:string, orderNo:string, data: TradeNotification): Promise<AxiosResponse<unknown>> {
    const $ = new OrderAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createNotification_ByUserId_ByOrderNo(userId, orderNo, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getOrders,getOrdersStats,getOrder_ByOrderNo,getOrders_ByUserId,createOrder_ByUserId,updateRefund_ByOrderNo,getOrder_ByUserId_ByOrderNo,updateOrder_ByUserId_ByOrderNo,getOrdersCountOfItem_ByUserId,getGrant_ByUserId_ByOrderNo,updateFulfill_ByUserId_ByOrderNo,getHistory_ByUserId_ByOrderNo,getReceiptPdf_ByUserId_ByOrderNo,createNotification_ByUserId_ByOrderNo,
  }
}
  