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
import { GetGroupListRequestV2 } from '../generated-definitions/GetGroupListRequestV2.js'
import { GetGroupsListResponseV1 } from '../generated-definitions/GetGroupsListResponseV1.js'
import { GetGroupsResponseV1 } from '../generated-definitions/GetGroupsResponseV1.js'
import { GroupResponseV1 } from '../generated-definitions/GroupResponseV1.js'
import { GroupAdmin$ } from './endpoints/GroupAdmin$.js'


export function GroupAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get list of groups. This endpoint will show any types of group Action Code: 73301  
   */
  async function getGroups( queryParams?: {configurationCode?: string | null, groupName?: string | null, groupRegion?: string | null, limit?: number, offset?: number}): Promise<AxiosResponse<GetGroupsListResponseV1>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroups( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authentication Get list of groups by group Ids. Action Code: 73303  
   */
  async function fetchGroupBulk_v2(data: GetGroupListRequestV2): Promise<AxiosResponse<GetGroupsResponseV1>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchGroupBulk_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete existing group. It will check whether the groupID is exist before doing the process to delete the group. Action Code: 73302  
   */
  async function deleteGroup_ByGroupId(groupId:string): Promise<AxiosResponse<unknown>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByGroupId(groupId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get single group information. This endpoint will show the group information by the groupId Action Code: 73306  
   */
  async function getGroup_ByGroupId(groupId:string): Promise<AxiosResponse<GroupResponseV1>> {
    const $ = new GroupAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroup_ByGroupId(groupId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getGroups,fetchGroupBulk_v2,deleteGroup_ByGroupId,getGroup_ByGroupId,
  }
}
  