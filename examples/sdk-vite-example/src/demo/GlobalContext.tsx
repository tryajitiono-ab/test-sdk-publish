import { AccelByteSDK } from '@accelbyte/sdk'
import { UserResponseV3 } from '@accelbyte/sdk-iam'
import React, { ReactNode, createContext, useContext, useState } from 'react'

const GlobalContext = createContext<{
  user: UserResponseV3 | null
  setUser: React.Dispatch<React.SetStateAction<UserResponseV3 | null>>
  sdk: AccelByteSDK
}>({
  user: null,
  setUser: () => undefined,
  sdk: null!
})

export const useGlobal = () => useContext(GlobalContext)

export function GlobalContextProvider({ sdk, children }: { sdk: AccelByteSDK; children: ReactNode }) {
  const [user, setUser] = useState<UserResponseV3 | null>(null)

  return <GlobalContext.Provider value={{ user, setUser, sdk }}>{children}</GlobalContext.Provider>
}
