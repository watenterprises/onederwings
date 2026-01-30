"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X, Bird } from "lucide-react";
import { Button } from "@/components/ui/Button";
import { cn } from "@/lib/utils";

const navLinks = [
    { name: "Home", href: "/" },
    { name: "About Us", href: "/about" },
    { name: "Classes", href: "/classes" },
    { name: "Activities", href: "/activities" },
    { name: "Gallery", href: "/gallery" },
    { name: "Contact", href: "/contact" },
];

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const [scrolled, setScrolled] = useState(false);
    const pathname = usePathname();

    useEffect(() => {
        const handleScroll = () => {
            setScrolled(window.scrollY > 20);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Close mobile menu on route change
    useEffect(() => {
        setIsOpen(false);
    }, [pathname]);

    return (
        <nav
            className={cn(
                "fixed top-0 left-0 right-0 z-50 transition-all duration-300 border-b-4 border-transparent",
                scrolled
                    ? "bg-white/90 backdrop-blur-md py-2 border-brand-yellow shadow-sm"
                    : "bg-transparent py-4"
            )}
        >
            <div className="container mx-auto px-4 md:px-6 flex items-center justify-between">
                {/* Logo */}
                <Link href="/" className="flex items-center gap-2 group">
                    <div className="relative w-12 h-12 group-hover:rotate-12 transition-transform duration-300">
                        <Image
                            src="/logo.png"
                            alt="OneDer Wings Logo"
                            fill
                            className="object-contain"
                        />
                    </div>
                    <div className="leading-tight">
                        <div className="font-bold text-xl md:text-2xl font-display tracking-tight flex items-center">
                            <span className="text-[#FFB82E]">ONEder</span>
                            <span className="text-[#F06640] ml-1">Wings</span>
                        </div>
                        <span className="block text-xs md:text-sm font-bold text-[#305672] tracking-[0.2em]">
                            PRE SCHOOL
                        </span>
                    </div>
                </Link>

                {/* Desktop Nav */}
                <div className="hidden md:flex items-center gap-6">
                    {navLinks.map((link) => (
                        <Link
                            key={link.name}
                            href={link.href}
                            className={cn(
                                "font-bold text-base transition-colors hover:text-brand-orange relative",
                                pathname === link.href ? "text-brand-orange" : "text-gray-600"
                            )}
                        >
                            {link.name}
                            {pathname === link.href && (
                                <motion.div
                                    layoutId="underline"
                                    className="absolute left-0 right-0 -bottom-1 h-1 bg-brand-yellow rounded-full"
                                />
                            )}
                        </Link>
                    ))}
                    <Link href="/contact" className="ml-4">
                        <Button variant="default" size="sm">
                            Admissions Open
                        </Button>
                    </Link>
                </div>

                {/* Mobile Toggle */}
                <button
                    className="md:hidden p-2 text-gray-600"
                    onClick={() => setIsOpen(!isOpen)}
                >
                    {isOpen ? <X className="w-8 h-8" /> : <Menu className="w-8 h-8" />}
                </button>
            </div>

            {/* Mobile Menu */}
            <AnimatePresence>
                {isOpen && (
                    <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        className="md:hidden bg-white border-b-4 border-brand-yellow overflow-hidden"
                    >
                        <div className="container mx-auto px-4 py-8 flex flex-col gap-4">
                            {navLinks.map((link) => (
                                <Link
                                    key={link.name}
                                    href={link.href}
                                    className={cn(
                                        "text-xl font-bold py-2 border-b border-gray-100",
                                        pathname === link.href ? "text-brand-orange" : "text-gray-600"
                                    )}
                                >
                                    {link.name}
                                </Link>
                            ))}
                            <Link href="/contact" className="w-full mt-4">
                                <Button className="w-full">Admissions Open</Button>
                            </Link>
                        </div>
                    </motion.div>
                )}
            </AnimatePresence>
        </nav>
    );
};

export default Navbar;
