export interface IHttpClient<T> {
	data: T;
	pending: boolean;
	error: Error | null;
}
