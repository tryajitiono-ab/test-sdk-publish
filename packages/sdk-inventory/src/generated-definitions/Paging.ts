/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const Paging = z.object({ first: z.string(), last: z.string(), next: z.string(), previous: z.string() })

export interface Paging extends z.TypeOf<typeof Paging> {}
