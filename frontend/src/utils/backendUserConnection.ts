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
        }, {withCredentials: true})

        return res.data
    } catch (error) {
        throw new Error(`error al iniciar sesion ${error}`)
    }
}

export {
    login
}