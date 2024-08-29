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
import { AmsQoSAdminApi } from "../AmsQoSAdminApi.js"

import { QoSEndpointResponse } from '../../generated-definitions/QoSEndpointResponse.js'
import { UpdateServerRequest } from '../../generated-definitions/UpdateServerRequest.js'


export enum Key_AmsQoSAdmin {
  Qos = 'Ams.AmsQoSAdmin.Qos',
Qo_ByRegion = 'Ams.AmsQoSAdmin.Qo_ByRegion',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_AmsQoSAdmin.Qos, input]
 * }
 * ```
 */
export const useAmsQoSAdminApi_GetQos = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {status?: string | null} },
    options?: Omit<UseQueryOptions<QoSEndpointResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<QoSEndpointResponse>) => void
  ): UseQueryResult<QoSEndpointResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useAmsQoSAdminApi_GetQos>[1]
  ) => async () => {
      const response = 
            (await AmsQoSAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getQos(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<QoSEndpointResponse, AxiosError<ApiError>>({
    queryKey: [Key_AmsQoSAdmin.Qos, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useAmsQoSAdminApi_PatchQo_ByRegion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string, data: UpdateServerRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string, data: UpdateServerRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { region:string, data: UpdateServerRequest }) => {
      const response = 
            (await AmsQoSAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchQo_ByRegion(input.region, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_AmsQoSAdmin.Qo_ByRegion],
    mutationFn,
    ...options
  })
}
  
  
  