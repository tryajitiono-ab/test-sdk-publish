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
import { GameRecordAdminApi } from "../GameRecordAdminApi.js"

import { GameRecordAdminResponse } from '../../generated-definitions/GameRecordAdminResponse.js'
import { GameRecordRequest } from '../../generated-definitions/GameRecordRequest.js'
import { ListGameRecordKeysResponse } from '../../generated-definitions/ListGameRecordKeysResponse.js'


export enum Key_GameRecordAdmin {
  Records = 'Cloudsave.GameRecordAdmin.Records',
Record_ByKey = 'Cloudsave.GameRecordAdmin.Record_ByKey',

}

  

export const useGameRecordAdminApi_GetRecords = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {limit: number, offset: number, query?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListGameRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListGameRecordKeysResponse>) => void
  ): UseQueryResult<ListGameRecordKeysResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameRecordAdminApi_GetRecords>[1]
  ) => async () => {
      const response = 
            (await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecords(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListGameRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameRecordAdmin.Records, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGameRecordAdminApi_DeleteRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { key:string }) => {
      const response = 
            (await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRecord_ByKey(input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useGameRecordAdminApi_GetRecord_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { key:string },
    options?: Omit<UseQueryOptions<GameRecordAdminResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GameRecordAdminResponse>) => void
  ): UseQueryResult<GameRecordAdminResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameRecordAdminApi_GetRecord_ByKey>[1]
  ) => async () => {
      const response = 
            (await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRecord_ByKey(input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GameRecordAdminResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameRecordAdmin.Record_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGameRecordAdminApi_CreateRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }>, 'mutationKey'>,
    callback?: (data: GameRecordAdminResponse) => void
  ): UseMutationResult<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: GameRecordRequest }) => {
      const response = 
            (await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useGameRecordAdminApi_UpdateRecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }>, 'mutationKey'>,
    callback?: (data: GameRecordAdminResponse) => void
  ): UseMutationResult<GameRecordAdminResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: GameRecordRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: GameRecordRequest }) => {
      const response = 
            (await GameRecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameRecordAdmin.Record_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  