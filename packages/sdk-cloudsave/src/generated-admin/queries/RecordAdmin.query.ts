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
import { RecordAdminApi } from "../RecordAdminApi.js"

import { AdminGameRecordRequest } from '../../generated-definitions/AdminGameRecordRequest.js'
import { AdminGameRecordResponse } from '../../generated-definitions/AdminGameRecordResponse.js'
import { AdminPlayerRecordRequest } from '../../generated-definitions/AdminPlayerRecordRequest.js'
import { AdminPlayerRecordResponse } from '../../generated-definitions/AdminPlayerRecordResponse.js'
import { BulkGetAdminGameRecordRequest } from '../../generated-definitions/BulkGetAdminGameRecordRequest.js'
import { BulkGetAdminGameRecordResponse } from '../../generated-definitions/BulkGetAdminGameRecordResponse.js'
import { BulkGetAdminPlayerRecordRequest } from '../../generated-definitions/BulkGetAdminPlayerRecordRequest.js'
import { BulkGetAdminPlayerRecordResponse } from '../../generated-definitions/BulkGetAdminPlayerRecordResponse.js'
import { BulkUserIDsRequest } from '../../generated-definitions/BulkUserIDsRequest.js'
import { ListAdminGameRecordKeysResponse } from '../../generated-definitions/ListAdminGameRecordKeysResponse.js'
import { ListAdminPlayerRecordKeysResponse } from '../../generated-definitions/ListAdminPlayerRecordKeysResponse.js'


export enum Key_RecordAdmin {
  Adminrecords = 'Cloudsave.RecordAdmin.Adminrecords',
AdminrecordBulk = 'Cloudsave.RecordAdmin.AdminrecordBulk',
Adminrecord_ByKey = 'Cloudsave.RecordAdmin.Adminrecord_ByKey',
Adminrecords_ByUserId = 'Cloudsave.RecordAdmin.Adminrecords_ByUserId',
BulkUser_ByKey = 'Cloudsave.RecordAdmin.BulkUser_ByKey',
AdminrecordBulk_ByUserId = 'Cloudsave.RecordAdmin.AdminrecordBulk_ByUserId',
Adminrecord_ByUserId_ByKey = 'Cloudsave.RecordAdmin.Adminrecord_ByUserId_ByKey',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_RecordAdmin.Adminrecords, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecords = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number, query?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListAdminGameRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListAdminGameRecordKeysResponse>) => void
  ): UseQueryResult<ListAdminGameRecordKeysResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecordAdminApi_GetAdminrecords>[1]
  ) => async () => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAdminrecords(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListAdminGameRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecords, input],
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
 *    queryKey: [Key_RecordAdmin.AdminrecordBulk, input]
 * }
 * ```
 */
export const useRecordAdminApi_FetchAdminrecordBulk = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: BulkGetAdminGameRecordRequest },
    options?: Omit<UseQueryOptions<BulkGetAdminGameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetAdminGameRecordResponse>) => void
  ): UseQueryResult<BulkGetAdminGameRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecordAdminApi_FetchAdminrecordBulk>[1]
  ) => async () => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchAdminrecordBulk(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetAdminGameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.AdminrecordBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRecordAdminApi_DeleteAdminrecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { key:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string }) => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteAdminrecord_ByKey(input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByKey],
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
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecord_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { key:string },
    options?: Omit<UseQueryOptions<AdminGameRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AdminGameRecordResponse>) => void
  ): UseQueryResult<AdminGameRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecordAdminApi_GetAdminrecord_ByKey>[1]
  ) => async () => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAdminrecord_ByKey(input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AdminGameRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecord_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRecordAdminApi_CreateAdminrecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminGameRecordRequest }>, 'mutationKey'>,
    callback?: (data: AdminGameRecordResponse) => void
  ): UseMutationResult<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminGameRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: AdminGameRecordRequest }) => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createAdminrecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useRecordAdminApi_UpdateAdminrecord_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminGameRecordRequest }>, 'mutationKey'>,
    callback?: (data: AdminGameRecordResponse) => void
  ): UseMutationResult<AdminGameRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { key:string, data: AdminGameRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { key:string, data: AdminGameRecordRequest }) => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAdminrecord_ByKey(input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByKey],
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
 *    queryKey: [Key_RecordAdmin.Adminrecords_ByUserId, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecords_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, query?: string | null, tags?: string[]} },
    options?: Omit<UseQueryOptions<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListAdminPlayerRecordKeysResponse>) => void
  ): UseQueryResult<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecordAdminApi_GetAdminrecords_ByUserId>[1]
  ) => async () => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAdminrecords_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListAdminPlayerRecordKeysResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecords_ByUserId, input],
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
 *    queryKey: [Key_RecordAdmin.BulkUser_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_FetchBulkUser_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { key:string, data: BulkUserIDsRequest },
    options?: Omit<UseQueryOptions<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetAdminPlayerRecordResponse>) => void
  ): UseQueryResult<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecordAdminApi_FetchBulkUser_ByKey>[1]
  ) => async () => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchBulkUser_ByKey(input.key, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.BulkUser_ByKey, input],
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
 *    queryKey: [Key_RecordAdmin.AdminrecordBulk_ByUserId, input]
 * }
 * ```
 */
export const useRecordAdminApi_FetchAdminrecordBulk_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, data: BulkGetAdminPlayerRecordRequest },
    options?: Omit<UseQueryOptions<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BulkGetAdminPlayerRecordResponse>) => void
  ): UseQueryResult<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecordAdminApi_FetchAdminrecordBulk_ByUserId>[1]
  ) => async () => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchAdminrecordBulk_ByUserId(input.userId, input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BulkGetAdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.AdminrecordBulk_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRecordAdminApi_DeleteAdminrecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string }) => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteAdminrecord_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey],
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
 *    queryKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey, input]
 * }
 * ```
 */
export const useRecordAdminApi_GetAdminrecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, key:string },
    options?: Omit<UseQueryOptions<AdminPlayerRecordResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AdminPlayerRecordResponse>) => void
  ): UseQueryResult<AdminPlayerRecordResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRecordAdminApi_GetAdminrecord_ByUserId_ByKey>[1]
  ) => async () => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAdminrecord_ByUserId_ByKey(input.userId, input.key))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AdminPlayerRecordResponse, AxiosError<ApiError>>({
    queryKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRecordAdminApi_CreateAdminrecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AdminPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: AdminPlayerRecordResponse) => void
  ): UseMutationResult<AdminPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerRecordRequest }) => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createAdminrecord_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  

export const useRecordAdminApi_UpdateAdminrecord_ByUserId_ByKey = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AdminPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerRecordRequest }>, 'mutationKey'>,
    callback?: (data: AdminPlayerRecordResponse) => void
  ): UseMutationResult<AdminPlayerRecordResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerRecordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, key:string, data: AdminPlayerRecordRequest }) => {
      const response = 
            (await RecordAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAdminrecord_ByUserId_ByKey(input.userId, input.key, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_RecordAdmin.Adminrecord_ByUserId_ByKey],
    mutationFn,
    ...options
  })
}
  
  
  