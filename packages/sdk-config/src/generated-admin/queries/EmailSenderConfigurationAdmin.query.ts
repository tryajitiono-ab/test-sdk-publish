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
import { EmailSenderConfigurationAdminApi } from "../EmailSenderConfigurationAdminApi.js"

import { CreateEmailSenderRequest } from '../../generated-definitions/CreateEmailSenderRequest.js'
import { EmailSenderDomainResponse } from '../../generated-definitions/EmailSenderDomainResponse.js'
import { EmailSenderResponse } from '../../generated-definitions/EmailSenderResponse.js'
import { EmailSenderVerifyResponse } from '../../generated-definitions/EmailSenderVerifyResponse.js'
import { UpdateEmailSenderRequest } from '../../generated-definitions/UpdateEmailSenderRequest.js'


export enum Key_EmailSenderConfigurationAdmin {
  Emailsender = 'Config.EmailSenderConfigurationAdmin.Emailsender',
EmailsenderAuthentication = 'Config.EmailSenderConfigurationAdmin.EmailsenderAuthentication',
EmailsenderAuthenticationVerify = 'Config.EmailSenderConfigurationAdmin.EmailsenderAuthenticationVerify',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_EmailSenderConfigurationAdmin.Emailsender, input]
 * }
 * ```
 */
export const useEmailSenderConfigurationAdminApi_GetEmailsender = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {includeEmailTemplates?: boolean | null} },
    options?: Omit<UseQueryOptions<EmailSenderResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EmailSenderResponse>) => void
  ): UseQueryResult<EmailSenderResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useEmailSenderConfigurationAdminApi_GetEmailsender>[1]
  ) => async () => {
      const response = 
            (await EmailSenderConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getEmailsender(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EmailSenderResponse, AxiosError<ApiError>>({
    queryKey: [Key_EmailSenderConfigurationAdmin.Emailsender, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useEmailSenderConfigurationAdminApi_CreateEmailsender = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<EmailSenderDomainResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateEmailSenderRequest }>, 'mutationKey'>,
    callback?: (data: EmailSenderDomainResponse) => void
  ): UseMutationResult<EmailSenderDomainResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateEmailSenderRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateEmailSenderRequest }) => {
      const response = 
            (await EmailSenderConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createEmailsender(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderConfigurationAdmin.Emailsender],
    mutationFn,
    ...options
  })
}
  
  

export const useEmailSenderConfigurationAdminApi_DeleteEmailsender = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await EmailSenderConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteEmailsender())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderConfigurationAdmin.Emailsender],
    mutationFn,
    ...options
  })
}
  
  

export const useEmailSenderConfigurationAdminApi_PatchEmailsender = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateEmailSenderRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdateEmailSenderRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UpdateEmailSenderRequest }) => {
      const response = 
            (await EmailSenderConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchEmailsender(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderConfigurationAdmin.Emailsender],
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
 *    queryKey: [Key_EmailSenderConfigurationAdmin.EmailsenderAuthentication, input]
 * }
 * ```
 */
export const useEmailSenderConfigurationAdminApi_GetEmailsenderAuthentication = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<EmailSenderDomainResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EmailSenderDomainResponse>) => void
  ): UseQueryResult<EmailSenderDomainResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useEmailSenderConfigurationAdminApi_GetEmailsenderAuthentication>[1]
  ) => async () => {
      const response = 
            (await EmailSenderConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getEmailsenderAuthentication())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EmailSenderDomainResponse, AxiosError<ApiError>>({
    queryKey: [Key_EmailSenderConfigurationAdmin.EmailsenderAuthentication, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useEmailSenderConfigurationAdminApi_CreateEmailsenderAuthenticationVerify = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<EmailSenderVerifyResponse, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: EmailSenderVerifyResponse) => void
  ): UseMutationResult<EmailSenderVerifyResponse, AxiosError<ApiError>, SdkSetConfigParam > => { 
  
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await EmailSenderConfigurationAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createEmailsenderAuthenticationVerify())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderConfigurationAdmin.EmailsenderAuthenticationVerify],
    mutationFn,
    ...options
  })
}
  
  
  