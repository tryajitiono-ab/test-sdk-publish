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
import { OAuth20Api } from "../OAuth20Api.js"

import { JwkSet } from '../../generated-definitions/JwkSet.js'
import { RevocationList } from '../../generated-definitions/RevocationList.js'
import { TokenIntrospectResponse } from '../../generated-definitions/TokenIntrospectResponse.js'
import { TokenResponse } from '../../generated-definitions/TokenResponse.js'
import { TokenResponseV3 } from '../../generated-definitions/TokenResponseV3.js'
import { TokenThirdPartyResponse } from '../../generated-definitions/TokenThirdPartyResponse.js'
import { TokenWithDeviceCookieResponseV3 } from '../../generated-definitions/TokenWithDeviceCookieResponseV3.js'


export enum Key_OAuth20 {
  OauthJwks_v3 = 'Iam.OAuth20.OauthJwks_v3',
OauthToken_v3 = 'Iam.OAuth20.OauthToken_v3',
OauthRevoke_v3 = 'Iam.OAuth20.OauthRevoke_v3',
OauthVerify_v3 = 'Iam.OAuth20.OauthVerify_v3',
OauthMfaCode_v3 = 'Iam.OAuth20.OauthMfaCode_v3',
OauthAuthorize_v3 = 'Iam.OAuth20.OauthAuthorize_v3',
OauthIntrospect_v3 = 'Iam.OAuth20.OauthIntrospect_v3',
OauthMfaVerify_v3 = 'Iam.OAuth20.OauthMfaVerify_v3',
OauthRevocationlist_v3 = 'Iam.OAuth20.OauthRevocationlist_v3',
OauthMfaFactorChange_v3 = 'Iam.OAuth20.OauthMfaFactorChange_v3',
OauthSimultaneousLogin_v3 = 'Iam.OAuth20.OauthSimultaneousLogin_v3',
TokenOauth_ByPlatformId_v3 = 'Iam.OAuth20.TokenOauth_ByPlatformId_v3',
AuthorizeOauth_ByPlatformId_v3 = 'Iam.OAuth20.AuthorizeOauth_ByPlatformId_v3',
PlatformTokenOauth_ByUserId_ByPlatformId_v3 = 'Iam.OAuth20.PlatformTokenOauth_ByUserId_ByPlatformId_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_OAuth20.OauthJwks_v3, input]
 * }
 * ```
 */
export const useOAuth20Api_GetOauthJwks_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<JwkSet, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<JwkSet>) => void
  ): UseQueryResult<JwkSet, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20Api_GetOauthJwks_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOauthJwks_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<JwkSet, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20.OauthJwks_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthToken_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenWithDeviceCookieResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials',additionalData?: string | null,client_id?: string | null,client_secret?: string | null,code?: string | null,code_verifier?: string | null,extendNamespace?: string | null,extend_exp?: boolean | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenWithDeviceCookieResponseV3) => void
  ): UseMutationResult<TokenWithDeviceCookieResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials',additionalData?: string | null,client_id?: string | null,client_secret?: string | null,code?: string | null,code_verifier?: string | null,extendNamespace?: string | null,extend_exp?: boolean | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials',additionalData?: string | null,client_id?: string | null,client_secret?: string | null,code?: string | null,code_verifier?: string | null,extendNamespace?: string | null,extend_exp?: boolean | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthToken_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthToken_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthRevoke_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {token: string | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthRevoke_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthRevoke_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthVerify_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponseV3) => void
  ): UseMutationResult<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {token: string | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthVerify_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthVerify_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthMfaCode_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {clientId: string | null,factor: string | null,mfaToken: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {clientId: string | null,factor: string | null,mfaToken: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {clientId: string | null,factor: string | null,mfaToken: string | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthMfaCode_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthMfaCode_v3],
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
 *    queryKey: [Key_OAuth20.OauthAuthorize_v3, input]
 * }
 * ```
 */
export const useOAuth20Api_GetOauthAuthorize_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {client_id: string | null, response_type: 'code', code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain', createHeadless?: boolean | null, oneTimeLinkCode?: string | null, redirect_uri?: string | null, scope?: string | null, state?: string | null, target_auth_page?: string | null, useRedirectUriAsLoginUrlWhenLocked?: boolean | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20Api_GetOauthAuthorize_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOauthAuthorize_v3(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20.OauthAuthorize_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthIntrospect_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenIntrospectResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenIntrospectResponse) => void
  ): UseMutationResult<TokenIntrospectResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {token: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {token: string | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthIntrospect_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthIntrospect_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthMfaVerify_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,factor: string | null,mfaToken: string | null,rememberDevice: boolean | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponseV3) => void
  ): UseMutationResult<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,factor: string | null,mfaToken: string | null,rememberDevice: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null,factor: string | null,mfaToken: string | null,rememberDevice: boolean | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthMfaVerify_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthMfaVerify_v3],
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
 *    queryKey: [Key_OAuth20.OauthRevocationlist_v3, input]
 * }
 * ```
 */
export const useOAuth20Api_GetOauthRevocationlist_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<RevocationList, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RevocationList>) => void
  ): UseQueryResult<RevocationList, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20Api_GetOauthRevocationlist_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getOauthRevocationlist_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RevocationList, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20.OauthRevocationlist_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthMfaFactorChange_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {factor: string | null,mfaToken: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {factor: string | null,mfaToken: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {factor: string | null,mfaToken: string | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthMfaFactorChange_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthMfaFactorChange_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20Api_PostOauthSimultaneousLogin_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {nativePlatform: 'epicgames' | 'steam',nativePlatformTicket: string | null,simultaneousPlatform?: string | null,simultaneousTicket?: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponseV3) => void
  ): UseMutationResult<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {nativePlatform: 'epicgames' | 'steam',nativePlatformTicket: string | null,simultaneousPlatform?: string | null,simultaneousTicket?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {nativePlatform: 'epicgames' | 'steam',nativePlatformTicket: string | null,simultaneousPlatform?: string | null,simultaneousTicket?: string | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthSimultaneousLogin_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.OauthSimultaneousLogin_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20Api_PostTokenOauth_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {additionalData?: string | null,client_id?: string | null,createHeadless?: boolean | null,device_id?: string | null,macAddress?: string | null,platform_token?: string | null,serviceLabel?: number,skipSetCookie?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponse) => void
  ): UseMutationResult<TokenResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {additionalData?: string | null,client_id?: string | null,createHeadless?: boolean | null,device_id?: string | null,macAddress?: string | null,platform_token?: string | null,serviceLabel?: number,skipSetCookie?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: {additionalData?: string | null,client_id?: string | null,createHeadless?: boolean | null,device_id?: string | null,macAddress?: string | null,platform_token?: string | null,serviceLabel?: number,skipSetCookie?: boolean | null} }) => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postTokenOauth_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20.TokenOauth_ByPlatformId_v3],
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
 *    queryKey: [Key_OAuth20.AuthorizeOauth_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useOAuth20Api_GetAuthorizeOauth_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string,  queryParams: {request_id: string | null, client_id?: string | null, redirect_uri?: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20Api_GetAuthorizeOauth_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAuthorizeOauth_ByPlatformId_v3(input.platformId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20.AuthorizeOauth_ByPlatformId_v3, input],
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
 *    queryKey: [Key_OAuth20.PlatformTokenOauth_ByUserId_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useOAuth20Api_GetPlatformTokenOauth_ByUserId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, platformId:string },
    options?: Omit<UseQueryOptions<TokenThirdPartyResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TokenThirdPartyResponse>) => void
  ): UseQueryResult<TokenThirdPartyResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20Api_GetPlatformTokenOauth_ByUserId_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlatformTokenOauth_ByUserId_ByPlatformId_v3(input.userId, input.platformId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TokenThirdPartyResponse, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20.PlatformTokenOauth_ByUserId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  