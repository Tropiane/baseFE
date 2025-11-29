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
<<<<<<< HEAD
        }, {withCredentials: true});
        console.log(data);
=======
        })
>>>>>>> bd64064e3ee075989f1660877270d22e39646bd5
        
        return res.data
    } catch (error) {
        return 500
    }
}



export {
    login
}