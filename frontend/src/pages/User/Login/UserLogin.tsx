import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/user";

export const UserLogin: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleLogin = async () => {
    if (email === "" || password === "") return;
    const user = await login(email, password, false);
    if (user === "") alert("Usuário não encontrado. Por favor confira seus dados.");
    else {
      localStorage.removeItem("chaveDeUsuário");
      localStorage.setItem("chaveDeUsuário", JSON.stringify(user));
      navigate("/home");
    }
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="Email" onChange={handleEmail} />
      <input type="text" placeholder="Password" onChange={handlePassword} />
      <button onClick={handleLogin}>Login</button>
    </React.Fragment>
  );
};
