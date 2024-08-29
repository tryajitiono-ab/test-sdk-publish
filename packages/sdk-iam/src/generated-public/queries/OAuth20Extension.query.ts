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
import { OAuth20ExtensionApi } from "../OAuth20ExtensionApi.js"

import { CountryLocationResponse } from '../../generated-definitions/CountryLocationResponse.js'
import { OneTimeLinkingCodeResponse } from '../../generated-definitions/OneTimeLinkingCodeResponse.js'
import { OneTimeLinkingCodeValidationResponse } from '../../generated-definitions/OneTimeLinkingCodeValidationResponse.js'
import { PlatformTokenRefreshResponseV3 } from '../../generated-definitions/PlatformTokenRefreshResponseV3.js'
import { TargetTokenCodeResponse } from '../../generated-definitions/TargetTokenCodeResponse.js'
import { TokenResponseV3 } from '../../generated-definitions/TokenResponseV3.js'


export enum Key_OAuth20Extension {
  Logout_v3 = 'Iam.OAuth20Extension.Logout_v3',
Authenticate_v3 = 'Iam.OAuth20Extension.Authenticate_v3',
HeadlesToken_v3 = 'Iam.OAuth20Extension.HeadlesToken_v3',
TokenExchange_v3 = 'Iam.OAuth20Extension.TokenExchange_v3',
LocationCountry_v3 = 'Iam.OAuth20Extension.LocationCountry_v3',
LinkCodeRequest_v3 = 'Iam.OAuth20Extension.LinkCodeRequest_v3',
LinkCodeValidate_v3 = 'Iam.OAuth20Extension.LinkCodeValidate_v3',
LinkTokenExchange_v3 = 'Iam.OAuth20Extension.LinkTokenExchange_v3',
AuthenticateWithLink_v3 = 'Iam.OAuth20Extension.AuthenticateWithLink_v3',
TokenRequest_v3 = 'Iam.OAuth20Extension.TokenRequest_v3',
Authenticate_ByPlatformId_v3 = 'Iam.OAuth20Extension.Authenticate_ByPlatformId_v3',
TokenVerify_ByPlatformId_v3 = 'Iam.OAuth20Extension.TokenVerify_ByPlatformId_v3',

}

  

export const useOAuth20ExtensionApi_CreateLogout_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createLogout_v3())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.Logout_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostAuthenticate_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {password: string | null,request_id: string | null,user_name: string | null,client_id?: string | null,extend_exp?: boolean | null,redirect_uri?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: {password: string | null,request_id: string | null,user_name: string | null,client_id?: string | null,extend_exp?: boolean | null,redirect_uri?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {password: string | null,request_id: string | null,user_name: string | null,client_id?: string | null,extend_exp?: boolean | null,redirect_uri?: string | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postAuthenticate_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.Authenticate_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostHeadlesToken_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {linkingToken: string | null,additionalData?: string | null,extend_exp?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponseV3) => void
  ): UseMutationResult<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {linkingToken: string | null,additionalData?: string | null,extend_exp?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {linkingToken: string | null,additionalData?: string | null,extend_exp?: boolean | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postHeadlesToken_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.HeadlesToken_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostTokenExchange_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,additionalData?: string | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponseV3) => void
  ): UseMutationResult<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {code: string | null,additionalData?: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {code: string | null,additionalData?: string | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postTokenExchange_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.TokenExchange_v3],
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
 *    queryKey: [Key_OAuth20Extension.LocationCountry_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_GetLocationCountry_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<CountryLocationResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CountryLocationResponse>) => void
  ): UseQueryResult<CountryLocationResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20ExtensionApi_GetLocationCountry_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLocationCountry_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CountryLocationResponse, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20Extension.LocationCountry_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostLinkCodeRequest_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OneTimeLinkingCodeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {platformId: string | null} }>, 'mutationKey'>,
    callback?: (data: OneTimeLinkingCodeResponse) => void
  ): UseMutationResult<OneTimeLinkingCodeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {platformId: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {platformId: string | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postLinkCodeRequest_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.LinkCodeRequest_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostLinkCodeValidate_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OneTimeLinkingCodeValidationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {oneTimeLinkCode: string | null} }>, 'mutationKey'>,
    callback?: (data: OneTimeLinkingCodeValidationResponse) => void
  ): UseMutationResult<OneTimeLinkingCodeValidationResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {oneTimeLinkCode: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {oneTimeLinkCode: string | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postLinkCodeValidate_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.LinkCodeValidate_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostLinkTokenExchange_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,oneTimeLinkCode: string | null,additionalData?: string | null,isTransient?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponseV3) => void
  ): UseMutationResult<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,oneTimeLinkCode: string | null,additionalData?: string | null,isTransient?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {client_id: string | null,oneTimeLinkCode: string | null,additionalData?: string | null,isTransient?: boolean | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postLinkTokenExchange_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.LinkTokenExchange_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostAuthenticateWithLink_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,linkingToken: string | null,password: string | null,username: string | null,extend_exp?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: TokenResponseV3) => void
  ): UseMutationResult<TokenResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null,linkingToken: string | null,password: string | null,username: string | null,extend_exp?: boolean | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {client_id: string | null,linkingToken: string | null,password: string | null,username: string | null,extend_exp?: boolean | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postAuthenticateWithLink_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.AuthenticateWithLink_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostTokenRequest_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TargetTokenCodeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }>, 'mutationKey'>,
    callback?: (data: TargetTokenCodeResponse) => void
  ): UseMutationResult<TargetTokenCodeResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: {client_id: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: {client_id: string | null}, queryParams?: {code_challenge?: string | null, code_challenge_method?: 'S256' | 'plain'} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postTokenRequest_v3(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.TokenRequest_v3],
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
 *    queryKey: [Key_OAuth20Extension.Authenticate_ByPlatformId_v3, input]
 * }
 * ```
 */
export const useOAuth20ExtensionApi_GetAuthenticate_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { platformId:string,  queryParams: {state: string | null, code?: string | null, error?: string | null, assoc_handle?: string | null, claimed_id?: string | null, identity?: string | null, mode?: string | null, ns?: string | null, op_endpoint?: string | null, response_nonce?: string | null, return_to?: string | null, sig?: string | null, signed?: string | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useOAuth20ExtensionApi_GetAuthenticate_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAuthenticate_ByPlatformId_v3(input.platformId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_OAuth20Extension.Authenticate_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useOAuth20ExtensionApi_PostTokenVerify_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlatformTokenRefreshResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {platform_token: string | null} }>, 'mutationKey'>,
    callback?: (data: PlatformTokenRefreshResponseV3) => void
  ): UseMutationResult<PlatformTokenRefreshResponseV3, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string, data: {platform_token: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string, data: {platform_token: string | null} }) => {
      const response = 
            (await OAuth20ExtensionApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postTokenVerify_ByPlatformId_v3(input.platformId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_OAuth20Extension.TokenVerify_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  
  