import {AxiosRequestConfig,AxiosResponse,AxiosPromise} from './types/index';
import xhr from './xhr'
import { buildURL } from './helper/url';
import {transformRequest,transformResponse} from './helper/data'
import {processHeaders} from './helper/headers';
function axios(config:AxiosRequestConfig):AxiosPromise {
  processConfig(config);
  return xhr(config).then(res=>{
    return transformResponseData(res)
  })
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

function transformResponseData(res: AxiosResponse): AxiosResponse {
  res.data = transformResponse(res.data)
  return res
}
export default axios
