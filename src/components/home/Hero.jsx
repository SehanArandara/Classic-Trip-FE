import React, { useRef, useEffect, useState } from 'react';
import { ChevronLeft, ChevronRight, MapPin, ArrowRight } from 'lucide-react';
import { destinations } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);
    const [isHovered, setIsHovered] = useState(false);

    // Auto-scroll functionality
    useEffect(() => {
        const scrollContainer = scrollContainerRef.current;
        let scrollInterval;

        if (scrollContainer && !isHovered) {
            scrollInterval = setInterval(() => {
                const maxScrollLeft = scrollContainer.scrollWidth - scrollContainer.clientWidth;
                // Get the width of the first card + gap (24px = 1.5rem gap)
                const cardWidth = scrollContainer.firstElementChild?.clientWidth || 300;
                const gap = 24;

                if (scrollContainer.scrollLeft >= maxScrollLeft - 10) { // Tolerance for float precision
                    // Reset to start for infinite loop effect
                    scrollContainer.scrollTo({ left: 0, behavior: 'smooth' });
                } else {
                    scrollContainer.scrollBy({ left: cardWidth + gap, behavior: 'smooth' });
                }
            }, 3000); // Scroll every 3 seconds
        }

        return () => clearInterval(scrollInterval);
    }, [isHovered]);

    const scroll = (direction) => {
        if (scrollContainerRef.current) {
            // Get the width of the first card + gap (24px = 1.5rem gap)
            const cardWidth = scrollContainerRef.current.firstElementChild?.clientWidth || 300;
            const gap = 24;
            const scrollAmount = cardWidth + gap;

            const newScrollLeft = scrollContainerRef.current.scrollLeft + (direction === 'left' ? -scrollAmount : scrollAmount);
            scrollContainerRef.current.scrollTo({
                left: newScrollLeft,
                behavior: 'smooth'
            });
        }
    };

    const handleDestinationClick = (link, isComingSoon) => {
        if (!isComingSoon) {
            navigate(link);
        }
    };

    return (
        <div className="relative min-h-screen w-full overflow-hidden flex flex-col">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat transform scale-105 animate-slow-zoom"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)',
                }}
            >
                <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/50 to-black/90"></div>
            </div>

            {/* Main Content Container */}
            <div className="relative z-10 flex-1 flex flex-col justify-center px-4 sm:px-6 lg:px-8 pt-24 pb-12">

                {/* Hero Text Section */}
                <div className="text-center max-w-5xl mx-auto mb-12 flex-1 flex flex-col justify-center">
                    <h1 className="text-4xl sm:text-5xl md:text-7xl font-bold text-white mb-6 leading-tight tracking-tight drop-shadow-lg">
                        Discover Your Next
                        <span className="block text-transparent bg-clip-text bg-gradient-to-r from-primary to-orange-500 mt-2 pb-2">
                            Global Adventure
                        </span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light drop-shadow-md">
                        Your Journey, Our Passion. Explore the world with Classic Trip's expertly curated travel experiences across the globe.
                    </p>
                </div>

                {/* Global Presence Carousel Section */}
                <div className="w-full max-w-[1400px] mx-auto mt-auto">
                    <div className="flex items-center justify-between mb-6 px-4">
                        <h2 className="text-2xl sm:text-3xl font-bold text-white flex items-center gap-3 drop-shadow-md">
                            <div className="p-2 bg-primary/20 rounded-lg backdrop-blur-sm">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            Global Presence
                        </h2>

                        {/* Manual Controls */}
                        <div className="flex gap-3">
                            <button
                                onClick={() => scroll('left')}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110 active:scale-95"
                                aria-label="Scroll left"
                            >
                                <ChevronLeft size={20} />
                            </button>
                            <button
                                onClick={() => scroll('right')}
                                className="p-3 rounded-full bg-white/10 hover:bg-white/20 text-white backdrop-blur-md transition-all border border-white/20 hover:scale-110 active:scale-95"
                                aria-label="Scroll right"
                            >
                                <ChevronRight size={20} />
                            </button>
                        </div>
                    </div>

                    {/* Carousel Container */}
                    <div
                        className="relative group"
                        onMouseEnter={() => setIsHovered(true)}
                        onMouseLeave={() => setIsHovered(false)}
                    >
                        <div
                            ref={scrollContainerRef}
                            className="flex gap-6 overflow-x-auto pb-8 scrollbar-hide snap-x snap-mandatory px-4"
                            style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                        >
                            {destinations.map((dest, index) => {
                                const isComingSoon = index >= 2; // First 2 active, rest coming soon

                                return (
                                    <div
                                        key={dest.id}
                                        onClick={() => handleDestinationClick(dest.link, isComingSoon)}
                                        className={`
                                            flex-none relative rounded-2xl overflow-hidden snap-center shadow-2xl transition-all duration-300
                                            w-[85vw] sm:w-[45vw] md:w-[30vw] lg:w-[22vw] xl:w-[18vw]
                                            h-[400px] sm:h-[350px]
                                            ${isComingSoon ? 'cursor-default' : 'cursor-pointer hover:-translate-y-2 hover:shadow-primary/20'}
                                            border border-white/10
                                        `}
                                    >
                                        {/* Card Background */}
                                        <div
                                            className={`absolute inset-0 bg-cover bg-center transition-transform duration-700 ${!isComingSoon && 'group-hover:scale-110'} ${isComingSoon && 'blur-[2px] grayscale'}`}
                                            style={{ backgroundImage: `url(${dest.image})` }}
                                        >
                                            <div className={`absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent ${isComingSoon ? 'opacity-80' : 'opacity-60 group-hover:opacity-80'} transition-opacity duration-300`}></div>
                                        </div>

                                        {/* Coming Soon Overlay */}
                                        {isComingSoon && (
                                            <div className="absolute inset-0 flex items-center justify-center z-20 bg-black/40 backdrop-blur-[1px]">
                                                <span className="px-4 py-2 bg-white/10 backdrop-blur-md border border-white/20 rounded-full text-white font-bold tracking-wider text-sm uppercase shadow-lg">
                                                    Coming Soon
                                                </span>
                                            </div>
                                        )}

                                        {/* Card Content */}
                                        <div className="absolute inset-0 flex flex-col justify-end p-6 z-10">
                                            <div className={`transform transition-transform duration-300 ${!isComingSoon && 'translate-y-4 group-hover:translate-y-0'}`}>
                                                <div className="flex items-center gap-2 mb-2">
                                                    <span className={`h-0.5 w-8 ${isComingSoon ? 'bg-gray-400' : 'bg-primary'}`}></span>
                                                    <p className="text-xs font-bold text-gray-300 uppercase tracking-widest">
                                                        {dest.country}
                                                    </p>
                                                </div>

                                                <h3 className={`text-2xl font-bold text-white mb-3 leading-tight ${!isComingSoon && 'group-hover:text-primary transition-colors'}`}>
                                                    {dest.name}
                                                </h3>

                                                {!isComingSoon && (
                                                    <div className="flex items-center text-white/90 text-sm font-medium opacity-0 group-hover:opacity-100 transition-opacity duration-300 delay-75">
                                                        <span>Explore Destination</span>
                                                        <ArrowRight size={16} className="ml-2 transform group-hover:translate-x-1 transition-transform" />
                                                    </div>
                                                )}
                                            </div>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>

                        {/* Gradient Edges for Carousel */}
                        <div className="absolute top-0 bottom-8 left-0 w-12 bg-gradient-to-r from-black/50 to-transparent pointer-events-none sm:hidden"></div>
                        <div className="absolute top-0 bottom-8 right-0 w-12 bg-gradient-to-l from-black/50 to-transparent pointer-events-none sm:hidden"></div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
