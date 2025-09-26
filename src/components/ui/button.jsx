import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva } from "class-variance-authority";
import { cn } from "../../lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-all duration-300 disabled:pointer-events-none disabled:opacity-50 shrink-0 outline-none focus-visible:ring-2 focus-visible:ring-amber-500 focus-visible:ring-offset-2",
  {
    variants: {
      variant: {
        default: "bg-amber-600 text-white shadow-md hover:bg-amber-700 hover:shadow-lg transform hover:scale-105 [&]:text-white [&]:font-bold",
        outline: "border border-amber-300 bg-white hover:bg-amber-50 text-amber-700 hover:text-amber-800 shadow-sm hover:shadow-md",
        secondary: "bg-amber-100 text-amber-800 hover:bg-amber-200 shadow-sm",
        ghost: "hover:bg-amber-50 text-amber-700 hover:text-amber-800",
        yoga: "bg-gradient-to-r from-amber-500 to-orange-500 text-white hover:from-amber-600 hover:to-orange-600 shadow-lg hover:shadow-xl transform hover:scale-105 [&]:text-white [&]:font-bold",
      },
      size: {
        default: "h-10 px-6 py-2",
        sm: "h-8 rounded-md px-4",
        lg: "h-12 rounded-md px-8",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  }
);

function Button({
  className,
  variant,
  size,
  asChild = false,
  ...props
}) {
  const Comp = asChild ? Slot : "button";

  return (
    <Comp
      className={cn(buttonVariants({ variant, size }), className)}
      {...props}
    />
  );
}

export { Button, buttonVariants };