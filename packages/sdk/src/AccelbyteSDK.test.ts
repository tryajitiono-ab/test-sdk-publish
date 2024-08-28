/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { AxiosError } from 'axios'
import { describe, expect, test } from 'vitest'
import { AccelByte } from './AccelByteSDK'
import { Interceptor } from './Types'

const coreConfig = { baseURL: 'http://localhost:3000', clientId: '1234', namespace: 'sdk', redirectURI: 'http://localhost:3000' }
const coreConfigWithDefault = { ...coreConfig, useSchemaValidation: true }
const defaultAxiosConfig = {
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

const responseInterceptor: Interceptor = {
  type: 'response',
  name: 'session-expired',
  onError: () => {},
  onSuccess: config => config
}

const requestInterceptor: Interceptor = {
  type: 'request',
  name: 'get-session',
  onError: () => {},
  onRequest: config => config
}

const tooManyRequestInterceptor: Interceptor = {
  type: 'response',
  name: 'too-many-request',
  onError: e => {
    const error = e as AxiosError<any>
    if (error.response) {
      const { response } = error
      if (response?.status === 429 /* TooManyRequests */) {
        // onTooManyRequest(error)
      }
    }

    return Promise.reject(error)
  }
}

const interceptors: Array<Interceptor> = [responseInterceptor, requestInterceptor]

describe('AccelByteSDK', () => {
  test('should return axiosInstance, core config, and default axios config', () => {
    const sdkInstance = AccelByte.SDK({ coreConfig })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toBeUndefined()
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)
  })

  test('should return configs with interceptors', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)
  })

  test('should add new interceptor when addInterceptors', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors: [responseInterceptor]
      }
    })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual([responseInterceptor])
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    sdkInstance.addInterceptors([tooManyRequestInterceptor])

    expect(sdk.axiosConfig.interceptors).toStrictEqual([responseInterceptor, tooManyRequestInterceptor])
  })

  test('should remove interceptor from sdk when removeInterceptor', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })
    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    sdkInstance.removeInterceptors(interceptor => interceptor.name !== 'get-session')

    expect(sdk.axiosConfig.interceptors).toStrictEqual([responseInterceptor])
  })

  test('should return new sdk with interceptors when clone', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })

    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    const newSdkInstance = sdkInstance.clone()
    const newSdk = newSdkInstance.assembly()

    expect(newSdk.axiosConfig.interceptors).toStrictEqual(interceptors)
  })

  test('should return new sdk without interceptors when clone with interceptor option is false', () => {
    const sdkInstance = AccelByte.SDK({
      coreConfig,
      axiosConfig: {
        interceptors
      }
    })

    const sdk = sdkInstance.assembly()

    expect(sdk.axiosInstance).toBeDefined()
    expect(sdk.coreConfig).toStrictEqual(coreConfigWithDefault)
    expect(sdk.axiosConfig.interceptors).toStrictEqual(interceptors)
    expect(sdk.axiosConfig.request).toStrictEqual(defaultAxiosConfig)

    const newSdkInstance = sdkInstance.clone({ interceptors: false })
    const newSdk = newSdkInstance.assembly()

    expect(newSdk.axiosConfig.interceptors).toBeUndefined()
  })
})
