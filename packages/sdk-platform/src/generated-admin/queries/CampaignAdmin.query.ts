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
import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'
import { CampaignAdminApi } from "../CampaignAdminApi.js"

import { BulkOperationResult } from '../../generated-definitions/BulkOperationResult.js'
import { CampaignBatchNameChange } from '../../generated-definitions/CampaignBatchNameChange.js'
import { CampaignBatchNameInfoArray } from '../../generated-definitions/CampaignBatchNameInfoArray.js'
import { CampaignCreate } from '../../generated-definitions/CampaignCreate.js'
import { CampaignDynamicInfo } from '../../generated-definitions/CampaignDynamicInfo.js'
import { CampaignInfo } from '../../generated-definitions/CampaignInfo.js'
import { CampaignPagingSlicedResult } from '../../generated-definitions/CampaignPagingSlicedResult.js'
import { CampaignUpdate } from '../../generated-definitions/CampaignUpdate.js'
import { CodeCreate } from '../../generated-definitions/CodeCreate.js'
import { CodeCreateResult } from '../../generated-definitions/CodeCreateResult.js'
import { CodeInfo } from '../../generated-definitions/CodeInfo.js'
import { CodeInfoPagingSlicedResult } from '../../generated-definitions/CodeInfoPagingSlicedResult.js'
import { RedeemHistoryPagingSlicedResult } from '../../generated-definitions/RedeemHistoryPagingSlicedResult.js'
import { RedeemRequest } from '../../generated-definitions/RedeemRequest.js'
import { RedeemResult } from '../../generated-definitions/RedeemResult.js'


export enum Key_CampaignAdmin {
  Campaigns = 'Platform.CampaignAdmin.Campaigns',
Campaign = 'Platform.CampaignAdmin.Campaign',
Code_ByCode = 'Platform.CampaignAdmin.Code_ByCode',
Enable_ByCode = 'Platform.CampaignAdmin.Enable_ByCode',
Disable_ByCode = 'Platform.CampaignAdmin.Disable_ByCode',
Campaign_ByCampaignId = 'Platform.CampaignAdmin.Campaign_ByCampaignId',
Redemption_ByUserId = 'Platform.CampaignAdmin.Redemption_ByUserId',
CodeCampaign_ByCampaignId = 'Platform.CampaignAdmin.CodeCampaign_ByCampaignId',
Dynamic_ByCampaignId = 'Platform.CampaignAdmin.Dynamic_ByCampaignId',
BatchName_ByCampaignId = 'Platform.CampaignAdmin.BatchName_ByCampaignId',
BatchNames_ByCampaignId = 'Platform.CampaignAdmin.BatchNames_ByCampaignId',
HistoryCodes_ByCampaignId = 'Platform.CampaignAdmin.HistoryCodes_ByCampaignId',
CodesCsv_ByCampaignId = 'Platform.CampaignAdmin.CodesCsv_ByCampaignId',
EnableBulkCode_ByCampaignId = 'Platform.CampaignAdmin.EnableBulkCode_ByCampaignId',
DisableBulkCode_ByCampaignId = 'Platform.CampaignAdmin.DisableBulkCode_ByCampaignId',

}

  

export const useCampaignAdminApi_GetCampaigns = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & {  queryParams?: {limit?: number, name?: string | null, offset?: number, tag?: string | null} },
    options?: Omit<UseQueryOptions<CampaignPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CampaignPagingSlicedResult>) => void
  ): UseQueryResult<CampaignPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetCampaigns>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCampaigns(input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CampaignPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Campaigns, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_CreateCampaign = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CampaignInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CampaignCreate }>, 'mutationKey'>,
    callback?: (data: CampaignInfo) => void
  ): UseMutationResult<CampaignInfo, AxiosError<ApiError>, SdkSetConfigParam & { data: CampaignCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { data: CampaignCreate }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createCampaign(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.Campaign],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_GetCode_ByCode = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { code:string,  queryParams?: {redeemable?: boolean | null, withBatchName?: boolean | null} },
    options?: Omit<UseQueryOptions<CodeInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CodeInfo>) => void
  ): UseQueryResult<CodeInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetCode_ByCode>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCode_ByCode(input.code, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CodeInfo, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Code_ByCode, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_UpdateEnable_ByCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CodeInfo, AxiosError<ApiError>, SdkSetConfigParam & { code:string }>, 'mutationKey'>,
    callback?: (data: CodeInfo) => void
  ): UseMutationResult<CodeInfo, AxiosError<ApiError>, SdkSetConfigParam & { code:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { code:string }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEnable_ByCode(input.code))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.Enable_ByCode],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_UpdateDisable_ByCode = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CodeInfo, AxiosError<ApiError>, SdkSetConfigParam & { code:string }>, 'mutationKey'>,
    callback?: (data: CodeInfo) => void
  ): UseMutationResult<CodeInfo, AxiosError<ApiError>, SdkSetConfigParam & { code:string }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { code:string }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDisable_ByCode(input.code))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.Disable_ByCode],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_GetCampaign_ByCampaignId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { campaignId:string },
    options?: Omit<UseQueryOptions<CampaignInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CampaignInfo>) => void
  ): UseQueryResult<CampaignInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetCampaign_ByCampaignId>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCampaign_ByCampaignId(input.campaignId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CampaignInfo, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Campaign_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_UpdateCampaign_ByCampaignId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CampaignInfo, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string, data: CampaignUpdate }>, 'mutationKey'>,
    callback?: (data: CampaignInfo) => void
  ): UseMutationResult<CampaignInfo, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string, data: CampaignUpdate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { campaignId:string, data: CampaignUpdate }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateCampaign_ByCampaignId(input.campaignId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.Campaign_ByCampaignId],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_CreateRedemption_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<RedeemResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: RedeemRequest }>, 'mutationKey'>,
    callback?: (data: RedeemResult) => void
  ): UseMutationResult<RedeemResult, AxiosError<ApiError>, SdkSetConfigParam & { userId:string, data: RedeemRequest }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string, data: RedeemRequest }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createRedemption_ByUserId(input.userId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.Redemption_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_GetCodeCampaign_ByCampaignId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { campaignId:string,  queryParams?: {activeOnly?: boolean | null, batchName?: string | null, batchNo?: number[], code?: string | null, limit?: number, offset?: number, withBatchName?: boolean | null} },
    options?: Omit<UseQueryOptions<CodeInfoPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CodeInfoPagingSlicedResult>) => void
  ): UseQueryResult<CodeInfoPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetCodeCampaign_ByCampaignId>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCodeCampaign_ByCampaignId(input.campaignId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CodeInfoPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.CodeCampaign_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_CreateCodeCampaign_ByCampaignId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<CodeCreateResult, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string, data: CodeCreate }>, 'mutationKey'>,
    callback?: (data: CodeCreateResult) => void
  ): UseMutationResult<CodeCreateResult, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string, data: CodeCreate }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { campaignId:string, data: CodeCreate }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createCodeCampaign_ByCampaignId(input.campaignId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.CodeCampaign_ByCampaignId],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_GetDynamic_ByCampaignId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { campaignId:string },
    options?: Omit<UseQueryOptions<CampaignDynamicInfo, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CampaignDynamicInfo>) => void
  ): UseQueryResult<CampaignDynamicInfo, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetDynamic_ByCampaignId>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getDynamic_ByCampaignId(input.campaignId))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CampaignDynamicInfo, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.Dynamic_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_UpdateBatchName_ByCampaignId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string, data: CampaignBatchNameChange }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string, data: CampaignBatchNameChange }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { campaignId:string, data: CampaignBatchNameChange }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateBatchName_ByCampaignId(input.campaignId, input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.BatchName_ByCampaignId],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_GetBatchNames_ByCampaignId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, limit?: number} },
    options?: Omit<UseQueryOptions<CampaignBatchNameInfoArray, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<CampaignBatchNameInfoArray>) => void
  ): UseQueryResult<CampaignBatchNameInfoArray, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetBatchNames_ByCampaignId>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getBatchNames_ByCampaignId(input.campaignId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<CampaignBatchNameInfoArray, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.BatchNames_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_GetHistoryCodes_ByCampaignId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { campaignId:string,  queryParams?: {code?: string | null, limit?: number, offset?: number, userId?: string | null} },
    options?: Omit<UseQueryOptions<RedeemHistoryPagingSlicedResult, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<RedeemHistoryPagingSlicedResult>) => void
  ): UseQueryResult<RedeemHistoryPagingSlicedResult, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetHistoryCodes_ByCampaignId>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getHistoryCodes_ByCampaignId(input.campaignId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<RedeemHistoryPagingSlicedResult, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.HistoryCodes_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_GetCodesCsv_ByCampaignId = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, batchNo?: number[], withBatchName?: boolean | null} },
    options?: Omit<UseQueryOptions<unknown, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<unknown>) => void
  ): UseQueryResult<unknown, AxiosError<ApiError>> => { 
  //
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useCampaignAdminApi_GetCodesCsv_ByCampaignId>[1]
  ) => async () => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getCodesCsv_ByCampaignId(input.campaignId, input.queryParams))
      callback && callback(response)
      return response.data
  }
  
  return useQuery<unknown, AxiosError<ApiError>>({
    queryKey: [Key_CampaignAdmin.CodesCsv_ByCampaignId, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useCampaignAdminApi_UpdateEnableBulkCode_ByCampaignId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, batchNo?: number[]} }>, 'mutationKey'>,
    callback?: (data: BulkOperationResult) => void
  ): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, batchNo?: number[]} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, batchNo?: number[]} }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateEnableBulkCode_ByCampaignId(input.campaignId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.EnableBulkCode_ByCampaignId],
    mutationFn,
    ...options
  })
}
  
  

export const useCampaignAdminApi_UpdateDisableBulkCode_ByCampaignId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, batchNo?: number[]} }>, 'mutationKey'>,
    callback?: (data: BulkOperationResult) => void
  ): UseMutationResult<BulkOperationResult, AxiosError<ApiError>, SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, batchNo?: number[]} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { campaignId:string,  queryParams?: {batchName?: string | null, batchNo?: number[]} }) => {
      const response = 
            (await CampaignAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateDisableBulkCode_ByCampaignId(input.campaignId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_CampaignAdmin.DisableBulkCode_ByCampaignId],
    mutationFn,
    ...options
  })
}
  
  
  