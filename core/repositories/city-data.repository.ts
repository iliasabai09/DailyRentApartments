import { CityRepository } from '../../domain/repositories/city.repository'
import { useHttpClient } from '../../shared/api/httpClient'

export class CityDataRepository extends CityRepository {
	private readonly api

	constructor() {
		super()
		this.api = useHttpClient
	}

	getAllCities() {
		return this.api('/todos/1')
	}
}
