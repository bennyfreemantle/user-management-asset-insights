import { User } from "@/types";
import { useState } from "react";
import Button from "../Button";

export default function UserTable({
  users,
  deleteUser,
  updateUser,
}: {
  users: User[];
  deleteUser: (id: number) => void;
  updateUser: (user: User) => void;
}) {
  const [editMode, setEditMode] = useState(false);
  // const [firstName, setFirstName] = useState("");
  // const [lastName, setLastName] = useState("");
  // const [email, setEmail] = useState("");
  const [selectedUser, setSelectedUser] = useState<User>({
    id: 0,
    first_name: "",
    last_name: "",
    email: "",
    createdAt: "",
    updatedAt: "",
  });

  function editUser(user: User) {
    console.log(user);
    // Set edit more to true so it can render our input fields
    setEditMode(true);
    setSelectedUser(user);
  }

  function saveUser() {
    setEditMode(false);
    updateUser(selectedUser);
  }

  return (
    <div>
      <table className="w-full text-zinc-50">
        <thead>
          <tr className="">
            <th className="text-left border-b">No.</th>
            <th className="text-left border-b">First Name.</th>
            <th className="text-left border-b">Last Name.</th>
            <th className="text-left border-b">Email.</th>
            <th className="text-left border-b">Date</th>
            <th className="text-left border-b">Action</th>
          </tr>
        </thead>
        <tbody>
          {users.map((user, index) => (
            <tr className="border-b" key={user.id}>
              <td className="text-left py-3">{index + 1}</td>
              {editMode && selectedUser && selectedUser.id === user.id ? (
                <td>
                  <input
                    className="text-zinc-900 p-1 outline outline-2 outline-blue-600/75"
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        first_name: e.target.value,
                      })
                    }
                    value={selectedUser.first_name}
                  />
                </td>
              ) : (
                <td className="text-left py-3">{user.first_name}</td>
              )}
              {editMode && selectedUser && selectedUser.id === user.id ? (
                <td>
                  <input
                    className="text-zinc-900 p-1 outline outline-2 outline-blue-600/75"
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        last_name: e.target.value,
                      })
                    }
                    value={selectedUser.last_name}
                  />
                </td>
              ) : (
                <td className="text-left py-3">{user.last_name}</td>
              )}
              {editMode && selectedUser && selectedUser.id === user.id ? (
                <td>
                  <input
                    className="text-zinc-900 p-1 outline outline-2 outline-blue-600/75"
                    onChange={(e) =>
                      setSelectedUser({
                        ...selectedUser,
                        email: e.target.value,
                      })
                    }
                    value={selectedUser.email}
                  />
                </td>
              ) : (
                <td className="text-left py-3">{user.email}</td>
              )}
              <td className="text-left py-3">{user.createdAt.toString()}</td>
              <td className="text-left py-3">
                <div className="flex gap-2">
                  <Button
                    onClick={() => deleteUser(user.id)}
                    className="bg-red-600 hover:bg-red-600/75 rounded px-3 py-2 text-lg font-normal shadow-sm text-zinc-50 hover:scale-105 transition-all duration-75 ease-linear "
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth={1.5}
                      stroke="currentColor"
                      className="w-6 h-6"
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M14.74 9l-.346 9m-4.788 0L9.26 9m9.968-3.21c.342.052.682.107 1.022.166m-1.022-.165L18.16 19.673a2.25 2.25 0 01-2.244 2.077H8.084a2.25 2.25 0 01-2.244-2.077L4.772 5.79m14.456 0a48.108 48.108 0 00-3.478-.397m-12 .562c.34-.059.68-.114 1.022-.165m0 0a48.11 48.11 0 013.478-.397m7.5 0v-.916c0-1.18-.91-2.164-2.09-2.201a51.964 51.964 0 00-3.32 0c-1.18.037-2.09 1.022-2.09 2.201v.916m7.5 0a48.667 48.667 0 00-7.5 0"
                      />
                    </svg>
                  </Button>
                  {editMode && selectedUser?.id === user.id ? (
                    <Button
                      className="bg-green-600 hover:bg-green-600/75"
                      onClick={() => saveUser()}
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M4.5 12.75l6 6 9-13.5"
                        />
                      </svg>
                    </Button>
                  ) : (
                    <Button onClick={() => editUser(user)}>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        strokeWidth={1.5}
                        stroke="currentColor"
                        className="w-6 h-6"
                      >
                        <path
                          strokeLinecap="round"
                          strokeLinejoin="round"
                          d="M16.862 4.487l1.687-1.688a1.875 1.875 0 112.652 2.652L6.832 19.82a4.5 4.5 0 01-1.897 1.13l-2.685.8.8-2.685a4.5 4.5 0 011.13-1.897L16.863 4.487zm0 0L19.5 7.125"
                        />
                      </svg>
                    </Button>
                  )}
                </div>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}
