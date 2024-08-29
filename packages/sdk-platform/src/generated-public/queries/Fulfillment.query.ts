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
import { FulfillmentApi } from "../FulfillmentApi.js"

import { FulfillCodeRequest } from '../../generated-definitions/FulfillCodeRequest.js'
import { FulfillmentResult } from '../../generated-definitions/FulfillmentResult.js'


export enum Key_Fulfillment {
  FulfillmentCode_ByUserId = 'Platform.Fulfillment.FulfillmentCode_ByUserId',

}

  

export const useFulfillmentApi_CreateFulfillmentCode_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: FulfillCodeRequest }>, 'mutationKey'>,
    callback?: (data: FulfillmentResult) => void
  ): UseMutationResult<FulfillmentResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: FulfillCodeRequest }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: FulfillCodeRequest }) => {
      const response = 
            (await FulfillmentApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFulfillmentCode_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Fulfillment.FulfillmentCode_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  