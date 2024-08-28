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
import { UsersV4AdminApi } from "../UsersV4AdminApi.js"

import { AddUserRoleV4Request } from '../../generated-definitions/AddUserRoleV4Request.js'
import { AuthenticatorKeyResponseV4 } from '../../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../../generated-definitions/BackupCodesResponseV4.js'
import { BulkAccountTypeUpdateRequestV4 } from '../../generated-definitions/BulkAccountTypeUpdateRequestV4.js'
import { CheckValidUserIdRequestV4 } from '../../generated-definitions/CheckValidUserIdRequestV4.js'
import { CreateTestUsersRequestV4 } from '../../generated-definitions/CreateTestUsersRequestV4.js'
import { CreateTestUsersResponseV4 } from '../../generated-definitions/CreateTestUsersResponseV4.js'
import { CreateUserRequestV4 } from '../../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../../generated-definitions/CreateUserResponseV4.js'
import { DisableMfaRequest } from '../../generated-definitions/DisableMfaRequest.js'
import { EmailUpdateRequestV4 } from '../../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../../generated-definitions/EnabledFactorsResponseV4.js'
import { InvitationHistoryResponse } from '../../generated-definitions/InvitationHistoryResponse.js'
import { InviteUserRequestV4 } from '../../generated-definitions/InviteUserRequestV4.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { ListInvitationHistoriesV4Response } from '../../generated-definitions/ListInvitationHistoriesV4Response.js'
import { ListUserRolesV4Response } from '../../generated-definitions/ListUserRolesV4Response.js'
import { ListValidUserIdResponseV4 } from '../../generated-definitions/ListValidUserIdResponseV4.js'
import { NamespaceInvitationHistoryUserV4Response } from '../../generated-definitions/NamespaceInvitationHistoryUserV4Response.js'
import { RemoveUserRoleV4Request } from '../../generated-definitions/RemoveUserRoleV4Request.js'
import { UserMfaStatusResponseV4 } from '../../generated-definitions/UserMfaStatusResponseV4.js'
import { UserMfaTokenResponseV4 } from '../../generated-definitions/UserMfaTokenResponseV4.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequestV3 } from '../../generated-definitions/UserUpdateRequestV3.js'


export enum Key_UsersV4Admin {
  UserMe_v4 = 'Iam.UsersV4Admin.UserMe_v4',
UserInvite_v4 = 'Iam.UsersV4Admin.UserInvite_v4',
UserUserInvite_v4 = 'Iam.UsersV4Admin.UserUserInvite_v4',
InvitationHistories_v4 = 'Iam.UsersV4Admin.InvitationHistories_v4',
UsersMeMfaFactor_v4 = 'Iam.UsersV4Admin.UsersMeMfaFactor_v4',
UserMeMfaFactor_v4 = 'Iam.UsersV4Admin.UserMeMfaFactor_v4',
UsersMeMfaStatus_v4 = 'Iam.UsersV4Admin.UsersMeMfaStatus_v4',
UserMeMfaStatus_v4 = 'Iam.UsersV4Admin.UserMeMfaStatus_v4',
UsersMeMfaBackupCode_v4 = 'Iam.UsersV4Admin.UsersMeMfaBackupCode_v4',
UserMeMfaBackupCode_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCode_v4',
UserMeMfaEmailCode_v4 = 'Iam.UsersV4Admin.UserMeMfaEmailCode_v4',
UsersMeMfaBackupCodes_v4 = 'Iam.UsersV4Admin.UsersMeMfaBackupCodes_v4',
UserMeMfaBackupCode_admin_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCode_admin_v4',
UserMeMfaEmailEnable_v4 = 'Iam.UsersV4Admin.UserMeMfaEmailEnable_v4',
UserMeMfaEmailDisable_v4 = 'Iam.UsersV4Admin.UserMeMfaEmailDisable_v4',
User_v4 = 'Iam.UsersV4Admin.User_v4',
UserMeMfaChallengeVerify_v4 = 'Iam.UsersV4Admin.UserMeMfaChallengeVerify_v4',
UserMeMfaAuthenticatorKey_v4 = 'Iam.UsersV4Admin.UserMeMfaAuthenticatorKey_v4',
UserMeMfaBackupCodeEnable_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCodeEnable_v4',
UserMeMfaBackupCodeDisable_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCodeDisable_v4',
UserMeMfaBackupCodeEnable_admin_v4 = 'Iam.UsersV4Admin.UserMeMfaBackupCodeEnable_admin_v4',
UsersMeMfaBackupCodeDownload_v4 = 'Iam.UsersV4Admin.UsersMeMfaBackupCodeDownload_v4',
TestUser_v4 = 'Iam.UsersV4Admin.TestUser_v4',
UserMeMfaAuthenticatorEnable_v4 = 'Iam.UsersV4Admin.UserMeMfaAuthenticatorEnable_v4',
UserMeMfaAuthenticatorDisable_v4 = 'Iam.UsersV4Admin.UserMeMfaAuthenticatorDisable_v4',
User_ByUserId_v4 = 'Iam.UsersV4Admin.User_ByUserId_v4',
InvitationHistories_ByNS_v4 = 'Iam.UsersV4Admin.InvitationHistories_ByNS_v4',
UserBulkValidate_v4 = 'Iam.UsersV4Admin.UserBulkValidate_v4',
Email_ByUserId_v4 = 'Iam.UsersV4Admin.Email_ByUserId_v4',
Role_ByUserId_v4 = 'Iam.UsersV4Admin.Role_ByUserId_v4',
Roles_ByUserId_v4 = 'Iam.UsersV4Admin.Roles_ByUserId_v4',
Role_ByUserId_ByNS_v4 = 'Iam.UsersV4Admin.Role_ByUserId_ByNS_v4',
UserBulkAccountType_v4 = 'Iam.UsersV4Admin.UserBulkAccountType_v4',
InvitationHistoriesUsers_v4 = 'Iam.UsersV4Admin.InvitationHistoriesUsers_v4',
MfaDisable_ByUserId_v4 = 'Iam.UsersV4Admin.MfaDisable_ByUserId_v4',

}

  

export const useUsersV4AdminApi_PatchUserMe_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserUpdateRequestV3 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: UserUpdateRequestV3 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUserMe_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMe_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserInvite_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }>, 'mutationKey'>,
    callback?: (data: InviteUserResponseV3) => void
  ): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: InviteUserRequestV4 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserInvite_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserInvite_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserUserInvite_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }>, 'mutationKey'>,
    callback?: (data: InviteUserResponseV3) => void
  ): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: InviteUserRequestV4 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserUserInvite_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserUserInvite_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetInvitationHistories_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, namespace?: string | null, offset?: number} },
    options?: Omit<UseQueryOptions<ListInvitationHistoriesV4Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListInvitationHistoriesV4Response>) => void
  ): UseQueryResult<ListInvitationHistoriesV4Response, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetInvitationHistories_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInvitationHistories_v4(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListInvitationHistoriesV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistories_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetUsersMeMfaFactor_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<EnabledFactorsResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EnabledFactorsResponseV4>) => void
  ): UseQueryResult<EnabledFactorsResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaFactor_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaFactor_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EnabledFactorsResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaFactor_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_PostUserMeMfaFactor_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {factor: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {factor: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {factor: string | null} }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaFactor_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaFactor_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetUsersMeMfaStatus_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<UserMfaStatusResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserMfaStatusResponseV4>) => void
  ): UseQueryResult<UserMfaStatusResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaStatus_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaStatus_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserMfaStatusResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaStatus_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserMeMfaStatus_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: UserMfaStatusResponseV4) => void
  ): UseMutationResult<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaStatus_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaStatus_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetUsersMeMfaBackupCode_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<BackupCodesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BackupCodesResponseV4>) => void
  ): UseQueryResult<BackupCodesResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaBackupCode_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaBackupCode_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BackupCodesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCode_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserMeMfaBackupCode_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: BackupCodesResponseV4) => void
  ): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCode_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCode_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_PostUserMeMfaEmailCode_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {action?: string | null,languageTag?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {action?: string | null,languageTag?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {action?: string | null,languageTag?: string | null} }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaEmailCode_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaEmailCode_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetUsersMeMfaBackupCodes_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaBackupCodes_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaBackupCodes_v4(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCodes_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserMeMfaBackupCode_admin_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCode_admin_v4(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCode_admin_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_PostUserMeMfaEmailEnable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null} }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaEmailEnable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaEmailEnable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserMeMfaEmailDisable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaEmailDisable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaEmailDisable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUser_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }>, 'mutationKey'>,
    callback?: (data: CreateUserResponseV4) => void
  ): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateUserRequestV4 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUser_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.User_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_PostUserMeMfaChallengeVerify_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserMfaTokenResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: {code?: string | null,factor?: string | null} }>, 'mutationKey'>,
    callback?: (data: UserMfaTokenResponseV4) => void
  ): UseMutationResult<UserMfaTokenResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: {code?: string | null,factor?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {code?: string | null,factor?: string | null} }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaChallengeVerify_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaChallengeVerify_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserMeMfaAuthenticatorKey_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: AuthenticatorKeyResponseV4) => void
  ): UseMutationResult<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaAuthenticatorKey_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorKey_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserMeMfaBackupCodeEnable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: BackupCodesResponseV4) => void
  ): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCodeEnable_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeEnable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_DeleteUserMeMfaBackupCodeDisable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeMfaBackupCodeDisable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeDisable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateUserMeMfaBackupCodeEnable_admin_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCodeEnable_admin_v4(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaBackupCodeEnable_admin_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetUsersMeMfaBackupCodeDownload_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetUsersMeMfaBackupCodeDownload_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaBackupCodeDownload_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UsersMeMfaBackupCodeDownload_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_CreateTestUser_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateTestUsersResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUsersRequestV4 }>, 'mutationKey'>,
    callback?: (data: CreateTestUsersResponseV4) => void
  ): UseMutationResult<CreateTestUsersResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUsersRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTestUsersRequestV4 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createTestUser_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.TestUser_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_PostUserMeMfaAuthenticatorEnable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null} }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaAuthenticatorEnable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorEnable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_DeleteUserMeMfaAuthenticatorDisable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeMfaAuthenticatorDisable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserMeMfaAuthenticatorDisable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_UpdateUser_ByUserId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequestV3 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserUpdateRequestV3 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUser_ByUserId_v4(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.User_ByUserId_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetInvitationHistories_ByNS_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<InvitationHistoryResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<InvitationHistoryResponse>) => void
  ): UseQueryResult<InvitationHistoryResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetInvitationHistories_ByNS_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInvitationHistories_ByNS_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<InvitationHistoryResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistories_ByNS_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_FetchUserBulkValidate_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: CheckValidUserIdRequestV4 },
    options?: Omit<UseQueryOptions<ListValidUserIdResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListValidUserIdResponseV4>) => void
  ): UseQueryResult<ListValidUserIdResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_FetchUserBulkValidate_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchUserBulkValidate_v4(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListValidUserIdResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.UserBulkValidate_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_UpdateEmail_ByUserId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: EmailUpdateRequestV4 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: EmailUpdateRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: EmailUpdateRequestV4 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEmail_ByUserId_v4(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.Email_ByUserId_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_DeleteRole_ByUserId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: RemoveUserRoleV4Request }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: RemoveUserRoleV4Request }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: RemoveUserRoleV4Request }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRole_ByUserId_v4(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetRoles_ByUserId_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<ListUserRolesV4Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListUserRolesV4Response>) => void
  ): UseQueryResult<ListUserRolesV4Response, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetRoles_ByUserId_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRoles_ByUserId_v4(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListUserRolesV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.Roles_ByUserId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_UpdateRole_ByUserId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AddUserRoleV4Request }>, 'mutationKey'>,
    callback?: (data: ListUserRolesV4Response) => void
  ): UseMutationResult<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AddUserRoleV4Request }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: AddUserRoleV4Request }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByUserId_v4(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_UpdateRole_ByUserId_ByNS_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AddUserRoleV4Request }>, 'mutationKey'>,
    callback?: (data: ListUserRolesV4Response) => void
  ): UseMutationResult<ListUserRolesV4Response, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AddUserRoleV4Request }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: AddUserRoleV4Request }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByUserId_ByNS_v4(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.Role_ByUserId_ByNS_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_PatchUserBulkAccountType_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkAccountTypeUpdateRequestV4 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkAccountTypeUpdateRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkAccountTypeUpdateRequestV4 }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUserBulkAccountType_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.UserBulkAccountType_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4AdminApi_GetInvitationHistoriesUsers_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceInvitationHistoryUserV4Response>) => void
  ): UseQueryResult<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4AdminApi_GetInvitationHistoriesUsers_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInvitationHistoriesUsers_v4(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceInvitationHistoryUserV4Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4Admin.InvitationHistoriesUsers_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4AdminApi_DeleteMfaDisable_ByUserId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UsersV4AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMfaDisable_ByUserId_v4(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4Admin.MfaDisable_ByUserId_v4],
    mutationFn,
    ...options
  })
}
  
  
  