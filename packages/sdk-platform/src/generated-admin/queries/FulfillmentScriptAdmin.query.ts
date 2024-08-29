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
import { FulfillmentScriptAdminApi } from "../FulfillmentScriptAdminApi.js"

import { FulfillmentScriptCreate } from '../../generated-definitions/FulfillmentScriptCreate.js'
import { FulfillmentScriptInfo } from '../../generated-definitions/FulfillmentScriptInfo.js'
import { FulfillmentScriptInfoArray } from '../../generated-definitions/FulfillmentScriptInfoArray.js'
import { FulfillmentScriptUpdate } from '../../generated-definitions/FulfillmentScriptUpdate.js'


export enum Key_FulfillmentScriptAdmin {
  FulfillmentScripts = 'Platform.FulfillmentScriptAdmin.FulfillmentScripts',
FulfillmentScript_ById = 'Platform.FulfillmentScriptAdmin.FulfillmentScript_ById',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScripts, input]
 * }
 * ```
 */
export const useFulfillmentScriptAdminApi_GetFulfillmentScripts = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<FulfillmentScriptInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FulfillmentScriptInfoArray>) => void
  ): UseQueryResult<FulfillmentScriptInfoArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useFulfillmentScriptAdminApi_GetFulfillmentScripts>[1]
  ) => async () => {
      const response = 
            (await FulfillmentScriptAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getFulfillmentScripts())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FulfillmentScriptInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScripts, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useFulfillmentScriptAdminApi_DeleteFulfillmentScript_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { id:string }) => {
      const response = 
            (await FulfillmentScriptAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteFulfillmentScript_ById(input.id))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
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
 *    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input]
 * }
 * ```
 */
export const useFulfillmentScriptAdminApi_GetFulfillmentScript_ById = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { id:string },
    options?: Omit<UseQueryOptions<FulfillmentScriptInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FulfillmentScriptInfo>) => void
  ): UseQueryResult<FulfillmentScriptInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useFulfillmentScriptAdminApi_GetFulfillmentScript_ById>[1]
  ) => async () => {
      const response = 
            (await FulfillmentScriptAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getFulfillmentScript_ById(input.id))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FulfillmentScriptInfo, AxiosError<ApiError>>({
    queryKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useFulfillmentScriptAdminApi_PatchFulfillmentScript_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: FulfillmentScriptUpdate }>, 'mutationKey'>,
    callback?: (data: FulfillmentScriptInfo) => void
  ): UseMutationResult<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: FulfillmentScriptUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { id:string, data: FulfillmentScriptUpdate }) => {
      const response = 
            (await FulfillmentScriptAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchFulfillmentScript_ById(input.id, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}
  
  

export const useFulfillmentScriptAdminApi_CreateFulfillmentScript_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: FulfillmentScriptCreate }>, 'mutationKey'>,
    callback?: (data: FulfillmentScriptInfo) => void
  ): UseMutationResult<FulfillmentScriptInfo, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: FulfillmentScriptCreate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { id:string, data: FulfillmentScriptCreate }) => {
      const response = 
            (await FulfillmentScriptAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFulfillmentScript_ById(input.id, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FulfillmentScriptAdmin.FulfillmentScript_ById],
    mutationFn,
    ...options
  })
}
  
  
  