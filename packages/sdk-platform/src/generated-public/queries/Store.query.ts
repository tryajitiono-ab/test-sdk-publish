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
import { StoreApi } from "../StoreApi.js"

import { StoreInfoArray } from '../../generated-definitions/StoreInfoArray.js'


export enum Key_Store {
  Stores = 'Platform.Store.Stores',

}

  

export const useStoreApi_GetStores = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<StoreInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<StoreInfoArray>) => void
  ): UseQueryResult<StoreInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useStoreApi_GetStores>[1]
  ) => async () => {
      const response = 
            (await StoreApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getStores())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<StoreInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_Store.Stores, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  