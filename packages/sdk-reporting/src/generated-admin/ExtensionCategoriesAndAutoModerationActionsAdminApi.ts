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
import { ActionApiRequest } from '../generated-definitions/ActionApiRequest.js'
import { ActionApiResponse } from '../generated-definitions/ActionApiResponse.js'
import { ActionListApiResponse } from '../generated-definitions/ActionListApiResponse.js'
import { ExtensionCategoryApiRequest } from '../generated-definitions/ExtensionCategoryApiRequest.js'
import { ExtensionCategoryApiResponse } from '../generated-definitions/ExtensionCategoryApiResponse.js'
import { ExtensionCategoryListApiResponse } from '../generated-definitions/ExtensionCategoryListApiResponse.js'
import { ExtensionCategoriesAndAutoModerationActionsAdmin$ } from './endpoints/ExtensionCategoriesAndAutoModerationActionsAdmin$.js'


export function ExtensionCategoriesAndAutoModerationActionsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get a list of auto moderation actions 
   */
  async function getExtensionActions(): Promise<AxiosResponse<ActionListApiResponse>> {
    const $ = new ExtensionCategoriesAndAutoModerationActionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getExtensionActions()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create auto moderation action 
   */
  async function createExtensionAction(data: ActionApiRequest): Promise<AxiosResponse<ActionApiResponse>> {
    const $ = new ExtensionCategoriesAndAutoModerationActionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createExtensionAction(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get a list of extension category data with the specified name 
   */
  async function getExtensionCategories( queryParams?: {order?: 'asc' | 'ascending' | 'desc' | 'descending', sortBy?: 'extensionCategory' | 'extensionCategoryName'}): Promise<AxiosResponse<ExtensionCategoryListApiResponse>> {
    const $ = new ExtensionCategoriesAndAutoModerationActionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getExtensionCategories( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create extension category data 
   */
  async function createExtensionCategory(data: ExtensionCategoryApiRequest): Promise<AxiosResponse<ExtensionCategoryApiResponse>> {
    const $ = new ExtensionCategoriesAndAutoModerationActionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createExtensionCategory(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getExtensionActions,createExtensionAction,getExtensionCategories,createExtensionCategory,
  }
}
  