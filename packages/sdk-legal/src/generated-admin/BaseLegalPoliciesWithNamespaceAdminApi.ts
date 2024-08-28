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
import { CreateBasePolicyRequestV2 } from '../generated-definitions/CreateBasePolicyRequestV2.js'
import { CreateBasePolicyResponse } from '../generated-definitions/CreateBasePolicyResponse.js'
import { RetrieveBasePolicyResponse } from '../generated-definitions/RetrieveBasePolicyResponse.js'
import { RetrieveBasePolicyResponseArray } from '../generated-definitions/RetrieveBasePolicyResponseArray.js'
import { RetrievePolicyResponse } from '../generated-definitions/RetrievePolicyResponse.js'
import { RetrievePolicyTypeResponseArray } from '../generated-definitions/RetrievePolicyTypeResponseArray.js'
import { UpdateBasePolicyRequestV2 } from '../generated-definitions/UpdateBasePolicyRequestV2.js'
import { UpdateBasePolicyResponse } from '../generated-definitions/UpdateBasePolicyResponse.js'
import { BaseLegalPoliciesWithNamespaceAdmin$ } from './endpoints/BaseLegalPoliciesWithNamespaceAdmin$.js'


export function BaseLegalPoliciesWithNamespaceAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Retrieve all supported policy types. 
   */
  async function getPolicyTypes( queryParams: {limit: number, offset?: number}): Promise<AxiosResponse<RetrievePolicyTypeResponseArray>> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPolicyTypes( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve all base policies in the namespace. 
   */
  async function getBasePolicies( queryParams?: {visibleOnly?: boolean | null}): Promise<AxiosResponse<RetrieveBasePolicyResponseArray>> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBasePolicies( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a legal policy. 
   */
  async function createBasePolicy(data: CreateBasePolicyRequestV2): Promise<AxiosResponse<CreateBasePolicyResponse>> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createBasePolicy(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve a base policy. 
   */
  async function getBasePolicy_ByBasePolicyId(basePolicyId:string): Promise<AxiosResponse<RetrieveBasePolicyResponse>> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBasePolicy_ByBasePolicyId(basePolicyId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update an existing base policy. 
   */
  async function patchBasePolicy_ByBasePolicyId(basePolicyId:string, data: UpdateBasePolicyRequestV2): Promise<AxiosResponse<UpdateBasePolicyResponse>> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchBasePolicy_ByBasePolicyId(basePolicyId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve a Base Legal Policy based on a Particular Country. 
   */
  async function getCountry_ByBasePolicyId_ByCountryCode(basePolicyId:string, countryCode:string): Promise<AxiosResponse<RetrievePolicyResponse>> {
    const $ = new BaseLegalPoliciesWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCountry_ByBasePolicyId_ByCountryCode(basePolicyId, countryCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getPolicyTypes,getBasePolicies,createBasePolicy,getBasePolicy_ByBasePolicyId,patchBasePolicy_ByBasePolicyId,getCountry_ByBasePolicyId_ByCountryCode,
  }
}
  