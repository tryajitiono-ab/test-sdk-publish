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
import { GameSessionApi } from "../GameSessionApi.js"

import { AppendTeamGameSessionRequest } from '../../generated-definitions/AppendTeamGameSessionRequest.js'
import { CreateGameSessionRequest } from '../../generated-definitions/CreateGameSessionRequest.js'
import { GameSessionQueryResponse } from '../../generated-definitions/GameSessionQueryResponse.js'
import { GameSessionResponse } from '../../generated-definitions/GameSessionResponse.js'
import { JoinByCodeRequest } from '../../generated-definitions/JoinByCodeRequest.js'
import { PromoteLeaderRequest } from '../../generated-definitions/PromoteLeaderRequest.js'
import { ServerSecret } from '../../generated-definitions/ServerSecret.js'
import { SessionInviteRequest } from '../../generated-definitions/SessionInviteRequest.js'
import { UpdateGameSessionBackfillRequest } from '../../generated-definitions/UpdateGameSessionBackfillRequest.js'
import { UpdateGameSessionRequest } from '../../generated-definitions/UpdateGameSessionRequest.js'


export enum Key_GameSession {
  Gamesession = 'Session.GameSession.Gamesession',
Gamesession_ByNS = 'Session.GameSession.Gamesession_ByNS',
UsersMeGamesessions = 'Session.GameSession.UsersMeGamesessions',
GamesessionJoinCode = 'Session.GameSession.GamesessionJoinCode',
Gamesession_BySessionId = 'Session.GameSession.Gamesession_BySessionId',
Code_BySessionId = 'Session.GameSession.Code_BySessionId',
Join_BySessionId = 'Session.GameSession.Join_BySessionId',
Leave_BySessionId = 'Session.GameSession.Leave_BySessionId',
Team_BySessionId = 'Session.GameSession.Team_BySessionId',
GamesessionServer_ByPodName = 'Session.GameSession.GamesessionServer_ByPodName',
Invite_BySessionId = 'Session.GameSession.Invite_BySessionId',
Leader_BySessionId = 'Session.GameSession.Leader_BySessionId',
Reject_BySessionId = 'Session.GameSession.Reject_BySessionId',
Secret_BySessionId = 'Session.GameSession.Secret_BySessionId',
Backfill_BySessionId = 'Session.GameSession.Backfill_BySessionId',
Cancel_BySessionId_ByUserId = 'Session.GameSession.Cancel_BySessionId_ByUserId',
Kick_BySessionId_ByMemberId = 'Session.GameSession.Kick_BySessionId_ByMemberId',

}

  

export const useGameSessionApi_CreateGamesession = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateGameSessionRequest }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateGameSessionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateGameSessionRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createGamesession(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Gamesession],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_CreateGamesession_ByNS = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionQueryResponse, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: GameSessionQueryResponse) => void
  ): UseMutationResult<GameSessionQueryResponse, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createGamesession_ByNS())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Gamesession_ByNS],
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
 *    queryKey: [Key_GameSession.UsersMeGamesessions, input]
 * }
 * ```
 */
export const useGameSessionApi_GetUsersMeGamesessions = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {order?: string | null, orderBy?: string | null, status?: string | null} },
    options?: Omit<UseQueryOptions<GameSessionQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GameSessionQueryResponse>) => void
  ): UseQueryResult<GameSessionQueryResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameSessionApi_GetUsersMeGamesessions>[1]
  ) => async () => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeGamesessions(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GameSessionQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSession.UsersMeGamesessions, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGameSessionApi_CreateGamesessionJoinCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: JoinByCodeRequest }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: JoinByCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: JoinByCodeRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createGamesessionJoinCode(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.GamesessionJoinCode],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_DeleteGamesession_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteGamesession_BySessionId(input.sessionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Gamesession_BySessionId],
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
 *    queryKey: [Key_GameSession.Gamesession_BySessionId, input]
 * }
 * ```
 */
export const useGameSessionApi_GetGamesession_BySessionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { sessionId:string },
    options?: Omit<UseQueryOptions<GameSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GameSessionResponse>) => void
  ): UseQueryResult<GameSessionResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameSessionApi_GetGamesession_BySessionId>[1]
  ) => async () => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGamesession_BySessionId(input.sessionId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GameSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSession.Gamesession_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGameSessionApi_PatchGamesession_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionRequest }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchGamesession_BySessionId(input.sessionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Gamesession_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_UpdateGamesession_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionRequest }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateGamesession_BySessionId(input.sessionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Gamesession_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_DeleteCode_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteCode_BySessionId(input.sessionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Code_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_UpdateCode_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCode_BySessionId(input.sessionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Code_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_CreateJoin_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoin_BySessionId(input.sessionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Join_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_DeleteLeave_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLeave_BySessionId(input.sessionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Leave_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_UpdateTeam_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: AppendTeamGameSessionRequest }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: AppendTeamGameSessionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, data: AppendTeamGameSessionRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateTeam_BySessionId(input.sessionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Team_BySessionId],
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
 *    queryKey: [Key_GameSession.GamesessionServer_ByPodName, input]
 * }
 * ```
 */
export const useGameSessionApi_GetGamesessionServer_ByPodName = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { podName:string },
    options?: Omit<UseQueryOptions<GameSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GameSessionResponse>) => void
  ): UseQueryResult<GameSessionResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameSessionApi_GetGamesessionServer_ByPodName>[1]
  ) => async () => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getGamesessionServer_ByPodName(input.podName))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GameSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_GameSession.GamesessionServer_ByPodName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGameSessionApi_CreateInvite_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: SessionInviteRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: SessionInviteRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, data: SessionInviteRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInvite_BySessionId(input.sessionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Invite_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_UpdateLeader_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: PromoteLeaderRequest }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: PromoteLeaderRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, data: PromoteLeaderRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateLeader_BySessionId(input.sessionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Leader_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_DeleteReject_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteReject_BySessionId(input.sessionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Reject_BySessionId],
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
 *    queryKey: [Key_GameSession.Secret_BySessionId, input]
 * }
 * ```
 */
export const useGameSessionApi_GetSecret_BySessionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { sessionId:string },
    options?: Omit<UseQueryOptions<ServerSecret, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ServerSecret>) => void
  ): UseQueryResult<ServerSecret, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGameSessionApi_GetSecret_BySessionId>[1]
  ) => async () => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSecret_BySessionId(input.sessionId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ServerSecret, AxiosError<ApiError>>({
    queryKey: [Key_GameSession.Secret_BySessionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGameSessionApi_UpdateBackfill_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionBackfillRequest }>, 'mutationKey'>,
    callback?: (data: GameSessionResponse) => void
  ): UseMutationResult<GameSessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionBackfillRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, data: UpdateGameSessionBackfillRequest }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateBackfill_BySessionId(input.sessionId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Backfill_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_DeleteCancel_BySessionId_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, userId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteCancel_BySessionId_ByUserId(input.sessionId, input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Cancel_BySessionId_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useGameSessionApi_DeleteKick_BySessionId_ByMemberId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, memberId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, memberId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, memberId:string }) => {
      const response = 
            (await GameSessionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteKick_BySessionId_ByMemberId(input.sessionId, input.memberId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GameSession.Kick_BySessionId_ByMemberId],
    mutationFn,
    ...options
  })
}
  
  
  