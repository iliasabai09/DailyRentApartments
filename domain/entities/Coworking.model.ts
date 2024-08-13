import { IConveniences, ICoworking, IWorkTimes } from '../interfaces/coworking.interface'
import { IRate } from '../interfaces/rate.interface'

export class Coworking implements ICoworking {
	readonly id: string
	readonly title: string
	readonly cityCode: number
	readonly keyword: string
	readonly address: string
	readonly description: string
	readonly socials: string[]
	readonly workTimes: IWorkTimes[]
	readonly conveniences: IConveniences[]
	readonly coordinates: number[]
	readonly rates: IRate[] // Тарифы


	constructor(coworking: ICoworking) {
		this.id = coworking.id || ''
		this.title = coworking.title || ''
		this.cityCode = coworking.cityCode || 0
		this.keyword = coworking.keyword || ''
		this.address = coworking.address || ''
		this.description = coworking.description || ''
		this.socials = coworking.socials || []
		this.workTimes = coworking.workTimes || []
		this.conveniences = coworking.conveniences || []
		this.coordinates = coworking.coordinates || []
		this.rates = coworking.rates || []
	}
}
