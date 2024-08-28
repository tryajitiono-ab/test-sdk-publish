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
import { ChallengeProgressionAdminApi } from "../ChallengeProgressionAdminApi.js"

import { EvaluatePlayerProgressionRequest } from '../../generated-definitions/EvaluatePlayerProgressionRequest.js'


export enum Key_ChallengeProgressionAdmin {
  ProgresEvaluate = 'Challenge.ChallengeProgressionAdmin.ProgresEvaluate',

}

  

export const useChallengeProgressionAdminApi_CreateProgresEvaluate = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EvaluatePlayerProgressionRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: EvaluatePlayerProgressionRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: EvaluatePlayerProgressionRequest }) => {
      const response = 
            (await ChallengeProgressionAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createProgresEvaluate(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChallengeProgressionAdmin.ProgresEvaluate],
    mutationFn,
    ...options
  })
}
  
  
  