import React, { Dispatch, SetStateAction, useState } from "react";
import { FormField } from "../FormField";

export default function AddUserModal({
  toggleUserModal,
  getAllUsers,
}: {
  toggleUserModal: Dispatch<SetStateAction<boolean>>;
  getAllUsers: () => void;
}) {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [error, setError] = useState("");

  async function createUser(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    // one of the three is still empty
    // shouldn't ever happen since we require input fields
    // best to be safe.
    if (!firstName || !lastName || !email) return;

    // construct our user object to send to our DB
    const userData = {
      first_name: firstName,
      last_name: lastName,
      email: email,
    };

    try {
      const response = await fetch("/api/users", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(userData),
      });

      const data = await response.json();

      if (!response.ok) {
        console.log(data.message);
      } else {
        console.log(data.message);
        console.log("user created");

        // Re fetch all users after adding our new user
        getAllUsers();
        // Close our modal down
        toggleUserModal(false);
      }
    } catch (error) {
      console.log("network error");
    }
  }

  return (
    <div className="absolute top-0 left-0 flex flex-col justify-center container mx-auto p-4 h-96 bg-zinc-50 rounded">
      <div className="relative">
        <div className="absolute top-0 right-0 ">
          <button onClick={() => toggleUserModal(false)}>
            <svg
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              strokeWidth={1.5}
              stroke="currentColor"
              className="w-10 h-10"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M6 18L18 6M6 6l12 12"
              />
            </svg>
          </button>
        </div>
        <div className="container mx-auto p-5">
          <div className="flex flex-col items-center gap-5">
            <form
              onSubmit={(e) => createUser(e)}
              className="w-full flex flex-col gap-3 md:w-[640px]"
            >
              <FormField
                label="First Name"
                type="text"
                name="first_name"
                id="first_name"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
                error={error}
              />
              <FormField
                label="Last Name"
                type="text"
                name="last_name"
                id="last_name"
                required
                value={lastName}
                onChange={(e) => setLastName(e.target.value)}
                error={error}
              />
              <FormField
                label="Email"
                type="email"
                name="email"
                id="email"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                error={error}
              />
              <button className="bg-blue-600 text-gray-50 text-lg p-2 rounded hover:bg-blue-500">
                Add User
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  );
}
