import { AccelByte, AccelByteSDK, SdkConstructorParam } from '@accelbyte/sdk'
import { UserResponseV3 } from '@accelbyte/sdk-iam'
import React, { ReactNode, createContext, useContext, useState } from 'react'
import { BASE_SDK_CORE_CONFIG, createSdkConfig } from './helpers'

const GlobalContext = createContext<{
  sdkCoreConfig: SdkConstructorParam['coreConfig'] | null
  setSDKCoreConfig: (value: SdkConstructorParam['coreConfig']) => void
  sdk: AccelByteSDK
  setSdk: (sdk: AccelByteSDK) => void
  user: UserResponseV3 | null
  setUser: React.Dispatch<React.SetStateAction<UserResponseV3 | null>>
}>({
  sdkCoreConfig: null,
  setSDKCoreConfig: () => undefined,
  user: null,
  setUser: () => undefined,
  sdk: null!,
  setSdk: () => undefined
})

export const useGlobal = () => useContext(GlobalContext)

interface Props {
  children: ReactNode
}

export function GlobalContextProvider({ children }: Props) {
  const [sdkCoreConfig, setSDKCoreConfig] = useState(BASE_SDK_CORE_CONFIG)
  const [user, setUser] = useState<UserResponseV3 | null>(null)
  const [sdk, setSdk] = useState(AccelByte.SDK(createSdkConfig(BASE_SDK_CORE_CONFIG)))

  return <GlobalContext.Provider value={{ sdkCoreConfig, setSDKCoreConfig, user, setUser, sdk, setSdk }}>{children}</GlobalContext.Provider>
}
