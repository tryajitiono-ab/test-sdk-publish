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
import { GametelemetryOperationsApi } from "../GametelemetryOperationsApi.js"

import { PlayTimeResponse } from '../../generated-definitions/PlayTimeResponse.js'
import { TelemetryBody } from '../../generated-definitions/TelemetryBody.js'


export enum Key_GametelemetryOperations {
  ProtectedEvent = 'Gametelemetry.GametelemetryOperations.ProtectedEvent',
PlaytimeProtected_BySteamId = 'Gametelemetry.GametelemetryOperations.PlaytimeProtected_BySteamId',
PlaytimeProtected_BySteamId_ByPlaytime = 'Gametelemetry.GametelemetryOperations.PlaytimeProtected_BySteamId_ByPlaytime',

}

  

export const useGametelemetryOperationsApi_CreateProtectedEvent = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: TelemetryBody[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: TelemetryBody[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: TelemetryBody[] }) => {
      const response = 
            (await GametelemetryOperationsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProtectedEvent(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GametelemetryOperations.ProtectedEvent],
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
 *    queryKey: [Key_GametelemetryOperations.PlaytimeProtected_BySteamId, input]
 * }
 * ```
 */
export const useGametelemetryOperationsApi_GetPlaytimeProtected_BySteamId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { steamId:string },
    options?: Omit<UseQueryOptions<PlayTimeResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayTimeResponse>) => void
  ): UseQueryResult<PlayTimeResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useGametelemetryOperationsApi_GetPlaytimeProtected_BySteamId>[1]
  ) => async () => {
      const response = 
            (await GametelemetryOperationsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getPlaytimeProtected_BySteamId(input.steamId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayTimeResponse, AxiosError<ApiError>>({
    queryKey: [Key_GametelemetryOperations.PlaytimeProtected_BySteamId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useGametelemetryOperationsApi_UpdatePlaytimeProtected_BySteamId_ByPlaytime = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayTimeResponse, AxiosError<ApiError>, SdkSetConfigParam & { steamId:string, playtime:string }>, 'mutationKey'>,
    callback?: (data: PlayTimeResponse) => void
  ): UseMutationResult<PlayTimeResponse, AxiosError<ApiError>, SdkSetConfigParam & { steamId:string, playtime:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { steamId:string, playtime:string }) => {
      const response = 
            (await GametelemetryOperationsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updatePlaytimeProtected_BySteamId_ByPlaytime(input.steamId, input.playtime))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_GametelemetryOperations.PlaytimeProtected_BySteamId_ByPlaytime],
    mutationFn,
    ...options
  })
}
  
  
  