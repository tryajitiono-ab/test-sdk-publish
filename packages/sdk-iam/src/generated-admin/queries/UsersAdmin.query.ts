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
import { UsersAdminApi } from "../UsersAdminApi.js"

import { AgeRestrictionRequest } from '../../generated-definitions/AgeRestrictionRequest.js'
import { AgeRestrictionRequestV3 } from '../../generated-definitions/AgeRestrictionRequestV3.js'
import { AgeRestrictionResponse } from '../../generated-definitions/AgeRestrictionResponse.js'
import { AgeRestrictionResponseV3 } from '../../generated-definitions/AgeRestrictionResponseV3.js'
import { BanCreateRequest } from '../../generated-definitions/BanCreateRequest.js'
import { BanUpdateRequest } from '../../generated-definitions/BanUpdateRequest.js'
import { Country } from '../../generated-definitions/Country.js'
import { CountryAgeRestrictionArray } from '../../generated-definitions/CountryAgeRestrictionArray.js'
import { CountryAgeRestrictionRequest } from '../../generated-definitions/CountryAgeRestrictionRequest.js'
import { CountryAgeRestrictionV3Request } from '../../generated-definitions/CountryAgeRestrictionV3Request.js'
import { CountryV3Response } from '../../generated-definitions/CountryV3Response.js'
import { CountryV3ResponseArray } from '../../generated-definitions/CountryV3ResponseArray.js'
import { CreateJusticeUserResponse } from '../../generated-definitions/CreateJusticeUserResponse.js'
import { DisableUserRequest } from '../../generated-definitions/DisableUserRequest.js'
import { DistinctPlatformResponseV3 } from '../../generated-definitions/DistinctPlatformResponseV3.js'
import { GetBulkUserBansRequest } from '../../generated-definitions/GetBulkUserBansRequest.js'
import { GetUserBanSummaryV3 } from '../../generated-definitions/GetUserBanSummaryV3.js'
import { GetUserBanV3Response } from '../../generated-definitions/GetUserBanV3Response.js'
import { GetUserMappingArray } from '../../generated-definitions/GetUserMappingArray.js'
import { GetUserMappingV3 } from '../../generated-definitions/GetUserMappingV3.js'
import { GetUsersResponseWithPaginationV3 } from '../../generated-definitions/GetUsersResponseWithPaginationV3.js'
import { InviteUserRequestV3 } from '../../generated-definitions/InviteUserRequestV3.js'
import { InviteUserResponseV3 } from '../../generated-definitions/InviteUserResponseV3.js'
import { LinkPlatformAccountRequest } from '../../generated-definitions/LinkPlatformAccountRequest.js'
import { LinkingHistoryResponseWithPaginationV3 } from '../../generated-definitions/LinkingHistoryResponseWithPaginationV3.js'
import { ListBulkUserPlatformsResponse } from '../../generated-definitions/ListBulkUserPlatformsResponse.js'
import { ListEmailAddressRequest } from '../../generated-definitions/ListEmailAddressRequest.js'
import { ListUserInformationResult } from '../../generated-definitions/ListUserInformationResult.js'
import { ListUserResponseV3 } from '../../generated-definitions/ListUserResponseV3.js'
import { ListUsersWithPlatformAccountsResponse } from '../../generated-definitions/ListUsersWithPlatformAccountsResponse.js'
import { LoginHistoriesResponse } from '../../generated-definitions/LoginHistoriesResponse.js'
import { NamespaceRoleRequest } from '../../generated-definitions/NamespaceRoleRequest.js'
import { PermissionDeleteRequest } from '../../generated-definitions/PermissionDeleteRequest.js'
import { Permissions } from '../../generated-definitions/Permissions.js'
import { PlatformUserIdRequest } from '../../generated-definitions/PlatformUserIdRequest.js'
import { SearchUsersByPlatformIdResponse } from '../../generated-definitions/SearchUsersByPlatformIdResponse.js'
import { SearchUsersResponseWithPaginationV3 } from '../../generated-definitions/SearchUsersResponseWithPaginationV3.js'
import { SendVerificationCodeRequestV3 } from '../../generated-definitions/SendVerificationCodeRequestV3.js'
import { TokenThirdPartyLinkStatusResponse } from '../../generated-definitions/TokenThirdPartyLinkStatusResponse.js'
import { UnlinkUserPlatformRequest } from '../../generated-definitions/UnlinkUserPlatformRequest.js'
import { UpdateUserDeletionStatusRequest } from '../../generated-definitions/UpdateUserDeletionStatusRequest.js'
import { UpdateUserStatusRequest } from '../../generated-definitions/UpdateUserStatusRequest.js'
import { UpgradeHeadlessAccountWithVerificationCodeRequestV3 } from '../../generated-definitions/UpgradeHeadlessAccountWithVerificationCodeRequestV3.js'
import { UserBanResponse } from '../../generated-definitions/UserBanResponse.js'
import { UserBanResponseArray } from '../../generated-definitions/UserBanResponseArray.js'
import { UserBanResponseV3 } from '../../generated-definitions/UserBanResponseV3.js'
import { UserDeletionStatusResponse } from '../../generated-definitions/UserDeletionStatusResponse.js'
import { UserIDsRequest } from '../../generated-definitions/UserIDsRequest.js'
import { UserIdentityUpdateRequestV3 } from '../../generated-definitions/UserIdentityUpdateRequestV3.js'
import { UserLinkedPlatformsResponseV3 } from '../../generated-definitions/UserLinkedPlatformsResponseV3.js'
import { UserPasswordUpdateRequest } from '../../generated-definitions/UserPasswordUpdateRequest.js'
import { UserPasswordUpdateV3Request } from '../../generated-definitions/UserPasswordUpdateV3Request.js'
import { UserPlatformLinkHistories } from '../../generated-definitions/UserPlatformLinkHistories.js'
import { UserPlatformMetadata } from '../../generated-definitions/UserPlatformMetadata.js'
import { UserPlatforms } from '../../generated-definitions/UserPlatforms.js'
import { UserResponse } from '../../generated-definitions/UserResponse.js'
import { UserResponseV3 } from '../../generated-definitions/UserResponseV3.js'
import { UserUpdateRequest } from '../../generated-definitions/UserUpdateRequest.js'
import { UserUpdateRequestV3 } from '../../generated-definitions/UserUpdateRequestV3.js'
import { UserVerificationRequest } from '../../generated-definitions/UserVerificationRequest.js'
import { UsersUpdateRequestV3 } from '../../generated-definitions/UsersUpdateRequestV3.js'
import { VerificationCodeResponse } from '../../generated-definitions/VerificationCodeResponse.js'


export enum Key_UsersAdmin {
  UsersMe_v3 = 'Iam.UsersAdmin.UsersMe_v3',
Users_v2 = 'Iam.UsersAdmin.Users_v2',
Users_v3 = 'Iam.UsersAdmin.Users_v3',
User_v3 = 'Iam.UsersAdmin.User_v3',
Admins_v3 = 'Iam.UsersAdmin.Admins_v3',
UserBan_v3 = 'Iam.UsersAdmin.UserBan_v3',
UserBulk_v3 = 'Iam.UsersAdmin.UserBulk_v3',
UserInvite_v3 = 'Iam.UsersAdmin.UserInvite_v3',
UsersSearch_v3 = 'Iam.UsersAdmin.UsersSearch_v3',
User_ByUserId_v2 = 'Iam.UsersAdmin.User_ByUserId_v2',
User_ByUserId_v3 = 'Iam.UsersAdmin.User_ByUserId_v3',
Agerestrictions_v2 = 'Iam.UsersAdmin.Agerestrictions_v2',
Agerestriction_v2 = 'Iam.UsersAdmin.Agerestriction_v2',
Agerestrictions_v3 = 'Iam.UsersAdmin.Agerestrictions_v3',
Agerestriction_v3 = 'Iam.UsersAdmin.Agerestriction_v3',
UserSearchBulk_v3 = 'Iam.UsersAdmin.UserSearchBulk_v3',
Ban_ByUserId_v2 = 'Iam.UsersAdmin.Ban_ByUserId_v2',
Bans_ByUserId_v2 = 'Iam.UsersAdmin.Bans_ByUserId_v2',
Bans_ByUserId_v3 = 'Iam.UsersAdmin.Bans_ByUserId_v3',
Ban_ByUserId_v3 = 'Iam.UsersAdmin.Ban_ByUserId_v3',
UsersLinkhistories_v3 = 'Iam.UsersAdmin.UsersLinkhistories_v3',
Role_ByUserId_v2 = 'Iam.UsersAdmin.Role_ByUserId_v2',
Role_ByUserId_ByNS_v2 = 'Iam.UsersAdmin.Role_ByUserId_ByNS_v2',
Users_ByRoleId_v3 = 'Iam.UsersAdmin.Users_ByRoleId_v3',
Codes_ByUserId_v3 = 'Iam.UsersAdmin.Codes_ByUserId_v3',
Role_ByUserId_v3 = 'Iam.UsersAdmin.Role_ByUserId_v3',
UserBulkPlatform_v3 = 'Iam.UsersAdmin.UserBulkPlatform_v3',
Enable_ByUserId_v2 = 'Iam.UsersAdmin.Enable_ByUserId_v2',
Status_ByUserId_v3 = 'Iam.UsersAdmin.Status_ByUserId_v3',
Verify_ByUserId_v3 = 'Iam.UsersAdmin.Verify_ByUserId_v3',
Disable_ByUserId_v2 = 'Iam.UsersAdmin.Disable_ByUserId_v2',
Country_ByCountryCode_v2 = 'Iam.UsersAdmin.Country_ByCountryCode_v2',
Password_ByUserId_v2 = 'Iam.UsersAdmin.Password_ByUserId_v2',
Password_ByUserId_v3 = 'Iam.UsersAdmin.Password_ByUserId_v3',
UsersPlatformsJustice_v3 = 'Iam.UsersAdmin.UsersPlatformsJustice_v3',
Platforms_ByUserId_v3 = 'Iam.UsersAdmin.Platforms_ByUserId_v3',
CountriesAgerestrictions_v2 = 'Iam.UsersAdmin.CountriesAgerestrictions_v2',
AgerestrictionsCountries_v3 = 'Iam.UsersAdmin.AgerestrictionsCountries_v3',
CodeVerify_ByUserId_v3 = 'Iam.UsersAdmin.CodeVerify_ByUserId_v3',
Information_ByUserId_v3 = 'Iam.UsersAdmin.Information_ByUserId_v3',
Permission_ByUserId_v3 = 'Iam.UsersAdmin.Permission_ByUserId_v3',
Ban_ByUserId_ByBanId_v3 = 'Iam.UsersAdmin.Ban_ByUserId_ByBanId_v3',
BansSummary_ByUserId_v3 = 'Iam.UsersAdmin.BansSummary_ByUserId_v3',
CodeRequest_ByUserId_v3 = 'Iam.UsersAdmin.CodeRequest_ByUserId_v3',
User_ByPlatformId_v3 = 'Iam.UsersAdmin.User_ByPlatformId_v3',
PlatformLink_ByUserId_v3 = 'Iam.UsersAdmin.PlatformLink_ByUserId_v3',
Role_ByUserId_ByRoleId_v3 = 'Iam.UsersAdmin.Role_ByUserId_ByRoleId_v3',
DeletionStatus_ByUserId_v3 = 'Iam.UsersAdmin.DeletionStatus_ByUserId_v3',
LoginsHistories_ByUserId_v3 = 'Iam.UsersAdmin.LoginsHistories_ByUserId_v3',
TrustlyIdentity_ByUserId_v3 = 'Iam.UsersAdmin.TrustlyIdentity_ByUserId_v3',
DistinctPlatforms_ByUserId_v3 = 'Iam.UsersAdmin.DistinctPlatforms_ByUserId_v3',
PlatformsJustice_ByUserId_v3 = 'Iam.UsersAdmin.PlatformsJustice_ByUserId_v3',
PlatformsDistinct_ByUserId_v3 = 'Iam.UsersAdmin.PlatformsDistinct_ByUserId_v3',
HeadlesCodeVerify_ByUserId_v3 = 'Iam.UsersAdmin.HeadlesCodeVerify_ByUserId_v3',
Platform_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.Platform_ByUserId_ByPlatformId_v3',
AgerestrictionCountry_ByCountryCode_v3 = 'Iam.UsersAdmin.AgerestrictionCountry_ByCountryCode_v3',
PlatformsLinkHistories_ByUserId_v3 = 'Iam.UsersAdmin.PlatformsLinkHistories_ByUserId_v3',
All_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.All_ByUserId_ByPlatformId_v3',
Link_ByUserId_ByPlatformId_v2 = 'Iam.UsersAdmin.Link_ByUserId_ByPlatformId_v2',
Link_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.Link_ByUserId_ByPlatformId_v3',
User_ByPlatformId_ByPlatformUserId_v3 = 'Iam.UsersAdmin.User_ByPlatformId_ByPlatformUserId_v3',
Permission_ByUserId_ByResource_ByAction_v3 = 'Iam.UsersAdmin.Permission_ByUserId_ByResource_ByAction_v3',
Metadata_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.Metadata_ByUserId_ByPlatformId_v3',
LinkStatu_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.LinkStatu_ByUserId_ByPlatformId_v3',
PlatformJustice_ByUserId_ByTargetNamespace_v3 = 'Iam.UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3',
LinkHistory_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.LinkHistory_ByUserId_ByPlatformId_v3',
LinkRestriction_ByUserId_ByPlatformId_v3 = 'Iam.UsersAdmin.LinkRestriction_ByUserId_ByPlatformId_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UsersAdmin.UsersMe_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersMe_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponseV3>) => void
  ): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUsersMe_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMe_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersMe_v3, input],
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
 *    queryKey: [Key_UsersAdmin.Users_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsers_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {platformId: string | null, after?: string | null, before?: string | null, displayName?: string | null, limit?: number, loginId?: string | null, platformUserId?: string | null, roleId?: string | null, userId?: string | null} },
    options?: Omit<UseQueryOptions<SearchUsersByPlatformIdResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SearchUsersByPlatformIdResponse>) => void
  ): UseQueryResult<SearchUsersByPlatformIdResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUsers_v2>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsers_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SearchUsersByPlatformIdResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_v2, input],
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
 *    queryKey: [Key_UsersAdmin.Users_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsers_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {emailAddress?: string | null} },
    options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponseV3>) => void
  ): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUsers_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsers_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateUser_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UsersUpdateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UsersUpdateRequestV3 }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUser_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.User_v3],
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
 *    queryKey: [Key_UsersAdmin.Admins_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAdmins_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {after?: string | null, before?: string | null, endDate?: string | null, limit?: number, query?: string | null, roleId?: string | null, startDate?: string | null} },
    options?: Omit<UseQueryOptions<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUsersResponseWithPaginationV3>) => void
  ): UseQueryResult<GetUsersResponseWithPaginationV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetAdmins_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAdmins_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Admins_v3, input],
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
 *    queryKey: [Key_UsersAdmin.UserBan_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUserBan_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: GetBulkUserBansRequest, queryParams?: {activeOnly?: boolean | null, banType?: string | null} },
    options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserBanV3Response>) => void
  ): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_FetchUserBan_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchUserBan_v3(input.data, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UserBan_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_CreateUserBulk_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ListUserInformationResult, AxiosError<ApiError>, SdkSetConfigParam & { data: UserIDsRequest }>, 'mutationKey'>,
    callback?: (data: ListUserInformationResult) => void
  ): UseMutationResult<ListUserInformationResult, AxiosError<ApiError>, SdkSetConfigParam & { data: UserIDsRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserIDsRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserBulk_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.UserBulk_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_CreateUserInvite_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV3 }>, 'mutationKey'>,
    callback?: (data: InviteUserResponseV3) => void
  ): UseMutationResult<InviteUserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: InviteUserRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: InviteUserRequestV3 }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserInvite_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.UserInvite_v3],
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
 *    queryKey: [Key_UsersAdmin.UsersSearch_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersSearch_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {by?: string | null, endDate?: string | null, includeTotal?: boolean | null, limit?: number, offset?: number, platformBy?: string | null, platformId?: string | null, query?: string | null, roleIds?: string | null, skipLoginQueue?: boolean | null, startDate?: string | null, testAccount?: boolean | null} },
    options?: Omit<UseQueryOptions<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SearchUsersResponseWithPaginationV3>) => void
  ): UseQueryResult<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUsersSearch_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersSearch_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SearchUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersSearch_v3, input],
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
 *    queryKey: [Key_UsersAdmin.User_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUser_ByUserId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponse>) => void
  ): UseQueryResult<UserResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUser_ByUserId_v2>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByUserId_v2(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchUser_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequest }>, 'mutationKey'>,
    callback?: (data: UserResponse) => void
  ): UseMutationResult<UserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserUpdateRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUser_ByUserId_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.User_ByUserId_v2],
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
 *    queryKey: [Key_UsersAdmin.User_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUser_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponseV3>) => void
  ): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUser_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchUser_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserUpdateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserUpdateRequestV3 }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUser_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.User_ByUserId_v3],
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
 *    queryKey: [Key_UsersAdmin.Agerestrictions_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAgerestrictions_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<AgeRestrictionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AgeRestrictionResponse>) => void
  ): UseQueryResult<AgeRestrictionResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetAgerestrictions_v2>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAgerestrictions_v2())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AgeRestrictionResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Agerestrictions_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchAgerestriction_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AgeRestrictionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequest }>, 'mutationKey'>,
    callback?: (data: AgeRestrictionResponse) => void
  ): UseMutationResult<AgeRestrictionResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: AgeRestrictionRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchAgerestriction_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Agerestriction_v2],
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
 *    queryKey: [Key_UsersAdmin.Agerestrictions_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAgerestrictions_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<AgeRestrictionResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AgeRestrictionResponseV3>) => void
  ): UseQueryResult<AgeRestrictionResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetAgerestrictions_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAgerestrictions_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AgeRestrictionResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Agerestrictions_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchAgerestriction_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AgeRestrictionResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequestV3 }>, 'mutationKey'>,
    callback?: (data: AgeRestrictionResponseV3) => void
  ): UseMutationResult<AgeRestrictionResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: AgeRestrictionRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: AgeRestrictionRequestV3 }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchAgerestriction_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Agerestriction_v3],
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
 *    queryKey: [Key_UsersAdmin.UserSearchBulk_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUserSearchBulk_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: ListEmailAddressRequest },
    options?: Omit<UseQueryOptions<ListUserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListUserResponseV3>) => void
  ): UseQueryResult<ListUserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_FetchUserSearchBulk_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchUserSearchBulk_v3(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListUserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UserSearchBulk_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_CreateBan_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BanCreateRequest }>, 'mutationKey'>,
    callback?: (data: UserBanResponse) => void
  ): UseMutationResult<UserBanResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BanCreateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BanCreateRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createBan_ByUserId_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_v2],
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
 *    queryKey: [Key_UsersAdmin.Bans_ByUserId_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetBans_ByUserId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {activeOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<UserBanResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserBanResponseArray>) => void
  ): UseQueryResult<UserBanResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetBans_ByUserId_v2>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBans_ByUserId_v2(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserBanResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Bans_ByUserId_v2, input],
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
 *    queryKey: [Key_UsersAdmin.Bans_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetBans_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {activeOnly?: boolean | null, after?: string | null, before?: string | null, limit?: number} },
    options?: Omit<UseQueryOptions<GetUserBanV3Response, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserBanV3Response>) => void
  ): UseQueryResult<GetUserBanV3Response, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetBans_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBans_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserBanV3Response, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Bans_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_CreateBan_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BanCreateRequest }>, 'mutationKey'>,
    callback?: (data: UserBanResponseV3) => void
  ): UseMutationResult<UserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: BanCreateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: BanCreateRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createBan_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_v3],
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
 *    queryKey: [Key_UsersAdmin.UsersLinkhistories_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersLinkhistories_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {platformId: string | null, limit?: number, offset?: number, platformUserId?: string | null} },
    options?: Omit<UseQueryOptions<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<LinkingHistoryResponseWithPaginationV3>) => void
  ): UseQueryResult<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUsersLinkhistories_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersLinkhistories_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<LinkingHistoryResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersLinkhistories_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateRole_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: string[] }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByUserId_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateRole_ByUserId_ByNS_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: string[] }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByUserId_ByNS_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByNS_v2],
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
 *    queryKey: [Key_UsersAdmin.Users_ByRoleId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsers_ByRoleId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { roleId:string,  queryParams?: {after?: number, before?: number, limit?: number} },
    options?: Omit<UseQueryOptions<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUsersResponseWithPaginationV3>) => void
  ): UseQueryResult<GetUsersResponseWithPaginationV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUsers_ByRoleId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsers_ByRoleId_v3(input.roleId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUsersResponseWithPaginationV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Users_ByRoleId_v3, input],
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
 *    queryKey: [Key_UsersAdmin.Codes_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetCodes_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<VerificationCodeResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<VerificationCodeResponse>) => void
  ): UseQueryResult<VerificationCodeResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetCodes_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCodes_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<VerificationCodeResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Codes_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_DeleteRole_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: string[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: string[] }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRole_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchRole_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: NamespaceRoleRequest[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: NamespaceRoleRequest[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: NamespaceRoleRequest[] }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchRole_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_v3],
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
 *    queryKey: [Key_UsersAdmin.UserBulkPlatform_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUserBulkPlatform_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: UserIDsRequest },
    options?: Omit<UseQueryOptions<ListBulkUserPlatformsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListBulkUserPlatformsResponse>) => void
  ): UseQueryResult<ListBulkUserPlatformsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_FetchUserBulkPlatform_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchUserBulkPlatform_v3(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListBulkUserPlatformsResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UserBulkPlatform_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateEnable_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEnable_ByUserId_v2(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Enable_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchStatus_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpdateUserStatusRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpdateUserStatusRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UpdateUserStatusRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStatus_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Status_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateVerify_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateVerify_ByUserId_v3(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Verify_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateDisable_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: DisableUserRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: DisableUserRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: DisableUserRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDisable_ByUserId_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Disable_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchCountry_ByCountryCode_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Country, AxiosError<ApiError>, SdkSetConfigParam & { countryCode:string, data: CountryAgeRestrictionRequest }>, 'mutationKey'>,
    callback?: (data: Country) => void
  ): UseMutationResult<Country, AxiosError<ApiError>, SdkSetConfigParam & { countryCode:string, data: CountryAgeRestrictionRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { countryCode:string, data: CountryAgeRestrictionRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchCountry_ByCountryCode_v2(input.countryCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Country_ByCountryCode_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdatePassword_ByUserId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserPasswordUpdateRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePassword_ByUserId_v2(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Password_ByUserId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdatePassword_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateV3Request }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserPasswordUpdateV3Request }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserPasswordUpdateV3Request }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePassword_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Password_ByUserId_v3],
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
 *    queryKey: [Key_UsersAdmin.UsersPlatformsJustice_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUsersPlatformsJustice_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListUsersWithPlatformAccountsResponse>) => void
  ): UseQueryResult<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUsersPlatformsJustice_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersPlatformsJustice_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListUsersWithPlatformAccountsResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.UsersPlatformsJustice_v3, input],
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
 *    queryKey: [Key_UsersAdmin.Platforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatforms_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {after?: string | null, before?: string | null, limit?: number, platformId?: string | null, targetNamespace?: string | null} },
    options?: Omit<UseQueryOptions<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserLinkedPlatformsResponseV3>) => void
  ): UseQueryResult<UserLinkedPlatformsResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetPlatforms_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatforms_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserLinkedPlatformsResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Platforms_ByUserId_v3, input],
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
 *    queryKey: [Key_UsersAdmin.CountriesAgerestrictions_v2, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetCountriesAgerestrictions_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<CountryAgeRestrictionArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CountryAgeRestrictionArray>) => void
  ): UseQueryResult<CountryAgeRestrictionArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetCountriesAgerestrictions_v2>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCountriesAgerestrictions_v2())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CountryAgeRestrictionArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.CountriesAgerestrictions_v2, input],
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
 *    queryKey: [Key_UsersAdmin.AgerestrictionsCountries_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetAgerestrictionsCountries_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<CountryV3ResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CountryV3ResponseArray>) => void
  ): UseQueryResult<CountryV3ResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetAgerestrictionsCountries_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAgerestrictionsCountries_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CountryV3ResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.AgerestrictionsCountries_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateCodeVerify_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserVerificationRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserVerificationRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserVerificationRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCodeVerify_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.CodeVerify_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_DeleteInformation_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteInformation_ByUserId_v3(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Information_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_DeletePermission_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PermissionDeleteRequest[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PermissionDeleteRequest[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: PermissionDeleteRequest[] }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePermission_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_CreatePermission_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: Permissions }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: Permissions }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: Permissions }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPermission_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdatePermission_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: Permissions }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: Permissions }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: Permissions }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePermission_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchBan_ByUserId_ByBanId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, banId:string, data: BanUpdateRequest }>, 'mutationKey'>,
    callback?: (data: UserBanResponseV3) => void
  ): UseMutationResult<UserBanResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, banId:string, data: BanUpdateRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, banId:string, data: BanUpdateRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchBan_ByUserId_ByBanId_v3(input.userId, input.banId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Ban_ByUserId_ByBanId_v3],
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
 *    queryKey: [Key_UsersAdmin.BansSummary_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetBansSummary_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<GetUserBanSummaryV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserBanSummaryV3>) => void
  ): UseQueryResult<GetUserBanSummaryV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetBansSummary_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBansSummary_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserBanSummaryV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.BansSummary_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateCodeRequest_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SendVerificationCodeRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SendVerificationCodeRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SendVerificationCodeRequestV3 }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCodeRequest_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.CodeRequest_ByUserId_v3],
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
 *    queryKey: [Key_UsersAdmin.User_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_FetchUser_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string, data: PlatformUserIdRequest, queryParams?: {rawPID?: boolean | null, rawPUID?: boolean | null} },
    options?: Omit<UseQueryOptions<UserPlatforms, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserPlatforms>) => void
  ): UseQueryResult<UserPlatforms, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_FetchUser_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchUser_ByPlatformId_v3(input.platformId, input.data, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserPlatforms, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdatePlatformLink_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: LinkPlatformAccountRequest, queryParams?: {skipConflict?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: LinkPlatformAccountRequest, queryParams?: {skipConflict?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: LinkPlatformAccountRequest, queryParams?: {skipConflict?: boolean | null} }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePlatformLink_ByUserId_v3(input.userId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.PlatformLink_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_DeleteRole_ByUserId_ByRoleId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, roleId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteRole_ByUserId_ByRoleId_v3(input.userId, input.roleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateRole_ByUserId_ByRoleId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, roleId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, roleId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRole_ByUserId_ByRoleId_v3(input.userId, input.roleId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Role_ByUserId_ByRoleId_v3],
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
 *    queryKey: [Key_UsersAdmin.DeletionStatus_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetDeletionStatus_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserDeletionStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserDeletionStatusResponse>) => void
  ): UseQueryResult<UserDeletionStatusResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetDeletionStatus_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDeletionStatus_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserDeletionStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.DeletionStatus_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchDeletionStatus_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpdateUserDeletionStatusRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpdateUserDeletionStatusRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UpdateUserDeletionStatusRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchDeletionStatus_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.DeletionStatus_ByUserId_v3],
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
 *    queryKey: [Key_UsersAdmin.LoginsHistories_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetLoginsHistories_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {after?: number, before?: number, limit?: number} },
    options?: Omit<UseQueryOptions<LoginHistoriesResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<LoginHistoriesResponse>) => void
  ): UseQueryResult<LoginHistoriesResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetLoginsHistories_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLoginsHistories_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<LoginHistoriesResponse, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.LoginsHistories_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchTrustlyIdentity_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserIdentityUpdateRequestV3 }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserIdentityUpdateRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserIdentityUpdateRequestV3 }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchTrustlyIdentity_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.TrustlyIdentity_ByUserId_v3],
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
 *    queryKey: [Key_UsersAdmin.DistinctPlatforms_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetDistinctPlatforms_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<DistinctPlatformResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DistinctPlatformResponseV3>) => void
  ): UseQueryResult<DistinctPlatformResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetDistinctPlatforms_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDistinctPlatforms_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DistinctPlatformResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.DistinctPlatforms_ByUserId_v3, input],
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
 *    queryKey: [Key_UsersAdmin.PlatformsJustice_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformsJustice_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<GetUserMappingArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserMappingArray>) => void
  ): UseQueryResult<GetUserMappingArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetPlatformsJustice_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsJustice_ByUserId_v3(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserMappingArray, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformsJustice_ByUserId_v3, input],
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
 *    queryKey: [Key_UsersAdmin.PlatformsDistinct_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformsDistinct_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {status?: string | null} },
    options?: Omit<UseQueryOptions<DistinctPlatformResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DistinctPlatformResponseV3>) => void
  ): UseQueryResult<DistinctPlatformResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetPlatformsDistinct_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsDistinct_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DistinctPlatformResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformsDistinct_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_UpdateHeadlesCodeVerify_ByUserId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }>, 'mutationKey'>,
    callback?: (data: UserResponseV3) => void
  ): UseMutationResult<UserResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UpgradeHeadlessAccountWithVerificationCodeRequestV3 }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateHeadlesCodeVerify_ByUserId_v3(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.HeadlesCodeVerify_ByUserId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_DeletePlatform_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: UnlinkUserPlatformRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: UnlinkUserPlatformRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: UnlinkUserPlatformRequest }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePlatform_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Platform_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_PatchAgerestrictionCountry_ByCountryCode_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CountryV3Response, AxiosError<ApiError>, SdkSetConfigParam & { countryCode:string, data: CountryAgeRestrictionV3Request }>, 'mutationKey'>,
    callback?: (data: CountryV3Response) => void
  ): UseMutationResult<CountryV3Response, AxiosError<ApiError>, SdkSetConfigParam & { countryCode:string, data: CountryAgeRestrictionV3Request }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { countryCode:string, data: CountryAgeRestrictionV3Request }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchAgerestrictionCountry_ByCountryCode_v3(input.countryCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.AgerestrictionCountry_ByCountryCode_v3],
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
 *    queryKey: [Key_UsersAdmin.PlatformsLinkHistories_ByUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformsLinkHistories_ByUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams: {platformId: string | null} },
    options?: Omit<UseQueryOptions<UserPlatformLinkHistories, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserPlatformLinkHistories>) => void
  ): UseQueryResult<UserPlatformLinkHistories, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetPlatformsLinkHistories_ByUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformsLinkHistories_ByUserId_v3(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserPlatformLinkHistories, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformsLinkHistories_ByUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_DeleteAll_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteAll_ByUserId_ByPlatformId_v3(input.userId, input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.All_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_DeleteLink_ByUserId_ByPlatformId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: {platform_namespace?: string | null} }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLink_ByUserId_ByPlatformId_v2(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Link_ByUserId_ByPlatformId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_PostLink_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: {ticket: string | null} }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postLink_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Link_ByUserId_ByPlatformId_v3],
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
 *    queryKey: [Key_UsersAdmin.User_ByPlatformId_ByPlatformUserId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetUser_ByPlatformId_ByPlatformUserId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string, platformUserId:string },
    options?: Omit<UseQueryOptions<UserResponseV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserResponseV3>) => void
  ): UseQueryResult<UserResponseV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetUser_ByPlatformId_ByPlatformUserId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUser_ByPlatformId_ByPlatformUserId_v3(input.platformId, input.platformUserId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserResponseV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.User_ByPlatformId_ByPlatformUserId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_DeletePermission_ByUserId_ByResource_ByAction_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, resource:string, action:number }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, resource:string, action:number }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, resource:string, action:number }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deletePermission_ByUserId_ByResource_ByAction_v3(input.userId, input.resource, input.action))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.Permission_ByUserId_ByResource_ByAction_v3],
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
 *    queryKey: [Key_UsersAdmin.Metadata_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetMetadata_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, platformId:string,  queryParams?: {crossNamespace?: boolean | null} },
    options?: Omit<UseQueryOptions<UserPlatformMetadata, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserPlatformMetadata>) => void
  ): UseQueryResult<UserPlatformMetadata, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetMetadata_ByUserId_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMetadata_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserPlatformMetadata, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.Metadata_ByUserId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_PostLinkStatu_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenThirdPartyLinkStatusResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platformToken: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenThirdPartyLinkStatusResponse) => void
  ): UseMutationResult<TokenThirdPartyLinkStatusResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string, data: {platformToken: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string, data: {platformToken: string | null} }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postLinkStatu_ByUserId_ByPlatformId_v3(input.userId, input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.LinkStatu_ByUserId_ByPlatformId_v3],
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
 *    queryKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3, input]
 * }
 * ```
 */
export const useUsersAdminApi_GetPlatformJustice_ByUserId_ByTargetNamespace_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, targetNamespace:string },
    options?: Omit<UseQueryOptions<GetUserMappingV3, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetUserMappingV3>) => void
  ): UseQueryResult<GetUserMappingV3, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUsersAdminApi_GetPlatformJustice_ByUserId_ByTargetNamespace_v3>[1]
  ) => async () => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformJustice_ByUserId_ByTargetNamespace_v3(input.userId, input.targetNamespace))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetUserMappingV3, AxiosError<ApiError>>({
    queryKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUsersAdminApi_CreatePlatformJustice_ByUserId_ByTargetNamespace_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, targetNamespace:string }>, 'mutationKey'>,
    callback?: (data: CreateJusticeUserResponse) => void
  ): UseMutationResult<CreateJusticeUserResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, targetNamespace:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, targetNamespace:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPlatformJustice_ByUserId_ByTargetNamespace_v3(input.userId, input.targetNamespace))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.PlatformJustice_ByUserId_ByTargetNamespace_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_DeleteLinkHistory_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLinkHistory_ByUserId_ByPlatformId_v3(input.userId, input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.LinkHistory_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUsersAdminApi_DeleteLinkRestriction_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, platformId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, platformId:string }) => {
      const response = 
            (await UsersAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteLinkRestriction_ByUserId_ByPlatformId_v3(input.userId, input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UsersAdmin.LinkRestriction_ByUserId_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  
  