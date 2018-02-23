/**
 * @file config/request.js
 *  request配置文件
 * @author maoquan(maoquan@htsc.com)
 */

import buildConfig from '../../config';

export default {
  timeout: 15000,
  prefix: buildConfig.apiPrefix,
};
