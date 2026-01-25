"use client";

import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";
import { motion, HTMLMotionProps } from "framer-motion";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
    "inline-flex items-center justify-center whitespace-nowrap rounded-full text-base font-bold ring-offset-background transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 shadow-md hover:shadow-lg",
    {
        variants: {
            variant: {
                default: "bg-brand-orange text-white hover:bg-brand-orange/90",
                yellow: "bg-brand-yellow text-brand-orange hover:bg-brand-yellow/90",
                blue: "bg-brand-blue text-white hover:bg-brand-blue/90",
                outline:
                    "border-2 border-brand-orange text-brand-orange bg-transparent hover:bg-brand-orange/10",
                ghost: "hover:bg-brand-orange/10 text-brand-orange shadow-none",
            },
            size: {
                default: "h-12 px-6 py-2",
                sm: "h-10 rounded-full px-4 text-sm",
                lg: "h-14 rounded-full px-10 text-lg",
                icon: "h-12 w-12",
            },
        },
        defaultVariants: {
            variant: "default",
            size: "default",
        },
    }
);

export interface ButtonProps
    extends Omit<HTMLMotionProps<"button">, "ref">, // Exclude ref to avoid conflict
    VariantProps<typeof buttonVariants> {
    asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
    ({ className, variant, size, asChild = false, ...props }, ref) => {
        // We are using motion.button for basic animation
        // Note: 'asChild' logic is omitted for simplicity in this specific setup 
        // to prefer direct motion component usage.

        return (
            <motion.button
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className={cn(buttonVariants({ variant, size, className }))}
                ref={ref}
                {...props}
            />
        );
    }
);
Button.displayName = "Button";

export { Button, buttonVariants };
