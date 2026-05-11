import * as React from "react";
import { cn } from "@/lib/utils";
import { motion, HTMLMotionProps } from "motion/react";

export interface ButtonProps extends HTMLMotionProps<"button"> {
  variant?: "primary" | "secondary" | "outline" | "ghost";
  size?: "sm" | "md" | "lg" | "icon";
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = "primary", size = "md", ...props }, ref) => {
    const variants = {
      primary: "bg-[var(--color-brand-gold)] text-black hover:opacity-90",
      secondary: "bg-[var(--color-brand-gray)] text-white hover:bg-white/10",
      outline: "border border-white/20 text-white hover:bg-[var(--color-brand-gold)] hover:border-[var(--color-brand-gold)] hover:text-black",
      ghost: "text-white hover:text-[var(--color-brand-gold)]",
    };

    const sizes = {
      sm: "h-9 px-4 text-xs",
      md: "py-2 px-5 text-[12px] font-semibold uppercase tracking-[1px]",
      lg: "px-10 py-4 text-sm font-semibold uppercase tracking-[1px]",
      icon: "h-10 w-10 flex items-center justify-center",
    };

    return (
      <motion.button
        ref={ref}
        whileHover={{ scale: 1.02 }}
        whileTap={{ scale: 0.98 }}
        className={cn(
          "inline-flex items-center justify-center rounded-[100px] transition-all focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50",
          variants[variant],
          sizes[size],
          className
        )}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button };
