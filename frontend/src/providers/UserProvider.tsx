import React, { useEffect, useState } from "react";

import { UserContext } from "../hooks/UserContext";

export const UserProvider = ({children}: {children: React.ReactNode})=>{
    const [user, setUser] = useState<string | null>(null);
    const [token, setToken] = useState<string | null>(null);
    const logout = ()=>{
        setUser(null)
    }

    useEffect(()=>{
        const user = localStorage.getItem('user')
        if(user){
            setUser(JSON.parse(user))
        }
    }, [])

    useEffect(()=>{
        if(user){
            localStorage.setItem('user', JSON.stringify(user))
        }else{
            localStorage.removeItem('user')
        }
    }, [user])

    return(
        <UserContext.Provider value = {{user, setUser, logout, token, setToken}}>
            {children}
        </UserContext.Provider>
    )
}