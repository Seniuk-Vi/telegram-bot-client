import React, {createContext, useContext, useEffect, useState} from 'react';
import {login, LoginResponse, signUp, UserRequest} from "../services/AuthService";

interface IAuthContext {
    id: number | null;
    isAuthenticated: boolean;
    token: string | null;

    authenticate(email: string, password: string): Promise<void>;

    register(email: string, password: string, confirmPassword: string): Promise<void>;

    logout(): void;
}

const AuthContext = createContext<IAuthContext>({} as IAuthContext);

export const useAuth = () => {
    return useContext(AuthContext);
};

interface AuthProviderProps {
    children: React.ReactNode;
}

export const AuthProvider: React.FC<AuthProviderProps> = ({children}) => {
    const [isAuthenticated, setIsAuthenticated] = useState(false);


    const [id, setId] = useState<number | null>(() => {
        const storedId = localStorage.getItem('id');
        if (storedId) {
            setIsAuthenticated(true);
            return parseInt(storedId, 10);
        }
        return null;
    });


    const [token, setToken] = useState<string | null>(() => {
        return localStorage.getItem('JWT');
    });
    useEffect(() => {
        if (id !== null && token !== null) {
            setIsAuthenticated(true);
        } else {
            setIsAuthenticated(false);
        }
    }, [id, token]);
    const authenticate = async (email: string, password: string) => {
        try {
            const request: UserRequest = {email, password};
            const responseData: LoginResponse = await login(request);
            // Save the info into localStorage
            localStorage.setItem('JWT', responseData.token);
            localStorage.setItem('id', responseData.id.toString());
            setIsAuthenticated(true);
            setId(responseData.id);
            setToken(responseData.token);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };
    const register = async (email: string, password: string, confirmPassword: string) => {
        try {
            const request: UserRequest = {email, password, confirmPassword};
            await signUp(request);
        } catch (error) {
            console.error(error);
            throw error;
        }
    };

    const logout = () => {
        // Remove JWT token from local storage.
        setToken(null);
        setIsAuthenticated(false);
        setId(null);
        // Remove the JWT token from local storage
        localStorage.removeItem('JWT');
        localStorage.removeItem('id');
    };

    return (
        <AuthContext.Provider value={{id, isAuthenticated, token, authenticate, register, logout}}>
            {children}
        </AuthContext.Provider>
    );
};