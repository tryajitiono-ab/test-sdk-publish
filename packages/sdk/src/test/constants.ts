/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AxiosError } from 'axios'
import { Interceptor } from '../Types'

export const coreConfig = { baseURL: 'http://localhost:3000', clientId: '1234', namespace: 'sdk', redirectURI: 'http://localhost:3000' }
export const coreConfigWithDefault = { ...coreConfig, useSchemaValidation: true }
export const defaultAxiosConfig = {
  timeout: 60000,
  withCredentials: true,
  headers: {
    'Content-Type': 'application/json'
  }
}

export const responseInterceptor: Interceptor = {
  type: 'response',
  name: 'session-expired',
  onError: () => {},
  onSuccess: config => config
}

export const requestInterceptor: Interceptor = {
  type: 'request',
  name: 'get-session',
  onError: () => {},
  onRequest: config => config
}

export const tooManyRequestInterceptor: Interceptor = {
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
