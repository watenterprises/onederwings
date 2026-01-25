"use client";

import React from "react";
import SectionWrapper from "@/components/ui/SectionWrapper";
import FadeIn from "@/components/ui/FadeIn";
import { Button } from "@/components/ui/Button"; // Update path if needed, Button is in ui
import Card from "@/components/ui/Card";
import { Mail, Phone, MapPin } from "lucide-react";

export default function Contact() {
    return (
        <>
            <SectionWrapper background="purple" className="pt-32 pb-20 text-center">
                <FadeIn>
                    <h1 className="text-5xl md:text-6xl font-display font-bold text-white mb-6">
                        Talk to Us
                    </h1>
                    <p className="text-xl text-white/90 max-w-2xl mx-auto">
                        We'd love to hear from you! Admissions are open for the new academic year.
                    </p>
                </FadeIn>
            </SectionWrapper>

            <SectionWrapper>
                <div className="grid md:grid-cols-2 gap-12">
                    {/* Contact Info */}
                    <FadeIn direction="right">
                        <div className="space-y-8">
                            <h2 className="text-3xl font-display font-bold text-brand-blue mb-6">
                                Get in Touch
                            </h2>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-orange/10 flex items-center justify-center text-brand-orange">
                                    <Phone size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Call Us</h3>
                                    <p className="text-gray-600">+91 98765 43210</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-blue/10 flex items-center justify-center text-brand-blue">
                                    <Mail size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Email Us</h3>
                                    <p className="text-gray-600">hello@onederwings.com</p>
                                </div>
                            </div>

                            <div className="flex items-center gap-4">
                                <div className="w-12 h-12 rounded-full bg-brand-yellow/10 flex items-center justify-center text-brand-yellow">
                                    <MapPin size={24} />
                                </div>
                                <div>
                                    <h3 className="font-bold text-gray-800">Visit Us</h3>
                                    <p className="text-gray-600">123 School Lane, Happy Valley</p>
                                </div>
                            </div>

                            {/* Map */}
                            <div className="h-64 bg-gray-200 rounded-3xl mt-8 overflow-hidden border-4 border-gray-100">
                                <iframe
                                    src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3502.899564887374!2d77.3060!3d28.6010!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2zMjjCsDM2JzAzLjYiTiA3N8KwMTgnMjEuNiJF!5e0!3m2!1sen!2sin!4v1631234567890!5m2!1sen!2sin"
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </FadeIn>

                    {/* Form */}
                    <FadeIn direction="left">
                        <Card className="p-8 border-t-8 border-brand-purple">
                            <h2 className="text-2xl font-bold text-gray-800 mb-6">Send us a Message</h2>
                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Parent's Name</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all" placeholder="John Doe" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Child's Name & Age</label>
                                    <input type="text" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all" placeholder="Jane, 4 years" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Phone Number</label>
                                    <input type="tel" className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all" placeholder="+91 90000 00000" />
                                </div>
                                <div>
                                    <label className="block text-sm font-bold text-gray-700 mb-1">Message</label>
                                    <textarea rows={4} className="w-full px-4 py-3 rounded-xl bg-gray-50 border border-gray-200 focus:outline-none focus:ring-2 focus:ring-brand-purple/50 transition-all" placeholder="How can we help you?"></textarea>
                                </div>
                                <Button className="w-full bg-brand-purple hover:bg-brand-purple/90 text-white font-bold py-4 rounded-xl shadow-lg shadow-brand-purple/20">
                                    Send Message
                                </Button>
                            </form>
                        </Card>
                    </FadeIn>
                </div>
            </SectionWrapper>
        </>
    );
}
