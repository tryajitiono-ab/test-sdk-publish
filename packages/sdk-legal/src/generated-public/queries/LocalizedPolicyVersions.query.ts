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
import { AxiosError, AxiosResponse } from 'axios'
// @ts-ignore
import { useQuery, UseQueryOptions, UseQueryResult } from '@tanstack/react-query'
import { LocalizedPolicyVersionsApi } from "../LocalizedPolicyVersionsApi.js"

import { RetrieveLocalizedPolicyVersionPublicResponse } from '../../generated-definitions/RetrieveLocalizedPolicyVersionPublicResponse.js'


export enum Key_LocalizedPolicyVersions {
  LocalizedPolicyVersion_ByLocalizedPolicyVersionId = 'Legal.LocalizedPolicyVersions.LocalizedPolicyVersion_ByLocalizedPolicyVersionId',

}

  

export const useLocalizedPolicyVersionsApi_GetLocalizedPolicyVersion_ByLocalizedPolicyVersionId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { localizedPolicyVersionId:string },
    options?: Omit<UseQueryOptions<RetrieveLocalizedPolicyVersionPublicResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RetrieveLocalizedPolicyVersionPublicResponse>) => void
  ): UseQueryResult<RetrieveLocalizedPolicyVersionPublicResponse, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useLocalizedPolicyVersionsApi_GetLocalizedPolicyVersion_ByLocalizedPolicyVersionId>[1]
  ) => async () => {
      const response = 
            (await LocalizedPolicyVersionsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getLocalizedPolicyVersion_ByLocalizedPolicyVersionId(input.localizedPolicyVersionId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RetrieveLocalizedPolicyVersionPublicResponse, AxiosError<ApiError>>({
    queryKey: [Key_LocalizedPolicyVersions.LocalizedPolicyVersion_ByLocalizedPolicyVersionId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  