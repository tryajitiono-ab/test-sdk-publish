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
import { BulkCreatePsnEventResponse } from '../generated-definitions/BulkCreatePsnEventResponse.js'
import { BulkCreatePsnEvents } from '../generated-definitions/BulkCreatePsnEvents.js'
import { PlatformAchievementAdmin$ } from './endpoints/PlatformAchievementAdmin$.js'


export function PlatformAchievementAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Create PSN UDS events. Player need to login first using playstation token to IAM service. 
   */
  async function createPlatformPsnBulk(data: BulkCreatePsnEvents): Promise<AxiosResponse<BulkCreatePsnEventResponse>> {
    const $ = new PlatformAchievementAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createPlatformPsnBulk(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createPlatformPsnBulk,
  }
}
  