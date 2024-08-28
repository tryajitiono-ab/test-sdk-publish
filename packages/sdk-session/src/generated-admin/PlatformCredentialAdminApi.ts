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
import { PlatformCredentials } from '../generated-definitions/PlatformCredentials.js'
import { PutPlatformCredentialsRequest } from '../generated-definitions/PutPlatformCredentialsRequest.js'
import { PlatformCredentialAdmin$ } from './endpoints/PlatformCredentialAdmin$.js'


export function PlatformCredentialAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Delete platform credentials used for Native Session sync. 
   */
  async function deletePlatformCredential(): Promise<AxiosResponse<unknown>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deletePlatformCredential()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Get platform credentials used for Native Session sync. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret. For security, only the first few characters are shown. - scope: should be psn:s2s.service (For Sync non PSN member to PSN Session)  
   */
  async function getPlatformCredentials(): Promise<AxiosResponse<PlatformCredentials>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPlatformCredentials()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update platform credentials for Native Session sync. Currently supports PSN platform. Send an empty body to clear data. PSN: - clientID: Auth Server (Client Credential) ClientID - clientSecret: Auth Server (Client Credential) Secret - scope: psn:s2s.service (For Sync non PSN member to PSN Session)  
   */
  async function updatePlatformCredential(data: PutPlatformCredentialsRequest): Promise<AxiosResponse<PlatformCredentials>> {
    const $ = new PlatformCredentialAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updatePlatformCredential(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    deletePlatformCredential,getPlatformCredentials,updatePlatformCredential,
  }
}
  