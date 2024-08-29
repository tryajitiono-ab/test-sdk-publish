/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, SdkSetConfigParam, ApiError } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { ModerationRuleAdminApi } from "../ModerationRuleAdminApi.js"

import { ModerationRuleActiveRequest } from '../../generated-definitions/ModerationRuleActiveRequest.js'
import { ModerationRuleRequest } from '../../generated-definitions/ModerationRuleRequest.js'
import { ModerationRuleResponse } from '../../generated-definitions/ModerationRuleResponse.js'
import { ModerationRulesList } from '../../generated-definitions/ModerationRulesList.js'


export enum Key_ModerationRuleAdmin {
  Rule = 'Reporting.ModerationRuleAdmin.Rule',
Rules = 'Reporting.ModerationRuleAdmin.Rules',
Rule_ByRuleId = 'Reporting.ModerationRuleAdmin.Rule_ByRuleId',
Status_ByRuleId = 'Reporting.ModerationRuleAdmin.Status_ByRuleId',

}

  

export const useModerationRuleAdminApi_CreateRule = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ModerationRuleRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ModerationRuleRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ModerationRuleRequest }) => {
      const response = 
            (await ModerationRuleAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRule(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ModerationRuleAdmin.Rule],
    mutationFn,
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ModerationRuleAdmin.Rules, input]
 * }
 * ```
 */
export const useModerationRuleAdminApi_GetRules = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {category?: string | null, extensionCategory?: string | null, limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<ModerationRulesList, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ModerationRulesList>) => void
  ): UseQueryResult<ModerationRulesList, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useModerationRuleAdminApi_GetRules>[1]
  ) => async () => {
      const response = 
            (await ModerationRuleAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRules(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ModerationRulesList, AxiosError<ApiError>>({
    queryKey: [Key_ModerationRuleAdmin.Rules, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useModerationRuleAdminApi_DeleteRule_ByRuleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { ruleId:string }) => {
      const response = 
            (await ModerationRuleAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRule_ByRuleId(input.ruleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ModerationRuleAdmin.Rule_ByRuleId],
    mutationFn,
    ...options
  })
}
  
  

export const useModerationRuleAdminApi_UpdateRule_ByRuleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ModerationRuleResponse, AxiosError<ApiError>, SdkSetConfigParam & { ruleId:string, data: ModerationRuleRequest }>, 'mutationKey'>,
    callback?: (data: ModerationRuleResponse) => void
  ): UseMutationResult<ModerationRuleResponse, AxiosError<ApiError>, SdkSetConfigParam & { ruleId:string, data: ModerationRuleRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { ruleId:string, data: ModerationRuleRequest }) => {
      const response = 
            (await ModerationRuleAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRule_ByRuleId(input.ruleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ModerationRuleAdmin.Rule_ByRuleId],
    mutationFn,
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ModerationRuleAdmin.Rule_ByRuleId, input]
 * }
 * ```
 */
export const useModerationRuleAdminApi_GetRule_ByRuleId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { ruleId:string },
    options?: Omit<UseQueryOptions<ModerationRuleResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ModerationRuleResponse>) => void
  ): UseQueryResult<ModerationRuleResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useModerationRuleAdminApi_GetRule_ByRuleId>[1]
  ) => async () => {
      const response = 
            (await ModerationRuleAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRule_ByRuleId(input.ruleId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ModerationRuleResponse, AxiosError<ApiError>>({
    queryKey: [Key_ModerationRuleAdmin.Rule_ByRuleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useModerationRuleAdminApi_UpdateStatus_ByRuleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleId:string, data: ModerationRuleActiveRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleId:string, data: ModerationRuleActiveRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { ruleId:string, data: ModerationRuleActiveRequest }) => {
      const response = 
            (await ModerationRuleAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatus_ByRuleId(input.ruleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ModerationRuleAdmin.Status_ByRuleId],
    mutationFn,
    ...options
  })
}
  
  
  