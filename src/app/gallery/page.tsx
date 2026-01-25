"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";

const memories = [
    { title: "Annual Day", date: "2024" },
    { title: "Sports Day", date: "2024" },
    { title: "Art Exhibition", date: "2023" },
    { title: "Field Trip", date: "2023" },
    { title: "Christmas Party", date: "2023" },
    { title: "Graduation", date: "2023" },
];

export default function Gallery() {
    return (
        <>
            <SectionWrapper background="blue" className="pt-32 pb-20 text-center">
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
                <div className="grid md:grid-cols-3 gap-8 px-4">
                    {memories.map((item, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div className="bg-white p-4 pb-12 shadow-xl transform rotate-1 hover:rotate-0 transition-transform duration-300 relative group cursor-pointer">
                                {/* Tape Effect */}
                                <div className="absolute -top-3 left-1/2 -translate-x-1/2 w-32 h-8 bg-white/30 backdrop-blur-sm transform -rotate-2 border border-white/40 shadow-sm z-10"></div>

                                {/* Image Placeholder */}
                                <div className="aspect-square bg-gray-200 mb-4 overflow-hidden grayscale group-hover:grayscale-0 transition-all duration-500">
                                    <div className="w-full h-full flex items-center justify-center text-gray-400">
                                        Image
                                    </div>
                                </div>

                                <h3 className="font-display font-bold text-2xl text-center text-gray-700 handwriting transform -rotate-1">
                                    {item.title}
                                </h3>
                                <span className="absolute bottom-4 right-4 text-gray-400 font-display">
                                    {item.date}
                                </span>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
