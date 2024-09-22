const hardcode = [
	{
		id: 1,
		title: 'Коворкинг центр Токио',
		rating: 3,
		reviewsCount: 26,
		type: 'Офис',
		price: 155000,
		priceFrom: 'месяц',
		description: '130 кв. м пространства для проведения мастер-классов, выставок, фотосессий и видео съемок',
		address: 'пр. Тауелсиздик 15/2, 3 этаж',
		createdFrom: '22.10.2024',

	}
]


class OfficesApi {
	getOffices(params: any) {
		return new Promise((resolve, reject) => {
			resolve(hardcode)
		})
	}
}

export default new OfficesApi()
