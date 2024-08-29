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
import { GameSessionAdminApi } from "../GameSessionAdminApi.js"

import { DeleteBulkGameSessionRequest } from '../../generated-definitions/DeleteBulkGameSessionRequest.js'
import { DeleteBulkGameSessionsApiResponse } from '../../generated-definitions/DeleteBulkGameSessionsApiResponse.js'
import { GameSessionQueryResponse } from '../../generated-definitions/GameSessionQueryResponse.js'
import { SetDsReadyRequest } from '../../generated-definitions/SetDsReadyRequest.js'
import { UpdateGameSessionMemberStatusResponse } from '../../generated-definitions/UpdateGameSessionMemberStatusResponse.js'


export enum Key_GameSessionAdmin {
  Gamesessions = 'Session.GameSessionAdmin.Gamesessions',
Gamesession = 'Session.GameSessionAdmin.Gamesession',
GamesessionBulk = 'Session.GameSessionAdmin.GamesessionBulk',
D_BySessionId = 'Session.GameSessionAdmin.D_BySessionId',
Kick_BySessionId_ByMemberId = 'Session.GameSessionAdmin.Kick_BySessionId_ByMemberId',
Statu_BySessionId_ByMemberId_ByStatusType = 'Session.GameSessionAdmin.Statu_BySessionId_ByMemberId_ByStatusType',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GameSessionAdmin.Gamesessions, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_GetGamesessions = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {configurationName?: string | null, dsPodName?: string | null, fromTime?: string | null, gameMode?: string | null, isPersistent?: string | null, isSoftDeleted?: string | null, joinability?: string | null, limit?: number, matchPool?: string | null, memberID?: string | null, offset?: number, order?: string | null, orderBy?: string | null, sessionID?: string | null, status?: string | null, statusV2?: string | null, toTime?: string | null} },
    options?: Omit<UseQueryOptions<GameSessionQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GameSessionQueryResponse>) => void
  ): UseQueryResult<GameSessionQueryResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameSessionAdminApi_GetGamesessions>[1]
  ) => async () => {
      const response = 
            (await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGamesessions(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GameSessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionAdmin.Gamesessions, input],
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
 *    queryKey: [Key_GameSessionAdmin.Gamesession, input]
 * }
 * ```
 */
export const useGameSessionAdminApi_FetchGamesession = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<GameSessionQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GameSessionQueryResponse>) => void
  ): UseQueryResult<GameSessionQueryResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameSessionAdminApi_FetchGamesession>[1]
  ) => async () => {
      const response = 
            (await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchGamesession())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GameSessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSessionAdmin.Gamesession, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGameSessionAdminApi_DeleteGamesessionBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DeleteBulkGameSessionsApiResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkGameSessionRequest }>, 'mutationKey'>,
    callback?: (data: DeleteBulkGameSessionsApiResponse) => void
  ): UseMutationResult<DeleteBulkGameSessionsApiResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: DeleteBulkGameSessionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: DeleteBulkGameSessionRequest }) => {
      const response = 
            (await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteGamesessionBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSessionAdmin.GamesessionBulk],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionAdminApi_UpdateD_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: SetDsReadyRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: SetDsReadyRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, data: SetDsReadyRequest }) => {
      const response = 
            (await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateD_BySessionId(input.sessionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSessionAdmin.D_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionAdminApi_DeleteKick_BySessionId_ByMemberId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, memberId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, memberId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, memberId:string }) => {
      const response = 
            (await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteKick_BySessionId_ByMemberId(input.sessionId, input.memberId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSessionAdmin.Kick_BySessionId_ByMemberId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionAdminApi_UpdateStatu_BySessionId_ByMemberId_ByStatusType = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateGameSessionMemberStatusResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, memberId:string, statusType:string }>, 'mutationKey'>,
    callback?: (data: UpdateGameSessionMemberStatusResponse) => void
  ): UseMutationResult<UpdateGameSessionMemberStatusResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, memberId:string, statusType:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, memberId:string, statusType:string }) => {
      const response = 
            (await GameSessionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateStatu_BySessionId_ByMemberId_ByStatusType(input.sessionId, input.memberId, input.statusType))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSessionAdmin.Statu_BySessionId_ByMemberId_ByStatusType],
    mutationFn,
    ...options
  })
}
  
  
  