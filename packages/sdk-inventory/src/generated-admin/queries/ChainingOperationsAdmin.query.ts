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
import { ChainingOperationsAdminApi } from "../ChainingOperationsAdminApi.js"

import { ChainingOperationReq } from '../../generated-definitions/ChainingOperationReq.js'
import { ChainingOperationResp } from '../../generated-definitions/ChainingOperationResp.js'


export enum Key_ChainingOperationsAdmin {
  ChainingOperation = 'Inventory.ChainingOperationsAdmin.ChainingOperation',

}

  

export const useChainingOperationsAdminApi_CreateChainingOperation = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<ChainingOperationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: ChainingOperationReq }>, 'mutationKey'>,
    callback?: (data: ChainingOperationResp) => void
  ): UseMutationResult<ChainingOperationResp, AxiosError<ApiError>, SdkSetConfigParam & { data: ChainingOperationReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: ChainingOperationReq }) => {
      const response = 
            (await ChainingOperationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createChainingOperation(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_ChainingOperationsAdmin.ChainingOperation],
    mutationFn,
    ...options
  })
}
  
  
  