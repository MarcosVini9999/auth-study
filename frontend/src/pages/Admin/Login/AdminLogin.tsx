import React from "react";
import { useNavigate } from "react-router-dom";
import { login } from "../../../utils/user";
import { Button } from "../../../components/Button/Button";
import { Input } from "../../../components";

export const AdminLogin: React.FC = () => {
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const handleLogin = async () => {
    if (email === "" || password === "") return;
    const user = await login(email, password, true);
    if (user === "") alert("Admin não encontrado. Por favor confira seus dados.");
    else {
      localStorage.removeItem("chaveDeUsuário");
      localStorage.setItem("chaveDeUsuário", JSON.stringify(user));
      navigate("/admin/home");
    }
  };

  return (
    <React.Fragment>
      <Input type="text" placeholder="Email" onChange={handleEmail} />
      <Input type="text" placeholder="Password" onChange={handlePassword} />
      <Button onClick={handleLogin}>Login</Button>
    </React.Fragment>
  );
};
