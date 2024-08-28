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
import { PlayerApi } from "../PlayerApi.js"

import { PlayerAttributesRequestBody } from '../../generated-definitions/PlayerAttributesRequestBody.js'
import { PlayerAttributesResponseBody } from '../../generated-definitions/PlayerAttributesResponseBody.js'
import { PlayersCurrentPlatformRequest } from '../../generated-definitions/PlayersCurrentPlatformRequest.js'
import { PlayersCurrentPlatformResponse } from '../../generated-definitions/PlayersCurrentPlatformResponse.js'


export enum Key_Player {
  UserBulkPlatform = 'Session.Player.UserBulkPlatform',
UserMeAttribute = 'Session.Player.UserMeAttribute',
UsersMeAttributes = 'Session.Player.UsersMeAttributes',

}

  

export const usePlayerApi_FetchUserBulkPlatform = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: PlayersCurrentPlatformRequest },
    options?: Omit<UseQueryOptions<PlayersCurrentPlatformResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayersCurrentPlatformResponse>) => void
  ): UseQueryResult<PlayersCurrentPlatformResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerApi_FetchUserBulkPlatform>[1]
  ) => async () => {
      const response = 
            (await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchUserBulkPlatform(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayersCurrentPlatformResponse, AxiosError<ApiError>>({
    queryKey: [Key_Player.UserBulkPlatform, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerApi_DeleteUserMeAttribute = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeAttribute())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Player.UserMeAttribute],
    mutationFn,
    ...options
  })
}
  
  

export const usePlayerApi_GetUsersMeAttributes = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PlayerAttributesResponseBody, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayerAttributesResponseBody>) => void
  ): UseQueryResult<PlayerAttributesResponseBody, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePlayerApi_GetUsersMeAttributes>[1]
  ) => async () => {
      const response = 
            (await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeAttributes())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayerAttributesResponseBody, AxiosError<ApiError>>({
    queryKey: [Key_Player.UsersMeAttributes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePlayerApi_CreateUserMeAttribute = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayerAttributesResponseBody, AxiosError<ApiError>, SdkSetConfigParam & { data: PlayerAttributesRequestBody }>, 'mutationKey'>,
    callback?: (data: PlayerAttributesResponseBody) => void
  ): UseMutationResult<PlayerAttributesResponseBody, AxiosError<ApiError>, SdkSetConfigParam & { data: PlayerAttributesRequestBody }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PlayerAttributesRequestBody }) => {
      const response = 
            (await PlayerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeAttribute(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Player.UserMeAttribute],
    mutationFn,
    ...options
  })
}
  
  
  