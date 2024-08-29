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
import { GetMemberRequestsListResponseV1 } from '../generated-definitions/GetMemberRequestsListResponseV1.js'
import { MemberRequest$ } from './endpoints/MemberRequest$.js'


export function MemberRequestApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required valid user authentication This endpoint is used to Get My Join Request To The Groups Get My Join Request To The Groups for the user calling this endpoint. It will check any join request group for this user Action Code: 73502  
   */
  async function getUsersMeJoinRequest_v2( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeJoinRequest_v2( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authentication This endpoint is used to Get Group Invitation Request List Get Group Invitation Request List for the user calling this endpoint. It will check any group invitation for this user Action Code: 73502  
   */
  async function getUsersMeInviteRequest( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeInviteRequest( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501  
   */
  async function getJoinRequest_ByGroupId(groupId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getJoinRequest_ByGroupId(groupId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Join Request List Get Group Join Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501  
   */
  async function getJoinRequest_ByGroupId_v2(groupId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getJoinRequest_ByGroupId_v2(groupId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required valid user authentication Required Member Role Permission: &#34;GROUP:JOIN [READ]&#34; This endpoint is used to Get Group Invite Request List Get Group Invite Request List for specific group. Group members needs to have permission and also belong to the group to access this endpoint Action Code: 73501  
   */
  async function getInviteRequest_ByGroupId_v2(groupId:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<GetMemberRequestsListResponseV1>> {
    const $ = new MemberRequest$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInviteRequest_ByGroupId_v2(groupId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getUsersMeJoinRequest_v2,getUsersMeInviteRequest,getJoinRequest_ByGroupId,getJoinRequest_ByGroupId_v2,getInviteRequest_ByGroupId_v2,
  }
}
  