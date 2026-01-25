"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";
import { Music, Palette, Tent, Bike, Dna, Gamepad2 } from "lucide-react";

const activities = [
    { title: "Music & Dance", icon: <Music size={40} />, color: "purple", desc: "Rhythm, rhyme, and movement." },
    { title: "Art & Craft", icon: <Palette size={40} />, color: "orange", desc: "Painting our world with colors." },
    { title: "Outdoor Play", icon: <Bike size={40} />, color: "green", desc: "Fresh air and fun games." },
    { title: "Science Fun", icon: <Dna size={40} />, color: "blue", desc: "Curious experiments for little minds." },
    { title: "Story Telling", icon: <Tent size={40} />, color: "yellow", desc: "Magical tales and puppet shows." },
    { title: "Games", icon: <Gamepad2 size={40} />, color: "red", desc: "Building teamwork through play." },
];

export default function Activities() {
    return (
        <>
            <SectionWrapper background="orange" className="pt-32 pb-20 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                        Fun Zone & Activities
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto font-medium">
                        Learning isn't just about books. It's about singing, dancing, painting, and exploring!
                    </p>
                </FadeIn>
            </SectionWrapper>

            <SectionWrapper>
                <div className="grid grid-cols-2 md:grid-cols-3 gap-6 md:gap-8">
                    {activities.map((act, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <Card
                                hoverEffect="lift"
                                className="text-center p-6 h-full border-b-8 border-transparent hover:border-brand-orange transition-all"
                            >
                                <div className={`w-16 h-16 mx-auto mb-4 rounded-full bg-${act.color}-100 flex items-center justify-center text-brand-${act.color}`}>
                                    {/* Note: In a real app we'd map color strings to tailored utility classes more strictly */}
                                    <div className="text-brand-orange">{act.icon}</div>
                                </div>
                                <h3 className="text-xl font-bold text-gray-800 mb-2">{act.title}</h3>
                                <p className="text-gray-600 text-sm">{act.desc}</p>
                            </Card>
                        </FadeIn>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
