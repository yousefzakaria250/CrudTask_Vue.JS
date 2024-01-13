import axios from 'axios';

const axiosInstance = axios.create({
  baseURL: 'https://localhost:7263/api', // Replace with your API base URL
});

export default axiosInstance;