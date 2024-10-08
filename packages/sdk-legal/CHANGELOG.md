# @accelbyte/sdk-legal

## 6.0.0

### Major Changes

- 0c418b7: AGS TypeScript SDK

  - SDK Initialization: The SDK now requires two separate fields: `coreConfig` and `axiosConfig` for initialization, instead of a single options object. This change was made to clearly separate concerns between core SDK configurations and Axios-specific configurations, improving clarity and flexibility.
  - Return Response: API function calls now return `{ data, headers, status }` instead of just `data`.
  - Event Listeners: Event listeners (e.g., `onSessionExpired`) have been replaced by Axios interceptors.
  - Interceptors: Moving event listeners to interceptors improves customization, allowing consumers to handle events and errors through the Axios interceptor rather than relying on SDK-specific events.
  - Token Repository: Allow tokens to be attached in SDK and rename `refreshTokens` method to `setToken` for Extend compatibilty.
  - API Classes and Methods: Fix redundant API Classes name and inaccurate methods name.
  - Generated React Query: Optionally access AGS using react-query for better server-state management.

### Patch Changes

- Updated dependencies [0c418b7]
  - @accelbyte/sdk@4.0.0
  - @accelbyte/sdk-iam@6.0.0
  - @accelbyte/validator@0.2.22

## 3.2.0

### Minor Changes

- ee927a067: create function sanitizeHTML on sdk-legal legalHelper to make sanitize legal html more consistances

### Patch Changes

- eae4c99ec: chore(sdk-iam): bump version after accidental publish
- Updated dependencies [35dff2a73]
- Updated dependencies [c7a84b7e8]
  - @accelbyte/sdk-iam@3.1.1

## 2.2.3

### Patch Changes

- Updated dependencies [8bba3b81b]
- Updated dependencies [8bba3b81b]
- Updated dependencies [d84f877e9]
  - @accelbyte/validator@0.2.16
  - @accelbyte/sdk-iam@2.2.3
  - @accelbyte/sdk@2.0.6

## 2.2.1

### Patch Changes

- Updated dependencies [e1c22f0f9]
  - @accelbyte/validator@0.2.15
  - @accelbyte/sdk@2.0.4
  - @accelbyte/sdk-iam@2.2.1

## 2.2.0

### Patch Changes

- 4f5b32ea9: fix: change get countries from basic into iam
- Updated dependencies [4f5b32ea9]
  - @accelbyte/sdk-iam@2.2.0
