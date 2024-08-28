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
import { FileUploadAdminApi } from "../FileUploadAdminApi.js"

import { FileUploadUrlInfo } from '../../generated-definitions/FileUploadUrlInfo.js'


export enum Key_FileUploadAdmin {
  File_ByUserId = 'Basic.FileUploadAdmin.File_ByUserId',
File_ByFolder = 'Basic.FileUploadAdmin.File_ByFolder',

}

  

export const useFileUploadAdminApi_CreateFile_ByUserId = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FileUploadUrlInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams: {fileType: string | null, category?: string | null} }>, 'mutationKey'>,
    callback?: (data: FileUploadUrlInfo) => void
  ): UseMutationResult<FileUploadUrlInfo, AxiosError<ApiError>, SdkSetConfigParam & { userId:string,  queryParams: {fileType: string | null, category?: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { userId:string,  queryParams: {fileType: string | null, category?: string | null} }) => {
      const response = 
            (await FileUploadAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFile_ByUserId(input.userId, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FileUploadAdmin.File_ByUserId],
    mutationFn,
    ...options
  })
}
  
  

export const useFileUploadAdminApi_CreateFile_ByFolder = (
    sdk: AccelByteSDK,
    options?: Omit<UseMutationOptions<FileUploadUrlInfo, AxiosError<ApiError>, SdkSetConfigParam & { folder:string,  queryParams: {fileType: string | null} }>, 'mutationKey'>,
    callback?: (data: FileUploadUrlInfo) => void
  ): UseMutationResult<FileUploadUrlInfo, AxiosError<ApiError>, SdkSetConfigParam & { folder:string,  queryParams: {fileType: string | null} }> => { 
  //
  const mutationFn = async (input: SdkSetConfigParam & { folder:string,  queryParams: {fileType: string | null} }) => {
      const response = 
            (await FileUploadAdminApi(sdk, { coreConfig: input.coreConfig, axiosConfig: input.axiosConfig }).
                createFile_ByFolder(input.folder, input.queryParams))
      callback && callback(response.data)
      return response.data
  }
  
  return useMutation({
    mutationKey: [Key_FileUploadAdmin.File_ByFolder],
    mutationFn,
    ...options
  })
}
  
  
  