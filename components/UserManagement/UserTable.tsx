import { User, UserResponse } from "@/types";
import { GetServerSideProps } from "next";
import React, { useEffect, useState } from "react";

// export const getServerSideProps: GetServerSideProps = async () => {
//   const response = await fetch("/api/users");

//   const users: UserResponse = await response.json();

//   return {
//     props: {
//       users,
//     },
//   };
// };

export default function UserTable() {
  const [users, setUsers] = useState<User[]>([]);

  useEffect(() => {
    async function getAllUsers() {
      const response = await fetch("/api/users", {
        method: "GET",
        headers: {
          "Content-Type": "application/json",
        },
      });

      const data = await response.json();

      if (!response.ok) {
        // todo: learn tRPC for type safety both client and server
        return data.message;
      } else {
        console.log(data.message);
        if (data) {
          setUsers(data.users);
        }
      }
    }

    getAllUsers();
  }, []);

  if (users) {
    console.log(users);
  }
  return (
    <div>
      <div className="">
        <div className="grid grid-cols-6 text-zinc-50">
          <div>
            <h2>No.</h2>
          </div>
          <div>
            <h2>First Name</h2>
          </div>
          <div>
            <h2>Last Name</h2>
          </div>
          <div>
            <h2>Email</h2>
          </div>
          <div>
            <h2>Created At</h2>
          </div>
          <div>
            <h2>Actions</h2>
          </div>
        </div>
        {/* {users ? (
          <div>
            {users.map((user) => (
              <tr className="border text-left p-2" key={user.id}>
                <td className="border text-left p-2 text-zinc-50">{user.id}</td>
                <td className="border text-left p-2 text-zinc-50">
                  {user.first_name}
                </td>
                <td className="border text-left p-2 text-zinc-50">
                  {user.last_name}
                </td>
                <td className="border text-left p-2 text-zinc-50">
                  {user.email}
                </td>
                <td className="border text-left p-2 text-zinc-50">
                  {user.createdAt.toString()}
                </td>
              </tr>
            ))}
          </div>
        ) : null} */}
      </div>
    </div>
  );
}
