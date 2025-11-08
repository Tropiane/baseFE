import axios from "axios";

export const ticketConnect = axios.create({
    baseURL: import.meta.env.TICKET_API || import.meta.env.VITE_TICKET_API,
});

export const userConnect = axios.create({
    baseURL: import.meta.env.VITE_USER_API || import.meta.env.USER_API
})