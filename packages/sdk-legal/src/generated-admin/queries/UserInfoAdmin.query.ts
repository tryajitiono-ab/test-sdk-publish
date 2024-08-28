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
import { UserInfoAdminApi } from "../UserInfoAdminApi.js"

import { RetrieveUserInfoCacheStatusResponseArray } from '../../generated-definitions/RetrieveUserInfoCacheStatusResponseArray.js'


export enum Key_UserInfoAdmin {
  UserInfo = 'Legal.UserInfoAdmin.UserInfo',

}

  

export const useUserInfoAdminApi_DeleteUserInfo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {namespace?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {namespace?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams?: {namespace?: string | null} }) => {
      const response = 
            (await UserInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserInfo(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserInfoAdmin.UserInfo],
    mutationFn,
    ...options
  })
}
  
  

export const useUserInfoAdminApi_GetUserInfo = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {namespaces?: string | null} },
    options?: Omit<UseQueryOptions<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RetrieveUserInfoCacheStatusResponseArray>) => void
  ): UseQueryResult<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserInfoAdminApi_GetUserInfo>[1]
  ) => async () => {
      const response = 
            (await UserInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUserInfo(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RetrieveUserInfoCacheStatusResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UserInfoAdmin.UserInfo, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserInfoAdminApi_UpdateUserInfo = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {namespace: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {namespace: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams: {namespace: string | null} }) => {
      const response = 
            (await UserInfoAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUserInfo(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserInfoAdmin.UserInfo],
    mutationFn,
    ...options
  })
}
  
  
  