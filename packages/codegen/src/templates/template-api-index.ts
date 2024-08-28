/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import { ParserUtils } from '../ParserUtils'

export const templateApiIndex = (serviceName: string, serviceNameTitle: string, apiList: string[]): string => {
  let imports = ''
  let returnStatement = ''
  for (const cl of apiList) {
    // We have to exclude AdminApi as it was the title of the section
    // in swagger, but it has public/admin version of the endpoint too
    const dir = cl.toLowerCase().includes('admin') && cl !== 'AdminApi' ? 'generated-admin' : 'generated-public'
    imports += `\nimport { ${cl} } from './${dir}/${cl}.js'`
    returnStatement += `\n${cl}, `
  }

  return `/**
 * AUTO GENERATED
 */
${imports}

const apis = {
${returnStatement}
}

export const ${serviceNameTitle} = apis
  `
}
