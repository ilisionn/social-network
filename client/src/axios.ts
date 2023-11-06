import axios, { AxiosRequestConfig, AxiosRequestHeaders } from 'axios';
interface AdaptAxiosRequestConfig extends AxiosRequestConfig {
  headers: AxiosRequestHeaders;
}

const instance = axios.create({
  baseURL: 'http://localhost:4444/api',
});

instance.interceptors.request.use((config): AdaptAxiosRequestConfig => {
  config.headers.Authorization = window.localStorage.getItem('token');
  return config;
});

export default instance;
