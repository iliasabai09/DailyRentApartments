import { ICity } from '../interfaces/city.interface'

export class City implements ICity {
	readonly id: string
	readonly title: string
	readonly cityCode: number

	constructor(city: ICity) {
		this.id = city.id || ''
		this.title = city.title || ''
		this.cityCode = city.cityCode || 0
	}
}
