// import this after install `@mdi/font` package
import '@mdi/font/css/materialdesignicons.css'

import 'vuetify/styles'
import { createVuetify } from 'vuetify'
import { defineNuxtPlugin } from 'nuxt/app'
// @ts-ignore
import { VApp } from 'vuetify/lib/components'

export default defineNuxtPlugin((app) => {
	const vuetify = createVuetify({
		components: {
			VApp
		}
	})
	app.vueApp.use(vuetify)
})
