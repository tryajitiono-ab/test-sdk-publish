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
import { DrmApi } from "../DrmApi.js"

import { EncryptedIdentity } from '../../generated-definitions/EncryptedIdentity.js'
import { PublicKeyPresignedUrl } from '../../generated-definitions/PublicKeyPresignedUrl.js'


export enum Key_Drm {
  DrmlicenseEncrypt = 'Buildinfo.Drm.DrmlicenseEncrypt',
DrmlicenseRetrievePublicKey = 'Buildinfo.Drm.DrmlicenseRetrievePublicKey',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Drm.DrmlicenseEncrypt, input]
 * }
 * ```
 */
export const useDrmApi_GetDrmlicenseEncrypt = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams: {appId: string | null, machineId: string | null} },
    options?: Omit<UseQueryOptions<EncryptedIdentity, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<EncryptedIdentity>) => void
  ): UseQueryResult<EncryptedIdentity, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDrmApi_GetDrmlicenseEncrypt>[1]
  ) => async () => {
      const response = 
            (await DrmApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDrmlicenseEncrypt(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<EncryptedIdentity, AxiosError<ApiError>>({
    queryKey: [Key_Drm.DrmlicenseEncrypt, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_Drm.DrmlicenseRetrievePublicKey, input]
 * }
 * ```
 */
export const useDrmApi_GetDrmlicenseRetrievePublicKey = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<PublicKeyPresignedUrl, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<PublicKeyPresignedUrl>) => void
  ): UseQueryResult<PublicKeyPresignedUrl, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useDrmApi_GetDrmlicenseRetrievePublicKey>[1]
  ) => async () => {
      const response = 
            (await DrmApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDrmlicenseRetrievePublicKey())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<PublicKeyPresignedUrl, AxiosError<ApiError>>({
    queryKey: [Key_Drm.DrmlicenseRetrievePublicKey, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  
  