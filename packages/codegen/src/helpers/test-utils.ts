import fs, { readFileSync } from 'fs'
import os from 'os'
import path from 'path'
import { vi } from 'vitest'
import { CliOption, CliParser } from '../CliParser'

export function sleep(ms) {
  return new Promise(resolve => setTimeout(resolve, ms))
}

export const createTmpMock = async (sdkName: string, callback: () => Promise<{indexImports: Set<string>, queryImports: Set<string>}>) => {
  const tempDir = fs.mkdtempSync(path.join(os.tmpdir(), 'cli-parser-test-'))
  const srcDir = path.join(tempDir, 'src')
  const packagesDir = path.resolve('../')
  const versionJson = path.resolve(path.join(packagesDir, sdkName, 'src/version.json'))
  fs.mkdirSync(srcDir, { recursive: true })
  fs.writeFileSync(path.join(srcDir, 'version.json'), readFileSync(versionJson, 'utf8'))

  const mockArgv = {
    config: `../${sdkName}/swaggers.json`,
    swaggersOutput: `../${sdkName}/swaggers`,
    output: srcDir
  }

  const mockYargs = {
    parse: vi.fn().mockReturnValue(mockArgv)
  } as unknown as CliOption

  CliParser.createInstance(mockYargs)

  const result = await callback()

  await sleep(1000)

  fs.rmSync(tempDir, { recursive: true, force: true })

  return result
}
