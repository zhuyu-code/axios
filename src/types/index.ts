export type Method='get'|'GET'|'post'|'POST'|'PUT'|'put'|'patch'|'PATCH'|'options'|'OPTIONS'|'head'|'HEAD'|'delete'|'DELETE'

export interface AxiosRequestConfig{
  url:string,
  method?:Method,
  data?:any,
  params?:any,
  headers?:any,
  responseType?: XMLHttpRequestResponseType
}
//配置响应的类型限制接口
export interface AxiosResponse {
  data: any
  status: number
  statusText: string
  headers: any
  config: AxiosRequestConfig
  request: any
}
/*定义一个为响应类型限制的promise，这样的话，当 axios 返回的是 AxiosPromise 类型，
那么 resolve 函数中的参数就是一个 AxiosResponse 类型。*/
export interface AxiosPromise extends Promise<AxiosResponse> {
}


