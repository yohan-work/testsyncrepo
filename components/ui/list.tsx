"use client";

import * as React from "react";

export interface ListProps extends React.HTMLAttributes<HTMLDivElement> {}

export const List = React.forwardRef<HTMLDivElement, ListProps>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={className} {...props} />
  ),
);
List.displayName = "List";
