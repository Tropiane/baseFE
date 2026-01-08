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
        
        return {accessToken: res.data.accessToken};
    } catch (error) {
        console.log(error);
        return 500
    }
}



export {
    login
}