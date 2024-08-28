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
import { StatConfigurationApi } from "../StatConfigurationApi.js"

import { StatCreate } from '../../generated-definitions/StatCreate.js'
import { StatInfo } from '../../generated-definitions/StatInfo.js'


export enum Key_StatConfiguration {
  Stat = 'Social.StatConfiguration.Stat',

}

  

export const useStatConfigurationApi_CreateStat = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }>, 'mutationKey'>,
    callback?: (data: StatInfo) => void
  ): UseMutationResult<StatInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: StatCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: StatCreate }) => {
      const response = 
            (await StatConfigurationApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createStat(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_StatConfiguration.Stat],
    mutationFn,
    ...options
  })
}
  
  
  