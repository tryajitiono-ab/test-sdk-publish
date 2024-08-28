/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosResponse } from 'axios'
import { EmailTemplatePair } from '../generated-definitions/EmailTemplatePair.js'
import { EmailTemplatePairArray } from '../generated-definitions/EmailTemplatePairArray.js'
import { EmailSenderTemplateAdmin$ } from './endpoints/EmailSenderTemplateAdmin$.js'


export function EmailSenderTemplateAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * Get all available API key account names. 
   */
  async function getEmailtemplatesEmailsender_ByAccount(account:string): Promise<AxiosResponse<EmailTemplatePairArray>> {
    const $ = new EmailSenderTemplateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailtemplatesEmailsender_ByAccount(account, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create email templates which will be used for email sending. Currently only support SendGrid platform email templates. 
   */
  async function updateEmailtemplateEmailsender_ByAccount(account:string, data: EmailTemplatePair[]): Promise<AxiosResponse<EmailTemplatePairArray>> {
    const $ = new EmailSenderTemplateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEmailtemplateEmailsender_ByAccount(account, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete email templates of an account. 
   */
  async function deleteEmailtemplateEmailsender_ByAccount(account:string): Promise<AxiosResponse<unknown>> {
    const $ = new EmailSenderTemplateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteEmailtemplateEmailsender_ByAccount(account, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getEmailtemplatesEmailsender_ByAccount,updateEmailtemplateEmailsender_ByAccount,deleteEmailtemplateEmailsender_ByAccount,
  }
}
  