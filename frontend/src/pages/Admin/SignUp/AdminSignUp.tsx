import React from "react";
import { createUser, login } from "../../../utils/user";
import { useNavigate } from "react-router-dom";
import { Input } from "../../../components";
import { Button } from "../../../components/Button/Button";

export const AdminSignUp: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const navigate = useNavigate();

  const handleName = (event: React.ChangeEvent<HTMLInputElement>) => {
    setName(event.target.value);
  };
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => {
    setEmail(event.target.value);
  };
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPassword(event.target.value);
  };

  const onSignUp = async () => {
    const response = await createUser(name, email, password, true);
    if (response) {
      alert("Administrador cadastrado com sucesso!");
    }
    const user = await login(email, password, true);
    if (user !== "") {
      localStorage.setItem("chaveDeUsuário", JSON.stringify(user));
      navigate("/admin/home");
    }
  };

  return (
    <React.Fragment>
      <Input type="text" placeholder="Name" value={name} onChange={handleName} />
      <Input type="email" placeholder="Email" value={email} onChange={handleEmail} />
      <Input type="password" placeholder="Password" value={password} onChange={handlePassword} />
      <Button onClick={onSignUp}>Sign Up</Button>
    </React.Fragment>
  );
};
