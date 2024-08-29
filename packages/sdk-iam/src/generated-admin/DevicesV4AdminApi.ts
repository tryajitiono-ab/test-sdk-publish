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
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { DeviceBanRequestV4 } from '../generated-definitions/DeviceBanRequestV4.js'
import { DeviceBanResponseV4 } from '../generated-definitions/DeviceBanResponseV4.js'
import { DeviceBanUpdateRequestV4 } from '../generated-definitions/DeviceBanUpdateRequestV4.js'
import { DeviceBannedResponseV4 } from '../generated-definitions/DeviceBannedResponseV4.js'
import { DeviceBansResponseV4 } from '../generated-definitions/DeviceBansResponseV4.js'
import { DeviceIdDecryptResponseV4 } from '../generated-definitions/DeviceIdDecryptResponseV4.js'
import { DeviceTypesResponseV4 } from '../generated-definitions/DeviceTypesResponseV4.js'
import { DeviceUsersResponseV4 } from '../generated-definitions/DeviceUsersResponseV4.js'
import { DevicesResponseV4 } from '../generated-definitions/DevicesResponseV4.js'
import { DevicesV4Admin$ } from './endpoints/DevicesV4Admin$.js'


export function DevicesV4AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
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
   * This is the endpoint for an admin to get devices a user ever used to login 
   */
  async function getDevices_v4( queryParams?: {userId?: string | null}): Promise<AxiosResponse<DevicesResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevices_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to get device bans of user 
   */
  async function getDevicesBans_v4( queryParams: {userId: string | null}): Promise<AxiosResponse<DeviceBansResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesBans_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to ban a device 
   */
  async function createDeviceBan_v4(data: DeviceBanRequestV4): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createDeviceBan_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to get device types 
   */
  async function getDevicesTypes_v4(): Promise<AxiosResponse<DeviceTypesResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesTypes_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to get banned devices 
   */
  async function getDevicesBanned_v4( queryParams?: {deviceType?: string | null, endDate?: string | null, limit?: number, offset?: number, startDate?: string | null}): Promise<AxiosResponse<DeviceBannedResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesBanned_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to generate device report 
   */
  async function getDevicesReport_v4( queryParams: {deviceType: string | null, endDate?: string | null, startDate?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDevicesReport_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to get device ban config 
   */
  async function getDeviceBan_ByBanId_v4(banId:string): Promise<AxiosResponse<DeviceBanResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDeviceBan_ByBanId_v4(banId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to update a device ban config 
   */
  async function updateDeviceBan_ByBanId_v4(banId:string, data: DeviceBanUpdateRequestV4): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateDeviceBan_ByBanId_v4(banId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to get device ban list 
   */
  async function getBans_ByDeviceId_v4(deviceId:string): Promise<AxiosResponse<DeviceBansResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getBans_ByDeviceId_v4(deviceId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to unban device 
   */
  async function updateUnban_ByDeviceId_v4(deviceId:string): Promise<AxiosResponse<unknown>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUnban_ByDeviceId_v4(deviceId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to get users that ever login on the device 
   */
  async function getUsers_ByDeviceId_v4(deviceId:string): Promise<AxiosResponse<DeviceUsersResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsers_ByDeviceId_v4(deviceId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to decrypt device id 
   */
  async function getDecrypt_ByDeviceId_v4(deviceId:string): Promise<AxiosResponse<DeviceIdDecryptResponseV4>> {
    const $ = new DevicesV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getDecrypt_ByDeviceId_v4(deviceId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getDevices_v4,getDevicesBans_v4,createDeviceBan_v4,getDevicesTypes_v4,getDevicesBanned_v4,getDevicesReport_v4,getDeviceBan_ByBanId_v4,updateDeviceBan_ByBanId_v4,getBans_ByDeviceId_v4,updateUnban_ByDeviceId_v4,getUsers_ByDeviceId_v4,getDecrypt_ByDeviceId_v4,
  }
}
  