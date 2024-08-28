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
import { AccelbyteSDK, ApiUtils, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosDefaults, AxiosResponse, HeadersDefaults } from 'axios'
import { LateDiffRequest } from '../generated-definitions/LateDiffRequest.js'
import { PingResponse } from '../generated-definitions/PingResponse.js'
import { DiffCalculation$ } from './endpoints/DiffCalculation$.js'


export function DiffCalculationApi(sdk: AccelbyteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = sdkAssembly.axiosIntance

  axiosInstance.defaults = {...axiosInstance.defaults, requestConfig } as Omit<AxiosDefaults<any>, 'headers'> & {
    headers: HeadersDefaults & {
      [key: string]: any
    }
  }
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;Every request is registered into the queue first, and will be processed by the available Differ.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt; 
   */
  async function createDiff(data: LateDiffRequest): Promise<AxiosResponse<unknown>> {
    const $ = new DiffCalculation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiff(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  async function getPing(): Promise<AxiosResponse<PingResponse>> {
    const $ = new DiffCalculation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPing()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Perform diff calculation from buildA to buildB. The calculation will generate diff cache result that will be stored in the storage provider.&lt;/p&gt;&lt;p&gt;The Diffs calculation will be parallelized between the available Differ instances.&lt;/p&gt;&lt;p&gt;The &lt;b&gt;priority&lt;/b&gt; flag means that request will be set as priority inside the queue and always served first even if there’s existing non-priority request(s) beforehand.&lt;/p&gt;&lt;br/&gt;&lt;p&gt;Scope required: &lt;code&gt;publishing&lt;/code&gt;&lt;/p&gt; 
   */
  async function createDiff_v2(data: LateDiffRequest): Promise<AxiosResponse<unknown>> {
    const $ = new DiffCalculation$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiff_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createDiff,getPing,createDiff_v2,
  }
}
  