import React from "react";

export interface User{
    _id: string;
    name: string;
    email: string;
    role?: string
}

interface UserContextType{
    user: User | null;
    setUser: (user: User | null)=> void;
    setLogout: ()=> void;
    token: string | null,
    setToken: (token: string) => void
}

export const UserContext = React.createContext<UserContextType>({
    user: null,
    setUser: ()=>{},
    setLogout: ()=>{},
    token: null,
    setToken: ()=>{}
})