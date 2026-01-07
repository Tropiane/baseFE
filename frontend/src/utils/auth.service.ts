import { apiConnect } from "./axios.connection";

export const refreshAccessToken = async (): Promise<string>=>{    
    const res = await apiConnect.get('/auth/refresh');    
    return res.data.accessToken;
}