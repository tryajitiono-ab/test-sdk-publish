/*
 * Copyright (c) 2023-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { describe, expect, test } from 'vitest'
import { Methods, SwaggerReaderHelpers } from './SwaggerReaderHelpers'

import json from './test-resources/swagger-iam-sample.json'

// This is a test that we could use to test out the output of the codegen,
// so we don't accidentally break things.
describe('SwaggerReaderHelpers', () => {
  test('parseAllEndpoints', async () => {
    const result = await SwaggerReaderHelpers.parseAllEndpoints({
      api: json as any,
      sdkName: 'iam',
      serviceName: 'iam'
    })

    // Check admin endpoints.
    //
    for (const adminSnippetPath in result.admin.snippetMap) {
      const methodToSnippetRecord = result.admin.snippetMap[adminSnippetPath]

      for (const method in methodToSnippetRecord) {
        const snippet = methodToSnippetRecord[method as Methods]
        // Should also have `shell`, `web`, and `webGit` here.
        const keys = Object.keys(snippet)

        expect(keys).toEqual(['web', 'webGit', 'shell'])
      }
    }

    // Snippets shouldn't contain deprecated endpoints, in this case, `/iam/bans` and `/iam/roles`.
    expect(result.admin.snippetMap['/iam/bans']).toBeUndefined()
    expect(result.admin.snippetMap['/iam/roles']).toBeUndefined()

    // Check the naming.
    expect(result.admin.tagToSdkFunctionNamesRecord.Bans).toBe('getBans_v3,')
    expect(result.admin.tagToSdkFunctionNamesRecord.Roles).toBe('getRoles_v3,createRole_v3,')
    expect(result.admin.tagToSdkFunctionNamesRecord.Users).toBe('getUsersMe_v3,getPlatformsJustice_ByUserId_v3,')
    expect(result.admin.tagToSdkFunctionNamesRecord.Clients).toBe('deletePermission_ByClientId_ByResource_ByAction_v3,')

    // Should have the mapping "GetUserMappingArray".
    expect(result.admin.arrayDefinitions).toEqual(['GetUserMappingArray'])

    // Check public endpoints.
    //
    for (const publicSnippetPath in result.public.snippetMap) {
      const methodToSnippetRecord = result.public.snippetMap[publicSnippetPath]

      for (const method in methodToSnippetRecord) {
        const snippet = methodToSnippetRecord[method as Methods]
        // Should have `shell`, `web`, and `webGit` here.
        const keys = Object.keys(snippet)

        expect(keys).toEqual(['web', 'webGit', 'shell'])
      }
    }

    // Check the naming.
    // Note that `getUsersMe` also exist in the admin one, but considering that they're different SDKs (in a way),
    // then same name shouldn't matter.
    expect(result.public.tagToSdkFunctionNamesRecord.Users).toBe('getUsersMe_v3,')
  })
})
