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
import { ListMatchFunctionsResponse } from '../generated-definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from '../generated-definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from '../generated-definitions/MatchFunctionRequest.js'
import { MatchFunctions$ } from './endpoints/MatchFunctions$.js'


export function MatchFunctionsApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * List existing match functions.  
   */
  async function getMatchFunctions( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<ListMatchFunctionsResponse>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMatchFunctions( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Creates a new matchmaking function.  
   */
  async function createMatchFunction(data: MatchFunctionRequest): Promise<AxiosResponse<unknown>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMatchFunction(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Deletes an existing match function.  
   */
  async function deleteMatchFunction_ByName(name:string): Promise<AxiosResponse<unknown>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMatchFunction_ByName(name, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update existing matchmaking function.  
   */
  async function updateMatchFunction_ByName(name:string, data: MatchFunctionRequest): Promise<AxiosResponse<MatchFunctionConfig>> {
    const $ = new MatchFunctions$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMatchFunction_ByName(name, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getMatchFunctions,createMatchFunction,deleteMatchFunction_ByName,updateMatchFunction_ByName,
  }
}
  