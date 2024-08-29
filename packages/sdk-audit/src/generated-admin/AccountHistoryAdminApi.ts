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
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { PaginatedAccountHistoryResponse } from '../generated-definitions/PaginatedAccountHistoryResponse.js'
import { AccountHistoryAdmin$ } from './endpoints/AccountHistoryAdmin$.js'


export function AccountHistoryAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
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
   * This API is used to query admin own account histories. ------- Supported **property**: - display_name - unique_display_name - username - country - date_of_birth - email - password  
   */
  async function getUsersMeAccountHistories( queryParams?: {endDate?: number, limit?: number, offset?: number, property?: string | null, startDate?: number}): Promise<AxiosResponse<PaginatedAccountHistoryResponse>> {
    const $ = new AccountHistoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeAccountHistories( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to query user account histories. **Note**: the namespace should be the publisher namespace and the user id should be publisher user id ------- Supported **property**: - display_name - unique_display_name - username - country - date_of_birth - email - password  
   */
  async function getAccountHistories_ByUserId(userId:string,  queryParams?: {endDate?: number, limit?: number, offset?: number, property?: string | null, startDate?: number}): Promise<AxiosResponse<PaginatedAccountHistoryResponse>> {
    const $ = new AccountHistoryAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAccountHistories_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getUsersMeAccountHistories,getAccountHistories_ByUserId,
  }
}
  