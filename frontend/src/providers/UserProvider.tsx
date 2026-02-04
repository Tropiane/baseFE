import React, { useEffect, useState } from "react";

import { UserContext, type User } from "../hooks/UserContext";
import { setAccessToken } from "../utils/auth.token";

export const UserProvider = ({children}: {children: React.ReactNode})=>{
    const [user, setUser] = useState<User | null>(null);
    const [token, setTokenState] = useState<string | null>(null);
    const logout = ()=>{
        setUser(null)
    }

    const setToken = (token: string) => {
        setTokenState(token)
        setAccessToken(token)
    }

    useEffect(()=>{
        const userStr = localStorage.getItem('user')
        if(userStr){
            try {
                setUser(JSON.parse(userStr))
            } catch {
                setUser(null)
            }
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