"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Pin } from "lucide-react";

const notices = [
    { title: "Admissions Open", date: "Jan 15, 2026", color: "yellow", content: "Admissions for the upcoming academic year are now open! Visit us for a tour." },
    { title: "Annual Sports Day", date: "Feb 10, 2026", color: "blue", content: "Get ready for a day of fun and games. Parents are invited to cheer!" },
    { title: "Art Exhibition", date: "Mar 05, 2026", color: "orange", content: "Come see the masterpieces created by our little Picassos." },
    { title: "Summer Camp", date: "Apr 20, 2026", color: "purple", content: "Registration for our 'Jungle Safari' summer camp begins next week." },
];

export default function Announcements() {
    return (
        <>
            <SectionWrapper background="white" className="pt-32 pb-20 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue mb-6">
                        Notice Board
                    </h1>
                    <p className="text-xl text-gray-600 max-w-2xl mx-auto">
                        Stay updated with the latest news, events, and important dates.
                    </p>
                </FadeIn>
            </SectionWrapper>

            <SectionWrapper background="cloud">
                <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
                    {notices.map((notice, idx) => (
                        <FadeIn key={idx} delay={idx * 0.1}>
                            <div
                                className={`relative bg-${notice.color}-100 p-6 shadow-xl transform hover:scale-105 transition-transform duration-300 min-h-[250px] flex flex-col`}
                                style={{
                                    backgroundColor: notice.color === 'yellow' ? '#FFF9C4' :
                                        notice.color === 'blue' ? '#E1F5FE' :
                                            notice.color === 'orange' ? '#FFE0B2' : '#E1BEE7'
                                }}
                            >
                                {/* Pin */}
                                <div className="absolute -top-4 left-1/2 -translate-x-1/2 text-gray-600 drop-shadow-md">
                                    <Pin className="fill-current text-red-500" size={32} />
                                </div>

                                <div className="mt-4 text-center">
                                    <span className="inline-block px-3 py-1 bg-white/50 rounded-full text-xs font-bold text-gray-600 mb-4 border border-gray-200">
                                        {notice.date}
                                    </span>
                                    <h3 className="text-xl font-display font-bold text-gray-800 mb-3 leading-tight">
                                        {notice.title}
                                    </h3>
                                    <p className="text-gray-700 font-medium handwriting">
                                        {notice.content}
                                    </p>
                                </div>
                            </div>
                        </FadeIn>
                    ))}
                </div>
            </SectionWrapper>
        </>
    );
}
