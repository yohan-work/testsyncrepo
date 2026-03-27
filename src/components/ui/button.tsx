"use client";

import * as React from "react";

export interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, type = "button", ...props }, ref) => (
    <button type={type} ref={ref} className={className} {...props} />
  ),
);
Button.displayName = "Button";
