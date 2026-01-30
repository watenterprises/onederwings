"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

// Generate array of image paths
const galleryImages = [
    "/VER04699.JPG", "/VER04707.JPG", "/VER04710.JPG", "/VER04711.JPG",
    "/VER04715.JPG", "/VER04720.JPG", "/VER04723.JPG", "/VER04728.JPG",
    "/VER04733.JPG", "/VER04740.JPG", "/VER04741.JPG", "/VER04747.JPG",
    "/VER04752.JPG", "/VER04761.JPG", "/VER04779.JPG", "/VER04791.JPG",
    "/VER04794.JPG", "/VER04795.JPG", "/VER04798.JPG", "/VER04801.JPG",
    "/VER04803.JPG", "/VER04804.JPG", "/VER04805.JPG", "/VER04812.JPG",
    "/VER04819.JPG", "/VER04820.JPG", "/VER04821.JPG", "/VER04829.JPG",
    "/VER04830.JPG", "/VER04833.JPG", "/VER04835.JPG", "/VER04843.JPG",
    "/VER04846.JPG", "/VER04849.JPG", "/VER04853.JPG", "/VER04870.JPG",
    "/VER04873.JPG", "/VER04875.JPG", "/VER04882.JPG", "/VER04887.JPG",
    "/VER04892.JPG", "/VER04893.JPG", "/VER04897.JPG", "/VER04902.JPG",
    "/VER04905.JPG"
];

export default function Gallery() {
    return (
        <>
            <SectionWrapper background="skyBlue" className="pt-32 pb-20 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                        Our Memory Book
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        Capturing the precious moments of joy, discovery, and friendship.
                    </p>
                </FadeIn>
            </SectionWrapper>

            <SectionWrapper background="cloud">
                <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 px-4">
                    {galleryImages.map((src, idx) => (
                        <FadeIn key={idx} delay={idx * 0.05} direction="up">
                            <div className="bg-white p-3 pb-8 shadow-xl transform hover:scale-105 hover:rotate-2 transition-all duration-300 relative group cursor-pointer rounded-lg border border-gray-100">
                                {/* Tape Effect logic handled by CSS or SVG if needed, keeping simple for now */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-24 h-6 bg-white/40 backdrop-blur-sm transform -rotate-1 shadow-sm z-10 border border-white/50"></div>

                                <div className="aspect-[4/3] bg-gray-100 overflow-hidden rounded-sm relative">
                                    <Image
                                        src={src}
                                        alt={`Gallery Image ${idx + 1}`}
                                        fill
                                        className="object-cover transition-transform duration-700 group-hover:scale-110"
                                    />
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
