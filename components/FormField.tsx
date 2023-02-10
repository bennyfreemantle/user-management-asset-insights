import React, { useState } from "react";

type FormFieldProps = {
  label: string;
  name: string;
  type: string;
  id: string;
  value: string;
  onChange: (e: React.ChangeEvent<HTMLInputElement>) => void;
  error: string;
  required: boolean;
};

export function FormField({
  label,
  name,
  type = "text",
  value,
  onChange,
  error,
}: FormFieldProps) {
  return (
    <div className="flex flex-col">
      <label htmlFor={name} className="text-gray-900">
        {label}
      </label>
      <div className="border">
        <input
          type={type}
          name={name}
          id={name}
          required
          value={value}
          onChange={onChange}
          className="rounded p-1 w-full outline-none"
        />
      </div>
      {error ? (
        <p className="text-red-500 text-sm font-light">{error}</p>
      ) : null}
    </div>
  );
}
