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
import { PluginRequest } from '../generated-definitions/PluginRequest.js'
import { PluginResponse } from '../generated-definitions/PluginResponse.js'
import { PluginConfigAdmin$ } from './endpoints/PluginConfigAdmin$.js'


export function PluginConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * ## Description This endpoints will delete grpc plugins configuration 
   */
  async function deletePlugin(): Promise<AxiosResponse<unknown>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlugin()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ## Description This endpoints will get grpc plugins configuration 
   */
  async function getPlugins(): Promise<AxiosResponse<PluginResponse>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlugins()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ## Description This endpoints will update grpc plugins configuration 
   */
  async function patchPlugin(data: PluginRequest): Promise<AxiosResponse<PluginResponse>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchPlugin(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * ## Description This endpoints will create new grpc plugins configuration per namespace 
   */
  async function createPlugin(data: PluginRequest): Promise<AxiosResponse<PluginResponse>> {
    const $ = new PluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlugin(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deletePlugin,getPlugins,patchPlugin,createPlugin,
  }
}
  