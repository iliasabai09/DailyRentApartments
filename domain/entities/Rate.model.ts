import { IAvailableRateService, type IRate } from '../interfaces/rate.interface'
import { IConveniences } from '../interfaces/coworking.interface'

export class Rate implements IRate {
	readonly id: string
	readonly title: string
	readonly images: string[]
	readonly coworkingName: string
	readonly address: string
	readonly price: number
	readonly floor: { number: number, in: number }
	readonly area: number
	readonly buildingClass: string // класс здания
	readonly conveniences: IConveniences[] // Удобства в коворкинге
	readonly paymentPeriod: string
	readonly description: string
	readonly spaceType: string
	readonly availableServices: IAvailableRateService[]
	readonly rentalTypes: string[]

	constructor(rate: IRate) {
		this.id = rate.id || ''
		this.title = rate.title || ''
		this.images = rate.images || []
		this.coworkingName = rate.coworkingName || ''
		this.address = rate.address || ''
		this.price = rate.price || 0
		this.floor = rate.floor || {}
		this.area = rate.area || 0
		this.buildingClass = rate.buildingClass || ''
		this.conveniences = rate.conveniences || []
		this.paymentPeriod = rate.paymentPeriod || ''
		this.description = rate.description || ''
		this.spaceType = rate.spaceType || ''
		this.availableServices = rate.availableServices || []
		this.rentalTypes = rate.rentalTypes || []
	}
}
