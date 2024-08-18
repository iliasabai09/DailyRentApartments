import { CookieDataRepository } from '../../core/repositories/cookie-data.repository'
import { CookieEnum } from '../../shared/types/enums/cookie.enum'

class LanguageUserCase {
	private readonly cookieRepository: CookieDataRepository = new CookieDataRepository()

	getLanguageLocale() {
		return this.cookieRepository.getValue(CookieEnum.LANGUAGE_LOCALE)
	}

	selectLanguage(lng: string) {
		this.cookieRepository.setValue(CookieEnum.LANGUAGE_LOCALE, lng)
		document.location.reload()
	}
}

export const useCityUseCase = new LanguageUserCase()
