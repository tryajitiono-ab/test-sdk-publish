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
import { MatchTicketsApi } from "../MatchTicketsApi.js"

import { MatchTicketRequest } from '../../generated-definitions/MatchTicketRequest.js'
import { MatchTicketResponse } from '../../generated-definitions/MatchTicketResponse.js'
import { MatchTicketStatus } from '../../generated-definitions/MatchTicketStatus.js'
import { MatchTicketStatuses } from '../../generated-definitions/MatchTicketStatuses.js'


export enum Key_MatchTickets {
  MatchTicket = 'Matchmaking.MatchTickets.MatchTicket',
MatchTicketsMe = 'Matchmaking.MatchTickets.MatchTicketsMe',
MatchTicket_ByTicketid = 'Matchmaking.MatchTickets.MatchTicket_ByTicketid',

}

  

export const useMatchTicketsApi_CreateMatchTicket = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<MatchTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchTicketRequest }>, 'mutationKey'>,
    callback?: (data: MatchTicketResponse) => void
  ): UseMutationResult<MatchTicketResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: MatchTicketRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: MatchTicketRequest }) => {
      const response = 
            (await MatchTicketsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createMatchTicket(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchTickets.MatchTicket],
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
 *    queryKey: [Key_MatchTickets.MatchTicketsMe, input]
 * }
 * ```
 */
export const useMatchTicketsApi_GetMatchTicketsMe = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, matchPool?: string | null, offset?: number} },
    options?: Omit<UseQueryOptions<MatchTicketStatuses, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<MatchTicketStatuses>) => void
  ): UseQueryResult<MatchTicketStatuses, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchTicketsApi_GetMatchTicketsMe>[1]
  ) => async () => {
      const response = 
            (await MatchTicketsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMatchTicketsMe(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<MatchTicketStatuses, AxiosError<ApiError>>({
    queryKey: [Key_MatchTickets.MatchTicketsMe, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useMatchTicketsApi_DeleteMatchTicket_ByTicketid = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ticketid:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { ticketid:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { ticketid:string }) => {
      const response = 
            (await MatchTicketsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteMatchTicket_ByTicketid(input.ticketid))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_MatchTickets.MatchTicket_ByTicketid],
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
 *    queryKey: [Key_MatchTickets.MatchTicket_ByTicketid, input]
 * }
 * ```
 */
export const useMatchTicketsApi_GetMatchTicket_ByTicketid = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { ticketid:string },
    options?: Omit<UseQueryOptions<MatchTicketStatus, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<MatchTicketStatus>) => void
  ): UseQueryResult<MatchTicketStatus, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useMatchTicketsApi_GetMatchTicket_ByTicketid>[1]
  ) => async () => {
      const response = 
            (await MatchTicketsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getMatchTicket_ByTicketid(input.ticketid))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<MatchTicketStatus, AxiosError<ApiError>>({
    queryKey: [Key_MatchTickets.MatchTicket_ByTicketid, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  