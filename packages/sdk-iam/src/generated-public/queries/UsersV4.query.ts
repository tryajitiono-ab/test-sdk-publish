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
import { UsersV4Api } from "../UsersV4Api.js"

import { AuthenticatorKeyResponseV4 } from '../../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../../generated-definitions/BackupCodesResponseV4.js'
import { CreateTestUserRequestV4 } from '../../generated-definitions/CreateTestUserRequestV4.js'
import { CreateUserRequestV4 } from '../../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../../generated-definitions/CreateUserResponseV4.js'
import { DisableMfaRequest } from '../../generated-definitions/DisableMfaRequest.js'
import { EmailUpdateRequestV4 } from '../../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../../generated-definitions/EnabledFactorsResponseV4.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { PlatformUserIdRequestV4 } from '../../generated-definitions/PlatformUserIdRequestV4.js'
import { PublicInviteUserRequestV4 } from '../../generated-definitions/PublicInviteUserRequestV4.js'
import { PublicUserUpdateRequestV3 } from '../../generated-definitions/PublicUserUpdateRequestV3.js'
import { UpgradeHeadlessAccountRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountRequestV4.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV4 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV4.js'
import { UserMfaStatusResponseV4 } from '../../generated-definitions/UserMfaStatusResponseV4.js'
import { UserMfaTokenResponseV4 } from '../../generated-definitions/UserMfaTokenResponseV4.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserPublicInfoResponseV4 } from '../../generated-definitions/UserPublicInfoResponseV4.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserResponseV4 } from '../../generated-definitions/UserResponseV4.js'


export enum Key_UsersV4 {
  UserInvite_v4 = 'Iam.UsersV4.UserInvite_v4',
User_v4 = 'Iam.UsersV4.User_v4',
UserMe_v4 = 'Iam.UsersV4.UserMe_v4',
TestUser_v4 = 'Iam.UsersV4.TestUser_v4',
User_ByUserId_v4 = 'Iam.UsersV4.User_ByUserId_v4',
UserMeEmail_v4 = 'Iam.UsersV4.UserMeEmail_v4',
UserMeMfaDevice_v4 = 'Iam.UsersV4.UserMeMfaDevice_v4',
UsersMeMfaFactor_v4 = 'Iam.UsersV4.UsersMeMfaFactor_v4',
UserMeMfaFactor_v4 = 'Iam.UsersV4.UserMeMfaFactor_v4',
UsersMeMfaStatus_v4 = 'Iam.UsersV4.UsersMeMfaStatus_v4',
UserMeMfaStatus_v4 = 'Iam.UsersV4.UserMeMfaStatus_v4',
UsersMeMfaBackupCode_v4 = 'Iam.UsersV4.UsersMeMfaBackupCode_v4',
UserMeMfaBackupCode_v4 = 'Iam.UsersV4.UserMeMfaBackupCode_v4',
UserMeMfaEmailCode_v4 = 'Iam.UsersV4.UserMeMfaEmailCode_v4',
UserMeHeadlesVerify_v4 = 'Iam.UsersV4.UserMeHeadlesVerify_v4',
UsersMeMfaBackupCodes_v4 = 'Iam.UsersV4.UsersMeMfaBackupCodes_v4',
UserMeMfaBackupCode_ByNS_v4 = 'Iam.UsersV4.UserMeMfaBackupCode_ByNS_v4',
UserMeMfaEmailEnable_v4 = 'Iam.UsersV4.UserMeMfaEmailEnable_v4',
UserMeMfaEmailDisable_v4 = 'Iam.UsersV4.UserMeMfaEmailDisable_v4',
UserInvite_ByInvitationId_v4 = 'Iam.UsersV4.UserInvite_ByInvitationId_v4',
User_ByPlatformId_v4 = 'Iam.UsersV4.User_ByPlatformId_v4',
UserMeHeadlesCodeVerify_v4 = 'Iam.UsersV4.UserMeHeadlesCodeVerify_v4',
UserMeMfaChallengeVerify_v4 = 'Iam.UsersV4.UserMeMfaChallengeVerify_v4',
UserMeMfaAuthenticatorKey_v4 = 'Iam.UsersV4.UserMeMfaAuthenticatorKey_v4',
UserMeMfaBackupCodeEnable_v4 = 'Iam.UsersV4.UserMeMfaBackupCodeEnable_v4',
UserMeMfaBackupCodeDisable_v4 = 'Iam.UsersV4.UserMeMfaBackupCodeDisable_v4',
UserMeMfaBackupCodeEnable_ByNS_v4 = 'Iam.UsersV4.UserMeMfaBackupCodeEnable_ByNS_v4',
UsersMeMfaBackupCodeDownload_v4 = 'Iam.UsersV4.UsersMeMfaBackupCodeDownload_v4',
UserMeMfaAuthenticatorEnable_v4 = 'Iam.UsersV4.UserMeMfaAuthenticatorEnable_v4',
UserMeMfaAuthenticatorDisable_v4 = 'Iam.UsersV4.UserMeMfaAuthenticatorDisable_v4',

}

  

export const useUsersV4Api_CreateUserInvite_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicInviteUserRequestV4 }>, 'mutationKey'>,
    callback?: (data: InviteUserResponseV3) => void
  ): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicInviteUserRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicInviteUserRequestV4 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserInvite_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserInvite_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUser_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }>, 'mutationKey'>,
    callback?: (data: CreateUserResponseV4) => void
  ): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateUserRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateUserRequestV4 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUser_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.User_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_PatchUserMe_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUserMe_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMe_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateTestUser_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUserRequestV4 }>, 'mutationKey'>,
    callback?: (data: CreateUserResponseV4) => void
  ): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateTestUserRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateTestUserRequestV4 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createTestUser_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.TestUser_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_GetUser_ByUserId_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserPublicInfoResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserPublicInfoResponseV4>) => void
  ): UseQueryResult<UserPublicInfoResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4Api_GetUser_ByUserId_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByUserId_v4(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserPublicInfoResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.User_ByUserId_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4Api_UpdateUserMeEmail_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EmailUpdateRequestV4 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EmailUpdateRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: EmailUpdateRequestV4 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUserMeEmail_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeEmail_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_DeleteUserMeMfaDevice_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeMfaDevice_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaDevice_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_GetUsersMeMfaFactor_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<EnabledFactorsResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EnabledFactorsResponseV4>) => void
  ): UseQueryResult<EnabledFactorsResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4Api_GetUsersMeMfaFactor_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaFactor_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EnabledFactorsResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaFactor_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4Api_PostUserMeMfaFactor_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {factor: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {factor: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {factor: string | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaFactor_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaFactor_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_GetUsersMeMfaStatus_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<UserMfaStatusResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserMfaStatusResponseV4>) => void
  ): UseQueryResult<UserMfaStatusResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4Api_GetUsersMeMfaStatus_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaStatus_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserMfaStatusResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaStatus_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeMfaStatus_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: UserMfaStatusResponseV4) => void
  ): UseMutationResult<UserMfaStatusResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaStatus_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaStatus_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_GetUsersMeMfaBackupCode_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<BackupCodesResponseV4, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BackupCodesResponseV4>) => void
  ): UseQueryResult<BackupCodesResponseV4, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4Api_GetUsersMeMfaBackupCode_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaBackupCode_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BackupCodesResponseV4, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaBackupCode_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeMfaBackupCode_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: BackupCodesResponseV4) => void
  ): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCode_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCode_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_PostUserMeMfaEmailCode_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {action?: string | null,languageTag?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {action?: string | null,languageTag?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {action?: string | null,languageTag?: string | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaEmailCode_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaEmailCode_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeHeadlesVerify_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountRequestV4 }>, 'mutationKey'>,
    callback?: (data: UserResponseV4) => void
  ): UseMutationResult<UserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountRequestV4 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeHeadlesVerify_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeHeadlesVerify_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_GetUsersMeMfaBackupCodes_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4Api_GetUsersMeMfaBackupCodes_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaBackupCodes_v4(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaBackupCodes_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeMfaBackupCode_ByNS_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCode_ByNS_v4(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCode_ByNS_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_PostUserMeMfaEmailEnable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaEmailEnable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaEmailEnable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeMfaEmailDisable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaEmailDisable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaEmailDisable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserInvite_ByInvitationId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { invitationId:string, data: CreateUserRequestV4 }>, 'mutationKey'>,
    callback?: (data: CreateUserResponseV4) => void
  ): UseMutationResult<CreateUserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { invitationId:string, data: CreateUserRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { invitationId:string, data: CreateUserRequestV4 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserInvite_ByInvitationId_v4(input.invitationId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserInvite_ByInvitationId_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUser_ByPlatformId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserPlatforms, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformUserIdRequestV4, queryParams?: {rawPUID?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: UserPlatforms) => void
  ): UseMutationResult<UserPlatforms, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformUserIdRequestV4, queryParams?: {rawPUID?: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: PlatformUserIdRequestV4, queryParams?: {rawPUID?: boolean | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUser_ByPlatformId_v4(input.platformId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.User_ByPlatformId_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeHeadlesCodeVerify_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV4 }>, 'mutationKey'>,
    callback?: (data: UserResponseV4) => void
  ): UseMutationResult<UserResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV4 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV4 }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeHeadlesCodeVerify_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeHeadlesCodeVerify_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_PostUserMeMfaChallengeVerify_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserMfaTokenResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: {code?: string | null,factor?: string | null} }>, 'mutationKey'>,
    callback?: (data: UserMfaTokenResponseV4) => void
  ): UseMutationResult<UserMfaTokenResponseV4, AxiosError<ApiError>, SdkSetConfigParam & { data: {code?: string | null,factor?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {code?: string | null,factor?: string | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaChallengeVerify_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaChallengeVerify_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeMfaAuthenticatorKey_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: AuthenticatorKeyResponseV4) => void
  ): UseMutationResult<AuthenticatorKeyResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaAuthenticatorKey_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaAuthenticatorKey_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeMfaBackupCodeEnable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: BackupCodesResponseV4) => void
  ): UseMutationResult<BackupCodesResponseV4, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCodeEnable_v4())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCodeEnable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_DeleteUserMeMfaBackupCodeDisable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeMfaBackupCodeDisable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCodeDisable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_CreateUserMeMfaBackupCodeEnable_ByNS_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams?: {languageTag?: string | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeMfaBackupCodeEnable_ByNS_v4(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaBackupCodeEnable_ByNS_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_GetUsersMeMfaBackupCodeDownload_v4 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersV4Api_GetUsersMeMfaBackupCodeDownload_v4>[1]
  ) => async () => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeMfaBackupCodeDownload_v4())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UsersV4.UsersMeMfaBackupCodeDownload_v4, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersV4Api_PostUserMeMfaAuthenticatorEnable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null} }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMeMfaAuthenticatorEnable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaAuthenticatorEnable_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersV4Api_DeleteUserMeMfaAuthenticatorDisable_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DisableMfaRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DisableMfaRequest }) => {
      const response = 
            (await UsersV4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMeMfaAuthenticatorDisable_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersV4.UserMeMfaAuthenticatorDisable_v4],
    mutationFn,
    ...options
  })
}
  
  
  