import axios from 'axios';

export const ticketConnect = axios.create({
    baseURL: import.meta.env.TICKET_API || import.meta.env.VITE_TICKET_API,
    withCredentials: true
});

export const userConnect = axios.create({
    baseURL: import.meta.env.USER_API || import.meta.env.VITE_USER_API,
    withCredentials: true
});

export const apiConnect = axios.create({
    baseURL: import.meta.env.API || import.meta.env.VITE_API,
    withCredentials: true
});