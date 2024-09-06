/*
 * Copyright (c) 2018-2023 AccelByte Inc. All Rights Reserved
 * This is licensed software from AccelByte Inc, for limitations
 * and restrictions contact your company contract manager.
 */
import react from '@vitejs/plugin-react'
import { defineConfig, loadEnv } from 'vite'

const SHARED_CLOUD_PROD_URL = '.gamingservices.accelbyte.io'
const PORT = 3000

// https://vitejs.dev/config/
export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '')
  const target = env.AGS_BASE_URL.endsWith(SHARED_CLOUD_PROD_URL)
    ? `https://${env.VITE_NAMESPACE}.${new URL(env.AGS_BASE_URL).hostname}`
    : env.AGS_BASE_URL

  return {
    plugins: [react()],
    server: {
      port: PORT,
      proxy: {
        '/api': {
          changeOrigin: true,
          target,
          cookieDomainRewrite: 'localhost',
          configure(proxy) {
            proxy.on('proxyReq', req => {
              req.setHeader('Referer', target)
            })
          },
          rewrite: path => {
            return path.replace(/^\/api/, '')
          }
        }
      }
    }
  }
})
