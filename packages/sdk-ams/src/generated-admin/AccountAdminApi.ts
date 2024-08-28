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
import { AccountCreateRequest } from '../generated-definitions/AccountCreateRequest.js'
import { AccountCreateResponse } from '../generated-definitions/AccountCreateResponse.js'
import { AccountLinkRequest } from '../generated-definitions/AccountLinkRequest.js'
import { AccountLinkResponse } from '../generated-definitions/AccountLinkResponse.js'
import { AccountLinkTokenResponse } from '../generated-definitions/AccountLinkTokenResponse.js'
import { AccountResponse } from '../generated-definitions/AccountResponse.js'
import { AccountAdmin$ } from './endpoints/AccountAdmin$.js'


export function AccountAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [READ] 
   */
  async function getAccount(): Promise<AxiosResponse<AccountResponse>> {
    const $ = new AccountAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAccount()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [CREATE] 
   */
  async function createAccount(data: AccountCreateRequest): Promise<AxiosResponse<AccountCreateResponse>> {
    const $ = new AccountAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAccount(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * The link token returned can be used to connect another namespace to the account in which the provided namespace is linked. This route fails if there is no account linked to the specified namespace. Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [READ] 
   */
  async function getAccountLink(): Promise<AxiosResponse<AccountLinkTokenResponse>> {
    const $ = new AccountAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAccountLink()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This route will attempt to register the account to namespace linkage in AMS and requires a valid account link token. This route fails if an account is already linked AdminAccountLink Required Permission: ADMIN:NAMESPACE:{namespace}:ARMADA:ACCOUNT [CREATE] 
   */
  async function createAccountLink(data: AccountLinkRequest): Promise<AxiosResponse<AccountLinkResponse>> {
    const $ = new AccountAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAccountLink(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getAccount,createAccount,getAccountLink,createAccountLink,
  }
}
  