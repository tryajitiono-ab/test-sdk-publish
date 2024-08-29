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
import { AccelByteSDK, ApiUtils, Network, SdkSetConfigParam } from '@accelbyte/sdk'
import { AxiosRequestConfig, AxiosResponse } from 'axios'
import { AddUserRoleV4Request } from '../generated-definitions/AddUserRoleV4Request.js'
import { AuthenticatorKeyResponseV4 } from '../generated-definitions/AuthenticatorKeyResponseV4.js'
import { BackupCodesResponseV4 } from '../generated-definitions/BackupCodesResponseV4.js'
import { BulkAccountTypeUpdateRequestV4 } from '../generated-definitions/BulkAccountTypeUpdateRequestV4.js'
import { CheckValidUserIdRequestV4 } from '../generated-definitions/CheckValidUserIdRequestV4.js'
import { CreateTestUsersRequestV4 } from '../generated-definitions/CreateTestUsersRequestV4.js'
import { CreateTestUsersResponseV4 } from '../generated-definitions/CreateTestUsersResponseV4.js'
import { CreateUserRequestV4 } from '../generated-definitions/CreateUserRequestV4.js'
import { CreateUserResponseV4 } from '../generated-definitions/CreateUserResponseV4.js'
import { DisableMfaRequest } from '../generated-definitions/DisableMfaRequest.js'
import { EmailUpdateRequestV4 } from '../generated-definitions/EmailUpdateRequestV4.js'
import { EnabledFactorsResponseV4 } from '../generated-definitions/EnabledFactorsResponseV4.js'
import { InvitationHistoryResponse } from '../generated-definitions/InvitationHistoryResponse.js'
import { InviteUserRequestV4 } from '../generated-definitions/InviteUserRequestV4.js'
import { InviteUserResponseV3 } from '../generated-definitions/InviteUserResponseV3.js'
import { ListInvitationHistoriesV4Response } from '../generated-definitions/ListInvitationHistoriesV4Response.js'
import { ListUserRolesV4Response } from '../generated-definitions/ListUserRolesV4Response.js'
import { ListValidUserIdResponseV4 } from '../generated-definitions/ListValidUserIdResponseV4.js'
import { NamespaceInvitationHistoryUserV4Response } from '../generated-definitions/NamespaceInvitationHistoryUserV4Response.js'
import { RemoveUserRoleV4Request } from '../generated-definitions/RemoveUserRoleV4Request.js'
import { UserMfaStatusResponseV4 } from '../generated-definitions/UserMfaStatusResponseV4.js'
import { UserMfaTokenResponseV4 } from '../generated-definitions/UserMfaTokenResponseV4.js'
import { UserResponseV3 } from '../generated-definitions/UserResponseV3.js'
import { UserUpdateRequestV3 } from '../generated-definitions/UserUpdateRequestV3.js'
import { UsersV4Admin$ } from './endpoints/UsersV4Admin$.js'


export function UsersV4AdminApi(sdk: AccelByteSDK, args?: SdkSetConfigParam) {
  const sdkAssembly = sdk.assembly()
  
  const namespace = args?.coreConfig?.namespace ?? sdkAssembly.coreConfig.namespace
  const requestConfig = ApiUtils.mergeAxiosConfigs(sdkAssembly.axiosInstance.defaults as AxiosRequestConfig, args?.axiosConfig?.request)
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
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. action code : 10103 
   */
  async function patchUserMe_v4(data: UserUpdateRequestV3): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUserMe_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4]. Detail request body : - **emailAddresses** is required, List of email addresses that will be invited - **isAdmin** is required, true if user is admin, false if user is not admin - **namespace** is optional. Only works on multi tenant mode, if not specified then it will be assigned Publisher namespace, if specified, it will become that studio/publisher where user is invited to. - **roleId** is optional, if not specified then it will only assign User role. - **assignedNamespaces** is optional, List of namespaces which the Role will be assigned to the user, only works when Role is not empty. The invited admin will also assigned with &#34;User&#34; role by default. 
   */
  async function createUserInvite_v4(data: InviteUserRequestV4): Promise<AxiosResponse<InviteUserResponseV3>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserInvite_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * Use this endpoint to invite admin or non-admin user and assign role to them. The role must be scoped to namespace. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of endpoint: [AdminAddUserRoleV4]. Detail request body : - Email Address is required, List of email addresses that will be invited - isAdmin is required, true if user is admin, false if user is not admin - Namespace is optional. Only works on multi tenant mode, if not specified then it will be assigned Publisher namespace, if specified, it will become that studio/publisher where user is invited to. - Role is optional, if not specified then it will only assign User role. - Assigned Namespaces is optional, List of namespaces which the Role will be assigned to the user, only works when Role is not empty. The invited admin will also assigned with &#34;User&#34; role by default. Substitute endpoint: /iam/v4/admin/users/invite 
   */
  async function createUserUserInvite_v4(data: InviteUserRequestV4): Promise<AxiosResponse<InviteUserResponseV3>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserUserInvite_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is to list all Invitation Histories for new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Accepted Query: - namespace - offset - limit  
   */
  async function getInvitationHistories_v4( queryParams?: {limit?: number, namespace?: string | null, offset?: number}): Promise<AxiosResponse<ListInvitationHistoriesV4Response>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInvitationHistories_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to get user enabled factors. 
   */
  async function getUsersMeMfaFactor_v4(): Promise<AxiosResponse<EnabledFactorsResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaFactor_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to make 2FA factor default. 
   */
  async function postUserMeMfaFactor_v4(data: {factor: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaFactor_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint will get user&#39;s&#39; MFA status. 
   */
  async function getUsersMeMfaStatus_v4(): Promise<AxiosResponse<UserMfaStatusResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaStatus_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * This endpoint will get user&#39;s&#39; MFA status. ------------ **Substitute endpoint**: /iam/v4/admin/users/me/mfa/status [GET]  
   */
  async function createUserMeMfaStatus_v4(): Promise<AxiosResponse<UserMfaStatusResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaStatus_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used. 
   */
  async function getUsersMeMfaBackupCode_v4(): Promise<AxiosResponse<BackupCodesResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCode_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used. 
   */
  async function createUserMeMfaBackupCode_v4(): Promise<AxiosResponse<BackupCodesResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCode_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to send email code. -------------- Supported actions: * ChangePassword * DisableMFAEmail  
   */
  async function postUserMeMfaEmailCode_v4(data: {action?: string | null,languageTag?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaEmailCode_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to get 8-digits backup codes. Each code is a one-time code and will be deleted once used. 
   */
  async function getUsersMeMfaBackupCodes_v4( queryParams?: {languageTag?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCodes_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to generate 8-digits backup codes. Each code is a one-time code and will be deleted once used. 
   */
  async function createUserMeMfaBackupCode_admin_v4( queryParams?: {languageTag?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCode_admin_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to enable 2FA email. 
   */
  async function postUserMeMfaEmailEnable_v4(data: {code: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaEmailEnable_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to disable 2FA email. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA  
   */
  async function createUserMeMfaEmailDisable_v4(data: DisableMfaRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaEmailDisable_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create a new user with unique email address and username. **Required attributes:** - authType: possible value is EMAILPASSWD - emailAddress: Please refer to the rule from /v3/public/inputValidations API. - username: Please refer to the rule from /v3/public/inputValidations API. - password: Please refer to the rule from /v3/public/inputValidations API. - country: ISO3166-1 alpha-2 two letter, e.g. US. - dateOfBirth: YYYY-MM-DD, e.g. 1990-01-01. valid values are between 1905-01-01 until current date. - uniqueDisplayName: required when uniqueDisplayNameEnabled/UNIQUE_DISPLAY_NAME_ENABLED is true, please refer to the rule from /v3/public/inputValidations API. **Not required attributes:** - displayName: Please refer to the rule from /v3/public/inputValidations API. This endpoint support accepting agreements for the created user. Supply the accepted agreements in acceptedPolicies attribute. 
   */
  async function createUser_v4(data: CreateUserRequestV4): Promise<AxiosResponse<CreateUserResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUser_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint will verify user&#39;s&#39; MFA code and generate a MFA token. 
   */
  async function postUserMeMfaChallengeVerify_v4(data: {code?: string | null,factor?: string | null}): Promise<AxiosResponse<UserMfaTokenResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaChallengeVerify_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to generate a secret key for 3rd-party authenticator app. A QR code URI is also returned so that frontend can generate QR code image. 
   */
  async function createUserMeMfaAuthenticatorKey_v4(): Promise<AxiosResponse<AuthenticatorKeyResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaAuthenticatorKey_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * This endpoint is used to enable 2FA backup codes. 
   */
  async function createUserMeMfaBackupCodeEnable_v4(): Promise<AxiosResponse<BackupCodesResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCodeEnable_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to disable 2FA backup codes. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA  
   */
  async function deleteUserMeMfaBackupCodeDisable_v4(data: DisableMfaRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaBackupCodeDisable_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to enable 2FA backup codes. 
   */
  async function createUserMeMfaBackupCodeEnable_admin_v4( queryParams?: {languageTag?: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createUserMeMfaBackupCodeEnable_admin_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * @deprecated
   * This endpoint is used to download backup codes. 
   */
  async function getUsersMeMfaBackupCodeDownload_v4(): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getUsersMeMfaBackupCodeDownload_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Create test users and not send verification code email. Enter the number of test users you want to create in the count field. The maximum value of the user count is 100.  
   */
  async function createTestUser_v4(data: CreateTestUsersRequestV4): Promise<AxiosResponse<CreateTestUsersResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.createTestUser_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to enable 2FA authenticator. ---------- Prerequisites: - Generate the secret key/QR code uri by **_/iam/v4/admin/users/me/mfa/authenticator/key_** - Consume the secret key/QR code by an authenticator app - Get the code from the authenticator app  
   */
  async function postUserMeMfaAuthenticatorEnable_v4(data: {code: string | null}): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.postUserMeMfaAuthenticatorEnable_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to disable 2FA authenticator. ------ **Note**: **mfaToken** is required when all the following are enabled: - The environment variable **SENSITIVE_MFA_AUTH_ENABLED** is true - The **Two-Factor Authentication** is enabled in the IAM client where user logs in - Users already enabled the MFA  
   */
  async function deleteUserMeMfaAuthenticatorDisable_v4(data: DisableMfaRequest): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteUserMeMfaAuthenticatorDisable_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This Endpoint support update user based on given data. **Single request can update single field or multi fields.** Supported field {country, displayName, languageTag, dateOfBirth, avatarUrl, userName} Country use ISO3166-1 alpha-2 two letter, e.g. US. Date of Birth format : YYYY-MM-DD, e.g. 2019-04-29. **Response body logic when user updating email address:** - User want to update email address of which have been verified, newEmailAddress response field will be filled with new email address. - User want to update email address of which have not been verified, { oldEmailAddress, emailAddress} response field will be filled with new email address. - User want to update email address of which have been verified and updated before, { oldEmailAddress, emailAddress} response field will be filled with verified email before. newEmailAddress response field will be filled with newest email address. action code : 10103  
   */
  async function updateUser_ByUserId_v4(userId:string, data: UserUpdateRequestV3): Promise<AxiosResponse<UserResponseV3>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateUser_ByUserId_v4(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is to Invitation Historiy for specific new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false.  
   */
  async function getInvitationHistories_ByNS_v4(): Promise<AxiosResponse<InvitationHistoryResponse>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInvitationHistories_ByNS_v4()
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Use this endpoint to check if userID exists or not Maximum number of userID to be checked is 50 
   */
  async function fetchUserBulkValidate_v4(data: CheckValidUserIdRequestV4): Promise<AxiosResponse<ListValidUserIdResponseV4>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.fetchUserBulkValidate_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This is the endpoint for an admin to update a user email address. This endpoint need a valid user token from an admin to verify its identity (email) before updating a user. 
   */
  async function updateEmail_ByUserId_v4(userId:string, data: EmailUpdateRequestV4): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateEmail_ByUserId_v4(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * Remove a role from user&#39;s roles. 
   */
  async function deleteRole_ByUserId_v4(userId:string, data: RemoveUserRoleV4Request): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteRole_ByUserId_v4(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * List roles assigned to a user 
   */
  async function getRoles_ByUserId_v4(userId:string): Promise<AxiosResponse<ListUserRolesV4Response>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getRoles_ByUserId_v4(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * New role will be appended to user&#39;s current roles. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint. 
   */
  async function updateRole_ByUserId_v4(userId:string, data: AddUserRoleV4Request): Promise<AxiosResponse<ListUserRolesV4Response>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRole_ByUserId_v4(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * User&#39;s roles will be replaced with roles from request body. An admin user can only assign role with **assignedNamespaces** if the admin user has required permission which is same as the required permission of this endpoint.  
   */
  async function updateRole_ByUserId_ByNS_v4(userId:string, data: AddUserRoleV4Request): Promise<AxiosResponse<ListUserRolesV4Response>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.updateRole_ByUserId_ByNS_v4(userId, data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is used to change users account type - set **testAccount** to &lt;code&gt;true&lt;/code&gt; to mark user as test account type - set **testAccount** to &lt;code&gt;false&lt;/code&gt; to mark user as default account type 
   */
  async function patchUserBulkAccountType_v4(data: BulkAccountTypeUpdateRequestV4): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.patchUserBulkAccountType_v4(data,)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * This endpoint is to Get list of users Invitation History for specific new studio namespace in multi tenant mode. It will return error if the service multi tenant mode is set to false. Accepted Query: - offset - limit  
   */
  async function getInvitationHistoriesUsers_v4( queryParams?: {limit?: number, offset?: number}): Promise<AxiosResponse<NamespaceInvitationHistoryUserV4Response>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.getInvitationHistoriesUsers_v4( queryParams)
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  /**
   * **This endpoint is used to disable user 2FA.** 
   */
  async function deleteMfaDisable_ByUserId_v4(userId:string): Promise<AxiosResponse<unknown>> {
    const $ = new UsersV4Admin$(axiosInstance, namespace, useSchemaValidation)
    const resp = await $.deleteMfaDisable_ByUserId_v4(userId, )
    if (resp.error) throw resp.error
    return resp.response
  }
  
  
  return {
    patchUserMe_v4,createUserInvite_v4,createUserUserInvite_v4,getInvitationHistories_v4,getUsersMeMfaFactor_v4,postUserMeMfaFactor_v4,getUsersMeMfaStatus_v4,createUserMeMfaStatus_v4,getUsersMeMfaBackupCode_v4,createUserMeMfaBackupCode_v4,postUserMeMfaEmailCode_v4,getUsersMeMfaBackupCodes_v4,createUserMeMfaBackupCode_admin_v4,postUserMeMfaEmailEnable_v4,createUserMeMfaEmailDisable_v4,createUser_v4,postUserMeMfaChallengeVerify_v4,createUserMeMfaAuthenticatorKey_v4,createUserMeMfaBackupCodeEnable_v4,deleteUserMeMfaBackupCodeDisable_v4,createUserMeMfaBackupCodeEnable_admin_v4,getUsersMeMfaBackupCodeDownload_v4,createTestUser_v4,postUserMeMfaAuthenticatorEnable_v4,deleteUserMeMfaAuthenticatorDisable_v4,updateUser_ByUserId_v4,getInvitationHistories_ByNS_v4,fetchUserBulkValidate_v4,updateEmail_ByUserId_v4,deleteRole_ByUserId_v4,getRoles_ByUserId_v4,updateRole_ByUserId_v4,updateRole_ByUserId_ByNS_v4,patchUserBulkAccountType_v4,getInvitationHistoriesUsers_v4,deleteMfaDisable_ByUserId_v4,
  }
}
  