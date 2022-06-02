import axios from 'axios';

const api = axios.create({
    baseURL: 'https://api.mcsrvstat.us/2/'
});

export default api;