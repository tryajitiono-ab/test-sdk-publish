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
import { CategoryAdminApi } from "../CategoryAdminApi.js"

import { BasicCategoryInfoArray } from '../../generated-definitions/BasicCategoryInfoArray.js'
import { CategoryCreate } from '../../generated-definitions/CategoryCreate.js'
import { CategoryUpdate } from '../../generated-definitions/CategoryUpdate.js'
import { FullCategoryInfo } from '../../generated-definitions/FullCategoryInfo.js'
import { FullCategoryInfoArray } from '../../generated-definitions/FullCategoryInfoArray.js'


export enum Key_CategoryAdmin {
  Categories = 'Platform.CategoryAdmin.Categories',
Category = 'Platform.CategoryAdmin.Category',
CategoriesBasic = 'Platform.CategoryAdmin.CategoriesBasic',
Category_ByCategoryPath = 'Platform.CategoryAdmin.Category_ByCategoryPath',
Children_ByCategoryPath = 'Platform.CategoryAdmin.Children_ByCategoryPath',
Descendants_ByCategoryPath = 'Platform.CategoryAdmin.Descendants_ByCategoryPath',

}

  

export const useCategoryAdminApi_GetCategories = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullCategoryInfoArray>) => void
  ): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCategoryAdminApi_GetCategories>[1]
  ) => async () => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCategories(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Categories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCategoryAdminApi_CreateCategory = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullCategoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CategoryCreate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullCategoryInfo) => void
  ): UseMutationResult<FullCategoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CategoryCreate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CategoryCreate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createCategory(input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category],
    mutationFn,
    ...options
  })
}
  
  

export const useCategoryAdminApi_GetCategoriesBasic = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<BasicCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BasicCategoryInfoArray>) => void
  ): UseQueryResult<BasicCategoryInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCategoryAdminApi_GetCategoriesBasic>[1]
  ) => async () => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCategoriesBasic(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BasicCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.CategoriesBasic, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCategoryAdminApi_DeleteCategory_ByCategoryPath = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullCategoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { categoryPath:string,  queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullCategoryInfo) => void
  ): UseMutationResult<FullCategoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { categoryPath:string,  queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { categoryPath:string,  queryParams: {storeId: string | null} }) => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteCategory_ByCategoryPath(input.categoryPath, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category_ByCategoryPath],
    mutationFn,
    ...options
  })
}
  
  

export const useCategoryAdminApi_GetCategory_ByCategoryPath = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { categoryPath:string,  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullCategoryInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullCategoryInfo>) => void
  ): UseQueryResult<FullCategoryInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCategoryAdminApi_GetCategory_ByCategoryPath>[1]
  ) => async () => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCategory_ByCategoryPath(input.categoryPath, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullCategoryInfo, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Category_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCategoryAdminApi_UpdateCategory_ByCategoryPath = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FullCategoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { categoryPath:string, data: CategoryUpdate, queryParams: {storeId: string | null} }>, 'mutationKey'>,
    callback?: (data: FullCategoryInfo) => void
  ): UseMutationResult<FullCategoryInfo, AxiosError<ApiError>, SdkSetConfigParam & { categoryPath:string, data: CategoryUpdate, queryParams: {storeId: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { categoryPath:string, data: CategoryUpdate, queryParams: {storeId: string | null} }) => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCategory_ByCategoryPath(input.categoryPath, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CategoryAdmin.Category_ByCategoryPath],
    mutationFn,
    ...options
  })
}
  
  

export const useCategoryAdminApi_GetChildren_ByCategoryPath = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { categoryPath:string,  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullCategoryInfoArray>) => void
  ): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCategoryAdminApi_GetChildren_ByCategoryPath>[1]
  ) => async () => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getChildren_ByCategoryPath(input.categoryPath, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Children_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCategoryAdminApi_GetDescendants_ByCategoryPath = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { categoryPath:string,  queryParams?: {storeId?: string | null} },
    options?: Omit<UseQueryOptions<FullCategoryInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FullCategoryInfoArray>) => void
  ): UseQueryResult<FullCategoryInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCategoryAdminApi_GetDescendants_ByCategoryPath>[1]
  ) => async () => {
      const response = 
            (await CategoryAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDescendants_ByCategoryPath(input.categoryPath, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FullCategoryInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CategoryAdmin.Descendants_ByCategoryPath, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  