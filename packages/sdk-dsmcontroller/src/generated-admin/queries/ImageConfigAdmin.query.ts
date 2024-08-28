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
import { ImageConfigAdminApi } from "../ImageConfigAdminApi.js"

import { CreateImagePatchRequest } from '../../generated-definitions/CreateImagePatchRequest.js'
import { CreateImageRequest } from '../../generated-definitions/CreateImageRequest.js'
import { CreateRepositoryRequest } from '../../generated-definitions/CreateRepositoryRequest.js'
import { GetImageDetailResponse } from '../../generated-definitions/GetImageDetailResponse.js'
import { GetImageLimitResponse } from '../../generated-definitions/GetImageLimitResponse.js'
import { GetImagePatchDetailResponse } from '../../generated-definitions/GetImagePatchDetailResponse.js'
import { ImageRecordUpdate } from '../../generated-definitions/ImageRecordUpdate.js'
import { ListImagePatchesResponse } from '../../generated-definitions/ListImagePatchesResponse.js'
import { ListImageResponse } from '../../generated-definitions/ListImageResponse.js'
import { RepositoryRecord } from '../../generated-definitions/RepositoryRecord.js'


export enum Key_ImageConfigAdmin {
  Image = 'Dsmcontroller.ImageConfigAdmin.Image',
Repository = 'Dsmcontroller.ImageConfigAdmin.Repository',
ImagePatche = 'Dsmcontroller.ImageConfigAdmin.ImagePatche',
Images = 'Dsmcontroller.ImageConfigAdmin.Images',
ImagesLimit = 'Dsmcontroller.ImageConfigAdmin.ImagesLimit',
ImageVersion_ByVersion = 'Dsmcontroller.ImageConfigAdmin.ImageVersion_ByVersion',
PatchesImages_ByVersion = 'Dsmcontroller.ImageConfigAdmin.PatchesImages_ByVersion',
PatcheImage_ByVersion_ByVersionPatch = 'Dsmcontroller.ImageConfigAdmin.PatcheImage_ByVersion_ByVersionPatch',

}

  

export const useImageConfigAdminApi_CreateImage = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImageRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImageRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateImageRequest }) => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createImage(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}
  
  

export const useImageConfigAdminApi_UpdateImage = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ImageRecordUpdate }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ImageRecordUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ImageRecordUpdate }) => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateImage(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}
  
  

export const useImageConfigAdminApi_CreateRepository = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateRepositoryRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateRepositoryRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateRepositoryRequest }) => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRepository(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Repository],
    mutationFn,
    ...options
  })
}
  
  

export const useImageConfigAdminApi_CreateImagePatche = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImagePatchRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateImagePatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateImagePatchRequest }) => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createImagePatche(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.ImagePatche],
    mutationFn,
    ...options
  })
}
  
  

export const useImageConfigAdminApi_DeleteImage = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {imageURI: string | null, version: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {imageURI: string | null, version: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams: {imageURI: string | null, version: string | null} }) => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteImage(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.Image],
    mutationFn,
    ...options
  })
}
  
  

export const useImageConfigAdminApi_GetImages = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {count: number, offset: number, q?: string | null, sortBy?: 'createdAt' | 'updatedAt' | 'version', sortDirection?: 'asc' | 'desc'} },
    options?: Omit<UseQueryOptions<ListImageResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListImageResponse>) => void
  ): UseQueryResult<ListImageResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useImageConfigAdminApi_GetImages>[1]
  ) => async () => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getImages(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListImageResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.Images, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useImageConfigAdminApi_GetRepository = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<RepositoryRecord, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RepositoryRecord>) => void
  ): UseQueryResult<RepositoryRecord, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useImageConfigAdminApi_GetRepository>[1]
  ) => async () => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRepository())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RepositoryRecord, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.Repository, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useImageConfigAdminApi_GetImagesLimit = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<GetImageLimitResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetImageLimitResponse>) => void
  ): UseQueryResult<GetImageLimitResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useImageConfigAdminApi_GetImagesLimit>[1]
  ) => async () => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getImagesLimit())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetImageLimitResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.ImagesLimit, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useImageConfigAdminApi_DeleteImagePatche = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {imageURI: string | null, version: string | null, versionPatch: string | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & {  queryParams: {imageURI: string | null, version: string | null, versionPatch: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & {  queryParams: {imageURI: string | null, version: string | null, versionPatch: string | null} }) => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteImagePatche(input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ImageConfigAdmin.ImagePatche],
    mutationFn,
    ...options
  })
}
  
  

export const useImageConfigAdminApi_GetImageVersion_ByVersion = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { version:string },
    options?: Omit<UseQueryOptions<GetImageDetailResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetImageDetailResponse>) => void
  ): UseQueryResult<GetImageDetailResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useImageConfigAdminApi_GetImageVersion_ByVersion>[1]
  ) => async () => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getImageVersion_ByVersion(input.version))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetImageDetailResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.ImageVersion_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useImageConfigAdminApi_GetPatchesImages_ByVersion = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { version:string },
    options?: Omit<UseQueryOptions<ListImagePatchesResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListImagePatchesResponse>) => void
  ): UseQueryResult<ListImagePatchesResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useImageConfigAdminApi_GetPatchesImages_ByVersion>[1]
  ) => async () => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPatchesImages_ByVersion(input.version))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListImagePatchesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.PatchesImages_ByVersion, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useImageConfigAdminApi_GetPatcheImage_ByVersion_ByVersionPatch = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { version:string, versionPatch:string },
    options?: Omit<UseQueryOptions<GetImagePatchDetailResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetImagePatchDetailResponse>) => void
  ): UseQueryResult<GetImagePatchDetailResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useImageConfigAdminApi_GetPatcheImage_ByVersion_ByVersionPatch>[1]
  ) => async () => {
      const response = 
            (await ImageConfigAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPatcheImage_ByVersion_ByVersionPatch(input.version, input.versionPatch))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetImagePatchDetailResponse, AxiosError<ApiError>>({
    queryKey: [Key_ImageConfigAdmin.PatcheImage_ByVersion_ByVersionPatch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  