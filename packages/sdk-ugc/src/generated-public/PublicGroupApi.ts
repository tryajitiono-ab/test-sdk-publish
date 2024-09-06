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
import { CreateGroupRequest } from '../generated-definitions/CreateGroupRequest.js'
import { CreateGroupResponse } from '../generated-definitions/CreateGroupResponse.js'
import { PaginatedContentDownloadResponse } from '../generated-definitions/PaginatedContentDownloadResponse.js'
import { PaginatedContentDownloadResponseV2 } from '../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PaginatedGroupResponse } from '../generated-definitions/PaginatedGroupResponse.js'
import { PublicGroup$ } from './endpoints/PublicGroup$.js'

export function PublicGroupApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get user groups paginated
   */
  async function getGroups_ByUserId(
    userId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedGroupResponse>> {
    const $ = new PublicGroup$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroups_ByUserId(userId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Create group
   */
  async function createGroup_ByUserId(userId: string, data: CreateGroupRequest): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new PublicGroup$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createGroup_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Delete user group by group ID
   */
  async function deleteGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PublicGroup$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get user groups by group ID
   */
  async function getGroup_ByUserId_ByGroupId(userId: string, groupId: string): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new PublicGroup$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getGroup_ByUserId_ByGroupId(userId, groupId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Replace group name and contents with new ones
   */
  async function updateGroup_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    data: CreateGroupRequest
  ): Promise<AxiosResponse<CreateGroupResponse>> {
    const $ = new PublicGroup$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateGroup_ByUserId_ByGroupId(userId, groupId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get content that belong to a group
   */
  async function getContents_ByUserId_ByGroupId(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponse>> {
    const $ = new PublicGroup$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Get content belong to a group
   */
  async function getContents_ByUserId_ByGroupId_v2(
    userId: string,
    groupId: string,
    queryParams?: { limit?: number; offset?: number }
  ): Promise<AxiosResponse<PaginatedContentDownloadResponseV2>> {
    const $ = new PublicGroup$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getContents_ByUserId_ByGroupId_v2(userId, groupId, queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getGroups_ByUserId,
    createGroup_ByUserId,
    deleteGroup_ByUserId_ByGroupId,
    getGroup_ByUserId_ByGroupId,
    updateGroup_ByUserId_ByGroupId,
    getContents_ByUserId_ByGroupId,
    getContents_ByUserId_ByGroupId_v2
  }
}
