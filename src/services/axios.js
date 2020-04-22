import axios from 'axios';
import localStorage from 'localStorage';

const instance = axios.create({
    baseURL: 'https://service-st-subee.tabspace.xyz',
    timeout: 1000
});

instance.interceptors.request.use((config) => {
    // Do something before request is sent
    console.log('interceptor cek localStorage');
    const token = localStorage.getItem('LOGIN_TOKEN');
    console.log(`interceptor cek localStorage hasilnya = ${token}`);

    console.log(config);
    config.headers['Authorization'] = token;

    return config;
}, function (error) {
    // Do something with request error
    return Promise.reject(error);
});

export default instance;