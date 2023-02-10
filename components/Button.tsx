import React, { ReactNode } from "react";

export default function Button({
  children,
  handleClick,
  className,
}: {
  children: ReactNode;
  handleClick?: () => void;
  className?: string;
}) {
  return (
    <button
      onClick={handleClick}
      className={`bg-blue-600 rounded px-3 py-2 text-lg font-normal shadow-sm text-zinc-50 hover:bg-blue-600/75 hover:scale-105 transition-all duration-75 ease-linear ${className}`}
    >
      {children}
    </button>
  );
}
