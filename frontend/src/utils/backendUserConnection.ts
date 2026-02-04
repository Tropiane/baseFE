import { userConnect } from "./axios.connection";
interface User{
    email: string,
    password: string
};

const login = async (data: User)=>{
    try {
        const res = await userConnect.post('/api/user/login',{
            email: data.email,
            password: data.password
        });
        console.log(res.data.rest);
        
        return {accessToken: res.data.accessToken, refreshToken: res.data.refreshToken, user: res.data.rest};
    } catch (error) {
        console.log(error);
        return 500
    }
}



export {
    login
}