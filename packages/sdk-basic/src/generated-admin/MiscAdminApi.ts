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
import { AddCountryGroupRequest } from '../generated-definitions/AddCountryGroupRequest.js'
import { AddCountryGroupResponse } from '../generated-definitions/AddCountryGroupResponse.js'
import { CountryGroupObject } from '../generated-definitions/CountryGroupObject.js'
import { CountryObjectArray } from '../generated-definitions/CountryObjectArray.js'
import { RetrieveCountryGroupResponseArray } from '../generated-definitions/RetrieveCountryGroupResponseArray.js'
import { UpdateCountryGroupRequest } from '../generated-definitions/UpdateCountryGroupRequest.js'
import { MiscAdmin$ } from './endpoints/MiscAdmin$.js'


export function MiscAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * @deprecated
   * List countries.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11204&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: country code list&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getMiscCountries( queryParams?: {lang?: string | null}): Promise<AxiosResponse<CountryObjectArray>> {
    const $ = new MiscAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscCountries( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * List languages.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11206&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: language list&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getMiscLanguages(): Promise<AxiosResponse<unknown>> {
    const $ = new MiscAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscLanguages()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * List time zones.&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11205&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: time zones&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getMiscTimezones(): Promise<AxiosResponse<unknown>> {
    const $ = new MiscAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscTimezones()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * List country groups. Will return all available country groups if the query param is not specified&lt;br&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11203&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: list of country groups&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getMiscCountrygroups( queryParams?: {groupCode?: string | null}): Promise<AxiosResponse<RetrieveCountryGroupResponseArray>> {
    const $ = new MiscAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMiscCountrygroups( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Add a country groups&lt;br&gt;Country code must follow ISO3166-1 alpha-2.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11201&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: newly created country group&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createMiscCountrygroup(data: AddCountryGroupRequest): Promise<AxiosResponse<AddCountryGroupResponse>> {
    const $ = new MiscAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMiscCountrygroup(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete a country groups by its country group code. This endpoint usually used for testing purpose to cleanup test data.&lt;br&gt; 
   */
  async function deleteMiscCountrygroup_ByCountryGroupCode(countryGroupCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new MiscAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMiscCountrygroup_ByCountryGroupCode(countryGroupCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a country groups. The countryGroupCode must be exist beforehand.&lt;br&gt;Valid update behaviour :&lt;br/&gt;- To update &lt;i&gt;countryGroupName&lt;/i&gt; only, do not include &lt;i&gt;countries&lt;/i&gt; key or just specify it with empty array.&lt;br/&gt;- To update &lt;i&gt;countries&lt;/i&gt; only, do not include &lt;i&gt;countryGroupName&lt;/i&gt; key or just specify it with blank value.&lt;br/&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Action code&lt;/i&gt;: 11202&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated country group&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateMiscCountrygroup_ByCountryGroupCode(countryGroupCode:string, data: UpdateCountryGroupRequest): Promise<AxiosResponse<CountryGroupObject>> {
    const $ = new MiscAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMiscCountrygroup_ByCountryGroupCode(countryGroupCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getMiscCountries,getMiscLanguages,getMiscTimezones,getMiscCountrygroups,createMiscCountrygroup,deleteMiscCountrygroup_ByCountryGroupCode,updateMiscCountrygroup_ByCountryGroupCode,
  }
}
  