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
import { GrpcServerInfo } from '../generated-definitions/GrpcServerInfo.js'
import { LootBoxPluginConfigInfo } from '../generated-definitions/LootBoxPluginConfigInfo.js'
import { LootBoxPluginConfigUpdate } from '../generated-definitions/LootBoxPluginConfigUpdate.js'
import { RevocationPluginConfigInfo } from '../generated-definitions/RevocationPluginConfigInfo.js'
import { RevocationPluginConfigUpdate } from '../generated-definitions/RevocationPluginConfigUpdate.js'
import { SectionPluginConfigInfo } from '../generated-definitions/SectionPluginConfigInfo.js'
import { SectionPluginConfigUpdate } from '../generated-definitions/SectionPluginConfigUpdate.js'
import { ServicePluginConfigInfo } from '../generated-definitions/ServicePluginConfigInfo.js'
import { ServicePluginConfigUpdate } from '../generated-definitions/ServicePluginConfigUpdate.js'
import { ServicePluginConfigAdmin$ } from './endpoints/ServicePluginConfigAdmin$.js'


export function ServicePluginConfigAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Delete service plugin config 
   */
  async function deleteConfigServicePlugin(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfigServicePlugin()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Get service plugin config 
   */
  async function getConfigsServicePlugin(): Promise<AxiosResponse<ServicePluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigsServicePlugin()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Update catalog config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateConfigServicePlugin(data: ServicePluginConfigUpdate): Promise<AxiosResponse<ServicePluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateConfigServicePlugin(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete service plugin config. 
   */
  async function deleteCatalogPluginLootbox(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCatalogPluginLootbox()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get lootbox plugin config. 
   */
  async function getCatalogPluginsLootbox(): Promise<AxiosResponse<LootBoxPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsLootbox()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update lootbox plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateCatalogPluginLootbox(data: LootBoxPluginConfigUpdate): Promise<AxiosResponse<LootBoxPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginLootbox(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete section plugin config. 
   */
  async function deleteCatalogPluginSection(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteCatalogPluginSection()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get section plugin config. 
   */
  async function getCatalogPluginsSection(): Promise<AxiosResponse<SectionPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsSection()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update section config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateCatalogPluginSection(data: SectionPluginConfigUpdate): Promise<AxiosResponse<SectionPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginSection(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete service plugin config. 
   */
  async function deleteRevocationPluginRevocation(): Promise<AxiosResponse<unknown>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRevocationPluginRevocation()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get revocation plugin config. 
   */
  async function getRevocationPluginsRevocation(): Promise<AxiosResponse<RevocationPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRevocationPluginsRevocation()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update revocation plugin config. Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateRevocationPluginRevocation(data: RevocationPluginConfigUpdate): Promise<AxiosResponse<RevocationPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevocationPluginRevocation(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get lootbox plugin gRPC info. 
   */
  async function getCatalogPluginsLootboxGrpcInfo( queryParams?: {force?: boolean | null}): Promise<AxiosResponse<GrpcServerInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getCatalogPluginsLootboxGrpcInfo( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Upload lootbox plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateCatalogPluginLootboxCustomConfigCert(data: {file?: File}): Promise<AxiosResponse<LootBoxPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginLootboxCustomConfigCert(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Upload section plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateCatalogPluginSectionCustomConfigCert(data: {file?: File}): Promise<AxiosResponse<SectionPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCatalogPluginSectionCustomConfigCert(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Upload revocation plugin custom config tls cert.Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: updated service plugin config&lt;/li&gt;&lt;/ul&gt; 
   */
  async function updateRevocationPluginRevocationRevocationCustomConfigCert(data: {file?: File}): Promise<AxiosResponse<RevocationPluginConfigInfo>> {
    const $ = new ServicePluginConfigAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevocationPluginRevocationRevocationCustomConfigCert(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deleteConfigServicePlugin,getConfigsServicePlugin,updateConfigServicePlugin,deleteCatalogPluginLootbox,getCatalogPluginsLootbox,updateCatalogPluginLootbox,deleteCatalogPluginSection,getCatalogPluginsSection,updateCatalogPluginSection,deleteRevocationPluginRevocation,getRevocationPluginsRevocation,updateRevocationPluginRevocation,getCatalogPluginsLootboxGrpcInfo,updateCatalogPluginLootboxCustomConfigCert,updateCatalogPluginSectionCustomConfigCert,updateRevocationPluginRevocationRevocationCustomConfigCert,
  }
}
  