import { DecodeError, SdkConstructorParam } from '@accelbyte/sdk'
import axios from 'axios'

export const BASE_SDK_CORE_CONFIG = {
  baseURL: import.meta.env.DEV ? import.meta.env.VITE_SDK_BASE_URL : 'https://prod.gamingservices.accelbyte.io',
  clientId: import.meta.env.VITE_CLIENT_ID,
  namespace: import.meta.env.VITE_NAMESPACE,
  redirectURI: import.meta.env.VITE_REDIRECT_URI || 'http://localhost:3000'
}

export function createSdkConfig(coreConfig: SdkConstructorParam['coreConfig']): SdkConstructorParam {
  return {
    coreConfig,
    axiosConfig: {
      request: {
        headers: {
          'x-ags-namespace': coreConfig.namespace
        }
      }
    }
  }
}

export function handleError(error: unknown, handler: (content: any) => void) {
  if (axios.isAxiosError(error)) {
    return handler(error.response?.data)
  }

  if (error instanceof DecodeError) {
    return handler(error.message)
  }
}
