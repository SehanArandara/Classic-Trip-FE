import React from 'react';
import { Globe, MapPin } from 'lucide-react';
import { useNavigate } from 'react-router-dom';

const KSAHero = () => {
    const navigate = useNavigate();

    const handleCTAClick = (type) => {
        if (type === 'global') {
            navigate('/ksa/globalPackages');
        } else {
            navigate('/ksa/visit-saudi');
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden pt-20">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1578895101408-1a36b834405b?w=1920&q=80)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/60 to-black/80"></div>
            </div>

            {/* Content */}
            <div className="relative min-h-screen flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8 py-16 sm:py-20">
                {/* Main Headline */}
                <div className="text-center mb-8 sm:mb-12 max-w-5xl mx-auto">
                    <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold text-white mb-4 sm:mb-6 leading-tight px-4">
                        Welcome to
                        <span className="block text-primary mt-2 sm:mt-3">Classic Trip Saudi</span>
                    </h1>
                    <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-gray-200 max-w-3xl mx-auto px-4">
                        Your Gateway to Global Adventures & Saudi Wonders
                    </p>
                </div>

                {/* Dual CTA Buttons */}
                <div className="flex flex-col sm:flex-row gap-4 sm:gap-6 mb-10 sm:mb-16 w-full max-w-2xl px-4">
                    <button
                        onClick={() => handleCTAClick('global')}
                        className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-primary hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-2xl hover:shadow-primary/50 transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                    >
                        <Globe size={24} className="flex-shrink-0" />
                        <span className="text-base sm:text-lg">Explore Global Packages</span>
                    </button>

                    <button
                        onClick={() => handleCTAClick('visit')}
                        className="group w-full sm:w-auto px-8 sm:px-10 py-4 sm:py-5 bg-transparent border-2 border-white hover:bg-white hover:text-primary text-white font-bold rounded-xl transition-all duration-300 shadow-2xl transform hover:-translate-y-1 flex items-center justify-center space-x-3"
                    >
                        <MapPin size={24} className="flex-shrink-0" />
                        <span className="text-base sm:text-lg">Visit Saudi</span>
                    </button>
                </div>

                {/* Glassmorphism Intro Card */}
                <div className="max-w-4xl w-full backdrop-blur-md bg-white/10 border border-white/20 rounded-2xl p-6 sm:p-8 md:p-10 shadow-2xl mx-4">
                    <div className="text-center">
                        <h2 className="text-xl sm:text-2xl md:text-3xl font-bold text-white mb-4 sm:mb-6">
                            Discover the Best of Both Worlds
                        </h2>
                        <p className="text-sm sm:text-base md:text-lg text-gray-200 leading-relaxed">
                            Classic Trip Saudi offers a unique dual focus: explore breathtaking international
                            destinations with our <span className="font-semibold text-white">Global Holidays</span>,
                            or discover the rich heritage and modern marvels of Saudi Arabia with our
                            <span className="font-semibold text-white"> Visit Saudi</span> packages.
                            Whether you're seeking adventure abroad or at home, we craft unforgettable journeys
                            tailored to your dreams.
                        </p>
                    </div>

                    {/* Quick Features */}
                    <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-6 sm:mt-8 pt-6 border-t border-white/20">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">20+</div>
                            <div className="text-xs sm:text-sm text-gray-300">Global Destinations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">10+</div>
                            <div className="text-xs sm:text-sm text-gray-300">Saudi Experiences</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl md:text-4xl font-bold text-white mb-1 sm:mb-2">5K+</div>
                            <div className="text-xs sm:text-sm text-gray-300">Happy Travelers</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce hidden sm:block">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default KSAHero;
