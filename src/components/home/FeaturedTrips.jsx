import React, { useRef } from 'react';
import { MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { packages } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const FeaturedTrips = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);

    // Filter featured packages from all types
    const featuredPackages = packages.filter(pkg => pkg.isFeatured);

    const handleViewDetails = (pkg) => {
        console.log('View details for:', pkg.title);
        navigate(`/package/${pkg.id}`);
    };

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 400;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6">
                    <div className="max-w-2xl">
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Featured Travel <span className="text-primary">Experiences</span>
                        </h2>
                        <p className="text-lg text-gray-600">
                            Handpicked packages designed to give you the best of every destination.
                            From luxury escapes to cultural journeys, find your perfect adventure.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                </div>

                {/* Packages Slider */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {featuredPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-hover transition-all duration-300 group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold text-lg shadow-lg">
                                    {pkg.price}
                                </div>
                                {/* Type Badge */}
                                <div className="absolute top-4 left-4 bg-black/50 backdrop-blur-sm text-white px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider">
                                    {pkg.subType || pkg.type}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                    {pkg.title}
                                </h3>

                                <div className="flex items-center text-gray-600 mb-2">
                                    <MapPin size={16} className="mr-2 flex-shrink-0" />
                                    <span className="text-sm line-clamp-1">{pkg.destination}</span>
                                </div>

                                <div className="flex items-center text-gray-600 mb-4">
                                    <Clock size={16} className="mr-2 flex-shrink-0" />
                                    <span className="text-sm">{pkg.duration}</span>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                                    {pkg.description}
                                </p>

                                {/* Highlights */}
                                <div className="flex flex-wrap gap-2 mb-4">
                                    {pkg.highlights.slice(0, 3).map((highlight, index) => (
                                        <span
                                            key={index}
                                            className="text-xs bg-gray-100 text-gray-700 px-3 py-1 rounded-full"
                                        >
                                            {highlight}
                                        </span>
                                    ))}
                                </div>

                                {/* View Details Button */}
                                <button
                                    onClick={() => handleViewDetails(pkg)}
                                    className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors group-hover:shadow-lg"
                                >
                                    <span>View Details</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </button>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default FeaturedTrips;
