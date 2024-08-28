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
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { SlotAdminApi } from "../SlotAdminApi.js"

import { SlotInfoArray } from '../../generated-definitions/SlotInfoArray.js'


export enum Key_SlotAdmin {
  Slots_ByUserId = 'Social.SlotAdmin.Slots_ByUserId',
Slot_ByUserId_BySlotId = 'Social.SlotAdmin.Slot_ByUserId_BySlotId',

}

  

export const useSlotAdminApi_GetSlots_ByUserId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string },
    options?: Omit<UseQueryOptions<SlotInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<SlotInfoArray>) => void
  ): UseQueryResult<SlotInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSlotAdminApi_GetSlots_ByUserId>[1]
  ) => async () => {
      const response = 
            (await SlotAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSlots_ByUserId(input.userId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<SlotInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_SlotAdmin.Slots_ByUserId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useSlotAdminApi_GetSlot_ByUserId_BySlotId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { userId:string, slotId:string },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useSlotAdminApi_GetSlot_ByUserId_BySlotId>[1]
  ) => async () => {
      const response = 
            (await SlotAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getSlot_ByUserId_BySlotId(input.userId, input.slotId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_SlotAdmin.Slot_ByUserId_BySlotId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  