// https://api.muxiaoguo.cn/

import ajax from "@/api/ajaxForPromise";

const apiUrl = "MuXiaoGuo";
export default {
  /**
   * 一言
   * @param {Object} params 请求参数
   * 空参数
   * @returns {Promise([error,res])}
   */
  GetYiYan(params) {
    return ajax({
      url: apiUrl + "/api/yiyan",
      type: "POST",
      data: params,
    });
  },
  /**
   * 天气预报
   * @param {Object} params 请求参数
   *  params.type {String} 查询类型
   *  params.city {String} 城市名
   * @returns {Promise([error,res])}
   */
  GetTianQi(params) {
    return ajax({
      url: apiUrl + "/api/tianqi",
      type: "POST",
      data: params,
    });
  },
};
