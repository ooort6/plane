import axios from 'axios';
import vmPromise from '../main';

const baseURL = process.env.VUE_APP_FETCH_URL;
const $http = axios.create({
  baseURL,
  timeout: 5000, // 超时
  withCredentials: true, // 跨域请求时是否需要使用凭证 cookie 或 session
  validateStatus(status) {
    // http状态码校验
    const bool = status >= 200 && status < 300;
    if (!bool) {
      vmPromise.then((vm) => {
        vm.$router.push({
          path: '/error',
          query: {
            code: status,
            errmsg: '网络错误',
          },
        });
      });
    }
    return bool;
  },
});

$http.interceptors.response.use((response) => {
  // 校验服务器自定义的状态码
  const { data, code, msg } = response.data;
  if (code !== 200) {
    vmPromise.then((vm) => {
      vm.$router.push({
        path: '/error',
        query: { code, errmsg: msg },
      });
    });
  }
  return data;
});

export default $http;
