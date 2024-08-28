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
import { FleetsApi } from "../FleetsApi.js"

import { FleetClaimByKeysReq } from '../../generated-definitions/FleetClaimByKeysReq.js'
import { FleetClaimReq } from '../../generated-definitions/FleetClaimReq.js'
import { FleetClaimResponse } from '../../generated-definitions/FleetClaimResponse.js'


export enum Key_Fleets {
  ServerClaim = 'Ams.Fleets.ServerClaim',
Claim_ByFleetId = 'Ams.Fleets.Claim_ByFleetId',

}

  

export const useFleetsApi_UpdateServerClaim = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: FleetClaimByKeysReq }>, 'mutationKey'>,
    callback?: (data: FleetClaimResponse) => void
  ): UseMutationResult<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { data: FleetClaimByKeysReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: FleetClaimByKeysReq }) => {
      const response = 
            (await FleetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateServerClaim(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Fleets.ServerClaim],
    mutationFn,
    ...options
  })
}
  
  

export const useFleetsApi_UpdateClaim_ByFleetId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { fleetID:string, data: FleetClaimReq }>, 'mutationKey'>,
    callback?: (data: FleetClaimResponse) => void
  ): UseMutationResult<FleetClaimResponse, AxiosError<ApiError>, SdkSetConfigParam & { fleetID:string, data: FleetClaimReq }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { fleetID:string, data: FleetClaimReq }) => {
      const response = 
            (await FleetsApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateClaim_ByFleetId(input.fleetID, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_Fleets.Claim_ByFleetId],
    mutationFn,
    ...options
  })
}
  
  
  