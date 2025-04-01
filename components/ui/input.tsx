import * as React from "react";

import { cn } from "@/lib/utils";

const Input = React.forwardRef<HTMLInputElement, React.ComponentProps<"input">>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "flex h-10 w-full rounded-md border border-primary-base/10 bg-transparent px-3 py-2 text-sm text-default-base/90 placeholder:text-default-base/50 focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-primary-base/30 disabled:cursor-not-allowed disabled:opacity-50 dark:border-primary-base-dark/10 dark:text-default-base-dark/90 dark:placeholder:text-default-base-dark/50 dark:focus-visible:ring-primary-base-dark/30",
          className,
        )}
        ref={ref}
        {...props}
      />
    );
  },
);
Input.displayName = "Input";

export { Input };
