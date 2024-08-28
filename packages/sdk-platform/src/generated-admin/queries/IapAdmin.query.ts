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
import { IapAdminApi } from "../IapAdminApi.js"

import { AppleIapConfigInfo } from '../../generated-definitions/AppleIapConfigInfo.js'
import { AppleIapConfigRequest } from '../../generated-definitions/AppleIapConfigRequest.js'
import { EpicGamesIapConfigInfo } from '../../generated-definitions/EpicGamesIapConfigInfo.js'
import { EpicGamesIapConfigRequest } from '../../generated-definitions/EpicGamesIapConfigRequest.js'
import { GoogleIapConfigInfo } from '../../generated-definitions/GoogleIapConfigInfo.js'
import { GoogleIapConfigRequest } from '../../generated-definitions/GoogleIapConfigRequest.js'
import { IapConsumeHistoryPagingSlicedResult } from '../../generated-definitions/IapConsumeHistoryPagingSlicedResult.js'
import { IapItemConfigInfo } from '../../generated-definitions/IapItemConfigInfo.js'
import { IapItemConfigUpdate } from '../../generated-definitions/IapItemConfigUpdate.js'
import { IapOrderPagingSlicedResult } from '../../generated-definitions/IapOrderPagingSlicedResult.js'
import { MockIapReceipt } from '../../generated-definitions/MockIapReceipt.js'
import { OculusIapConfigInfo } from '../../generated-definitions/OculusIapConfigInfo.js'
import { OculusIapConfigRequest } from '../../generated-definitions/OculusIapConfigRequest.js'
import { PlayStationIapConfigInfo } from '../../generated-definitions/PlayStationIapConfigInfo.js'
import { PlaystationIapConfigRequest } from '../../generated-definitions/PlaystationIapConfigRequest.js'
import { SteamIapConfig } from '../../generated-definitions/SteamIapConfig.js'
import { SteamIapConfigInfo } from '../../generated-definitions/SteamIapConfigInfo.js'
import { SteamIapConfigRequest } from '../../generated-definitions/SteamIapConfigRequest.js'
import { TestResult } from '../../generated-definitions/TestResult.js'
import { TwitchIapConfigInfo } from '../../generated-definitions/TwitchIapConfigInfo.js'
import { TwitchIapConfigRequest } from '../../generated-definitions/TwitchIapConfigRequest.js'
import { XblIapConfigInfo } from '../../generated-definitions/XblIapConfigInfo.js'
import { XblIapConfigRequest } from '../../generated-definitions/XblIapConfigRequest.js'


export enum Key_IapAdmin {
  IapConfigXbl = 'Platform.IapAdmin.IapConfigXbl',
IapConfigItem = 'Platform.IapAdmin.IapConfigItem',
IapConfigApple = 'Platform.IapAdmin.IapConfigApple',
IapConfigSteam = 'Platform.IapAdmin.IapConfigSteam',
IapConfigGoogle = 'Platform.IapAdmin.IapConfigGoogle',
IapConfigOculu = 'Platform.IapAdmin.IapConfigOculu',
IapConfigOculus = 'Platform.IapAdmin.IapConfigOculus',
IapConfigTwitch = 'Platform.IapAdmin.IapConfigTwitch',
Iap_ByUserId = 'Platform.IapAdmin.Iap_ByUserId',
IapConfigXblCert = 'Platform.IapAdmin.IapConfigXblCert',
IapConfigEpicgame = 'Platform.IapAdmin.IapConfigEpicgame',
IapConfigEpicgames = 'Platform.IapAdmin.IapConfigEpicgames',
IapConfigGoogleCert = 'Platform.IapAdmin.IapConfigGoogleCert',
IapConfigPlaystation = 'Platform.IapAdmin.IapConfigPlaystation',
IapAll_ByUserId = 'Platform.IapAdmin.IapAll_ByUserId',
IapConfigPlaystationValidate = 'Platform.IapAdmin.IapConfigPlaystationValidate',
IapMockReceipt_ByUserId = 'Platform.IapAdmin.IapMockReceipt_ByUserId',
IapConsumeHistory_ByUserId = 'Platform.IapAdmin.IapConsumeHistory_ByUserId',

}

  

export const useIapAdminApi_DeleteIapConfigXbl = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigXbl())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXbl],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigXbl = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<XblIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<XblIapConfigInfo>) => void
  ): UseQueryResult<XblIapConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigXbl>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigXbl())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<XblIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigXbl, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigXbl = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: XblIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: XblIapConfigInfo) => void
  ): UseMutationResult<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: XblIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: XblIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigXbl(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXbl],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigItem = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigItem())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigItem],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigItem = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<IapItemConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<IapItemConfigInfo>) => void
  ): UseQueryResult<IapItemConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigItem>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigItem())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<IapItemConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigItem, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigItem = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<IapItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: IapItemConfigUpdate }>, 'mutationKey'>,
    callback?: (data: IapItemConfigInfo) => void
  ): UseMutationResult<IapItemConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: IapItemConfigUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: IapItemConfigUpdate }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigItem(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigItem],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigApple = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigApple())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigApple],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigApple = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<AppleIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<AppleIapConfigInfo>) => void
  ): UseQueryResult<AppleIapConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigApple>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigApple())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<AppleIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigApple, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigApple = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AppleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: AppleIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: AppleIapConfigInfo) => void
  ): UseMutationResult<AppleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: AppleIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: AppleIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigApple(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigApple],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigSteam = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigSteam())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigSteam],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigSteam = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<SteamIapConfig, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SteamIapConfig>) => void
  ): UseQueryResult<SteamIapConfig, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigSteam>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigSteam())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SteamIapConfig, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigSteam, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigSteam = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SteamIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SteamIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: SteamIapConfigInfo) => void
  ): UseMutationResult<SteamIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: SteamIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: SteamIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigSteam(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigSteam],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigGoogle = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigGoogle())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogle],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigGoogle = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<GoogleIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<GoogleIapConfigInfo>) => void
  ): UseQueryResult<GoogleIapConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigGoogle>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigGoogle())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<GoogleIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigGoogle, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigGoogle = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: GoogleIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: GoogleIapConfigInfo) => void
  ): UseMutationResult<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: GoogleIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: GoogleIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigGoogle(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogle],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigOculu = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigOculu())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigOculu],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigOculus = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<OculusIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<OculusIapConfigInfo>) => void
  ): UseQueryResult<OculusIapConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigOculus>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigOculus())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<OculusIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigOculus, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigOculu = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OculusIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: OculusIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: OculusIapConfigInfo) => void
  ): UseMutationResult<OculusIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: OculusIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: OculusIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigOculu(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigOculu],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigTwitch = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigTwitch())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigTwitch],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigTwitch = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<TwitchIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TwitchIapConfigInfo>) => void
  ): UseQueryResult<TwitchIapConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigTwitch>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigTwitch())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TwitchIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigTwitch, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigTwitch = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TwitchIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: TwitchIapConfigInfo) => void
  ): UseMutationResult<TwitchIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: TwitchIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigTwitch(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigTwitch],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIap_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {endTime?: string | null, limit?: number, offset?: number, productId?: string | null, startTime?: string | null, status?: 'FAILED' | 'FULFILLED' | 'VERIFIED', type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'} },
    options?: Omit<UseQueryOptions<IapOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<IapOrderPagingSlicedResult>) => void
  ): UseQueryResult<IapOrderPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIap_ByUserId>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIap_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<IapOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.Iap_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigXblCert = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File,password?: string | null} }>, 'mutationKey'>,
    callback?: (data: XblIapConfigInfo) => void
  ): UseMutationResult<XblIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File,password?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File,password?: string | null} }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigXblCert(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigXblCert],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigEpicgame = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigEpicgame())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigEpicgame],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigEpicgames = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<EpicGamesIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EpicGamesIapConfigInfo>) => void
  ): UseQueryResult<EpicGamesIapConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigEpicgames>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigEpicgames())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EpicGamesIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigEpicgames, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigEpicgame = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<EpicGamesIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: EpicGamesIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: EpicGamesIapConfigInfo) => void
  ): UseMutationResult<EpicGamesIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: EpicGamesIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: EpicGamesIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigEpicgame(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigEpicgame],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigGoogleCert = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File} }>, 'mutationKey'>,
    callback?: (data: GoogleIapConfigInfo) => void
  ): UseMutationResult<GoogleIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: {file?: File} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: {file?: File} }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigGoogleCert(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigGoogleCert],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_DeleteIapConfigPlaystation = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam >, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam > => { 
  //
  const mutationFn = async (input: SdkSetConfigParam ) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteIapConfigPlaystation())
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystation],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigPlaystation = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PlayStationIapConfigInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PlayStationIapConfigInfo>) => void
  ): UseQueryResult<PlayStationIapConfigInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigPlaystation>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigPlaystation())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PlayStationIapConfigInfo, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigPlaystation, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigPlaystation = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayStationIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: PlayStationIapConfigInfo) => void
  ): UseMutationResult<PlayStationIapConfigInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PlaystationIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigPlaystation(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystation],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapAll_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<IapOrderPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<IapOrderPagingSlicedResult>) => void
  ): UseQueryResult<IapOrderPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapAll_ByUserId>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapAll_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<IapOrderPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapAll_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConfigPlaystationValidate = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<TestResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<TestResult>) => void
  ): UseQueryResult<TestResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConfigPlaystationValidate>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConfigPlaystationValidate())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<TestResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConfigPlaystationValidate, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapConfigPlaystationValidate = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }>, 'mutationKey'>,
    callback?: (data: TestResult) => void
  ): UseMutationResult<TestResult, AxiosError<ApiError>, SdkSetConfigParam & { data: PlaystationIapConfigRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: PlaystationIapConfigRequest }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapConfigPlaystationValidate(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapConfigPlaystationValidate],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_UpdateIapMockReceipt_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: MockIapReceipt }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: MockIapReceipt }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: MockIapReceipt }) => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapMockReceipt_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_IapAdmin.IapMockReceipt_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapAdminApi_GetIapConsumeHistory_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string,  queryParams?: {endTime?: string | null, limit?: number, offset?: number, startTime?: string | null, status?: 'FAIL' | 'PENDING' | 'SUCCESS', type?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'} },
    options?: Omit<UseQueryOptions<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<IapConsumeHistoryPagingSlicedResult>) => void
  ): UseQueryResult<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapAdminApi_GetIapConsumeHistory_ByUserId>[1]
  ) => async () => {
      const response = 
            (await IapAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapConsumeHistory_ByUserId(input.userId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<IapConsumeHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_IapAdmin.IapConsumeHistory_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  