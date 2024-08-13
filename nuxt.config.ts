// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  compatibilityDate: '2024-04-03',
  devtools: { enabled: true },
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
