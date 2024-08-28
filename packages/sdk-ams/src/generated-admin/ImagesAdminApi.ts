/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosResponse } from 'axios'
import { ImageDetails } from '../generated-definitions/ImageDetails.js'
import { ImageList } from '../generated-definitions/ImageList.js'
import { ImageStorage } from '../generated-definitions/ImageStorage.js'
import { ImageUpdate } from '../generated-definitions/ImageUpdate.js'
import { ImagesAdmin$ } from './endpoints/ImagesAdmin$.js'


export function ImagesAdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * Returns images which exist (uploaded, uploading, or building) in the linked account. This route fails if no account is linked Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ] 
   */
  async function getImages(): Promise<AxiosResponse<ImageList>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImages()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Returns information regarding the account&#39;s usage for images storage including the free tier quota Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ] 
   */
  async function getImagesStorage(): Promise<AxiosResponse<ImageStorage>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImagesStorage()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Marks an image for deletion. The image will stop being available for fleets and will eventually be deleted. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE] 
   */
  async function deleteImage_ByImageId(imageID:string): Promise<AxiosResponse<unknown>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteImage_ByImageId(imageID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [READ] 
   */
  async function getImage_ByImageId(imageID:string): Promise<AxiosResponse<ImageDetails>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getImage_ByImageId(imageID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This allows editing of the image name, toggling `IsProtected`, or adding &amp; removal of tags Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [UPDATE] 
   */
  async function patchImage_ByImageId(imageID:string, data: ImageUpdate): Promise<AxiosResponse<ImageDetails>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchImage_ByImageId(imageID, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Unmarks an image for deletion. The image will be available for fleets. Required Permission: ADMIN:NAMESPACE:{namespace}:AMS:IMAGE [DELETE] 
   */
  async function createRestore_ByImageId(imageID:string): Promise<AxiosResponse<unknown>> {
    const $ = new ImagesAdmin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createRestore_ByImageId(imageID, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getImages,getImagesStorage,deleteImage_ByImageId,getImage_ByImageId,patchImage_ByImageId,createRestore_ByImageId,
  }
}
  