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
import { NamespaceApi } from "../NamespaceApi.js"

import { NamespaceInfoArray } from '../../generated-definitions/NamespaceInfoArray.js'
import { NamespacePublisherInfo } from '../../generated-definitions/NamespacePublisherInfo.js'
import { NamespaceSimpleInfo } from '../../generated-definitions/NamespaceSimpleInfo.js'


export enum Key_Namespace {
  Namespaces = 'Basic.Namespace.Namespaces',
Namespace_ByNamespace = 'Basic.Namespace.Namespace_ByNamespace',
Publisher = 'Basic.Namespace.Publisher',

}

  

export const useNamespaceApi_GetNamespaces = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {activeOnly?: boolean | null} },
    options?: Omit<UseQueryOptions<NamespaceInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceInfoArray>) => void
  ): UseQueryResult<NamespaceInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceApi_GetNamespaces>[1]
  ) => async () => {
      const response = 
            (await NamespaceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNamespaces(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Namespace.Namespaces, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNamespaceApi_GetNamespace_ByNamespace = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<NamespaceSimpleInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespaceSimpleInfo>) => void
  ): UseQueryResult<NamespaceSimpleInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceApi_GetNamespace_ByNamespace>[1]
  ) => async () => {
      const response = 
            (await NamespaceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getNamespace_ByNamespace())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespaceSimpleInfo, AxiosError<ApiError>>({
    queryKey: [Key_Namespace.Namespace_ByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useNamespaceApi_GetPublisher = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<NamespacePublisherInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<NamespacePublisherInfo>) => void
  ): UseQueryResult<NamespacePublisherInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useNamespaceApi_GetPublisher>[1]
  ) => async () => {
      const response = 
            (await NamespaceApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPublisher())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<NamespacePublisherInfo, AxiosError<ApiError>>({
    queryKey: [Key_Namespace.Publisher, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  