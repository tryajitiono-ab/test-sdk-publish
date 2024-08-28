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
import { ReleaseNoteAdminApi } from "../ReleaseNoteAdminApi.js"

import { BinaryUpload } from '../../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { ReleaseNoteDto } from '../../generated-definitions/ReleaseNoteDto.js'
import { ReleaseNoteManifest } from '../../generated-definitions/ReleaseNoteManifest.js'


export enum Key_ReleaseNoteAdmin {
  ReleasenoteUploadCommit_ByHash = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteUploadCommit_ByHash',
ReleasenoteUploadStart_ByUploaderId = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteUploadStart_ByUploaderId',
ReleasenoteManifestSave_ByUploadMode = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteManifestSave_ByUploadMode',
ReleasenoteManifestGet_ByAppId_ByPlatformId = 'Buildinfo.ReleaseNoteAdmin.ReleasenoteManifestGet_ByAppId_ByPlatformId',

}

  

export const useReleaseNoteAdminApi_PatchReleasenoteUploadCommit_ByHash = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string }) => {
      const response = 
            (await ReleaseNoteAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchReleasenoteUploadCommit_ByHash(input.hash))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadCommit_ByHash],
    mutationFn,
    ...options
  })
}
  
  

export const useReleaseNoteAdminApi_CreateReleasenoteUploadStart_ByUploaderId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { uploaderId:string, data: BinaryUpload }) => {
      const response = 
            (await ReleaseNoteAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createReleasenoteUploadStart_ByUploaderId(input.uploaderId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteUploadStart_ByUploaderId],
    mutationFn,
    ...options
  })
}
  
  

export const useReleaseNoteAdminApi_CreateReleasenoteManifestSave_ByUploadMode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { uploadMode:string, data: ReleaseNoteManifest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { uploadMode:string, data: ReleaseNoteManifest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { uploadMode:string, data: ReleaseNoteManifest }) => {
      const response = 
            (await ReleaseNoteAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createReleasenoteManifestSave_ByUploadMode(input.uploadMode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestSave_ByUploadMode],
    mutationFn,
    ...options
  })
}
  
  

export const useReleaseNoteAdminApi_GetReleasenoteManifestGet_ByAppId_ByPlatformId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { appId:string, platformId:string,  queryParams?: {version?: string | null} },
    options?: Omit<UseQueryOptions<ReleaseNoteDto, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ReleaseNoteDto>) => void
  ): UseQueryResult<ReleaseNoteDto, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useReleaseNoteAdminApi_GetReleasenoteManifestGet_ByAppId_ByPlatformId>[1]
  ) => async () => {
      const response = 
            (await ReleaseNoteAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getReleasenoteManifestGet_ByAppId_ByPlatformId(input.appId, input.platformId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ReleaseNoteDto, AxiosError<ApiError>>({
    queryKey: [Key_ReleaseNoteAdmin.ReleasenoteManifestGet_ByAppId_ByPlatformId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  