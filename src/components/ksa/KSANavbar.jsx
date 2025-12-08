import React, { useState, useRef, useEffect } from 'react';
import DualNavbar from '../common/DualNavbar';
import Navbar from '../home/Navbar';
import { navLinks, ksaNavLinks, destinations } from '../../data/data';
import { ChevronDown, MapPin } from 'lucide-react';
import { Link } from 'react-router-dom';

const KSANavbar = () => {
    const [isGlobalDropdownOpen, setIsGlobalDropdownOpen] = useState(false);
    const globalDropdownRef = useRef(null);

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

    // Top Bar: Main Classic Trip Navigation
    const MainNav = (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-start space-x-6 text-sm font-medium">
            {navLinks.map((link) => {
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
                                className="hover:text-gray-200 transition-colors flex items-center space-x-1 h-12"
                            >
                                <span>{link.name}</span>
                                <ChevronDown size={14} className={`transform transition-transform duration-300 ${isGlobalDropdownOpen ? 'rotate-180' : ''}`} />
                            </button>

                            {/* Dropdown Menu */}
                            <div
                                className={`absolute left-0 mt-0 w-64 bg-white rounded-xl shadow-xl py-2 border border-gray-100 transition-all duration-300 origin-top text-gray-800 z-50 ${isGlobalDropdownOpen ? 'opacity-100 scale-100 visible' : 'opacity-0 scale-95 invisible'
                                    }`}
                            >
                                <div className="absolute -top-2 left-0 right-0 h-4 bg-transparent"></div>
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
                        className="hover:text-gray-200 transition-colors"
                    >
                        {link.name}
                    </a>
                );
            })}
        </div>
    );

    // Sub Bar: KSA Navigation
    const SecondaryNav = (
        <Navbar
            links={ksaNavLinks}
            isStatic={true}
            customClass="!bg-transparent !shadow-none !static"
        />
    );

    return <DualNavbar mainNav={MainNav} secondaryNav={SecondaryNav} />;
};

export default KSANavbar;
