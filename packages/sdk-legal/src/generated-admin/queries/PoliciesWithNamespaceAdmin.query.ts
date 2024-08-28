/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
import { AccelByteSDK, SdkSetConfigParam, ApiError } from '@accelbyte/sdk'
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { PoliciesWithNamespaceAdminApi } from "../PoliciesWithNamespaceAdminApi.js"

import { UpdatePolicyRequest } from '../../generated-definitions/UpdatePolicyRequest.js'


export enum Key_PoliciesWithNamespaceAdmin {
  Policy_ByPolicyId = 'Legal.PoliciesWithNamespaceAdmin.Policy_ByPolicyId',
Default_ByPolicyId = 'Legal.PoliciesWithNamespaceAdmin.Default_ByPolicyId',

}

  

export const usePoliciesWithNamespaceAdminApi_PatchPolicy_ByPolicyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId:string, data: UpdatePolicyRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId:string, data: UpdatePolicyRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { policyId:string, data: UpdatePolicyRequest }) => {
      const response = 
            (await PoliciesWithNamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchPolicy_ByPolicyId(input.policyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PoliciesWithNamespaceAdmin.Policy_ByPolicyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePoliciesWithNamespaceAdminApi_PatchDefault_ByPolicyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { policyId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { policyId:string }) => {
      const response = 
            (await PoliciesWithNamespaceAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchDefault_ByPolicyId(input.policyId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PoliciesWithNamespaceAdmin.Default_ByPolicyId],
    mutationFn,
    ...options
  })
}
  
  
  