import OfficesApi from '../api/index'

class OfficesService {
	getOffices(params: any) {
		return OfficesApi.getOffices(params)
	}
}

export default new OfficesService()
