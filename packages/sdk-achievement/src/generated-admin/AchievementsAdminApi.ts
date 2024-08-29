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
import { AchievementOrderUpdateRequest } from '../generated-definitions/AchievementOrderUpdateRequest.js'
import { AchievementRequest } from '../generated-definitions/AchievementRequest.js'
import { AchievementResponse } from '../generated-definitions/AchievementResponse.js'
import { AchievementUpdateRequest } from '../generated-definitions/AchievementUpdateRequest.js'
import { ImportConfigResponse } from '../generated-definitions/ImportConfigResponse.js'
import { PaginatedAchievementResponse } from '../generated-definitions/PaginatedAchievementResponse.js'
import { AchievementsAdmin$ } from './endpoints/AchievementsAdmin$.js'


export function AchievementsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; 
   */
  async function getAchievements( queryParams?: {global?: boolean | null, limit?: number, offset?: number, sortBy?: 'listOrder' | 'listOrder:asc' | 'listOrder:desc' | 'createdAt' | 'createdAt:asc' | 'createdAt:desc' | 'updatedAt' | 'updatedAt:asc' | 'updatedAt:desc', tags?: string[]}): Promise<AxiosResponse<PaginatedAchievementResponse>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAchievements( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [CREATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; Other detail info: - achievementCode: Human readable unique code to indentify the achievement. Must be lowercase and maximum length is 32 - incremental: If the achievement is not incremental, it does not need to store a goal value of a stat to be unlocked. If the achievement is incremental, it needs to set statCode and goalValue - statCode: Selected statistic code, from the published statistic code event.Human readable unique code to indentify the achievement. Must be lowercase and maximum length is 32 - goalValue: Statistics value required to unlock the achievement. - defaultLanguage: localozation for achievement name and achievement description. Allowed format : en, en-US - slug: specify the image they want to use, it can be file image name or something to define the achievement icon. 
   */
  async function createAchievement(data: AchievementRequest): Promise<AxiosResponse<AchievementResponse>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAchievement(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt; Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt;&lt;/p&gt;&lt;p&gt;Required Scope: &lt;code&gt;social&lt;/code&gt;&lt;p&gt;Successful response header will contain: &lt;code&gt;content-disposition: attachment; filename=achievement_&lt;namespace&gt;_config.json&lt;/code&gt;&lt;/p&gt; 
   */
  async function getAchievementsExport( queryParams?: {tags?: string[]}): Promise<AxiosResponse<unknown>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAchievementsExport( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Required permission ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE] Required Scope: social Import achievement configuration from file. It will merge with existing achievement. Available import strategy: - leaveOut: if achievement with same key exist, the existing will be used and imported one will be ignored (default) - replace: if achievement with same key exist, the imported achievement will be used and existing one will be removed  
   */
  async function updateAchievementImport(data: {file?: File,strategy?: string | null}): Promise<AxiosResponse<ImportConfigResponse>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAchievementImport(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [DELETE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; 
   */
  async function deleteAchievement_ByAchievementCode(achievementCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteAchievement_ByAchievementCode(achievementCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [READ]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; 
   */
  async function getAchievement_ByAchievementCode(achievementCode:string): Promise<AxiosResponse<AchievementResponse>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAchievement_ByAchievementCode(achievementCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; 
   */
  async function patchAchievement_ByAchievementCode(achievementCode:string, data: AchievementOrderUpdateRequest): Promise<AxiosResponse<unknown>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchAchievement_ByAchievementCode(achievementCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;p&gt;Required permission &lt;code&gt;ADMIN:NAMESPACE:{namespace}:ACHIEVEMENT [UPDATE]&lt;/code&gt; and scope &lt;code&gt;social&lt;/code&gt;&lt;/p&gt; 
   */
  async function updateAchievement_ByAchievementCode(achievementCode:string, data: AchievementUpdateRequest): Promise<AxiosResponse<AchievementResponse>> {
    const $ = new AchievementsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateAchievement_ByAchievementCode(achievementCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getAchievements,createAchievement,getAchievementsExport,updateAchievementImport,deleteAchievement_ByAchievementCode,getAchievement_ByAchievementCode,patchAchievement_ByAchievementCode,updateAchievement_ByAchievementCode,
  }
}
  