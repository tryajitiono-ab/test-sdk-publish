import React from 'react'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { useGlobal } from './GlobalContext'

export function SdkConfig() {
  const { sdk } = useGlobal()

  return (
    <Section>
      <Heading level={2}>SDK config</Heading>

      <SectionContent>
        <p>
          To configure the SDK, use the "Configure SDK" button on the bottom-right part of the screen. Upon submission, the updated SDK
          configuration will appear below.
        </p>

        <p>
          Adjust the <code>baseURL</code>, <code>clientID</code>, <code>namespace</code>, and <code>redirectURI</code> according to the IAM
          client that you have created. If you are using AGS Private Cloud, you can use IAM client on the Publisher/Game namespace level,
          whereas if you are using AGS Shared Cloud, you can only use IAM client on the Game namespace level.
        </p>

        <Snippet>{JSON.stringify(sdk.assembly().coreConfig, null, 2)}</Snippet>
      </SectionContent>
    </Section>
  )
}
