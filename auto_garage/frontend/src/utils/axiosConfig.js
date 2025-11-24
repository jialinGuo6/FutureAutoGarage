/**
 * FutureAutoGarage - AxiosConfig Component - Axios配置
 * 
 * Author: Jialin Guo
 * Created: 2025-11-03
 * Last Updated: 2025-11-04
 * 
 * 全局axios配置
 */
import axios from 'axios';

const httpClient = axios.create({
  baseURL: process.env.REACT_APP_API_URL || 'http://127.0.0.1:8000',
  withCredentials: true,
  timeout: 10000,
});

// 从 cookie 中获取 CSRF 令牌的函数
function getCSRFToken() {
  const name = 'csrftoken';
  let cookieValue = null;
  
  if (document.cookie && document.cookie !== '') {
    const cookies = document.cookie.split(';');
    for (let i = 0; i < cookies.length; i++) {
      const cookie = cookies[i].trim();
      if (cookie.substring(0, name.length + 1) === (name + '=')) {
        cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
        break;
      }
    }
  }
  return cookieValue;
}

// 请求拦截器：自动添加 CSRF 令牌
httpClient.interceptors.request.use(
  (config) => {
    // 获取 CSRF 令牌
    const csrfToken = getCSRFToken();
    
    // 对于状态更改请求，添加 CSRF 令牌
    if (['post', 'put', 'patch', 'delete'].includes(config.method?.toLowerCase())) {
      if (csrfToken) {
        config.headers['X-CSRFToken'] = csrfToken;
      }
    }
    
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 统一错误处理
/*httpClient.interceptors.response.use(
  response => response,
  error => {
    if (error.response?.status === 401) {
      window.location.href = '/';
    }
    return Promise.reject(error);
  }
); */

export default httpClient;
