import { HttpClient } from './httpClient'

export const coworkingApi = new HttpClient('https://backend-production-8dfb.up.railway.app/api')

coworkingApi.get('/cities')
