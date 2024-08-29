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
import { SlotApi } from "../SlotApi.js"

import { SlotInfo } from '../../generated-definitions/SlotInfo.js'
import { SlotInfoArray } from '../../generated-definitions/SlotInfoArray.js'
import { SlotMetadataUpdate } from '../../generated-definitions/SlotMetadataUpdate.js'


export enum Key_Slot {
  Slots_ByUserId = 'Social.Slot.Slots_ByUserId',
Slot_ByUserId = 'Social.Slot.Slot_ByUserId',
Slot_ByUserId_BySlotId = 'Social.Slot.Slot_ByUserId_BySlotId',
Metadata_ByUserId_BySlotId = 'Social.Slot.Metadata_ByUserId_BySlotId',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Slot.Slots_ByUserId, input]
 * }
 * ```
 */
export const useSlotApi_GetSlots_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<SlotInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SlotInfoArray>) => void
  ): UseQueryResult<SlotInfoArray, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSlotApi_GetSlots_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SlotApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSlots_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SlotInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Slot.Slots_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSlotApi_CreateSlot_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]} }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]} }) => {
      const response = 
            (await SlotApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createSlot_ByUserId(input.userId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Slot.Slot_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useSlotApi_DeleteSlot_ByUserId_BySlotId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, slotId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, slotId:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, slotId:string }) => {
      const response = 
            (await SlotApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteSlot_ByUserId_BySlotId(input.userId, input.slotId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Slot.Slot_ByUserId_BySlotId],
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
 *    queryKey: [Key_Slot.Slot_ByUserId_BySlotId, input]
 * }
 * ```
 */
export const useSlotApi_GetSlot_ByUserId_BySlotId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, slotId:string },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSlotApi_GetSlot_ByUserId_BySlotId>[1]
  ) => async () => {
      const response = 
            (await SlotApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSlot_ByUserId_BySlotId(input.userId, input.slotId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_Slot.Slot_ByUserId_BySlotId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSlotApi_UpdateSlot_ByUserId_BySlotId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SlotInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, slotId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]} }>, 'mutationKey'>,
    callback?: (data: SlotInfo) => void
  ): UseMutationResult<SlotInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, slotId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]} }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, slotId:string, data: {checksum?: string | null,customAttribute?: string | null,file?: File}, queryParams?: {label?: string | null, tags?: string[]} }) => {
      const response = 
            (await SlotApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateSlot_ByUserId_BySlotId(input.userId, input.slotId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Slot.Slot_ByUserId_BySlotId],
    mutationFn,
    ...options
  })
}
  
  

export const useSlotApi_UpdateMetadata_ByUserId_BySlotId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<SlotInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, slotId:string, data: SlotMetadataUpdate }>, 'mutationKey'>,
    callback?: (data: SlotInfo) => void
  ): UseMutationResult<SlotInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, slotId:string, data: SlotMetadataUpdate }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, slotId:string, data: SlotMetadataUpdate }) => {
      const response = 
            (await SlotApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateMetadata_ByUserId_BySlotId(input.userId, input.slotId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Slot.Metadata_ByUserId_BySlotId],
    mutationFn,
    ...options
  })
}
  
  
  