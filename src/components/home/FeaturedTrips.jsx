import React from 'react';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { packages } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const FeaturedTrips = () => {
    const navigate = useNavigate();

    // Filter featured packages from all types
    const featuredPackages = packages.filter(pkg => pkg.isFeatured);

    const handleViewDetails = (pkg) => {
        console.log('View details for:', pkg.title);
        navigate(`/package/${pkg.id}`);
    };

    return (
        <section className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Featured Travel <span className="text-primary">Experiences</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Handpicked packages designed to give you the best of every destination.
                        From luxury escapes to cultural journeys, find your perfect adventure.
                    </p>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {featuredPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-hover transition-all duration-300 group cursor-pointer"
                        >
                            {/* Image */}
                            <div className="relative h-64 overflow-hidden">
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
                                    {pkg.type === 'visit-saudi' ? 'Visit Saudi' : pkg.type === 'global' ? 'Global' : 'Featured'}
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
        </section>
    );
};

export default FeaturedTrips;
