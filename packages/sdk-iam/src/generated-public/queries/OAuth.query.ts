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
import { OAuthApi } from "../OAuthApi.js"

import { JwkSet } from '../../generated-definitions/JwkSet.js'
import { RevocationList } from '../../generated-definitions/RevocationList.js'
import { TokenResponse } from '../../generated-definitions/TokenResponse.js'


export enum Key_OAuth {
  OauthJwks = 'Iam.OAuth.OauthJwks',
OauthToken = 'Iam.OAuth.OauthToken',
OauthVerify = 'Iam.OAuth.OauthVerify',
OauthAuthorize = 'Iam.OAuth.OauthAuthorize',
OauthRevokeUser = 'Iam.OAuth.OauthRevokeUser',
OauthRevokeToken = 'Iam.OAuth.OauthRevokeToken',
OauthRevocationlist = 'Iam.OAuth.OauthRevocationlist',
RevokeOauth_ByUserId = 'Iam.OAuth.RevokeOauth_ByUserId',
TokenOauth_ByPlatformId = 'Iam.OAuth.TokenOauth_ByPlatformId',

}

  

export const useOAuthApi_GetOauthJwks = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<JwkSet, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<JwkSet>) => void
  ): UseQueryResult<JwkSet, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuthApi_GetOauthJwks>[1]
  ) => async () => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOauthJwks())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<JwkSet, AxiosError<ApiError>>({
    queryKey: [Key_OAuth.OauthJwks, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOAuthApi_PostOauthToken = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token',code?: string | null,extend_exp?: boolean | null,namespace?: string | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponse) => void
  ): UseMutationResult<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token',code?: string | null,extend_exp?: boolean | null,namespace?: string | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token',code?: string | null,extend_exp?: boolean | null,namespace?: string | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null} }) => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthToken(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth.OauthToken],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuthApi_PostOauthVerify = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponse) => void
  ): UseMutationResult<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {token: string | null} }) => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthVerify(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth.OauthVerify],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuthApi_PostOauthAuthorize = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,redirect_uri: string | null,response_type: 'code' | 'token',login?: string | null,password?: string | null,scope?: string | null,state?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,redirect_uri: string | null,response_type: 'code' | 'token',login?: string | null,password?: string | null,scope?: string | null,state?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {client_id: string | null,redirect_uri: string | null,response_type: 'code' | 'token',login?: string | null,password?: string | null,scope?: string | null,state?: string | null} }) => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthAuthorize(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth.OauthAuthorize],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuthApi_PostOauthRevokeUser = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {userID: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {userID: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {userID: string | null} }) => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthRevokeUser(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth.OauthRevokeUser],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuthApi_PostOauthRevokeToken = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {token: string | null} }) => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthRevokeToken(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth.OauthRevokeToken],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuthApi_GetOauthRevocationlist = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<RevocationList, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RevocationList>) => void
  ): UseQueryResult<RevocationList, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuthApi_GetOauthRevocationlist>[1]
  ) => async () => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOauthRevocationlist())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RevocationList, AxiosError<ApiError>>({
    queryKey: [Key_OAuth.OauthRevocationlist, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOAuthApi_UpdateRevokeOauth_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRevokeOauth_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth.RevokeOauth_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuthApi_PostTokenOauth_ByPlatformId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {device_id?: string | null,macAddress?: string | null,platform_token?: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponse) => void
  ): UseMutationResult<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {device_id?: string | null,macAddress?: string | null,platform_token?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: {device_id?: string | null,macAddress?: string | null,platform_token?: string | null} }) => {
      const response = 
            (await OAuthApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postTokenOauth_ByPlatformId(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth.TokenOauth_ByPlatformId],
    mutationFn,
    ...options
  })
}
  
  
  