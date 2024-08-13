import { useFetch } from 'nuxt/app'

const BASE_URL = 'https://jsonplaceholder.typicode.com'
// type method = 'get' | 'post' | 'put' | 'delete';
// type isServer = boolean;

export const useHttpClient = (api: string) => useFetch(`${BASE_URL}${api}`, {
	method: 'get',
	server: false
})
