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
import { GoalConfigurationAdminApi } from "../GoalConfigurationAdminApi.js"

import { CreateGoalRequest } from '../../generated-definitions/CreateGoalRequest.js'
import { GetGoalsResponse } from '../../generated-definitions/GetGoalsResponse.js'
import { GoalResponse } from '../../generated-definitions/GoalResponse.js'
import { UpdateGoalRequest } from '../../generated-definitions/UpdateGoalRequest.js'


export enum Key_GoalConfigurationAdmin {
  Goals_ByChallengeCode = 'Challenge.GoalConfigurationAdmin.Goals_ByChallengeCode',
Goal_ByChallengeCode = 'Challenge.GoalConfigurationAdmin.Goal_ByChallengeCode',
Goal_ByChallengeCode_ByCode = 'Challenge.GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GoalConfigurationAdmin.Goals_ByChallengeCode, input]
 * }
 * ```
 */
export const useGoalConfigurationAdminApi_GetGoals_ByChallengeCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { challengeCode:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null} },
    options?: Omit<UseQueryOptions<GetGoalsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetGoalsResponse>) => void
  ): UseQueryResult<GetGoalsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGoalConfigurationAdminApi_GetGoals_ByChallengeCode>[1]
  ) => async () => {
      const response = 
            (await GoalConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGoals_ByChallengeCode(input.challengeCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetGoalsResponse, AxiosError<ApiError>>({
    queryKey: [Key_GoalConfigurationAdmin.Goals_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGoalConfigurationAdminApi_CreateGoal_ByChallengeCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GoalResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, data: CreateGoalRequest }>, 'mutationKey'>,
    callback?: (data: GoalResponse) => void
  ): UseMutationResult<GoalResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, data: CreateGoalRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode:string, data: CreateGoalRequest }) => {
      const response = 
            (await GoalConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createGoal_ByChallengeCode(input.challengeCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode],
    mutationFn,
    ...options
  })
}
  
  

export const useGoalConfigurationAdminApi_DeleteGoal_ByChallengeCode_ByCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, code:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, code:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode:string, code:string }) => {
      const response = 
            (await GoalConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteGoal_ByChallengeCode_ByCode(input.challengeCode, input.code))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode],
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
 *    queryKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode, input]
 * }
 * ```
 */
export const useGoalConfigurationAdminApi_GetGoal_ByChallengeCode_ByCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { challengeCode:string, code:string },
    options?: Omit<UseQueryOptions<GoalResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GoalResponse>) => void
  ): UseQueryResult<GoalResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGoalConfigurationAdminApi_GetGoal_ByChallengeCode_ByCode>[1]
  ) => async () => {
      const response = 
            (await GoalConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGoal_ByChallengeCode_ByCode(input.challengeCode, input.code))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GoalResponse, AxiosError<ApiError>>({
    queryKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGoalConfigurationAdminApi_UpdateGoal_ByChallengeCode_ByCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GoalResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, code:string, data: UpdateGoalRequest }>, 'mutationKey'>,
    callback?: (data: GoalResponse) => void
  ): UseMutationResult<GoalResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, code:string, data: UpdateGoalRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode:string, code:string, data: UpdateGoalRequest }) => {
      const response = 
            (await GoalConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateGoal_ByChallengeCode_ByCode(input.challengeCode, input.code, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GoalConfigurationAdmin.Goal_ByChallengeCode_ByCode],
    mutationFn,
    ...options
  })
}
  
  
  