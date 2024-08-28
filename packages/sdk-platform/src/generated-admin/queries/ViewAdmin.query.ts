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
import { ViewAdminApi } from "../ViewAdminApi.js"

import { FullViewInfo } from '../../generated-definitions/FullViewInfo.js'
import { ListViewInfoArray } from '../../generated-definitions/ListViewInfoArray.js'
import { ViewCreate } from '../../generated-definitions/ViewCreate.js'
import { ViewUpdate } from '../../generated-definitions/ViewUpdate.js'


export enum Key_ViewAdmin {
  Views = 'Platform.ViewAdmin.Views',
View = 'Platform.ViewAdmin.View',
View_ByViewId = 'Platform.ViewAdmin.View_ByViewId',

}

  

export const useViewAdminApi_GetViews = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<ListViewInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListViewInfoArray>) => void
  ): UseQueryResult<ListViewInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useViewAdminApi_GetViews>[1]
  ) => async () => {
      const response = 
            (await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getViews(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListViewInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_ViewAdmin.Views, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useViewAdminApi_CreateView = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullViewInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ViewCreate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullViewInfo) => void
  ): UseMutationResult<FullViewInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: ViewCreate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ViewCreate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createView(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ViewAdmin.View],
    mutationFn,
    ...options
  })
}
  
  

export const useViewAdminApi_DeleteView_ByViewId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { viewId:string,  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { viewId:string,  queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { viewId:string,  queryParams: {storeId: string | null} }) => {
      const response = 
            (await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteView_ByViewId(input.viewId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ViewAdmin.View_ByViewId],
    mutationFn,
    ...options
  })
}
  
  

export const useViewAdminApi_GetView_ByViewId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { viewId:string,  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullViewInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullViewInfo>) => void
  ): UseQueryResult<FullViewInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useViewAdminApi_GetView_ByViewId>[1]
  ) => async () => {
      const response = 
            (await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getView_ByViewId(input.viewId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullViewInfo, AxiosError<ApiError>>({
    queryKey: [Key_ViewAdmin.View_ByViewId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useViewAdminApi_UpdateView_ByViewId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullViewInfo, AxiosError<ApiError>, SdkSetConfigParam & { viewId:string, data: ViewUpdate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullViewInfo) => void
  ): UseMutationResult<FullViewInfo, AxiosError<ApiError>, SdkSetConfigParam & { viewId:string, data: ViewUpdate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { viewId:string, data: ViewUpdate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await ViewAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateView_ByViewId(input.viewId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ViewAdmin.View_ByViewId],
    mutationFn,
    ...options
  })
}
  
  
  