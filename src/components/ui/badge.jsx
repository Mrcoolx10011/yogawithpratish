import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const badgeVariants = cva(
  "inline-flex items-center justify-center rounded-md border px-3 py-1 text-xs font-medium w-fit whitespace-nowrap shrink-0 gap-1 transition-all duration-300",
  {
    variants: {
      variant: {
        default: "border-transparent bg-amber-600 text-white hover:bg-amber-700 shadow-md",
        secondary: "border-transparent bg-amber-100 text-amber-800 hover:bg-amber-200",
        outline: "text-amber-700 border-amber-300 hover:bg-amber-50",
        yoga: "border-transparent bg-amber-600 text-white hover:bg-amber-700 shadow-lg font-semibold",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  }
);

function Badge({
  className,
  variant,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "span";

  return (
    <Comp
      className={cn(badgeVariants({ variant }), className)}
      {...props}
    />
  );
}

export { Badge, badgeVariants };