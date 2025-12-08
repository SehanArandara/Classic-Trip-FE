import React, { useState, useEffect } from 'react';

const DualNavbar = ({ mainNav, secondaryNav }) => {
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            setIsScrolled(window.scrollY > 50);
        };
        window.addEventListener('scroll', handleScroll);
        return () => window.removeEventListener('scroll', handleScroll);
    }, []);

    return (
        <div className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${isScrolled ? 'shadow-lg' : ''}`}>
            {/* Top Bar - Main Navigation */}
            <div className="bg-primary text-white relative z-20">
                {mainNav}
            </div>

            {/* Sub Bar - Secondary Navigation */}
            <div className="bg-white border-b border-gray-100 relative z-10">
                {secondaryNav}
            </div>
        </div>
    );
};

export default DualNavbar;
