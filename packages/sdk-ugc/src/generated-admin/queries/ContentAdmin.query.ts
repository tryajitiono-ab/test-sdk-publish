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
import { ContentAdminApi } from "../ContentAdminApi.js"

import { AdminGetContentBulkRequest } from '../../generated-definitions/AdminGetContentBulkRequest.js'
import { AdminUpdateContentRequest } from '../../generated-definitions/AdminUpdateContentRequest.js'
import { ContentDownloadResponse } from '../../generated-definitions/ContentDownloadResponse.js'
import { ContentDownloadResponseArray } from '../../generated-definitions/ContentDownloadResponseArray.js'
import { CreateContentRequest } from '../../generated-definitions/CreateContentRequest.js'
import { CreateContentRequestS3 } from '../../generated-definitions/CreateContentRequestS3.js'
import { CreateContentResponse } from '../../generated-definitions/CreateContentResponse.js'
import { CreateScreenshotRequest } from '../../generated-definitions/CreateScreenshotRequest.js'
import { CreateScreenshotResponse } from '../../generated-definitions/CreateScreenshotResponse.js'
import { GetContentBulkByShareCodesRequest } from '../../generated-definitions/GetContentBulkByShareCodesRequest.js'
import { GetContentPreviewResponse } from '../../generated-definitions/GetContentPreviewResponse.js'
import { HideContentRequest } from '../../generated-definitions/HideContentRequest.js'
import { ListContentVersionsResponse } from '../../generated-definitions/ListContentVersionsResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'
import { UpdateScreenshotRequest } from '../../generated-definitions/UpdateScreenshotRequest.js'
import { UpdateScreenshotResponse } from '../../generated-definitions/UpdateScreenshotResponse.js'


export enum Key_ContentAdmin {
  Contents = 'Ugc.ContentAdmin.Contents',
ContentBulk = 'Ugc.ContentAdmin.ContentBulk',
ContentsSearch = 'Ugc.ContentAdmin.ContentsSearch',
Content_ByContentId = 'Ugc.ContentAdmin.Content_ByContentId',
Contents_ByUserId = 'Ugc.ContentAdmin.Contents_ByUserId',
ContentSharecodeBulk = 'Ugc.ContentAdmin.ContentSharecodeBulk',
Preview_ByContentId = 'Ugc.ContentAdmin.Preview_ByContentId',
Content_ByChannelId = 'Ugc.ContentAdmin.Content_ByChannelId',
Versions_ByContentId = 'Ugc.ContentAdmin.Versions_ByContentId',
ContentSharecode_ByShareCode = 'Ugc.ContentAdmin.ContentSharecode_ByShareCode',
ContentS3_ByChannelId = 'Ugc.ContentAdmin.ContentS3_ByChannelId',
Screenshot_ByContentId = 'Ugc.ContentAdmin.Screenshot_ByContentId',
ContentsSearch_ByChannelId = 'Ugc.ContentAdmin.ContentsSearch_ByChannelId',
Hide_ByUserId_ByContentId = 'Ugc.ContentAdmin.Hide_ByUserId_ByContentId',
Content_ByChannelId_ByContentId = 'Ugc.ContentAdmin.Content_ByChannelId_ByContentId',
Rollback_ByContentId_ByVersionId = 'Ugc.ContentAdmin.Rollback_ByContentId_ByVersionId',
ContentS3_ByChannelId_ByContentId = 'Ugc.ContentAdmin.ContentS3_ByChannelId_ByContentId',
Screenshot_ByContentId_ByScreenshotId = 'Ugc.ContentAdmin.Screenshot_ByContentId_ByScreenshotId',
Content_ByUserId_ByChannelId_ByContentId = 'Ugc.ContentAdmin.Content_ByUserId_ByChannelId_ByContentId',
ContentS3_ByUserId_ByChannelId_ByContentId = 'Ugc.ContentAdmin.ContentS3_ByUserId_ByChannelId_ByContentId',
ContentSharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.ContentAdmin.ContentSharecode_ByUserId_ByChannelId_ByShareCode',
ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = 'Ugc.ContentAdmin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode',

}

  

export const useContentAdminApi_GetContents = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetContents>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Contents, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_FetchContentBulk = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: AdminGetContentBulkRequest },
    options?: Omit<UseQueryOptions<ContentDownloadResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponseArray>) => void
  ): UseQueryResult<ContentDownloadResponseArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_FetchContentBulk>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchContentBulk(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_GetContentsSearch = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {creator?: string | null, ishidden?: string | null, isofficial?: string | null, limit?: number, name?: string | null, offset?: number, orderby?: string | null, sortby?: string | null, subtype?: string | null, tags?: string[], type?: string | null, userId?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetContentsSearch>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContentsSearch(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentsSearch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_GetContent_ByContentId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { contentId:string },
    options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
  ): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetContent_ByContentId>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContent_ByContentId(input.contentId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Content_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_GetContents_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {limit?: number, offset?: number} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetContents_ByUserId>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContents_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Contents_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_FetchContentSharecodeBulk = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { data: GetContentBulkByShareCodesRequest },
    options?: Omit<UseQueryOptions<ContentDownloadResponseArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponseArray>) => void
  ): UseQueryResult<ContentDownloadResponseArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_FetchContentSharecodeBulk>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchContentSharecodeBulk(input.data))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponseArray, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentSharecodeBulk, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_GetPreview_ByContentId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { contentId:string },
    options?: Omit<UseQueryOptions<GetContentPreviewResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GetContentPreviewResponse>) => void
  ): UseQueryResult<GetContentPreviewResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetPreview_ByContentId>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPreview_ByContentId(input.contentId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GetContentPreviewResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Preview_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_CreateContent_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, data: CreateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, data: CreateContentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channelId:string, data: CreateContentRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContent_ByChannelId(input.channelId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_GetVersions_ByContentId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { contentId:string },
    options?: Omit<UseQueryOptions<ListContentVersionsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListContentVersionsResponse>) => void
  ): UseQueryResult<ListContentVersionsResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetVersions_ByContentId>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getVersions_ByContentId(input.contentId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListContentVersionsResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.Versions_ByContentId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_GetContentSharecode_ByShareCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { shareCode:string },
    options?: Omit<UseQueryOptions<ContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ContentDownloadResponse>) => void
  ): UseQueryResult<ContentDownloadResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetContentSharecode_ByShareCode>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContentSharecode_ByShareCode(input.shareCode))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentSharecode_ByShareCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_CreateContentS3_ByChannelId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, data: CreateContentRequestS3 }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, data: CreateContentRequestS3 }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channelId:string, data: CreateContentRequestS3 }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createContentS3_ByChannelId(input.channelId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3_ByChannelId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_CreateScreenshot_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, data: CreateScreenshotRequest }>, 'mutationKey'>,
    callback?: (data: CreateScreenshotResponse) => void
  ): UseMutationResult<CreateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, data: CreateScreenshotRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { contentId:string, data: CreateScreenshotRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createScreenshot_ByContentId(input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Screenshot_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateScreenshot_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, data: UpdateScreenshotRequest }>, 'mutationKey'>,
    callback?: (data: UpdateScreenshotResponse) => void
  ): UseMutationResult<UpdateScreenshotResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, data: UpdateScreenshotRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { contentId:string, data: UpdateScreenshotRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateScreenshot_ByContentId(input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Screenshot_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_GetContentsSearch_ByChannelId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { channelId:string,  queryParams?: {creator?: string | null, ishidden?: string | null, isofficial?: string | null, limit?: number, name?: string | null, offset?: number, orderby?: string | null, sortby?: string | null, subtype?: string | null, tags?: string[], type?: string | null, userId?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useContentAdminApi_GetContentsSearch_ByChannelId>[1]
  ) => async () => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContentsSearch_ByChannelId(input.channelId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_ContentAdmin.ContentsSearch_ByChannelId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateHide_ByUserId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: HideContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, contentId:string, data: HideContentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, contentId:string, data: HideContentRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateHide_ByUserId_ByContentId(input.userId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Hide_ByUserId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_DeleteContent_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, contentId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, contentId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channelId:string, contentId:string }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteContent_ByChannelId_ByContentId(input.channelId, input.contentId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateContent_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, contentId:string, data: CreateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, contentId:string, data: CreateContentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channelId:string, contentId:string, data: CreateContentRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContent_ByChannelId_ByContentId(input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateRollback_ByContentId_ByVersionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ContentDownloadResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, versionId:string }>, 'mutationKey'>,
    callback?: (data: ContentDownloadResponse) => void
  ): UseMutationResult<ContentDownloadResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, versionId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { contentId:string, versionId:string }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateRollback_ByContentId_ByVersionId(input.contentId, input.versionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Rollback_ByContentId_ByVersionId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateContentS3_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, contentId:string, data: AdminUpdateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { channelId:string, contentId:string, data: AdminUpdateContentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { channelId:string, contentId:string, data: AdminUpdateContentRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContentS3_ByChannelId_ByContentId(input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_DeleteScreenshot_ByContentId_ByScreenshotId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, screenshotId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, screenshotId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { contentId:string, screenshotId:string }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteScreenshot_ByContentId_ByScreenshotId(input.contentId, input.screenshotId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Screenshot_ByContentId_ByScreenshotId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_DeleteContent_ByUserId_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateContent_ByUserId_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: CreateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: CreateContentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: CreateContentRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContent_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.Content_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateContentS3_ByUserId_ByChannelId_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: AdminUpdateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: AdminUpdateContentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, contentId:string, data: AdminUpdateContentRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContentS3_ByUserId_ByChannelId_ByContentId(input.userId, input.channelId, input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3_ByUserId_ByChannelId_ByContentId],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_DeleteContentSharecode_ByUserId_ByChannelId_ByShareCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, shareCode:string }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteContentSharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentSharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
  
  

export const useContentAdminApi_UpdateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: AdminUpdateContentRequest }>, 'mutationKey'>,
    callback?: (data: CreateContentResponse) => void
  ): UseMutationResult<CreateContentResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: AdminUpdateContentRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, channelId:string, shareCode:string, data: AdminUpdateContentRequest }) => {
      const response = 
            (await ContentAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateContentS3Sharecode_ByUserId_ByChannelId_ByShareCode(input.userId, input.channelId, input.shareCode, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ContentAdmin.ContentS3Sharecode_ByUserId_ByChannelId_ByShareCode],
    mutationFn,
    ...options
  })
}
  
  
  