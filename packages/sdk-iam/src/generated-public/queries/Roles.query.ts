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
import { RolesApi } from "../RolesApi.js"

import { Permissions } from '../../generated-definitions/Permissions.js'
import { Role } from '../../generated-definitions/Role.js'
import { RoleAdminStatusResponse } from '../../generated-definitions/RoleAdminStatusResponse.js'
import { RoleCreateRequest } from '../../generated-definitions/RoleCreateRequest.js'
import { RoleManagersRequest } from '../../generated-definitions/RoleManagersRequest.js'
import { RoleManagersResponse } from '../../generated-definitions/RoleManagersResponse.js'
import { RoleMembersRequest } from '../../generated-definitions/RoleMembersRequest.js'
import { RoleMembersResponse } from '../../generated-definitions/RoleMembersResponse.js'
import { RoleNamesResponseV3 } from '../../generated-definitions/RoleNamesResponseV3.js'
import { RoleResponse } from '../../generated-definitions/RoleResponse.js'
import { RoleResponseWithManagersArray } from '../../generated-definitions/RoleResponseWithManagersArray.js'
import { RoleUpdateRequest } from '../../generated-definitions/RoleUpdateRequest.js'
import { UpdatePermissionScheduleRequest } from '../../generated-definitions/UpdatePermissionScheduleRequest.js'


export enum Key_Roles {
  Roles = 'Iam.Roles.Roles',
Role = 'Iam.Roles.Role',
Role_ByRoleId = 'Iam.Roles.Role_ByRoleId',
Roles_v3 = 'Iam.Roles.Roles_v3',
Admin_ByRoleId = 'Iam.Roles.Admin_ByRoleId',
Member_ByRoleId = 'Iam.Roles.Member_ByRoleId',
Members_ByRoleId = 'Iam.Roles.Members_ByRoleId',
Manager_ByRoleId = 'Iam.Roles.Manager_ByRoleId',
Managers_ByRoleId = 'Iam.Roles.Managers_ByRoleId',
Role_ByRoleId_v3 = 'Iam.Roles.Role_ByRoleId_v3',
Permission_ByRoleId = 'Iam.Roles.Permission_ByRoleId',
Permission_ByRoleId_ByResource_ByAction = 'Iam.Roles.Permission_ByRoleId_ByResource_ByAction',

}

  

export const useRolesApi_GetRoles = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {isWildcard?: string | null} },
    options?: Omit<UseQueryOptions<RoleResponseWithManagersArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RoleResponseWithManagersArray>) => void
  ): UseQueryResult<RoleResponseWithManagersArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRolesApi_GetRoles>[1]
  ) => async () => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRoles(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RoleResponseWithManagersArray, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Roles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRolesApi_CreateRole = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Role, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleCreateRequest }>, 'mutationKey'>,
    callback?: (data: Role) => void
  ): UseMutationResult<Role, AxiosError<ApiError>, SdkSetConfigParam & { data: RoleCreateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: RoleCreateRequest }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRole(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Role],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_DeleteRole_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRole_ByRoleId(input.roleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Role_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_GetRole_ByRoleId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { roleId:string },
    options?: Omit<UseQueryOptions<RoleResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RoleResponse>) => void
  ): UseQueryResult<RoleResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRolesApi_GetRole_ByRoleId>[1]
  ) => async () => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRole_ByRoleId(input.roleId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RoleResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Role_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRolesApi_UpdateRole_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RoleResponse, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleUpdateRequest }>, 'mutationKey'>,
    callback?: (data: RoleResponse) => void
  ): UseMutationResult<RoleResponse, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleUpdateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, data: RoleUpdateRequest }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByRoleId(input.roleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Role_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_GetRoles_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {after?: string | null, before?: string | null, isWildcard?: boolean | null, limit?: number} },
    options?: Omit<UseQueryOptions<RoleNamesResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RoleNamesResponseV3>) => void
  ): UseQueryResult<RoleNamesResponseV3, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRolesApi_GetRoles_v3>[1]
  ) => async () => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRoles_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RoleNamesResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Roles_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRolesApi_DeleteAdmin_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteAdmin_ByRoleId(input.roleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Admin_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_GetAdmin_ByRoleId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { roleId:string },
    options?: Omit<UseQueryOptions<RoleAdminStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RoleAdminStatusResponse>) => void
  ): UseQueryResult<RoleAdminStatusResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRolesApi_GetAdmin_ByRoleId>[1]
  ) => async () => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAdmin_ByRoleId(input.roleId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RoleAdminStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Admin_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRolesApi_UpdateAdmin_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAdmin_ByRoleId(input.roleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Admin_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_DeleteMember_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleMembersRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleMembersRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, data: RoleMembersRequest }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMember_ByRoleId(input.roleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Member_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_GetMembers_ByRoleId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { roleId:string },
    options?: Omit<UseQueryOptions<RoleMembersResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RoleMembersResponse>) => void
  ): UseQueryResult<RoleMembersResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRolesApi_GetMembers_ByRoleId>[1]
  ) => async () => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMembers_ByRoleId(input.roleId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RoleMembersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Members_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRolesApi_UpdateMember_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleMembersRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleMembersRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, data: RoleMembersRequest }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateMember_ByRoleId(input.roleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Member_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_DeleteManager_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleManagersRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleManagersRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, data: RoleManagersRequest }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteManager_ByRoleId(input.roleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Manager_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_GetManagers_ByRoleId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { roleId:string },
    options?: Omit<UseQueryOptions<RoleManagersResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RoleManagersResponse>) => void
  ): UseQueryResult<RoleManagersResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRolesApi_GetManagers_ByRoleId>[1]
  ) => async () => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getManagers_ByRoleId(input.roleId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RoleManagersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Managers_ByRoleId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRolesApi_UpdateManager_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleManagersRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: RoleManagersRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, data: RoleManagersRequest }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateManager_ByRoleId(input.roleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Manager_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_GetRole_ByRoleId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { roleId:string },
    options?: Omit<UseQueryOptions<RoleResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RoleResponse>) => void
  ): UseQueryResult<RoleResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useRolesApi_GetRole_ByRoleId_v3>[1]
  ) => async () => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRole_ByRoleId_v3(input.roleId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RoleResponse, AxiosError<ApiError>>({
    queryKey: [Key_Roles.Role_ByRoleId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useRolesApi_UpdatePermission_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: Permissions }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, data: Permissions }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, data: Permissions }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePermission_ByRoleId(input.roleId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Permission_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_DeletePermission_ByRoleId_ByResource_ByAction = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, resource:string, action:number }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, resource:string, action:number }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, resource:string, action:number }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePermission_ByRoleId_ByResource_ByAction(input.roleId, input.resource, input.action))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Permission_ByRoleId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
  
  

export const useRolesApi_UpdatePermission_ByRoleId_ByResource_ByAction = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, resource:string, action:number, data: UpdatePermissionScheduleRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { roleId:string, resource:string, action:number, data: UpdatePermissionScheduleRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { roleId:string, resource:string, action:number, data: UpdatePermissionScheduleRequest }) => {
      const response = 
            (await RolesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePermission_ByRoleId_ByResource_ByAction(input.roleId, input.resource, input.action, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Roles.Permission_ByRoleId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
  
  
  