import { useContext } from "react";
import { Navigate } from "react-router-dom";
import { AuthContext } from "../context/AuthContext";

export const PublicRoute: React.FC<any> = ({ children, restricted }) => {
  const { auth } = useContext(AuthContext);

  return auth.logged && restricted ? <Navigate to="/" /> : children;
};
