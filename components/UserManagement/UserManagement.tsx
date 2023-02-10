import { User } from "@/types";
import React, { useEffect, useState } from "react";
import AddUserModal from "./AddUserModal";
import Button from "../Button";
import UserTable from "./UserTable";

export default function UserManagement() {
  const [users, setUsers] = useState<User[]>([]);
  const [toggleModal, setToggleModal] = useState(false);

  // Initial get all users on page mount
  useEffect(() => {
    getAllUsers();
  }, []);

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

  async function deleteUser(id: number) {
    // prompt user they're about to delete a user
    if (confirm("Are you sure you want to delete this user ?")) {
      try {
        const response = await fetch(`/api/users/${id}`, {
          method: "DELETE",
          headers: {
            "Content-Type": "application/json",
          },
        });

        const data = await response.json();

        if (!response.ok) {
          console.log(data.message);
          return;
        } else {
          console.log(data.message);

          // refetch all users from db
          // todo: use state / reducer and remove user from state instead of having to do 2 Fetch request, 1 - to delete & 2 - re fetch all users
          getAllUsers();
        }
      } catch (error) {
        console.log("network error");
      }
    } else {
      console.log("canceled deleting user");
    }
  }

  async function updateUser(user: User) {
    if (!user) return;

    // construct our user object to update
    const userData = {
      first_name: user.first_name,
      last_name: user.last_name,
      email: user.email,
    };

    try {
      const response = await fetch(`/api/users/${user.id}`, {
        method: "PATCH",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
        return;
      } else {
        console.log(data.message);

        // refetch all users from db
        // todo: use state / reducer and remove user from state instead of having to do 2 Fetch request, 1 - to delete & 2 - re fetch all users
        getAllUsers();
      }
    } catch (error) {
      console.log("network error");
    }
  }

  function toggleUserModal() {
    setToggleModal(!toggleModal);
  }

  return (
    <section className="bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-gray-800 via-gray-900 to-black min-h-screen">
      <div className="container mx-auto p-4 flex flex-col gap">
        <div className="flex flex-col gap-4">
          <div>
            <h1 className="text-2xl font-bold invert">
              Employee Management Software
            </h1>
          </div>
          <div className="flex gap-4">
            <Button
              className="bg-green-600 hover:bg-green-600/75"
              onClick={toggleUserModal}
            >
              Add Employee
            </Button>
          </div>
          <div className="relative">
            <UserTable
              users={users}
              deleteUser={deleteUser}
              updateUser={updateUser}
            />
            {toggleModal ? (
              <AddUserModal
                toggleUserModal={toggleUserModal}
                getAllUsers={getAllUsers}
              />
            ) : null}
          </div>
        </div>
      </div>
    </section>
  );
}
