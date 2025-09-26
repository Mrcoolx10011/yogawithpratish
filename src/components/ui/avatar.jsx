import * as React from "react";
import * as AvatarPrimitive from "@radix-ui/react-avatar";
import { cn } from "../../lib/utils";

function Avatar({ className, ...props }) {
  return (
    <AvatarPrimitive.Root
      className={cn(
        "relative flex size-12 shrink-0 overflow-hidden rounded-full border-4 border-amber-200 shadow-lg",
        className
      )}
      {...props}
    />
  );
}

function AvatarImage({ className, ...props }) {
  return (
    <AvatarPrimitive.Image
      className={cn("aspect-square size-full object-cover", className)}
      {...props}
    />
  );
}

function AvatarFallback({ className, ...props }) {
  return (
    <AvatarPrimitive.Fallback
      className={cn(
        "bg-gradient-to-br from-amber-100 to-orange-100 flex size-full items-center justify-center rounded-full text-amber-700 font-semibold",
        className
      )}
      {...props}
    />
  );
}

export { Avatar, AvatarImage, AvatarFallback };