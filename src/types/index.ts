export type Method='get'|'GET'|'post'|'POST'|'PUT'|'put'|'patch'|'PATCH'|'options'|'OPTIONS'|'head'|'HEAD'|'delete'|'DELETE'

export interface AxiosRequestConfig{
  url:string,
  method?:Method,
  data?:any,
  params?:any,
  headers?:any
}
