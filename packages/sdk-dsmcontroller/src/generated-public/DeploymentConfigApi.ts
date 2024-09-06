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
import { CreateDeploymentRequest } from '../generated-definitions/CreateDeploymentRequest.js'
import { DeploymentWithOverride } from '../generated-definitions/DeploymentWithOverride.js'
import { ListDeploymentResponse } from '../generated-definitions/ListDeploymentResponse.js'
import { DeploymentConfig$ } from './endpoints/DeploymentConfig$.js'

export function DeploymentConfigApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a all deployments in a namespace Parameter Offset and Count is Required
   */
  async function getConfigsDeployments(queryParams: {
    count: number
    offset: number
    name?: string | null
  }): Promise<AxiosResponse<ListDeploymentResponse>> {
    const $ = new DeploymentConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigsDeployments(queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [DELETE] Required scope: social This endpoint delete a dedicated server deployment in a namespace
   */
  async function deleteConfigDeployment_ByDeployment(deployment: string): Promise<AxiosResponse<unknown>> {
    const $ = new DeploymentConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [READ] Required scope: social This endpoint get a dedicated server deployment in a namespace
   */
  async function getConfigDeployment_ByDeployment(deployment: string): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getConfigDeployment_ByDeployment(deployment)
    if (resp.error) throw resp.error
    return resp.response
  }

  /**
   * Required permission: NAMESPACE:{namespace}:DSM:CONFIG [CREATE] Required scope: social This endpoint create a dedicated servers deployment in a namespace.
   */
  async function createConfigDeployment_ByDeployment(
    deployment: string,
    data: CreateDeploymentRequest
  ): Promise<AxiosResponse<DeploymentWithOverride>> {
    const $ = new DeploymentConfig$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createConfigDeployment_ByDeployment(deployment, data)
    if (resp.error) throw resp.error
    return resp.response
  }

  return {
    getConfigsDeployments,
    deleteConfigDeployment_ByDeployment,
    getConfigDeployment_ByDeployment,
    createConfigDeployment_ByDeployment
  }
}
