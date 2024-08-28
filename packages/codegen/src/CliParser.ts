/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

import fs from 'fs'
import * as path from 'path'
import { Argv } from 'yargs'
import { z } from 'zod'

const SwaggersConfig = z.array(z.array(z.string()))
type SwaggersConfig = z.TypeOf<typeof SwaggersConfig>

export interface CliOption
  extends Argv<{
    config: string
    swaggersOutput: string
    output: string
  }> {}

export class CliParser {
  private static _instance: CliParser
  public argv
  constructor(yargs: CliOption) {
    this.argv = yargs.parse()
  }

  public static createInstance = (yargs: CliOption) => {
    CliParser._instance = new CliParser(yargs)
    return CliParser._instance
  }

  private static instance = (yargs?: CliOption) => {
    if (!CliParser._instance && yargs) {
      return CliParser.createInstance(yargs)
    }
    return CliParser._instance
  }

  public static getConfigPath = (): string => {
    return CliParser.instance().argv.config
  }

  public static getConfigFile = (): SwaggersConfig => {
    const configPath = CliParser.getConfigPath()
    if (!configPath) throw new Error('Missing config file')
    const config = JSON.parse(fs.readFileSync(configPath, 'utf8'))
    if (!SwaggersConfig.safeParse(config).success) {
      throw new Error('Wrong config file format')
    }
    return config
  }

  public static getOutputPath = (): string => {
    return CliParser.instance().argv.output
  }

  public static getSwaggersOutputPath = (): string => {
    return CliParser.instance().argv.swaggersOutput
  }

  public static getResolvedSwaggersOutputPath = (): string => {
    return path.resolve(CliParser.getSwaggersOutputPath())
  }

  public static getSnippetOutputPath = (): string => {
    return CliParser.instance().argv.snippetOutput
  }

  public static skipReactQuery = (): boolean => {
    return CliParser.instance().argv.skipReactQuery
  }
}
