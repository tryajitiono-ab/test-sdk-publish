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
import { PublicApi } from "../PublicApi.js"

import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'


export enum Key_Public {
  Qos = 'Qosmanager.Public.Qos',
Qos_ByNS = 'Qosmanager.Public.Qos_ByNS',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Public.Qos, input]
 * }
 * ```
 */
export const usePublicApi_GetQos = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListServerResponse>) => void
  ): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicApi_GetQos>[1]
  ) => async () => {
      const response = 
            (await PublicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getQos())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Public.Qos, input],
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
 *    queryKey: [Key_Public.Qos_ByNS, input]
 * }
 * ```
 */
export const usePublicApi_GetQos_ByNS = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {status?: string | null} },
    options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListServerResponse>) => void
  ): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicApi_GetQos_ByNS>[1]
  ) => async () => {
      const response = 
            (await PublicApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getQos_ByNS(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Public.Qos_ByNS, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  