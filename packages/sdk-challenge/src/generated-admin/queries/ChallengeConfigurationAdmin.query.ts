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
import { ChallengeConfigurationAdminApi } from "../ChallengeConfigurationAdminApi.js"

import { ChallengeResponse } from '../../generated-definitions/ChallengeResponse.js'
import { CreateChallengeRequest } from '../../generated-definitions/CreateChallengeRequest.js'
import { ListChallengeResponse } from '../../generated-definitions/ListChallengeResponse.js'
import { ListPeriodsResponse } from '../../generated-definitions/ListPeriodsResponse.js'
import { ScheduleArray } from '../../generated-definitions/ScheduleArray.js'
import { UpdateChallengeRequest } from '../../generated-definitions/UpdateChallengeRequest.js'


export enum Key_ChallengeConfigurationAdmin {
  Challenges = 'Challenge.ChallengeConfigurationAdmin.Challenges',
Challenge = 'Challenge.ChallengeConfigurationAdmin.Challenge',
Challenge_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Challenge_ByChallengeCode',
Tied_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Tied_ByChallengeCode',
Periods_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Periods_ByChallengeCode',
Randomize_ByChallengeCode = 'Challenge.ChallengeConfigurationAdmin.Randomize_ByChallengeCode',

}

  

export const useChallengeConfigurationAdminApi_GetChallenges = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, sortBy?: string | null, status?: 'INIT' | 'RETIRED' | 'TIED'} },
    options?: Omit<UseQueryOptions<ListChallengeResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListChallengeResponse>) => void
  ): UseQueryResult<ListChallengeResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useChallengeConfigurationAdminApi_GetChallenges>[1]
  ) => async () => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChallenges(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListChallengeResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeConfigurationAdmin.Challenges, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useChallengeConfigurationAdminApi_CreateChallenge = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ChallengeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateChallengeRequest }>, 'mutationKey'>,
    callback?: (data: ChallengeResponse) => void
  ): UseMutationResult<ChallengeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateChallengeRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateChallengeRequest }) => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createChallenge(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Challenge],
    mutationFn,
    ...options
  })
}
  
  

export const useChallengeConfigurationAdminApi_DeleteChallenge_ByChallengeCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode:string }) => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteChallenge_ByChallengeCode(input.challengeCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode],
    mutationFn,
    ...options
  })
}
  
  

export const useChallengeConfigurationAdminApi_GetChallenge_ByChallengeCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { challengeCode:string },
    options?: Omit<UseQueryOptions<ChallengeResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ChallengeResponse>) => void
  ): UseQueryResult<ChallengeResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useChallengeConfigurationAdminApi_GetChallenge_ByChallengeCode>[1]
  ) => async () => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChallenge_ByChallengeCode(input.challengeCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ChallengeResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useChallengeConfigurationAdminApi_UpdateChallenge_ByChallengeCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ChallengeResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, data: UpdateChallengeRequest }>, 'mutationKey'>,
    callback?: (data: ChallengeResponse) => void
  ): UseMutationResult<ChallengeResponse, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string, data: UpdateChallengeRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode:string, data: UpdateChallengeRequest }) => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateChallenge_ByChallengeCode(input.challengeCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Challenge_ByChallengeCode],
    mutationFn,
    ...options
  })
}
  
  

export const useChallengeConfigurationAdminApi_DeleteTied_ByChallengeCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode:string }) => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteTied_ByChallengeCode(input.challengeCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Tied_ByChallengeCode],
    mutationFn,
    ...options
  })
}
  
  

export const useChallengeConfigurationAdminApi_GetPeriods_ByChallengeCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { challengeCode:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<ListPeriodsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListPeriodsResponse>) => void
  ): UseQueryResult<ListPeriodsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useChallengeConfigurationAdminApi_GetPeriods_ByChallengeCode>[1]
  ) => async () => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPeriods_ByChallengeCode(input.challengeCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListPeriodsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ChallengeConfigurationAdmin.Periods_ByChallengeCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useChallengeConfigurationAdminApi_CreateRandomize_ByChallengeCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ScheduleArray, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string }>, 'mutationKey'>,
    callback?: (data: ScheduleArray) => void
  ): UseMutationResult<ScheduleArray, AxiosError<ApiError>, SdkSetConfigParam & { challengeCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { challengeCode:string }) => {
      const response = 
            (await ChallengeConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRandomize_ByChallengeCode(input.challengeCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChallengeConfigurationAdmin.Randomize_ByChallengeCode],
    mutationFn,
    ...options
  })
}
  
  
  