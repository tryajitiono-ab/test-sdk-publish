/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const ClientUpdateRequest = z.object({ ClientName: z.string(), RedirectUri: z.string(), TwoFactorEnabled: z.boolean() })

export interface ClientUpdateRequest extends z.TypeOf<typeof ClientUpdateRequest> {}
