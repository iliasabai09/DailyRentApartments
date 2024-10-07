import { useFetch } from 'nuxt/app'


abstract class HttpClientAbstract {
	abstract get(url: string): any;

	abstract getSsr(url: string): any;

	abstract getById(url: string, id: string | number): any;

	abstract getByIdSsr(url: string, id: string | number): any;

	abstract post<T>(url: string, body: T): any;

	abstract put<T>(url: string, body: T): any;

	abstract delete(url: string, id: string | number): any;
}

export class HttpClient extends HttpClientAbstract {
	private readonly BASE_URL: string

	constructor(baseUrl: string) {
		super()
		this.BASE_URL = baseUrl
	}

	get(url: string): unknown {
		return useFetch(this.BASE_URL + url, {
			method: 'get',
			server: false
		})
	}

	getSsr(url: string): unknown {
		return useFetch(this.BASE_URL + url, {
			method: 'get',
			server: true
		})
	}

	getById(url: string, id: string | number): unknown {
		return useFetch(this.BASE_URL + url, {
			method: 'get',
			server: false
		})
	}

	getByIdSsr(url: string, id: string | number): unknown {
		return useFetch(this.BASE_URL + url, {
			method: 'get',
			server: true
		})
	}

	post<T>(url: string, body: T): unknown {
		return useFetch(this.BASE_URL + url, {
			method: 'post',
			body
		})
	}

	put<T>(url: string, body: T): unknown {
		return useFetch(this.BASE_URL + url, {
			method: 'post',
			body
		})
	}

	delete(url: string, id: string | number): unknown {
		return useFetch(this.BASE_URL + url + '/' + id, {
			method: 'delete'
		})
	}
}
