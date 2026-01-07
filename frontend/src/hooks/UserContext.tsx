import React from "react";

// interface User{
//     id: string;
//     name: string;
//     email: string;
//     role?: string
// }

interface UserContextType{
    user: string | null;
    setUser: (user: string | null)=> void;
    logout: ()=> void;
    token: string | null,
    setToken: (token: string) => void
}

export const UserContext = React.createContext<UserContextType>({
    user:null,
    setUser: ()=>{},
    logout: ()=>{},
    token: null,
    setToken: ()=>{}
})