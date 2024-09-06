/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { AccelByte } from '@accelbyte/sdk'
import React, { useLayoutEffect, useState } from 'react'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { DevTools } from './DevTools'
import { BASE_SDK_CORE_CONFIG, createSdkConfig } from './helpers'
import { LoginWithDeviceID } from './LoginWithDeviceID'
import { MyUser } from './MyUser'
import { PlatformItems } from './PlatformItems'
import { UpdateMyProfile } from './UpdateMyProfile'
import { UserContextProvider } from './UserContext'

function App() {
  const [sdk, setSdk] = useState(AccelByte.SDK(createSdkConfig(BASE_SDK_CORE_CONFIG)))

  return (
    <UserContextProvider>
      <main className="p-4 flex flex-col gap-y-8">
        <Heading level={1} className="text-2xl">
          AccelByte SDK Example Using Vite + React
        </Heading>

        <hr />

        <TOC />

        <hr />

        <Section>
          <Heading level={2}>SDK config</Heading>

          <SectionContent>
            <Snippet>{JSON.stringify(sdk.assembly().coreConfig, null, 2)}</Snippet>
          </SectionContent>
        </Section>

        <hr />

        <LoginWithDeviceID sdk={sdk} />

        <hr />

        <MyUser sdk={sdk} />

        <hr />

        <UpdateMyProfile sdk={sdk} />

        <hr />

        <PlatformItems sdk={sdk} />
      </main>

      <DevTools setSdk={setSdk} tier="shared" />
    </UserContextProvider>
  )
}

export default App

// Helper components.
function TOC() {
  const [h2Tags, setH2Tags] = useState<Array<{ title: string; id: string }>>([])

  useLayoutEffect(() => {
    const rawH2Tags = document.getElementsByTagName('h2')
    const newH2Tags: Array<{ title: string; id: string }> = []

    for (let i = 0; i < rawH2Tags.length; i++) {
      const h2Tag = rawH2Tags.item(i)
      if (!h2Tag) continue

      const { textContent, id } = h2Tag
      newH2Tags.push({ id, title: textContent! })
    }

    setH2Tags(newH2Tags)
  }, [])

  return (
    <ul className="list-disc pl-4">
      {h2Tags.map(h2Tag => (
        <li key={h2Tag.id}>
          <a className="text-blue-500 hover:text-blue-400" href={`#${h2Tag.id}`}>
            {h2Tag.title}
          </a>
        </li>
      ))}
    </ul>
  )
}
