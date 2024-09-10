// This examples requires valid Access Token with Admin Permission

import { AccelByte } from '@accelbyte/sdk'
import { Iam, OAuth20Api } from '@accelbyte/sdk-iam'
import { RecordAdminApi } from '@accelbyte/sdk-cloudsave'

const ACCESS_TOKEN = '<replace with accessToken for given baseURL>'
const BEARER_AUTH_SDK_ARGS = {
    headers: {
      Authorization: `Bearer ${ACCESS_TOKEN}`
    }
}

const CLIENT_ID = '<replace with CLIENT_ID for given baseURL>'
// If you're using Public IAM Client you can leave CLIENT_SECRET as empty string
// But if you're using Confidential IAM Client you need to provide the CLIENT_SECRET
const CLIENT_SECRET = ''

const BASIC_TOKEN = `Basic ${Buffer.from(`${CLIENT_ID}:${CLIENT_SECRET}`).toString('base64')}`
const BASIC_AUTH_SDK_ARGS = {
    headers: {
      Authorization: BASIC_TOKEN
    }
}

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: 'https://prod.gamingservices.accelbyte.io',
    clientId: CLIENT_ID,
    namespace: 'foundations',
    redirectURI: 'http://localhost:3000'
  },
})

// Sample SDK calls:
main()

async function main() {
  console.info(sdk.assembly())
  // Below examples require authentication with Admin Permission, ensure that you have logged in (have cookies)
  // or pass the access token to the `Authorization` header.
  if (ACCESS_TOKEN.length < 1000) {
    // min jwt length
    throw Error('Please provide a valid accessToken')
  }

  // You can also use access_token acquired from this response to call any Admin Endpoint,
  // Make sure the CLIENT_ID in the IAM Client has the appropriate permission to call the Admin Endpoint
  const res = await clientGrantToken()
  if (res && res.access_token) await verifyToken(res.access_token)

  await getCloudsaveAdminRecords()
}

async function getCloudsaveAdminRecords() {
  console.log('\n Testing Admin CloudSave... ')
  try {
    const adminrecords = await RecordAdminApi(sdk, {axiosConfig: {request: BEARER_AUTH_SDK_ARGS}}).getAdminrecords()
    console.log(`Cloud Save Admin Records:`, adminrecords)
  } catch (ex) {
    console.log(ex)
  }
}

async function verifyToken(token) {
  console.log('\n Verifying access token...')

  try {
    const res = await OAuth20Api(sdk, {axiosConfig: {request: BASIC_AUTH_SDK_ARGS}}).postOauthVerify_v3({ token })
    console.log('verifyToken', res)
    return true
  } catch (error) {
    return false
  }
}

async function clientGrantToken() {
  if (CLIENT_ID === '<replace with CLIENT_ID for given baseURL>') return false

  console.log('\n Grant access token for current CLIENT_ID...')

  try {
    const response = await Iam.OAuth20Api(sdk, {axiosConfig: {request: BASIC_AUTH_SDK_ARGS}}).postOauthToken_v3({ grant_type: 'client_credentials' })
    console.log(`clientGrantToken:`, response)
    return response.data
  } catch (ex) {
    console.log(ex)
  }
}
