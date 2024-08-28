/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ParserQueryUtils } from '../ParserQueryUtils'

export const generateImports = (body: string, className: string) => {
  const generatedImports =
    '' +
    "import { AccelByteSDK, SdkSetConfigParam, ApiError } from '@accelbyte/sdk'\n" +
    "import { AxiosError, AxiosResponse } from 'axios'\n" +
    '// @ts-ignore\n' +
    "import { useQuery, UseQueryOptions, UseQueryResult, useMutation, UseMutationOptions, UseMutationResult } from '@tanstack/react-query'\n" +
    `import { ${className} } from "../${className}.js"\n`

  return generatedImports
}

export const templateQuery = (
  className: string,
  body: string,
  importStatements: string[],
  serviceNameTitle: string,
  returnMethods: string,
  paramImports: string[],
  sdkName: string
): string => {
  const classNameWithoutApi = className.replace('Api', '')
  const queryKeys = ParserQueryUtils.createQueryKeys(classNameWithoutApi, returnMethods, sdkName)
  const generatedImports = generateImports(body, className)

  return `/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
${generatedImports}
${filterUsedImports(paramImports, body)}

export enum Key_${classNameWithoutApi} {
  ${queryKeys}
}

  ${body}
  `
}

function filterUsedImports(importArr, body) {
  return (
    importArr
      .filter(path => {
        const start = path.indexOf('{') + 1
        const end = path.indexOf('}')
        if (start > 0 && end > start) {
          const importName = path.slice(start, end).trim()
          // Check if the extracted className is used in the body
          return body.includes(importName)
        }
        return false
      })
      .map(path => path) // Direct mapping as there's no transformation needed
      .join('\n') + '\n'
  ) // Join the remaining imports with newlines
}
