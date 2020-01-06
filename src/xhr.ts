import {AxiosRequestConfig} from './types/index';
export default function xhr(config:AxiosRequestConfig):void{
  const {data=null,headers,url,method='get'}=config;
  const request=new XMLHttpRequest();
  request.open(method.toUpperCase(),url,true);
  Object.keys(headers).forEach((name) => {
    if (data === null && name.toLowerCase() === 'content-type') {
      delete headers[name]
    } else {
      request.setRequestHeader(name, headers[name])
    }
  })

  request.send(data);
}
