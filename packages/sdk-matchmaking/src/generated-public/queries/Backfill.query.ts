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
import { BackfillApi } from "../BackfillApi.js"

import { BackFillAcceptRequest } from '../../generated-definitions/BackFillAcceptRequest.js'
import { BackFillCreateRequest } from '../../generated-definitions/BackFillCreateRequest.js'
import { BackFillRejectRequest } from '../../generated-definitions/BackFillRejectRequest.js'
import { BackfillCreateResponse } from '../../generated-definitions/BackfillCreateResponse.js'
import { BackfillGetResponse } from '../../generated-definitions/BackfillGetResponse.js'
import { BackfillProposalResponse } from '../../generated-definitions/BackfillProposalResponse.js'
import { GameSession } from '../../generated-definitions/GameSession.js'


export enum Key_Backfill {
  Backfill = 'Matchmaking.Backfill.Backfill',
BackfillProposal = 'Matchmaking.Backfill.BackfillProposal',
Backfill_ByBackfillId = 'Matchmaking.Backfill.Backfill_ByBackfillId',
ProposalAccept_ByBackfillId = 'Matchmaking.Backfill.ProposalAccept_ByBackfillId',
ProposalReject_ByBackfillId = 'Matchmaking.Backfill.ProposalReject_ByBackfillId',

}

  

export const useBackfillApi_CreateBackfill = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BackfillCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BackFillCreateRequest }>, 'mutationKey'>,
    callback?: (data: BackfillCreateResponse) => void
  ): UseMutationResult<BackfillCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BackFillCreateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: BackFillCreateRequest }) => {
      const response = 
            (await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createBackfill(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Backfill.Backfill],
    mutationFn,
    ...options
  })
}
  
  

export const useBackfillApi_GetBackfillProposal = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {sessionID: string | null} },
    options?: Omit<UseQueryOptions<BackfillProposalResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BackfillProposalResponse>) => void
  ): UseQueryResult<BackfillProposalResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useBackfillApi_GetBackfillProposal>[1]
  ) => async () => {
      const response = 
            (await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBackfillProposal(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BackfillProposalResponse, AxiosError<ApiError>>({
    queryKey: [Key_Backfill.BackfillProposal, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useBackfillApi_DeleteBackfill_ByBackfillId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { backfillID:string }) => {
      const response = 
            (await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteBackfill_ByBackfillId(input.backfillID))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Backfill.Backfill_ByBackfillId],
    mutationFn,
    ...options
  })
}
  
  

export const useBackfillApi_GetBackfill_ByBackfillId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { backfillID:string },
    options?: Omit<UseQueryOptions<BackfillGetResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<BackfillGetResponse>) => void
  ): UseQueryResult<BackfillGetResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useBackfillApi_GetBackfill_ByBackfillId>[1]
  ) => async () => {
      const response = 
            (await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBackfill_ByBackfillId(input.backfillID))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<BackfillGetResponse, AxiosError<ApiError>>({
    queryKey: [Key_Backfill.Backfill_ByBackfillId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useBackfillApi_UpdateProposalAccept_ByBackfillId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GameSession, AxiosError<ApiError>, SdkSetConfigParam & { backfillID:string, data: BackFillAcceptRequest }>, 'mutationKey'>,
    callback?: (data: GameSession) => void
  ): UseMutationResult<GameSession, AxiosError<ApiError>, SdkSetConfigParam & { backfillID:string, data: BackFillAcceptRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { backfillID:string, data: BackFillAcceptRequest }) => {
      const response = 
            (await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateProposalAccept_ByBackfillId(input.backfillID, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Backfill.ProposalAccept_ByBackfillId],
    mutationFn,
    ...options
  })
}
  
  

export const useBackfillApi_UpdateProposalReject_ByBackfillId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID:string, data: BackFillRejectRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { backfillID:string, data: BackFillRejectRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { backfillID:string, data: BackFillRejectRequest }) => {
      const response = 
            (await BackfillApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateProposalReject_ByBackfillId(input.backfillID, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Backfill.ProposalReject_ByBackfillId],
    mutationFn,
    ...options
  })
}
  
  
  