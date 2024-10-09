import { coworkingApi } from '../../../shared/api/httpKoworking'

export function getLocations() {
	return coworkingApi.get('/locations')
}
