/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const SteamIapConfigRequest = z.object({ appId: z.string(), publisherAuthenticationKey: z.string().nullish() })

export interface SteamIapConfigRequest extends z.TypeOf<typeof SteamIapConfigRequest> {}
