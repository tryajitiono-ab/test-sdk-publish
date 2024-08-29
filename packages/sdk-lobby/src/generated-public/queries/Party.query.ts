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
import { PartyApi } from "../PartyApi.js"

import { PartyData } from '../../generated-definitions/PartyData.js'
import { PartyPutCustomAttributesRequest } from '../../generated-definitions/PartyPutCustomAttributesRequest.js'
import { PartyPutLimitSizeRequest } from '../../generated-definitions/PartyPutLimitSizeRequest.js'


export enum Key_Party {
  PartyParty_ByPartyId = 'Lobby.Party.PartyParty_ByPartyId',
LimitParty_ByPartyId = 'Lobby.Party.LimitParty_ByPartyId',
AttributeParty_ByPartyId = 'Lobby.Party.AttributeParty_ByPartyId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Party.PartyParty_ByPartyId, input]
 * }
 * ```
 */
export const usePartyApi_GetPartyParty_ByPartyId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { partyId:string },
    options?: Omit<UseQueryOptions<PartyData, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PartyData>) => void
  ): UseQueryResult<PartyData, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof usePartyApi_GetPartyParty_ByPartyId>[1]
  ) => async () => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPartyParty_ByPartyId(input.partyId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PartyData, AxiosError<ApiError>>({
    queryKey: [Key_Party.PartyParty_ByPartyId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const usePartyApi_UpdateLimitParty_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: PartyPutLimitSizeRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: PartyPutLimitSizeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: PartyPutLimitSizeRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateLimitParty_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.LimitParty_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  

export const usePartyApi_UpdateAttributeParty_ByPartyId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PartyData, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: PartyPutCustomAttributesRequest }>, 'mutationKey'>,
    callback?: (data: PartyData) => void
  ): UseMutationResult<PartyData, AxiosError<ApiError>, SdkSetConfigParam & { partyId:string, data: PartyPutCustomAttributesRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { partyId:string, data: PartyPutCustomAttributesRequest }) => {
      const response = 
            (await PartyApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAttributeParty_ByPartyId(input.partyId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Party.AttributeParty_ByPartyId],
    mutationFn,
    ...options
  })
}
  
  
  