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
import { ChatMessageResponseArray } from '../generated-definitions/ChatMessageResponseArray.js'
import { MuteUserRequest } from '../generated-definitions/MuteUserRequest.js'
import { MutedTopicResponseArray } from '../generated-definitions/MutedTopicResponseArray.js'
import { PublicBanTopicMembersRequest } from '../generated-definitions/PublicBanTopicMembersRequest.js'
import { PublicBanTopicMembersResponse } from '../generated-definitions/PublicBanTopicMembersResponse.js'
import { PublicUnbanTopicMembersRequest } from '../generated-definitions/PublicUnbanTopicMembersRequest.js'
import { PublicUnbanTopicMembersResponse } from '../generated-definitions/PublicUnbanTopicMembersResponse.js'
import { UnmuteUserRequest } from '../generated-definitions/UnmuteUserRequest.js'
import { Topic$ } from './endpoints/Topic$.js'


export function TopicApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * get chat muted topics in a namespace. 
   */
  async function getMuted(): Promise<AxiosResponse<MutedTopicResponseArray>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMuted()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * get chat list of topic in a namespace. 
   */
  async function getTopic( queryParams?: {limit?: number, offset?: number, topicType?: string | null}): Promise<AxiosResponse<ChatMessageResponseArray>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getTopic( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Mute user. 
   */
  async function updateMute_ByTopic(topic:string, data: MuteUserRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateMute_ByTopic(topic, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * get chat history in a namespace. 
   */
  async function getChats_ByTopic(topic:string,  queryParams?: {limit?: number, order?: string | null, startCreatedAt?: number}): Promise<AxiosResponse<ChatMessageResponseArray>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChats_ByTopic(topic,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Unmute user. 
   */
  async function updateUnmute_ByTopic(topic:string, data: UnmuteUserRequest): Promise<AxiosResponse<unknown>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnmute_ByTopic(topic, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Ban topic members in a group topic. 
   */
  async function updateBanMember_ByTopic(topic:string, data: PublicBanTopicMembersRequest): Promise<AxiosResponse<PublicBanTopicMembersResponse>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateBanMember_ByTopic(topic, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Unban topic members in a group topic. 
   */
  async function updateUnbanMember_ByTopic(topic:string, data: PublicUnbanTopicMembersRequest): Promise<AxiosResponse<PublicUnbanTopicMembersResponse>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnbanMember_ByTopic(topic, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete chat. 
   */
  async function deleteChat_ByTopic_ByChatId(topic:string, chatId:string): Promise<AxiosResponse<unknown>> {
    const $ = new Topic$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChat_ByTopic_ByChatId(topic, chatId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getMuted,getTopic,updateMute_ByTopic,getChats_ByTopic,updateUnmute_ByTopic,updateBanMember_ByTopic,updateUnbanMember_ByTopic,deleteChat_ByTopic_ByChatId,
  }
}
  