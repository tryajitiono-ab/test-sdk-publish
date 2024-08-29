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
import { BlocksApi } from "../BlocksApi.js"

import { NativeUserBlockRequest } from '../../generated-definitions/NativeUserBlockRequest.js'
import { NativeUserBlockResponseArray } from '../../generated-definitions/NativeUserBlockResponseArray.js'


export enum Key_Blocks {
  SyncMeBlock = 'Lobby.Blocks.SyncMeBlock',

}

  

export const useBlocksApi_PatchSyncMeBlock = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<NativeUserBlockResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: NativeUserBlockRequest[] }>, 'mutationKey'>,
    callback?: (data: NativeUserBlockResponseArray) => void
  ): UseMutationResult<NativeUserBlockResponseArray, AxiosError<ApiError>, SdkSetConfigParam & { data: NativeUserBlockRequest[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: NativeUserBlockRequest[] }) => {
      const response = 
            (await BlocksApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchSyncMeBlock(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Blocks.SyncMeBlock],
    mutationFn,
    ...options
  })
}
  
  
  