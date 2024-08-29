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
import { UsersApi } from "../UsersApi.js"

import { BanCreateRequest } from '../../generated-definitions/BanCreateRequest.js'
import { Country } from '../../generated-definitions/Country.js'
import { CountryV3Response } from '../../generated-definitions/CountryV3Response.js'
import { CreateJusticeUserResponse } from '../../generated-definitions/CreateJusticeUserResponse.js'
import { DisableUserRequest } from '../../generated-definitions/DisableUserRequest.js'
import { DistinctPlatformResponseV3 } from '../../generated-definitions/DistinctPlatformResponseV3.js'
import { ForgotPasswordRequestV3 } from '../../generated-definitions/ForgotPasswordRequestV3.js'
import { GetAdminUsersResponse } from '../../generated-definitions/GetAdminUsersResponse.js'
import { GetLinkHeadlessAccountConflictResponse } from '../../generated-definitions/GetLinkHeadlessAccountConflictResponse.js'
import { GetPublisherUserResponse } from '../../generated-definitions/GetPublisherUserResponse.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { GetUserJusticePlatformAccountResponse } from '../../generated-definitions/GetUserJusticePlatformAccountResponse.js'
import { GetUserMapping } from '../../generated-definitions/GetUserMapping.js'
import { GetUserMappingArray } from '../../generated-definitions/GetUserMappingArray.js'
import { GetUserMappingV3Array } from '../../generated-definitions/GetUserMappingV3Array.js'
import { LinkHeadlessAccountRequest } from '../../generated-definitions/LinkHeadlessAccountRequest.js'
import { LinkPlatformAccountRequest } from '../../generated-definitions/LinkPlatformAccountRequest.js'
import { LinkPlatformAccountWithProgressionRequest } from '../../generated-definitions/LinkPlatformAccountWithProgressionRequest.js'
import { LinkRequest } from '../../generated-definitions/LinkRequest.js'
import { ListBulkUserResponse } from '../../generated-definitions/ListBulkUserResponse.js'
import { LoginHistoriesResponse } from '../../generated-definitions/LoginHistoriesResponse.js'
import { Permissions } from '../../generated-definitions/Permissions.js'
import { PlatformUserIdRequest } from '../../generated-definitions/PlatformUserIdRequest.js'
import { PublicUserInformationResponseV3 } from '../../generated-definitions/PublicUserInformationResponseV3.js'
import { PublicUserResponse } from '../../generated-definitions/PublicUserResponse.js'
import { PublicUserResponseV3 } from '../../generated-definitions/PublicUserResponseV3.js'
import { PublicUserUpdateRequestV3 } from '../../generated-definitions/PublicUserUpdateRequestV3.js'
import { PublicUsersResponse } from '../../generated-definitions/PublicUsersResponse.js'
import { ResetPasswordRequest } from '../../generated-definitions/ResetPasswordRequest.js'
import { ResetPasswordRequestV3 } from '../../generated-definitions/ResetPasswordRequestV3.js'
import { SearchUsersResponse } from '../../generated-definitions/SearchUsersResponse.js'
import { SendRegisterVerificationCodeRequest } from '../../generated-definitions/SendRegisterVerificationCodeRequest.js'
import { SendVerificationCodeRequest } from '../../generated-definitions/SendVerificationCodeRequest.js'
import { SendVerificationCodeRequestV3 } from '../../generated-definitions/SendVerificationCodeRequestV3.js'
import { SendVerificationLinkRequest } from '../../generated-definitions/SendVerificationLinkRequest.js'
import { UnlinkUserPlatformRequest } from '../../generated-definitions/UnlinkUserPlatformRequest.js'
import { UpdatePermissionScheduleRequest } from '../../generated-definitions/UpdatePermissionScheduleRequest.js'
import { UpgradeHeadlessAccountRequest } from '../../generated-definitions/UpgradeHeadlessAccountRequest.js'
import { UpgradeHeadlessAccountV3Request } from '../../generated-definitions/UpgradeHeadlessAccountV3Request.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequest } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequest.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserBanResponse } from '../../generated-definitions/UserBanResponse.js'
import { UserBanResponseArray } from '../../generated-definitions/UserBanResponseArray.js'
import { UserCreateRequest } from '../../generated-definitions/UserCreateRequest.js'
import { UserCreateRequestV3 } from '../../generated-definitions/UserCreateRequestV3.js'
import { UserCreateResponse } from '../../generated-definitions/UserCreateResponse.js'
import { UserCreateResponseV3 } from '../../generated-definitions/UserCreateResponseV3.js'
import { UserIDsRequest } from '../../generated-definitions/UserIDsRequest.js'
import { UserInformation } from '../../generated-definitions/UserInformation.js'
import { UserInformationV3 } from '../../generated-definitions/UserInformationV3.js'
import { UserInputValidationRequest } from '../../generated-definitions/UserInputValidationRequest.js'
import { UserInputValidationResponse } from '../../generated-definitions/UserInputValidationResponse.js'
import { UserInvitationV3 } from '../../generated-definitions/UserInvitationV3.js'
import { UserLinkedPlatformArray } from '../../generated-definitions/UserLinkedPlatformArray.js'
import { UserLinkedPlatformsResponseV3 } from '../../generated-definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateRequest } from '../../generated-definitions/UserPasswordUpdateRequest.js'
import { UserPasswordUpdateV3Request } from '../../generated-definitions/UserPasswordUpdateV3Request.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserResponse } from '../../generated-definitions/UserResponse.js'
import { UserResponseArray } from '../../generated-definitions/UserResponseArray.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequest } from '../../generated-definitions/UserUpdateRequest.js'
import { UserVerificationRequest } from '../../generated-definitions/UserVerificationRequest.js'
import { UserVerificationRequestV3 } from '../../generated-definitions/UserVerificationRequestV3.js'
import { UsersPlatformInfosRequestV3 } from '../../generated-definitions/UsersPlatformInfosRequestV3.js'
import { UsersPlatformInfosResponse } from '../../generated-definitions/UsersPlatformInfosResponse.js'
import { VerifyRegistrationCode } from '../../generated-definitions/VerifyRegistrationCode.js'
import { WebLinkingResponse } from '../../generated-definitions/WebLinkingResponse.js'


export enum Key_Users {
  UsersMe_v3 = 'Iam.Users.UsersMe_v3',
User = 'Iam.Users.User',
UsersAdmin = 'Iam.Users.UsersAdmin',
UsersVerifyLinkVerify_v3 = 'Iam.Users.UsersVerifyLinkVerify_v3',
UsersSearch = 'Iam.Users.UsersSearch',
User_ByUserId = 'Iam.Users.User_ByUserId',
UsersByLoginId = 'Iam.Users.UsersByLoginId',
User_v2 = 'Iam.Users.User_v2',
Users_v3 = 'Iam.Users.Users_v3',
User_v3 = 'Iam.Users.User_v3',
UserMeVerifyLinkRequest_v3 = 'Iam.Users.UserMeVerifyLinkRequest_v3',
Ban_ByUserId = 'Iam.Users.Ban_ByUserId',
UserMe_v3 = 'Iam.Users.UserMe_v3',
UsersMeHeadlessLinkConflict_v3 = 'Iam.Users.UsersMeHeadlessLinkConflict_v3',
Bans_ByUserId = 'Iam.Users.Bans_ByUserId',
UserResetPassword = 'Iam.Users.UserResetPassword',
Role_ByUserId = 'Iam.Users.Role_ByUserId',
UserForgotPassword = 'Iam.Users.UserForgotPassword',
UsersListByLoginIds = 'Iam.Users.UsersListByLoginIds',
Enable_ByUserId = 'Iam.Users.Enable_ByUserId',
UserReset_v3 = 'Iam.Users.UserReset_v3',
Disable_ByUserId = 'Iam.Users.Disable_ByUserId',
UsersByPlatformUserId = 'Iam.Users.UsersByPlatformUserId',
UserForgot_v3 = 'Iam.Users.UserForgot_v3',
Password_ByUserId = 'Iam.Users.Password_ByUserId',
Crosslink_ByUserId = 'Iam.Users.Crosslink_ByUserId',
Platforms_ByUserId = 'Iam.Users.Platforms_ByUserId',
Publisher_ByUserId = 'Iam.Users.Publisher_ByUserId',
User_ByUserId_v2 = 'Iam.Users.User_ByUserId_v2',
User_ByUserId_v3 = 'Iam.Users.User_ByUserId_v3',
UserMeHeadlesLinkWithProgression_v3 = 'Iam.Users.UserMeHeadlesLinkWithProgression_v3',
UserPlatform_v3 = 'Iam.Users.UserPlatform_v3',
Information_ByUserId = 'Iam.Users.Information_ByUserId',
Permission_ByUserId = 'Iam.Users.Permission_ByUserId',
UserBulkBasic_v3 = 'Iam.Users.UserBulkBasic_v3',
Verification_ByUserId = 'Iam.Users.Verification_ByUserId',
UserCodeVerify_v3 = 'Iam.Users.UserCodeVerify_v3',
UserMePassword_v3 = 'Iam.Users.UserMePassword_v3',
UsersAvailability_v3 = 'Iam.Users.UsersAvailability_v3',
UserCodeRequest_v3 = 'Iam.Users.UserCodeRequest_v3',
Role_ByUserId_ByRoleId = 'Iam.Users.Role_ByUserId_ByRoleId',
Bans_ByUserId_v2 = 'Iam.Users.Bans_ByUserId_v2',
UserResetPassword_v2 = 'Iam.Users.UserResetPassword_v2',
Bans_ByUserId_v3 = 'Iam.Users.Bans_ByUserId_v3',
UserForgotPassword_v2 = 'Iam.Users.UserForgotPassword_v2',
UserMeCodeVerify_v3 = 'Iam.Users.UserMeCodeVerify_v3',
LoginsHistories_ByUserId = 'Iam.Users.LoginsHistories_ByUserId',
Verificationcode_ByUserId = 'Iam.Users.Verificationcode_ByUserId',
UserMeCodeRequest_v3 = 'Iam.Users.UserMeCodeRequest_v3',
UserInputValidation_v3 = 'Iam.Users.UserInputValidation_v3',
Password_ByUserId_v2 = 'Iam.Users.Password_ByUserId_v2',
Validate_ByUserId_v3 = 'Iam.Users.Validate_ByUserId_v3',
Enable_ByUserId_ByBanId = 'Iam.Users.Enable_ByUserId_ByBanId',
Platforms_ByUserId_v3 = 'Iam.Users.Platforms_ByUserId_v3',
Publisher_ByUserId_v3 = 'Iam.Users.Publisher_ByUserId_v3',
UserMeHeadlesVerify_v3 = 'Iam.Users.UserMeHeadlesVerify_v3',
Disable_ByUserId_ByBanId = 'Iam.Users.Disable_ByUserId_ByBanId',
Information_ByUserId_v3 = 'Iam.Users.Information_ByUserId_v3',
UpgradeHeadlessAccount_ByUserId = 'Iam.Users.UpgradeHeadlessAccount_ByUserId',
UserInvite_ByInvitationId_v3 = 'Iam.Users.UserInvite_ByInvitationId_v3',
User_ByPlatformId_v3 = 'Iam.Users.User_ByPlatformId_v3',
PlatformLink_ByUserId_v3 = 'Iam.Users.PlatformLink_ByUserId_v3',
UserMeHeadlesCodeVerify_v3 = 'Iam.Users.UserMeHeadlesCodeVerify_v3',
LoginsHistories_ByUserId_v3 = 'Iam.Users.LoginsHistories_ByUserId_v3',
UserMePlatform_ByPlatformId_v3 = 'Iam.Users.UserMePlatform_ByPlatformId_v3',
Link_ByUserId_ByPlatformId = 'Iam.Users.Link_ByUserId_ByPlatformId',
PlatformsJustice_ByUserId_v2 = 'Iam.Users.PlatformsJustice_ByUserId_v2',
DistinctPlatforms_ByUserId_v3 = 'Iam.Users.DistinctPlatforms_ByUserId_v3',
PlatformsJustice_ByUserId_v3 = 'Iam.Users.PlatformsJustice_ByUserId_v3',
AsyncStatus_ByRequestId_v3 = 'Iam.Users.AsyncStatus_ByRequestId_v3',
Unlink_ByUserId_ByPlatformId = 'Iam.Users.Unlink_ByUserId_ByPlatformId',
AllMeUser_ByPlatformId_v3 = 'Iam.Users.AllMeUser_ByPlatformId_v3',
Permission_ByUserId_ByResource_ByAction = 'Iam.Users.Permission_ByUserId_ByResource_ByAction',
ForceMeUser_ByPlatformId_v3 = 'Iam.Users.ForceMeUser_ByPlatformId_v3',
Agerestrictions_ByCountryCode_v2 = 'Iam.Users.Agerestrictions_ByCountryCode_v2',
AgerestrictionCountry_ByCountryCode_v3 = 'Iam.Users.AgerestrictionCountry_ByCountryCode_v3',
PlatformJustice_ByUserId_ByTargetNamespace = 'Iam.Users.PlatformJustice_ByUserId_ByTargetNamespace',
WebLinkMeUsers_ByPlatformId_v3 = 'Iam.Users.WebLinkMeUsers_ByPlatformId_v3',
Link_ByUserId_ByPlatformId_v2 = 'Iam.Users.Link_ByUserId_ByPlatformId_v2',
PlatformLinkWithProgression_ByUserId_v3 = 'Iam.Users.PlatformLinkWithProgression_ByUserId_v3',
UserMePlatformJustice_ByTargetNamespace_v3 = 'Iam.Users.UserMePlatformJustice_ByTargetNamespace_v3',
User_ByPlatformId_ByPlatformUserId_v3 = 'Iam.Users.User_ByPlatformId_ByPlatformUserId_v3',
UpgradeHeadlessAccountWithVerificationCode_ByUserId = 'Iam.Users.UpgradeHeadlessAccountWithVerificationCode_ByUserId',
WebLinkProcesMeUser_ByPlatformId_v3 = 'Iam.Users.WebLinkProcesMeUser_ByPlatformId_v3',
WebLinkEstablishMeUsers_ByPlatformId_v3 = 'Iam.Users.WebLinkEstablishMeUsers_ByPlatformId_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Users.UsersMe_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersMe_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {includeAllPlatforms?: boolean | null} },
    options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponseV3>) => void
  ): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersMe_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMe_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersMe_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUser = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }>, 'mutationKey'>,
    callback?: (data: UserCreateResponse) => void
  ): UseMutationResult<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserCreateRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUser(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.User],
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
 *    queryKey: [Key_Users.UsersAdmin, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersAdmin = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {after?: number, before?: number, limit?: number, roleId?: string | null} },
    options?: Omit<UseQueryOptions<GetAdminUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetAdminUsersResponse>) => void
  ): UseQueryResult<GetAdminUsersResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersAdmin>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersAdmin(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetAdminUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersAdmin, input],
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
 *    queryKey: [Key_Users.UsersVerifyLinkVerify_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersVerifyLinkVerify_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {code?: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersVerifyLinkVerify_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersVerifyLinkVerify_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersVerifyLinkVerify_v3, input],
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
 *    queryKey: [Key_Users.UsersSearch, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersSearch = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {query?: string | null} },
    options?: Omit<UseQueryOptions<SearchUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SearchUsersResponse>) => void
  ): UseQueryResult<SearchUsersResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersSearch>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersSearch(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SearchUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_DeleteUser_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUser_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.User_ByUserId],
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
 *    queryKey: [Key_Users.User_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponse>) => void
  ): UseQueryResult<UserResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUser_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_UpdateUser_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequest }>, 'mutationKey'>,
    callback?: (data: UserResponse) => void
  ): UseMutationResult<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserUpdateRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUser_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.User_ByUserId],
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
 *    queryKey: [Key_Users.UsersByLoginId, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersByLoginId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {loginId?: string | null} },
    options?: Omit<UseQueryOptions<PublicUserResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PublicUserResponse>) => void
  ): UseQueryResult<PublicUserResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersByLoginId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersByLoginId(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PublicUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersByLoginId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUser_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }>, 'mutationKey'>,
    callback?: (data: UserCreateResponse) => void
  ): UseMutationResult<UserCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserCreateRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUser_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.User_v2],
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
 *    queryKey: [Key_Users.Users_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsers_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {by?: string | null, limit?: number, offset?: number, platformBy?: string | null, platformId?: string | null, query?: string | null} },
    options?: Omit<UseQueryOptions<PublicUserInformationResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PublicUserInformationResponseV3>) => void
  ): UseQueryResult<PublicUserInformationResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsers_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsers_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PublicUserInformationResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.Users_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUser_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserCreateResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserCreateResponseV3) => void
  ): UseMutationResult<UserCreateResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCreateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserCreateRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUser_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.User_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserMeVerifyLinkRequest_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationLinkRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationLinkRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationLinkRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeVerifyLinkRequest_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMeVerifyLinkRequest_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateBan_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BanCreateRequest }>, 'mutationKey'>,
    callback?: (data: UserBanResponse) => void
  ): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BanCreateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BanCreateRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createBan_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Ban_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PatchUserMe_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUserMe_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMe_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateUserMe_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicUserUpdateRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUserMe_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMe_v3],
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
 *    queryKey: [Key_Users.UsersMeHeadlessLinkConflict_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersMeHeadlessLinkConflict_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {oneTimeLinkCode: string | null} },
    options?: Omit<UseQueryOptions<GetLinkHeadlessAccountConflictResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetLinkHeadlessAccountConflictResponse>) => void
  ): UseQueryResult<GetLinkHeadlessAccountConflictResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersMeHeadlessLinkConflict_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeHeadlessLinkConflict_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetLinkHeadlessAccountConflictResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersMeHeadlessLinkConflict_v3, input],
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
 *    queryKey: [Key_Users.Bans_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetBans_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserBanResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserBanResponseArray>) => void
  ): UseQueryResult<UserBanResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetBans_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBans_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserBanResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.Bans_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserResetPassword = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ResetPasswordRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserResetPassword(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserResetPassword],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateRole_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: string[] }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Role_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserForgotPassword = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationCodeRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserForgotPassword(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserForgotPassword],
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
 *    queryKey: [Key_Users.UsersListByLoginIds, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersListByLoginIds = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {loginIds?: string | null} },
    options?: Omit<UseQueryOptions<PublicUsersResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PublicUsersResponse>) => void
  ): UseQueryResult<PublicUsersResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersListByLoginIds>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersListByLoginIds(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PublicUsersResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersListByLoginIds, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_UpdateEnable_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEnable_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Enable_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserReset_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ResetPasswordRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserReset_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserReset_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateDisable_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: DisableUserRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: DisableUserRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: DisableUserRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDisable_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Disable_ByUserId],
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
 *    queryKey: [Key_Users.UsersByPlatformUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersByPlatformUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {platformID: string | null, platformUserID: string | null} },
    options?: Omit<UseQueryOptions<PublicUserResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PublicUserResponse>) => void
  ): UseQueryResult<PublicUserResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersByPlatformUserId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersByPlatformUserId(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PublicUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersByPlatformUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserForgot_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ForgotPasswordRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ForgotPasswordRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ForgotPasswordRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserForgot_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserForgot_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdatePassword_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePassword_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Password_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PostCrosslink_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {linkingToken: string | null,platformId?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {linkingToken: string | null,platformId?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: {linkingToken: string | null,platformId?: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postCrosslink_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Crosslink_ByUserId],
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
 *    queryKey: [Key_Users.Platforms_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatforms_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserLinkedPlatformArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserLinkedPlatformArray>) => void
  ): UseQueryResult<UserLinkedPlatformArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetPlatforms_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatforms_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserLinkedPlatformArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.Platforms_ByUserId, input],
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
 *    queryKey: [Key_Users.Publisher_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetPublisher_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<GetPublisherUserResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetPublisherUserResponse>) => void
  ): UseQueryResult<GetPublisherUserResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetPublisher_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPublisher_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetPublisherUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.Publisher_ByUserId, input],
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
 *    queryKey: [Key_Users.User_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByUserId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponse>) => void
  ): UseQueryResult<UserResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUser_ByUserId_v2>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByUserId_v2(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_PatchUser_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequest }>, 'mutationKey'>,
    callback?: (data: UserResponseArray) => void
  ): UseMutationResult<UserResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserUpdateRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUser_ByUserId_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.User_ByUserId_v2],
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
 *    queryKey: [Key_Users.User_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<PublicUserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PublicUserResponseV3>) => void
  ): UseQueryResult<PublicUserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUser_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PublicUserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserMeHeadlesLinkWithProgression_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LinkHeadlessAccountRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: LinkHeadlessAccountRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: LinkHeadlessAccountRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeHeadlesLinkWithProgression_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMeHeadlesLinkWithProgression_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserPlatform_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UsersPlatformInfosResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersPlatformInfosRequestV3 }>, 'mutationKey'>,
    callback?: (data: UsersPlatformInfosResponse) => void
  ): UseMutationResult<UsersPlatformInfosResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersPlatformInfosRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UsersPlatformInfosRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserPlatform_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserPlatform_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_DeleteInformation_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteInformation_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Information_ByUserId],
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
 *    queryKey: [Key_Users.Information_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetInformation_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserInformation, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserInformation>) => void
  ): UseQueryResult<UserInformation, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetInformation_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInformation_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserInformation, AxiosError<ApiError>>({
    queryKey: [Key_Users.Information_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_UpdatePermission_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: Permissions }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: Permissions }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: Permissions }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePermission_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Permission_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserBulkBasic_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ListBulkUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserIDsRequest }>, 'mutationKey'>,
    callback?: (data: ListBulkUserResponse) => void
  ): UseMutationResult<ListBulkUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserIDsRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserIDsRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserBulkBasic_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserBulkBasic_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateVerification_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserVerificationRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserVerificationRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserVerificationRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateVerification_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Verification_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserCodeVerify_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: VerifyRegistrationCode }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: VerifyRegistrationCode }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: VerifyRegistrationCode }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserCodeVerify_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserCodeVerify_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateUserMePassword_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserPasswordUpdateV3Request }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserPasswordUpdateV3Request }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserPasswordUpdateV3Request }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUserMePassword_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMePassword_v3],
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
 *    queryKey: [Key_Users.UsersAvailability_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUsersAvailability_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {field: string | null, query: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUsersAvailability_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersAvailability_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Users.UsersAvailability_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserCodeRequest_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendRegisterVerificationCodeRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendRegisterVerificationCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: SendRegisterVerificationCodeRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserCodeRequest_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserCodeRequest_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_DeleteRole_ByUserId_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, roleId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRole_ByUserId_ByRoleId(input.userId, input.roleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Role_ByUserId_ByRoleId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateRole_ByUserId_ByRoleId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, roleId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByUserId_ByRoleId(input.userId, input.roleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Role_ByUserId_ByRoleId],
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
 *    queryKey: [Key_Users.Bans_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetBans_ByUserId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {activeOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<UserBanResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserBanResponseArray>) => void
  ): UseQueryResult<UserBanResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetBans_ByUserId_v2>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBans_ByUserId_v2(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserBanResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.Bans_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserResetPassword_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ResetPasswordRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ResetPasswordRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserResetPassword_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserResetPassword_v2],
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
 *    queryKey: [Key_Users.Bans_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetBans_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {activeOnly?: boolean | null, after?: string | null, before?: string | null, limit?: number} },
    options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserBanV3Response>) => void
  ): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetBans_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBans_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_Users.Bans_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserForgotPassword_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationCodeRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserForgotPassword_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserForgotPassword_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserMeCodeVerify_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserVerificationRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserVerificationRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserVerificationRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeCodeVerify_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMeCodeVerify_v3],
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
 *    queryKey: [Key_Users.LoginsHistories_ByUserId, input]
 * }
 * ```
 */
export const useUsersApi_GetLoginsHistories_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {after?: number, before?: number, limit?: number} },
    options?: Omit<UseQueryOptions<LoginHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<LoginHistoriesResponse>) => void
  ): UseQueryResult<LoginHistoriesResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetLoginsHistories_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLoginsHistories_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<LoginHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.LoginsHistories_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_UpdateVerificationcode_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SendVerificationCodeRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SendVerificationCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SendVerificationCodeRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateVerificationcode_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Verificationcode_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserMeCodeRequest_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: SendVerificationCodeRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: SendVerificationCodeRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeCodeRequest_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMeCodeRequest_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserInputValidation_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserInputValidationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserInputValidationRequest }>, 'mutationKey'>,
    callback?: (data: UserInputValidationResponse) => void
  ): UseMutationResult<UserInputValidationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UserInputValidationRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserInputValidationRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserInputValidation_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserInputValidation_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdatePassword_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePassword_ByUserId_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Password_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PostValidate_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {password: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {password: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: {password: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postValidate_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Validate_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateEnable_ByUserId_ByBanId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, banId:string }>, 'mutationKey'>,
    callback?: (data: UserBanResponse) => void
  ): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, banId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, banId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEnable_ByUserId_ByBanId(input.userId, input.banId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Enable_ByUserId_ByBanId],
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
 *    queryKey: [Key_Users.Platforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatforms_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {after?: string | null, before?: string | null, limit?: number, platformId?: string | null} },
    options?: Omit<UseQueryOptions<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserLinkedPlatformsResponseV3>) => void
  ): UseQueryResult<UserLinkedPlatformsResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetPlatforms_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatforms_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.Platforms_ByUserId_v3, input],
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
 *    queryKey: [Key_Users.Publisher_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetPublisher_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<GetPublisherUserResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetPublisherUserResponse>) => void
  ): UseQueryResult<GetPublisherUserResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetPublisher_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPublisher_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetPublisherUserResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.Publisher_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserMeHeadlesVerify_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountV3Request, queryParams?: {needVerificationCode?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountV3Request, queryParams?: {needVerificationCode?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountV3Request, queryParams?: {needVerificationCode?: boolean | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeHeadlesVerify_v3(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMeHeadlesVerify_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdateDisable_ByUserId_ByBanId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, banId:string }>, 'mutationKey'>,
    callback?: (data: UserBanResponse) => void
  ): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, banId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, banId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDisable_ByUserId_ByBanId(input.userId, input.banId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Disable_ByUserId_ByBanId],
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
 *    queryKey: [Key_Users.Information_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetInformation_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserInformationV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserInformationV3>) => void
  ): UseQueryResult<UserInformationV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetInformation_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInformation_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserInformationV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.Information_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_UpdateUpgradeHeadlessAccount_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountRequest }>, 'mutationKey'>,
    callback?: (data: UserResponse) => void
  ): UseMutationResult<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUpgradeHeadlessAccount_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UpgradeHeadlessAccount_ByUserId],
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
 *    queryKey: [Key_Users.UserInvite_ByInvitationId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUserInvite_ByInvitationId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { invitationId:string },
    options?: Omit<UseQueryOptions<UserInvitationV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserInvitationV3>) => void
  ): UseQueryResult<UserInvitationV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUserInvite_ByInvitationId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUserInvite_ByInvitationId_v3(input.invitationId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserInvitationV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.UserInvite_ByInvitationId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_CreateUserInvite_ByInvitationId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserCreateResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { invitationId:string, data: UserCreateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserCreateResponseV3) => void
  ): UseMutationResult<UserCreateResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { invitationId:string, data: UserCreateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { invitationId:string, data: UserCreateRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserInvite_ByInvitationId_v3(input.invitationId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserInvite_ByInvitationId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUser_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserPlatforms, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformUserIdRequest, queryParams?: {rawPID?: boolean | null, rawPUID?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: UserPlatforms) => void
  ): UseMutationResult<UserPlatforms, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: PlatformUserIdRequest, queryParams?: {rawPID?: boolean | null, rawPUID?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: PlatformUserIdRequest, queryParams?: {rawPID?: boolean | null, rawPUID?: boolean | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUser_ByPlatformId_v3(input.platformId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.User_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreatePlatformLink_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: LinkPlatformAccountRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: LinkPlatformAccountRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: LinkPlatformAccountRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPlatformLink_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.PlatformLink_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserMeHeadlesCodeVerify_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeHeadlesCodeVerify_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMeHeadlesCodeVerify_v3],
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
 *    queryKey: [Key_Users.LoginsHistories_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetLoginsHistories_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {after?: number, before?: number, limit?: number} },
    options?: Omit<UseQueryOptions<LoginHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<LoginHistoriesResponse>) => void
  ): UseQueryResult<LoginHistoriesResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetLoginsHistories_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLoginsHistories_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<LoginHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.LoginsHistories_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_DeleteUserMePlatform_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: UnlinkUserPlatformRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: UnlinkUserPlatformRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: UnlinkUserPlatformRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteUserMePlatform_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMePlatform_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PostUserMePlatform_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {ticket: string | null,redirectUri?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {ticket: string | null,redirectUri?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: {ticket: string | null,redirectUri?: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUserMePlatform_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMePlatform_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PostLink_ByUserId_ByPlatformId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postLink_ByUserId_ByPlatformId(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Link_ByUserId_ByPlatformId],
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
 *    queryKey: [Key_Users.PlatformsJustice_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatformsJustice_ByUserId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<GetUserMappingArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserMappingArray>) => void
  ): UseQueryResult<GetUserMappingArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetPlatformsJustice_ByUserId_v2>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsJustice_ByUserId_v2(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserMappingArray, AxiosError<ApiError>>({
    queryKey: [Key_Users.PlatformsJustice_ByUserId_v2, input],
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
 *    queryKey: [Key_Users.DistinctPlatforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetDistinctPlatforms_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<DistinctPlatformResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DistinctPlatformResponseV3>) => void
  ): UseQueryResult<DistinctPlatformResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetDistinctPlatforms_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDistinctPlatforms_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DistinctPlatformResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.DistinctPlatforms_ByUserId_v3, input],
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
 *    queryKey: [Key_Users.PlatformsJustice_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatformsJustice_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<GetUserMappingV3Array, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserMappingV3Array>) => void
  ): UseQueryResult<GetUserMappingV3Array, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetPlatformsJustice_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsJustice_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserMappingV3Array, AxiosError<ApiError>>({
    queryKey: [Key_Users.PlatformsJustice_ByUserId_v3, input],
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
 *    queryKey: [Key_Users.AsyncStatus_ByRequestId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetAsyncStatus_ByRequestId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { requestId:string },
    options?: Omit<UseQueryOptions<LinkRequest, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<LinkRequest>) => void
  ): UseQueryResult<LinkRequest, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetAsyncStatus_ByRequestId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAsyncStatus_ByRequestId_v3(input.requestId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<LinkRequest, AxiosError<ApiError>>({
    queryKey: [Key_Users.AsyncStatus_ByRequestId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_PostUnlink_ByUserId_ByPlatformId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postUnlink_ByUserId_ByPlatformId(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Unlink_ByUserId_ByPlatformId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_DeleteAllMeUser_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteAllMeUser_ByPlatformId_v3(input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.AllMeUser_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_DeletePermission_ByUserId_ByResource_ByAction = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, resource:string, action:number }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, resource:string, action:number }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, resource:string, action:number }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePermission_ByUserId_ByResource_ByAction(input.userId, input.resource, input.action))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Permission_ByUserId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_UpdatePermission_ByUserId_ByResource_ByAction = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, resource:string, action:number, data: UpdatePermissionScheduleRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, resource:string, action:number, data: UpdatePermissionScheduleRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, resource:string, action:number, data: UpdatePermissionScheduleRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePermission_ByUserId_ByResource_ByAction(input.userId, input.resource, input.action, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Permission_ByUserId_ByResource_ByAction],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PostForceMeUser_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {ticket: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {ticket: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: {ticket: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postForceMeUser_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.ForceMeUser_ByPlatformId_v3],
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
 *    queryKey: [Key_Users.Agerestrictions_ByCountryCode_v2, input]
 * }
 * ```
 */
export const useUsersApi_GetAgerestrictions_ByCountryCode_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { countryCode:string },
    options?: Omit<UseQueryOptions<Country, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<Country>) => void
  ): UseQueryResult<Country, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetAgerestrictions_ByCountryCode_v2>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAgerestrictions_ByCountryCode_v2(input.countryCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<Country, AxiosError<ApiError>>({
    queryKey: [Key_Users.Agerestrictions_ByCountryCode_v2, input],
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
 *    queryKey: [Key_Users.AgerestrictionCountry_ByCountryCode_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetAgerestrictionCountry_ByCountryCode_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { countryCode:string },
    options?: Omit<UseQueryOptions<CountryV3Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CountryV3Response>) => void
  ): UseQueryResult<CountryV3Response, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetAgerestrictionCountry_ByCountryCode_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAgerestrictionCountry_ByCountryCode_v3(input.countryCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CountryV3Response, AxiosError<ApiError>>({
    queryKey: [Key_Users.AgerestrictionCountry_ByCountryCode_v3, input],
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
 *    queryKey: [Key_Users.PlatformJustice_ByUserId_ByTargetNamespace, input]
 * }
 * ```
 */
export const useUsersApi_GetPlatformJustice_ByUserId_ByTargetNamespace = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, targetNamespace:string },
    options?: Omit<UseQueryOptions<GetUserMapping, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserMapping>) => void
  ): UseQueryResult<GetUserMapping, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetPlatformJustice_ByUserId_ByTargetNamespace>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformJustice_ByUserId_ByTargetNamespace(input.userId, input.targetNamespace))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserMapping, AxiosError<ApiError>>({
    queryKey: [Key_Users.PlatformJustice_ByUserId_ByTargetNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_UpdatePlatformJustice_ByUserId_ByTargetNamespace = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GetUserJusticePlatformAccountResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, targetNamespace:string }>, 'mutationKey'>,
    callback?: (data: GetUserJusticePlatformAccountResponse) => void
  ): UseMutationResult<GetUserJusticePlatformAccountResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, targetNamespace:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, targetNamespace:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePlatformJustice_ByUserId_ByTargetNamespace(input.userId, input.targetNamespace))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.PlatformJustice_ByUserId_ByTargetNamespace],
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
 *    queryKey: [Key_Users.WebLinkMeUsers_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetWebLinkMeUsers_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string,  queryParams?: {clientId?: string | null, redirectUri?: string | null} },
    options?: Omit<UseQueryOptions<WebLinkingResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<WebLinkingResponse>) => void
  ): UseQueryResult<WebLinkingResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetWebLinkMeUsers_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getWebLinkMeUsers_ByPlatformId_v3(input.platformId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<WebLinkingResponse, AxiosError<ApiError>>({
    queryKey: [Key_Users.WebLinkMeUsers_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_DeleteLink_ByUserId_ByPlatformId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLink_ByUserId_ByPlatformId_v2(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Link_ByUserId_ByPlatformId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PostLink_ByUserId_ByPlatformId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postLink_ByUserId_ByPlatformId_v2(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.Link_ByUserId_ByPlatformId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreatePlatformLinkWithProgression_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: LinkPlatformAccountWithProgressionRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: LinkPlatformAccountWithProgressionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: LinkPlatformAccountWithProgressionRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPlatformLinkWithProgression_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.PlatformLinkWithProgression_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_CreateUserMePlatformJustice_ByTargetNamespace_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { targetNamespace:string }>, 'mutationKey'>,
    callback?: (data: CreateJusticeUserResponse) => void
  ): UseMutationResult<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { targetNamespace:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { targetNamespace:string }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMePlatformJustice_ByTargetNamespace_v3(input.targetNamespace))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UserMePlatformJustice_ByTargetNamespace_v3],
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
 *    queryKey: [Key_Users.User_ByPlatformId_ByPlatformUserId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetUser_ByPlatformId_ByPlatformUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string, platformUserId:string },
    options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponseV3>) => void
  ): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetUser_ByPlatformId_ByPlatformUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByPlatformId_ByPlatformUserId_v3(input.platformId, input.platformUserId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_Users.User_ByPlatformId_ByPlatformUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersApi_UpdateUpgradeHeadlessAccountWithVerificationCode_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountWithVerificationCodeRequest }>, 'mutationKey'>,
    callback?: (data: UserResponse) => void
  ): UseMutationResult<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountWithVerificationCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountWithVerificationCodeRequest }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUpgradeHeadlessAccountWithVerificationCode_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.UpgradeHeadlessAccountWithVerificationCode_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersApi_PostWebLinkProcesMeUser_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LinkRequest, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {state: string | null,code?: string | null} }>, 'mutationKey'>,
    callback?: (data: LinkRequest) => void
  ): UseMutationResult<LinkRequest, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {state: string | null,code?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: {state: string | null,code?: string | null} }) => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postWebLinkProcesMeUser_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Users.WebLinkProcesMeUser_ByPlatformId_v3],
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
 *    queryKey: [Key_Users.WebLinkEstablishMeUsers_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersApi_GetWebLinkEstablishMeUsers_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string,  queryParams: {state: string | null, code?: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersApi_GetWebLinkEstablishMeUsers_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getWebLinkEstablishMeUsers_ByPlatformId_v3(input.platformId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Users.WebLinkEstablishMeUsers_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  