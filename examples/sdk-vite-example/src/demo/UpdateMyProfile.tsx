import { AccelByteSDK } from '@accelbyte/sdk'
import { PublicUserUpdateRequestV3, UsersApi } from '@accelbyte/sdk-iam'
import React, { useEffect, useState } from 'react'
import { useForm } from 'react-hook-form'
import { Form, FormItem } from './components/Form'
import { Heading } from './components/Heading'
import { Section, SectionContent } from './components/Section'
import { Snippet } from './components/Snippet'
import { handleError } from './helpers'
import { useUser } from './UserContext'

export function UpdateMyProfile({ sdk }: { sdk: AccelByteSDK }) {
  const { user, setUser } = useUser()
  const { register, handleSubmit, reset } = useForm<PublicUserUpdateRequestV3>({
    defaultValues: {
      avatarUrl: user?.avatarUrl ?? '',
      country: user?.country ?? '',
      dateOfBirth: user?.dateOfBirth ?? '',
      displayName: user?.displayName ?? '',
      uniqueDisplayName: user?.uniqueDisplayName ?? '',
      languageTag: 'en-US',
      userName: user?.userName ?? ''
    }
  })
  const [updateUserResponse, setUpdateUserResponse] = useState<any>(null)

  useEffect(() => {
    if (!user) return

    reset(user)
  }, [user])

  const updateUserProfile = handleSubmit(async data => {
    try {
      const response = await UsersApi(sdk).updateUserMe_v3(data)

      setUpdateUserResponse(response.data)
      setUser(response.data)
    } catch (err) {
      handleError(err, setUpdateUserResponse)
    }
  })

  return (
    <Section>
      <Heading level={2}>Update my profile</Heading>

      <SectionContent>
        <Form onSubmit={updateUserProfile}>
          <FormItem label="Avatar URL" name="avatarUrl" placeholder="https://example.com" register={register} className="w-[600px]" />

          <FormItem label="Country" name="country" placeholder="USA" register={register} className="w-[250px]" />

          <FormItem label="Date of birth" name="dateOfBirth" placeholder="1970-01-01" register={register} className="w-[250px]" />

          <FormItem label="Display name" name="displayName" placeholder="Kai Doe" register={register} className="w-[250px]" />

          <FormItem label="Language tag" name="languageTag" placeholder="en-US" register={register} className="w-[250px]" />

          <FormItem label="Unique display name" name="uniqueDisplayName" placeholder="Kai Doe" register={register} className="w-[250px]" />

          <FormItem label="User name" name="userName" placeholder="Kai Doe" register={register} className="w-[250px]" />

          <button
            type="submit"
            className="rounded-md bg-indigo-600 px-3 py-2 text-sm font-semibold text-white shadow-sm hover:bg-indigo-500 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600">
            Update profile
          </button>
        </Form>
      </SectionContent>

      <Section>
        <Heading level={3}>Response</Heading>

        <Snippet>{JSON.stringify(updateUserResponse, null, 2)}</Snippet>
      </Section>
    </Section>
  )
}
