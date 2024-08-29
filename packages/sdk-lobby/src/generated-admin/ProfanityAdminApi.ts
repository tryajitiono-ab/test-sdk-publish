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
import { AdminAddProfanityFilterIntoListRequest } from '../generated-definitions/AdminAddProfanityFilterIntoListRequest.js'
import { AdminAddProfanityFiltersRequest } from '../generated-definitions/AdminAddProfanityFiltersRequest.js'
import { AdminCreateProfanityListRequest } from '../generated-definitions/AdminCreateProfanityListRequest.js'
import { AdminDeleteProfanityFilterRequest } from '../generated-definitions/AdminDeleteProfanityFilterRequest.js'
import { AdminGetProfanityListFiltersV1Response } from '../generated-definitions/AdminGetProfanityListFiltersV1Response.js'
import { AdminGetProfanityListsListResponseArray } from '../generated-definitions/AdminGetProfanityListsListResponseArray.js'
import { AdminSetProfanityRuleForNamespaceRequest } from '../generated-definitions/AdminSetProfanityRuleForNamespaceRequest.js'
import { AdminUpdateProfanityList } from '../generated-definitions/AdminUpdateProfanityList.js'
import { AdminVerifyMessageProfanityRequest } from '../generated-definitions/AdminVerifyMessageProfanityRequest.js'
import { AdminVerifyMessageProfanityResponse } from '../generated-definitions/AdminVerifyMessageProfanityResponse.js'
import { DebugProfanityFilterRequest } from '../generated-definitions/DebugProfanityFilterRequest.js'
import { ProfanityFilterArray } from '../generated-definitions/ProfanityFilterArray.js'
import { ProfanityRule } from '../generated-definitions/ProfanityRule.js'
import { ProfanityAdmin$ } from './endpoints/ProfanityAdmin$.js'


export function ProfanityAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get current profanity rule 
   */
  async function getProfanityRule(): Promise<AxiosResponse<ProfanityRule>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfanityRule()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Set current profanity rule 
   */
  async function updateProfanityRule(data: AdminSetProfanityRuleForNamespaceRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfanityRule(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get lists 
   */
  async function getProfanityLists(): Promise<AxiosResponse<AdminGetProfanityListsListResponseArray>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getProfanityLists()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a new list 
   */
  async function createProfanityList(data: AdminCreateProfanityListRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createProfanityList(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Verify a message directly from the UI or other services 
   */
  async function fetchProfanityVerify(data: AdminVerifyMessageProfanityRequest): Promise<AxiosResponse<AdminVerifyMessageProfanityResponse>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchProfanityVerify(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a list include all filters inside of it 
   */
  async function deleteProfanityList_ByList(list:string): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteProfanityList_ByList(list, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update the list 
   */
  async function updateProfanityList_ByList(list:string, data: AdminUpdateProfanityList): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateProfanityList_ByList(list, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get the list of filters that would modify the phrase 
   */
  async function fetchProfanityFilterDebug(data: DebugProfanityFilterRequest): Promise<AxiosResponse<ProfanityFilterArray>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchProfanityFilterDebug(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get the list of filters inside the list. 
   */
  async function getFiltersProfanity_ByList(list:string): Promise<AxiosResponse<AdminGetProfanityListFiltersV1Response>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getFiltersProfanity_ByList(list, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Add a single filter into the list 
   */
  async function createFilterProfanity_ByList(list:string, data: AdminAddProfanityFilterIntoListRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterProfanity_ByList(list, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Add multiple filters into the list 
   */
  async function createFilterBulkProfanity_ByList(list:string, data: AdminAddProfanityFiltersRequest): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterBulkProfanity_ByList(list, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete the filter from the list 
   */
  async function createFilterDeleteProfanity_ByList(list:string, data: AdminDeleteProfanityFilterRequest): Promise<AxiosResponse<ProfanityFilterArray>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterDeleteProfanity_ByList(list, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Import a file with filters 
   */
  async function createFilterBulkFileProfanity_ByList(list:string, data: number[]): Promise<AxiosResponse<unknown>> {
    const $ = new ProfanityAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createFilterBulkFileProfanity_ByList(list, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getProfanityRule,updateProfanityRule,getProfanityLists,createProfanityList,fetchProfanityVerify,deleteProfanityList_ByList,updateProfanityList_ByList,fetchProfanityFilterDebug,getFiltersProfanity_ByList,createFilterProfanity_ByList,createFilterBulkProfanity_ByList,createFilterDeleteProfanity_ByList,createFilterBulkFileProfanity_ByList,
  }
}
  