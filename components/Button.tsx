import React, { ReactNode } from "react";

export default function Button({
  children,
  onClick,
  className,
}: {
  children: ReactNode;
  onClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={onClick}
      className={`bg-blue-600 rounded px-3 py-2 text-lg font-normal shadow-sm text-zinc-50 hover:bg-blue-600/75 hover:scale-105 transition-all duration-75 ease-linear ${className}`}
    >
      {children}
    </button>
  );
}
