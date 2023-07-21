import React from "react";
import { useDebounce } from "../../../hooks/useDebounce";
import { login, updateUser } from "../../../utils/user";
import { Input } from "../../../components";

export const UserPage: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("chaveDeUsuário") || "{}");
  const [username, setUsername] = React.useState(userData.name);
  const [email, setEmail] = React.useState(userData.email);
  const [password, setPassword] = React.useState(userData.password);

  const handleUsername = (event: React.ChangeEvent<HTMLInputElement>) =>
    setUsername(event.target.value);
  const handleEmail = (event: React.ChangeEvent<HTMLInputElement>) => setEmail(event.target.value);
  const handlePassword = (event: React.ChangeEvent<HTMLInputElement>) =>
    setPassword(event.target.value);

  const debouncedUsername = useDebounce(username, 500);
  const debouncedEmail = useDebounce(email, 500);
  const debouncedPassword = useDebounce(password, 500);

  const putUser = async () => {
    const response = await updateUser(userData.id, username, email, password);
    if (response) {
      const user = await login(email, password, false);
      localStorage.setItem("chaveDeUsuário", JSON.stringify(user));
    } else alert("Sinto muito, ocorreu um erro ao atualizar!");
  };

  React.useEffect(() => {
    putUser();
  }, [debouncedUsername, debouncedEmail, debouncedPassword]);

  return (
    <React.Fragment>
      <p>Username:</p>
      <Input type="text" value={username} onChange={handleUsername} />
      <p>Email:</p>
      <Input type="email" value={email} onChange={handleEmail} />
      <p>Password:</p>
      <Input type="password" value={password} onChange={handlePassword} />
      <p>
        <span style={{ fontWeight: "bold" }}>Note: </span>
        changes are saved after you finish typing
      </p>
    </React.Fragment>
  );
};
