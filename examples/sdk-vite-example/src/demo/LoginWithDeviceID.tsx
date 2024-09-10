import { OAuth20V4Api, TokenResponseV3, UsersApi } from '@accelbyte/sdk-iam'
import React, { useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormItem } from './components/Form'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { useGlobal } from './GlobalContext'
import { handleError } from './helpers'

export function LoginWithDeviceID() {
  const { register, handleSubmit } = useForm({
    defaultValues: {
      deviceId: 'example-device-id'
    }
  })
  const [tokenResponse, setTokenResponse] = useState<any>(null)
  const { setUser, sdk } = useGlobal()

  const loginWithDeviceID = handleSubmit(async data => {
    try {
      sdk.setConfig({ axiosConfig: { request: { headers: { xdd: 'inside' } } } })

      const response = await OAuth20V4Api(sdk, {
        axiosConfig: {
          request: {
            headers: {
              Authorization: `Basic ${btoa(`${sdk.assembly().coreConfig.clientId}:`)}`
            }
          }
        }
      }).postTokenOauth_ByPlatformId_v4('device', {
        device_id: data.deviceId
      })
      setTokenResponse(response.data)

      if (import.meta.env.PROD) {
        // Only use token in Prod, because in Prod we don't have proxy.
        const parsedTokenResponse = TokenResponseV3.parse(response.data)
        sdk.setToken({ accessToken: parsedTokenResponse.access_token, refreshToken: parsedTokenResponse.refresh_token })
      }

      const userResponse = await UsersApi(sdk).getUsersMe_v3()
      setUser(userResponse.data)
    } catch (err) {
      handleError(err, setTokenResponse)
    }
  })

  return (
    <Section>
      <Heading level={2}>Log in with Device ID</Heading>

      <SectionContent>
        <Form onSubmit={loginWithDeviceID}>
          <FormItem label="Device ID" name="deviceId" placeholder="91964d4871994f41a57428867fe3afa3" register={register} />

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Log in with Device ID
          </button>
        </Form>
      </SectionContent>

      <Section>
        <Heading level={3}>Response</Heading>

        <Snippet>{JSON.stringify(tokenResponse, null, 2)}</Snippet>
      </Section>
    </Section>
  )
}
