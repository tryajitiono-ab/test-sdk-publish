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
import { GroupMemberApi } from "../GroupMemberApi.js"

import { CancelInvitationGroupResponseV2 } from '../../generated-definitions/CancelInvitationGroupResponseV2.js'
import { GetGroupMemberListResponseV1 } from '../../generated-definitions/GetGroupMemberListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'
import { JoinGroupResponseV1 } from '../../generated-definitions/JoinGroupResponseV1.js'
import { KickGroupMemberResponseV1 } from '../../generated-definitions/KickGroupMemberResponseV1.js'
import { LeaveGroupResponseV1 } from '../../generated-definitions/LeaveGroupResponseV1.js'
import { MemberRequestGroupResponseV1 } from '../../generated-definitions/MemberRequestGroupResponseV1.js'
import { UserInvitationResponseV1 } from '../../generated-definitions/UserInvitationResponseV1.js'


export enum Key_GroupMember {
  Leave = 'Groups.GroupMember.Leave',
User_ByUserId = 'Groups.GroupMember.User_ByUserId',
UsersMeGroups_v2 = 'Groups.GroupMember.UsersMeGroups_v2',
Kick_ByUserId = 'Groups.GroupMember.Kick_ByUserId',
Join_ByGroupId = 'Groups.GroupMember.Join_ByGroupId',
Invite_ByUserId = 'Groups.GroupMember.Invite_ByUserId',
Join_ByGroupId_v2 = 'Groups.GroupMember.Join_ByGroupId_v2',
Leave_ByGroupId_v2 = 'Groups.GroupMember.Leave_ByGroupId_v2',
Members_ByGroupId = 'Groups.GroupMember.Members_ByGroupId',
JoinAccept_ByUserId = 'Groups.GroupMember.JoinAccept_ByUserId',
JoinReject_ByUserId = 'Groups.GroupMember.JoinReject_ByUserId',
JoinCancel_ByGroupId = 'Groups.GroupMember.JoinCancel_ByGroupId',
InviteAccept_ByGroupId = 'Groups.GroupMember.InviteAccept_ByGroupId',
InviteReject_ByGroupId = 'Groups.GroupMember.InviteReject_ByGroupId',
InviteAccept_ByGroupId_v2 = 'Groups.GroupMember.InviteAccept_ByGroupId_v2',
InviteReject_ByGroupId_v2 = 'Groups.GroupMember.InviteReject_ByGroupId_v2',
Kick_ByUserId_ByGroupId_v2 = 'Groups.GroupMember.Kick_ByUserId_ByGroupId_v2',
Invite_ByUserId_ByGroupId_v2 = 'Groups.GroupMember.Invite_ByUserId_ByGroupId_v2',
Status_ByUserId_ByGroupId_v2 = 'Groups.GroupMember.Status_ByUserId_ByGroupId_v2',
JoinAccept_ByUserId_ByGroupId_v2 = 'Groups.GroupMember.JoinAccept_ByUserId_ByGroupId_v2',
JoinReject_ByUserId_ByGroupId_v2 = 'Groups.GroupMember.JoinReject_ByUserId_ByGroupId_v2',
InviteCancel_ByUserId_ByGroupId_v2 = 'Groups.GroupMember.InviteCancel_ByUserId_ByGroupId_v2',

}

  

export const useGroupMemberApi_CreateLeave = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LeaveGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: LeaveGroupResponseV1) => void
  ): UseMutationResult<LeaveGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeave())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Leave],
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
 *    queryKey: [Key_GroupMember.User_ByUserId, input]
 * }
 * ```
 */
export const useGroupMemberApi_GetUser_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<GetUserGroupInformationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserGroupInformationResponseV1>) => void
  ): UseQueryResult<GetUserGroupInformationResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGroupMemberApi_GetUser_ByUserId>[1]
  ) => async () => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserGroupInformationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMember.User_ByUserId, input],
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
 *    queryKey: [Key_GroupMember.UsersMeGroups_v2, input]
 * }
 * ```
 */
export const useGroupMemberApi_GetUsersMeGroups_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetGroupMemberListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetGroupMemberListResponseV1>) => void
  ): UseQueryResult<GetGroupMemberListResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGroupMemberApi_GetUsersMeGroups_v2>[1]
  ) => async () => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeGroups_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetGroupMemberListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMember.UsersMeGroups_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateKick_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<KickGroupMemberResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: KickGroupMemberResponseV1) => void
  ): UseMutationResult<KickGroupMemberResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createKick_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Kick_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateJoin_ByGroupId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<JoinGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: JoinGroupResponseV1) => void
  ): UseMutationResult<JoinGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoin_ByGroupId(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Join_ByGroupId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateInvite_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserInvitationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: UserInvitationResponseV1) => void
  ): UseMutationResult<UserInvitationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInvite_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Invite_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateJoin_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<JoinGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: JoinGroupResponseV1) => void
  ): UseMutationResult<JoinGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoin_ByGroupId_v2(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Join_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateLeave_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LeaveGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: LeaveGroupResponseV1) => void
  ): UseMutationResult<LeaveGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLeave_ByGroupId_v2(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Leave_ByGroupId_v2],
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
 *    queryKey: [Key_GroupMember.Members_ByGroupId, input]
 * }
 * ```
 */
export const useGroupMemberApi_GetMembers_ByGroupId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { groupId:string,  queryParams?: {limit?: number, offset?: number, order?: string | null} },
    options?: Omit<UseQueryOptions<GetGroupMemberListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetGroupMemberListResponseV1>) => void
  ): UseQueryResult<GetGroupMemberListResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGroupMemberApi_GetMembers_ByGroupId>[1]
  ) => async () => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMembers_ByGroupId(input.groupId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetGroupMemberListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMember.Members_ByGroupId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateJoinAccept_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoinAccept_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.JoinAccept_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateJoinReject_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoinReject_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.JoinReject_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateJoinCancel_ByGroupId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoinCancel_ByGroupId(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.JoinCancel_ByGroupId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateInviteAccept_ByGroupId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInviteAccept_ByGroupId(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.InviteAccept_ByGroupId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateInviteReject_ByGroupId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInviteReject_ByGroupId(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.InviteReject_ByGroupId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateInviteAccept_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInviteAccept_ByGroupId_v2(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.InviteAccept_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateInviteReject_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInviteReject_ByGroupId_v2(input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.InviteReject_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateKick_ByUserId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<KickGroupMemberResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }>, 'mutationKey'>,
    callback?: (data: KickGroupMemberResponseV1) => void
  ): UseMutationResult<KickGroupMemberResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createKick_ByUserId_ByGroupId_v2(input.userId, input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Kick_ByUserId_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateInvite_ByUserId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserInvitationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }>, 'mutationKey'>,
    callback?: (data: UserInvitationResponseV1) => void
  ): UseMutationResult<UserInvitationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInvite_ByUserId_ByGroupId_v2(input.userId, input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.Invite_ByUserId_ByGroupId_v2],
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
 *    queryKey: [Key_GroupMember.Status_ByUserId_ByGroupId_v2, input]
 * }
 * ```
 */
export const useGroupMemberApi_GetStatus_ByUserId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, groupId:string },
    options?: Omit<UseQueryOptions<GetUserGroupInformationResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserGroupInformationResponseV1>) => void
  ): UseQueryResult<GetUserGroupInformationResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGroupMemberApi_GetStatus_ByUserId_ByGroupId_v2>[1]
  ) => async () => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStatus_ByUserId_ByGroupId_v2(input.userId, input.groupId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserGroupInformationResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupMember.Status_ByUserId_ByGroupId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateJoinAccept_ByUserId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoinAccept_ByUserId_ByGroupId_v2(input.userId, input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.JoinAccept_ByUserId_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateJoinReject_ByUserId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }>, 'mutationKey'>,
    callback?: (data: MemberRequestGroupResponseV1) => void
  ): UseMutationResult<MemberRequestGroupResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createJoinReject_ByUserId_ByGroupId_v2(input.userId, input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.JoinReject_ByUserId_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupMemberApi_CreateInviteCancel_ByUserId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CancelInvitationGroupResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }>, 'mutationKey'>,
    callback?: (data: CancelInvitationGroupResponseV2) => void
  ): UseMutationResult<CancelInvitationGroupResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, groupId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, groupId:string }) => {
      const response = 
            (await GroupMemberApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createInviteCancel_ByUserId_ByGroupId_v2(input.userId, input.groupId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupMember.InviteCancel_ByUserId_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  
  