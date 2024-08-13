import vuetify, { transformAssetUrls } from 'vite-plugin-vuetify'

// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  build: {
    transpile: ['vuetify']
  },
  modules: [
    (_options: any, nuxt: any) => {
      nuxt.hooks.hook('vite:extendConfig', (config: any) => {
        config.plugins.push(vuetify({autoImport: true}))
      })
    }
  ],
  vite: {
    vue: {
      template: {
        transformAssetUrls,
      },
    },
  },
  devtools: {enabled: true},
  runtimeConfig: {
    /*
    * <script setup lang="ts">
        const runtimeConfig = useRuntimeConfig()
        * runtimeConfig.apiSecret
      </script>
    * */
    // Приватные ключи доступные только на сервере
    apiSecret: '123',
    // Keys within public are also exposed client-side
    public: {
      apiBase: '/api'
    }
  },
  // components: [
  //   {
  //     path: '~/components',
  //     pathPrefix: false,
  //   },
  // ],
})
