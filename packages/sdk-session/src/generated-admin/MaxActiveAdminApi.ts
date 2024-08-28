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
import { MemberActiveSession } from '../generated-definitions/MemberActiveSession.js'
import { RequestReconcileMaxActiveSession } from '../generated-definitions/RequestReconcileMaxActiveSession.js'
import { MaxActiveAdmin$ } from './endpoints/MaxActiveAdmin$.js'


export function MaxActiveAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   *  Reconcile Max Active Session.  
   */
  async function updateReconcile_ByName(name:string, data: RequestReconcileMaxActiveSession): Promise<AxiosResponse<unknown>> {
    const $ = new MaxActiveAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateReconcile_ByName(name, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   *  Get Member Active Session.  
   */
  async function getMemberactivesession_ByName_ByUserId(name:string, userId:string): Promise<AxiosResponse<MemberActiveSession>> {
    const $ = new MaxActiveAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getMemberactivesession_ByName_ByUserId(name, userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    updateReconcile_ByName,getMemberactivesession_ByName_ByUserId,
  }
}
  