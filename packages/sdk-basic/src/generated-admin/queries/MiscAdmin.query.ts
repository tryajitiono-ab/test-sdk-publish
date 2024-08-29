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
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { MiscAdminApi } from "../MiscAdminApi.js"

import { AddCountryGroupRequest } from '../../generated-definitions/AddCountryGroupRequest.js'
import { AddCountryGroupResponse } from '../../generated-definitions/AddCountryGroupResponse.js'
import { CountryGroupObject } from '../../generated-definitions/CountryGroupObject.js'
import { CountryObjectArray } from '../../generated-definitions/CountryObjectArray.js'
import { RetrieveCountryGroupResponseArray } from '../../generated-definitions/RetrieveCountryGroupResponseArray.js'
import { UpdateCountryGroupRequest } from '../../generated-definitions/UpdateCountryGroupRequest.js'


export enum Key_MiscAdmin {
  MiscCountries = 'Basic.MiscAdmin.MiscCountries',
MiscLanguages = 'Basic.MiscAdmin.MiscLanguages',
MiscTimezones = 'Basic.MiscAdmin.MiscTimezones',
MiscCountrygroups = 'Basic.MiscAdmin.MiscCountrygroups',
MiscCountrygroup = 'Basic.MiscAdmin.MiscCountrygroup',
MiscCountrygroup_ByCountryGroupCode = 'Basic.MiscAdmin.MiscCountrygroup_ByCountryGroupCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_MiscAdmin.MiscCountries, input]
 * }
 * ```
 */
export const useMiscAdminApi_GetMiscCountries = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {lang?: string | null} },
    options?: Omit<UseQueryOptions<CountryObjectArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CountryObjectArray>) => void
  ): UseQueryResult<CountryObjectArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMiscAdminApi_GetMiscCountries>[1]
  ) => async () => {
      const response = 
            (await MiscAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMiscCountries(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CountryObjectArray, AxiosError<ApiError>>({
    queryKey: [Key_MiscAdmin.MiscCountries, input],
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
 *    queryKey: [Key_MiscAdmin.MiscLanguages, input]
 * }
 * ```
 */
export const useMiscAdminApi_GetMiscLanguages = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMiscAdminApi_GetMiscLanguages>[1]
  ) => async () => {
      const response = 
            (await MiscAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMiscLanguages())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MiscAdmin.MiscLanguages, input],
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
 *    queryKey: [Key_MiscAdmin.MiscTimezones, input]
 * }
 * ```
 */
export const useMiscAdminApi_GetMiscTimezones = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMiscAdminApi_GetMiscTimezones>[1]
  ) => async () => {
      const response = 
            (await MiscAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMiscTimezones())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_MiscAdmin.MiscTimezones, input],
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
 *    queryKey: [Key_MiscAdmin.MiscCountrygroups, input]
 * }
 * ```
 */
export const useMiscAdminApi_GetMiscCountrygroups = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {groupCode?: string | null} },
    options?: Omit<UseQueryOptions<RetrieveCountryGroupResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RetrieveCountryGroupResponseArray>) => void
  ): UseQueryResult<RetrieveCountryGroupResponseArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMiscAdminApi_GetMiscCountrygroups>[1]
  ) => async () => {
      const response = 
            (await MiscAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMiscCountrygroups(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RetrieveCountryGroupResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_MiscAdmin.MiscCountrygroups, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMiscAdminApi_CreateMiscCountrygroup = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AddCountryGroupResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AddCountryGroupRequest }>, 'mutationKey'>,
    callback?: (data: AddCountryGroupResponse) => void
  ): UseMutationResult<AddCountryGroupResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: AddCountryGroupRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: AddCountryGroupRequest }) => {
      const response = 
            (await MiscAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createMiscCountrygroup(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MiscAdmin.MiscCountrygroup],
    mutationFn,
    ...options
  })
}
  
  

export const useMiscAdminApi_DeleteMiscCountrygroup_ByCountryGroupCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { countryGroupCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { countryGroupCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { countryGroupCode:string }) => {
      const response = 
            (await MiscAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMiscCountrygroup_ByCountryGroupCode(input.countryGroupCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MiscAdmin.MiscCountrygroup_ByCountryGroupCode],
    mutationFn,
    ...options
  })
}
  
  

export const useMiscAdminApi_UpdateMiscCountrygroup_ByCountryGroupCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CountryGroupObject, AxiosError<ApiError>, SdkSetConfigParam & { countryGroupCode:string, data: UpdateCountryGroupRequest }>, 'mutationKey'>,
    callback?: (data: CountryGroupObject) => void
  ): UseMutationResult<CountryGroupObject, AxiosError<ApiError>, SdkSetConfigParam & { countryGroupCode:string, data: UpdateCountryGroupRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { countryGroupCode:string, data: UpdateCountryGroupRequest }) => {
      const response = 
            (await MiscAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateMiscCountrygroup_ByCountryGroupCode(input.countryGroupCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MiscAdmin.MiscCountrygroup_ByCountryGroupCode],
    mutationFn,
    ...options
  })
}
  
  
  