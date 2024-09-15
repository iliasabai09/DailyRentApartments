import { navigateTo } from 'nuxt/app'

export function useSearchKoworking() {
	const queryToResult: { [key: string]: string } = {
		roomType: '',
		region: ''
	}

	function _buildQuery(): string {
		let query = ''
		for (const k in queryToResult) {
			if (queryToResult[k]) query.length ? query += `&${queryToResult[k]}` : queryToResult[k]
		}
		return query
	}

	function goToResultPage() {
		navigateTo('/koworkings/' + '?' + _buildQuery())
	}

	return {
		goToResultPage
	}
}
