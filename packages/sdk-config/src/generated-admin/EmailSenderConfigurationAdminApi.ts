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
import { CreateEmailSenderRequest } from '../generated-definitions/CreateEmailSenderRequest.js'
import { EmailSenderDomainResponse } from '../generated-definitions/EmailSenderDomainResponse.js'
import { EmailSenderResponse } from '../generated-definitions/EmailSenderResponse.js'
import { EmailSenderVerifyResponse } from '../generated-definitions/EmailSenderVerifyResponse.js'
import { UpdateEmailSenderRequest } from '../generated-definitions/UpdateEmailSenderRequest.js'
import { EmailSenderConfigurationAdmin$ } from './endpoints/EmailSenderConfigurationAdmin$.js'


export function EmailSenderConfigurationAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get an email sender for the requested namespace. If email sender in the requested namespace didn't configured yet or not verified yet, and <code>ALLOW_FALLBACK_TO_PUBLISHER_EMAIL_SENDER</code> environment was activated, it will return email sender of the configured publisher namespace. 
   */
  async function getEmailsender( queryParams?: {includeEmailTemplates?: boolean | null}): Promise<AxiosResponse<EmailSenderResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailsender( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Set an email sender of the namespace and request domain authentication to the email platform (currently only SendGrid supported). **Email Sender API Key Logic:** If there's no Email Sender API Key defined yet in the requested namespace, the API logic will fallback to use Publisher Namespace API Key.  
   */
  async function createEmailsender(data: CreateEmailSenderRequest): Promise<AxiosResponse<EmailSenderDomainResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEmailsender(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Delete an email sender. 
   */
  async function deleteEmailsender(): Promise<AxiosResponse<unknown>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteEmailsender()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update email sender of the specified namespace. These attributes can be updated: - fromAddress (the domain name of the email address must be similar with the existing) - fromName  
   */
  async function patchEmailsender(data: UpdateEmailSenderRequest): Promise<AxiosResponse<unknown>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchEmailsender(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get email sender domain authentication status. 
   */
  async function getEmailsenderAuthentication(): Promise<AxiosResponse<EmailSenderDomainResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getEmailsenderAuthentication()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Verify the authentication of the email sender domain. If verification is failed, it will return 400 error.  
   */
  async function createEmailsenderAuthenticationVerify(): Promise<AxiosResponse<EmailSenderVerifyResponse>> {
    const $ = new EmailSenderConfigurationAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createEmailsenderAuthenticationVerify()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getEmailsender,createEmailsender,deleteEmailsender,patchEmailsender,getEmailsenderAuthentication,createEmailsenderAuthenticationVerify,
  }
}
  