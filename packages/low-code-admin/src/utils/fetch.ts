import axios, { type AxiosResponse } from 'axios';

export interface HttpResponse<T> {
  code: number
  message: string
  bizMessage?: string
  data: T
}
// axios基本设置
axios.defaults.baseURL = '/';
axios.defaults.timeout = 10000;

axios.interceptors.response.use((response: AxiosResponse<HttpResponse<any>>) => {
  const { status } = response;
  if (status !== 200) {
    throw new Error('网络错误');
  }
  return response;
});
/**
 * 封装的Get请求
 * @param url
 * @param params
 */
export function get<P>(url: string): Promise<P>
export function get<T, P>(url: string, params: T): Promise<P>
export async function get<T, P>(url: string, params?: T): Promise<P> {
  return await axios.get<P>(url, { params }).then(({ data }) => data);
}
/**
 * 封装的Post请求
 * @param url
 * @param payload
 */
export function post<P>(url: string): Promise<P>
export function post<T, P>(url: string, payload: T): Promise<P>
export async function post<T, P>(url: string, payload?: T): Promise<P> {
  return await axios.post<P>(url, payload).then(({ data }) => data);
}
