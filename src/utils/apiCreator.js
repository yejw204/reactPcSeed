/**
* @file utils/apiCreator
* @author maoquan(maoquan@htsc.com)
*/
import axios from 'axios';

import { request as requestConfig } from '../config';
import { queryToString } from './helper';

const { prefix, timeout } = requestConfig;

const api = axios.create({
  // 请求前缀
  baseURL: prefix,
  // 超时时间
  timeout,
  // 发送请求时需带上cookie
  withCredentials: true,
  // 响应类型
  responseType: 'json',
});

const parseResponse = (response) => {
  // data是服务器发回的响应
  const { data } = response;
  // 这里可以根据和后端的约定接口，对响应进行统一判断
  // 然后throw出错误信息
  // const { code, msg } = data;
  // eg: if (code !== '0') {
  //       throw message;
  //     }
  return data;
};

/**
 * api生成器
 *
 * @return {Fucntion}
 */
export default function createApi() {
  return {

    /**
     * @param {string} url API url
     * @param {Object} query 请求参数
     *
     * @return {Promise}
     */
    get(url, query) {
      return api.get(`${url}?${queryToString(query)}`).then(parseResponse);
    },

    /**
     * @param {string} url API url
     * @param {Object} query 请求参数
     *
     * @return {Promise}
     */
    post(url, query) {
      return api.post(url, query).then(parseResponse);
    },

    /**
     * @param {string} url 神策日志接收服务器url
     * @param {Object} query 日志参数
     *
     * @return {Promise}
     */
    sendLog(url, query) {
      return axios.post(url, query);
    },
  };
}
