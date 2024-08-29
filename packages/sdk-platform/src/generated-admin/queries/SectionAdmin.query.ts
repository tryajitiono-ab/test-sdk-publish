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
import { SectionAdminApi } from "../SectionAdminApi.js"

import { FullSectionInfo } from '../../generated-definitions/FullSectionInfo.js'
import { SectionCreate } from '../../generated-definitions/SectionCreate.js'
import { SectionPagingSlicedResult } from '../../generated-definitions/SectionPagingSlicedResult.js'
import { SectionUpdate } from '../../generated-definitions/SectionUpdate.js'


export enum Key_SectionAdmin {
  Sections = 'Platform.SectionAdmin.Sections',
Section = 'Platform.SectionAdmin.Section',
Section_BySectionId = 'Platform.SectionAdmin.Section_BySectionId',
SectionPurgeExpired = 'Platform.SectionAdmin.SectionPurgeExpired',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SectionAdmin.Sections, input]
 * }
 * ```
 */
export const useSectionAdminApi_GetSections = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {end?: string | null, limit?: number, offset?: number, start?: string | null, storeId?: string | null, viewId?: string | null} },
    options?: Omit<UseQueryOptions<SectionPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SectionPagingSlicedResult>) => void
  ): UseQueryResult<SectionPagingSlicedResult, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSectionAdminApi_GetSections>[1]
  ) => async () => {
      const response = 
            (await SectionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSections(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SectionPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_SectionAdmin.Sections, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSectionAdminApi_CreateSection = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullSectionInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SectionCreate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullSectionInfo) => void
  ): UseMutationResult<FullSectionInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SectionCreate, queryParams: {storeId: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: SectionCreate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await SectionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSection(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SectionAdmin.Section],
    mutationFn,
    ...options
  })
}
  
  

export const useSectionAdminApi_DeleteSection_BySectionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sectionId:string,  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sectionId:string,  queryParams: {storeId: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sectionId:string,  queryParams: {storeId: string | null} }) => {
      const response = 
            (await SectionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteSection_BySectionId(input.sectionId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SectionAdmin.Section_BySectionId],
    mutationFn,
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_SectionAdmin.Section_BySectionId, input]
 * }
 * ```
 */
export const useSectionAdminApi_GetSection_BySectionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { sectionId:string,  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullSectionInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullSectionInfo>) => void
  ): UseQueryResult<FullSectionInfo, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSectionAdminApi_GetSection_BySectionId>[1]
  ) => async () => {
      const response = 
            (await SectionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSection_BySectionId(input.sectionId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullSectionInfo, AxiosError<ApiError>>({
    queryKey: [Key_SectionAdmin.Section_BySectionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSectionAdminApi_UpdateSection_BySectionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullSectionInfo, AxiosError<ApiError>, SdkSetConfigParam & { sectionId:string, data: SectionUpdate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullSectionInfo) => void
  ): UseMutationResult<FullSectionInfo, AxiosError<ApiError>, SdkSetConfigParam & { sectionId:string, data: SectionUpdate, queryParams: {storeId: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sectionId:string, data: SectionUpdate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await SectionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSection_BySectionId(input.sectionId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SectionAdmin.Section_BySectionId],
    mutationFn,
    ...options
  })
}
  
  

export const useSectionAdminApi_DeleteSectionPurgeExpired = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {storeId: string | null} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams: {storeId: string | null} }) => {
      const response = 
            (await SectionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteSectionPurgeExpired(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SectionAdmin.SectionPurgeExpired],
    mutationFn,
    ...options
  })
}
  
  
  