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
import { AxiosError } from 'axios'
// @ts-ignore
import { useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { SessionStorageApi } from "../SessionStorageApi.js"




export enum Key_SessionStorage {
  StorageLeader_BySessionId = 'Session.SessionStorage.StorageLeader_BySessionId',
StorageUser_BySessionId_ByUserId = 'Session.SessionStorage.StorageUser_BySessionId_ByUserId',

}

  

export const useSessionStorageApi_PatchStorageLeader_BySessionId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string }) => {
      const response = 
            (await SessionStorageApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStorageLeader_BySessionId(input.sessionId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SessionStorage.StorageLeader_BySessionId],
    mutationFn,
    ...options
  })
}
  
  

export const useSessionStorageApi_PatchStorageUser_BySessionId_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, userId:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { sessionId:string, userId:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { sessionId:string, userId:string }) => {
      const response = 
            (await SessionStorageApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchStorageUser_BySessionId_ByUserId(input.sessionId, input.userId))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SessionStorage.StorageUser_BySessionId_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  