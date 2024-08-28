/*
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { z } from 'zod'

export const UserAcceptFriendRequest = z.object({ friendId: z.string() })

export interface UserAcceptFriendRequest extends z.TypeOf<typeof UserAcceptFriendRequest> {}
