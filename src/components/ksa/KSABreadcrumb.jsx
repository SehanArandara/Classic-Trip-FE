import React, { useState, useRef, useEffect } from 'react';
import { ChevronRight, Home, ChevronDown } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const KSABreadcrumb = ({ pageName }) => {
    const [isDropdownOpen, setIsDropdownOpen] = useState(false);
    const dropdownRef = useRef(null);
    const navigate = useNavigate();

    // Close dropdown when clicking outside
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
                setIsDropdownOpen(false);
            }
        };

        document.addEventListener('mousedown', handleClickOutside);
        return () => document.removeEventListener('mousedown', handleClickOutside);
    }, []);

    const handleNavigation = (path) => {
        setIsDropdownOpen(false);
        navigate(path);
    };

    return (
        <div className="absolute top-20 left-0 right-0 z-30 bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                {/* Breadcrumb Path */}
                <div className="flex items-center space-x-2 text-sm">
                    <Link
                        to="/"
                        className="flex items-center text-white/80 hover:text-white transition-colors"
                    >
                        <Home size={16} className="mr-1" />
                        <span className="font-medium">Classic Trip</span>
                    </Link>

                    <ChevronRight size={16} className="text-white/60" />

                    <span className="text-white/80 font-medium hover:text-white transition-colors">
                        <Link to="/ksa">KSA</Link>
                    </span>

                    {pageName && (
                        <>
                            <ChevronRight size={16} className="text-white/60" />
                            <span className="text-white font-semibold">
                                {pageName}
                            </span>
                        </>
                    )}

                    {/* Dropdown Trigger */}
                    <div className="relative" ref={dropdownRef}>
                        <button
                            onClick={() => setIsDropdownOpen(!isDropdownOpen)}
                            className="flex items-center text-white/60 hover:text-white transition-colors focus:outline-none ml-1 p-1 rounded hover:bg-white/10"
                        >
                            {isDropdownOpen ? <ChevronDown size={16} /> : <ChevronRight size={16} />}
                        </button>

                        {/* Dropdown Menu */}
                        {isDropdownOpen && (
                            <div className="absolute top-full left-0 mt-2 w-48 bg-white rounded-lg shadow-xl py-2 border border-gray-100 animate-fadeIn">
                                <button
                                    onClick={() => handleNavigation('/ksa/globalPackages')}
                                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium"
                                >
                                    Global Holidays
                                </button>
                                <button
                                    onClick={() => handleNavigation('/ksa/visit-saudi')}
                                    className="w-full px-4 py-2 text-left text-gray-700 hover:bg-gray-50 hover:text-primary transition-colors text-sm font-medium"
                                >
                                    Visit Saudi
                                </button>
                            </div>
                        )}
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KSABreadcrumb;
