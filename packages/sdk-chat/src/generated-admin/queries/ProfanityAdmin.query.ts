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
import { ProfanityAdminApi } from "../ProfanityAdminApi.js"

import { Dictionary } from '../../generated-definitions/Dictionary.js'
import { DictionaryExport } from '../../generated-definitions/DictionaryExport.js'
import { DictionaryGroupArray } from '../../generated-definitions/DictionaryGroupArray.js'
import { DictionaryImportResult } from '../../generated-definitions/DictionaryImportResult.js'
import { DictionaryInsertBulkRequest } from '../../generated-definitions/DictionaryInsertBulkRequest.js'
import { DictionaryInsertRequest } from '../../generated-definitions/DictionaryInsertRequest.js'
import { DictionaryQueryResult } from '../../generated-definitions/DictionaryQueryResult.js'
import { DictionaryUpdateRequest } from '../../generated-definitions/DictionaryUpdateRequest.js'


export enum Key_ProfanityAdmin {
  ProfanityDictionary = 'Chat.ProfanityAdmin.ProfanityDictionary',
ProfanityDictionary_ById = 'Chat.ProfanityAdmin.ProfanityDictionary_ById',
ProfanityDictionaryBulk = 'Chat.ProfanityAdmin.ProfanityDictionaryBulk',
ProfanityDictionaryGroup = 'Chat.ProfanityAdmin.ProfanityDictionaryGroup',
ProfanityDictionaryExport = 'Chat.ProfanityAdmin.ProfanityDictionaryExport',
ProfanityDictionaryImport = 'Chat.ProfanityAdmin.ProfanityDictionaryImport',

}

  

export const useProfanityAdminApi_GetProfanityDictionary = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {filterMask?: string | null, includeChildren?: boolean | null, limit?: number, offset?: number, parentId?: string | null, startWith?: string | null, wordType?: string | null} },
    options?: Omit<UseQueryOptions<DictionaryQueryResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DictionaryQueryResult>) => void
  ): UseQueryResult<DictionaryQueryResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_GetProfanityDictionary>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfanityDictionary(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DictionaryQueryResult, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityDictionary, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateProfanityDictionary = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Dictionary, AxiosError<ApiError>, SdkSetConfigParam & { data: DictionaryInsertRequest }>, 'mutationKey'>,
    callback?: (data: Dictionary) => void
  ): UseMutationResult<Dictionary, AxiosError<ApiError>, SdkSetConfigParam & { data: DictionaryInsertRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DictionaryInsertRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProfanityDictionary(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionary],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_DeleteProfanityDictionary_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { id:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { id:string }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteProfanityDictionary_ById(input.id))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionary_ById],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_UpdateProfanityDictionary_ById = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Dictionary, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: DictionaryUpdateRequest }>, 'mutationKey'>,
    callback?: (data: Dictionary) => void
  ): UseMutationResult<Dictionary, AxiosError<ApiError>, SdkSetConfigParam & { id:string, data: DictionaryUpdateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { id:string, data: DictionaryUpdateRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateProfanityDictionary_ById(input.id, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionary_ById],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateProfanityDictionaryBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Dictionary, AxiosError<ApiError>, SdkSetConfigParam & { data: DictionaryInsertBulkRequest }>, 'mutationKey'>,
    callback?: (data: Dictionary) => void
  ): UseMutationResult<Dictionary, AxiosError<ApiError>, SdkSetConfigParam & { data: DictionaryInsertBulkRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DictionaryInsertBulkRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProfanityDictionaryBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionaryBulk],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_GetProfanityDictionaryGroup = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<DictionaryGroupArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DictionaryGroupArray>) => void
  ): UseQueryResult<DictionaryGroupArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_GetProfanityDictionaryGroup>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfanityDictionaryGroup(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DictionaryGroupArray, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityDictionaryGroup, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useProfanityAdminApi_GetProfanityDictionaryExport = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<DictionaryExport, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DictionaryExport>) => void
  ): UseQueryResult<DictionaryExport, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_GetProfanityDictionaryExport>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfanityDictionaryExport())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DictionaryExport, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityDictionaryExport, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateProfanityDictionaryImport = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DictionaryImportResult, AxiosError<ApiError>, SdkSetConfigParam & { data: {file: File}, queryParams?: {action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE', showResult?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: DictionaryImportResult) => void
  ): UseMutationResult<DictionaryImportResult, AxiosError<ApiError>, SdkSetConfigParam & { data: {file: File}, queryParams?: {action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE', showResult?: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {file: File}, queryParams?: {action?: 'FULLREPLACE' | 'LEAVEOUT' | 'REPLACE', showResult?: boolean | null} }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProfanityDictionaryImport(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityDictionaryImport],
    mutationFn,
    ...options
  })
}
  
  
  