import { onMounted, ref } from 'vue'
import { CookieKeys, useCookieRep } from '../../../shared/repositories/CokieRepository'

export function useHeaderModule() {
	const modalOpened = ref(false)

	onMounted(() => {
		const locationId = useCookieRep().get(CookieKeys.CITY_ID) as string
		modalOpened.value = !locationId
	})

	return {
		modalOpened
	}
}
