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
import { DataRetrievalS2SApi } from "../DataRetrievalS2SApi.js"

import { ListFinishedDataRequests } from '../../generated-definitions/ListFinishedDataRequests.js'
import { S2SDataRetrievalResponse } from '../../generated-definitions/S2SDataRetrievalResponse.js'
import { S2SUserDataUrl } from '../../generated-definitions/S2SUserDataUrl.js'


export enum Key_DataRetrievalS2S {
  S2SRequestsFinished = 'Gdpr.DataRetrievalS2S.S2SRequestsFinished',
RequestS2_ByUserId = 'Gdpr.DataRetrievalS2S.RequestS2_ByUserId',
GenerateS2_ByUserId_ByRequestDate = 'Gdpr.DataRetrievalS2S.GenerateS2_ByUserId_ByRequestDate',

}

  

export const useDataRetrievalS2SApi_GetS2SRequestsFinished = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {end: string | null, start: string | null} },
    options?: Omit<UseQueryOptions<ListFinishedDataRequests, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListFinishedDataRequests>) => void
  ): UseQueryResult<ListFinishedDataRequests, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDataRetrievalS2SApi_GetS2SRequestsFinished>[1]
  ) => async () => {
      const response = 
            (await DataRetrievalS2SApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getS2SRequestsFinished(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListFinishedDataRequests, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalS2S.S2SRequestsFinished, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useDataRetrievalS2SApi_CreateRequestS2_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<S2SDataRetrievalResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: S2SDataRetrievalResponse) => void
  ): UseMutationResult<S2SDataRetrievalResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await DataRetrievalS2SApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRequestS2_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_DataRetrievalS2S.RequestS2_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useDataRetrievalS2SApi_FetchGenerateS2_ByUserId_ByRequestDate = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, requestDate:string },
    options?: Omit<UseQueryOptions<S2SUserDataUrl, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<S2SUserDataUrl>) => void
  ): UseQueryResult<S2SUserDataUrl, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDataRetrievalS2SApi_FetchGenerateS2_ByUserId_ByRequestDate>[1]
  ) => async () => {
      const response = 
            (await DataRetrievalS2SApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                fetchGenerateS2_ByUserId_ByRequestDate(input.userId, input.requestDate))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<S2SUserDataUrl, AxiosError<ApiError>>({
    queryKey: [Key_DataRetrievalS2S.GenerateS2_ByUserId_ByRequestDate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  