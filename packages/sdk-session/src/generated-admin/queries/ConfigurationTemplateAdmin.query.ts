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
import { ConfigurationTemplateAdminApi } from "../ConfigurationTemplateAdminApi.js"

import { ConfigAlertRequestCreate } from '../../generated-definitions/ConfigAlertRequestCreate.js'
import { ConfigAlertResponse } from '../../generated-definitions/ConfigAlertResponse.js'
import { ConfigurationTemplateResponse } from '../../generated-definitions/ConfigurationTemplateResponse.js'
import { ConfigurationTemplatesResponse } from '../../generated-definitions/ConfigurationTemplatesResponse.js'
import { CreateConfigurationTemplateRequest } from '../../generated-definitions/CreateConfigurationTemplateRequest.js'
import { DsmConfigRecord } from '../../generated-definitions/DsmConfigRecord.js'
import { UpdateConfigurationTemplateRequest } from '../../generated-definitions/UpdateConfigurationTemplateRequest.js'


export enum Key_ConfigurationTemplateAdmin {
  Dsconfigs = 'Session.ConfigurationTemplateAdmin.Dsconfigs',
Configuration = 'Session.ConfigurationTemplateAdmin.Configuration',
Configurations = 'Session.ConfigurationTemplateAdmin.Configurations',
DsconfigsSync = 'Session.ConfigurationTemplateAdmin.DsconfigsSync',
AlertsConfiguration = 'Session.ConfigurationTemplateAdmin.AlertsConfiguration',
AlertsConfiguration_ByNS = 'Session.ConfigurationTemplateAdmin.AlertsConfiguration_ByNS',
Configuration_ByName = 'Session.ConfigurationTemplateAdmin.Configuration_ByName',

}

  

export const useConfigurationTemplateAdminApi_GetDsconfigs = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DsmConfigRecord>) => void
  ): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigurationTemplateAdminApi_GetDsconfigs>[1]
  ) => async () => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDsconfigs())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Dsconfigs, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_CreateConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ConfigurationTemplateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfigurationTemplateRequest }>, 'mutationKey'>,
    callback?: (data: ConfigurationTemplateResponse) => void
  ): UseMutationResult<ConfigurationTemplateResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: CreateConfigurationTemplateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CreateConfigurationTemplateRequest }) => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createConfiguration(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_GetConfigurations = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, name?: string | null, offset?: number, order?: string | null, orderBy?: string | null} },
    options?: Omit<UseQueryOptions<ConfigurationTemplatesResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ConfigurationTemplatesResponse>) => void
  ): UseQueryResult<ConfigurationTemplatesResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigurationTemplateAdminApi_GetConfigurations>[1]
  ) => async () => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfigurations(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ConfigurationTemplatesResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Configurations, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_GetDsconfigsSync = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<DsmConfigRecord, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<DsmConfigRecord>) => void
  ): UseQueryResult<DsmConfigRecord, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigurationTemplateAdminApi_GetDsconfigsSync>[1]
  ) => async () => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDsconfigsSync())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<DsmConfigRecord, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.DsconfigsSync, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_DeleteAlertsConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteAlertsConfiguration())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_GetAlertsConfiguration = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<ConfigAlertResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ConfigAlertResponse>) => void
  ): UseQueryResult<ConfigAlertResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigurationTemplateAdminApi_GetAlertsConfiguration>[1]
  ) => async () => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getAlertsConfiguration())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ConfigAlertResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_UpdateAlertsConfiguration = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }>, 'mutationKey'>,
    callback?: (data: ConfigAlertResponse) => void
  ): UseMutationResult<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigAlertRequestCreate }) => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAlertsConfiguration(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_UpdateAlertsConfiguration_ByNS = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }>, 'mutationKey'>,
    callback?: (data: ConfigAlertResponse) => void
  ): UseMutationResult<ConfigAlertResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: ConfigAlertRequestCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ConfigAlertRequestCreate }) => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateAlertsConfiguration_ByNS(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.AlertsConfiguration_ByNS],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_DeleteConfiguration_ByName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { name:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { name:string }) => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteConfiguration_ByName(input.name))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName],
    mutationFn,
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_GetConfiguration_ByName = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { name:string },
    options?: Omit<UseQueryOptions<ConfigurationTemplateResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<ConfigurationTemplateResponse>) => void
  ): UseQueryResult<ConfigurationTemplateResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useConfigurationTemplateAdminApi_GetConfiguration_ByName>[1]
  ) => async () => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getConfiguration_ByName(input.name))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<ConfigurationTemplateResponse, AxiosError<ApiError>>({
    queryKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useConfigurationTemplateAdminApi_UpdateConfiguration_ByName = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ConfigurationTemplateResponse, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: UpdateConfigurationTemplateRequest }>, 'mutationKey'>,
    callback?: (data: ConfigurationTemplateResponse) => void
  ): UseMutationResult<ConfigurationTemplateResponse, AxiosError<ApiError>, SdkSetConfigParam & { name:string, data: UpdateConfigurationTemplateRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { name:string, data: UpdateConfigurationTemplateRequest }) => {
      const response = 
            (await ConfigurationTemplateAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateConfiguration_ByName(input.name, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ConfigurationTemplateAdmin.Configuration_ByName],
    mutationFn,
    ...options
  })
}
  
  
  