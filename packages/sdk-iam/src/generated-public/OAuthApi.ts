/* 
 * Copyright (c) 2022-2024 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
/**
 * AUTO GENERATED
 */
/* eslint-disable camelcase */
// @ts-ignore -> ts-expect-error TS6133
import { AccelByteSDK, ApiUtils, Network, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosResponse } from 'axios'
import { JwkSet } from '../generated-definitions/JwkSet.js'
import { RevocationList } from '../generated-definitions/RevocationList.js'
import { TokenResponse } from '../generated-definitions/TokenResponse.js'
import { OAuth$ } from './endpoints/OAuth$.js'


export function OAuthApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosConfig.request, args?.axiosConfig?.request)
  const interceptors = args?.axiosConfig?.interceptors ?? sdkAssembly.axiosConfig.interceptors ?? []
  const useSchemaValidation = sdkAssembly.coreConfig.useSchemaValidation
  const axiosInstance = Network.create(requestConfig)
  
  for (const interceptor of interceptors) {
    if(interceptor.type === 'request') {
      axiosInstance.interceptors.request.use(interceptor?.onRequest, interceptor.onError)
    }

    if(interceptor.type === 'response') {
      axiosInstance.interceptors.response.use(interceptor?.onSuccess, interceptor.onError)
    }
  }

  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint serves public keys for verifying JWT access tokens generated by this service. When a client application wants to verify a JWT token, it needs to get the &#39;kid&#39; value found in the JWT token header and use it to look up the corresponding public key from a set returned by this endpoint. The client application can then use that public key to verify the JWT. A client application might cache the keys so it doesn&#39;t need to do request every time it needs to verify a JWT token. If a client application caches the keys and a key with the same &#39;kid&#39; cannot be found in the cache, it should then try to refresh the keys by making a request to this endpoint again. Please refer to the RFC for more information about JWK (JSON Web Key): https://tools.ietf.org/html/rfc7517 ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/oauth/jwks [GET]_** 
   */
  async function getOauthJwks(): Promise<AxiosResponse<JwkSet>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOauthJwks()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated ### Endpoint migration guide - **Substitute endpoint: /iam/v3/oauth/token [POST]** - **Note: difference in V3 response:** format difference（Pascal case =&gt; Camel case): permissions field from Action =&gt; action, Resource =&gt; resource This endpoint requires all requests to have &lt;code&gt;Authorization&lt;/code&gt; header set with &lt;code&gt;Basic&lt;/code&gt; access authentication constructed from client id and client secret. This endpoint supports different **grant types**: 1. Grant Type == &lt;code&gt;client_credentials&lt;/code&gt;: This endpoint will check the client credentials provided through Authorization header. 2. Grant Type == &lt;code&gt;password&lt;/code&gt;: The grant type to use for authenticating a user, whether it&#39;s by email / username and password combination or through platform. 3. Grant Type == &lt;code&gt;refresh_token&lt;/code&gt;: Used to get a new access token for a valid refresh token. 4. Grant Type == &lt;code&gt;authorization_code&lt;/code&gt;: It generates the user token by given the authorization code which generated in &#34;/authorize&#34; API response. It should also pass in the redirect_uri, which should be the same as generating the authorization code request. For platform authentication, use grant type &lt;code&gt;password&lt;/code&gt;. The &lt;code&gt;username&lt;/code&gt; field would be in form of &lt;code&gt;platform:&lt;platform type&gt;&lt;/code&gt;, for example &lt;code&gt;platform:steam&lt;/code&gt; for Steam. For the &lt;code&gt;password&lt;/code&gt; field, set it to the authentication/authorization ticket or token obtainable through the respective platform SDK after authenticated the user to the platform. Supported platforms: - **steam** - use &lt;code&gt;platform:steam&lt;/code&gt; as the username and use the authentication ticket obtained from Steam through the Steam SDK as the password. - **ps4** - use &lt;code&gt;platform:ps4&lt;/code&gt; as the username and use the authorization code obtained from the PlayStation Network through a player PS4 unit as the password. - **live** - use &lt;code&gt;platform:live&lt;/code&gt; as the username and use token obtained from Xbox Secure Token Service (XSTS) as the password. - **oculus** - use &lt;code&gt;platform:oculus&lt;/code&gt; as the username and use the &lt;code&gt;user_id:nonce&lt;/code&gt; as password obtained from Oculus through the Oculus SDK. The access token and refresh token are in form of JWT token. An access token JWT contains data which structure is similar to the Response Class below, but without OAuth-related data. To verify a token, use the public keys obtained from the &lt;code&gt;/jwks&lt;/code&gt; endpoint below. ## Access Token Content Following is the access token’s content: - **namespace**. It is the namespace the token was generated from. - **display_name**. The display name of the sub. It is empty if the token is generated from the client credential - **roles**. The sub’s roles. It is empty if the token is generated from the client credential - **namespace_roles**. The sub’s roles scoped to namespace. Improvement from roles, which make the role scoped to specific namespace instead of global to publisher namespace - **permissions**. The sub or aud’ permissions - **bans**. The sub’s list of bans. It is used by the IAM client for validating the token. - **jflgs**. It stands for Justice Flags. It is a special flag used for storing additional status information regarding the sub. It is implemented as a bit mask. Following explains what each bit represents: - 1: Email Address Verified - 2: Phone Number Verified - 4: Anonymous - **aud**. The aud is the client ID. - **iat**. The time the token issues at. It is in Epoch time format - **exp**. The time the token expires. It is in Epoch time format - **sub**. The UserID. The sub is omitted if the token is generated from client credential ## Bans The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /bans. ## Track Login History This endpoint will track login history to detect suspicious login activity, please provide &#34;device_id&#34; (alphanumeric) in request header parameter otherwise we will set to &#34;unknown&#34;. Align with General Data Protection Regulation in Europe, user login history will be kept within 28 days by default&#34; 
   */
  async function postOauthToken(data: {grant_type: 'authorization_code' | 'client_credentials' | 'password' | 'refresh_token',code?: string | null,extend_exp?: boolean | null,namespace?: string | null,password?: string | null,redirect_uri?: string | null,refresh_token?: string | null,username?: string | null}): Promise<AxiosResponse<TokenResponse>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthToken(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/oauth/verify [POST]_** - **Note: difference in V3 response:** 1. format difference（Pascal case =&gt; Camel case): permissions field from Action =&gt; action, Resource =&gt; resource 
   */
  async function postOauthVerify(data: {token: string | null}): Promise<AxiosResponse<TokenResponse>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthVerify(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated The endpoint supports two response types: ### 1. Response Type == &#34;code&#34;: The endpoint returns an authorization code that will be used by the IAM client to exchange for an access token. It supports two different headers, the basic and the bearer header. Each behaves differently. - **The basic header** The basic header’s value is the base64 of the client ID and client secret. It is used by the developer whenever the developer authorizes a user on a same namespace. - **The bearer header** The bearer header’s value is an access token. It is used by the developer whenever the developer authorizes a user on a different namespace. The endpoint validates user’s entitlement on the designated namespace for making sure the user is authorized for a designated namespace. Following are the responses returned by the endpoint: - **Authorize success**: redirects to the given URL with the following information: ?code={authorization code}&amp;state={state} - **Authorize failure**: redirects to the given URL with the following information:?error=access_denied&amp;error_description=... ### 2. Response Type == &#34;token&#34; (Implicit) is deprecated. ### Endpoint migration guide - **Substitute endpoint (for: basic header style)**: _/iam/v3/oauth/authorize [GET]_ - **Substitute endpoint (for: bearer header style)**: step1: /iam/v3/namespace/{namespace}/token/request [POST] =&gt; get code step2: /iam/v3/token/exchange [POST] =&gt; get token by step1&#39;s code - **Note:** 1. V3 is standard OAuth2 flow and support PKCE 2. Will not support implicit flow in v3.  
   */
  async function postOauthAuthorize(data: {client_id: string | null,redirect_uri: string | null,response_type: 'code' | 'token',login?: string | null,password?: string | null,scope?: string | null,state?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthAuthorize(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint revokes a user. This endpoint requires all requests to have Authorization header set with Bearer access authentication with valid access token. When other clients know that the userID has been revoked and the token is issued before the revocation, forcing a new token will contain banned permissions. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/oauth/admin/namespaces/{namespace}/users/{userId}/revoke [POST]_** 
   */
  async function postOauthRevokeUser(data: {userID: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthRevokeUser(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated Revokes a token. This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret or Bearer access authentication with valid access token. ### Endpoint migration guide - **Substitute endpoint: _/v3/oauth/revoke [POST]_** 
   */
  async function postOauthRevokeToken(data: {token: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postOauthRevokeToken(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint will return a list of revoked users and revoked tokens. List of revoked tokens in bloom filter format. This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret. The bloom filter uses MurmurHash3 algorithm for hashing the values ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/oauth/revocationlist [GET]_** 
   */
  async function getOauthRevocationlist(): Promise<AxiosResponse<RevocationList>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getOauthRevocationlist()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint requires all requests to have authorization header set with bearer token. The endpoint revokes all access tokens and refresh tokens a user has prior the revocation time. It is a convenient feature for the developer (or admin) who wanted to revokes all user&#39;s access tokens and refresh tokens generated before some period of time. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/oauth/admin/namespaces/{namespace}/users/{userId}/revoke [POST]_** 
   */
  async function updateRevokeOauth_ByUserId(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRevokeOauth_ByUserId(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * ## The endpoint is going to be deprecated This endpoint requires all requests to have Authorization header set with Basic access authentication constructed from client id and client secret. For publisher-game namespace schema : Specify only either platform_token or device_id. Device token grant should be requested along with device_id parameter against game namespace. Another 3rd party platform token grant should be requested along with platform_token parameter against publisher namespace. Supported platforms: - **steamopenid**: Steam&#39;s user authentication method using OpenID 2.0. The expected value of the platform token is the URL generated by Steam on web authentication The JWT contains user&#39;s active bans with its expiry date. List of ban types can be obtained from /iam/bans.. ### Endpoint migration guide - **Substitute endpoint: _/iam/v3/oauth/platforms/{platformId}/token [POST]_** 
   */
  async function postTokenOauth_ByPlatformId(platformId:string, data: {device_id?: string | null,macAddress?: string | null,platform_token?: string | null}): Promise<AxiosResponse<TokenResponse>> {
    const $ = new OAuth$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postTokenOauth_ByPlatformId(platformId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    getOauthJwks,postOauthToken,postOauthVerify,postOauthAuthorize,postOauthRevokeUser,postOauthRevokeToken,getOauthRevocationlist,updateRevokeOauth_ByUserId,postTokenOauth_ByPlatformId,
  }
}
  