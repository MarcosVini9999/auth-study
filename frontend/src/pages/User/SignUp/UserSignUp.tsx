import React from "react";

export const UserSignUp: React.FC = () => {
  const [name, setName] = React.useState("");
  const [email, setEmail] = React.useState("");
  const [password, setPassword] = React.useState("");
  const [admin, setAdmin] = React.useState(false);

  const onSignUp = (name: string, email: string, password: string, admin: boolean) => {
    console.log(`${name} ${email} ${password} ${admin}`);
  };

  return (
    <React.Fragment>
      <input type="text" placeholder="Name" />
      <input type="text" placeholder="Email" />
      <input type="text" placeholder="Password" />
      <button>Sign Up</button>
    </React.Fragment>
  );
};
