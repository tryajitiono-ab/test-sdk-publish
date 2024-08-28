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
import { PublicLikeLegacyApi } from "../PublicLikeLegacyApi.js"

import { ContentLikeRequest } from '../../generated-definitions/ContentLikeRequest.js'
import { ContentLikeResponse } from '../../generated-definitions/ContentLikeResponse.js'
import { PaginatedContentDownloadResponse } from '../../generated-definitions/PaginatedContentDownloadResponse.js'


export enum Key_PublicLikeLegacy {
  ContentsLiked = 'Ugc.PublicLikeLegacy.ContentsLiked',
Like_ByContentId = 'Ugc.PublicLikeLegacy.Like_ByContentId',

}

  

export const usePublicLikeLegacyApi_GetContentsLiked = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {isofficial?: boolean | null, limit?: number, name?: string | null, offset?: number, orderby?: string | null, sortby?: string | null, subtype?: string | null, tags?: string[], type?: string | null} },
    options?: Omit<UseQueryOptions<PaginatedContentDownloadResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PaginatedContentDownloadResponse>) => void
  ): UseQueryResult<PaginatedContentDownloadResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePublicLikeLegacyApi_GetContentsLiked>[1]
  ) => async () => {
      const response = 
            (await PublicLikeLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getContentsLiked(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PaginatedContentDownloadResponse, AxiosError<ApiError>>({
    queryKey: [Key_PublicLikeLegacy.ContentsLiked, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePublicLikeLegacyApi_UpdateLike_ByContentId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ContentLikeResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, data: ContentLikeRequest }>, 'mutationKey'>,
    callback?: (data: ContentLikeResponse) => void
  ): UseMutationResult<ContentLikeResponse, AxiosError<ApiError>, SdkSetConfigParam & { contentId:string, data: ContentLikeRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { contentId:string, data: ContentLikeRequest }) => {
      const response = 
            (await PublicLikeLegacyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateLike_ByContentId(input.contentId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PublicLikeLegacy.Like_ByContentId],
    mutationFn,
    ...options
  })
}
  
  
  