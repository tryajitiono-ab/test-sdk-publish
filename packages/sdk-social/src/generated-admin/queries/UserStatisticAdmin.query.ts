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
import { UserStatisticAdminApi } from "../UserStatisticAdminApi.js"

import { ADtoObjectForResettingUserStatItems } from '../../generated-definitions/ADtoObjectForResettingUserStatItems.js'
import { ADtoObjectForUserStatItemValueArray } from '../../generated-definitions/ADtoObjectForUserStatItemValueArray.js'
import { BulkStatItemCreate } from '../../generated-definitions/BulkStatItemCreate.js'
import { BulkStatItemInc } from '../../generated-definitions/BulkStatItemInc.js'
import { BulkStatItemReset } from '../../generated-definitions/BulkStatItemReset.js'
import { BulkStatItemUpdate } from '../../generated-definitions/BulkStatItemUpdate.js'
import { BulkStatOperationResultArray } from '../../generated-definitions/BulkStatOperationResultArray.js'
import { BulkUserStatItemByStatCodes } from '../../generated-definitions/BulkUserStatItemByStatCodes.js'
import { BulkUserStatItemInc } from '../../generated-definitions/BulkUserStatItemInc.js'
import { BulkUserStatItemReset } from '../../generated-definitions/BulkUserStatItemReset.js'
import { BulkUserStatItemUpdate } from '../../generated-definitions/BulkUserStatItemUpdate.js'
import { StatItemInc } from '../../generated-definitions/StatItemInc.js'
import { StatItemIncResult } from '../../generated-definitions/StatItemIncResult.js'
import { StatItemUpdate } from '../../generated-definitions/StatItemUpdate.js'
import { StatItemValuePagingSlicedResult } from '../../generated-definitions/StatItemValuePagingSlicedResult.js'
import { StatResetInfo } from '../../generated-definitions/StatResetInfo.js'
import { UserStatItemInfoArray } from '../../generated-definitions/UserStatItemInfoArray.js'
import { UserStatItemPagingSlicedResult } from '../../generated-definitions/UserStatItemPagingSlicedResult.js'


export enum Key_UserStatisticAdmin {
  StatitemsBulk = 'Social.UserStatisticAdmin.StatitemsBulk',
StatitemValueBulk = 'Social.UserStatisticAdmin.StatitemValueBulk',
StatitemValueBulk_v2 = 'Social.UserStatisticAdmin.StatitemValueBulk_v2',
Statitems_ByUserId = 'Social.UserStatisticAdmin.Statitems_ByUserId',
StatitemValueResetBulk = 'Social.UserStatisticAdmin.StatitemValueResetBulk',
Statitems_ByStatCode = 'Social.UserStatisticAdmin.Statitems_ByStatCode',
StatitemBulk_ByUserId = 'Social.UserStatisticAdmin.StatitemBulk_ByUserId',
StatitemsValueBulkGetOrDefault = 'Social.UserStatisticAdmin.StatitemsValueBulkGetOrDefault',
StatitemsValueBulkGetOrDefault_v2 = 'Social.UserStatisticAdmin.StatitemsValueBulkGetOrDefault_v2',
StatitemValueBulk_ByUserId = 'Social.UserStatisticAdmin.StatitemValueBulk_ByUserId',
StatitemsValueBulk_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemsValueBulk_ByUserId_v2',
StatitemValueBulk_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemValueBulk_ByUserId_v2',
StatitemValueResetBulk_ByUserId = 'Social.UserStatisticAdmin.StatitemValueResetBulk_ByUserId',
Statitem_ByUserId_ByStatCode = 'Social.UserStatisticAdmin.Statitem_ByUserId_ByStatCode',
StatitemValueResetBulk_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemValueResetBulk_ByUserId_v2',
Statitem_ByUserId_ByStatCode_v2 = 'Social.UserStatisticAdmin.Statitem_ByUserId_ByStatCode_v2',
StatitemValue_ByUserId_ByStatCode = 'Social.UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode',
StatitemValue_ByUserId_ByStatCode_v2 = 'Social.UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode_v2',
StatitemValueBulkGetOrDefault_ByUserId_v2 = 'Social.UserStatisticAdmin.StatitemValueBulkGetOrDefault_ByUserId_v2',
StatitemValueReset_ByUserId_ByStatCode = 'Social.UserStatisticAdmin.StatitemValueReset_ByUserId_ByStatCode',

}

  

export const useUserStatisticAdminApi_GetStatitemsBulk = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {statCode: string | null, userIds: string | null} },
    options?: Omit<UseQueryOptions<UserStatItemInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserStatItemInfoArray>) => void
  ): UseQueryResult<UserStatItemInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsBulk>[1]
  ) => async () => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatitemsBulk(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserStatItemInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_PatchStatitemValueBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemInc[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStatitemValueBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemInc[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemInc[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueBulk_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemUpdate[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueBulk_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_GetStatitems_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {isPublic?: boolean | null, limit?: number, offset?: number, sortBy?: string | null, statCodes?: string | null, tags?: string | null} },
    options?: Omit<UseQueryOptions<UserStatItemPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserStatItemPagingSlicedResult>) => void
  ): UseQueryResult<UserStatItemPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserStatisticAdminApi_GetStatitems_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatitems_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserStatItemPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.Statitems_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueResetBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemReset[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkUserStatItemReset[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkUserStatItemReset[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueResetBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_GetStatitems_ByStatCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { statCode:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null} },
    options?: Omit<UseQueryOptions<StatItemValuePagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StatItemValuePagingSlicedResult>) => void
  ): UseQueryResult<StatItemValuePagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserStatisticAdminApi_GetStatitems_ByStatCode>[1]
  ) => async () => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatitems_ByStatCode(input.statCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StatItemValuePagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.Statitems_ByStatCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_CreateStatitemBulk_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemCreate[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemCreate[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BulkStatItemCreate[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatitemBulk_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemBulk_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {statCode: string | null, userIds: string[]} },
    options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
  ): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault>[1]
  ) => async () => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatitemsValueBulkGetOrDefault(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {statCode: string | null, userIds: string[], additionalKey?: string | null} },
    options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
  ): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsValueBulkGetOrDefault_v2>[1]
  ) => async () => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatitemsValueBulkGetOrDefault_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulkGetOrDefault_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_PatchStatitemValueBulk_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemInc[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemInc[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BulkStatItemInc[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStatitemValueBulk_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueBulk_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemInc[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemInc[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BulkStatItemInc[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueBulk_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_GetStatitemsValueBulk_ByUserId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {additionalKey?: string | null, statCodes?: string[], tags?: string[]} },
    options?: Omit<UseQueryOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ADtoObjectForUserStatItemValueArray>) => void
  ): UseQueryResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserStatisticAdminApi_GetStatitemsValueBulk_ByUserId_v2>[1]
  ) => async () => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatitemsValueBulk_ByUserId_v2(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>>({
    queryKey: [Key_UserStatisticAdmin.StatitemsValueBulk_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueBulk_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemUpdate[], queryParams?: {additionalKey?: string | null} }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemUpdate[], queryParams?: {additionalKey?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BulkStatItemUpdate[], queryParams?: {additionalKey?: string | null} }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueBulk_ByUserId_v2(input.userId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulk_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueResetBulk_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemReset[] }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkStatItemReset[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BulkStatItemReset[] }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueResetBulk_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_DeleteStatitem_ByUserId_ByStatCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, statCode:string }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteStatitem_ByUserId_ByStatCode(input.userId, input.statCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_CreateStatitem_ByUserId_ByStatCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, statCode:string }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatitem_ByUserId_ByStatCode(input.userId, input.statCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueResetBulk_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: ADtoObjectForResettingUserStatItems[], queryParams?: {additionalKey?: string | null} }>, 'mutationKey'>,
    callback?: (data: BulkStatOperationResultArray) => void
  ): UseMutationResult<BulkStatOperationResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: ADtoObjectForResettingUserStatItems[], queryParams?: {additionalKey?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: ADtoObjectForResettingUserStatItems[], queryParams?: {additionalKey?: string | null} }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueResetBulk_ByUserId_v2(input.userId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueResetBulk_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_DeleteStatitem_ByUserId_ByStatCode_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string,  queryParams?: {additionalKey?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string,  queryParams?: {additionalKey?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, statCode:string,  queryParams?: {additionalKey?: string | null} }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteStatitem_ByUserId_ByStatCode_v2(input.userId, input.statCode, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.Statitem_ByUserId_ByStatCode_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_PatchStatitemValue_ByUserId_ByStatCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string, data: StatItemInc }>, 'mutationKey'>,
    callback?: (data: StatItemIncResult) => void
  ): UseMutationResult<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string, data: StatItemInc }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, statCode:string, data: StatItemInc }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStatitemValue_ByUserId_ByStatCode(input.userId, input.statCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValue_ByUserId_ByStatCode_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string, data: StatItemUpdate, queryParams?: {additionalKey?: string | null} }>, 'mutationKey'>,
    callback?: (data: StatItemIncResult) => void
  ): UseMutationResult<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string, data: StatItemUpdate, queryParams?: {additionalKey?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, statCode:string, data: StatItemUpdate, queryParams?: {additionalKey?: string | null} }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValue_ByUserId_ByStatCode_v2(input.userId, input.statCode, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValue_ByUserId_ByStatCode_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_CreateStatitemValueBulkGetOrDefault_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkUserStatItemByStatCodes, queryParams?: {additionalKey?: string | null} }>, 'mutationKey'>,
    callback?: (data: ADtoObjectForUserStatItemValueArray) => void
  ): UseMutationResult<ADtoObjectForUserStatItemValueArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BulkUserStatItemByStatCodes, queryParams?: {additionalKey?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BulkUserStatItemByStatCodes, queryParams?: {additionalKey?: string | null} }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStatitemValueBulkGetOrDefault_ByUserId_v2(input.userId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueBulkGetOrDefault_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUserStatisticAdminApi_UpdateStatitemValueReset_ByUserId_ByStatCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string, data: StatResetInfo, queryParams?: {additionalKey?: string | null} }>, 'mutationKey'>,
    callback?: (data: StatItemIncResult) => void
  ): UseMutationResult<StatItemIncResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, statCode:string, data: StatResetInfo, queryParams?: {additionalKey?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, statCode:string, data: StatResetInfo, queryParams?: {additionalKey?: string | null} }) => {
      const response = 
            (await UserStatisticAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatitemValueReset_ByUserId_ByStatCode(input.userId, input.statCode, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserStatisticAdmin.StatitemValueReset_ByUserId_ByStatCode],
    mutationFn,
    ...options
  })
}
  
  
  