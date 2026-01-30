import { cn } from "@/lib/utils";
import React from "react";

interface SectionWrapperProps extends React.HTMLAttributes<HTMLElement> {
    children: React.ReactNode;
    className?: string; // Additional classes
    id?: string;
    background?: "white" | "yellow" | "blue" | "orange" | "purple" | "cloud" | "skyBlue" | "deepOrange";
}

const SectionWrapper: React.FC<SectionWrapperProps> = ({
    children,
    className,
    id,
    background = "white",
    ...props
}) => {
    const bgStyles = {
        white: "bg-white",
        yellow: "bg-brand-yellow/10",
        blue: "bg-brand-blue/10",
        orange: "bg-brand-orange/10",
        purple: "bg-brand-purple/10",
        cloud: "bg-cloud-pattern bg-cover bg-no-repeat",
        skyBlue: "bg-brand-blue text-white",
        deepOrange: "bg-brand-orange text-white",
    };

    return (
        <section
            id={id}
            className={cn(
                "py-16 md:py-24 relative overflow-hidden",
                bgStyles[background],
                className
            )}
            {...props}
        >
            <div className="container mx-auto px-4 md:px-6 z-10 relative">
                {children}
            </div>
        </section>
    );
};

export default SectionWrapper;
