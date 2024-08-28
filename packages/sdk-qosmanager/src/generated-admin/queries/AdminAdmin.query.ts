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
import { AdminAdminApi } from "../AdminAdminApi.js"

import { SetAliasRequest } from '../../generated-definitions/SetAliasRequest.js'
import { UpdateServerRequest } from '../../generated-definitions/UpdateServerRequest.js'


export enum Key_AdminAdmin {
  Server_ByRegion = 'Qosmanager.AdminAdmin.Server_ByRegion',
Alia_ByRegion = 'Qosmanager.AdminAdmin.Alia_ByRegion',

}

  

export const useAdminAdminApi_DeleteServer_ByRegion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { region:string }) => {
      const response = 
            (await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteServer_ByRegion(input.region))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_AdminAdmin.Server_ByRegion],
    mutationFn,
    ...options
  })
}
  
  

export const useAdminAdminApi_CreateAlia_ByRegion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string, data: SetAliasRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string, data: SetAliasRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { region:string, data: SetAliasRequest }) => {
      const response = 
            (await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createAlia_ByRegion(input.region, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_AdminAdmin.Alia_ByRegion],
    mutationFn,
    ...options
  })
}
  
  

export const useAdminAdminApi_PatchServer_ByRegion = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string, data: UpdateServerRequest }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { region:string, data: UpdateServerRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { region:string, data: UpdateServerRequest }) => {
      const response = 
            (await AdminAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                patchServer_ByRegion(input.region, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_AdminAdmin.Server_ByRegion],
    mutationFn,
    ...options
  })
}
  
  
  