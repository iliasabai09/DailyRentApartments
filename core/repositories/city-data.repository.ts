import { CityRepository } from '../../domain/repositories/city.repository'
import { HttpClient } from '../../shared/api/httpClient'

export class CityDataRepository extends CityRepository {
	private readonly api
	private readonly BASE_URL: string
	constructor() {
		super()
		this.api = new HttpClient()
		this.BASE_URL = 'https://jsonplaceholder.typicode.com'
	}

	getAllCities() {
		return this.api.getSsr(this.BASE_URL + '/todos/1')
	}
}
