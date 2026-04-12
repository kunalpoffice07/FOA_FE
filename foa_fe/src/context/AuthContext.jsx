import { useState, useEffect, createContext } from "react";
import { getUser } from "../services/APIs/api";

export const AuthContext = createContext();

export default function AuthProvider({ children }) {
    const [token, setToken] = useState(localStorage.getItem("token"));

    const [user, setUser] = useState(null);

    const [loading, setLoading] = useState(true);


    const login = (token) => {
        localStorage.setItem("token", token);
        setToken(token);
    }

    const logout = () => {
        localStorage.removeItem("token");
        setToken(null);
        setUser(null);
    }

    const fetchUser = async () => {
        try {
            const res = await getUser();
            setUser(res.data);
        }
        catch (err) {
            console.error("User fetch failed", err);
            logout();
        }
        finally {
            setLoading(false);
        }
    }

    useEffect(() => {
        if(token){
            fetchUser();
        }
        else{
            setLoading(false);
        }
    }, [token]);


    return (
    <AuthContext.Provider
      value={{
        token,
        user,
        loading,
        login,
        logout,
      }}
    >
      {children}
    </AuthContext.Provider>
  );
}