import React, { useState, useEffect, useRef } from 'react';
import { Menu, X, Globe, ChevronDown, MapPin } from 'lucide-react';
import { companyInfo, navLinks, languages, destinations } from '../../data/data';
import { Link, useNavigate, useLocation } from 'react-router-dom';

const Navbar = ({ links }) => {
    const [isScrolled, setIsScrolled] = useState(false);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [isLangDropdownOpen, setIsLangDropdownOpen] = useState(false);
    const [isGlobalDropdownOpen, setIsGlobalDropdownOpen] = useState(false);
    const [selectedLang, setSelectedLang] = useState(languages[0]);
    const globalDropdownRef = useRef(null);
    const navigate = useNavigate();
    const location = useLocation();

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (globalDropdownRef.current && !globalDropdownRef.current.contains(event.target)) {
                setIsGlobalDropdownOpen(false);
            }
        };
        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleLanguageChange = (lang) => {
        setSelectedLang(lang);
        setIsLangDropdownOpen(false);
        console.log('Language changed to:', lang.code);
    };

    const handleNavClick = (e, link) => {
        if (link.href.startsWith('#')) {
            e.preventDefault();
            if (location.pathname !== '/') {
                navigate('/');
                setTimeout(() => {
                    const element = document.querySelector(link.href);
                    if (element) element.scrollIntoView({ behavior: 'smooth' });
                }, 100);
            } else {
                const element = document.querySelector(link.href);
                if (element) element.scrollIntoView({ behavior: 'smooth' });
            }
        }
        setIsMobileMenuOpen(false);
    };

    return (
        <nav
            className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'bg-white shadow-lg' : 'bg-transparent'
                }`}
        >
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="flex justify-between items-center h-20">
                    {/* Logo */}
                    <div className="flex items-center">
                        <Link to="/" className="flex items-center space-x-2">
                            <div className={`text-2xl font-bold transition-colors ${isScrolled ? 'text-primary' : 'text-white'
                                }`}>
                                {companyInfo.name}
                            </div>
                        </Link>
                    </div>

                    {/* Desktop Navigation */}
                    <div className="hidden md:flex items-center space-x-8">
                        {(links || navLinks).map((link) => {
                            if (link.name === 'Global Presence') {
                                return (
                                    <div
                                        key={link.name}
                                        className="relative group"
                                        ref={globalDropdownRef}
                                        onMouseEnter={() => setIsGlobalDropdownOpen(true)}
                                        onMouseLeave={() => setIsGlobalDropdownOpen(false)}
                                    >
                                        <button
                                            className={`font-medium transition-colors hover:text-primary flex items-center space-x-1 py-2 ${isScrolled ? 'text-gray-700' : 'text-white'
                                                }`}
                                        >
                                            <span>{link.name}</span>
                                            <ChevronDown size={16} className={`transform transition-transform duration-300 ${isGlobalDropdownOpen ? 'rotate-180' : ''}`} />
                                        </button>

                                        {/* Dropdown Menu */}
                                        <div
                                            className={`absolute left-1/2 transform -translate-x-1/2 mt-0 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100 transition-all duration-300 origin-top ${isGlobalDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                                }`}
                                        >
                                            <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent"></div> {/* Bridge for hover */}
                                            <div className="px-4 py-2 text-xs font-semibold text-gray-400 uppercase tracking-wider">
                                                Select Region
                                            </div>
                                            {destinations.map((dest) => (
                                                <Link
                                                    key={dest.id}
                                                    to={dest.link}
                                                    onClick={() => setIsGlobalDropdownOpen(false)}
                                                    className="flex items-center space-x-3 px-4 py-3 hover:bg-gray-50 transition-colors group/item"
                                                >
                                                    <div className="bg-primary/10 p-2 rounded-lg text-primary group-hover/item:bg-primary group-hover/item:text-white transition-colors">
                                                        <MapPin size={18} />
                                                    </div>
                                                    <div>
                                                        <div className="font-semibold text-gray-900">{dest.name}</div>
                                                        <div className="text-xs text-gray-500">{dest.country}</div>
                                                    </div>
                                                </Link>
                                            ))}
                                        </div>
                                    </div>
                                );
                            }
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className={`font-medium transition-colors hover:text-primary ${isScrolled ? 'text-gray-700' : 'text-white'
                                        }`}
                                >
                                    {link.name}
                                </a>
                            );
                        })}

                        {/* Language Selector */}
                        <div className="relative">
                            <button
                                onClick={() => setIsLangDropdownOpen(!isLangDropdownOpen)}
                                className={`flex items-center space-x-2 px-4 py-2 rounded-lg border transition-all ${isScrolled
                                    ? 'border-gray-300 text-gray-700 hover:border-primary'
                                    : 'border-white text-white hover:bg-white/10'
                                    }`}
                            >
                                <Globe size={18} />
                                <span>{selectedLang.flag}</span>
                                <span className="font-medium">{selectedLang.code.toUpperCase()}</span>
                                <ChevronDown size={16} />
                            </button>

                            {isLangDropdownOpen && (
                                <div className="absolute right-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-200">
                                    {languages.map((lang) => (
                                        <button
                                            key={lang.code}
                                            onClick={() => handleLanguageChange(lang)}
                                            className="w-full px-4 py-2 text-left hover:bg-gray-100 flex items-center space-x-3"
                                        >
                                            <span>{lang.flag}</span>
                                            <span className="text-gray-700">{lang.name}</span>
                                        </button>
                                    ))}
                                </div>
                            )}
                        </div>
                    </div>

                    {/* Mobile Menu Button */}
                    <div className="md:hidden">
                        <button
                            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
                            className={`p-2 rounded-lg ${isScrolled ? 'text-gray-700' : 'text-white'
                                }`}
                        >
                            {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
                        </button>
                    </div>
                </div>
            </div>

            {/* Mobile Menu */}
            {isMobileMenuOpen && (
                <div className="md:hidden bg-white border-t border-gray-200 h-screen overflow-y-auto pb-20">
                    <div className="px-4 py-4 space-y-3">
                        {(links || navLinks).map((link) => {
                            if (link.name === 'Global Presence') {
                                return (
                                    <div key={link.name} className="space-y-2">
                                        <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider pt-2">
                                            Global Presence
                                        </div>
                                        {destinations.map((dest) => (
                                            <Link
                                                key={dest.id}
                                                to={dest.link}
                                                onClick={() => setIsMobileMenuOpen(false)}
                                                className="flex items-center space-x-3 p-3 rounded-lg hover:bg-gray-50 transition-colors"
                                            >
                                                <div className="bg-primary/10 p-2 rounded-lg text-primary">
                                                    <MapPin size={18} />
                                                </div>
                                                <span className="font-medium text-gray-900">{dest.name}</span>
                                            </Link>
                                        ))}
                                    </div>
                                );
                            }
                            return (
                                <a
                                    key={link.name}
                                    href={link.href}
                                    onClick={(e) => handleNavClick(e, link)}
                                    className="block py-3 text-lg font-medium text-gray-900 border-b border-gray-100"
                                >
                                    {link.name}
                                </a>
                            );
                        })}

                        <div className="pt-6">
                            <div className="text-sm font-semibold text-gray-400 uppercase tracking-wider mb-3">Language</div>
                            <div className="grid grid-cols-2 gap-3">
                                {languages.map((lang) => (
                                    <button
                                        key={lang.code}
                                        onClick={() => {
                                            handleLanguageChange(lang);
                                            setIsMobileMenuOpen(false);
                                        }}
                                        className="flex items-center justify-center space-x-2 px-4 py-3 border border-gray-200 rounded-lg hover:border-primary hover:text-primary transition-colors"
                                    >
                                        <span>{lang.flag}</span>
                                        <span className="font-medium">{lang.name}</span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            )}
        </nav>
    );
};

export default Navbar;
