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

import { AdminAddProfanityFilterIntoListRequest } from '../../generated-definitions/AdminAddProfanityFilterIntoListRequest.js'
import { AdminAddProfanityFiltersRequest } from '../../generated-definitions/AdminAddProfanityFiltersRequest.js'
import { AdminCreateProfanityListRequest } from '../../generated-definitions/AdminCreateProfanityListRequest.js'
import { AdminDeleteProfanityFilterRequest } from '../../generated-definitions/AdminDeleteProfanityFilterRequest.js'
import { AdminGetProfanityListFiltersV1Response } from '../../generated-definitions/AdminGetProfanityListFiltersV1Response.js'
import { AdminGetProfanityListsListResponseArray } from '../../generated-definitions/AdminGetProfanityListsListResponseArray.js'
import { AdminSetProfanityRuleForNamespaceRequest } from '../../generated-definitions/AdminSetProfanityRuleForNamespaceRequest.js'
import { AdminUpdateProfanityList } from '../../generated-definitions/AdminUpdateProfanityList.js'
import { AdminVerifyMessageProfanityRequest } from '../../generated-definitions/AdminVerifyMessageProfanityRequest.js'
import { AdminVerifyMessageProfanityResponse } from '../../generated-definitions/AdminVerifyMessageProfanityResponse.js'
import { DebugProfanityFilterRequest } from '../../generated-definitions/DebugProfanityFilterRequest.js'
import { ProfanityFilterArray } from '../../generated-definitions/ProfanityFilterArray.js'
import { ProfanityRule } from '../../generated-definitions/ProfanityRule.js'


export enum Key_ProfanityAdmin {
  ProfanityRule = 'Lobby.ProfanityAdmin.ProfanityRule',
ProfanityLists = 'Lobby.ProfanityAdmin.ProfanityLists',
ProfanityList = 'Lobby.ProfanityAdmin.ProfanityList',
ProfanityVerify = 'Lobby.ProfanityAdmin.ProfanityVerify',
ProfanityList_ByList = 'Lobby.ProfanityAdmin.ProfanityList_ByList',
ProfanityFilterDebug = 'Lobby.ProfanityAdmin.ProfanityFilterDebug',
FiltersProfanity_ByList = 'Lobby.ProfanityAdmin.FiltersProfanity_ByList',
FilterProfanity_ByList = 'Lobby.ProfanityAdmin.FilterProfanity_ByList',
FilterBulkProfanity_ByList = 'Lobby.ProfanityAdmin.FilterBulkProfanity_ByList',
FilterDeleteProfanity_ByList = 'Lobby.ProfanityAdmin.FilterDeleteProfanity_ByList',
FilterBulkFileProfanity_ByList = 'Lobby.ProfanityAdmin.FilterBulkFileProfanity_ByList',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ProfanityAdmin.ProfanityRule, input]
 * }
 * ```
 */
export const useProfanityAdminApi_GetProfanityRule = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ProfanityRule, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ProfanityRule>) => void
  ): UseQueryResult<ProfanityRule, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_GetProfanityRule>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfanityRule())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ProfanityRule, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityRule, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useProfanityAdminApi_UpdateProfanityRule = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: AdminSetProfanityRuleForNamespaceRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: AdminSetProfanityRuleForNamespaceRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: AdminSetProfanityRuleForNamespaceRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateProfanityRule(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityRule],
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
 *    queryKey: [Key_ProfanityAdmin.ProfanityLists, input]
 * }
 * ```
 */
export const useProfanityAdminApi_GetProfanityLists = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<AdminGetProfanityListsListResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AdminGetProfanityListsListResponseArray>) => void
  ): UseQueryResult<AdminGetProfanityListsListResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_GetProfanityLists>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfanityLists())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AdminGetProfanityListsListResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityLists, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateProfanityList = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: AdminCreateProfanityListRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: AdminCreateProfanityListRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: AdminCreateProfanityListRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProfanityList(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityList],
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
 *    queryKey: [Key_ProfanityAdmin.ProfanityVerify, input]
 * }
 * ```
 */
export const useProfanityAdminApi_FetchProfanityVerify = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: AdminVerifyMessageProfanityRequest },
    options?: Omit<UseQueryOptions<AdminVerifyMessageProfanityResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AdminVerifyMessageProfanityResponse>) => void
  ): UseQueryResult<AdminVerifyMessageProfanityResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_FetchProfanityVerify>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchProfanityVerify(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AdminVerifyMessageProfanityResponse, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityVerify, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useProfanityAdminApi_DeleteProfanityList_ByList = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { list:string }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteProfanityList_ByList(input.list))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityList_ByList],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_UpdateProfanityList_ByList = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminUpdateProfanityList }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminUpdateProfanityList }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { list:string, data: AdminUpdateProfanityList }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateProfanityList_ByList(input.list, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.ProfanityList_ByList],
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
 *    queryKey: [Key_ProfanityAdmin.ProfanityFilterDebug, input]
 * }
 * ```
 */
export const useProfanityAdminApi_FetchProfanityFilterDebug = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: DebugProfanityFilterRequest },
    options?: Omit<UseQueryOptions<ProfanityFilterArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ProfanityFilterArray>) => void
  ): UseQueryResult<ProfanityFilterArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_FetchProfanityFilterDebug>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchProfanityFilterDebug(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ProfanityFilterArray, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.ProfanityFilterDebug, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_ProfanityAdmin.FiltersProfanity_ByList, input]
 * }
 * ```
 */
export const useProfanityAdminApi_GetFiltersProfanity_ByList = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { list:string },
    options?: Omit<UseQueryOptions<AdminGetProfanityListFiltersV1Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AdminGetProfanityListFiltersV1Response>) => void
  ): UseQueryResult<AdminGetProfanityListFiltersV1Response, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useProfanityAdminApi_GetFiltersProfanity_ByList>[1]
  ) => async () => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getFiltersProfanity_ByList(input.list))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AdminGetProfanityListFiltersV1Response, AxiosError<ApiError>>({
    queryKey: [Key_ProfanityAdmin.FiltersProfanity_ByList, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateFilterProfanity_ByList = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminAddProfanityFilterIntoListRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminAddProfanityFilterIntoListRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { list:string, data: AdminAddProfanityFilterIntoListRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFilterProfanity_ByList(input.list, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterProfanity_ByList],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateFilterBulkProfanity_ByList = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminAddProfanityFiltersRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminAddProfanityFiltersRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { list:string, data: AdminAddProfanityFiltersRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFilterBulkProfanity_ByList(input.list, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterBulkProfanity_ByList],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateFilterDeleteProfanity_ByList = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ProfanityFilterArray, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminDeleteProfanityFilterRequest }>, 'mutationKey'>,
    callback?: (data: ProfanityFilterArray) => void
  ): UseMutationResult<ProfanityFilterArray, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: AdminDeleteProfanityFilterRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { list:string, data: AdminDeleteProfanityFilterRequest }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFilterDeleteProfanity_ByList(input.list, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterDeleteProfanity_ByList],
    mutationFn,
    ...options
  })
}
  
  

export const useProfanityAdminApi_CreateFilterBulkFileProfanity_ByList = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: number[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { list:string, data: number[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { list:string, data: number[] }) => {
      const response = 
            (await ProfanityAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFilterBulkFileProfanity_ByList(input.list, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ProfanityAdmin.FilterBulkFileProfanity_ByList],
    mutationFn,
    ...options
  })
}
  
  
  