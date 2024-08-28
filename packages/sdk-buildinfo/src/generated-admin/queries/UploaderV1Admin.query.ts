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
import { UploaderV1AdminApi } from "../UploaderV1AdminApi.js"

import { BasicBuildManifestArray } from '../../generated-definitions/BasicBuildManifestArray.js'
import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockData } from '../../generated-definitions/BlockData.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { BuildDeletionDataArray } from '../../generated-definitions/BuildDeletionDataArray.js'
import { BuildIdManifest } from '../../generated-definitions/BuildIdManifest.js'
import { BuildIdVersionArray } from '../../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'


export enum Key_UploaderV1Admin {
  BuildsByAppId = 'Buildinfo.UploaderV1Admin.BuildsByAppId',
Build_ByBuildId = 'Buildinfo.UploaderV1Admin.Build_ByBuildId',
Startchunkupload = 'Buildinfo.UploaderV1Admin.Startchunkupload',
BuildsByNamespace = 'Buildinfo.UploaderV1Admin.BuildsByNamespace',
Commitbuildmanifest = 'Buildinfo.UploaderV1Admin.Commitbuildmanifest',
BuildsdeletionByAppId = 'Buildinfo.UploaderV1Admin.BuildsdeletionByAppId',
Setcurrentbuild_ByBuildId = 'Buildinfo.UploaderV1Admin.Setcurrentbuild_ByBuildId',
Retrievechunkbyhash_ByHash = 'Buildinfo.UploaderV1Admin.Retrievechunkbyhash_ByHash',
Retry_ByBuildId = 'Buildinfo.UploaderV1Admin.Retry_ByBuildId',
Cancel_ByBuildId = 'Buildinfo.UploaderV1Admin.Cancel_ByBuildId',
Setcurrentbuild_ByAppId_ByVersion = 'Buildinfo.UploaderV1Admin.Setcurrentbuild_ByAppId_ByVersion',
Startbuildupload_ByAppId_ByVersion = 'Buildinfo.UploaderV1Admin.Startbuildupload_ByAppId_ByVersion',
Uuid_ByHash_ByUuid_ByOffset = 'Buildinfo.UploaderV1Admin.Uuid_ByHash_ByUuid_ByOffset',
Offset_ByHash_ByUuid_ByOffset_ByBlockSize = 'Buildinfo.UploaderV1Admin.Offset_ByHash_ByUuid_ByOffset_ByBlockSize',

}

  

export const useUploaderV1AdminApi_GetBuildsByAppId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {appId: string | null} },
    options?: Omit<UseQueryOptions<BuildIdVersionArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BuildIdVersionArray>) => void
  ): UseQueryResult<BuildIdVersionArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV1AdminApi_GetBuildsByAppId>[1]
  ) => async () => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBuildsByAppId(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BuildIdVersionArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.BuildsByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_DeleteBuild_ByBuildId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteBuild_ByBuildId(input.buildId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Build_ByBuildId],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_GetBuild_ByBuildId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { buildId:string },
    options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BuildManifest>) => void
  ): UseQueryResult<BuildManifest, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV1AdminApi_GetBuild_ByBuildId>[1]
  ) => async () => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBuild_ByBuildId(input.buildId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.Build_ByBuildId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_CreateStartchunkupload = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: BinaryUpload }>, 'mutationKey'>,
    callback?: (data: UploadSummary) => void
  ): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: BinaryUpload }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BinaryUpload }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartchunkupload(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Startchunkupload],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_GetBuildsByNamespace = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<BasicBuildManifestArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BasicBuildManifestArray>) => void
  ): UseQueryResult<BasicBuildManifestArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV1AdminApi_GetBuildsByNamespace>[1]
  ) => async () => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBuildsByNamespace())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BasicBuildManifestArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.BuildsByNamespace, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_CreateCommitbuildmanifest = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BuildManifest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BuildManifest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BuildManifest }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createCommitbuildmanifest(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Commitbuildmanifest],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_GetBuildsdeletionByAppId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {appId: string | null, deletionStatus?: number, platformId?: string | null} },
    options?: Omit<UseQueryOptions<BuildDeletionDataArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BuildDeletionDataArray>) => void
  ): UseQueryResult<BuildDeletionDataArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV1AdminApi_GetBuildsdeletionByAppId>[1]
  ) => async () => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBuildsdeletionByAppId(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BuildDeletionDataArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.BuildsdeletionByAppId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_UpdateSetcurrentbuild_ByBuildId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string,  queryParams?: {sendNotification?: boolean | null} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string,  queryParams?: {sendNotification?: boolean | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string,  queryParams?: {sendNotification?: boolean | null} }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSetcurrentbuild_ByBuildId(input.buildId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Setcurrentbuild_ByBuildId],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_GetRetrievechunkbyhash_ByHash = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { hash:string },
    options?: Omit<UseQueryOptions<BlockData, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BlockData>) => void
  ): UseQueryResult<BlockData, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV1AdminApi_GetRetrievechunkbyhash_ByHash>[1]
  ) => async () => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getRetrievechunkbyhash_ByHash(input.hash))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BlockData, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV1Admin.Retrievechunkbyhash_ByHash, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_UpdateRetry_ByBuildId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRetry_ByBuildId(input.buildId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Retry_ByBuildId],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_DeleteCancel_ByBuildId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteCancel_ByBuildId(input.buildId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Cancel_ByBuildId],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_UpdateSetcurrentbuild_ByAppId_ByVersion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { appId:string, version:string }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSetcurrentbuild_ByAppId_ByVersion(input.appId, input.version))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Setcurrentbuild_ByAppId_ByVersion],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_CreateStartbuildupload_ByAppId_ByVersion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BuildIdManifest, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string }>, 'mutationKey'>,
    callback?: (data: BuildIdManifest) => void
  ): UseMutationResult<BuildIdManifest, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { appId:string, version:string }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartbuildupload_ByAppId_ByVersion(input.appId, input.version))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Startbuildupload_ByAppId_ByVersion],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_CreateUuid_ByHash_ByUuid_ByOffset = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, uuid:string, offset:number }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, uuid:string, offset:number }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string, uuid:string, offset:number }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createUuid_ByHash_ByUuid_ByOffset(input.hash, input.uuid, input.offset))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Uuid_ByHash_ByUuid_ByOffset],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV1AdminApi_CreateOffset_ByHash_ByUuid_ByOffset_ByBlockSize = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, uuid:string, offset:number, blockSize:number }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, uuid:string, offset:number, blockSize:number }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string, uuid:string, offset:number, blockSize:number }) => {
      const response = 
            (await UploaderV1AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createOffset_ByHash_ByUuid_ByOffset_ByBlockSize(input.hash, input.uuid, input.offset, input.blockSize))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV1Admin.Offset_ByHash_ByUuid_ByOffset_ByBlockSize],
    mutationFn,
    ...options
  })
}
  
  
  