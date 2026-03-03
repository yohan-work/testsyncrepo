import React from 'react';

export interface InputProps extends React.InputHTMLAttributes<HTMLInputElement> {
  className?: string;
}

export const Input = React.forwardRef<HTMLInputElement, InputProps>(
  ({ className = '', ...props }, ref) => {
    return (
      <input
        ref={ref}
        className={`w-full px-3 py-2 border border-[#e2e8f0] rounded-md focus:outline-none focus:ring-2 focus:ring-[#1d4ed8] ${className}`}
        {...props}
      />
    );
  }
);
Input.displayName = 'Input';
