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
import { SessionApi } from "../SessionApi.js"

import { ClaimSessionRequest } from '../../generated-definitions/ClaimSessionRequest.js'
import { CreateSessionRequest } from '../../generated-definitions/CreateSessionRequest.js'
import { SessionResponse } from '../../generated-definitions/SessionResponse.js'


export enum Key_Session {
  Session = 'Dsmcontroller.Session.Session',
SessionClaim = 'Dsmcontroller.Session.SessionClaim',
Session_BySessionId = 'Dsmcontroller.Session.Session_BySessionId',
Cancel_BySessionId = 'Dsmcontroller.Session.Cancel_BySessionId',

}

  

export const useSessionApi_CreateSession = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateSessionRequest }>, 'mutationKey'>,
    callback?: (data: SessionResponse) => void
  ): UseMutationResult<SessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateSessionRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateSessionRequest }) => {
      const response = 
            (await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSession(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Session.Session],
    mutationFn,
    ...options
  })
}
  
  

export const useSessionApi_CreateSessionClaim = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimSessionRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ClaimSessionRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ClaimSessionRequest }) => {
      const response = 
            (await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSessionClaim(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Session.SessionClaim],
    mutationFn,
    ...options
  })
}
  
  

export const useSessionApi_GetSession_BySessionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { sessionID:string },
    options?: Omit<UseQueryOptions<SessionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SessionResponse>) => void
  ): UseQueryResult<SessionResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSessionApi_GetSession_BySessionId>[1]
  ) => async () => {
      const response = 
            (await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSession_BySessionId(input.sessionID))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_Session.Session_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSessionApi_DeleteCancel_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionID:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionID:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { sessionID:string }) => {
      const response = 
            (await SessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteCancel_BySessionId(input.sessionID))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Session.Cancel_BySessionId],
    mutationFn,
    ...options
  })
}
  
  
  