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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { OAuth20V4Api } from "../OAuth20V4Api.js"

import { LoginQueueTicketResponse } from '../../generated-definitions/LoginQueueTicketResponse.js'


export enum Key_OAuth20V4 {
  OauthToken_v4 = 'Iam.OAuth20V4.OauthToken_v4',
OauthMfaVerify_v4 = 'Iam.OAuth20V4.OauthMfaVerify_v4',
OauthHeadlesToken_v4 = 'Iam.OAuth20V4.OauthHeadlesToken_v4',
OauthTokenExchange_v4 = 'Iam.OAuth20V4.OauthTokenExchange_v4',
OauthSimultaneousLogin_v4 = 'Iam.OAuth20V4.OauthSimultaneousLogin_v4',
OauthAuthenticateWithLink_v4 = 'Iam.OAuth20V4.OauthAuthenticateWithLink_v4',
TokenOauth_ByPlatformId_v4 = 'Iam.OAuth20V4.TokenOauth_ByPlatformId_v4',

}

  

export const useOAuth20V4Api_PostOauthToken_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials' | 'urn:ietf:params:oauth:grant-type:login_queue_ticket',additionalData?: string | null,client_id?: string | null,client_secret?: string | null,code?: string | null,code_verifier?: string | null,extendNamespace?: string | null,extend_exp?: boolean | null,login_queue_ticket?: string | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }>, 'mutationKey'>,
    callback?: (data: LoginQueueTicketResponse) => void
  ): UseMutationResult<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials' | 'urn:ietf:params:oauth:grant-type:login_queue_ticket',additionalData?: string | null,client_id?: string | null,client_secret?: string | null,code?: string | null,code_verifier?: string | null,extendNamespace?: string | null,extend_exp?: boolean | null,login_queue_ticket?: string | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token' | 'urn:ietf:params:oauth:grant-type:extend_client_credentials' | 'urn:ietf:params:oauth:grant-type:login_queue_ticket',additionalData?: string | null,client_id?: string | null,client_secret?: string | null,code?: string | null,code_verifier?: string | null,extendNamespace?: string | null,extend_exp?: boolean | null,login_queue_ticket?: string | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }) => {
      const response = 
            (await OAuth20V4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthToken_v4(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20V4.OauthToken_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20V4Api_PostOauthMfaVerify_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,factor: string | null,mfaToken: string | null,rememberDevice: boolean | null} }>, 'mutationKey'>,
    callback?: (data: LoginQueueTicketResponse) => void
  ): UseMutationResult<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,factor: string | null,mfaToken: string | null,rememberDevice: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null,factor: string | null,mfaToken: string | null,rememberDevice: boolean | null} }) => {
      const response = 
            (await OAuth20V4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthMfaVerify_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20V4.OauthMfaVerify_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20V4Api_PostOauthHeadlesToken_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {linkingToken: string | null,additionalData?: string | null,extend_exp?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: LoginQueueTicketResponse) => void
  ): UseMutationResult<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {linkingToken: string | null,additionalData?: string | null,extend_exp?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {linkingToken: string | null,additionalData?: string | null,extend_exp?: boolean | null} }) => {
      const response = 
            (await OAuth20V4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthHeadlesToken_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20V4.OauthHeadlesToken_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20V4Api_PostOauthTokenExchange_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,additionalData?: string | null} }>, 'mutationKey'>,
    callback?: (data: LoginQueueTicketResponse) => void
  ): UseMutationResult<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,additionalData?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null,additionalData?: string | null} }) => {
      const response = 
            (await OAuth20V4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthTokenExchange_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20V4.OauthTokenExchange_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20V4Api_PostOauthSimultaneousLogin_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {nativePlatform: 'epicgames' | 'steam',nativePlatformTicket: string | null,simultaneousPlatform?: string | null,simultaneousTicket?: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }>, 'mutationKey'>,
    callback?: (data: LoginQueueTicketResponse) => void
  ): UseMutationResult<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {nativePlatform: 'epicgames' | 'steam',nativePlatformTicket: string | null,simultaneousPlatform?: string | null,simultaneousTicket?: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {nativePlatform: 'epicgames' | 'steam',nativePlatformTicket: string | null,simultaneousPlatform?: string | null,simultaneousTicket?: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }) => {
      const response = 
            (await OAuth20V4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthSimultaneousLogin_v4(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20V4.OauthSimultaneousLogin_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20V4Api_PostOauthAuthenticateWithLink_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,linkingToken: string | null,password: string | null,username: string | null,extend_exp?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: LoginQueueTicketResponse) => void
  ): UseMutationResult<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,linkingToken: string | null,password: string | null,username: string | null,extend_exp?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {client_id: string | null,linkingToken: string | null,password: string | null,username: string | null,extend_exp?: boolean | null} }) => {
      const response = 
            (await OAuth20V4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postOauthAuthenticateWithLink_v4(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20V4.OauthAuthenticateWithLink_v4],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20V4Api_PostTokenOauth_ByPlatformId_v4 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {additionalData?: string | null,client_id?: string | null,createHeadless?: boolean | null,device_id?: string | null,macAddress?: string | null,platform_token?: string | null,serviceLabel?: number,skipSetCookie?: boolean | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }>, 'mutationKey'>,
    callback?: (data: LoginQueueTicketResponse) => void
  ): UseMutationResult<LoginQueueTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {additionalData?: string | null,client_id?: string | null,createHeadless?: boolean | null,device_id?: string | null,macAddress?: string | null,platform_token?: string | null,serviceLabel?: number,skipSetCookie?: boolean | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: {additionalData?: string | null,client_id?: string | null,createHeadless?: boolean | null,device_id?: string | null,macAddress?: string | null,platform_token?: string | null,serviceLabel?: number,skipSetCookie?: boolean | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }) => {
      const response = 
            (await OAuth20V4Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postTokenOauth_ByPlatformId_v4(input.platformId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20V4.TokenOauth_ByPlatformId_v4],
    mutationFn,
    ...options
  })
}
  
  
  