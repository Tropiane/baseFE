import React, { useEffect, useState } from "react";

import { UserContext } from "../hooks/UserContext";
import { setAccessToken } from "../utils/auth.token";

export const UserProvider = ({children}: {children: React.ReactNode})=>{
    const [user, setUser] = useState<string | null>(null);
    const [token, setTokenState] = useState<string | null>(null);
    const logout = ()=>{
        setUser(null)
    }

    const setToken = (token: string) => {
        setTokenState(token)
        setAccessToken(token)
    }

    useEffect(()=>{
        const user = localStorage.getItem('user')
        if(user){
            setUser(user)
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