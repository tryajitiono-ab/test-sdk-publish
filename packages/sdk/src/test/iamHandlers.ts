/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { UserResponseV3 } from '@accelbyte/sdk-iam'
import { generateMock } from '@anatine/zod-mock'
import { http, HttpResponse } from 'msw'
import { INTERNAL_SERVICES } from '../constants/paths'
import { coreConfig } from './constants'

const getUsersMe_v3 = () => HttpResponse.json(generateMock(UserResponseV3))
export const getUserMeHandler = http.get(`${coreConfig.baseURL}/iam/v3/public/users/me`, getUsersMe_v3)
export const getCustomUserMeHandler = http.get(`${coreConfig.baseURL}/iam-service/v3/public/users/me`, getUsersMe_v3)
export const getInternalUserMeHandler = http.get(`http://${INTERNAL_SERVICES['/iam']}/iam-service/v3/public/users/me`, getUsersMe_v3)

export const iamHandlers = [getUserMeHandler, getCustomUserMeHandler, getInternalUserMeHandler]
