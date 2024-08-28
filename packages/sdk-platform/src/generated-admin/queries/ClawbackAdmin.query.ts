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
import { ClawbackAdminApi } from "../ClawbackAdminApi.js"

import { ClawbackInfo } from '../../generated-definitions/ClawbackInfo.js'
import { IapClawbackPagingSlicedResult } from '../../generated-definitions/IapClawbackPagingSlicedResult.js'
import { StreamEvent } from '../../generated-definitions/StreamEvent.js'


export enum Key_ClawbackAdmin {
  IapClawbackHistories = 'Platform.ClawbackAdmin.IapClawbackHistories',
IapClawbackPlaystationMock = 'Platform.ClawbackAdmin.IapClawbackPlaystationMock',

}

  

export const useClawbackAdminApi_GetIapClawbackHistories = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {endTime?: string | null, eventType?: 'CHARGEBACK' | 'CHARGEBACK_REVERSED' | 'OTHER' | 'REFUND', externalOrderId?: string | null, limit?: number, offset?: number, startTime?: string | null, status?: 'FAIL' | 'IGNORED' | 'INIT' | 'SUCCESS', userId?: string | null} },
    options?: Omit<UseQueryOptions<IapClawbackPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<IapClawbackPagingSlicedResult>) => void
  ): UseQueryResult<IapClawbackPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useClawbackAdminApi_GetIapClawbackHistories>[1]
  ) => async () => {
      const response = 
            (await ClawbackAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapClawbackHistories(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<IapClawbackPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_ClawbackAdmin.IapClawbackHistories, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useClawbackAdminApi_CreateIapClawbackPlaystationMock = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ClawbackInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StreamEvent }>, 'mutationKey'>,
    callback?: (data: ClawbackInfo) => void
  ): UseMutationResult<ClawbackInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StreamEvent }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: StreamEvent }) => {
      const response = 
            (await ClawbackAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createIapClawbackPlaystationMock(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ClawbackAdmin.IapClawbackPlaystationMock],
    mutationFn,
    ...options
  })
}
  
  
  