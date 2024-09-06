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
import { AcceptAgreementRequest } from '../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../generated-definitions/AcceptAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { Agreement$ } from './endpoints/Agreement$.js'

export function AgreementApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Retrieve accepted Legal Agreements.
   */
  async function getAgreementsPolicies(): Promise<AxiosResponse<RetrieveAcceptedAgreementResponseArray>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgreementsPolicies()
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Accepts many legal policy versions all at once. Supply with localized version policy id to accept an agreement.
   */
  async function createAgreementPolicy(data: AcceptAgreementRequest[]): Promise<AxiosResponse<AcceptAgreementResponse>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicy(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * @deprecated
   * Accepts many legal policy versions all at once. Supply with localized version policy id and userId to accept an agreement. This endpoint used by Authentication Service during new user registration.
   */
  async function createAgreementPolicyUser_ByUserId(
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AxiosResponse<AcceptAgreementResponse>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicyUser_ByUserId(userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Change marketing preference consent.
   */
  async function patchAgreementLocalizedPolicyVersionPreference(data: AcceptAgreementRequest[]): Promise<AxiosResponse<unknown>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchAgreementLocalizedPolicyVersionPreference(data)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Accepts a legal policy version. Supply with localized version policy id to accept an agreement
   */
  async function createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(
    localizedPolicyVersionId: string
  ): Promise<AxiosResponse<unknown>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId(localizedPolicyVersionId)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * @deprecated
   * Accepts many legal policy versions all at once. Supply with localized version policy id, version policy id, policy id, userId, namespace, country code and client id to accept an agreement. This endpoint used by APIGateway during new user registration.
   */
  async function createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(
    countryCode: string,
    clientId: string,
    userId: string,
    data: AcceptAgreementRequest[]
  ): Promise<AxiosResponse<AcceptAgreementResponse>> {
    const $ = new Agreement$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId(countryCode, clientId, userId, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getAgreementsPolicies,
    createAgreementPolicy,
    createAgreementPolicyUser_ByUserId,
    patchAgreementLocalizedPolicyVersionPreference,
    createAgreementLocalizedPolicyVersion_ByLocalizedPolicyVersionId,
    createUserPolicyAgreement_ByCountryCode_ByClientId_ByUserId
  }
}
