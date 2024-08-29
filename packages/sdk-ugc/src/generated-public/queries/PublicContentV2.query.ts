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
import { PublicContentV2Api } from "../PublicContentV2Api.js"

import { ContentDownloadResponseV2 } from '../../generated-definitions/ContentDownloadResponseV2.js'
import { ContentDownloadResponseV2Array } from '../../generated-definitions/ContentDownloadResponseV2Array.js'
import { ContentRequestV2 } from '../../generated-definitions/ContentRequestV2.js'
import { CreateContentResponseV2 } from '../../generated-definitions/CreateContentResponseV2.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GenerateContentUploadUrlRequest } from '../../generated-definitions/GenerateContentUploadUrlRequest.js'
import { GenerateContentUploadUrlResponse } from '../../generated-definitions/GenerateContentUploadUrlResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { PaginatedContentDownloadResponseV2 } from '../../generated-definitions/PaginatedContentDownloadResponseV2.js'
import { PublicGetContentBulkRequest } from '../../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequestV2 } from '../../generated-definitions/UpdateContentRequestV2.js'
import { UpdateContentResponseV2 } from '../../generated-definitions/UpdateContentResponseV2.js'
import { UpdateContentShareCodeRequest } from '../../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateFileLocationRequest } from '../../generated-definitions/UpdateFileLocationRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'


export enum Key_PublicContentV2 {
  Contents_v2 = 'Ugc.PublicContentV2.Contents_v2',
ContentBulk_v2 = 'Ugc.PublicContentV2.ContentBulk_v2',
Content_ByContentId_v2 = 'Ugc.PublicContentV2.Content_ByContentId_v2',
Contents_ByUserId_v2 = 'Ugc.PublicContentV2.Contents_ByUserId_v2',
ContentSharecodeBulk_v2 = 'Ugc.PublicContentV2.ContentSharecodeBulk_v2',
Contents_ByChannelId_v2 = 'Ugc.PublicContentV2.Contents_ByChannelId_v2',
ContentSharecode_ByShareCode_v2 = 'Ugc.PublicContentV2.ContentSharecode_ByShareCode_v2',
Content_ByUserId_ByChannelId_v2 = 'Ugc.PublicContentV2.Content_ByUserId_ByChannelId_v2',
Screenshot_ByUserId_ByContentId_v2 = 'Ugc.PublicContentV2.Screenshot_ByUserId_ByContentId_v2',
Content_ByUserId_ByChannelId_ByContentId_v2 = 'Ugc.PublicContentV2.Content_ByUserId_ByChannelId_ByContentId_v2',
Screenshot_ByUserId_ByContentId_ByScreenshotId_v2 = 'Ugc.PublicContentV2.Screenshot_ByUserId_ByContentId_ByScreenshotId_v2',
Sharecode_ByUserId_ByChannelId_ByContentId_v2 = 'Ugc.PublicContentV2.Sharecode_ByUserId_ByChannelId_ByContentId_v2',
UploadUrl_ByUserId_ByChannelId_ByContentId_v2 = 'Ugc.PublicContentV2.UploadUrl_ByUserId_ByChannelId_ByContentId_v2',
ContentSharecode_ByUserId_ByChannelId_ByShareCode_v2 = 'Ugc.PublicContentV2.ContentSharecode_ByUserId_ByChannelId_ByShareCode_v2',
FileLocation_ByUserId_ByChannelId_ByContentId_v2 = 'Ugc.PublicContentV2.FileLocation_ByUserId_ByChannelId_ByContentId_v2',
ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2 = 'Ugc.PublicContentV2.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentV2.Contents_v2, input]
 * }
 * ```
 */
export const usePublicContentV2Api_GetContents_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {isOfficial?: boolean | null, limit?: number, name?: string | null, offset?: number, sortBy?: string | null, subType?: string | null, tags?: string[], type?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponseV2>) => void
  ): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentV2Api_GetContents_v2>[1]
  ) => async () => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents_v2(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentV2.Contents_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicContentV2Api_CreateContentBulk_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ContentDownloadResponseV2Array, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGetContentBulkRequest }>, 'mutationKey'>,
    callback?: (data: ContentDownloadResponseV2Array) => void
  ): UseMutationResult<ContentDownloadResponseV2Array, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGetContentBulkRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicGetContentBulkRequest }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContentBulk_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.ContentBulk_v2],
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
 *    queryKey: [Key_PublicContentV2.Content_ByContentId_v2, input]
 * }
 * ```
 */
export const usePublicContentV2Api_GetContent_ByContentId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { contentId:string },
    options?: Omit<UseQueryOptions<ContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponseV2>) => void
  ): UseQueryResult<ContentDownloadResponseV2, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentV2Api_GetContent_ByContentId_v2>[1]
  ) => async () => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContent_ByContentId_v2(input.contentId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentV2.Content_ByContentId_v2, input],
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
 *    queryKey: [Key_PublicContentV2.Contents_ByUserId_v2, input]
 * }
 * ```
 */
export const usePublicContentV2Api_GetContents_ByUserId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number, sortBy?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponseV2>) => void
  ): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentV2Api_GetContents_ByUserId_v2>[1]
  ) => async () => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents_ByUserId_v2(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentV2.Contents_ByUserId_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicContentV2Api_CreateContentSharecodeBulk_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ContentDownloadResponseV2Array, AxiosError<ApiError>, SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }>, 'mutationKey'>,
    callback?: (data: ContentDownloadResponseV2Array) => void
  ): UseMutationResult<ContentDownloadResponseV2Array, AxiosError<ApiError>, SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContentSharecodeBulk_v2(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.ContentSharecodeBulk_v2],
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
 *    queryKey: [Key_PublicContentV2.Contents_ByChannelId_v2, input]
 * }
 * ```
 */
export const usePublicContentV2Api_GetContents_ByChannelId_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { channelId:string,  queryParams?: {limit?: number, name?: string | null, offset?: number, sortBy?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponseV2>) => void
  ): UseQueryResult<PaginatedContentDownloadResponseV2, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentV2Api_GetContents_ByChannelId_v2>[1]
  ) => async () => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents_ByChannelId_v2(input.channelId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentV2.Contents_ByChannelId_v2, input],
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
 *    queryKey: [Key_PublicContentV2.ContentSharecode_ByShareCode_v2, input]
 * }
 * ```
 */
export const usePublicContentV2Api_GetContentSharecode_ByShareCode_v2 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { shareCode:string },
    options?: Omit<UseQueryOptions<ContentDownloadResponseV2, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponseV2>) => void
  ): UseQueryResult<ContentDownloadResponseV2, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentV2Api_GetContentSharecode_ByShareCode_v2>[1]
  ) => async () => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContentSharecode_ByShareCode_v2(input.shareCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponseV2, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentV2.ContentSharecode_ByShareCode_v2, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicContentV2Api_CreateContent_ByUserId_ByChannelId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: ContentRequestV2 }>, 'mutationKey'>,
    callback?: (data: CreateContentResponseV2) => void
  ): UseMutationResult<CreateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: ContentRequestV2 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, data: ContentRequestV2 }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContent_ByUserId_ByChannelId_v2(input.userId, input.channelId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.Content_ByUserId_ByChannelId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_CreateScreenshot_ByUserId_ByContentId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: CreateScreenshotRequest }>, 'mutationKey'>,
    callback?: (data: CreateScreenshotResponse) => void
  ): UseMutationResult<CreateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: CreateScreenshotRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, contentId:string, data: CreateScreenshotRequest }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createScreenshot_ByUserId_ByContentId_v2(input.userId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.Screenshot_ByUserId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_UpdateScreenshot_ByUserId_ByContentId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: UpdateScreenshotRequest }>, 'mutationKey'>,
    callback?: (data: UpdateScreenshotResponse) => void
  ): UseMutationResult<UpdateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: UpdateScreenshotRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, contentId:string, data: UpdateScreenshotRequest }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateScreenshot_ByUserId_ByContentId_v2(input.userId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.Screenshot_ByUserId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_DeleteContent_ByUserId_ByChannelId_ByContentId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteContent_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.Content_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_PatchContent_ByUserId_ByChannelId_ByContentId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentRequestV2 }>, 'mutationKey'>,
    callback?: (data: UpdateContentResponseV2) => void
  ): UseMutationResult<UpdateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentRequestV2 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentRequestV2 }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchContent_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.Content_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_DeleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, screenshotId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, screenshotId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, contentId:string, screenshotId:string }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteScreenshot_ByUserId_ByContentId_ByScreenshotId_v2(input.userId, input.contentId, input.screenshotId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.Screenshot_ByUserId_ByContentId_ByScreenshotId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_PatchSharecode_ByUserId_ByChannelId_ByContentId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentShareCodeRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponseV2) => void
  ): UseMutationResult<CreateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentShareCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentShareCodeRequest }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchSharecode_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.Sharecode_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_PatchUploadUrl_ByUserId_ByChannelId_ByContentId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GenerateContentUploadUrlResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: GenerateContentUploadUrlRequest }>, 'mutationKey'>,
    callback?: (data: GenerateContentUploadUrlResponse) => void
  ): UseMutationResult<GenerateContentUploadUrlResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: GenerateContentUploadUrlRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: GenerateContentUploadUrlRequest }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchUploadUrl_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.UploadUrl_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_DeleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteContentSharecode_ByUserId_ByChannelId_ByShareCode_v2(input.userId, input.channelId, input.shareCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.ContentSharecode_ByUserId_ByChannelId_ByShareCode_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_PatchFileLocation_ByUserId_ByChannelId_ByContentId_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateFileLocationRequest }>, 'mutationKey'>,
    callback?: (data: UpdateContentResponseV2) => void
  ): UseMutationResult<UpdateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateFileLocationRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateFileLocationRequest }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchFileLocation_ByUserId_ByChannelId_ByContentId_v2(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.FileLocation_ByUserId_ByChannelId_ByContentId_v2],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentV2Api_UpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: UpdateContentRequestV2 }>, 'mutationKey'>,
    callback?: (data: CreateContentResponseV2) => void
  ): UseMutationResult<CreateContentResponseV2, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: UpdateContentRequestV2 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: UpdateContentRequestV2 }) => {
      const response = 
            (await PublicContentV2Api(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2(input.userId, input.channelId, input.shareCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentV2.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode_v2],
    mutationFn,
    ...options
  })
}
  
  
  