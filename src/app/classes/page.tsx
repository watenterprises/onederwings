"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import { Button } from "@/components/ui/Button";

const classes = [
    {
        title: "Pre-School",
        age: "2 - 3 Years",
        desc: "A gentle introduction to learning through play, music, and social interaction.",
        color: "yellow",
        icon: "🐣"
    },
    {
        title: "LKG",
        age: "3 - 4 Years",
        desc: "Building foundations in language, numbers, and creative expression.",
        color: "blue",
        icon: "🐥"
    },
    {
        title: "UKG",
        age: "4 - 5 Years",
        desc: "Preparing for primary school with reading, writing, and logical thinking.",
        color: "orange",
        icon: "🐤"
    },
    {
        title: "Grade 1 - 6",
        age: "6+ Years",
        desc: "Comprehensive primary education following modern curriculum standards.",
        color: "purple",
        icon: "🦅"
    }
];

export default function Classes() {
    return (
        <>
            <SectionWrapper background="yellow" className="pt-32 pb-20 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-orange mb-6">
                        Our Learning Levels
                    </h1>
                    <p className="text-xl text-gray-700 max-w-2xl mx-auto">
                        From their first steps to their first big flight, we have a program for every stage of your child's journey.
                    </p>
                </FadeIn>
            </SectionWrapper>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {classes.map((cls, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <Card
                                borderColor={cls.color as any}
                                className="h-full flex flex-col items-center text-center p-8 group hover:bg-gradient-to-br hover:from-white hover:to-gray-50"
                            >
                                <div className="text-6xl mb-6 transform group-hover:scale-125 transition-transform duration-500">
                                    {cls.icon}
                                </div>
                                <h3 className={`text-3xl font-display font-bold mb-2 text-brand-${cls.color}`}>
                                    {cls.title}
                                </h3>
                                <span className="inline-block px-4 py-1 rounded-full bg-gray-100 text-gray-600 font-bold text-sm mb-4">
                                    {cls.age}
                                </span>
                                <p className="text-gray-600 mb-8 flex-grow">
                                    {cls.desc}
                                </p>
                                <Button variant="outline" className="w-full">
                                    More Details
                                </Button>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
