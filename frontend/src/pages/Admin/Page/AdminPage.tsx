import React from "react";
import { deleteUser, getUsers } from "../../../utils/user";
import { iUser } from "../../../config/types";

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
      {users.length
        ? users.map((user) => (
            <div key={user.id}>
              <p>{user.id}</p>
              <p>{user.name}</p>
              <p>{user.email}</p>
              <button
                onClick={() => {
                  deleteUser(user.id);
                  setUsers(users.filter((u) => u.id !== user.id));
                }}
              >
                delete
              </button>
            </div>
          ))
        : null}
    </React.Fragment>
  );
};
