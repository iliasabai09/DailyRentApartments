import { CityDataRepository } from '../../core/repositories/city-data.repository'
import { CookieDataRepository } from '../../core/repositories/cookie-data.repository'

class CityUseCase {
	private readonly cityRepository: CityDataRepository = new CityDataRepository()

	getAllCities() {
		return this.cityRepository.getAllCities()
	}
}

export const useCityUseCase = new CityUseCase()
