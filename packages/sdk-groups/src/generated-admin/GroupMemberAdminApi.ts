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
import { GetGroupMemberListResponseV1 } from '../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { GroupMemberAdmin$ } from './endpoints/GroupMemberAdmin$.js'


export function GroupMemberAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required valid user authentication This endpoint is used to get user joined group information. Get user group joined information. If user does not belong to any group, it will return warning to give information about it Group Member Status: * JOINED: status of user already joined to a group  
   */
  async function getGroups_ByUserId_v2(userId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<GetGroupMemberListResponseV1>> {
    const $ = new GroupMemberAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroups_ByUserId_v2(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to get list of group members. Action Code: 73410  
   */
  async function getMembers_ByGroupId(groupId:string,  queryParams?: {limit?: number, offset?: number, order?: string | null}): Promise<AxiosResponse<GetGroupMemberListResponseV1>> {
    const $ = new GroupMemberAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMembers_ByGroupId(groupId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to get user group status information. 
   */
  async function getStatus_ByUserId_ByGroupId_v2(userId:string, groupId:string): Promise<AxiosResponse<GetUserGroupInformationResponseV1>> {
    const $ = new GroupMemberAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getStatus_ByUserId_ByGroupId_v2(userId, groupId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getGroups_ByUserId_v2,getMembers_ByGroupId,getStatus_ByUserId_ByGroupId_v2,
  }
}
  