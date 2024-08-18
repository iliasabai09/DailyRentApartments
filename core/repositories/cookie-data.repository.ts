import { useCookie } from 'nuxt/app'
import { CookieEnum } from '../../shared/types/enums/cookie.enum'

export class CookieDataRepository {
	private readonly cookie

	constructor() {
		this.cookie = useCookie
	}

	getValue(key: CookieEnum) {
		return this.cookie(key).value
	}

	setValue(key: CookieEnum, value: string) {
		this.cookie(key).value = value
	}
}
