"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";
import { motion } from "framer-motion";
import { Heart, Sun, Star, BookOpen, Users, Clock, ShieldCheck, Smile, MapPin, Play, Quote } from "lucide-react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button";

export default function About() {
    return (
        <>
            {/* Hero Section */}
            <SectionWrapper background="cloud" className="pt-10 pb-20 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-brand-blue mb-6">
                        Our Story
                    </h1>
                    <p className="text-xl text-gray-600 max-w-3xl mx-auto">
                        At ONEder Wings, we believe that every child is unique, special, and full of potential. Our school is a safe, joyful, and nurturing place where children learn, explore, and grow together like one big family.
                    </p>
                </FadeIn>
            </SectionWrapper>

            {/* Vision & Mission */}
            <SectionWrapper background="white">
                <div className="grid md:grid-cols-2 gap-12">
                    <FadeIn direction="right">
                        <div className="bg-brand-blue/5 p-8 rounded-[2rem] border-2 border-brand-blue/20 h-full">
                            <div className="w-16 h-16 bg-brand-blue text-white rounded-full flex items-center justify-center mb-6 text-2xl">
                                <Sun />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-brand-blue mb-4">Our Vision</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To create a joyful, safe, and nurturing environment where every child discovers their potential and takes confident steps toward a bright future.
                            </p>
                        </div>
                    </FadeIn>
                    <FadeIn direction="left">
                        <div className="bg-brand-orange/5 p-8 rounded-[2rem] border-2 border-brand-orange/20 h-full">
                            <div className="w-16 h-16 bg-brand-orange text-white rounded-full flex items-center justify-center mb-6 text-2xl">
                                <Heart />
                            </div>
                            <h2 className="text-3xl font-display font-bold text-brand-orange mb-4">Our Mission</h2>
                            <p className="text-gray-700 text-lg leading-relaxed">
                                To provide a safe, loving, and engaging learning environment where every child grows with confidence, curiosity, and joy.
                            </p>
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>

            {/* Leadership Messages */}
            <SectionWrapper background="yellow">
                <div className="text-center mb-16">
                    <FadeIn>
                        <h2 className="text-4xl font-display font-bold text-gray-800">Meet Our Family</h2>
                        <p className="text-lg text-gray-600 mt-4">The hearts and minds behind OneDer Wings</p>
                    </FadeIn>
                </div>

                <div className="flex flex-col gap-24">
                    {/* Founder */}
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="w-full md:w-1/3">
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl -rotate-3 border-4 border-white">
                                    <Image
                                        src="/founder-image.JPG"
                                        alt="Nayana Kumar P - Founder"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <Quote className="w-12 h-12 text-brand-yellow mb-4 mx-auto md:mx-0 opacity-50" />
                                <h3 className="text-3xl font-display font-bold text-brand-blue mb-2">Nayana Kumar P</h3>
                                <p className="text-brand-orange font-bold uppercase tracking-wider mb-6">Founder</p>
                                <div className="prose prose-lg text-gray-600">
                                    <p>
                                        "At ONEder Wings, we believe that every child is unique... Our aim is to lay a strong foundation for lifelong learning while ensuring that children enjoy every step of their early years."
                                    </p>
                                    <p>
                                        "I look forward to walking this beautiful journey with you and helping every child find their wings and fly high."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Co-Founder */}
                    <FadeIn>
                        <div className="flex flex-col md:flex-row-reverse items-center gap-10">
                            <div className="w-full md:w-1/3">
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl rotate-3 border-4 border-white">
                                    <Image
                                        src="/cofounder-image.JPG"
                                        alt="Vinay B - Co-Founder"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 text-center md:text-right">
                                <Quote className="w-12 h-12 text-brand-blue mb-4 mx-auto md:ml-auto opacity-50" />
                                <h3 className="text-3xl font-display font-bold text-brand-blue mb-2">Vinay B</h3>
                                <p className="text-brand-orange font-bold uppercase tracking-wider mb-6">Co-Founder</p>
                                <div className="prose prose-lg text-gray-600">
                                    <p>
                                        "Our focus is to create a safe and positive environment where children feel confident to explore, learn, and grow. We are committed to nurturing young minds with care, values, and quality early education."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Brand Ambassador */}
                    <FadeIn>
                        <div className="flex flex-col md:flex-row items-center gap-10">
                            <div className="w-full md:w-1/3">
                                <div className="relative aspect-[3/4] rounded-3xl overflow-hidden shadow-xl -rotate-2 border-4 border-white">
                                    <Image
                                        src="/ambassador-image.jpg"
                                        alt="Sonal Monteiro - Brand Ambassador"
                                        fill
                                        className="object-cover"
                                    />
                                </div>
                            </div>
                            <div className="w-full md:w-2/3 text-center md:text-left">
                                <Quote className="w-12 h-12 text-pink-400 mb-4 mx-auto md:mx-0 opacity-50" />
                                <h3 className="text-3xl font-display font-bold text-brand-blue mb-2">Sonal Monteiro</h3>
                                <p className="text-brand-orange font-bold uppercase tracking-wider mb-6">Brand Ambassador</p>
                                <div className="prose prose-lg text-gray-600">
                                    <p>
                                        "Being connected with ONEder Wings fills me with a deep sense of comfort and joy... The environment feels warm and welcoming, filled with gentle encouragement, creativity, and kindness."
                                    </p>
                                    <p>
                                        "May this beautiful space remain a place where children grow with confidence, curiosity, and happiness."
                                    </p>
                                </div>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>

            {/* Core Values */}
            <SectionWrapper background="skyBlue">
                <div className="text-center max-w-4xl mx-auto">
                    <FadeIn>
                        <h2 className="text-4xl font-display font-bold text-white mb-12">
                            Our Core Values
                        </h2>
                        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
                            {[
                                { title: 'Safety & Care', icon: <ShieldCheck className="w-8 h-8" />, desc: 'Secure, loving, and supportive environment.' },
                                { title: 'Creativity', icon: <Star className="w-8 h-8" />, desc: 'Freedom to dream, express, and explore.' },
                                { title: 'Growth', icon: <Sun className="w-8 h-8" />, desc: 'Holistic emotional, social, and physical growth.' },
                                { title: 'Joyful Learning', icon: <Smile className="w-8 h-8" />, desc: 'Fun, engaging, and filled with curiosity.' },
                                { title: 'Respect', icon: <Heart className="w-8 h-8" />, desc: 'Nurturing empathy and kindness.' },
                                { title: 'Partnership', icon: <Users className="w-8 h-8" />, desc: 'Strong collaboration with families.' },
                            ].map((val, idx) => (
                                <div key={idx} className="bg-white p-6 rounded-3xl shadow-lg text-center hover:transform hover:scale-105 transition-all duration-300">
                                    <div className="w-16 h-16 mx-auto bg-brand-blue/10 text-brand-blue rounded-full flex items-center justify-center mb-4">
                                        {val.icon}
                                    </div>
                                    <h3 className="text-xl font-bold text-brand-blue mb-2">{val.title}</h3>
                                    <p className="text-gray-600 text-sm">{val.desc}</p>
                                </div>
                            ))}
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>

            {/* Policies & Info */}
            <SectionWrapper background="white">
                <div className="grid md:grid-cols-2 gap-12">

                    {/* Timings */}
                    <FadeIn>
                        <div className="bg-lime-50 p-8 rounded-[2rem] border-2 border-lime-200">
                            <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <Clock className="text-lime-600" /> School Timings
                            </h3>
                            <div className="space-y-6">
                                <div>
                                    <h4 className="font-bold text-lg text-lime-800 mb-2">ONEder Daycare</h4>
                                    <ul className="space-y-1 text-gray-700">
                                        <li className="flex justify-between"><span>Half Day:</span> <span className="font-semibold">9:00 AM – 12:30 PM</span></li>
                                        <li className="flex justify-between"><span>Full Day:</span> <span className="font-semibold">9:00 AM – 6:30 PM</span></li>
                                        <li className="flex justify-between"><span>Extended:</span> <span className="font-semibold">6:30 PM – 8:30 PM</span></li>
                                    </ul>
                                </div>
                                <div className="bg-white/50 p-4 rounded-xl">
                                    <h4 className="font-bold text-lg text-lime-800 mb-2">ONEder Playhome</h4>
                                    <p className="text-gray-700 font-semibold">9:00 AM – 11:00 AM</p>
                                </div>
                                <div>
                                    <h4 className="font-bold text-lg text-lime-800 mb-2">ONEder Tots</h4>
                                    <ul className="space-y-1 text-gray-700">
                                        <li className="flex justify-between"><span>Level 1:</span> <span className="font-semibold">9:00 AM – 11:40 AM</span></li>
                                        <li className="flex justify-between"><span>Level 2:</span> <span className="font-semibold">9:00 AM – 11:50 AM</span></li>
                                        <li className="flex justify-between"><span>Level 3:</span> <span className="font-semibold">9:00 AM – 12:00 PM</span></li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Code of Conduct */}
                    <FadeIn delay={0.2}>
                        <div className="bg-yellow-50 p-8 rounded-[2rem] border-2 border-yellow-200 h-full">
                            <h3 className="text-2xl font-display font-bold text-gray-800 mb-6 flex items-center gap-3">
                                <Star className="text-yellow-500" /> Student Code
                            </h3>
                            <ul className="space-y-3 text-gray-700">
                                {["Be respectful and listen to teachers", "Be kind and include others", "Keep hands and feet to ourselves", "Use polite words like 'please' & 'thank you'", "Help clean up", "Be safe, honest, and friendly"].map((item, i) => (
                                    <li key={i} className="flex items-start gap-3">
                                        <span className="w-2 h-2 rounded-full bg-yellow-400 mt-2 flex-shrink-0" />
                                        {item}
                                    </li>
                                ))}
                            </ul>
                            <div className="mt-8 p-4 bg-white/60 rounded-xl">
                                <h4 className="font-bold text-brand-orange mb-2">School Prayer</h4>
                                <p className="italic text-gray-600 text-sm">
                                    "Dear God, thank you for this new day. Please bless our school and help us play, learn, and grow together..."
                                </p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>

            {/* Branches & Virtual Tour */}
            <SectionWrapper background="cloud">
                <div className="text-center mb-12">
                    <h2 className="text-4xl font-display font-bold text-brand-blue">Our Campus</h2>
                </div>

                <div className="space-y-16">
                    {/* Branches */}
                    <div className="grid md:grid-cols-2 gap-8">
                        {['Branch One', 'Branch Two'].map((branch, i) => (
                            <FadeIn key={i}>
                                <div className="bg-white p-2 rounded-3xl shadow-lg hover:shadow-xl transition-shadow">
                                    <div className="aspect-video bg-gray-100 rounded-2xl flex items-center justify-center mb-4 relative overflow-hidden group">
                                        <MapPin className="w-12 h-12 text-gray-300 group-hover:text-brand-orange transition-colors" />
                                        <div className="absolute inset-0 bg-black/5 group-hover:bg-transparent transition-colors" />
                                    </div>
                                    <div className="p-4">
                                        <h3 className="text-xl font-bold text-brand-blue mb-2">{branch}</h3>
                                        <p className="text-gray-500">Address details coming soon...</p>
                                        <Link href="/contact" className="w-full">
                                            <Button variant="outline" size="sm" className="mt-4 w-full">Locate on Map</Button>
                                        </Link>
                                    </div>
                                </div>
                            </FadeIn>
                        ))}
                    </div>

                    {/* Virtual Tour Placeholder */}
                    <FadeIn>
                        <div className="bg-brand-blue/90 text-white rounded-[3rem] p-8 md:p-12 text-center relative overflow-hidden">
                            <div className="relative z-10">
                                <h2 className="text-3xl font-display font-bold mb-6">Take a Virtual Tour</h2>
                                <p className="text-xl text-blue-100 mb-8 max-w-2xl mx-auto">
                                    Experience the magic of OneDer Wings from the comfort of your home. Watch our campus tour video below.
                                </p>

                                {/* Video Placeholder */}
                                <div className="w-full max-w-4xl mx-auto aspect-video bg-black/40 rounded-2xl flex items-center justify-center border-4 border-white/20 backdrop-blur-sm cursor-pointer hover:bg-black/50 transition-colors group">
                                    <div className="w-20 h-20 bg-white/20 rounded-full flex items-center justify-center group-hover:scale-110 transition-transform">
                                        <div className="w-16 h-16 bg-brand-orange rounded-full flex items-center justify-center pl-1 shadow-lg">
                                            <Play className="fill-white text-white w-8 h-8" />
                                        </div>
                                    </div>
                                </div>
                                <p className="mt-4 text-sm text-blue-200">Video coming soon</p>
                            </div>
                        </div>
                    </FadeIn>
                </div>
            </SectionWrapper>
        </>
    );
}
