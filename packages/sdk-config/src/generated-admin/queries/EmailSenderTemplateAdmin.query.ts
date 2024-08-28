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
import { EmailSenderTemplateAdminApi } from "../EmailSenderTemplateAdminApi.js"

import { EmailTemplatePair } from '../../generated-definitions/EmailTemplatePair.js'
import { EmailTemplatePairArray } from '../../generated-definitions/EmailTemplatePairArray.js'


export enum Key_EmailSenderTemplateAdmin {
  EmailtemplatesEmailsender_ByAccount = 'Config.EmailSenderTemplateAdmin.EmailtemplatesEmailsender_ByAccount',
EmailtemplateEmailsender_ByAccount = 'Config.EmailSenderTemplateAdmin.EmailtemplateEmailsender_ByAccount',

}

  

export const useEmailSenderTemplateAdminApi_GetEmailtemplatesEmailsender_ByAccount = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { account:string },
    options?: Omit<UseQueryOptions<EmailTemplatePairArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EmailTemplatePairArray>) => void
  ): UseQueryResult<EmailTemplatePairArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useEmailSenderTemplateAdminApi_GetEmailtemplatesEmailsender_ByAccount>[1]
  ) => async () => {
      const response = 
            (await EmailSenderTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getEmailtemplatesEmailsender_ByAccount(input.account))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EmailTemplatePairArray, AxiosError<ApiError>>({
    queryKey: [Key_EmailSenderTemplateAdmin.EmailtemplatesEmailsender_ByAccount, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useEmailSenderTemplateAdminApi_UpdateEmailtemplateEmailsender_ByAccount = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<EmailTemplatePairArray, AxiosError<ApiError>, SdkSetConfigParam & { account:string, data: EmailTemplatePair[] }>, 'mutationKey'>,
    callback?: (data: EmailTemplatePairArray) => void
  ): UseMutationResult<EmailTemplatePairArray, AxiosError<ApiError>, SdkSetConfigParam & { account:string, data: EmailTemplatePair[] }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { account:string, data: EmailTemplatePair[] }) => {
      const response = 
            (await EmailSenderTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEmailtemplateEmailsender_ByAccount(input.account, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderTemplateAdmin.EmailtemplateEmailsender_ByAccount],
    mutationFn,
    ...options
  })
}
  
  

export const useEmailSenderTemplateAdminApi_DeleteEmailtemplateEmailsender_ByAccount = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { account:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { account:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { account:string }) => {
      const response = 
            (await EmailSenderTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteEmailtemplateEmailsender_ByAccount(input.account))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_EmailSenderTemplateAdmin.EmailtemplateEmailsender_ByAccount],
    mutationFn,
    ...options
  })
}
  
  
  