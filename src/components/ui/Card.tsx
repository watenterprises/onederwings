"use client";

import React from "react";
import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface CardProps {
    children: React.ReactNode;
    className?: string;
    hoverEffect?: "lift" | "tilt" | "wiggle" | "none";
    borderColor?: "yellow" | "blue" | "orange" | "purple" | "none";
}

const Card: React.FC<CardProps> = ({
    children,
    className,
    hoverEffect = "lift",
    borderColor = "none",
}) => {
    const borderStyles = {
        yellow: "border-4 border-brand-yellow",
        blue: "border-4 border-brand-blue",
        orange: "border-4 border-brand-orange",
        purple: "border-4 border-brand-purple",
        none: "",
    };

    const animations = {
        lift: { y: -10 },
        tilt: { rotate: 2, scale: 1.02 },
        wiggle: { rotate: [-1, 1, -1, 1, 0], transition: { duration: 0.4 } },
        none: {},
    };

    return (
        <motion.div
            whileHover={animations[hoverEffect] as any}
            className={cn(
                "bg-white rounded-3xl p-6 shadow-xl relative overflow-hidden",
                borderStyles[borderColor],
                className
            )}
        >
            {children}
        </motion.div>
    );
};

export default Card;
