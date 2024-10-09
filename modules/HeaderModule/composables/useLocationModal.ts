import { onMounted, ref } from 'vue'

export function useLocationModal(stepVal: number = 1) {
	const locations = ref<any[]>([])
	const step = ref(stepVal)

	onMounted(() => {
		Promise.resolve()
			.then((res: any) => {
				locations.value = res
			})
	})

	return {
		locations,
		step
	}
}
