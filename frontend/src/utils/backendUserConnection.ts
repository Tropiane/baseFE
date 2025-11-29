import { userConnect } from "./axios.connection";
interface User{
    email: string,
    password: string
};

const login = async (data: User)=>{
    try {
        const res = await userConnect.post('/',{
            email: data.email,
            password: data.password
        })
        
        return res.data
    } catch (error) {
        console.log(error);
        return 500
    }
}



export {
    login
}