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
import { GroupRolesApi } from "../GroupRolesApi.js"

import { AssignRoleToMemberRequestV1 } from '../../generated-definitions/AssignRoleToMemberRequestV1.js'
import { GetMemberRolesListResponseV1 } from '../../generated-definitions/GetMemberRolesListResponseV1.js'
import { GetUserGroupInformationResponseV1 } from '../../generated-definitions/GetUserGroupInformationResponseV1.js'
import { RemoveRoleFromMemberRequestV1 } from '../../generated-definitions/RemoveRoleFromMemberRequestV1.js'


export enum Key_GroupRoles {
  Roles = 'Groups.GroupRoles.Roles',
Roles_v2 = 'Groups.GroupRoles.Roles_v2',
Member_ByMemberRoleId = 'Groups.GroupRoles.Member_ByMemberRoleId',
Member_ByMemberRoleId_ByGroupId_v2 = 'Groups.GroupRoles.Member_ByMemberRoleId_ByGroupId_v2',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_GroupRoles.Roles, input]
 * }
 * ```
 */
export const useGroupRolesApi_GetRoles = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetMemberRolesListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetMemberRolesListResponseV1>) => void
  ): UseQueryResult<GetMemberRolesListResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGroupRolesApi_GetRoles>[1]
  ) => async () => {
      const response = 
            (await GroupRolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRoles(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetMemberRolesListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupRoles.Roles, input],
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
 *    queryKey: [Key_GroupRoles.Roles_v2, input]
 * }
 * ```
 */
export const useGroupRolesApi_GetRoles_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<GetMemberRolesListResponseV1, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetMemberRolesListResponseV1>) => void
  ): UseQueryResult<GetMemberRolesListResponseV1, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGroupRolesApi_GetRoles_v2>[1]
  ) => async () => {
      const response = 
            (await GroupRolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRoles_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetMemberRolesListResponseV1, AxiosError<ApiError>>({
    queryKey: [Key_GroupRoles.Roles_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGroupRolesApi_DeleteMember_ByMemberRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, data: RemoveRoleFromMemberRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, data: RemoveRoleFromMemberRequestV1 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { memberRoleId:string, data: RemoveRoleFromMemberRequestV1 }) => {
      const response = 
            (await GroupRolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMember_ByMemberRoleId(input.memberRoleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupRoles.Member_ByMemberRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupRolesApi_CreateMember_ByMemberRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GetUserGroupInformationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, data: AssignRoleToMemberRequestV1 }>, 'mutationKey'>,
    callback?: (data: GetUserGroupInformationResponseV1) => void
  ): UseMutationResult<GetUserGroupInformationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, data: AssignRoleToMemberRequestV1 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { memberRoleId:string, data: AssignRoleToMemberRequestV1 }) => {
      const response = 
            (await GroupRolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createMember_ByMemberRoleId(input.memberRoleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupRoles.Member_ByMemberRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupRolesApi_DeleteMember_ByMemberRoleId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, groupId:string, data: RemoveRoleFromMemberRequestV1 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, groupId:string, data: RemoveRoleFromMemberRequestV1 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { memberRoleId:string, groupId:string, data: RemoveRoleFromMemberRequestV1 }) => {
      const response = 
            (await GroupRolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMember_ByMemberRoleId_ByGroupId_v2(input.memberRoleId, input.groupId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupRoles.Member_ByMemberRoleId_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useGroupRolesApi_CreateMember_ByMemberRoleId_ByGroupId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GetUserGroupInformationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, groupId:string, data: AssignRoleToMemberRequestV1 }>, 'mutationKey'>,
    callback?: (data: GetUserGroupInformationResponseV1) => void
  ): UseMutationResult<GetUserGroupInformationResponseV1, AxiosError<ApiError>, SdkSetConfigParam & { memberRoleId:string, groupId:string, data: AssignRoleToMemberRequestV1 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { memberRoleId:string, groupId:string, data: AssignRoleToMemberRequestV1 }) => {
      const response = 
            (await GroupRolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createMember_ByMemberRoleId_ByGroupId_v2(input.memberRoleId, input.groupId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GroupRoles.Member_ByMemberRoleId_ByGroupId_v2],
    mutationFn,
    ...options
  })
}
  
  
  