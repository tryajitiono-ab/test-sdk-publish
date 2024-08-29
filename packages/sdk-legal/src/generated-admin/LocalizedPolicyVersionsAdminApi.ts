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
import { CreateLocalizedPolicyVersionRequest } from '../generated-definitions/CreateLocalizedPolicyVersionRequest.js'
import { CreateLocalizedPolicyVersionResponse } from '../generated-definitions/CreateLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponse } from '../generated-definitions/RetrieveLocalizedPolicyVersionResponse.js'
import { RetrieveLocalizedPolicyVersionResponseArray } from '../generated-definitions/RetrieveLocalizedPolicyVersionResponseArray.js'
import { UpdateLocalizedPolicyVersionRequest } from '../generated-definitions/UpdateLocalizedPolicyVersionRequest.js'
import { UpdateLocalizedPolicyVersionResponse } from '../generated-definitions/UpdateLocalizedPolicyVersionResponse.js'
import { UploadLocalizedPolicyVersionAttachmentResponse } from '../generated-definitions/UploadLocalizedPolicyVersionAttachmentResponse.js'
import { UploadPolicyVersionAttachmentRequest } from '../generated-definitions/UploadPolicyVersionAttachmentRequest.js'
import { LocalizedPolicyVersionsAdmin$ } from './endpoints/LocalizedPolicyVersionsAdmin$.js'


export function LocalizedPolicyVersionsAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Retrieve a version of a particular country-specific policy. 
   */
  async function getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string): Promise<AxiosResponse<RetrieveLocalizedPolicyVersionResponse>> {
    const $ = new LocalizedPolicyVersionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a version of a particular country-specific policy. 
   */
  async function updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string, data: UpdateLocalizedPolicyVersionRequest): Promise<AxiosResponse<UpdateLocalizedPolicyVersionResponse>> {
    const $ = new LocalizedPolicyVersionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Retrieve versions of a particular country-specific policy. 
   */
  async function getLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId:string): Promise<AxiosResponse<RetrieveLocalizedPolicyVersionResponseArray>> {
    const $ = new LocalizedPolicyVersionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a version of a particular country-specific policy. 
   */
  async function createLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId:string, data: CreateLocalizedPolicyVersionRequest): Promise<AxiosResponse<CreateLocalizedPolicyVersionResponse>> {
    const $ = new LocalizedPolicyVersionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createLocalizedPolicyVersionVersion_ByPolicyVersionId(policyVersionId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Update a localized version policy to be the default. 
   */
  async function patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string): Promise<AxiosResponse<unknown>> {
    const $ = new LocalizedPolicyVersionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchDefault_ByLocalizedPolicyVersionId(localizedPolicyVersionId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Request presigned URL for upload attachment for a particular localized version of base policy. 
   */
  async function createAttachment_ByLocalizedPolicyVersionId(localizedPolicyVersionId:string, data: UploadPolicyVersionAttachmentRequest): Promise<AxiosResponse<UploadLocalizedPolicyVersionAttachmentResponse>> {
    const $ = new LocalizedPolicyVersionsAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAttachment_ByLocalizedPolicyVersionId(localizedPolicyVersionId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getLocalizedPolicyVersion_ByLocalizedPolicyVersionId,updateLocalizedPolicyVersion_ByLocalizedPolicyVersionId,getLocalizedPolicyVersionVersion_ByPolicyVersionId,createLocalizedPolicyVersionVersion_ByPolicyVersionId,patchDefault_ByLocalizedPolicyVersionId,createAttachment_ByLocalizedPolicyVersionId,
  }
}
  