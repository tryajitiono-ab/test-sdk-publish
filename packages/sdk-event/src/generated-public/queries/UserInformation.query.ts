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
import { UserInformationApi } from "../UserInformationApi.js"

import { EventResponse } from '../../generated-definitions/EventResponse.js'
import { UserLastActivity } from '../../generated-definitions/UserLastActivity.js'


export enum Key_UserInformation {
  Activity_ByUserId = 'Event.UserInformation.Activity_ByUserId',
Activities_ByUserId = 'Event.UserInformation.Activities_ByUserId',
LastActivityTime_ByUserId = 'Event.UserInformation.LastActivityTime_ByUserId',

}

  

export const useUserInformationApi_DeleteActivity_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UserInformationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteActivity_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserInformation.Activity_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUserInformationApi_GetActivities_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams: {pageSize: number, offset?: number} },
    options?: Omit<UseQueryOptions<EventResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EventResponse>) => void
  ): UseQueryResult<EventResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserInformationApi_GetActivities_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserInformationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getActivities_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EventResponse, AxiosError<ApiError>>({
    queryKey: [Key_UserInformation.Activities_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserInformationApi_GetLastActivityTime_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserLastActivity, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserLastActivity>) => void
  ): UseQueryResult<UserLastActivity, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserInformationApi_GetLastActivityTime_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserInformationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLastActivityTime_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserLastActivity, AxiosError<ApiError>>({
    queryKey: [Key_UserInformation.LastActivityTime_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  