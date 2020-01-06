import {AxiosRequestConfig} from './types/index';
import xhr from './xhr'
import { buildURL } from './helper/url';
import {transformRequest} from './helper/data'
import {processHeaders} from './helper/headers';
function axios(config:AxiosRequestConfig):void {
  processConfig(config);
  xhr(config);
}
function processConfig(config:AxiosRequestConfig):void{
  config.url=transformUrl(config);
  config.headers = transformHeaders(config);
  config.data=transformRequestData(config);
}
function transformUrl(config:AxiosRequestConfig):string{
  const {url,params}=config;
  return buildURL(url,params)
}
function transformRequestData(config:AxiosRequestConfig):any{
  const {data}=config
  return transformRequest(data)
}
function transformHeaders(config:AxiosRequestConfig):any{
  const {headers={},data}=config;
  return processHeaders(headers, data)
}
export default axios
