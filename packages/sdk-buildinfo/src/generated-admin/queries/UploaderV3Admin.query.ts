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
import { UploaderV3AdminApi } from "../UploaderV3AdminApi.js"

import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { BuildManifest } from '../../generated-definitions/BuildManifest.js'
import { DiffPatchRequest } from '../../generated-definitions/DiffPatchRequest.js'
import { DifferentialBuildManifest } from '../../generated-definitions/DifferentialBuildManifest.js'
import { DifferentialUploadSummary } from '../../generated-definitions/DifferentialUploadSummary.js'
import { FileDiffingStatus } from '../../generated-definitions/FileDiffingStatus.js'
import { PreCheckUploadRequest } from '../../generated-definitions/PreCheckUploadRequest.js'
import { UploadBuildManifest } from '../../generated-definitions/UploadBuildManifest.js'
import { UploadModeCheck } from '../../generated-definitions/UploadModeCheck.js'
import { UploadSummary } from '../../generated-definitions/UploadSummary.js'
import { ZsyncDiffRequest } from '../../generated-definitions/ZsyncDiffRequest.js'


export enum Key_UploaderV3Admin {
  DiffSend = 'Buildinfo.UploaderV3Admin.DiffSend',
PatchSend = 'Buildinfo.UploaderV3Admin.PatchSend',
ListenDiffStatu = 'Buildinfo.UploaderV3Admin.ListenDiffStatu',
ListenPatchStatu = 'Buildinfo.UploaderV3Admin.ListenPatchStatu',
Prezsyncupload_v3 = 'Buildinfo.UploaderV3Admin.Prezsyncupload_v3',
Startbuildupload_v3 = 'Buildinfo.UploaderV3Admin.Startbuildupload_v3',
Current_ByAppId_ByPlatformId_v3 = 'Buildinfo.UploaderV3Admin.Current_ByAppId_ByPlatformId_v3',
Startfileupload_ByUploaderId_v3 = 'Buildinfo.UploaderV3Admin.Startfileupload_ByUploaderId_v3',
Startzsyncfileupload_ByFileHash_v3 = 'Buildinfo.UploaderV3Admin.Startzsyncfileupload_ByFileHash_v3',
Uploadmode_ByAppId_ByPlatformId_v3 = 'Buildinfo.UploaderV3Admin.Uploadmode_ByAppId_ByPlatformId_v3',
Startbuildupload_BySourceBuildId_v3 = 'Buildinfo.UploaderV3Admin.Startbuildupload_BySourceBuildId_v3',
Commitfileupload_ByBuildId_ByHash_v3 = 'Buildinfo.UploaderV3Admin.Commitfileupload_ByBuildId_ByHash_v3',
Commitbuildmanifest_BySourceBuildId_v3 = 'Buildinfo.UploaderV3Admin.Commitbuildmanifest_BySourceBuildId_v3',
Commitmissingbytesfileupload_ByHash_v3 = 'Buildinfo.UploaderV3Admin.Commitmissingbytesfileupload_ByHash_v3',
Commitzsyncfileupload_ByBuildId_ByHash_v3 = 'Buildinfo.UploaderV3Admin.Commitzsyncfileupload_ByBuildId_ByHash_v3',
Version_ByAppId_ByVersion_ByPlatformId_v3 = 'Buildinfo.UploaderV3Admin.Version_ByAppId_ByVersion_ByPlatformId_v3',
Hash_ByBuildId_ByHash_ByBlockSize_v3 = 'Buildinfo.UploaderV3Admin.Hash_ByBuildId_ByHash_ByBlockSize_v3',
DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3 = 'Buildinfo.UploaderV3Admin.DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3',

}

  

export const useUploaderV3AdminApi_CreateDiffSend = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDiffSend(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.DiffSend],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreatePatchSend = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPatchSend(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.PatchSend],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreateListenDiffStatu = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>, 'mutationKey'>,
    callback?: (data: FileDiffingStatus) => void
  ): UseMutationResult<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createListenDiffStatu(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.ListenDiffStatu],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreateListenPatchStatu = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }>, 'mutationKey'>,
    callback?: (data: FileDiffingStatus) => void
  ): UseMutationResult<FileDiffingStatus, AxiosError<ApiError>, SdkSetConfigParam & { data: DiffPatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: DiffPatchRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createListenPatchStatu(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.ListenPatchStatu],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreatePrezsyncupload_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DifferentialUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: PreCheckUploadRequest }>, 'mutationKey'>,
    callback?: (data: DifferentialUploadSummary) => void
  ): UseMutationResult<DifferentialUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: PreCheckUploadRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PreCheckUploadRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPrezsyncupload_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Prezsyncupload_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreateStartbuildupload_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DifferentialBuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }>, 'mutationKey'>,
    callback?: (data: DifferentialBuildManifest) => void
  ): UseMutationResult<DifferentialBuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { data: UploadBuildManifest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: UploadBuildManifest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartbuildupload_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startbuildupload_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_GetCurrent_ByAppId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { appId:string, platformId:string },
    options?: Omit<UseQueryOptions<BuildManifest, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BuildManifest>) => void
  ): UseQueryResult<BuildManifest, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV3AdminApi_GetCurrent_ByAppId_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCurrent_ByAppId_ByPlatformId_v3(input.appId, input.platformId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BuildManifest, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.Current_ByAppId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreateStartfileupload_ByUploaderId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }>, 'mutationKey'>,
    callback?: (data: UploadSummary) => void
  ): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartfileupload_ByUploaderId_v3(input.uploaderId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startfileupload_ByUploaderId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreateStartzsyncfileupload_ByFileHash_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { fileHash:string, data: ZsyncDiffRequest }>, 'mutationKey'>,
    callback?: (data: UploadSummary) => void
  ): UseMutationResult<UploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { fileHash:string, data: ZsyncDiffRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { fileHash:string, data: ZsyncDiffRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartzsyncfileupload_ByFileHash_v3(input.fileHash, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startzsyncfileupload_ByFileHash_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_GetUploadmode_ByAppId_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { appId:string, platformId:string },
    options?: Omit<UseQueryOptions<UploadModeCheck, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<UploadModeCheck>) => void
  ): UseQueryResult<UploadModeCheck, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV3AdminApi_GetUploadmode_ByAppId_ByPlatformId_v3>[1]
  ) => async () => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getUploadmode_ByAppId_ByPlatformId_v3(input.appId, input.platformId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<UploadModeCheck, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.Uploadmode_ByAppId_ByPlatformId_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreateStartbuildupload_BySourceBuildId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<DifferentialBuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }>, 'mutationKey'>,
    callback?: (data: DifferentialBuildManifest) => void
  ): UseMutationResult<DifferentialBuildManifest, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId:string, data: UploadBuildManifest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStartbuildupload_BySourceBuildId_v3(input.sourceBuildId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Startbuildupload_BySourceBuildId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_PatchCommitfileupload_ByBuildId_ByHash_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string, hash:string }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchCommitfileupload_ByBuildId_ByHash_v3(input.buildId, input.hash))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitfileupload_ByBuildId_ByHash_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_CreateCommitbuildmanifest_BySourceBuildId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: BuildManifest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sourceBuildId:string, data: BuildManifest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { sourceBuildId:string, data: BuildManifest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createCommitbuildmanifest_BySourceBuildId_v3(input.sourceBuildId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitbuildmanifest_BySourceBuildId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_PatchCommitmissingbytesfileupload_ByHash_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, data: DiffPatchRequest }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, data: DiffPatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string, data: DiffPatchRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchCommitmissingbytesfileupload_ByHash_v3(input.hash, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitmissingbytesfileupload_ByHash_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_PatchCommitzsyncfileupload_ByBuildId_ByHash_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string, data: DiffPatchRequest }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string, data: DiffPatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string, hash:string, data: DiffPatchRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchCommitzsyncfileupload_ByBuildId_ByHash_v3(input.buildId, input.hash, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Commitzsyncfileupload_ByBuildId_ByHash_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_UpdateVersion_ByAppId_ByVersion_ByPlatformId_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string, platformId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { appId:string, version:string, platformId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { appId:string, version:string, platformId:string }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateVersion_ByAppId_ByVersion_ByPlatformId_v3(input.appId, input.version, input.platformId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Version_ByAppId_ByVersion_ByPlatformId_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_PatchHash_ByBuildId_ByHash_ByBlockSize_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string, blockSize:number, data: DiffPatchRequest }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { buildId:string, hash:string, blockSize:number, data: DiffPatchRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { buildId:string, hash:string, blockSize:number, data: DiffPatchRequest }) => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchHash_ByBuildId_ByHash_ByBlockSize_v3(input.buildId, input.hash, input.blockSize, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UploaderV3Admin.Hash_ByBuildId_ByHash_ByBlockSize_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useUploaderV3AdminApi_GetDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { sourceBuildId:string, destinationBuildId:string, destinationFilePath:string },
    options?: Omit<UseQueryOptions<FileDiffingStatus, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FileDiffingStatus>) => void
  ): UseQueryResult<FileDiffingStatus, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useUploaderV3AdminApi_GetDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3>[1]
  ) => async () => {
      const response = 
            (await UploaderV3AdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3(input.sourceBuildId, input.destinationBuildId, input.destinationFilePath))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FileDiffingStatus, AxiosError<ApiError>>({
    queryKey: [Key_UploaderV3Admin.DestinationBuildIdDiff_BySourceBuildId_ByDestinationBuildId_ByDestinationFilePath_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  