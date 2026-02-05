import React, { useEffect, useState } from "react";

import { UserContext, type User } from "../hooks/UserContext";
import { setAccessToken } from "../utils/auth.token";
import {logout} from "../utils/backendUserConnection";

export const UserProvider = ({children}: {children: React.ReactNode})=>{
    const [user, setUser] = useState<User | null>(null);
    const [token, setTokenState] = useState<string | null>(null);
    
    const setLogout = async ()=>{
        const getUser = JSON.parse(localStorage.getItem('user')|| "");
        setUser(null)
        localStorage.removeItem('user');
        localStorage.removeItem('refreshToken');
        await logout(getUser._id|| "");
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
        <UserContext.Provider value = {{user, setUser, setLogout, token, setToken}}>
            {children}
        </UserContext.Provider>
    )
}