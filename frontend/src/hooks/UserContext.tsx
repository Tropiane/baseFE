import React from "react";

interface User{
    id: string;
    name: string;
    email: string;
    role?: string
}

interface UserContextType{
    user: User | null;
    setUser: (user: User | null)=> void;
    logout: ()=> void;
}

export const UserContext = React.createContext<UserContextType>({
    user:null,
    setUser: ()=>{},
    logout: ()=>{}
})