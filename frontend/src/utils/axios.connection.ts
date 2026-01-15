import axios from 'axios';
import { getAuthToken } from './auth.token';

const createClient = (baseURL?: string) => {
    const instance = axios.create({
        baseURL,
        withCredentials: true
    });

    instance.interceptors.request.use(config =>{
        const token = getAuthToken();
        if(token){
            config.headers.Authorization = `Bearer ${token}`;
            console.log(token);
            
        }
        return config
    })

    return instance
}

export const ticketConnect = createClient(
    import.meta.env.TICKET_API || import.meta.env.VITE_TICKET_API
);

export const userConnect = createClient(
    import.meta.env.USER_API || import.meta.env.VITE_USER_API
);

export const apiConnect = createClient(
    import.meta.env.API || import.meta.env.VITE_API
);