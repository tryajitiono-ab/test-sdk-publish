/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosInstance, AxiosRequestConfig } from 'axios'
import { AxiosConfig, CoreConfig, Interceptor, SdkConstructorParam, SdkSetConfigParam, TokenConfig } from './Types'
import { ApiUtils } from './utils/ApiUtils'
import { Network } from './utils/Network'
import { MakeRequired } from './utils/Type'

export const AccelByte = {
  SDK: (param: SdkConstructorParam) => {
    return new AccelByteSDK(param)
  }
}

export class AccelByteSDK {
  private coreConfig: CoreConfig
  private axiosConfig: AxiosConfig
  private axiosInstance: AxiosInstance
  private token: TokenConfig

  constructor({ coreConfig, axiosConfig }: SdkConstructorParam) {
    this.coreConfig = {
      ...coreConfig,
      useSchemaValidation: coreConfig.useSchemaValidation ?? true
    }
    this.axiosConfig = {
      /**
       * when user create a variable to store intercepters and passed into sdk
       * the sdk will use the variable as reference value,
       * so when new interceptor added, reference value will also has the new interceptor,
       * to avoid this we create shallow copy for the interceptors
       */
      interceptors: axiosConfig?.interceptors ? [...axiosConfig.interceptors] : undefined,
      request: {
        timeout: 60000,
        withCredentials: true,
        ...axiosConfig?.request,
        headers: {
          'Content-Type': 'application/json',
          ...axiosConfig?.request?.headers
        }
      }
    }
    this.axiosInstance = this.createAxiosInstance()
    this.token = {}
  }

  private createAxiosInstance() {
    return Network.create({ baseURL: this.coreConfig.baseURL, ...this.axiosConfig.request })
  }

  assembly() {
    return {
      axiosInstance: this.axiosInstance,
      coreConfig: this.coreConfig,
      axiosConfig: this.axiosConfig as MakeRequired<AxiosConfig, 'request'>
    }
  }

  clone(opts?: { interceptors?: boolean }): AccelByteSDK {
    const newConfigs = {
      coreConfig: { ...this.coreConfig },
      axiosConfig: { ...this.axiosConfig }
    }

    if (opts?.interceptors === false) {
      delete newConfigs.axiosConfig.interceptors
    }

    return new AccelByteSDK(newConfigs)
  }

  addInterceptors(interceptors: Interceptor[]): AccelByteSDK {
    if (!this.axiosConfig.interceptors) {
      this.axiosConfig.interceptors = []
    }

    this.axiosConfig.interceptors.push(...interceptors)

    return this
  }

  // Method overloads.
  removeInterceptors(): AccelByteSDK
  removeInterceptors(filterCallback: (interceptor: Interceptor) => boolean): AccelByteSDK

  removeInterceptors(filterCallback?: (interceptor: Interceptor) => boolean) {
    if (!this.axiosConfig?.interceptors) return this
    if (!filterCallback) {
      this.axiosConfig.interceptors = undefined
      return this
    }

    this.axiosConfig.interceptors = this.axiosConfig.interceptors.filter(filterCallback)
    this.axiosInstance = this.createAxiosInstance()
    return this
  }

  setConfig({ coreConfig, axiosConfig }: SdkSetConfigParam) {
    this.coreConfig = {
      ...this.coreConfig,
      ...coreConfig
    }
    this.axiosConfig = {
      ...this.axiosConfig,
      ...axiosConfig
    }
    this.axiosInstance = this.createAxiosInstance()

    return this
  }

  setToken(token: TokenConfig) {
    this.token = {
      ...this.token,
      ...token
    }
    const configOverride = { headers: { Authorization: this.token.accessToken ? `Bearer ${this.token.accessToken}` : '' } }
    this.axiosConfig = {
      ...this.axiosConfig,
      request: ApiUtils.mergeAxiosConfigs(this.axiosInstance.defaults as AxiosRequestConfig, configOverride)
    }
    this.axiosInstance = this.createAxiosInstance()
  }

  removeToken() {
    this.token = {}
  }

  getToken() {
    return this.token
  }
}
