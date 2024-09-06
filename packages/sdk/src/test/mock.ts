/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { setupServer } from 'msw/node'
import { iamHandlers } from './iamHandlers'

export const server = setupServer(...iamHandlers)
export const emptyServer = setupServer()
