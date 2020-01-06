const forString=Object.prototype.toString
export function isDate(value:any):value is Date{
  return forString.call(value)=='[object Date]';
}
export function isObject(value:any):value is Object{
  return forString.call(value)=='[object Object]'
}
