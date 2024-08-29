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
import { ServerApi } from "../ServerApi.js"

import { HeartbeatRequest } from '../../generated-definitions/HeartbeatRequest.js'


export enum Key_Server {
  ServerHeartbeat = 'Qosmanager.Server.ServerHeartbeat',

}

  

export const useServerApi_CreateServerHeartbeat = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: HeartbeatRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: HeartbeatRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: HeartbeatRequest }) => {
      const response = 
            (await ServerApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createServerHeartbeat(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Server.ServerHeartbeat],
    mutationFn,
    ...options
  })
}
  
  
  