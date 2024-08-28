/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */

export type MakeOptional<Type, UnionKeys extends keyof Type> = Omit<Type, UnionKeys> & Partial<Pick<Type, UnionKeys>>
export type MakeRequired<T, K extends keyof T> = T & { [P in K]-?: T[P] }
