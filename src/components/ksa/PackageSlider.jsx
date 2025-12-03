import React, { useRef } from 'react';
import { ChevronLeft, ChevronRight, ArrowRight, MapPin, Clock } from 'lucide-react';
import { Link, useNavigate } from 'react-router-dom';

const PackageSlider = ({ title, packages, sectionId, seeAllLink }) => {
    const scrollContainerRef = useRef(null);
    const navigate = useNavigate();

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

    const handleSeeAll = () => {
        if (seeAllLink) {
            navigate(seeAllLink);
        } else if (title === "Global Packages") {
            navigate('/ksa/globalPackages');
        } else if (title === "Visit Saudi") {
            navigate('/ksa/visit-saudi');
        }
    };

    return (
        <section id={sectionId} className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-12">
                    <h2 className="text-4xl font-bold text-gray-900">
                        {title}
                    </h2>

                    <div className="flex items-center space-x-3">
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full bg-gray-100 hover:bg-primary hover:text-white transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* See All Button */}
                        <button
                            onClick={handleSeeAll}
                            className="hidden md:flex items-center space-x-2 px-6 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
                        >
                            <span>See All</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Package Slider */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {packages.map((pkg) => (
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
                                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                                    {pkg.price}
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
                                <Link
                                    to={`/package/${pkg.id}`}
                                    className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-red-700 text-white font-semibold py-3 rounded-lg transition-colors"
                                >
                                    <span>View Details</span>
                                    <ArrowRight size={18} className="group-hover:translate-x-1 transition-transform" />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile See All Button */}
                <div className="md:hidden mt-6 text-center">
                    <button
                        onClick={handleSeeAll}
                        className="inline-flex items-center space-x-2 px-8 py-3 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
                    >
                        <span>See All</span>
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
      `}</style>
        </section>
    );
};

export default PackageSlider;
