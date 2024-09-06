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
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { CheckAvailabilityResponse } from '../generated-definitions/CheckAvailabilityResponse.js'
import { PlatformDomainDeleteRequest } from '../generated-definitions/PlatformDomainDeleteRequest.js'
import { PlatformDomainResponse } from '../generated-definitions/PlatformDomainResponse.js'
import { PlatformDomainUpdateRequest } from '../generated-definitions/PlatformDomainUpdateRequest.js'
import { ThirdPartyLoginPlatformCredentialRequest } from '../generated-definitions/ThirdPartyLoginPlatformCredentialRequest.js'
import { ThirdPartyLoginPlatformCredentialResponse } from '../generated-definitions/ThirdPartyLoginPlatformCredentialResponse.js'
import { ThirdPartyLoginPlatformCredentialResponseArray } from '../generated-definitions/ThirdPartyLoginPlatformCredentialResponseArray.js'
import { ThirdPartyCredentialAdmin$ } from './endpoints/ThirdPartyCredentialAdmin$.js'

export function ThirdPartyCredentialAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  /**
   * This is the API to check specific 3rd party platform availability. Passing platform group name or it&#39;s member will return same platform availability data Supported third party platform and platform group: - PSN group(psn) - ps4web - ps4 - ps5
   */
  async function getAvailability_ByPlatformId_v3(platformId: string): Promise<AxiosResponse<CheckAvailabilityResponse>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAvailability_ByPlatformId_v3(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to Get All Active 3rd Platform Credential.
   */
  async function getPlatformsAllClients_v3(): Promise<AxiosResponse<ThirdPartyLoginPlatformCredentialResponseArray>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsAllClients_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to Get All Active 3rd Platform Credential.
   */
  async function getPlatformsAllClientsActive_v3(): Promise<AxiosResponse<ThirdPartyLoginPlatformCredentialResponseArray>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformsAllClientsActive_v3()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to Delete 3rd Platform Credential.
   */
  async function deleteClient_ByPlatformId_v3(platformId: string): Promise<AxiosResponse<unknown>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClient_ByPlatformId_v3(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to Get 3rd Platform Credential.
   */
  async function getClients_ByPlatformId_v3(platformId: string): Promise<AxiosResponse<ThirdPartyLoginPlatformCredentialResponse>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getClients_ByPlatformId_v3(platformId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType is **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info.**default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
   */
  async function patchClient_ByPlatformId_v3(
    platformId: string,
    data: ThirdPartyLoginPlatformCredentialRequest
  ): Promise<AxiosResponse<ThirdPartyLoginPlatformCredentialResponse>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchClient_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to Add 3rd Platform Credential. - The secret for **apple** is base64 encoded private key. - No secret for **awscognito**, we only need to configure AWS Cognito Region and User Pool - The secret for **discord** is client secret of the twitch client id. - The secret for **epicgames** is client secret of the epicgames client id. - The secret for **facebook** is client secret of the facebook client id. - The secret for **google** is client secret of the google OAuth client. - No secret for **nintendo**, we only need to configure app id of the game - No secret for **netflix**, we configure the Root, Public, Private Key certificate pem file and target environment; value: [sandbox, production] - The secret for **oculus** is app secret of the oculus app. - The secret for **ps4, ps5, and ps4web** is client secret of the psn web server. - The secret for **steam** is the Steam Web API Key. - The secret for **steamopenid** is the Steam Web API Key. - The secret for **twitch** is client secret of the twitch client. - The secret for **live** is the Relying Party Private Key in base64 encode PEM format. - The secret for **xblwebapi** is client secret of the xbl client. If generic oauth flow is set to true: - Current supported value for TokenAuthenticationType are **code, idToken and bearerToken** - &lt;code&gt;TokenClaimsMapping&lt;/code&gt; is used to extract user info from idToken claims or user info endpoint response accessed using bearerToken. Its a JSON format with key should be &lt;code&gt;name&lt;/code&gt;, &lt;code&gt;email&lt;/code&gt; and &lt;code&gt;avatarUrl&lt;/code&gt; since IAM will look up for these key when extracting user info. **default claims keys : userIdentity/sub, name, email and avatarUrl/picture**
   */
  async function createClient_ByPlatformId_v3(
    platformId: string,
    data: ThirdPartyLoginPlatformCredentialRequest
  ): Promise<AxiosResponse<ThirdPartyLoginPlatformCredentialResponse>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createClient_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to unregister 3rd Platform domain.
   */
  async function deleteClientDomain_ByPlatformId_v3(
    platformId: string,
    data: PlatformDomainDeleteRequest
  ): Promise<AxiosResponse<unknown>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteClientDomain_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * This is the API to set 3rd Platform domain.
   */
  async function updateClientDomain_ByPlatformId_v3(
    platformId: string,
    data: PlatformDomainUpdateRequest
  ): Promise<AxiosResponse<PlatformDomainResponse>> {
    const $ = new ThirdPartyCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateClientDomain_ByPlatformId_v3(platformId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getAvailability_ByPlatformId_v3,
    getPlatformsAllClients_v3,
    getPlatformsAllClientsActive_v3,
    deleteClient_ByPlatformId_v3,
    getClients_ByPlatformId_v3,
    patchClient_ByPlatformId_v3,
    createClient_ByPlatformId_v3,
    deleteClientDomain_ByPlatformId_v3,
    updateClientDomain_ByPlatformId_v3
  }
}
