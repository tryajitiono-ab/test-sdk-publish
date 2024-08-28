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
import { GameSessionDetailQueryResponse } from '../generated-definitions/GameSessionDetailQueryResponse.js'
import { GameSessionDetail$ } from './endpoints/GameSessionDetail$.js'


export function GameSessionDetailApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Get all game sessions history for current user. 
   */
  async function getUsersMeGamesessions( queryParams?: {limit?: number, offset?: number, order?: string | null}): Promise<AxiosResponse<GameSessionDetailQueryResponse>> {
    const $ = new GameSessionDetail$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeGamesessions( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getUsersMeGamesessions,
  }
}
  