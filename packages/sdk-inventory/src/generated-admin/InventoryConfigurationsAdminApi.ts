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
import { CreateInventoryConfigurationReq } from '../generated-definitions/CreateInventoryConfigurationReq.js'
import { InventoryConfigurationReq } from '../generated-definitions/InventoryConfigurationReq.js'
import { InventoryConfigurationResp } from '../generated-definitions/InventoryConfigurationResp.js'
import { ListInventoryConfigurationsResp } from '../generated-definitions/ListInventoryConfigurationsResp.js'
import { InventoryConfigurationsAdmin$ } from './endpoints/InventoryConfigurationsAdmin$.js'


export function InventoryConfigurationsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   *  Listing all inventory configurations in a namespace. The response body will be in the form of standard pagination. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]  
   */
  async function getInventoryConfigurations( queryParams?: {code?: string | null, limit?: number, offset?: number, sortBy?: 'code' | 'code:asc' | 'code:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc'}): Promise<AxiosResponse<ListInventoryConfigurationsResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInventoryConfigurations( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Creating inventory configuration. There cannot be one inventory configuration duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [CREATE]  
   */
  async function createInventoryConfiguration(data: CreateInventoryConfigurationReq): Promise<AxiosResponse<InventoryConfigurationResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createInventoryConfiguration(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Deleting an inventory configuration. If an inventory already reference this type (i.e. STATUS is &#34;TIED&#34;), then the type cannot be deleted anymore. ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [DELETE]  
   */
  async function deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId:string): Promise<AxiosResponse<unknown>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Getting an inventory configuration info. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [READ]  
   */
  async function getInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId:string): Promise<AxiosResponse<InventoryConfigurationResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Updating inventory configuration. There cannot be duplicate code per namespace. Permission: ADMIN:NAMESPACE:{namespace}:INVENTORY:CONFIGURATION [UPDATE]  
   */
  async function updateInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId:string, data: InventoryConfigurationReq): Promise<AxiosResponse<InventoryConfigurationResp>> {
    const $ = new InventoryConfigurationsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateInventoryConfiguration_ByInventoryConfigurationId(inventoryConfigurationId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getInventoryConfigurations,createInventoryConfiguration,deleteInventoryConfiguration_ByInventoryConfigurationId,getInventoryConfiguration_ByInventoryConfigurationId,updateInventoryConfiguration_ByInventoryConfigurationId,
  }
}
  