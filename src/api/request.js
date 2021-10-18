import axios from "axios"
import store2 from "store2"

/**
 * 公共请求模块
 * @param {*} param0
 */
export const request = ({path, method = 'GET', props, data}) => {
  const url = 'http://localhost:7001/'
  const instance = axios({
    ...props,
    url: url + path,
    method,
    data,
    headers: {
      'Authorization': `Banner ${store2.get('Authorization')}`
    }
  })
}

/**
 * get请求
 * @param {*} path
 * @param {*} data
 * @param {*} props
 * @returns
 */
export const get = (path, data, props) => {
  return request({
    path,
    data,
    props,
  })
}

/**
 * get请求
 * @param {*} path
 * @param {*} data
 * @param {*} props
 * @returns
 */
export const post = (path, data, props) => {
  return request({
    method: 'POST',
    path,
    data,
    props,
  })
}