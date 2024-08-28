/*
 * Copyright (c) 2018-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
const getImportableVarMap = () => ({
  '@accelbyte/sdk': ['CodeGenUtil', 'Response', 'Validate', 'SdkSetConfigParam'],
  axios: ['AxiosResponse'],
  zod: ['z']
})

const makeNewImportVarMap = () => ({
  axios: ['AxiosInstance', 'AxiosRequestConfig'],
  '@accelbyte/sdk': ['SDKRequestConfig']
})

export const generateImports = (body: string, importStatements: string[], makeNewImportVarMap, getImportableVarMap) => {
  const usedImportVarMap = makeNewImportVarMap
  const importableVarMap = getImportableVarMap

  for (const [moduleSource, importableVars] of Object.entries(importableVarMap)) {
    // @ts-ignore
    for (const importableVar of importableVars) {
      const importVarRegex = new RegExp(`(?<![\\d\\w_])${importableVar}(?![\\d\\w_])`)
      if (body.match(importVarRegex)) {
        usedImportVarMap[moduleSource] = [...(usedImportVarMap[moduleSource] || []), importableVar]
      }
    }
  }
  const generatedImports = Object.keys(usedImportVarMap)
    .sort()
    .map((moduleSource: string) => {
      return `import { ${usedImportVarMap[moduleSource].sort().join(', ')} } from '${moduleSource}'`
    })
    .join('\n')
  return `${generatedImports}\n${importStatements.sort().join('\n')}`
}

export const templateClass = (className: string, body: string, importStatements: string[]): string => {
  return `/**
 * AUTO GENERATED
 */
${generateImports(body, importStatements, makeNewImportVarMap(), getImportableVarMap())}

export class ${className} {
  // @ts-ignore
  // prettier-ignore
  constructor(private axiosInstance: AxiosInstance, private namespace: string, private useSchemaValidation = true) {}
  ${body}
}
  `
}
