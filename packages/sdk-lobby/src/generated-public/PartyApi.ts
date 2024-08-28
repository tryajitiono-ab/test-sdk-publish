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
import { PartyData } from '../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../generated-definitions/PartyPutCustomAttributesRequest.js'
import { PartyPutLimitSizeRequest } from '../generated-definitions/PartyPutLimitSizeRequest.js'
import { Party$ } from './endpoints/Party$.js'


export function PartyApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;load personal party data in a namespace based on Party ID &lt;br/&gt; Action Code: 50101 
   */
  async function getPartyParty_ByPartyId(partyId:string): Promise<AxiosResponse<PartyData>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPartyParty_ByPartyId(partyId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;Set party limit, only party leader can call this endpoint. 
   */
  async function updateLimitParty_ByPartyId(partyId:string, data: PartyPutLimitSizeRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLimitParty_ByPartyId(partyId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authorization &lt;br/&gt; &lt;br&gt;update party attributes in a namespace. 
   */
  async function updateAttributeParty_ByPartyId(partyId:string, data: PartyPutCustomAttributesRequest): Promise<AxiosResponse<PartyData>> {
    const $ = new Party$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAttributeParty_ByPartyId(partyId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getPartyParty_ByPartyId,updateLimitParty_ByPartyId,updateAttributeParty_ByPartyId,
  }
}
  