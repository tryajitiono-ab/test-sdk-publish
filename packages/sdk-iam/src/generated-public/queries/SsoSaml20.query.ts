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
import { SsoSaml20Api } from "../SsoSaml20Api.js"




export enum Key_SsoSaml20 {
  AuthenticateSamlSso_ByPlatformId_v3 = 'Iam.SsoSaml20.AuthenticateSamlSso_ByPlatformId_v3',

}

  

export const useSsoSaml20Api_PostAuthenticateSamlSso_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string,  queryParams: {state: string | null, code?: string | null, error?: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { platformId:string,  queryParams: {state: string | null, code?: string | null, error?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { platformId:string,  queryParams: {state: string | null, code?: string | null, error?: string | null} }) => {
      const response = 
            (await SsoSaml20Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                postAuthenticateSamlSso_ByPlatformId_v3(input.platformId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SsoSaml20.AuthenticateSamlSso_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  
  