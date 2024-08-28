/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { ParserUtils } from '../ParserUtils'

export const templateSdkSnippet = ({
  serviceNameTitle,
  apiName,
  snippetMethod,
  snippetApiArgs: snippetApiArgsParam
}: {
  serviceNameTitle: string
  apiName: string
  snippetMethod: string
  snippetApiArgs: string[]
}) => {
  const methodArr = snippetMethod.split('//')
  const snippetApiArgs = ['sdk', ...snippetApiArgsParam]

  let normMethod = normalizeMethodSnippet(methodArr[0].trim(), 'data:')
  normMethod = normalizeMethodSnippet(normMethod, 'queryParams:')
  normMethod = normalizeMethodSnippet(normMethod, 'queryParams?:')
  normMethod += '\n\n//' + methodArr[1]

  const sdkSnippet = `import { Accelbyte } from '@accelbyte/sdk'
import { ${serviceNameTitle} } from '@accelbyte/sdk-${serviceNameTitle.toLowerCase()}'

const sdk = Accelbyte.SDK({
  options: {
    baseURL: 'https://demo.accelbyte.io',
    clientId: '77f88506b6174c3ea4d925f5b4096ce8',
    namespace: 'accelbyte',
    redirectURI: 'http://localhost:3030'
  }
})

${serviceNameTitle}.${apiName}(${snippetApiArgs.join(', ')})
  .${normMethod}`
  return sdkSnippet
}

const normalizeMethodSnippet = (methodInput: any, splitWord: string) => {
  const split1 = methodInput.split(splitWord)
  if (!split1[1]) {
    return methodInput
  }
  let split2 = split1[1].trim()
  split2 = ParserUtils.replaceAll(split2, '{', '')
  split2 = ParserUtils.replaceAll(split2, '})', '')
  split2 = split2.split(',')
  let params = ''
  split2.forEach(p => {
    params += '\n             ' + ParserUtils.replaceAll(p.trim(), ')', '') + ','
  })
  params = params.slice(0, -1) // remove last , char

  const result = split1[0] + splitWord + ' {' + params + '\n    })'
  return result
}
