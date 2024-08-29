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
import { DlcAdminApi } from "../DlcAdminApi.js"

import { CreateDependencyLinkRequest } from '../../generated-definitions/CreateDependencyLinkRequest.js'
import { RetrieveDependencyLinkResponse } from '../../generated-definitions/RetrieveDependencyLinkResponse.js'


export enum Key_DlcAdmin {
  DlcLink = 'Buildinfo.DlcAdmin.DlcLink',
Link_ByBuildId = 'Buildinfo.DlcAdmin.Link_ByBuildId',

}

  

export const useDlcAdminApi_UpdateDlcLink = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDependencyLinkRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateDependencyLinkRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateDependencyLinkRequest }) => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDlcLink(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DlcAdmin.DlcLink],
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
 *    queryKey: [Key_DlcAdmin.Link_ByBuildId, input]
 * }
 * ```
 */
export const useDlcAdminApi_GetLink_ByBuildId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { buildId:string },
    options?: Omit<UseQueryOptions<RetrieveDependencyLinkResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RetrieveDependencyLinkResponse>) => void
  ): UseQueryResult<RetrieveDependencyLinkResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDlcAdminApi_GetLink_ByBuildId>[1]
  ) => async () => {
      const response = 
            (await DlcAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLink_ByBuildId(input.buildId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RetrieveDependencyLinkResponse, AxiosError<ApiError>>({
    queryKey: [Key_DlcAdmin.Link_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  