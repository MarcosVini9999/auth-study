import React, { useState } from "react";
import { useDebounce } from "../../../hooks/useDebounce";

export const UserPage: React.FC = () => {
  const userData = JSON.parse(localStorage.getItem("chaveDeUsuário") || "{}");
  const [username, setUsername] = useState(userData.name);
  const [email, setEmail] = useState(userData.email);
  const [password, setPassword] = useState(userData.password);

  return (
    <React.Fragment>
      <h1>User Page</h1>
    </React.Fragment>
  );
};
