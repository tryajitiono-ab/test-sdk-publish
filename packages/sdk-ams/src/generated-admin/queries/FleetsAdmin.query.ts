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
import { FleetsAdminApi } from "../FleetsAdminApi.js"

import { FleetCreateResponse } from '../../generated-definitions/FleetCreateResponse.js'
import { FleetGetResponse } from '../../generated-definitions/FleetGetResponse.js'
import { FleetListResponse } from '../../generated-definitions/FleetListResponse.js'
import { FleetParameters } from '../../generated-definitions/FleetParameters.js'
import { FleetServersResponse } from '../../generated-definitions/FleetServersResponse.js'


export enum Key_FleetsAdmin {
  Fleets = 'Ams.FleetsAdmin.Fleets',
Fleet = 'Ams.FleetsAdmin.Fleet',
Fleet_ByFleetId = 'Ams.FleetsAdmin.Fleet_ByFleetId',
Servers_ByFleetId = 'Ams.FleetsAdmin.Servers_ByFleetId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_FleetsAdmin.Fleets, input]
 * }
 * ```
 */
export const useFleetsAdminApi_GetFleets = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<FleetListResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FleetListResponse>) => void
  ): UseQueryResult<FleetListResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useFleetsAdminApi_GetFleets>[1]
  ) => async () => {
      const response = 
            (await FleetsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getFleets())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FleetListResponse, AxiosError<ApiError>>({
    queryKey: [Key_FleetsAdmin.Fleets, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useFleetsAdminApi_CreateFleet = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FleetCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: FleetParameters }>, 'mutationKey'>,
    callback?: (data: FleetCreateResponse) => void
  ): UseMutationResult<FleetCreateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: FleetParameters }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: FleetParameters }) => {
      const response = 
            (await FleetsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFleet(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FleetsAdmin.Fleet],
    mutationFn,
    ...options
  })
}
  
  

export const useFleetsAdminApi_DeleteFleet_ByFleetId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { fleetID:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { fleetID:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { fleetID:string }) => {
      const response = 
            (await FleetsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteFleet_ByFleetId(input.fleetID))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FleetsAdmin.Fleet_ByFleetId],
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
 *    queryKey: [Key_FleetsAdmin.Fleet_ByFleetId, input]
 * }
 * ```
 */
export const useFleetsAdminApi_GetFleet_ByFleetId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { fleetID:string },
    options?: Omit<UseQueryOptions<FleetGetResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FleetGetResponse>) => void
  ): UseQueryResult<FleetGetResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useFleetsAdminApi_GetFleet_ByFleetId>[1]
  ) => async () => {
      const response = 
            (await FleetsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getFleet_ByFleetId(input.fleetID))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FleetGetResponse, AxiosError<ApiError>>({
    queryKey: [Key_FleetsAdmin.Fleet_ByFleetId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useFleetsAdminApi_UpdateFleet_ByFleetId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { fleetID:string, data: FleetParameters }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { fleetID:string, data: FleetParameters }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { fleetID:string, data: FleetParameters }) => {
      const response = 
            (await FleetsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateFleet_ByFleetId(input.fleetID, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FleetsAdmin.Fleet_ByFleetId],
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
 *    queryKey: [Key_FleetsAdmin.Servers_ByFleetId, input]
 * }
 * ```
 */
export const useFleetsAdminApi_GetServers_ByFleetId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { fleetID:string,  queryParams?: {count?: string | null, offset?: number} },
    options?: Omit<UseQueryOptions<FleetServersResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<FleetServersResponse>) => void
  ): UseQueryResult<FleetServersResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useFleetsAdminApi_GetServers_ByFleetId>[1]
  ) => async () => {
      const response = 
            (await FleetsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getServers_ByFleetId(input.fleetID, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<FleetServersResponse, AxiosError<ApiError>>({
    queryKey: [Key_FleetsAdmin.Servers_ByFleetId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  