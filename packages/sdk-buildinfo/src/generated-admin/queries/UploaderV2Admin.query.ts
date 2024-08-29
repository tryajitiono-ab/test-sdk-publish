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
import { UploaderV2AdminApi } from "../UploaderV2AdminApi.js"

import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { BuildIdVersionArray } from '../../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { UpdateBuildMetadataRequest } from '../../generated-definitions/UpdateBuildMetadataRequest.js'
import { UploadBuildManifest } from '../../generated-definitions/UploadBuildManifest.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'


export enum Key_UploaderV2Admin {
  BuildsByAppId_v2 = 'Buildinfo.UploaderV2Admin.BuildsByAppId_v2',
DlcByGameAppId_v2 = 'Buildinfo.UploaderV2Admin.DlcByGameAppId_v2',
Build_ByBuildId_v2 = 'Buildinfo.UploaderV2Admin.Build_ByBuildId_v2',
Startbuildupload_v2 = 'Buildinfo.UploaderV2Admin.Startbuildupload_v2',
DifftriggerStatus_v2 = 'Buildinfo.UploaderV2Admin.DifftriggerStatus_v2',
Commitbuildmanifest_v2 = 'Buildinfo.UploaderV2Admin.Commitbuildmanifest_v2',
Startdlcbuildupload_v2 = 'Buildinfo.UploaderV2Admin.Startdlcbuildupload_v2',
Commitdlcbuildmanifest_v2 = 'Buildinfo.UploaderV2Admin.Commitdlcbuildmanifest_v2',
DifftriggerStatu_ByValue_v2 = 'Buildinfo.UploaderV2Admin.DifftriggerStatu_ByValue_v2',
Startfileupload_ByUploaderId_v2 = 'Buildinfo.UploaderV2Admin.Startfileupload_ByUploaderId_v2',
Startzsyncfileupload_ByFileHash_v2 = 'Buildinfo.UploaderV2Admin.Startzsyncfileupload_ByFileHash_v2',
Startbuildupload_BySourceBuildId_v2 = 'Buildinfo.UploaderV2Admin.Startbuildupload_BySourceBuildId_v2',
Commitfileupload_ByBuildId_ByHash_v2 = 'Buildinfo.UploaderV2Admin.Commitfileupload_ByBuildId_ByHash_v2',
Startdlcbuildupload_BySourceBuildId_v2 = 'Buildinfo.UploaderV2Admin.Startdlcbuildupload_BySourceBuildId_v2',
Commitzsyncfileupload_ByBuildId_ByHash_v2 = 'Buildinfo.UploaderV2Admin.Commitzsyncfileupload_ByBuildId_ByHash_v2',
Version_ByAppId_ByVersion_ByPlatformId_v2 = 'Buildinfo.UploaderV2Admin.Version_ByAppId_ByVersion_ByPlatformId_v2',
DiffStart_BySourceBuildId_ByDestinationBuildId_v2 = 'Buildinfo.UploaderV2Admin.DiffStart_BySourceBuildId_ByDestinationBuildId_v2',
DiffCommit_BySourceBuildId_ByDestinationBuildId_v2 = 'Buildinfo.UploaderV2Admin.DiffCommit_BySourceBuildId_ByDestinationBuildId_v2',
Hash_ByBuildId_ByHash_ByBlockSize_v2 = 'Buildinfo.UploaderV2Admin.Hash_ByBuildId_ByHash_ByBlockSize_v2',
DiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2 = 'Buildinfo.UploaderV2Admin.DiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_UploaderV2Admin.BuildsByAppId_v2, input]
 * }
 * ```
 */
export const useUploaderV2AdminApi_GetBuildsByAppId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {appId: string | null, platformId: string | null} },
    options?: Omit<UseQueryOptions<BuildIdVersionArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BuildIdVersionArray>) => void
  ): UseQueryResult<BuildIdVersionArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV2AdminApi_GetBuildsByAppId_v2>[1]
  ) => async () => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBuildsByAppId_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BuildIdVersionArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.BuildsByAppId_v2, input],
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
 *    queryKey: [Key_UploaderV2Admin.DlcByGameAppId_v2, input]
 * }
 * ```
 */
export const useUploaderV2AdminApi_GetDlcByGameAppId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {appId: string | null, platformId: string | null} },
    options?: Omit<UseQueryOptions<BuildIdVersionArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BuildIdVersionArray>) => void
  ): UseQueryResult<BuildIdVersionArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV2AdminApi_GetDlcByGameAppId_v2>[1]
  ) => async () => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDlcByGameAppId_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BuildIdVersionArray, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.DlcByGameAppId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_DeleteBuild_ByBuildId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteBuild_ByBuildId_v2(input.buildId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Build_ByBuildId_v2],
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
 *    queryKey: [Key_UploaderV2Admin.Build_ByBuildId_v2, input]
 * }
 * ```
 */
export const useUploaderV2AdminApi_GetBuild_ByBuildId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { buildId:string },
    options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BuildManifest>) => void
  ): UseQueryResult<BuildManifest, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV2AdminApi_GetBuild_ByBuildId_v2>[1]
  ) => async () => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBuild_ByBuildId_v2(input.buildId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.Build_ByBuildId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_PatchBuild_ByBuildId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, data: UpdateBuildMetadataRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, data: UpdateBuildMetadataRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string, data: UpdateBuildMetadataRequest }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchBuild_ByBuildId_v2(input.buildId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Build_ByBuildId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateStartbuildupload_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }>, 'mutationKey'>,
    callback?: (data: BuildManifest) => void
  ): UseMutationResult<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UploadBuildManifest }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartbuildupload_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startbuildupload_v2],
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
 *    queryKey: [Key_UploaderV2Admin.DifftriggerStatus_v2, input]
 * }
 * ```
 */
export const useUploaderV2AdminApi_GetDifftriggerStatus_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV2AdminApi_GetDifftriggerStatus_v2>[1]
  ) => async () => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDifftriggerStatus_v2())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV2Admin.DifftriggerStatus_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateCommitbuildmanifest_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BuildManifest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BuildManifest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: BuildManifest }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createCommitbuildmanifest_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitbuildmanifest_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateStartdlcbuildupload_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }>, 'mutationKey'>,
    callback?: (data: BuildManifest) => void
  ): UseMutationResult<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UploadBuildManifest }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartdlcbuildupload_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startdlcbuildupload_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateCommitdlcbuildmanifest_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BuildManifest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: BuildManifest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: BuildManifest }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createCommitdlcbuildmanifest_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitdlcbuildmanifest_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_PatchDifftriggerStatu_ByValue_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { value:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { value:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { value:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchDifftriggerStatu_ByValue_v2(input.value))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DifftriggerStatu_ByValue_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateStartfileupload_ByUploaderId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }>, 'mutationKey'>,
    callback?: (data: UploadSummary) => void
  ): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartfileupload_ByUploaderId_v2(input.uploaderId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startfileupload_ByUploaderId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateStartzsyncfileupload_ByFileHash_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { fileHash:string, data: BinaryUpload }>, 'mutationKey'>,
    callback?: (data: UploadSummary) => void
  ): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { fileHash:string, data: BinaryUpload }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { fileHash:string, data: BinaryUpload }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartzsyncfileupload_ByFileHash_v2(input.fileHash, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startzsyncfileupload_ByFileHash_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateStartbuildupload_BySourceBuildId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }>, 'mutationKey'>,
    callback?: (data: BuildManifest) => void
  ): UseMutationResult<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartbuildupload_BySourceBuildId_v2(input.sourceBuildId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startbuildupload_BySourceBuildId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_PatchCommitfileupload_ByBuildId_ByHash_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string, hash:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchCommitfileupload_ByBuildId_ByHash_v2(input.buildId, input.hash))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitfileupload_ByBuildId_ByHash_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateStartdlcbuildupload_BySourceBuildId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }>, 'mutationKey'>,
    callback?: (data: BuildManifest) => void
  ): UseMutationResult<BuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartdlcbuildupload_BySourceBuildId_v2(input.sourceBuildId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Startdlcbuildupload_BySourceBuildId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_PatchCommitzsyncfileupload_ByBuildId_ByHash_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string, hash:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchCommitzsyncfileupload_ByBuildId_ByHash_v2(input.buildId, input.hash))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Commitzsyncfileupload_ByBuildId_ByHash_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_UpdateVersion_ByAppId_ByVersion_ByPlatformId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string, platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string, platformId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { appId:string, version:string, platformId:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateVersion_ByAppId_ByVersion_ByPlatformId_v2(input.appId, input.version, input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Version_ByAppId_ByVersion_ByPlatformId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateDiffStart_BySourceBuildId_ByDestinationBuildId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }>, 'mutationKey'>,
    callback?: (data: UploadSummary) => void
  ): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiffStart_BySourceBuildId_ByDestinationBuildId_v2(input.sourceBuildId, input.destinationBuildId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DiffStart_BySourceBuildId_ByDestinationBuildId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_PatchDiffCommit_BySourceBuildId_ByDestinationBuildId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchDiffCommit_BySourceBuildId_ByDestinationBuildId_v2(input.sourceBuildId, input.destinationBuildId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DiffCommit_BySourceBuildId_ByDestinationBuildId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_PatchHash_ByBuildId_ByHash_ByBlockSize_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string, blockSize:number }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string, blockSize:number }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string, hash:string, blockSize:number }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchHash_ByBuildId_ByHash_ByBlockSize_v2(input.buildId, input.hash, input.blockSize))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.Hash_ByBuildId_ByHash_ByBlockSize_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV2AdminApi_CreateDiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }>, 'mutationKey'>,
    callback?: (data: UploadSummary) => void
  ): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string }) => {
      const response = 
            (await UploaderV2AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2(input.sourceBuildId, input.destinationBuildId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV2Admin.DiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2],
    mutationFn,
    ...options
  })
}
  
  
  