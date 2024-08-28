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
import { UserAgreementAdminApi } from "../UserAgreementAdminApi.js"

import { AcceptAgreementRequest } from '../../generated-definitions/AcceptAgreementRequest.js'
import { AcceptAgreementResponse } from '../../generated-definitions/AcceptAgreementResponse.js'


export enum Key_UserAgreementAdmin {
  AgreementPolicy_ByUserId = 'Legal.UserAgreementAdmin.AgreementPolicy_ByUserId',

}

  

export const useUserAgreementAdminApi_CreateAgreementPolicy_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<AcceptAgreementResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AcceptAgreementRequest[], queryParams: {clientId: string | null, countryCode: string | null, publisherUserId?: string | null} }>, 'mutationKey'>,
    callback?: (data: AcceptAgreementResponse) => void
  ): UseMutationResult<AcceptAgreementResponse, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: AcceptAgreementRequest[], queryParams: {clientId: string | null, countryCode: string | null, publisherUserId?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: AcceptAgreementRequest[], queryParams: {clientId: string | null, countryCode: string | null, publisherUserId?: string | null} }) => {
      const response = 
            (await UserAgreementAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createAgreementPolicy_ByUserId(input.userId, input.data, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_UserAgreementAdmin.AgreementPolicy_ByUserId],
    mutationFn,
    ...options
  })
}
  
  
  