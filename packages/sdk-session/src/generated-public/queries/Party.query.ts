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
import { PartyApi } from "../PartyApi.js"

import { CreatePartyRequest } from '../../generated-definitions/CreatePartyRequest.js'
import { JoinByCodeRequest } from '../../generated-definitions/JoinByCodeRequest.js'
import { KickResponse } from '../../generated-definitions/KickResponse.js'
import { PartyQueryResponse } from '../../generated-definitions/PartyQueryResponse.js'
import { PartySessionResponse } from '../../generated-definitions/PartySessionResponse.js'
import { PromoteLeaderRequest } from '../../generated-definitions/PromoteLeaderRequest.js'
import { SessionInviteRequest } from '../../generated-definitions/SessionInviteRequest.js'
import { SessionInviteResponse } from '../../generated-definitions/SessionInviteResponse.js'
import { UpdatePartyRequest } from '../../generated-definitions/UpdatePartyRequest.js'


export enum Key_Party {
  Party = 'Session.Party.Party',
UsersMeParties = 'Session.Party.UsersMeParties',
Party_ByPartyId = 'Session.Party.Party_ByPartyId',
Code_ByPartyId = 'Session.Party.Code_ByPartyId',
Invite_ByPartyId = 'Session.Party.Invite_ByPartyId',
Leader_ByPartyId = 'Session.Party.Leader_ByPartyId',
PartyUserMeJoinCode = 'Session.Party.PartyUserMeJoinCode',
UserMeJoin_ByPartyId = 'Session.Party.UserMeJoin_ByPartyId',
UserMeLeave_ByPartyId = 'Session.Party.UserMeLeave_ByPartyId',
UserMeReject_ByPartyId = 'Session.Party.UserMeReject_ByPartyId',
Kick_ByPartyId_ByUserId = 'Session.Party.Kick_ByPartyId_ByUserId',
Cancel_ByPartyId_ByUserId = 'Session.Party.Cancel_ByPartyId_ByUserId',

}

  

export const usePartyApi_CreateParty = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreatePartyRequest }>, 'mutationKey'>,
    callback?: (data: PartySessionResponse) => void
  ): UseMutationResult<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreatePartyRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreatePartyRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createParty(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Party],
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
 *    queryKey: [Key_Party.UsersMeParties, input]
 * }
 * ```
 */
export const usePartyApi_GetUsersMeParties = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {order?: string | null, orderBy?: string | null, status?: string | null} },
    options?: Omit<UseQueryOptions<PartyQueryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PartyQueryResponse>) => void
  ): UseQueryResult<PartyQueryResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePartyApi_GetUsersMeParties>[1]
  ) => async () => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeParties(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PartyQueryResponse, AxiosError<ApiError>>({
    queryKey: [Key_Party.UsersMeParties, input],
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
 *    queryKey: [Key_Party.Party_ByPartyId, input]
 * }
 * ```
 */
export const usePartyApi_GetParty_ByPartyId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { partyId:string },
    options?: Omit<UseQueryOptions<PartySessionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PartySessionResponse>) => void
  ): UseQueryResult<PartySessionResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePartyApi_GetParty_ByPartyId>[1]
  ) => async () => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getParty_ByPartyId(input.partyId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PartySessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_Party.Party_ByPartyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePartyApi_PatchParty_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: UpdatePartyRequest }>, 'mutationKey'>,
    callback?: (data: PartySessionResponse) => void
  ): UseMutationResult<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: UpdatePartyRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: UpdatePartyRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchParty_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Party_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_UpdateParty_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: UpdatePartyRequest }>, 'mutationKey'>,
    callback?: (data: PartySessionResponse) => void
  ): UseMutationResult<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: UpdatePartyRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: UpdatePartyRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateParty_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Party_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_DeleteCode_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteCode_ByPartyId(input.partyId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Code_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_UpdateCode_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }>, 'mutationKey'>,
    callback?: (data: PartySessionResponse) => void
  ): UseMutationResult<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCode_ByPartyId(input.partyId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Code_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_CreateInvite_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SessionInviteResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: SessionInviteRequest }>, 'mutationKey'>,
    callback?: (data: SessionInviteResponse) => void
  ): UseMutationResult<SessionInviteResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: SessionInviteRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: SessionInviteRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInvite_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Invite_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_UpdateLeader_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: PromoteLeaderRequest }>, 'mutationKey'>,
    callback?: (data: PartySessionResponse) => void
  ): UseMutationResult<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: PromoteLeaderRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: PromoteLeaderRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateLeader_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Leader_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_CreatePartyUserMeJoinCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: JoinByCodeRequest }>, 'mutationKey'>,
    callback?: (data: PartySessionResponse) => void
  ): UseMutationResult<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: JoinByCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: JoinByCodeRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPartyUserMeJoinCode(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.PartyUserMeJoinCode],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_CreateUserMeJoin_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }>, 'mutationKey'>,
    callback?: (data: PartySessionResponse) => void
  ): UseMutationResult<PartySessionResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeJoin_ByPartyId(input.partyId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.UserMeJoin_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_DeleteUserMeLeave_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeLeave_ByPartyId(input.partyId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.UserMeLeave_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_DeleteUserMeReject_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeReject_ByPartyId(input.partyId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.UserMeReject_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_DeleteKick_ByPartyId_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<KickResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, userId:string }>, 'mutationKey'>,
    callback?: (data: KickResponse) => void
  ): UseMutationResult<KickResponse, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, userId:string }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteKick_ByPartyId_ByUserId(input.partyId, input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Kick_ByPartyId_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_DeleteCancel_ByPartyId_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, userId:string }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteCancel_ByPartyId_ByUserId(input.partyId, input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.Cancel_ByPartyId_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  