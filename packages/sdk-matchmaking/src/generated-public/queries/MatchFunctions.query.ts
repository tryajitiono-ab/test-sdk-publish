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
import { MatchFunctionsApi } from "../MatchFunctionsApi.js"

import { ListMatchFunctionsResponse } from '../../generated-definitions/ListMatchFunctionsResponse.js'
import { MatchFunctionConfig } from '../../generated-definitions/MatchFunctionConfig.js'
import { MatchFunctionRequest } from '../../generated-definitions/MatchFunctionRequest.js'


export enum Key_MatchFunctions {
  MatchFunctions = 'Matchmaking.MatchFunctions.MatchFunctions',
MatchFunction = 'Matchmaking.MatchFunctions.MatchFunction',
MatchFunction_ByName = 'Matchmaking.MatchFunctions.MatchFunction_ByName',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MatchFunctions.MatchFunctions, input]
 * }
 * ```
 */
export const useMatchFunctionsApi_GetMatchFunctions = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<ListMatchFunctionsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListMatchFunctionsResponse>) => void
  ): UseQueryResult<ListMatchFunctionsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchFunctionsApi_GetMatchFunctions>[1]
  ) => async () => {
      const response = 
            (await MatchFunctionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMatchFunctions(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListMatchFunctionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_MatchFunctions.MatchFunctions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchFunctionsApi_CreateMatchFunction = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchFunctionRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchFunctionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchFunctionRequest }) => {
      const response = 
            (await MatchFunctionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createMatchFunction(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchFunctions.MatchFunction],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchFunctionsApi_DeleteMatchFunction_ByName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { name:string }) => {
      const response = 
            (await MatchFunctionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMatchFunction_ByName(input.name))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchFunctions.MatchFunction_ByName],
    mutationFn,
    ...options
  })
}
  
  

export const useMatchFunctionsApi_UpdateMatchFunction_ByName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MatchFunctionConfig, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: MatchFunctionRequest }>, 'mutationKey'>,
    callback?: (data: MatchFunctionConfig) => void
  ): UseMutationResult<MatchFunctionConfig, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: MatchFunctionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { name:string, data: MatchFunctionRequest }) => {
      const response = 
            (await MatchFunctionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateMatchFunction_ByName(input.name, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchFunctions.MatchFunction_ByName],
    mutationFn,
    ...options
  })
}
  
  
  