import axios from 'axios';

//import { storeToRefs } from "pinia";
//import { useAuthStore } from "@/stores/leader/auth";
//const { user } = storeToRefs(useAuthStore());

const axiosClient = axios.create({
  // baseURL: 'https://api.leader.arkanmedia.com/api'
  baseURL: '/api',
});

axiosClient.interceptors.request.use((config) => {
  config.headers.Authorization = `Bearer ${sessionStorage.getItem('TOKEN')}`;
  return config;
});

export default axiosClient;
