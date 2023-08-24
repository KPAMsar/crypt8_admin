import axios from 'axios';
import { URL,token } from '../params';


const api = axios.create({
    baseURL:URL,
       headers:{
        'Content-Type': 'application/json',
		'Accept': 'application/json'
       }
});


api.interceptors.request.use(
    config => {
		if (token) {
			config.headers['Authorization'] = `Bearer ${token}`
			
			
		}
		return config
	},
	error => Promise.reject(error)
)

export default api;