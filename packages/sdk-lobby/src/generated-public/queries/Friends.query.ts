/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, ApiError, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult, useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { FriendsApi } from '../FriendsApi.js'

import { BulkFriendsRequest } from '../../generated-definitions/BulkFriendsRequest.js'
import { BulkFriendsResponse } from '../../generated-definitions/BulkFriendsResponse.js'
import { GetUserFriendsResponseArray } from '../../generated-definitions/GetUserFriendsResponseArray.js'
import { GetUserIncomingFriendsResponseArray } from '../../generated-definitions/GetUserIncomingFriendsResponseArray.js'
import { GetUserOutgoingFriendsResponseArray } from '../../generated-definitions/GetUserOutgoingFriendsResponseArray.js'
import { ListBulkUserPlatformsResponse } from '../../generated-definitions/ListBulkUserPlatformsResponse.js'
import { LoadIncomingFriendsWithTimeResponseArray } from '../../generated-definitions/LoadIncomingFriendsWithTimeResponseArray.js'
import { LoadOutgoingFriendsWithTimeResponseArray } from '../../generated-definitions/LoadOutgoingFriendsWithTimeResponseArray.js'
import { NativeFriendRequest } from '../../generated-definitions/NativeFriendRequest.js'
import { NativeFriendSyncResponseArray } from '../../generated-definitions/NativeFriendSyncResponseArray.js'
import { UserAcceptFriendRequest } from '../../generated-definitions/UserAcceptFriendRequest.js'
import { UserCancelFriendRequest } from '../../generated-definitions/UserCancelFriendRequest.js'
import { UserGetFriendshipStatusResponse } from '../../generated-definitions/UserGetFriendshipStatusResponse.js'
import { UserRejectFriendRequest } from '../../generated-definitions/UserRejectFriendRequest.js'
import { UserRequestFriendRequest } from '../../generated-definitions/UserRequestFriendRequest.js'
import { UserUnfriendRequest } from '../../generated-definitions/UserUnfriendRequest.js'

export enum Key_Friends {
  FriendsMe = 'Lobby.Friends.FriendsMe',
  FriendSyncMe = 'Lobby.Friends.FriendSyncMe',
  FriendMeRequest = 'Lobby.Friends.FriendMeRequest',
  FriendsMeIncoming = 'Lobby.Friends.FriendsMeIncoming',
  FriendsMeOutgoing = 'Lobby.Friends.FriendsMeOutgoing',
  FriendMeUnfriend = 'Lobby.Friends.FriendMeUnfriend',
  FriendsMePlatforms = 'Lobby.Friends.FriendsMePlatforms',
  FriendsMeIncomingTime = 'Lobby.Friends.FriendsMeIncomingTime',
  FriendsMeOutgoingTime = 'Lobby.Friends.FriendsMeOutgoingTime',
  FriendMeRequestAccept = 'Lobby.Friends.FriendMeRequestAccept',
  FriendMeRequestCancel = 'Lobby.Friends.FriendMeRequestCancel',
  FriendMeRequestReject = 'Lobby.Friends.FriendMeRequestReject',
  FriendMeStatu_ByFriendId = 'Lobby.Friends.FriendMeStatu_ByFriendId',
  AddBulkFriend_ByUserId = 'Lobby.Friends.AddBulkFriend_ByUserId',
  DeleteBulkFriend_ByUserId = 'Lobby.Friends.DeleteBulkFriend_ByUserId'
}

/**
 * Get list of friends in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendsMe, input]
 * }
 * ```
 */
export const useFriendsApi_GetFriendsMe = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetUserFriendsResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserFriendsResponseArray>) => void
): UseQueryResult<GetUserFriendsResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsApi_GetFriendsMe>[1]) => async () => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendsMe(input.queryParams)
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserFriendsResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Friends.FriendsMe, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Sync friends using server to server call to native first party server. Supported platforms: steam: The platform_token’s value is the binary ticket returned by Steam. If this ticket was generated by Steam GetAuthTicketForWebApi with version &gt;= 1.57, then platform token should use this style: {identity}:{ticket} the {identity} was the parameter to call GetAuthTicketForWebApi when the ticket was created. Note: Do not contain : in this {identity} ps4: The platform_token’s value is the authorization code returned by Sony OAuth. ps5: The platform_token’s value is the authorization code returned by Sony OAuth. pspc: The platform_token’s value is the authorization code returned by Sony OAuth.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendSyncMe, input]
 * }
 * ```
 */
export const useFriendsApi_PatchFriendSyncMe = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<NativeFriendSyncResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: NativeFriendRequest[] }>,
    'mutationKey'
  >,
  callback?: (data: NativeFriendSyncResponseArray) => void
): UseMutationResult<NativeFriendSyncResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: NativeFriendRequest[] }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: NativeFriendRequest[] }) => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).patchFriendSyncMe(input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.FriendSyncMe],
    mutationFn,
    ...options
  })
}

/**
 * Client should provide either friendID or friendPublicID. If both are provided, friendID will be chosen to be used. This endpoint will only send a pending invite that can be either rejected/accepted
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendMeRequest, input]
 * }
 * ```
 */
export const useFriendsApi_CreateFriendMeRequest = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserRequestFriendRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserRequestFriendRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserRequestFriendRequest }) => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createFriendMeRequest(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.FriendMeRequest],
    mutationFn,
    ...options
  })
}

/**
 * Get list of incoming friends in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendsMeIncoming, input]
 * }
 * ```
 */
export const useFriendsApi_GetFriendsMeIncoming = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetUserIncomingFriendsResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserIncomingFriendsResponseArray>) => void
): UseQueryResult<GetUserIncomingFriendsResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsApi_GetFriendsMeIncoming>[1]) => async () => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendsMeIncoming(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserIncomingFriendsResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Friends.FriendsMeIncoming, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get list of outgoing friends in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendsMeOutgoing, input]
 * }
 * ```
 */
export const useFriendsApi_GetFriendsMeOutgoing = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<GetUserOutgoingFriendsResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<GetUserOutgoingFriendsResponseArray>) => void
): UseQueryResult<GetUserOutgoingFriendsResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsApi_GetFriendsMeOutgoing>[1]) => async () => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendsMeOutgoing(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<GetUserOutgoingFriendsResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Friends.FriendsMeOutgoing, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * User unfriend a friend.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendMeUnfriend, input]
 * }
 * ```
 */
export const useFriendsApi_CreateFriendMeUnfriend = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserUnfriendRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserUnfriendRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserUnfriendRequest }) => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createFriendMeUnfriend(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.FriendMeUnfriend],
    mutationFn,
    ...options
  })
}

/**
 * Get list of friends with platform data in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendsMePlatforms, input]
 * }
 * ```
 */
export const useFriendsApi_GetFriendsMePlatforms = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<ListBulkUserPlatformsResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<ListBulkUserPlatformsResponse>) => void
): UseQueryResult<ListBulkUserPlatformsResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsApi_GetFriendsMePlatforms>[1]) => async () => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendsMePlatforms(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<ListBulkUserPlatformsResponse, AxiosError<ApiError>>({
    queryKey: [Key_Friends.FriendsMePlatforms, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get list of incoming friends with requested time info in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendsMeIncomingTime, input]
 * }
 * ```
 */
export const useFriendsApi_GetFriendsMeIncomingTime = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<LoadIncomingFriendsWithTimeResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoadIncomingFriendsWithTimeResponseArray>) => void
): UseQueryResult<LoadIncomingFriendsWithTimeResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsApi_GetFriendsMeIncomingTime>[1]) => async () => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendsMeIncomingTime(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<LoadIncomingFriendsWithTimeResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Friends.FriendsMeIncomingTime, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Get list of outgoing friends with requested time info in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendsMeOutgoingTime, input]
 * }
 * ```
 */
export const useFriendsApi_GetFriendsMeOutgoingTime = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { queryParams?: { limit?: number; offset?: number } },
  options?: Omit<UseQueryOptions<LoadOutgoingFriendsWithTimeResponseArray, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<LoadOutgoingFriendsWithTimeResponseArray>) => void
): UseQueryResult<LoadOutgoingFriendsWithTimeResponseArray, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsApi_GetFriendsMeOutgoingTime>[1]) => async () => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendsMeOutgoingTime(
      input.queryParams
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<LoadOutgoingFriendsWithTimeResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Friends.FriendsMeOutgoingTime, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * User accept friend.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendMeRequestAccept, input]
 * }
 * ```
 */
export const useFriendsApi_CreateFriendMeRequestAccept = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserAcceptFriendRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserAcceptFriendRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserAcceptFriendRequest }) => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createFriendMeRequestAccept(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.FriendMeRequestAccept],
    mutationFn,
    ...options
  })
}

/**
 * User cancel a friend request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendMeRequestCancel, input]
 * }
 * ```
 */
export const useFriendsApi_CreateFriendMeRequestCancel = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCancelFriendRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserCancelFriendRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserCancelFriendRequest }) => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createFriendMeRequestCancel(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.FriendMeRequestCancel],
    mutationFn,
    ...options
  })
}

/**
 * User reject a friend request.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendMeRequestReject, input]
 * }
 * ```
 */
export const useFriendsApi_CreateFriendMeRequestReject = (
  sdk: AccelByteSDK,
  options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserRejectFriendRequest }>, 'mutationKey'>,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UserRejectFriendRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { data: UserRejectFriendRequest }) => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createFriendMeRequestReject(
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.FriendMeRequestReject],
    mutationFn,
    ...options
  })
}

/**
 * User get friendship status. Code: 0 - Message: &#34;not friend&#34; Code: 1 - Message: &#34;outgoing&#34; Code: 2 - Message: &#34;incoming&#34; Code: 3 - Message: &#34;friend&#34;
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.FriendMeStatu_ByFriendId, input]
 * }
 * ```
 */
export const useFriendsApi_GetFriendMeStatu_ByFriendId = (
  sdk: AccelByteSDK,
  input: SdkSetConfigParam & { friendId: string },
  options?: Omit<UseQueryOptions<UserGetFriendshipStatusResponse, AxiosError<ApiError>>, 'queryKey'>,
  callback?: (data: AxiosResponse<UserGetFriendshipStatusResponse>) => void
): UseQueryResult<UserGetFriendshipStatusResponse, AxiosError<ApiError>> => {
  const queryFn = (sdk: AccelByteSDK, input: Parameters<typeof useFriendsApi_GetFriendMeStatu_ByFriendId>[1]) => async () => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).getFriendMeStatu_ByFriendId(
      input.friendId
    )
    callback && callback(response)
    return response.data
  }

  return useQuery<UserGetFriendshipStatusResponse, AxiosError<ApiError>>({
    queryKey: [Key_Friends.FriendMeStatu_ByFriendId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}

/**
 * Friends request in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.AddBulkFriend_ByUserId, input]
 * }
 * ```
 */
export const useFriendsApi_CreateAddBulkFriend_ByUserId = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BulkFriendsRequest }>,
    'mutationKey'
  >,
  callback?: (data: unknown) => void
): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BulkFriendsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BulkFriendsRequest }) => {
    const response = await FriendsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).createAddBulkFriend_ByUserId(
      input.userId,
      input.data
    )
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.AddBulkFriend_ByUserId],
    mutationFn,
    ...options
  })
}

/**
 * Friends request in a namespace.
 *
 * #### Default Query Options
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Friends.DeleteBulkFriend_ByUserId, input]
 * }
 * ```
 */
export const useFriendsApi_CreateDeleteBulkFriend_ByUserId = (
  sdk: AccelByteSDK,
  options?: Omit<
    UseMutationOptions<BulkFriendsResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BulkFriendsRequest }>,
    'mutationKey'
  >,
  callback?: (data: BulkFriendsResponse) => void
): UseMutationResult<BulkFriendsResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId: string; data: BulkFriendsRequest }> => {
  const mutationFn = async (input: SdkSetConfigParam & { userId: string; data: BulkFriendsRequest }) => {
    const response = await FriendsApi(sdk, {
      coreConfig: input.coreConfig,
      axiosConfig: input.axiosConfig
    }).createDeleteBulkFriend_ByUserId(input.userId, input.data)
    callback && callback(response.data)
    return response.data
  }

  return useMutation({
    mutationKey: [Key_Friends.DeleteBulkFriend_ByUserId],
    mutationFn,
    ...options
  })
}
