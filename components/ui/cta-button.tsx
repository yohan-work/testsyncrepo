"use client";

import * as React from "react";

export interface CtaButtonProps extends React.HTMLAttributes<HTMLDivElement> {}

export const CtaButton = React.forwardRef<HTMLDivElement, CtaButtonProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  ),
);
CtaButton.displayName = "CtaButton";
