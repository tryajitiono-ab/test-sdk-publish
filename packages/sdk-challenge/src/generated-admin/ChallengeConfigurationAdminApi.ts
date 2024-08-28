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
import { ChallengeResponse } from '../generated-definitions/ChallengeResponse.js'
import { CreateChallengeRequest } from '../generated-definitions/CreateChallengeRequest.js'
import { ListChallengeResponse } from '../generated-definitions/ListChallengeResponse.js'
import { ListPeriodsResponse } from '../generated-definitions/ListPeriodsResponse.js'
import { ScheduleArray } from '../generated-definitions/ScheduleArray.js'
import { UpdateChallengeRequest } from '../generated-definitions/UpdateChallengeRequest.js'
import { ChallengeConfigurationAdmin$ } from './endpoints/ChallengeConfigurationAdmin$.js'


export function ChallengeConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getChallenges( queryParams?: {limit?: number, offset?: number, sortBy?: string | null, status?: 'INIT' | 'RETIRED' | 'TIED'}): Promise<AxiosResponse<ListChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChallenges( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [CREATE]&lt;/li&gt;&lt;/ul&gt;Challenge is a collection of goals that can be completed by players. Challenge can have rules that specify what and when goals will be available for players to be taken.&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;code: only lowercase letters, numbers, and the separator - are allowed; must start and end with letter&lt;/li&gt;&lt;li&gt;name: name of the challenge&lt;/li&gt;&lt;li&gt;description: text describing about the challenge (optional)&lt;/li&gt;&lt;li&gt;startDate: timestamp of when the challenge is started&lt;/li&gt;&lt;li&gt;endDate: timestamp of when the challenge is ended (optional)&lt;/li&gt;&lt;li&gt;endAfter: describe number of period challenge will be retired after (optional)&lt;/li&gt;To configure challenge that never end, leave the endDate and endAfter field null/empty.&lt;li&gt;repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge.&lt;/li&gt;&lt;li&gt;rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE)&lt;/li&gt;&lt;li&gt;activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment)&lt;/li&gt;&lt;li&gt;assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM)&lt;/li&gt;&lt;li&gt;goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY)&lt;/li&gt;&lt;li&gt;resetConfig: describe when rotation reset will happen (optional).&lt;ul&gt;&lt;li&gt;resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;randomizedPerRotation:&lt;ul&gt;&lt;li&gt;true: each goal will be randomly assigned to multiple periods&lt;/li&gt;&lt;li&gt;false: a goal will only be assigned to one period &lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt; 
   */
  async function createChallenge(data: CreateChallengeRequest): Promise<AxiosResponse<ChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createChallenge(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function deleteChallenge_ByChallengeCode(challengeCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteChallenge_ByChallengeCode(challengeCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getChallenge_ByChallengeCode(challengeCode:string): Promise<AxiosResponse<ChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getChallenge_ByChallengeCode(challengeCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;&lt;p&gt;Request body:&lt;ul&gt;&lt;li&gt;name: name of the challenge&lt;/li&gt;&lt;li&gt;description: text describing about the challenge (optional)&lt;/li&gt;&lt;li&gt;startDate: timestamp of when the challenge is started&lt;/li&gt;&lt;li&gt;endDate: timestamp of when the challenge is ended (optional)&lt;/li&gt;&lt;li&gt;endAfter: describe number of period challenge will be retired after (optional)&lt;/li&gt;To configure challenge that never end, leave the endDate and endAfter field null/empty.&lt;li&gt;repeatAfter: describe number of period challenge&#39;s goals will be repeated after. Leave it empty if you don&#39;t want to repeat the challenge.&lt;/li&gt;&lt;li&gt;rotation: describe how long goals in a challenge will be available for players to progress before rotated with another goals. (DAILY|WEEKLY|MONTHLY|NONE)&lt;/li&gt;&lt;li&gt;activeGoalsPerRotation: number of goals per rotation (currently only applicable for RANDOMIZE assignment)&lt;/li&gt;&lt;li&gt;assignmentRule: describe how the goals will be assigned and scheduled to users. (FIXED|RANDOMIZED|UNSCHEDULED|CUSTOM)&lt;/li&gt;&lt;li&gt;goalsVisibility: describe whether users can see all goals under challenge, or only active goal in one rotation period only. (SHOWALL|PERIODONLY)&lt;/li&gt;&lt;li&gt;resetConfig: describe when rotation reset will happen (optional).&lt;ul&gt;&lt;li&gt;resetTime: Reset time must follow hours:minutes in 24 hours format (e.g. 01:30, 23:15) and in UTC timezone. Default to &#34;00:00&#34;&lt;/li&gt;&lt;li&gt;resetDay: Reset Day follows the ISO-8601 standard, from 1 (Monday) to 7 (Sunday). Default to 1 in WEEKLY rotation.&lt;/li&gt;&lt;li&gt;resetDate: Reset Date must be a number 1 - 31. Default to 1 in MONTHLY rotation.&lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;li&gt;randomizedPerRotation:&lt;ul&gt;&lt;li&gt;true: each goal will be randomly assigned to multiple periods&lt;/li&gt;&lt;li&gt;false: a goal will only be assigned to one period &lt;/li&gt;&lt;/ul&gt;&lt;/li&gt;&lt;/ul&gt;&lt;/p&gt; 
   */
  async function updateChallenge_ByChallengeCode(challengeCode:string, data: UpdateChallengeRequest): Promise<AxiosResponse<ChallengeResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateChallenge_ByChallengeCode(challengeCode, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [DELETE]&lt;/li&gt;&lt;li&gt;This endpoint will delete the combination of related data: CHALLENGES, GOALS, SCHEDULES, PLAYER PROGRESSIONS&lt;/li&gt;&lt;/ul&gt; 
   */
  async function deleteTied_ByChallengeCode(challengeCode:string): Promise<AxiosResponse<unknown>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteTied_ByChallengeCode(challengeCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [READ]&lt;/li&gt;&lt;/ul&gt; 
   */
  async function getPeriods_ByChallengeCode(challengeCode:string,  queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<ListPeriodsResponse>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPeriods_ByChallengeCode(challengeCode,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * &lt;ul&gt;&lt;li&gt;Required permission: ADMIN:NAMESPACE:{namespace}:CHALLENGE [UPDATE]&lt;/li&gt;&lt;/ul&gt;This is a utility endpoint to execute randomize goals schedule on challenge that the assignmentRule is RANDOMIZED and RandomizePerRotation assigned with true. 
   */
  async function createRandomize_ByChallengeCode(challengeCode:string): Promise<AxiosResponse<ScheduleArray>> {
    const $ = new ChallengeConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRandomize_ByChallengeCode(challengeCode, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getChallenges,createChallenge,deleteChallenge_ByChallengeCode,getChallenge_ByChallengeCode,updateChallenge_ByChallengeCode,deleteTied_ByChallengeCode,getPeriods_ByChallengeCode,createRandomize_ByChallengeCode,
  }
}
  