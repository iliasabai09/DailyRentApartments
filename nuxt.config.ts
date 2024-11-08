// https://nuxt.com/docs/api/configuration/nuxt-config
// @ts-ignore
export default defineNuxtConfig({
  app: {
    head: {
      charset: 'utf-8',
      viewport: 'width=device-width, initial-scale=1',
      meta: [
        {
          name: 'viewport',
          content: 'width=device-width, initial-scale=1.0'
        }
      ],
      link: [
        {
          rel: 'preconnect',
          href: 'https://fonts.googleapis.com'
        },
        {
          rel: 'preconnect',
          href: 'https://fonts.gstatic.com',
          crossorigin: ''
        },
        {
          rel: 'stylesheet',
          href: 'https://fonts.googleapis.com/css2?family=Dosis:wght@200..800&family=Jacquard+12+Charted&family=Raleway:ital,wght@0,100..900;1,100..900&family=Roboto:ital,wght@0,100;0,300;0,400;0,500;0,700;0,900;1,100;1,300;1,400;1,500;1,700;1,900&family=Rubik:ital,wght@0,300..900;1,300..900&display=swap',
        },
      ]
    }
  },

  compatibilityDate: '2024-04-03',
  css: ['~/assets/styles/main.scss'],
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

  components: [
    {
      path: '~/components',
      pathPrefix: false,
      global: false
    },
    {
      path: '~/components/ui',
      pathPrefix: false,
      global: false
    },
  ],

  dirs: [
    {
      path: '~/components/ui',
      global: false
    },
    '~/components/ui'
  ],

  modules: ['vuetify-nuxt-module'],
  vuetify: {
    moduleOptions: {
      /* module specific options */
    },
    vuetifyOptions: {
      /* vuetify options */
    }
  }
})
