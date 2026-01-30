"use client";

import React, { useState, useEffect } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { X } from "lucide-react";

export default function Mascot() {
    const [isVisible, setIsVisible] = useState(true);
    const [isHovered, setIsHovered] = useState(false);
    const [hasError, setHasError] = useState(false);
    const [scrollState, setScrollState] = useState<"idle" | "scrolling">("idle");
    const [lastScrollY, setLastScrollY] = useState(0);

    // Scroll detection logic
    useEffect(() => {
        let timeout: NodeJS.Timeout;

        const handleScroll = () => {
            setScrollState("scrolling");
            setLastScrollY(window.scrollY);

            // Reset to idle after 500ms of no scrolling
            clearTimeout(timeout);
            timeout = setTimeout(() => {
                setScrollState("idle");
            }, 1000);
        };

        window.addEventListener("scroll", handleScroll);
        return () => {
            window.removeEventListener("scroll", handleScroll);
            clearTimeout(timeout);
        };
    }, []);

    // Determine GIF based on state
    // 1. Hover takes precedence -> Waving
    // 2. Scrolling -> Bouncing (Walk/Run effect)
    // 3. Idle -> Pointing (Directing attention)
    let currentGif = "/bouncing.gif";
    let shouldFlip = false; // "Pointing right" needs flip to point left (inwards) if on right side

    if (isHovered) {
        currentGif = "/waving.gif";
    } else if (scrollState === "scrolling") {
        currentGif = "/bouncing.gif"; // Moving/Active
    } else {
        currentGif = "/pointing right.gif"; // Idle/Pointing
        shouldFlip = true; // Flip to point left (towards content)
    }

    if (!isVisible || hasError) return null;

    return (
        <div className="fixed bottom-4 right-4 z-50 flex items-end flex-col gap-2">
            {/* Mascot Container */}
            <motion.div
                className="relative w-32 h-32 md:w-40 md:h-40 cursor-pointer group"
                onMouseEnter={() => setIsHovered(true)}
                onMouseLeave={() => setIsHovered(false)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                // Animate Y position slightly when scrolling to simulate "following"
                animate={{
                    y: scrollState === "scrolling" ? [0, -5, 0] : 0,
                    opacity: 1
                }}
                transition={{
                    y: { duration: 0.5, repeat: Infinity },
                    opacity: { duration: 0.5 }
                }}
                initial={{ y: 100, opacity: 0 }}
            >
                <button
                    onClick={(e) => {
                        e.stopPropagation();
                        setIsVisible(false);
                    }}
                    className="absolute -top-2 -right-2 bg-white rounded-full p-1 shadow-md border border-gray-200 opacity-0 group-hover:opacity-100 transition-opacity z-10"
                    aria-label="Close mascot"
                >
                    <X className="w-4 h-4 text-gray-400" />
                </button>

                <div className={`relative w-full h-full transition-transform duration-500 ${shouldFlip ? "scale-x-[-1]" : ""}`}>
                    <Image
                        src={currentGif}
                        alt="School Mascot"
                        fill
                        className="object-contain drop-shadow-lg"
                        unoptimized
                        onError={() => setHasError(true)}
                    />
                </div>
            </motion.div>
        </div>
    );
}
