import { IRate } from './rate.interface'

export interface IWorkTimes {
	readonly day: string;
	readonly time: string;
}

export interface IConveniences {
	readonly icon: string;
	readonly title: string;
}

export interface ICoworking {
	readonly id: string;
	readonly title: string;
	readonly cityCode: number;
	readonly keyword: string;
	readonly address: string;
	readonly description: string;
	readonly socials: string[];
	readonly workTimes: IWorkTimes[];
	readonly conveniences: IConveniences[];
	readonly coordinates: number[];
	readonly rates: IRate[]; // Тарифы
}
