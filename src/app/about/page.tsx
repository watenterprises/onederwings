"use client";

import React from "react";
import Image from "next/image";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export default function About() {
    return (
        <>
            <SectionWrapper background="cloud" className="pt-32 pb-20 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue mb-6">
                        Our Story
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Once upon a time, in a bright little corner of the world, we built a nest for little dreamers...
                    </p>
                </FadeIn>
            </SectionWrapper>

            <SectionWrapper background="white">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    <FadeIn direction="right">
                        <div className="relative">
                            <div className="absolute inset-0 bg-brand-yellow rounded-[3rem] rotate-3 transform translate-x-4 translate-y-4 -z-10" />
                            <div className="bg-white p-4 rounded-[3rem] border-4 border-dashed border-brand-orange overflow-hidden">
                                <div className="aspect-[4/3] bg-gray-100 flex items-center justify-center rounded-[2.5rem]">
                                    <span className="text-gray-400 font-bold">Kids Playing Image</span>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    <FadeIn direction="left">
                        <h2 className="text-4xl font-display font-bold text-brand-orange mb-6">
                            Our Little Nest
                        </h2>
                        <div className="prose prose-lg text-gray-600">
                            <p className="mb-4">
                                Oneder Wings Pre School started with a simple wish: to create a place where children are free to fly. We believe that every child is unique, like a different colored feather in a magnificent bird.
                            </p>
                            <p className="mb-6">
                                Our classrooms aren't just rooms; they are imagination stations. Our playground isn't just grass; it's a jungle, a castle, and a spaceship.
                            </p>
                            <Button variant="yellow" size="lg">
                                Meet Our Teachers
                            </Button>
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>

            <SectionWrapper background="blue">
                <div className="text-center max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-display font-bold text-white mb-8">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                            {['Kindness', 'Curiosity', 'Creativity', 'Confidence'].map((val, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg transform hover:scale-110 transition-transform duration-300">
                                    <h3 className="text-xl font-bold text-brand-blue">{val}</h3>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>
        </>
    );
}
