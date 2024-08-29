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
import { PublicContentLegacyApi } from "../PublicContentLegacyApi.js"

import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../../generated-definitions/CreateContentRequest.js'
import { CreateContentResponse } from '../../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../../generated-definitions/GetContentPreviewResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { PublicCreateContentRequestS3 } from '../../generated-definitions/PublicCreateContentRequestS3.js'
import { PublicGetContentBulkRequest } from '../../generated-definitions/PublicGetContentBulkRequest.js'
import { UpdateContentRequest } from '../../generated-definitions/UpdateContentRequest.js'
import { UpdateContentShareCodeRequest } from '../../generated-definitions/UpdateContentShareCodeRequest.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'


export enum Key_PublicContentLegacy {
  Contents = 'Ugc.PublicContentLegacy.Contents',
ContentBulk = 'Ugc.PublicContentLegacy.ContentBulk',
Content_ByContentId = 'Ugc.PublicContentLegacy.Content_ByContentId',
Contents_ByUserId = 'Ugc.PublicContentLegacy.Contents_ByUserId',
ContentSharecodeBulk = 'Ugc.PublicContentLegacy.ContentSharecodeBulk',
Preview_ByContentId = 'Ugc.PublicContentLegacy.Preview_ByContentId',
Contents_ByChannelId = 'Ugc.PublicContentLegacy.Contents_ByChannelId',
ContentSharecode_ByShareCode = 'Ugc.PublicContentLegacy.ContentSharecode_ByShareCode',
Content_ByUserId_ByChannelId = 'Ugc.PublicContentLegacy.Content_ByUserId_ByChannelId',
ContentS3_ByUserId_ByChannelId = 'Ugc.PublicContentLegacy.ContentS3_ByUserId_ByChannelId',
Screenshot_ByUserId_ByContentId = 'Ugc.PublicContentLegacy.Screenshot_ByUserId_ByContentId',
Content_ByUserId_ByChannelId_ByContentId = 'Ugc.PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId',
ContentS3_ByUserId_ByChannelId_ByContentId = 'Ugc.PublicContentLegacy.ContentS3_ByUserId_ByChannelId_ByContentId',
Screenshot_ByUserId_ByContentId_ByScreenshotId = 'Ugc.PublicContentLegacy.Screenshot_ByUserId_ByContentId_ByScreenshotId',
Sharecode_ByUserId_ByChannelId_ByContentId = 'Ugc.PublicContentLegacy.Sharecode_ByUserId_ByChannelId_ByContentId',
ContentSharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.PublicContentLegacy.ContentSharecode_ByUserId_ByChannelId_ByShareCode',
ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.PublicContentLegacy.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_PublicContentLegacy.Contents, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContents = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {creator?: string | null, ishidden?: string | null, isofficial?: string | null, limit?: number, name?: string | null, offset?: number, orderby?: string | null, sortby?: string | null, subtype?: string | null, tags?: string[], type?: string | null, userId?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentLegacyApi_GetContents>[1]
  ) => async () => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Contents, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_CreateContentBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ContentDownloadResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGetContentBulkRequest }>, 'mutationKey'>,
    callback?: (data: ContentDownloadResponseArray) => void
  ): UseMutationResult<ContentDownloadResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: PublicGetContentBulkRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: PublicGetContentBulkRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContentBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentBulk],
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
 *    queryKey: [Key_PublicContentLegacy.Content_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContent_ByContentId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { contentId:string },
    options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
  ): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentLegacyApi_GetContent_ByContentId>[1]
  ) => async () => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContent_ByContentId(input.contentId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Content_ByContentId, input],
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
 *    queryKey: [Key_PublicContentLegacy.Contents_ByUserId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContents_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentLegacyApi_GetContents_ByUserId>[1]
  ) => async () => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Contents_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_CreateContentSharecodeBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ContentDownloadResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }>, 'mutationKey'>,
    callback?: (data: ContentDownloadResponseArray) => void
  ): UseMutationResult<ContentDownloadResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContentSharecodeBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentSharecodeBulk],
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
 *    queryKey: [Key_PublicContentLegacy.Preview_ByContentId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetPreview_ByContentId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { contentId:string },
    options?: Omit<UseQueryOptions<GetContentPreviewResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetContentPreviewResponse>) => void
  ): UseQueryResult<GetContentPreviewResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentLegacyApi_GetPreview_ByContentId>[1]
  ) => async () => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPreview_ByContentId(input.contentId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetContentPreviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Preview_ByContentId, input],
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
 *    queryKey: [Key_PublicContentLegacy.Contents_ByChannelId, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContents_ByChannelId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { channelId:string,  queryParams?: {creator?: string | null, ishidden?: string | null, isofficial?: string | null, limit?: number, name?: string | null, offset?: number, orderby?: string | null, sortby?: string | null, subtype?: string | null, tags?: string[], type?: string | null, userId?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentLegacyApi_GetContents_ByChannelId>[1]
  ) => async () => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents_ByChannelId(input.channelId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.Contents_ByChannelId, input],
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
 *    queryKey: [Key_PublicContentLegacy.ContentSharecode_ByShareCode, input]
 * }
 * ```
 */
export const usePublicContentLegacyApi_GetContentSharecode_ByShareCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { shareCode:string },
    options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
  ): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicContentLegacyApi_GetContentSharecode_ByShareCode>[1]
  ) => async () => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContentSharecode_ByShareCode(input.shareCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicContentLegacy.ContentSharecode_ByShareCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_CreateContent_ByUserId_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: CreateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: CreateContentRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, data: CreateContentRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContent_ByUserId_ByChannelId(input.userId, input.channelId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_CreateContentS3_ByUserId_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: PublicCreateContentRequestS3 }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, data: PublicCreateContentRequestS3 }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, data: PublicCreateContentRequestS3 }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContentS3_ByUserId_ByChannelId(input.userId, input.channelId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentS3_ByUserId_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_CreateScreenshot_ByUserId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: CreateScreenshotRequest }>, 'mutationKey'>,
    callback?: (data: CreateScreenshotResponse) => void
  ): UseMutationResult<CreateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: CreateScreenshotRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, contentId:string, data: CreateScreenshotRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createScreenshot_ByUserId_ByContentId(input.userId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_UpdateScreenshot_ByUserId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: UpdateScreenshotRequest }>, 'mutationKey'>,
    callback?: (data: UpdateScreenshotResponse) => void
  ): UseMutationResult<UpdateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: UpdateScreenshotRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, contentId:string, data: UpdateScreenshotRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateScreenshot_ByUserId_ByContentId(input.userId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_DeleteContent_ByUserId_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_UpdateContent_ByUserId_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: CreateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: CreateContentRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: CreateContentRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_UpdateContentS3_ByUserId_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContentS3_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentS3_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_DeleteScreenshot_ByUserId_ByContentId_ByScreenshotId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, screenshotId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, screenshotId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, contentId:string, screenshotId:string }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteScreenshot_ByUserId_ByContentId_ByScreenshotId(input.userId, input.contentId, input.screenshotId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Screenshot_ByUserId_ByContentId_ByScreenshotId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_PatchSharecode_ByUserId_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentShareCodeRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentShareCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: UpdateContentShareCodeRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchSharecode_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.Sharecode_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_DeleteContentSharecode_ByUserId_ByChannelId_ByShareCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentSharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
  
  

export const usePublicContentLegacyApi_UpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: UpdateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: UpdateContentRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: UpdateContentRequest }) => {
      const response = 
            (await PublicContentLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicContentLegacy.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
  
  
  