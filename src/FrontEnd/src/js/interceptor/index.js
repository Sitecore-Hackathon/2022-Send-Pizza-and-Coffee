import axios from 'axios'

const service = axios.create();

// API Request interceptor
service.interceptors.request.use(config => {
    config.headers['Content-Type'] = 'application/json';
    return config
}, error => {
    Promise.reject(error)
})

export default service
