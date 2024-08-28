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
import { BinaryUpload } from '../generated-definitions/BinaryUpload.js'
import { BlockManifest } from '../generated-definitions/BlockManifest.js'
import { BuildIdVersionArray } from '../generated-definitions/BuildIdVersionArray.js'
import { BuildManifest } from '../generated-definitions/BuildManifest.js'
import { UpdateBuildMetadataRequest } from '../generated-definitions/UpdateBuildMetadataRequest.js'
import { UploadBuildManifest } from '../generated-definitions/UploadBuildManifest.js'
import { UploadSummary } from '../generated-definitions/UploadSummary.js'
import { UploaderV2Admin$ } from './endpoints/UploaderV2Admin$.js'


export function UploaderV2AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
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
   * This API is used to get basic build manifests. Only committed build will be retrieved. 
   */
  async function getBuildsByAppId_v2( queryParams: {appId: string | null, platformId: string | null}): Promise<AxiosResponse<BuildIdVersionArray>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBuildsByAppId_v2( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to get basic DLC build manifests. Only committed build will be retrieved. 
   */
  async function getDlcByGameAppId_v2( queryParams: {appId: string | null, platformId: string | null}): Promise<AxiosResponse<BuildIdVersionArray>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDlcByGameAppId_v2( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to delete build manifest. 
   */
  async function deleteBuild_ByBuildId_v2(buildId:string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteBuild_ByBuildId_v2(buildId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to get build manifest for build uploaded with BuildInfo v2. 
   */
  async function getBuild_ByBuildId_v2(buildId:string): Promise<AxiosResponse<BuildManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBuild_ByBuildId_v2(buildId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to edit build&#39;s launchArgument. 
   */
  async function patchBuild_ByBuildId_v2(buildId:string, data: UpdateBuildMetadataRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchBuild_ByBuildId_v2(buildId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to start build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createStartbuildupload_v2(data: UploadBuildManifest): Promise<AxiosResponse<BuildManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to get diff trigger status. 
   */
  async function getDifftriggerStatus_v2(): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDifftriggerStatus_v2()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to commit build manifest. 
   */
  async function createCommitbuildmanifest_v2(data: BuildManifest): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCommitbuildmanifest_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to start DLC build upload.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;none&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId} for normal (non-differential) upload&lt;/li&gt;&lt;li&gt;/v3/prezsyncupload for differential upload&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createStartdlcbuildupload_v2(data: UploadBuildManifest): Promise<AxiosResponse<BuildManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartdlcbuildupload_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to commit build manifest. 
   */
  async function createCommitdlcbuildmanifest_v2(data: BuildManifest): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createCommitdlcbuildmanifest_v2(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to toggle diff trigger status. Use 0 to turn off and 1 to turn on. Any values other than 0 will be regarded as 1. 
   */
  async function patchDifftriggerStatu_ByValue_v2(value:string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchDifftriggerStatu_ByValue_v2(value, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to start file upload and retrieve upload url. 
   */
  async function createStartfileupload_ByUploaderId_v2(uploaderId:string, data: BinaryUpload): Promise<AxiosResponse<UploadSummary>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartfileupload_ByUploaderId_v2(uploaderId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to start zsync control file upload and retrieve upload url. 
   */
  async function createStartzsyncfileupload_ByFileHash_v2(fileHash:string, data: BinaryUpload): Promise<AxiosResponse<UploadSummary>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartzsyncfileupload_ByFileHash_v2(fileHash, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to start incremental build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest). 
   */
  async function createStartbuildupload_BySourceBuildId_v2(sourceBuildId:string, data: UploadBuildManifest): Promise<AxiosResponse<BuildManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartbuildupload_BySourceBuildId_v2(sourceBuildId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to commit file that has been uploaded to signal completion. 
   */
  async function patchCommitfileupload_ByBuildId_ByHash_v2(buildId:string, hash:string): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchCommitfileupload_ByBuildId_ByHash_v2(buildId, hash, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to start DLC build upload. This endpoint used for incremental build upload, where developer update the files from existing build version (that hasn&#39;t yet set as latest). 
   */
  async function createStartdlcbuildupload_BySourceBuildId_v2(sourceBuildId:string, data: UploadBuildManifest): Promise<AxiosResponse<BuildManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createStartdlcbuildupload_BySourceBuildId_v2(sourceBuildId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to commit file that has been uploaded to signal completion 
   */
  async function patchCommitzsyncfileupload_ByBuildId_ByHash_v2(buildId:string, hash:string): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchCommitzsyncfileupload_ByBuildId_ByHash_v2(buildId, hash, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to set current build as release version. 
   */
  async function updateVersion_ByAppId_ByVersion_ByPlatformId_v2(appId:string, version:string, platformId:string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateVersion_ByAppId_ByVersion_ByPlatformId_v2(appId, version, platformId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to start diff manifest upload. 
   */
  async function createDiffStart_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId:string, destinationBuildId:string): Promise<AxiosResponse<UploadSummary>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiffStart_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId, destinationBuildId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to commit diff manifest. 
   */
  async function patchDiffCommit_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId:string, destinationBuildId:string): Promise<AxiosResponse<unknown>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchDiffCommit_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId, destinationBuildId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This API is used to commit chunk that has been uploaded.&lt;p&gt;Previous API:&lt;ul&gt;&lt;li&gt;/v2/startzsyncfileupload&lt;/li&gt;&lt;/ul&gt;Next API:&lt;ul&gt;&lt;li&gt;/v2/startfileupload/{uploaderId}&lt;/li&gt;&lt;/ul&gt; 
   */
  async function patchHash_ByBuildId_ByHash_ByBlockSize_v2(buildId:string, hash:string, blockSize:number): Promise<AxiosResponse<BlockManifest>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchHash_ByBuildId_ByHash_ByBlockSize_v2(buildId, hash, blockSize, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Use this API to get the presigned url to upload the diff manifest.&lt;p&gt;Other detail info: &lt;ul&gt;&lt;li&gt;&lt;i&gt;Required permission&lt;/i&gt;: resource=&#34;ADMIN:NAMESPACE:{namespace}:BUILDINFO&#34;, action=1 (CREATE)&lt;/li&gt;&lt;li&gt;&lt;i&gt;Returns&lt;/i&gt;: build id&lt;/li&gt;&lt;/ul&gt; 
   */
  async function createDiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId:string, destinationBuildId:string): Promise<AxiosResponse<UploadSummary>> {
    const $ = new UploaderV2Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2(sourceBuildId, destinationBuildId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getBuildsByAppId_v2,getDlcByGameAppId_v2,deleteBuild_ByBuildId_v2,getBuild_ByBuildId_v2,patchBuild_ByBuildId_v2,createStartbuildupload_v2,getDifftriggerStatus_v2,createCommitbuildmanifest_v2,createStartdlcbuildupload_v2,createCommitdlcbuildmanifest_v2,patchDifftriggerStatu_ByValue_v2,createStartfileupload_ByUploaderId_v2,createStartzsyncfileupload_ByFileHash_v2,createStartbuildupload_BySourceBuildId_v2,patchCommitfileupload_ByBuildId_ByHash_v2,createStartdlcbuildupload_BySourceBuildId_v2,patchCommitzsyncfileupload_ByBuildId_ByHash_v2,updateVersion_ByAppId_ByVersion_ByPlatformId_v2,createDiffStart_BySourceBuildId_ByDestinationBuildId_v2,patchDiffCommit_BySourceBuildId_ByDestinationBuildId_v2,patchHash_ByBuildId_ByHash_ByBlockSize_v2,createDiffSignedurl_BySourceBuildId_ByDestinationBuildId_v2,
  }
}
  