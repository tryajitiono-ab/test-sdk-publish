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
import { UserProfileApi } from "../UserProfileApi.js"

import { UserProfileBulkRequest } from '../../generated-definitions/UserProfileBulkRequest.js'
import { UserProfileCreate } from '../../generated-definitions/UserProfileCreate.js'
import { UserProfileInfo } from '../../generated-definitions/UserProfileInfo.js'
import { UserProfilePrivateCreate } from '../../generated-definitions/UserProfilePrivateCreate.js'
import { UserProfilePrivateInfo } from '../../generated-definitions/UserProfilePrivateInfo.js'
import { UserProfilePublicInfo } from '../../generated-definitions/UserProfilePublicInfo.js'
import { UserProfilePublicInfoArray } from '../../generated-definitions/UserProfilePublicInfoArray.js'
import { UserProfileStatusUpdate } from '../../generated-definitions/UserProfileStatusUpdate.js'
import { UserProfileUpdate } from '../../generated-definitions/UserProfileUpdate.js'
import { UserZipCode } from '../../generated-definitions/UserZipCode.js'
import { UserZipCodeUpdate } from '../../generated-definitions/UserZipCodeUpdate.js'


export enum Key_UserProfile {
  ProfilesPublic = 'Basic.UserProfile.ProfilesPublic',
ProfilePublic = 'Basic.UserProfile.ProfilePublic',
UsersMeProfiles = 'Basic.UserProfile.UsersMeProfiles',
UserMeProfile = 'Basic.UserProfile.UserMeProfile',
Profiles_ByUserId = 'Basic.UserProfile.Profiles_ByUserId',
Profile_ByUserId = 'Basic.UserProfile.Profile_ByUserId',
UsersMeProfilesZipCode = 'Basic.UserProfile.UsersMeProfilesZipCode',
UserMeProfileZipCode = 'Basic.UserProfile.UserMeProfileZipCode',
ProfilesPublicByPublicId = 'Basic.UserProfile.ProfilesPublicByPublicId',
ProfilesPublic_ByUserId = 'Basic.UserProfile.ProfilesPublic_ByUserId',
ProfileStatus_ByUserId = 'Basic.UserProfile.ProfileStatus_ByUserId',
ProfilesCustomAttributes_ByUserId = 'Basic.UserProfile.ProfilesCustomAttributes_ByUserId',
ProfileCustomAttribute_ByUserId = 'Basic.UserProfile.ProfileCustomAttribute_ByUserId',
UsersMeProfilesPrivateCustomAttributes = 'Basic.UserProfile.UsersMeProfilesPrivateCustomAttributes',
UserMeProfilePrivateCustomAttribute = 'Basic.UserProfile.UserMeProfilePrivateCustomAttribute',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UserProfile.ProfilesPublic, input]
 * }
 * ```
 */
export const useUserProfileApi_GetProfilesPublic = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {userIds: string | null} },
    options?: Omit<UseQueryOptions<UserProfilePublicInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserProfilePublicInfoArray>) => void
  ): UseQueryResult<UserProfilePublicInfoArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetProfilesPublic>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfilesPublic(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserProfilePublicInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.ProfilesPublic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserProfileApi_CreateProfilePublic = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserProfilePublicInfoArray, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfileBulkRequest }>, 'mutationKey'>,
    callback?: (data: UserProfilePublicInfoArray) => void
  ): UseMutationResult<UserProfilePublicInfoArray, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfileBulkRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserProfileBulkRequest }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProfilePublic(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.ProfilePublic],
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
 *    queryKey: [Key_UserProfile.UsersMeProfiles, input]
 * }
 * ```
 */
export const useUserProfileApi_GetUsersMeProfiles = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<UserProfilePrivateInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserProfilePrivateInfo>) => void
  ): UseQueryResult<UserProfilePrivateInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetUsersMeProfiles>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeProfiles())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserProfilePrivateInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.UsersMeProfiles, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserProfileApi_CreateUserMeProfile = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfilePrivateCreate }>, 'mutationKey'>,
    callback?: (data: UserProfilePrivateInfo) => void
  ): UseMutationResult<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfilePrivateCreate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserProfilePrivateCreate }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUserMeProfile(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.UserMeProfile],
    mutationFn,
    ...options
  })
}
  
  

export const useUserProfileApi_UpdateUserMeProfile = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfileUpdate }>, 'mutationKey'>,
    callback?: (data: UserProfilePrivateInfo) => void
  ): UseMutationResult<UserProfilePrivateInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: UserProfileUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserProfileUpdate }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUserMeProfile(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.UserMeProfile],
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
 *    queryKey: [Key_UserProfile.Profiles_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileApi_GetProfiles_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserProfileInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserProfileInfo>) => void
  ): UseQueryResult<UserProfileInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetProfiles_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfiles_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserProfileInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.Profiles_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserProfileApi_CreateProfile_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserProfileInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserProfileCreate }>, 'mutationKey'>,
    callback?: (data: UserProfileInfo) => void
  ): UseMutationResult<UserProfileInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserProfileCreate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserProfileCreate }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProfile_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.Profile_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useUserProfileApi_UpdateProfile_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserProfileInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserProfileUpdate }>, 'mutationKey'>,
    callback?: (data: UserProfileInfo) => void
  ): UseMutationResult<UserProfileInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserProfileUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserProfileUpdate }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateProfile_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.Profile_ByUserId],
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
 *    queryKey: [Key_UserProfile.UsersMeProfilesZipCode, input]
 * }
 * ```
 */
export const useUserProfileApi_GetUsersMeProfilesZipCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<UserZipCode, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserZipCode>) => void
  ): UseQueryResult<UserZipCode, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetUsersMeProfilesZipCode>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeProfilesZipCode())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserZipCode, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.UsersMeProfilesZipCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserProfileApi_PatchUserMeProfileZipCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserZipCode, AxiosError<ApiError>, SdkSetConfigParam & { data: UserZipCodeUpdate }>, 'mutationKey'>,
    callback?: (data: UserZipCode) => void
  ): UseMutationResult<UserZipCode, AxiosError<ApiError>, SdkSetConfigParam & { data: UserZipCodeUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UserZipCodeUpdate }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUserMeProfileZipCode(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.UserMeProfileZipCode],
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
 *    queryKey: [Key_UserProfile.ProfilesPublicByPublicId, input]
 * }
 * ```
 */
export const useUserProfileApi_GetProfilesPublicByPublicId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {publicId: string | null} },
    options?: Omit<UseQueryOptions<UserProfilePublicInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserProfilePublicInfo>) => void
  ): UseQueryResult<UserProfilePublicInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetProfilesPublicByPublicId>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfilesPublicByPublicId(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserProfilePublicInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.ProfilesPublicByPublicId, input],
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
 *    queryKey: [Key_UserProfile.ProfilesPublic_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileApi_GetProfilesPublic_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<UserProfilePublicInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UserProfilePublicInfo>) => void
  ): UseQueryResult<UserProfilePublicInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetProfilesPublic_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfilesPublic_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UserProfilePublicInfo, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.ProfilesPublic_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserProfileApi_PatchProfileStatus_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UserProfileInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserProfileStatusUpdate }>, 'mutationKey'>,
    callback?: (data: UserProfileInfo) => void
  ): UseMutationResult<UserProfileInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: UserProfileStatusUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: UserProfileStatusUpdate }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchProfileStatus_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.ProfileStatus_ByUserId],
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
 *    queryKey: [Key_UserProfile.ProfilesCustomAttributes_ByUserId, input]
 * }
 * ```
 */
export const useUserProfileApi_GetProfilesCustomAttributes_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetProfilesCustomAttributes_ByUserId>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getProfilesCustomAttributes_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.ProfilesCustomAttributes_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserProfileApi_UpdateProfileCustomAttribute_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: any }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: any }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: any }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateProfileCustomAttribute_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.ProfileCustomAttribute_ByUserId],
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
 *    queryKey: [Key_UserProfile.UsersMeProfilesPrivateCustomAttributes, input]
 * }
 * ```
 */
export const useUserProfileApi_GetUsersMeProfilesPrivateCustomAttributes = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUserProfileApi_GetUsersMeProfilesPrivateCustomAttributes>[1]
  ) => async () => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUsersMeProfilesPrivateCustomAttributes())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UserProfile.UsersMeProfilesPrivateCustomAttributes, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUserProfileApi_UpdateUserMeProfilePrivateCustomAttribute = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: any }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: any }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: any }) => {
      const response = 
            (await UserProfileApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUserMeProfilePrivateCustomAttribute(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserProfile.UserMeProfilePrivateCustomAttribute],
    mutationFn,
    ...options
  })
}
  
  
  