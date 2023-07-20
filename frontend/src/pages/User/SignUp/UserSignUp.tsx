import React from "react";
import { createUser, login } from "../../../utils/user";
import { useNavigate } from "react-router-dom";

export const UserSignUp: React.FC = () => {
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
    const response = await createUser(name, email, password, false);
    if (response) {
      alert("Usuário cadastrado com sucesso!");
    }
    const user = await login(email, password, false);
    if (user !== "") {
      localStorage.setItem("chaveDeUsuário", JSON.stringify(user));
      navigate("/home");
    }
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="Name" value={name} onChange={handleName} />
      <input type="email" placeholder="Email" value={email} onChange={handleEmail} />
      <input type="password" placeholder="Password" value={password} onChange={handlePassword} />
      <button onClick={onSignUp}>Sign Up</button>
    </React.Fragment>
  );
};
