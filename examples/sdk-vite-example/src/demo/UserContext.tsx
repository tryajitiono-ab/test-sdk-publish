import { UserResponseV3 } from '@accelbyte/sdk-iam'
import React, { ReactNode, createContext, useContext, useState } from 'react'

const UserContext = createContext<{
  user: UserResponseV3 | null
  setUser: React.Dispatch<React.SetStateAction<UserResponseV3 | null>>
}>({
  user: null,
  setUser: () => undefined
})

export const useUser = () => useContext(UserContext)

export function UserContextProvider({ children }: { children: ReactNode }) {
  const [user, setUser] = useState<UserResponseV3 | null>(null)
  return <UserContext.Provider value={{ user, setUser }}>{children}</UserContext.Provider>
}
