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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { PoliciesApi } from "../PoliciesApi.js"

import { RetrievePolicyPublicResponseArray } from '../../generated-definitions/RetrievePolicyPublicResponseArray.js'


export enum Key_Policies {
  PoliciesCountriesList = 'Legal.Policies.PoliciesCountriesList',
Policy_ByNamespace = 'Legal.Policies.Policy_ByNamespace',
PolicyCountry_ByCountryCode = 'Legal.Policies.PolicyCountry_ByCountryCode',
PolicyCountry_ByCountryCode_ByNS = 'Legal.Policies.PolicyCountry_ByCountryCode_ByNS',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.PoliciesCountriesList, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPoliciesCountriesList = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePoliciesApi_GetPoliciesCountriesList>[1]
  ) => async () => {
      const response = 
            (await PoliciesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPoliciesCountriesList())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Policies.PoliciesCountriesList, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.Policy_ByNamespace, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPolicy_ByNamespace = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {alwaysIncludeDefault?: boolean | null, defaultOnEmpty?: boolean | null, policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE', tags?: string | null, visibleOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RetrievePolicyPublicResponseArray>) => void
  ): UseQueryResult<RetrievePolicyPublicResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePoliciesApi_GetPolicy_ByNamespace>[1]
  ) => async () => {
      const response = 
            (await PoliciesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPolicy_ByNamespace(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Policies.Policy_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.PolicyCountry_ByCountryCode, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPolicyCountry_ByCountryCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { countryCode:string,  queryParams?: {defaultOnEmpty?: boolean | null, policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE', tags?: string | null, visibleOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RetrievePolicyPublicResponseArray>) => void
  ): UseQueryResult<RetrievePolicyPublicResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePoliciesApi_GetPolicyCountry_ByCountryCode>[1]
  ) => async () => {
      const response = 
            (await PoliciesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPolicyCountry_ByCountryCode(input.countryCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Policies.PolicyCountry_ByCountryCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Policies.PolicyCountry_ByCountryCode_ByNS, input]
 * }
 * ```
 */
export const usePoliciesApi_GetPolicyCountry_ByCountryCode_ByNS = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { countryCode:string,  queryParams?: {alwaysIncludeDefault?: boolean | null, defaultOnEmpty?: boolean | null, policyType?: 'LEGAL_DOCUMENT_TYPE' | 'MARKETING_PREFERENCE_TYPE', tags?: string | null, visibleOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RetrievePolicyPublicResponseArray>) => void
  ): UseQueryResult<RetrievePolicyPublicResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePoliciesApi_GetPolicyCountry_ByCountryCode_ByNS>[1]
  ) => async () => {
      const response = 
            (await PoliciesApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPolicyCountry_ByCountryCode_ByNS(input.countryCode, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RetrievePolicyPublicResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_Policies.PolicyCountry_ByCountryCode_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  