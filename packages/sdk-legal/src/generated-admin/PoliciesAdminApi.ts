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
import { RetrievePolicyResponseArray } from '../generated-definitions/RetrievePolicyResponseArray.js'
import { UpdatePolicyRequest } from '../generated-definitions/UpdatePolicyRequest.js'
import { PoliciesAdmin$ } from './endpoints/PoliciesAdmin$.js'

export function PoliciesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()

  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, {
    ...(args?.coreConfig?.baseURL ? { baseURL: args?.coreConfig?.baseURL } : {}),
    ...args?.axiosConfig?.request
  })
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = args?.coreConfig?.useSchemaValidation ?? sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)

  for (const interceptor of interceptors) {
    if (interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if (interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  async function patchPolicy_ByPolicyId(policyId: string, data: UpdatePolicyRequest): Promise<AxiosResponse<unknown>> {
    const $ = new PoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchPolicy_ByPolicyId(policyId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function patchDefault_ByPolicyId(policyId: string): Promise<AxiosResponse<unknown>> {
    const $ = new PoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchDefault_ByPolicyId(policyId)
    if (resp.error) throw resp.error
    return resp.response
  }

  async function getPolicyCountry_ByCountryCode(countryCode: string): Promise<AxiosResponse<RetrievePolicyResponseArray>> {
    const $ = new PoliciesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getPolicyCountry_ByCountryCode(countryCode)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    /**
     * Update country-specific policy.
     */
    patchPolicy_ByPolicyId,
    /**
     * Update a policy to be the default.
     */
    patchDefault_ByPolicyId,
    /**
     * Retrieve all active policies based on a country.
     */
    getPolicyCountry_ByCountryCode
  }
}
