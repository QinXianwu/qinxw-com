// https://vercel.com/qinxianwu/netease-cloud-music-api/GTXj9kSPYvD4p2qwmnTNvewece2V
// https://cloud-music-api-lyart.vercel.app
import ajax from "@/api/ajaxForPromise";

const apiUrl = "https://netease-cloud-music-api-seven-beige.vercel.app";
export default {
  /**
   * 手机号码、密码登录
   * @param {Object} params 请求参数
   * 必选参数 :
   * phone: 手机号码
   * password: 密码
   * 可选参数 :
   * countrycode: 国家码，用于国外手机号登录，例如美国传入：1
   * md5_password: md5 加密后的密码,传入后 password 参数将失效
   * captcha: 验证码,使用 /captcha/sent接口传入手机号获取验证码,调用此接口传入验证码,可使用验证码登录,传入后 password 参数将失效
   * @returns {Promise([error,res])}
   */
  LoginCellPhone(params) {
    return ajax({
      url: apiUrl + "/login/cellphone",
      type: "POST",
      data: params,
    });
  },
  /**
   * 必选参数 : id: 音乐 id
   * 可选参数 : limit: 取出评论数量 , 默认为 20
   * offset: 偏移数量 , 用于分页 , 如 :( 评论页数 -1)*20, 其中 20 为 limit 的值
   * before: 分页参数,取上一页最后一项的 time 获取下一页数据(获取超过 5000 条评论的时候需要用到)
   */
  CommentMusic(params) {
    return ajax({
      url: apiUrl + "/comment/music",
      type: "POST",
      data: params,
    });
  },
};
