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
import { PlatformCredentials } from '../generated-definitions/PlatformCredentials.js'
import { CertificateAdmin$ } from './endpoints/CertificateAdmin$.js'


export function CertificateAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Upload certificates for xbox. Certificate must be in the valid form of PFX format. 
   */
  async function updateCertificatePfxPlatformXbl(data: {file: File,password: string | null,certname: string | null,description?: string | null}): Promise<AxiosResponse<PlatformCredentials>> {
    const $ = new CertificateAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateCertificatePfxPlatformXbl(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    updateCertificatePfxPlatformXbl,
  }
}
  