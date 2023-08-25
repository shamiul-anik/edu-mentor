import React, { useContext } from 'react';
import AuthContext from "@/contexts/AuthContext"


const useAuth = () => {
    const auth = useContext(AuthContext);
    const isClient = typeof window !== "undefined";

    if(!isClient && !auth) return {};

    if(!auth){
        throw new Error(
            "You must wrap your application with AuthProvider to use  useAuth"
        )
    }

    return auth;
};

export default useAuth;