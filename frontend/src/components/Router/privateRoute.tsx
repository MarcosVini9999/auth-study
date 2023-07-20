import React from "react";
import { Navigate } from "react-router-dom";
import { login } from "../../utils/user";

interface PrivateRouteProps {
  children: React.ReactNode;
}

export const PrivateRoute: React.FC<PrivateRouteProps> = ({ children }) => {
  let permission = false;

  const userData = JSON.parse(localStorage.getItem("chaveDeUsuário") || "{}");

  const checkingCredentials = async () => {
    const user = await login(userData.email, userData.password, userData.admin);
    if (user === "") alert("Usuário não encontrado. Por favor confira seus dados.");
    else permission = true;
  };

  if (!Object.keys(userData).length) return <Navigate to="/" />;
  else checkingCredentials();

  return userData.id ? children : <Navigate to="/" />;
};
