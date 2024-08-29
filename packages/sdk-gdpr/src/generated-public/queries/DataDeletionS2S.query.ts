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
import { DataDeletionS2SApi } from "../DataDeletionS2SApi.js"

import { ListFinishedDataDeletion } from '../../generated-definitions/ListFinishedDataDeletion.js'
import { S2SRequestDeleteResponse } from '../../generated-definitions/S2SRequestDeleteResponse.js'


export enum Key_DataDeletionS2S {
  S2SDeletionsFinished = 'Gdpr.DataDeletionS2S.S2SDeletionsFinished',
DeletionS2_ByUserId = 'Gdpr.DataDeletionS2S.DeletionS2_ByUserId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_DataDeletionS2S.S2SDeletionsFinished, input]
 * }
 * ```
 */
export const useDataDeletionS2SApi_GetS2SDeletionsFinished = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {end: string | null, start: string | null} },
    options?: Omit<UseQueryOptions<ListFinishedDataDeletion, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListFinishedDataDeletion>) => void
  ): UseQueryResult<ListFinishedDataDeletion, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDataDeletionS2SApi_GetS2SDeletionsFinished>[1]
  ) => async () => {
      const response = 
            (await DataDeletionS2SApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getS2SDeletionsFinished(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListFinishedDataDeletion, AxiosError<ApiError>>({
    queryKey: [Key_DataDeletionS2S.S2SDeletionsFinished, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDataDeletionS2SApi_CreateDeletionS2_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<S2SRequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: S2SRequestDeleteResponse) => void
  ): UseMutationResult<S2SRequestDeleteResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await DataDeletionS2SApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createDeletionS2_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataDeletionS2S.DeletionS2_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  