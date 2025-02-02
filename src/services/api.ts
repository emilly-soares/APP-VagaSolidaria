import axios from 'axios';
import { getToken } from './authconfig';

const api = axios.create({
  baseURL: 'http://localhost:3003', 
});

api.interceptors.request.use(async config => {

  const token = getToken();
  // console.log(config, token);

  if (token) {
     config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

export default api;