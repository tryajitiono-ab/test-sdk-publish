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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { MultipartUploaderAdminApi } from "../MultipartUploaderAdminApi.js"

import { BlockManifest } from '../../generated-definitions/BlockManifest.js'
import { CommitMultipartUploadRequest } from '../../generated-definitions/CommitMultipartUploadRequest.js'
import { MultipartUploadSummary } from '../../generated-definitions/MultipartUploadSummary.js'
import { MultipartUploadedPart } from '../../generated-definitions/MultipartUploadedPart.js'
import { StartMultipartUploadRequest } from '../../generated-definitions/StartMultipartUploadRequest.js'


export enum Key_MultipartUploaderAdmin {
  BlockMultipart = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart',
BlockMultipart_v2 = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart_v2',
BlockMultipart_ByHash = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart_ByHash',
BlockMultipart_ByHash_v2 = 'Buildinfo.MultipartUploaderAdmin.BlockMultipart_ByHash_v2',
PartBlock_ByHash_v2 = 'Buildinfo.MultipartUploaderAdmin.PartBlock_ByHash_v2',

}

  

export const useMultipartUploaderAdminApi_CreateBlockMultipart = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }>, 'mutationKey'>,
    callback?: (data: MultipartUploadSummary) => void
  ): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: StartMultipartUploadRequest }) => {
      const response = 
            (await MultipartUploaderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createBlockMultipart(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart],
    mutationFn,
    ...options
  })
}
  
  

export const useMultipartUploaderAdminApi_CreateBlockMultipart_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }>, 'mutationKey'>,
    callback?: (data: MultipartUploadSummary) => void
  ): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { data: StartMultipartUploadRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: StartMultipartUploadRequest }) => {
      const response = 
            (await MultipartUploaderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createBlockMultipart_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useMultipartUploaderAdminApi_DeleteBlockMultipart_ByHash = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string }) => {
      const response = 
            (await MultipartUploaderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteBlockMultipart_ByHash(input.hash))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash],
    mutationFn,
    ...options
  })
}
  
  

export const useMultipartUploaderAdminApi_PatchBlockMultipart_ByHash = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, data: CommitMultipartUploadRequest }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, data: CommitMultipartUploadRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string, data: CommitMultipartUploadRequest }) => {
      const response = 
            (await MultipartUploaderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchBlockMultipart_ByHash(input.hash, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash],
    mutationFn,
    ...options
  })
}
  
  

export const useMultipartUploaderAdminApi_DeleteBlockMultipart_ByHash_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string }) => {
      const response = 
            (await MultipartUploaderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteBlockMultipart_ByHash_v2(input.hash))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useMultipartUploaderAdminApi_PatchBlockMultipart_ByHash_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }>, 'mutationKey'>,
    callback?: (data: BlockManifest) => void
  ): UseMutationResult<BlockManifest, AxiosError<ApiError>, SdkSetConfigParam & { hash:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string }) => {
      const response = 
            (await MultipartUploaderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchBlockMultipart_ByHash_v2(input.hash))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.BlockMultipart_ByHash_v2],
    mutationFn,
    ...options
  })
}
  
  

export const useMultipartUploaderAdminApi_CreatePartBlock_ByHash_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, data: MultipartUploadedPart }>, 'mutationKey'>,
    callback?: (data: MultipartUploadSummary) => void
  ): UseMutationResult<MultipartUploadSummary, AxiosError<ApiError>, SdkSetConfigParam & { hash:string, data: MultipartUploadedPart }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { hash:string, data: MultipartUploadedPart }) => {
      const response = 
            (await MultipartUploaderAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPartBlock_ByHash_v2(input.hash, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MultipartUploaderAdmin.PartBlock_ByHash_v2],
    mutationFn,
    ...options
  })
}
  
  
  