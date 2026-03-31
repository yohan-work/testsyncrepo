"use client";

import * as React from "react";

export interface TestimonialsProps extends React.HTMLAttributes<HTMLDivElement> {}

export const Testimonials = React.forwardRef<HTMLDivElement, TestimonialsProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  ),
);
Testimonials.displayName = "Testimonials";
