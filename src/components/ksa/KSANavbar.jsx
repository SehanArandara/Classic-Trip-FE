import React, { useState, useEffect } from 'react';
import { Menu, X, Home, Globe, MapPin, Briefcase, Mail } from 'lucide-react';
import { Link } from 'react-router-dom';

const KSANavbar = () => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [activeLink, setActiveLink] = useState('');

    const navItems = [
        { name: "Home", href: "/ksa", icon: Home, isRoute: true },
        { name: "Global Holidays", href: "/ksa/globalPackages", icon: Globe, isRoute: true },
        { name: "Visit Saudi", href: "/ksa/visit-saudi", icon: MapPin, isRoute: true },
        { name: "Services", href: "#services", icon: Briefcase, isRoute: false },
        { name: "Contact Us", href: "#contact", icon: Mail, isRoute: false }
    ];

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 20);

            // Update active link based on scroll position
            const sections = navItems.filter(item => !item.isRoute).map(link => link.href.replace('#', ''));
            for (const section of sections) {
                const element = document.getElementById(section);
                if (element) {
                    const rect = element.getBoundingClientRect();
                    if (rect.top <= 150 && rect.bottom >= 150) {
                        setActiveLink(`#${section}`);
                        break;
                    }
                }
            }
        };

        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    const handleLinkClick = (item) => {
        setIsMobileMenuOpen(false);
        if (!item.isRoute && item.href.startsWith('#')) {
            const element = document.querySelector(item.href);
            if (element) {
                element.scrollIntoView({ behavior: 'smooth' });
            }
        }
    };

    return (
        <nav
            className={`sticky top-0 z-40 transition-all duration-300 ${isScrolled
                ? 'bg-white shadow-lg border-b-2 border-primary'
                : 'bg-gradient-to-r from-white to-gray-50'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-2 w-full justify-center">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = item.isRoute
                                ? window.location.pathname === item.href
                                : activeLink === item.href;

                            return item.isRoute ? (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isActive
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                >
                                    <Icon size={20} className="transition-transform group-hover:scale-110" />
                                    <span>{item.name}</span>
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item);
                                    }}
                                    className={`group flex items-center space-x-2 px-6 py-3 rounded-xl font-semibold transition-all duration-300 ${isActive
                                        ? 'bg-primary text-white shadow-lg scale-105'
                                        : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                >
                                    <Icon size={20} className="transition-transform group-hover:scale-110" />
                                    <span>{item.name}</span>
                                    {!item.isRoute && (
                                        <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-0.5 rounded-full font-bold">
                                            Soon
                                        </span>
                                    )}
                                </a>
                            );
                        })}
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden flex items-center justify-between w-full">
                        <div className="flex items-center space-x-2">
                            <Home size={20} className="text-primary" />
                            <span className="font-bold text-gray-900">KSA Menu</span>
                        </div>
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className="p-2 rounded-lg text-gray-700 hover:bg-gray-100 transition-colors"
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t-2 border-primary shadow-lg">
                    <div className="px-4 py-4 space-y-2">
                        {navItems.map((item) => {
                            const Icon = item.icon;
                            const isActive = item.isRoute
                                ? window.location.pathname === item.href
                                : activeLink === item.href;

                            return item.isRoute ? (
                                <Link
                                    key={item.name}
                                    to={item.href}
                                    onClick={() => setIsMobileMenuOpen(false)}
                                    className={`flex items-center space-x-3 px-4 py-3 rounded-lg font-semibold transition-all ${isActive
                                        ? 'bg-primary text-white'
                                        : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                >
                                    <Icon size={20} />
                                    <span>{item.name}</span>
                                </Link>
                            ) : (
                                <a
                                    key={item.name}
                                    href={item.href}
                                    onClick={(e) => {
                                        e.preventDefault();
                                        handleLinkClick(item);
                                    }}
                                    className={`flex items-center justify-between px-4 py-3 rounded-lg font-semibold transition-all ${isActive
                                        ? 'bg-primary text-white'
                                        : 'text-gray-700 hover:bg-primary/10 hover:text-primary'
                                        }`}
                                >
                                    <div className="flex items-center space-x-3">
                                        <Icon size={20} />
                                        <span>{item.name}</span>
                                    </div>
                                    <span className="text-xs bg-yellow-400 text-gray-900 px-2 py-1 rounded-full font-bold">
                                        Soon
                                    </span>
                                </a>
                            );
                        })}
                    </div>
                </div>
            )}
        </nav>
    );
};

export default KSANavbar;
