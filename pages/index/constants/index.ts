import { FilterFields } from '../../../shared/constants/enums'

const fTypes = {
	regions: {
		label: 'Все районы',
		options: ['Алматинский район', 'Байконурский район', 'Есильский район', 'Нуринский район'],
		field: FilterFields.REGION
	},
	comforts: {
		label: 'Удобства',
		options: ['Интернет (проводной)', 'Принтер', 'Парковка', 'Намазхана'],
		field: FilterFields.COMFORTS
	},
	types: {
		label: 'Типы',
		options: ['Офис', 'Коворкинг', 'Конференц-зал', 'Помещение', 'Магазин'],
		field: FilterFields.COMFORTS
	},
	placeCount: {
		label: 'Кол-во мест',
		options: ['1', '2', '3', '4', '5'],
		field: FilterFields.COMFORTS
	},
	services: {
		label: 'Услуги',
		options: ['Кофе-машина', 'Кухня', 'Кондиционер', 'Консьерж'],
		field: FilterFields.COMFORTS
	}
}

export const koworkingFilters = [fTypes.regions, fTypes.types]
export const workSpaceFilters = [fTypes.regions, fTypes.comforts]
export const officesFilters = [fTypes.regions, fTypes.comforts]
export const conferenceFilters = [fTypes.regions, fTypes.comforts, fTypes.placeCount, fTypes.services]
export const negotiationsFilters = [fTypes.regions, fTypes.comforts, fTypes.placeCount, fTypes.services]
