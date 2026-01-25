import Link from "next/link";
import { Facebook, Instagram, Mail, MapPin, Phone, Twitter } from "lucide-react";

const Footer = () => {
    return (
        <footer className="bg-brand-blue/10 pt-16 pb-8 border-t-4 border-brand-blue relative overflow-hidden">
            {/* Decorative background elements could go here */}

            <div className="container mx-auto px-4 md:px-6 z-10 relative">
                <div className="grid grid-cols-1 md:grid-cols-4 gap-8 mb-12">
                    {/* Brand */}
                    <div className="md:col-span-1">
                        <h3 className="font-display font-bold text-2xl text-brand-blue mb-4">
                            ONEDER WINGS
                        </h3>
                        <p className="text-gray-600 mb-6 font-medium">
                            Where little ones learn to fly. A safe, nurturing, and colorful environment for your child's first steps in education.
                        </p>
                        <div className="flex gap-4">
                            <a href="#" className="p-2 bg-white rounded-full text-brand-blue hover:bg-brand-blue hover:text-white transition-colors">
                                <Facebook size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full text-brand-orange hover:bg-brand-orange hover:text-white transition-colors">
                                <Instagram size={20} />
                            </a>
                            <a href="#" className="p-2 bg-white rounded-full text-brand-yellow hover:bg-brand-yellow hover:text-white transition-colors">
                                <Twitter size={20} />
                            </a>
                        </div>
                    </div>

                    {/* Quick Links */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-gray-800">Quick Links</h4>
                        <ul className="space-y-2">
                            <li><Link href="/about" className="text-gray-600 hover:text-brand-orange font-medium">About Us</Link></li>
                            <li><Link href="/classes" className="text-gray-600 hover:text-brand-orange font-medium">Classes</Link></li>
                            <li><Link href="/activities" className="text-gray-600 hover:text-brand-orange font-medium">Activities</Link></li>
                            <li><Link href="/gallery" className="text-gray-600 hover:text-brand-orange font-medium">Gallery</Link></li>
                            <li><Link href="/contact" className="text-gray-600 hover:text-brand-orange font-medium">Contact Us</Link></li>
                        </ul>
                    </div>

                    {/* Contact */}
                    <div>
                        <h4 className="font-bold text-lg mb-4 text-gray-800">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start gap-3 text-gray-600">
                                <MapPin className="text-brand-orange shrink-0" size={20} />
                                <span className="font-medium">123 School Lane, Happy Valley, City, State - 123456</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Phone className="text-brand-green shrink-0" size={20} />
                                <span className="font-medium">+91 98765 43210</span>
                            </li>
                            <li className="flex items-center gap-3 text-gray-600">
                                <Mail className="text-brand-purple shrink-0" size={20} />
                                <span className="font-medium">hello@onederwings.com</span>
                            </li>
                        </ul>
                    </div>

                    {/* Map Placeholder */}
                    <div className="h-48 rounded-2xl overflow-hidden bg-gray-200 border-4 border-white shadow-lg">
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

                <div className="border-t border-brand-blue/20 pt-8 text-center">
                    <p className="text-gray-500 font-medium">
                        &copy; {new Date().getFullYear()} Oneder Wings Pre School. All rights reserved.
                    </p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
