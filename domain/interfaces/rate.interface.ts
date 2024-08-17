import { IConveniences } from './coworking.interface'

/**
 * Интерфейс, представляющий информацию о тарифе для коворкинга.
 *
 * @interface IRate
 * @property {string} id - Уникальный идентификатор тарифа.
 * @property {string} title - Название тарифа.
 * @property {string[]} images - Картинки тарифа.
 * @property {string} coworkingName - Название коворкинга, к которому относится тариф.
 * @property {string} address - Адрес коворкинга
 * @property {number} price - Цена тарифа
 * @property {string} paymentPeriod - Период по оплате
 * @property {string} description - Описание тарифа
 * @property {string} spaceType - Тип места по типу как переговорная итд
 * @property {IAvailableRateService[]} availableServices - Доступные сервисы типа как мебель
 * @property {string[]} rentalTypes - Если есть другие типы оплаты по аренде
 */

export interface IRate {
	readonly id: string;
	readonly title: string;
	readonly images: string[];
	readonly coworkingName: string;
	readonly address: string;
	readonly price: number;
	readonly floor: { number: number, in: number };
	readonly area: number;
	readonly buildingClass: string; // класс здания
	readonly conveniences: IConveniences[]; // Удобства в коворкинге
	readonly paymentPeriod: string;
	readonly description: string;
	readonly spaceType: string;
	readonly availableServices: IAvailableRateService[] // В стоимость входит
	readonly rentalTypes: string[]; // Типы аренды
}

export interface IAvailableRateService {
	readonly id: string;
	readonly title: string;
}
