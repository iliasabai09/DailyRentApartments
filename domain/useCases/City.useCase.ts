import { CityDataRepository } from '../../core/repositories/city-data.repository'

export class CityUseCase {
	private readonly cityRepository: CityDataRepository = new CityDataRepository()

	getAllCities() {
		return this.cityRepository.getAllCities()
	}
}
