import { AccelByte, Network } from '@accelbyte/sdk'
import { IamUserAuthorizationClient, UsersApi } from '@accelbyte/sdk-iam'
import { CurrencyApi, ItemApi } from '@accelbyte/sdk-platform'
import { NamespaceApi, UserProfileApi } from '@accelbyte/sdk-basic'
import { PublicPlayerRecordApi } from '@accelbyte/sdk-cloudsave'

const sdk = AccelByte.SDK({
  coreConfig: {
    baseURL: 'https://prod.gamingservices.accelbyte.io',
    clientId: '5b5c6809088b4b039d499a23429f2ba8',
    namespace: 'foundations',
    redirectURI: 'http://localhost:3000'
  }
})

const accessToken = '<replace with accessToken for given baseURL>'

const bearerAuthConfig = {
    headers: {
      Authorization: `Bearer ${accessToken}`
    }
}

// Sample SDK calls:
main()

async function main() {
  console.info(sdk.assembly())

  createLoginURL()

  await getCurrencies()

  await getItems()

  // Below examples require authentication, ensure that you have logged in (have cookies)
  // or pass the access token to the `Authorization` header.
  if (accessToken.length < 1000) {
    // min jwt length
    throw Error('Please provide a valid accessToken')
  }

  await getNamespaces()

  await getUsersMe()
  await getUsersMeProfiles()

  await getCloudsaveUserRecords()
  await customNetworkCall()
}

async function getCloudsaveUserRecords() {
  console.log('\nTesting CloudSave... ')
  try {
    const usersMeRecords = await PublicPlayerRecordApi(sdk, {axiosConfig: {request: bearerAuthConfig}}).getUsersMeRecords()
    console.log(`fetched:`, usersMeRecords.data)
  } catch (ex) {
    console.log(ex)
  }
}

function createLoginURL() {
  const loginUrl = new IamUserAuthorizationClient(sdk).createLoginURL()
  console.log('\n----\nOAuth login URL:\n', loginUrl)
}

async function getCurrencies() {
  const listOfCurrencies = await CurrencyApi(sdk).getCurrencies()
  console.info('\n----\nList Of Currencies:\n', listOfCurrencies)
}

async function getItems() {
  const listOfItems = await ItemApi(sdk).getItemsByCriteria({})
  console.info('\n----\nList of items:\n', listOfItems)
}

async function getNamespaces() {
  // GET /basic/v1/public/namespaces
  try {
    const listOfNamespaces = await NamespaceApi(sdk, {axiosConfig: {request: bearerAuthConfig}}).getNamespaces()
    console.info('\n----\nList of namespaces:\n', listOfNamespaces)
  } catch (err) {
    console.log('\n----\n listOfNamespaces error\n', err.response)
  }
}

async function getUsersMe() {
  // GET /iam/v3/public/users/me
  try {
    const currentUser = await UsersApi(sdk, {axiosConfig: {request: bearerAuthConfig}}).getUsersMe_v3()
    console.info('\n----\ncurrentUser:\n', currentUser)
  } catch (err) {
    console.log('\n----\n currentUser error\n')
  }
}

async function getUsersMeProfiles() {
  // GET /basic/v1/public/namespaces/accelbyte/users/me/profiles
  try {
    const userProfile = await UserProfileApi(sdk, {axiosConfig: {request: bearerAuthConfig}}).getUsersMeProfiles()
    console.info('\n----\nuserProfile:\n', userProfile)
  } catch (err) {
    console.log('userProfile err')
  }
}

// Below example can be used when we want to create a call into admin endpoint using Web SDK
async function customNetworkCall() {
  try {
    const config = sdk.assembly()
    const adminEndpoint = '/iam/v3/public/users/me'
    const network = Network.create({ baseURL: config.coreConfig.baseURL, ...bearerAuthConfig })
    const currentUser = await network.get(adminEndpoint)
    console.info('\n----\ncurrentUser:\n', currentUser)
    return currentUser
  } catch (err) {
    console.error(err)
  }
}
