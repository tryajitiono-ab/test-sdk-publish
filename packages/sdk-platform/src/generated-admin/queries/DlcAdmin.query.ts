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
import { DlcAdminApi } from "../DlcAdminApi.js"

import { DlcItemConfigInfo } from '../../generated-definitions/DlcItemConfigInfo.js'
import { DlcItemConfigUpdate } from '../../generated-definitions/DlcItemConfigUpdate.js'
import { PlatformDlcConfigInfo } from '../../generated-definitions/PlatformDlcConfigInfo.js'
import { PlatformDlcConfigUpdate } from '../../generated-definitions/PlatformDlcConfigUpdate.js'
import { UserDlc } from '../../generated-definitions/UserDlc.js'
import { UserDlcRecordArray } from '../../generated-definitions/UserDlcRecordArray.js'


export enum Key_DlcAdmin {
  DlcConfigItem = 'Platform.DlcAdmin.DlcConfigItem',
Dlc_ByUserId = 'Platform.DlcAdmin.Dlc_ByUserId',
DlcConfigPlatformMap = 'Platform.DlcAdmin.DlcConfigPlatformMap',
DlcRecords_ByUserId = 'Platform.DlcAdmin.DlcRecords_ByUserId',

}

  

export const useDlcAdminApi_DeleteDlcConfigItem = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteDlcConfigItem())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigItem],
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
 *    queryKey: [Key_DlcAdmin.DlcConfigItem, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlcConfigItem = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<DlcItemConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DlcItemConfigInfo>) => void
  ): UseQueryResult<DlcItemConfigInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDlcAdminApi_GetDlcConfigItem>[1]
  ) => async () => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDlcConfigItem())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DlcItemConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcConfigItem, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDlcAdminApi_UpdateDlcConfigItem = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DlcItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: DlcItemConfigUpdate }>, 'mutationKey'>,
    callback?: (data: DlcItemConfigInfo) => void
  ): UseMutationResult<DlcItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: DlcItemConfigUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: DlcItemConfigUpdate }) => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDlcConfigItem(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigItem],
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
 *    queryKey: [Key_DlcAdmin.Dlc_ByUserId, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlc_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams: {type: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'} },
    options?: Omit<UseQueryOptions<UserDlc, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserDlc>) => void
  ): UseQueryResult<UserDlc, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDlcAdminApi_GetDlc_ByUserId>[1]
  ) => async () => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDlc_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserDlc, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.Dlc_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDlcAdminApi_DeleteDlcConfigPlatformMap = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteDlcConfigPlatformMap())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigPlatformMap],
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
 *    queryKey: [Key_DlcAdmin.DlcConfigPlatformMap, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlcConfigPlatformMap = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PlatformDlcConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlatformDlcConfigInfo>) => void
  ): UseQueryResult<PlatformDlcConfigInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDlcAdminApi_GetDlcConfigPlatformMap>[1]
  ) => async () => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDlcConfigPlatformMap())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlatformDlcConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcConfigPlatformMap, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDlcAdminApi_UpdateDlcConfigPlatformMap = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlatformDlcConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlatformDlcConfigUpdate }>, 'mutationKey'>,
    callback?: (data: PlatformDlcConfigInfo) => void
  ): UseMutationResult<PlatformDlcConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlatformDlcConfigUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: PlatformDlcConfigUpdate }) => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDlcConfigPlatformMap(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcConfigPlatformMap],
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
 *    queryKey: [Key_DlcAdmin.DlcRecords_ByUserId, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetDlcRecords_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {includeAllNamespaces?: boolean | null, status?: 'FULFILLED' | 'REVOKED' | 'REVOKE_FAILED', type?: 'EPICGAMES' | 'OCULUS' | 'PSN' | 'STEAM' | 'XBOX'} },
    options?: Omit<UseQueryOptions<UserDlcRecordArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserDlcRecordArray>) => void
  ): UseQueryResult<UserDlcRecordArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDlcAdminApi_GetDlcRecords_ByUserId>[1]
  ) => async () => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDlcRecords_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserDlcRecordArray, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.DlcRecords_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  