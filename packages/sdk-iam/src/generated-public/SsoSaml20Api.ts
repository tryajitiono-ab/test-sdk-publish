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

import { SsoSaml20$ } from './endpoints/SsoSaml20$.js'


export function SsoSaml20Api(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
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
   * This endpoint authenticates user platform for SAML protocol. It validates user to its respective platforms. Deactivated or login-banned users are unable to login. ## Supported platforms: - **azure** Microsoft login page will redirects to this endpoint after login success as previously defined on authentication request SAML 
   */
  async function postAuthenticateSamlSso_ByPlatformId_v3(platformId:string,  queryParams: {state: string | null, code?: string | null, error?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new SsoSaml20$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postAuthenticateSamlSso_ByPlatformId_v3(platformId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    postAuthenticateSamlSso_ByPlatformId_v3,
  }
}
  