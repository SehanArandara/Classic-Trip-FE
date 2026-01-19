import React from 'react';
import { Facebook, Instagram, Twitter, Linkedin, Mail, Phone, MapPin } from 'lucide-react';
import { companyInfo, destinations } from '../../data/data';
import logo from '../../assests/logo.png';

const Footer = () => {
    const currentYear = new Date().getFullYear();

    const quickLinks = [
        { name: 'About Us', href: '#about' },
        { name: 'Our Services', href: '#services' },
        { name: 'Travel Packages', href: '#packages' },
        { name: 'Blog', href: '#blog' },
        { name: 'Careers', href: '#careers' },
        { name: 'Privacy Policy', href: '#privacy' },
        { name: 'Terms & Conditions', href: '#terms' },
        { name: 'FAQs', href: '#faqs' }
    ];

    const socialLinks = [
        { icon: Facebook, href: companyInfo.social.facebook, label: 'Facebook' },
        { icon: Instagram, href: companyInfo.social.instagram, label: 'Instagram' },
        { icon: Twitter, href: companyInfo.social.twitter, label: 'Twitter' },
        { icon: Linkedin, href: companyInfo.social.linkedin, label: 'LinkedIn' }
    ];

    return (
        <footer className="bg-gray-50 text-gray-600 border-t border-gray-200">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12">
                    {/* Column 1: Company Info */}
                    <div>
                        <div className="mb-4">
                            <img
                                src={logo}
                                alt={companyInfo.name}
                                className="h-16 w-auto object-contain"
                            />
                        </div>
                        <p className="text-gray-600 mb-6 leading-relaxed">
                            Your trusted travel partner for over 15 years. We create unforgettable
                            journeys and memories that last a lifetime.
                        </p>

                        {/* Social Media */}
                        <div className="flex space-x-4">
                            {socialLinks.map((social) => {
                                const Icon = social.icon;
                                return (
                                    <a
                                        key={social.label}
                                        href={social.href}
                                        target="_blank"
                                        rel="noopener noreferrer"
                                        className="w-10 h-10 bg-white border border-gray-200 shadow-sm rounded-full flex items-center justify-center text-gray-600 hover:bg-primary hover:text-white transition-colors"
                                        aria-label={social.label}
                                    >
                                        <Icon size={18} />
                                    </a>
                                );
                            })}
                        </div>
                    </div>

                    {/* Column 2: Quick Links */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Quick Links</h4>
                        <ul className="space-y-3">
                            {quickLinks.map((link) => (
                                <li key={link.name}>
                                    <a
                                        href={link.href}
                                        className="text-gray-600 hover:text-primary transition-colors"
                                    >
                                        {link.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 3: Destinations */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Popular Destinations</h4>
                        <ul className="space-y-3">
                            {destinations.slice(0, 6).map((dest) => (
                                <li key={dest.id}>
                                    <a
                                        href={dest.link}
                                        className="text-gray-600 hover:text-primary transition-colors"
                                    >
                                        {dest.name}
                                    </a>
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Column 4: Contact Info */}
                    <div>
                        <h4 className="text-lg font-bold text-gray-900 mb-4">Contact Us</h4>
                        <ul className="space-y-4">
                            <li className="flex items-start space-x-3">
                                <MapPin className="text-primary flex-shrink-0 mt-1" size={18} />
                                <span className="text-gray-600">{companyInfo.contact.address}</span>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Phone className="text-primary flex-shrink-0 mt-1" size={18} />
                                <a
                                    href={`tel:${companyInfo.contact.phone}`}
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    {companyInfo.contact.phone}
                                </a>
                            </li>
                            <li className="flex items-start space-x-3">
                                <Mail className="text-primary flex-shrink-0 mt-1" size={18} />
                                <a
                                    href={`mailto:${companyInfo.contact.email}`}
                                    className="text-gray-600 hover:text-primary transition-colors"
                                >
                                    {companyInfo.contact.email}
                                </a>
                            </li>
                        </ul>

                        {/* Awards/Certifications */}
                        <div className="mt-6">
                            <p className="text-sm text-gray-500">Certified & Trusted</p>
                            <div className="flex space-x-2 mt-2">
                                <div className="w-12 h-12 bg-white border border-gray-200 shadow-sm rounded flex items-center justify-center text-xs font-bold text-primary">
                                    ISO
                                </div>
                                <div className="w-12 h-12 bg-white border border-gray-200 shadow-sm rounded flex items-center justify-center text-xs font-bold text-primary">
                                    IATA
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Bottom Bar */}
                <div className="border-t border-gray-200 mt-12 pt-8">
                    <div className="flex flex-col md:flex-row justify-between items-center space-y-4 md:space-y-0">
                        <p className="text-gray-500 text-sm">
                            © {currentYear} {companyInfo.name}. All rights reserved.
                        </p>
                        <div className="flex space-x-6 text-sm">
                            <a href="#privacy" className="text-gray-500 hover:text-primary transition-colors">
                                Privacy Policy
                            </a>
                            <a href="#terms" className="text-gray-500 hover:text-primary transition-colors">
                                Terms of Service
                            </a>
                            <a href="#cookies" className="text-gray-500 hover:text-primary transition-colors">
                                Cookie Policy
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
