import { cn } from "@/lib/utils";
import { HTMLAttributes } from "react";

export function Container({ className, ...props }: HTMLAttributes<HTMLDivElement>) {
  return (
    <div
      className={cn("mx-auto w-full max-w-container px-5 sm:px-8 lg:px-10", className)}
      {...props}
    />
  );
}
