//格式化参数
function formatParams(data) {
  if (typeof data === "string") return data;
  var arr = [];
  for (var name in data) {
    arr.push(encodeURIComponent(name) + "=" + encodeURIComponent(data[name]));
  }
  return arr.join("&");
}
// 处理url
function formatUl(url, data) {
  if (url.indexOf("?") === -1) {
    return `${url}?${formatParams(data)}`;
  }
  return `${url}&${formatParams(data)}`;
}

// 一般ajax请求，返回json数据
function json(options) {
  return new Promise((resolve, reject) => {
    options.type = options.type.toUpperCase();
    const data = formatParams(options.data);
    var xhr = new XMLHttpRequest();
    xhr.timeout = options.timeout;
    // 监听事件
    xhr.upload.onprogress = function (e) {
      options.onprogress && options.onprogress(e);
    };
    xhr.onerror = reject;
    xhr.onreadystatechange = function () {
      if (xhr.readyState === 4) {
        var status = xhr.status;
        if (status >= 200 && status < 300) {
          var response = "";
          var type = xhr.getResponseHeader("Content-type");
          if (type.indexOf("xml") !== -1 && xhr.responseXML) {
            response = xhr.responseXML; //Document对象响应
          } else if (type === "application/json") {
            response = JSON.parse(xhr.responseText); //JSON响应
          } else {
            response = xhr.responseText; //字符串响应
          }
          resolve(response);
        } else {
          reject(xhr);
        }
      }
    };
    if (options.headers) {
      for (let key in options.headers) {
        xhr.setRequestHeader(key, options.headers[key]);
      }
    }
    // 连接和传输数据
    if (options.type === "GET") {
      const url = formatUl(options.url, data);
      xhr.open(options.type, url, true);
      if (options.beforeSend && options.beforeSend(xhr) === false) {
        resolve({
          message: "中断",
        });
        return xhr.abort();
      }
      xhr.send(null);
    } else {
      xhr.open(options.type, options.url, true);
      xhr.setRequestHeader(
        "Content-Type",
        "application/x-www-form-urlencoded; charset=UTF-8"
      );
      if (options.beforeSend && options.beforeSend(xhr) === false) {
        resolve({
          message: "中断",
        });
        return xhr.abort();
      }
      xhr.send(data);
    }
  });
}

// jsonp请求
function jsonp(options) {
  return new Promise((resolve, reject) => {
    const body = document.body;
    // 设置传递给后台的回调参数名
    const callbackName = `mtJsonpCallback_${Date.now()}`; //回调函数的名字
    options.data["callback"] = callbackName;
    var script = document.createElement("script");
    body.appendChild(script);
    //创建jsonp回调函数
    window[callbackName] = function (result) {
      body.removeChild(script);
      clearTimeout(script.timer);
      window[callbackName] = null;
      resolve(result);
    };
    if (options.beforeSend && options.beforeSend() === false) {
      return resolve({
        message: "中断",
      });
    }
    script.src = formatUl(options.url, options.data);

    //超时处理
    if (options.timeout) {
      script.timer = setTimeout(function () {
        window[callbackName] = null;
        body.removeChild(script);
        reject({
          message: "超时",
        });
      }, options.timeout);
    }
  });
}

function ajax(options) {
  return new Promise((resolve, reject) => {
    try {
      options = Object.assign(
        {
          data: {},
          type: "GET",
          timeout: 6 * 1000,
        },
        options
      );
      if (options.dataType === "jsonp") {
        resolve(jsonp(options));
      } else {
        resolve(json(options));
      }
    } catch (e) {
      reject(e);
    }
  });
}

export default ajax;
