import { useCookie } from 'nuxt/app'

export enum CookieKeys {
	CITY_NAME = 'cityName',
	CITY_ID = 'cityId',
}

export function useCookieRep() {
	const cookie = useCookie
	return {
		get(key: CookieKeys) {
			return cookie(key).value
		},
		add(key: CookieKeys, value: string) {
			cookie(key).value = value
		},
		remove(key: CookieKeys) {
			cookie(key).value = null
		}
	}
}
