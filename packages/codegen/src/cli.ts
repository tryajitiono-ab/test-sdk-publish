/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import yargs from 'yargs'
import path from 'path'
import { CliOption, CliParser } from './CliParser'
import { CodeGenerator } from './CodeGenerator'
import { ParserUtils } from './ParserUtils'
import { SwaggerDownloader } from './SwaggerDownloader'

const generateSdk = async () => {
  const arrayOfSets = await Promise.all(CliParser.getConfigFile().map(config => CodeGenerator.main(config)))
  const indexImportsSet = new Set<string>()
  const queryImportsSet = new Set<string>()
  const filenamesSet = new Set<string>()

  for (const set of arrayOfSets) {
    set.indexImports.forEach(value => {
      const fileName = path.basename(value)

      if (!filenamesSet.has(fileName)) {
        indexImportsSet.add(value)
        filenamesSet.add(fileName)
      }
    })
    set.queryImports.forEach(value => {
      const fileName = path.basename(value)

      if (!filenamesSet.has(fileName)) {
        queryImportsSet.add(value)
      }
    })
  }

  const indexImportsArray = Array.from(indexImportsSet).sort()
  const queryImportsArray = Array.from(queryImportsSet).sort()
  const filesToImport = indexImportsArray.map(fileToImport => {
    return `export * from '${fileToImport.replace('\\', '/')}.js'`
  })
  const queryFilesToImport = queryImportsArray.map(fileToImport => {
    return `export * from '${fileToImport.replace('\\', '/')}.js'`
  })
  ParserUtils.writeAllImportsFile(CliParser.getOutputPath(), filesToImport.join('\n'))
  ParserUtils.writeAllQueryImportsFile(CliParser.getOutputPath(), queryFilesToImport.join('\n'))
}

// eslint-disable-next-line no-unused-expressions
yargs
  .command('download-swaggers', 'Download swaggers JSON files', (yargs: CliOption) => {
    CliParser.createInstance(yargs)
    SwaggerDownloader.main()
  })
  .command('generate-code', 'Generate code based on downloaded swagger files', async (yargs: CliOption) => {
    // validate options
    yargs.check(({ output }) => {
      if (!output?.trim()) {
        throw new Error('output is required for generate-code')
      }
      return true
    })

    CliParser.createInstance(yargs)

    await generateSdk()
  })
  .option('config', {
    description: 'Config file providing backend services URL.',
    type: 'string',
    demandOption: true
  })
  .option('swaggersOutput', {
    description: 'Output path for downloaded swaggers JSON files.',
    type: 'string',
    demandOption: true
  })
  .option('output', {
    description: 'Output path for generated code. Required for generate-code',
    type: 'string'
  })
  .option('skipReactQuery', {
    description: 'Skip generating react query',
    type: 'boolean'
  })
  .demandCommand(1)
  .help().argv
