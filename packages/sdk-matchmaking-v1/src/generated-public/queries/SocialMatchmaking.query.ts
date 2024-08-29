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
import { SocialMatchmakingApi } from "../SocialMatchmakingApi.js"

import { UpdatePlayTimeWeightRequest } from '../../generated-definitions/UpdatePlayTimeWeightRequest.js'
import { UpdatePlayerPlaytimeWeightResponse } from '../../generated-definitions/UpdatePlayerPlaytimeWeightResponse.js'


export enum Key_SocialMatchmaking {
  SocialPlaytimeWeight = 'Matchmaking.SocialMatchmaking.SocialPlaytimeWeight',

}

  

export const useSocialMatchmakingApi_PatchSocialPlaytimeWeight = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<UpdatePlayerPlaytimeWeightResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdatePlayTimeWeightRequest }>, 'mutationKey'>,
    callback?: (data: UpdatePlayerPlaytimeWeightResponse) => void
  ): UseMutationResult<UpdatePlayerPlaytimeWeightResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: UpdatePlayTimeWeightRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: UpdatePlayTimeWeightRequest }) => {
      const response = 
            (await SocialMatchmakingApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchSocialPlaytimeWeight(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_SocialMatchmaking.SocialPlaytimeWeight],
    mutationFn,
    ...options
  })
}
  
  
  