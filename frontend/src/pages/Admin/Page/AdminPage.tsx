import React from "react";
import { iUser } from "../../../config/types";
import { deleteUser, getUsers } from "../../../utils/user";
import "./AdminPageStyles.css";
import { Button } from "../../../components/Button/Button";

export const AdminPage: React.FC = () => {
  const [users, setUsers] = React.useState<iUser[]>([]);

  React.useEffect(() => {
    const fetchUsers = async () => {
      const users = await getUsers().then((users) => users.filter((user: iUser) => !user.admin));
      setUsers(users);
    };

    if (!users.length) fetchUsers();
  }, []);

  return (
    <React.Fragment>
      <div id="list">
        {users.length
          ? users.map((user) => (
              <div className="userCard" key={user.id}>
                <p>ID: {user.id}</p>
                <p>NOME: {user.name}</p>
                <p>EMAIL: {user.email}</p>
                <Button
                  onClick={() => {
                    deleteUser(user.id);
                    setUsers(users.filter((u) => u.id !== user.id));
                  }}
                >
                  delete
                </Button>
              </div>
            ))
          : null}
      </div>
    </React.Fragment>
  );
};
