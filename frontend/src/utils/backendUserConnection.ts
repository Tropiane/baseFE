interface User{
    email: string,
    password: string
}

const API_URL = import.meta.env.VITE_USER_API;

const login = async (data: User)=>{
    const res = await fetch(API_URL, {
        method: "POST",
        credentials: "include",
        headers: {"Content-Type": "application/json"},
        body: JSON.stringify(data)
    });

    if(!res.ok){
        throw new Error("Error al iniciar sesion")
    }
    
    return res.json()
}

export {
    login
}