import { useState, createContext } from "react";
import { AuthContextTypes, ProviderProps } from "../types/types";
import {
  getLocalStorage,
  removeLocalStorage,
  saveLocalStorage,
} from "../utils/localStorage";

export const AuthContext = createContext({} as AuthContextTypes);

const initialState = {
  loading: true,
  logged: false,
};

export const AuthProvider = ({ children }: ProviderProps) => {
  const [auth, setAuth] = useState(initialState);
  const logout = () => {
    removeLocalStorage("token");
    setAuth({
      loading: false,
      logged: false,
    });
  };
  const login = (token: string) => {
    setAuth({
      loading: false,
      logged: true,
    });
    saveLocalStorage("token", token);
  };
  const checkToken = () => {
    const token = getLocalStorage("token");
    if (token) {
      setAuth({
        loading: false,
        logged: true,
      });
      return true;
    } else {
      setAuth({
        loading: false,
        logged: false,
      });
      return false;
    }
  };
  return (
    <AuthContext.Provider value={{ auth, logout, checkToken, login }}>
      {children}
    </AuthContext.Provider>
  );
};
