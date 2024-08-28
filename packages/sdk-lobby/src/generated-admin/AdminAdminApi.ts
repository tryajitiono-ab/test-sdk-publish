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
import { GlobalConfiguration } from '../generated-definitions/GlobalConfiguration.js'
import { PutGlobalConfigurationRequest } from '../generated-definitions/PutGlobalConfigurationRequest.js'
import { AdminAdmin$ } from './endpoints/AdminAdmin$.js'


export function AdminAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Delete of global configuration data. 
   */
  async function deleteGlobalConfiguration(): Promise<AxiosResponse<unknown>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGlobalConfiguration()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get dsmc global configuration. 
   */
  async function getGlobalConfigurations(): Promise<AxiosResponse<GlobalConfiguration>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGlobalConfigurations()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Upsert global configuration data. 
   */
  async function updateGlobalConfiguration(data: PutGlobalConfigurationRequest): Promise<AxiosResponse<GlobalConfiguration>> {
    const $ = new AdminAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGlobalConfiguration(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteGlobalConfiguration,getGlobalConfigurations,updateGlobalConfiguration,
  }
}
  