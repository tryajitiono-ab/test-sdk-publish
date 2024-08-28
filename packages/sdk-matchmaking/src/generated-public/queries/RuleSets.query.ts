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
import { RuleSetsApi } from "../RuleSetsApi.js"

import { ListRuleSetsResponse } from '../../generated-definitions/ListRuleSetsResponse.js'
import { RuleSetPayload } from '../../generated-definitions/RuleSetPayload.js'


export enum Key_RuleSets {
  Rulesets = 'Matchmaking.RuleSets.Rulesets',
Ruleset = 'Matchmaking.RuleSets.Ruleset',
Ruleset_ByRuleset = 'Matchmaking.RuleSets.Ruleset_ByRuleset',

}

  

export const useRuleSetsApi_GetRulesets = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, name?: string | null, offset?: number} },
    options?: Omit<UseQueryOptions<ListRuleSetsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListRuleSetsResponse>) => void
  ): UseQueryResult<ListRuleSetsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRuleSetsApi_GetRulesets>[1]
  ) => async () => {
      const response = 
            (await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRulesets(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListRuleSetsResponse, AxiosError<ApiError>>({
    queryKey: [Key_RuleSets.Rulesets, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRuleSetsApi_CreateRuleset = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: RuleSetPayload }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: RuleSetPayload }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: RuleSetPayload }) => {
      const response = 
            (await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRuleset(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RuleSets.Ruleset],
    mutationFn,
    ...options
  })
}
  
  

export const useRuleSetsApi_DeleteRuleset_ByRuleset = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleset:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ruleset:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { ruleset:string }) => {
      const response = 
            (await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRuleset_ByRuleset(input.ruleset))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RuleSets.Ruleset_ByRuleset],
    mutationFn,
    ...options
  })
}
  
  

export const useRuleSetsApi_GetRuleset_ByRuleset = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { ruleset:string },
    options?: Omit<UseQueryOptions<RuleSetPayload, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RuleSetPayload>) => void
  ): UseQueryResult<RuleSetPayload, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRuleSetsApi_GetRuleset_ByRuleset>[1]
  ) => async () => {
      const response = 
            (await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRuleset_ByRuleset(input.ruleset))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RuleSetPayload, AxiosError<ApiError>>({
    queryKey: [Key_RuleSets.Ruleset_ByRuleset, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRuleSetsApi_UpdateRuleset_ByRuleset = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RuleSetPayload, AxiosError<ApiError>, SdkSetConfigParam & { ruleset:string, data: RuleSetPayload }>, 'mutationKey'>,
    callback?: (data: RuleSetPayload) => void
  ): UseMutationResult<RuleSetPayload, AxiosError<ApiError>, SdkSetConfigParam & { ruleset:string, data: RuleSetPayload }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { ruleset:string, data: RuleSetPayload }) => {
      const response = 
            (await RuleSetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRuleset_ByRuleset(input.ruleset, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RuleSets.Ruleset_ByRuleset],
    mutationFn,
    ...options
  })
}
  
  
  