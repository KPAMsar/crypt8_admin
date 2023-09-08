import axios from 'axios';
import { URL, token } from '../params';

const api = axios.create({
  baseURL: URL,
  headers: {
    'Accept': 'application/json',
  },
});

// Add an interceptor to modify headers before each request
api.interceptors.request.use(
  config => {
    if (token) {
      config.headers['Authorization'] = `Bearer ${token}`;
    }
    return config;
  },
  error => Promise.reject(error)
);

export default api;
