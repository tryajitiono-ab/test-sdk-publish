/*
 * Copyright (c) 2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import { TokenWithDeviceCookieResponseV3, UserResponseV3 } from '@accelbyte/sdk-iam'
import { generateMock } from '@anatine/zod-mock'
import { http, HttpResponse } from 'msw'
import { INTERNAL_SERVICES } from '../constants/paths'
import { coreConfig, GET_USER_ME_PATH } from './constants'

const getUsersMe_v3 = () => HttpResponse.json(generateMock(UserResponseV3))
const error401 = () => HttpResponse.json({ error: 'unathorized access' }, { status: 401 })

export const getUserMeHandler = http.get(`${coreConfig.baseURL}${GET_USER_ME_PATH}`, getUsersMe_v3)
export const getCustomBaseURLUserMeHandler = (baseURL: string) => http.get(`${baseURL}${GET_USER_ME_PATH}`, getUsersMe_v3)
export const getCustomUserMeHandler = http.get(`${coreConfig.baseURL}/iam-service/v3/public/users/me`, getUsersMe_v3)
export const getInternalUserMeHandler = http.get(`http://${INTERNAL_SERVICES['/iam']}/iam-service/v3/public/users/me`, getUsersMe_v3)
export const getInvalidUserMeHandler = http.get(`${coreConfig.baseURL}${GET_USER_ME_PATH}`, () => HttpResponse.json({ sdk: 'test' }))
export const get401UserMeProfileStatusHandler = http.get(`${coreConfig.baseURL}/iam/v3/public/users/me/profileStatus`, error401)

/**
 * Assumed refresh_token is just string
 */
const postOauthToken = () => HttpResponse.json(generateMock(TokenWithDeviceCookieResponseV3))
export const postOauthTokenHandler = http.post(`${coreConfig.baseURL}/iam/v3/oauth/token`, postOauthToken)
export const post401OauthTokenHandler = http.post(`${coreConfig.baseURL}/iam/v3/oauth/token`, error401)
/**
 * Status:
 *  - 200: TokenWithDeviceCookieResponseV3
 *  - 202: LoginQueueTicketResponse
 */
export const postOauthTokenV4Handler = http.post(`${coreConfig.baseURL}/iam/v4/oauth/token`, postOauthToken)

export const iamHandlers = [
  getUserMeHandler,
  getCustomUserMeHandler,
  getInternalUserMeHandler,
  postOauthTokenHandler,
  postOauthTokenV4Handler
]
