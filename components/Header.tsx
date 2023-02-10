import React from "react";
import Button from "./Button";

export default function Header() {
  return (
    <header className="zinc-50">
      <div className="container mx-auto p-4 flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-zinc-900">UserFlow</h1>
        </div>
      </div>
    </header>
  );
}
