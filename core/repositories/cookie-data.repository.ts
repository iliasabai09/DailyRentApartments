import { useCookie } from 'nuxt/app'

export class CookieDataRepository {
	private readonly cookie

	constructor() {
		this.cookie = useCookie
	}

	getValue(key: string) {
		return this.cookie(key).value
	}
}
