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
import { DownloadExportedAgreementsInCsvResponse } from '../generated-definitions/DownloadExportedAgreementsInCsvResponse.js'
import { InitiateExportAgreementsToCsvResponse } from '../generated-definitions/InitiateExportAgreementsToCsvResponse.js'
import { PagedRetrieveUserAcceptedAgreementResponse } from '../generated-definitions/PagedRetrieveUserAcceptedAgreementResponse.js'
import { RetrieveAcceptedAgreementResponseArray } from '../generated-definitions/RetrieveAcceptedAgreementResponseArray.js'
import { UserAgreementsResponseArray } from '../generated-definitions/UserAgreementsResponseArray.js'
import { UsersAgreementsRequest } from '../generated-definitions/UsersAgreementsRequest.js'
import { AgreementWithNamespaceAdmin$ } from './endpoints/AgreementWithNamespaceAdmin$.js'


export function AgreementWithNamespaceAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API will return all accepted Legal Agreements for each user, including agreements of game users if publisher user has corresponding game account. 
   */
  async function createAgreement(data: UsersAgreementsRequest): Promise<AxiosResponse<UserAgreementsResponseArray>> {
    const $ = new AgreementWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreement(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API will return all users who has accepted a specific policy version. 
   */
  async function getAgreementsPolicyVersionsUsers( queryParams: {policyVersionId: string | null, convertGameUserId?: boolean | null, keyword?: string | null, limit?: number, offset?: number}): Promise<AxiosResponse<PagedRetrieveUserAcceptedAgreementResponse>> {
    const $ = new AgreementWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgreementsPolicyVersionsUsers( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API will return all accepted Legal Agreements for specified user. 
   */
  async function getAgreementPolicyUser_ByUserId(userId:string,  queryParams?: {excludeOtherNamespacesPolicies?: boolean | null}): Promise<AxiosResponse<RetrieveAcceptedAgreementResponseArray>> {
    const $ = new AgreementWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgreementPolicyUser_ByUserId(userId,  queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API will check the status of export process.&lt;br&gt;If the export process has been completed, the response body will include the download url. 
   */
  async function getAgreementsPolicyVersionsUsersExportCsvDownload( queryParams: {exportId: string | null}): Promise<AxiosResponse<DownloadExportedAgreementsInCsvResponse>> {
    const $ = new AgreementWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getAgreementsPolicyVersionsUsersExportCsvDownload( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API will initiate a worker to export list of users who has accepted a specific policy version into a CSV file.&lt;br&gt;To check the export state after initialize it, use `GET /admin/namespaces/{namespace}/agreements/policy-versions/users/export-csv/download` API.&lt;br/&gt;&lt;br/&gt;This Initiate API is &lt;b&gt;not allow&lt;/b&gt; multiple export worker running for the same namespace, it will return 409 http error if so.&lt;br/&gt; 
   */
  async function createAgreementPolicyVersionUserExportCsvInitiate( queryParams: {policyVersionId: string | null, start: string | null, end?: string | null}): Promise<AxiosResponse<InitiateExportAgreementsToCsvResponse>> {
    const $ = new AgreementWithNamespaceAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createAgreementPolicyVersionUserExportCsvInitiate( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    createAgreement,getAgreementsPolicyVersionsUsers,getAgreementPolicyUser_ByUserId,getAgreementsPolicyVersionsUsersExportCsvDownload,createAgreementPolicyVersionUserExportCsvInitiate,
  }
}
  