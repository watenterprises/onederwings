"use client";

import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { ArrowRight, Star, Heart, Sun, Clock, BookOpen, Quote, Smile, Users, Award } from "lucide-react";
import { Button } from "@/components/ui/Button";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import Card from "@/components/ui/Card";

export default function Home() {
  return (
    <>
      {/* Hero Section */}
      <section className="relative min-h-[90vh] flex items-center justify-center overflow-hidden bg-gradient-to-b from-brand-blue/20 to-white">
        {/* Background Elements */}
        <div className="absolute top-10 left-10 text-brand-yellow/60 animate-float delay-100">
          <Sun size={80} />
        </div>
        <div className="absolute top-20 right-20 animate-float delay-700">
          {/* SVG Cloud Placeholder */}
          <motion.div
            animate={{ x: [0, 20, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
            className="text-white opacity-80"
          >
            <svg width="100" height="60" viewBox="0 0 100 60" fill="currentColor">
              <path d="M10,40 Q25,20 50,40 T90,40" stroke="white" strokeWidth="20" strokeLinecap="round" />
            </svg>
          </motion.div>
        </div>

        <div className="container mx-auto px-4 grid md:grid-cols-2 gap-12 items-center relative z-10">
          {/* Text Content */}
          <div className="text-center md:text-left">
            <FadeIn direction="up">
              <span className="inline-block py-1 px-3 rounded-full bg-brand-yellow/20 text-brand-orange font-bold text-sm mb-4">
                Welcome to OneDer Wings
              </span>
              <h1 className="text-5xl md:text-7xl font-display font-bold text-brand-blue mb-6 leading-tight">
                Where Little Ones <br />
                <span className="text-brand-orange relative">
                  Learn To Fly
                  <svg className="absolute w-full h-3 -bottom-1 left-0 text-brand-yellow" viewBox="0 0 100 10" preserveAspectRatio="none">
                    <path d="M0,5 Q50,15 100,5" stroke="currentColor" strokeWidth="4" fill="none" />
                  </svg>
                </span>
              </h1>
              <p className="text-xl text-gray-600 mb-8 max-w-lg mx-auto md:mx-0">
                A magical place where play leads to learning, and every day is a new adventure for your child.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
                <Button size="lg" className="shadow-brand-orange/30 shadow-lg">
                  Start the Journey <ArrowRight className="ml-2 h-5 w-5" />
                </Button>
                <Button variant="outline" size="lg">
                  Book a Campus Tour
                </Button>
              </div>
            </FadeIn>
          </div>

          {/* Hero Image / Illustration */}
          <div className="relative">
            <motion.div
              animate={{ y: [0, -20, 0] }}
              transition={{ duration: 4, repeat: Infinity, ease: "easeInOut" }}
              className="relative z-10"
            >
              <div className="relative aspect-square md:aspect-[4/3] rounded-[3rem] overflow-hidden border-8 border-white shadow-2xl rotate-3 bg-brand-yellow/10">
                <img
                  src="/school image.jpeg"
                  alt="OneDer Wings School Building"
                  className="w-full h-full object-cover"
                />
              </div>
            </motion.div>

            {/* Decorative blobs */}
            <div className="absolute -top-10 -right-10 w-32 h-32 bg-brand-yellow rounded-full blur-3xl opacity-50" />
            <div className="absolute -bottom-10 -left-10 w-40 h-40 bg-brand-blue rounded-full blur-3xl opacity-50" />
          </div>
        </div>
      </section>

      {/* Highlights Section */}
      <SectionWrapper>
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
              Why Parents Trust Us
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We provide a safe, nurturing, and creative environment where every child feels loved and encouraged.
            </p>
          </FadeIn>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {[
            {
              icon: <Heart className="w-10 h-10 text-brand-orange" />,
              title: "Safe & Nurturing",
              desc: "A secure environment with CCTV surveillance and caring staff.",
              color: "orange"
            },
            {
              icon: <Star className="w-10 h-10 text-brand-yellow" />,
              title: "Creative Learning",
              desc: "Play-based curriculum designed to spark curiosity and imagination.",
              color: "yellow"
            },
            {
              icon: <Sun className="w-10 h-10 text-brand-blue" />,
              title: "Holistic Growth",
              desc: "Focusing on social, emotional, and physical development.",
              color: "blue"
            }
          ].map((item, index) => (
            <FadeIn key={index} delay={index * 0.2}>
              <Card
                borderColor={item.color as any}
                hoverEffect="tilt"
                className="h-full flex flex-col items-center text-center p-8"
              >
                <div className={`w-20 h-20 rounded-full flex items-center justify-center mb-6 bg-brand-${item.color}/10`}>
                  {item.icon}
                </div>
                <h3 className="text-2xl font-bold mb-3 text-gray-800">{item.title}</h3>
                <p className="text-gray-600">{item.desc}</p>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Stats Section */}
      <SectionWrapper background="blue" className="text-white">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center">
          {[
            { number: "10+", label: "Years of Excellence", icon: <Award className="w-8 h-8 mb-2 mx-auto" /> },
            { number: "500+", label: "Happy Students", icon: <Users className="w-8 h-8 mb-2 mx-auto" /> },
            { number: "50+", label: "Expert Teachers", icon: <BookOpen className="w-8 h-8 mb-2 mx-auto" /> },
            { number: "100%", label: "Safe Environment", icon: <Heart className="w-8 h-8 mb-2 mx-auto" /> },
          ].map((stat, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <div className="p-4">
                {stat.icon}
                <div className="text-4xl md:text-5xl font-display font-bold mb-2">{stat.number}</div>
                <div className="text-lg opacity-90">{stat.label}</div>
              </div>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* A Day at School Timeline */}
      <SectionWrapper background="cloud">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
              A Day at OneDer Wings
            </h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              From morning sunshine to goodbye hugs, every moment is designed for joy.
            </p>
          </FadeIn>
        </div>

        <div className="relative">
          {/* Connecting Line (Desktop) */}
          <div className="hidden md:block absolute top-1/2 left-0 right-0 h-2 bg-brand-yellow/30 -translate-y-1/2 rounded-full z-0"></div>

          <div className="grid grid-cols-1 md:grid-cols-5 gap-8 relative z-10">
            {[
              { time: "9:00 AM", title: "Warm Welcome", icon: <Sun size={24} />, color: "yellow" },
              { time: "10:00 AM", title: "Circle Time", icon: <Users size={24} />, color: "blue" },
              { time: "11:00 AM", title: "Creative Play", icon: <Star size={24} />, color: "orange" },
              { time: "12:30 PM", title: "Yummy Lunch", icon: <Smile size={24} />, color: "green" },
              { time: "2:00 PM", title: "Goodbye", icon: <Heart size={24} />, color: "purple" },
            ].map((slot, idx) => (
              <FadeIn key={idx} delay={idx * 0.15} direction="up">
                <div className="flex flex-col items-center bg-white p-6 rounded-3xl shadow-lg border-2 border-transparent hover:border-brand-orange transition-colors">
                  <div className={`w-12 h-12 rounded-full bg-brand-${slot.color}/20 flex items-center justify-center text-brand-${slot.color} mb-4`}>
                    {slot.icon}
                  </div>
                  <div className="font-bold text-brand-blue mb-1">{slot.time}</div>
                  <h3 className="font-display font-bold text-gray-800">{slot.title}</h3>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </SectionWrapper>

      {/* Testimonials */}
      <SectionWrapper background="white">
        <div className="text-center mb-16">
          <FadeIn>
            <h2 className="text-4xl font-display font-bold text-gray-800 mb-4">
              Happy Parents Say
            </h2>
          </FadeIn>
        </div>
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {[
            { quote: "My son loves going to school every day! The teachers are so caring.", parent: "Sarah M.", child: "Mother of Ryan (LKG)" },
            { quote: "The best decision we made for our daughter. Her confidence has soared!", parent: "James P.", child: "Father of Mia (UKG)" },
            { quote: "A wonderful environment. It truly feels like a second home.", parent: "Anjali K.", child: "Mother of Dev (Grade 1)" },
          ].map((t, idx) => (
            <FadeIn key={idx} delay={idx * 0.1}>
              <Card className="p-8 relative">
                <Quote className="absolute top-6 left-6 text-brand-yellow/20 w-12 h-12" />
                <p className="text-gray-600 text-lg mb-6 relative z-10 italic">"{t.quote}"</p>
                <div>
                  <div className="font-bold text-brand-blue">{t.parent}</div>
                  <div className="text-sm text-gray-400">{t.child}</div>
                </div>
              </Card>
            </FadeIn>
          ))}
        </div>
      </SectionWrapper>

      {/* Big CTA */}
      <SectionWrapper background="yellow" className="text-center py-24">
        <FadeIn>
          <div className="bg-white/50 backdrop-blur-sm rounded-[3rem] p-12 inline-block shadow-xl border-4 border-white">
            <h2 className="text-4xl md:text-5xl font-display font-bold text-brand-orange mb-6">
              Ready to Join the Family?
            </h2>
            <p className="text-xl text-gray-700 mb-8 max-w-xl mx-auto">
              Admissions are open for the upcoming academic year. Come visit us and see the magic for yourself!
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <Button size="lg" className="bg-brand-blue hover:bg-brand-blue/90 text-white shadow-lg">
                Book a Visit
              </Button>
              <Button size="lg" variant="outline" className="bg-white border-brand-blue text-brand-blue hover:bg-brand-blue/10">
                Contact Us
              </Button>
            </div>
          </div>
        </FadeIn>
      </SectionWrapper>
    </>
  );
}
