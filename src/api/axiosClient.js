import axios from 'axios'

const axiosClient = axios.create({
    baseURL: 'https://datausa.io/api',
    timeout: 15000, //canceled after 15 seconds
});

axiosClient.interceptors.response.use(
    response => {
        return response;
    },
    error => {
        console.log('There was an error with the request:', error.message);
        return Promise.reject(error);
    }
);

export default axiosClient;