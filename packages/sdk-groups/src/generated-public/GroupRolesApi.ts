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
import { AssignRoleToMemberRequestV1 } from '../generated-definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../generated-definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../generated-definitions/GetUserGroupInformationResponseV1.js'
import { RemoveRoleFromMemberRequestV1 } from '../generated-definitions/RemoveRoleFromMemberRequestV1.js'
import { GroupRoles$ } from './endpoints/GroupRoles$.js'

export function GroupRolesApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE \[READ\]&#34; This endpoint is used to get list of member roles Action Code: 73201
   */
  async function getRoles(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<GetMemberRolesListResponseV1>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This endpoint is used to get list of member roles Action Code: 73201
   */
  async function getRoles_v2(queryParams?: { limit?: number; offset?: number }): Promise<AxiosResponse<GetMemberRolesListResponseV1>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles_v2(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE]&#34; This endpoint is used to remove role from group member Action Code: 73204
   */
  async function deleteMember_ByMemberRoleId(memberRoleId: string, data: RemoveRoleFromMemberRequestV1): Promise<AxiosResponse<unknown>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
   */
  async function createMember_ByMemberRoleId(
    memberRoleId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<AxiosResponse<GetUserGroupInformationResponseV1>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMember_ByMemberRoleId(memberRoleId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE \[UPDATE\]&#34; This endpoint is used to remove role from group member Action Code: 73204
   */
  async function deleteMember_ByMemberRoleId_ByGroupId_v2(
    memberRoleId: string,
    groupId: string,
    data: RemoveRoleFromMemberRequestV1
  ): Promise<AxiosResponse<unknown>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMember_ByMemberRoleId_ByGroupId_v2(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required Member Role Permission: &#34;GROUP:ROLE [UPDATE] This endpoint is used to assign role to group member Action Code: 73204
   */
  async function createMember_ByMemberRoleId_ByGroupId_v2(
    memberRoleId: string,
    groupId: string,
    data: AssignRoleToMemberRequestV1
  ): Promise<AxiosResponse<GetUserGroupInformationResponseV1>> {
    const $ = new GroupRoles$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createMember_ByMemberRoleId_ByGroupId_v2(memberRoleId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getRoles,
    getRoles_v2,
    deleteMember_ByMemberRoleId,
    createMember_ByMemberRoleId,
    deleteMember_ByMemberRoleId_ByGroupId_v2,
    createMember_ByMemberRoleId_ByGroupId_v2
  }
}
