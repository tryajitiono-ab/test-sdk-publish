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
import { IapApi } from "../IapApi.js"

import { AppleIapReceipt } from '../../generated-definitions/AppleIapReceipt.js'
import { EpicGamesReconcileRequest } from '../../generated-definitions/EpicGamesReconcileRequest.js'
import { EpicGamesReconcileResultArray } from '../../generated-definitions/EpicGamesReconcileResultArray.js'
import { GoogleIapReceipt } from '../../generated-definitions/GoogleIapReceipt.js'
import { GoogleReceiptResolveResult } from '../../generated-definitions/GoogleReceiptResolveResult.js'
import { IapItemMappingInfo } from '../../generated-definitions/IapItemMappingInfo.js'
import { OculusReconcileResultArray } from '../../generated-definitions/OculusReconcileResultArray.js'
import { PlayStationMultiServiceLabelsReconcileRequest } from '../../generated-definitions/PlayStationMultiServiceLabelsReconcileRequest.js'
import { PlayStationReconcileRequest } from '../../generated-definitions/PlayStationReconcileRequest.js'
import { PlayStationReconcileResultArray } from '../../generated-definitions/PlayStationReconcileResultArray.js'
import { SteamSyncRequest } from '../../generated-definitions/SteamSyncRequest.js'
import { TwitchSyncRequest } from '../../generated-definitions/TwitchSyncRequest.js'
import { TwitchSyncResultArray } from '../../generated-definitions/TwitchSyncResultArray.js'
import { XblReconcileRequest } from '../../generated-definitions/XblReconcileRequest.js'
import { XblReconcileResultArray } from '../../generated-definitions/XblReconcileResultArray.js'


export enum Key_Iap {
  IapItemMapping = 'Platform.Iap.IapItemMapping',
UserMeIapTwitchSync = 'Platform.Iap.UserMeIapTwitchSync',
IapPsnSync_ByUserId = 'Platform.Iap.IapPsnSync_ByUserId',
IapXblSync_ByUserId = 'Platform.Iap.IapXblSync_ByUserId',
IapSteamSync_ByUserId = 'Platform.Iap.IapSteamSync_ByUserId',
IapOculuSync_ByUserId = 'Platform.Iap.IapOculuSync_ByUserId',
IapTwitchSync_ByUserId = 'Platform.Iap.IapTwitchSync_ByUserId',
IapAppleReceipt_ByUserId = 'Platform.Iap.IapAppleReceipt_ByUserId',
IapEpicgameSync_ByUserId = 'Platform.Iap.IapEpicgameSync_ByUserId',
IapGoogleReceipt_ByUserId = 'Platform.Iap.IapGoogleReceipt_ByUserId',
IapPsnSyncMultiServiceLabel_ByUserId = 'Platform.Iap.IapPsnSyncMultiServiceLabel_ByUserId',

}

  

export const useIapApi_GetIapItemMapping = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {platform?: 'APPLE' | 'EPICGAMES' | 'GOOGLE' | 'OCULUS' | 'PLAYSTATION' | 'STADIA' | 'STEAM' | 'TWITCH' | 'XBOX'} },
    options?: Omit<UseQueryOptions<IapItemMappingInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<IapItemMappingInfo>) => void
  ): UseQueryResult<IapItemMappingInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useIapApi_GetIapItemMapping>[1]
  ) => async () => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getIapItemMapping(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<IapItemMappingInfo, AxiosError<ApiError>>({
    queryKey: [Key_Iap.IapItemMapping, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useIapApi_UpdateUserMeIapTwitchSync = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<TwitchSyncResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchSyncRequest }>, 'mutationKey'>,
    callback?: (data: TwitchSyncResultArray) => void
  ): UseMutationResult<TwitchSyncResultArray, AxiosError<ApiError>, SdkSetConfigParam & { data: TwitchSyncRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: TwitchSyncRequest }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateUserMeIapTwitchSync(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.UserMeIapTwitchSync],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapPsnSync_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayStationReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PlayStationReconcileRequest }>, 'mutationKey'>,
    callback?: (data: PlayStationReconcileResultArray) => void
  ): UseMutationResult<PlayStationReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PlayStationReconcileRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: PlayStationReconcileRequest }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapPsnSync_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapPsnSync_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapXblSync_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<XblReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: XblReconcileRequest }>, 'mutationKey'>,
    callback?: (data: XblReconcileResultArray) => void
  ): UseMutationResult<XblReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: XblReconcileRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: XblReconcileRequest }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapXblSync_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapXblSync_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapSteamSync_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SteamSyncRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: SteamSyncRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: SteamSyncRequest }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapSteamSync_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapSteamSync_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapOculuSync_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<OculusReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }>, 'mutationKey'>,
    callback?: (data: OculusReconcileResultArray) => void
  ): UseMutationResult<OculusReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapOculuSync_ByUserId(input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapOculuSync_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapTwitchSync_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: TwitchSyncRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: TwitchSyncRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: TwitchSyncRequest }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapTwitchSync_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapTwitchSync_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapAppleReceipt_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AppleIapReceipt }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AppleIapReceipt }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: AppleIapReceipt }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapAppleReceipt_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapAppleReceipt_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapEpicgameSync_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<EpicGamesReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: EpicGamesReconcileRequest }>, 'mutationKey'>,
    callback?: (data: EpicGamesReconcileResultArray) => void
  ): UseMutationResult<EpicGamesReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: EpicGamesReconcileRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: EpicGamesReconcileRequest }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapEpicgameSync_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapEpicgameSync_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapGoogleReceipt_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<GoogleReceiptResolveResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: GoogleIapReceipt }>, 'mutationKey'>,
    callback?: (data: GoogleReceiptResolveResult) => void
  ): UseMutationResult<GoogleReceiptResolveResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: GoogleIapReceipt }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: GoogleIapReceipt }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapGoogleReceipt_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapGoogleReceipt_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useIapApi_UpdateIapPsnSyncMultiServiceLabel_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<PlayStationReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PlayStationMultiServiceLabelsReconcileRequest }>, 'mutationKey'>,
    callback?: (data: PlayStationReconcileResultArray) => void
  ): UseMutationResult<PlayStationReconcileResultArray, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: PlayStationMultiServiceLabelsReconcileRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: PlayStationMultiServiceLabelsReconcileRequest }) => {
      const response = 
            (await IapApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateIapPsnSyncMultiServiceLabel_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Iap.IapPsnSyncMultiServiceLabel_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  