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
import { PlatformAchievementAdminApi } from "../PlatformAchievementAdminApi.js"

import { BulkCreatePsnEventResponse } from '../../generated-definitions/BulkCreatePsnEventResponse.js'
import { BulkCreatePsnEvents } from '../../generated-definitions/BulkCreatePsnEvents.js'


export enum Key_PlatformAchievementAdmin {
  PlatformPsnBulk = 'Achievement.PlatformAchievementAdmin.PlatformPsnBulk',

}

  

export const usePlatformAchievementAdminApi_CreatePlatformPsnBulk = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkCreatePsnEventResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCreatePsnEvents }>, 'mutationKey'>,
    callback?: (data: BulkCreatePsnEventResponse) => void
  ): UseMutationResult<BulkCreatePsnEventResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: BulkCreatePsnEvents }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: BulkCreatePsnEvents }) => {
      const response = 
            (await PlatformAchievementAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createPlatformPsnBulk(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_PlatformAchievementAdmin.PlatformPsnBulk],
    mutationFn,
    ...options
  })
}
  
  
  