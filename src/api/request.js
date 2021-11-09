import axios from "axios";
const service = axios.create({
  baseURL: "",
  timeout: 60000,
  withCredentials: true, // 是否允许带cookie这些
  headers: {
    "Content-Type": "application/json",
  },
});

// 请求拦截器
service.interceptors.request.use(
  (config) => {
    return config;
  },
  (error) => {
    console.log(error);
    return Promise.reject(error);
  }
);

service.interceptors.response.use(
  (response) => {
    return Promise.reject(response);
  },
  (error) => {
    // 错误的请求结果处理，这里的代码根据后台的状态码来决定错误的输出信息
    if (
      error &&
      error.response &&
      error.response.data &&
      error.response.data.Message
    ) {
      error.message = error.response.data.Message;
    } else if (error && error.response) {
      switch (error.response.status) {
        case 400:
          error.message = "错误请求";
          break;
        case 401:
          error.message = "未授权，请重新登录";
          break;
        case 403:
          error.message = "拒绝访问";
          break;
        case 404:
          error.message = "请求错误,未找到该资源";
          break;
        case 405:
          error.message = "请求方法未允许";
          break;
        case 408:
          error.message = "请求超时";
          break;
        case 500:
          error.message = "服务器端出错";
          break;
        case 501:
          error.message = "网络未实现";
          break;
        case 502:
          error.message = "网络错误";
          break;
        case 503:
          error.message = "服务不可用";
          break;
        case 504:
          error.message = "网络超时";
          break;
        case 505:
          error.message = "http版本不支持该请求";
          break;
        default:
          error.message = `连接错误${error.response.status}`;
      }
    } else {
      error.message = "连接到服务器失败";
    }
    return Promise.reject(error.message);
  }
);

// apiFetch
export function apiFetch(objData) {
  let data = {
    method: "post",
    isLoading: false, // 是否显示加载
    isReturnAll: false, // 是否返回全部接受数据
    isQueryAll: false, // 是否传输全部请求参数
    isCanAlert: true, // 是否正常返回保存信息
    ...objData,
  };

  let method = data.method;
  if (!method || typeof method !== "string") method = "POST";
  method = method.toUpperCase();
  if (method === "POST") {
    return service.post(
      data.url,
      data.isQueryAll
        ? data.params
        : {
            Data: data.params,
          },
      {
        ...data,
        params: undefined,
      }
    );
  }
  if (method === "GET") {
    return service.get(data.url, {
      ...data,
      params: data.isQueryAll
        ? data.params
        : {
            Data: data.params,
          },
    });
  }
  if (method === "PUT") {
    return service.put(
      data.url,
      data.isQueryAll
        ? data.params
        : {
            Data: data.params,
          },
      {
        ...data,
        params: undefined,
      }
    );
  }
  if (method === "DELECT") {
    return service.delete(data.url, {
      ...data,
      params: data.isQueryAll
        ? data.params
        : {
            Data: data.params,
          },
    });
  }
  console.error("异常请求类型");
}

/**
 * 自定义jsonp
 * @param  {...any} args
 */
export function jsonp(url, params) {
  if (!url) {
    console.error("JSONP 至少需要一个url参数!");
    return;
  }
  if (params) {
    url += "?";
    for (let k in params) {
      url += `${k}=${encodeURIComponent(params[k])}&`;
    }
    url = url.slice(0, url.length - 1);
  }
  return new Promise((resolve) => {
    let suffix = new Date().getTime();
    window["json_" + suffix] = (result) => {
      resolve(result);
    };

    var JSONP = document.createElement("script");
    JSONP.type = "text/javascript";
    JSONP.src = `${url}&callback=json_${suffix}`;
    document.getElementsByTagName("head")[0].appendChild(JSONP);
    setTimeout(() => {
      document.getElementsByTagName("head")[0].removeChild(JSONP);
    }, 1000);
  });
}
