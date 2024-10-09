import { useRoute } from 'nuxt/app'
import { ref } from 'vue'
import { FilterFields } from '../../../shared/constants/enums'
import OfficesApi from '../api'

export function useOffices() {
	const route = useRoute()
	const page = ref(1)
	const coworkings = ref<any>(null)

	const filterFields = [
		{
			label: 'Все районы',
			options: ['Алматинский район', 'Байконурский район', 'Есильский район', 'Нуринский район'],
			field: FilterFields.REGION
		},
		{
			label: 'Удобства',
			options: ['Интернет (проводной)', 'Принтер', 'Парковка', 'Намазхана'],
			field: FilterFields.COMFORTS
		}
	]

	async function getCoworkings() {
		const params = route.query
		OfficesApi.getOffices(params)
			.then(res => {
				coworkings.value = coworkings.value ? null : res
			})
	}

	return {
		page,
		coworkings,
		filterFields,
		getCoworkings
	}
}
