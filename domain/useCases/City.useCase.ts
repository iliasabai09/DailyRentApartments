import { CityDataRepository } from '../../core/repositories/city-data.repository'
import { CookieDataRepository } from '../../core/repositories/cookie-data.repository'
import { CookieEnum } from '../../shared/types/enums/cookie.enum'
import { ICity } from '../interfaces/city.interface'

class CityUseCase {
	private readonly cityRepository: CityDataRepository = new CityDataRepository()
	private readonly cookieRepository: CookieDataRepository = new CookieDataRepository()

	getAllCities() {
		return this.cityRepository.getAllCities()
	}

	getCityName() {
		return this.cookieRepository.getValue(CookieEnum.CITY_NAME)
	}

	selectCity(city: ICity) {
		this.cookieRepository.setValue(CookieEnum.CITY_CODE, String(city.cityCode))
		this.cookieRepository.setValue(CookieEnum.CITY_NAME, String(city.title))
	}
}

export const useCityUseCase = new CityUseCase()
