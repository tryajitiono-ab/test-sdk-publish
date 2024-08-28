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
import { AxiosError } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { DiffCalculationApi } from "../DiffCalculationApi.js"

import { LateDiffRequest } from '../../generated-definitions/LateDiffRequest.js'
import { PingResponse } from '../../generated-definitions/PingResponse.js'


export enum Key_DiffCalculation {
  Diff = 'Differ.DiffCalculation.Diff',
Ping = 'Differ.DiffCalculation.Ping',
Diff_v2 = 'Differ.DiffCalculation.Diff_v2',

}

  

export const useDiffCalculationApi_CreateDiff = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: LateDiffRequest }) => {
      const response = 
            (await DiffCalculationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiff(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DiffCalculation.Diff],
    mutationFn,
    ...options
  })
}
  
  

export const useDiffCalculationApi_GetPing = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PingResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: PingResponse) => void
  ): UseQueryResult<PingResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDiffCalculationApi_GetPing>[1]
  ) => async () => {
      const response = 
            (await DiffCalculationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPing())
      callback && callback(response.data)
      return response.data
  }
  
  return useQuery<PingResponse, AxiosError<ApiError>>({
    queryKey: [Key_DiffCalculation.Ping, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDiffCalculationApi_CreateDiff_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LateDiffRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: LateDiffRequest }) => {
      const response = 
            (await DiffCalculationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiff_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DiffCalculation.Diff_v2],
    mutationFn,
    ...options
  })
}
  
  
  