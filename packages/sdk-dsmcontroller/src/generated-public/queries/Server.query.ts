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
import { ServerApi } from "../ServerApi.js"

import { DeregisterLocalServerRequest } from '../../generated-definitions/DeregisterLocalServerRequest.js'
import { DetailedCountServerResponse } from '../../generated-definitions/DetailedCountServerResponse.js'
import { DsHeartbeatRequest } from '../../generated-definitions/DsHeartbeatRequest.js'
import { ListServerResponse } from '../../generated-definitions/ListServerResponse.js'
import { RegisterLocalServerRequest } from '../../generated-definitions/RegisterLocalServerRequest.js'
import { RegisterServerRequest } from '../../generated-definitions/RegisterServerRequest.js'
import { Server } from '../../generated-definitions/Server.js'
import { ServerDeploymentConfigSessionTimeoutResponse } from '../../generated-definitions/ServerDeploymentConfigSessionTimeoutResponse.js'
import { ServerSessionResponse } from '../../generated-definitions/ServerSessionResponse.js'
import { ShutdownServerRequest } from '../../generated-definitions/ShutdownServerRequest.js'


export enum Key_Server {
  Servers = 'Dsmcontroller.Server.Servers',
ServerRegister = 'Dsmcontroller.Server.ServerRegister',
ServerShutdown = 'Dsmcontroller.Server.ServerShutdown',
ServerHeartbeat = 'Dsmcontroller.Server.ServerHeartbeat',
ServersCountDetailed = 'Dsmcontroller.Server.ServersCountDetailed',
ServerLocalRegister = 'Dsmcontroller.Server.ServerLocalRegister',
ServerLocalDeregister = 'Dsmcontroller.Server.ServerLocalDeregister',
Session_ByPodName = 'Dsmcontroller.Server.Session_ByPodName',
ConfigSessiontimeout_ByPodName = 'Dsmcontroller.Server.ConfigSessiontimeout_ByPodName',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.Servers, input]
 * }
 * ```
 */
export const useServerApi_GetServers = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {count: number, offset: number, region?: string | null} },
    options?: Omit<UseQueryOptions<ListServerResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ListServerResponse>) => void
  ): UseQueryResult<ListServerResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useServerApi_GetServers>[1]
  ) => async () => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getServers(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ListServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.Servers, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useServerApi_CreateServerRegister = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterServerRequest }>, 'mutationKey'>,
    callback?: (data: Server) => void
  ): UseMutationResult<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterServerRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: RegisterServerRequest }) => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createServerRegister(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Server.ServerRegister],
    mutationFn,
    ...options
  })
}
  
  

export const useServerApi_CreateServerShutdown = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ShutdownServerRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: ShutdownServerRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: ShutdownServerRequest }) => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createServerShutdown(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Server.ServerShutdown],
    mutationFn,
    ...options
  })
}
  
  

export const useServerApi_UpdateServerHeartbeat = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsHeartbeatRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DsHeartbeatRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: DsHeartbeatRequest }) => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateServerHeartbeat(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Server.ServerHeartbeat],
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
 *    queryKey: [Key_Server.ServersCountDetailed, input]
 * }
 * ```
 */
export const useServerApi_GetServersCountDetailed = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {region?: string | null} },
    options?: Omit<UseQueryOptions<DetailedCountServerResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DetailedCountServerResponse>) => void
  ): UseQueryResult<DetailedCountServerResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useServerApi_GetServersCountDetailed>[1]
  ) => async () => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getServersCountDetailed(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DetailedCountServerResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.ServersCountDetailed, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useServerApi_CreateServerLocalRegister = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterLocalServerRequest }>, 'mutationKey'>,
    callback?: (data: Server) => void
  ): UseMutationResult<Server, AxiosError<ApiError>, SdkSetConfigParam & { data: RegisterLocalServerRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: RegisterLocalServerRequest }) => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createServerLocalRegister(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Server.ServerLocalRegister],
    mutationFn,
    ...options
  })
}
  
  

export const useServerApi_CreateServerLocalDeregister = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeregisterLocalServerRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: DeregisterLocalServerRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: DeregisterLocalServerRequest }) => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createServerLocalDeregister(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Server.ServerLocalDeregister],
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
 *    queryKey: [Key_Server.Session_ByPodName, input]
 * }
 * ```
 */
export const useServerApi_GetSession_ByPodName = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { podName:string },
    options?: Omit<UseQueryOptions<ServerSessionResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ServerSessionResponse>) => void
  ): UseQueryResult<ServerSessionResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useServerApi_GetSession_ByPodName>[1]
  ) => async () => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSession_ByPodName(input.podName))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ServerSessionResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.Session_ByPodName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Server.ConfigSessiontimeout_ByPodName, input]
 * }
 * ```
 */
export const useServerApi_GetConfigSessiontimeout_ByPodName = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { podName:string },
    options?: Omit<UseQueryOptions<ServerDeploymentConfigSessionTimeoutResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ServerDeploymentConfigSessionTimeoutResponse>) => void
  ): UseQueryResult<ServerDeploymentConfigSessionTimeoutResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useServerApi_GetConfigSessiontimeout_ByPodName>[1]
  ) => async () => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigSessiontimeout_ByPodName(input.podName))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ServerDeploymentConfigSessionTimeoutResponse, AxiosError<ApiError>>({
    queryKey: [Key_Server.ConfigSessiontimeout_ByPodName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  