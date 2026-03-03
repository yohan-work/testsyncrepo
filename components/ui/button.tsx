import React from 'react';

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  children?: React.ReactNode;
  className?: string;
}

export function Button({ children, className = '', ...props }: ButtonProps) {
  return (
    <button
      className={`px-4 py-2 rounded-md bg-[#1d4ed8] text-white font-medium hover:opacity-90 ${className}`}
      {...props}
    >
      {children}
    </button>
  );
}
