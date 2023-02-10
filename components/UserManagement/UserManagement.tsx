import React from "react";
import Button from "../Button";
import UserTable from "./UserTable";

export default function UserManagement() {
  function openCreateUserModal() {
    console.log("hello world");
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
            <Button handleClick={openCreateUserModal}>Add Employee</Button>
          </div>
          <UserTable />
        </div>
      </div>
    </section>
  );
}
