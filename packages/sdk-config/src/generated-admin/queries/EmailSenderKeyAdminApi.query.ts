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
import { EmailSenderApiKeyAdminApi } from "../EmailSenderApiKeyAdminApi.js"

import { CreateEmailSenderApiKeyRequest } from '../../generated-definitions/CreateEmailSenderApiKeyRequest.js'
import { EmailSenderApiKeyResponse } from '../../generated-definitions/EmailSenderApiKeyResponse.js'
import { EmailSenderApiKeyResponseArray } from '../../generated-definitions/EmailSenderApiKeyResponseArray.js'
import { LinkedEmailSendersResponse } from '../../generated-definitions/LinkedEmailSendersResponse.js'


export enum Key_EmailSenderKeyAdminApi {
  EmailsenderApikeysAccounts = 'Config.EmailSenderKeyAdminApi.EmailsenderApikeysAccounts',
EmailsenderApikeyAccount = 'Config.EmailSenderKeyAdminApi.EmailsenderApikeyAccount',
EmailsenderApikeyAccount_ByAccount = 'Config.EmailSenderKeyAdminApi.EmailsenderApikeyAccount_ByAccount',
LinkedsendersApikeysEmailsender_ByAccount = 'Config.EmailSenderKeyAdminApi.LinkedsendersApikeysEmailsender_ByAccount',

}

  

export const useEmailSenderApiKeyAdminApi_GetEmailsenderApikeysAccounts = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<EmailSenderApiKeyResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EmailSenderApiKeyResponseArray>) => void
  ): UseQueryResult<EmailSenderApiKeyResponseArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useEmailSenderApiKeyAdminApi_GetEmailsenderApikeysAccounts>[1]
  ) => async () => {
      const response = 
            (await EmailSenderApiKeyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getEmailsenderApikeysAccounts())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EmailSenderApiKeyResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_EmailSenderKeyAdminApi.EmailsenderApikeysAccounts, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useEmailSenderApiKeyAdminApi_CreateEmailsenderApikeyAccount = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<EmailSenderApiKeyResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateEmailSenderApiKeyRequest }>, 'mutationKey'>,
    callback?: (data: EmailSenderApiKeyResponse) => void
  ): UseMutationResult<EmailSenderApiKeyResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateEmailSenderApiKeyRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateEmailSenderApiKeyRequest }) => {
      const response = 
            (await EmailSenderApiKeyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createEmailsenderApikeyAccount(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderKeyAdminApi.EmailsenderApikeyAccount],
    mutationFn,
    ...options
  })
}
  
  

export const useEmailSenderApiKeyAdminApi_DeleteEmailsenderApikeyAccount_ByAccount = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { account:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { account:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { account:string }) => {
      const response = 
            (await EmailSenderApiKeyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteEmailsenderApikeyAccount_ByAccount(input.account))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderKeyAdminApi.EmailsenderApikeyAccount_ByAccount],
    mutationFn,
    ...options
  })
}
  
  

export const useEmailSenderApiKeyAdminApi_GetLinkedsendersApikeysEmailsender_ByAccount = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { account:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<LinkedEmailSendersResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<LinkedEmailSendersResponse>) => void
  ): UseQueryResult<LinkedEmailSendersResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useEmailSenderApiKeyAdminApi_GetLinkedsendersApikeysEmailsender_ByAccount>[1]
  ) => async () => {
      const response = 
            (await EmailSenderApiKeyAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLinkedsendersApikeysEmailsender_ByAccount(input.account, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<LinkedEmailSendersResponse, AxiosError<ApiError>>({
    queryKey: [Key_EmailSenderKeyAdminApi.LinkedsendersApikeysEmailsender_ByAccount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  