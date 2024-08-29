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
import { InputValidationsAdminApi } from "../InputValidationsAdminApi.js"

import { InputValidationUpdatePayload } from '../../generated-definitions/InputValidationUpdatePayload.js'
import { InputValidationsResponse } from '../../generated-definitions/InputValidationsResponse.js'


export enum Key_InputValidationsAdmin {
  InputValidations_v3 = 'Iam.InputValidationsAdmin.InputValidations_v3',
InputValidation_v3 = 'Iam.InputValidationsAdmin.InputValidation_v3',
InputValidation_ByField_v3 = 'Iam.InputValidationsAdmin.InputValidation_ByField_v3',

}

  

/**
 * ### Default Query Options
 * 
 * The default options include:
 * ```
 * {
 *    queryKey: [Key_InputValidationsAdmin.InputValidations_v3, input]
 * }
 * ```
 */
export const useInputValidationsAdminApi_GetInputValidations_v3 = (
    sdk: AccelByteSDK,
    input: SdkSetConfigParam ,
    options?: Omit<UseQueryOptions<InputValidationsResponse, AxiosError<ApiError>>, 'queryKey'>,
    callback?: (data: AxiosResponse<InputValidationsResponse>) => void
  ): UseQueryResult<InputValidationsResponse, AxiosError<ApiError>> => { 
  
  const queryFn = (
  sdk: AccelByteSDK, 
  input: Parameters<typeof useInputValidationsAdminApi_GetInputValidations_v3>[1]
  ) => async () => {
      const response = 
            (await InputValidationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                getInputValidations_v3())
      callback && callback(response)
      return response.data
  }
  
  return useQuery<InputValidationsResponse, AxiosError<ApiError>>({
    queryKey: [Key_InputValidationsAdmin.InputValidations_v3, input],
    queryFn: queryFn(sdk, input),
    ...options
  })
}
  
  

export const useInputValidationsAdminApi_UpdateInputValidation_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: InputValidationUpdatePayload[] }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { data: InputValidationUpdatePayload[] }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { data: InputValidationUpdatePayload[] }) => {
      const response = 
            (await InputValidationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                updateInputValidation_v3(input.data))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InputValidationsAdmin.InputValidation_v3],
    mutationFn,
    ...options
  })
}
  
  

export const useInputValidationsAdminApi_DeleteInputValidation_ByField_v3 = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<unknown, AxiosError<ApiError>, SdkSetConfigParam & { field:string }>, 'mutationKey'>,
    callback?: (data: unknown) => void
  ): UseMutationResult<unknown, AxiosError<ApiError>, SdkSetConfigParam & { field:string }> => { 
  
  const mutationFn = async (input: SdkSetConfigParam & { field:string }) => {
      const response = 
            (await InputValidationsAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                deleteInputValidation_ByField_v3(input.field))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_InputValidationsAdmin.InputValidation_ByField_v3],
    mutationFn,
    ...options
  })
}
  
  
  