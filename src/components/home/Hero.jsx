import React, { useState } from 'react';
import { Search, MapPin } from 'lucide-react';
import { destinations } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const Hero = () => {
    const [selectedDestination, setSelectedDestination] = useState('');
    const navigate = useNavigate();

    const handleSearch = () => {
        console.log('Searching for destination:', selectedDestination);
        // navigate to selected destination
        navigate(selectedDestination);
    };

    return (
        <div className="relative h-screen w-full overflow-hidden">
            {/* Background Image with Overlay */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{
                    backgroundImage: 'url(https://images.unsplash.com/photo-1488646953014-85cb44e25828?w=1920&q=80)',
                }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                <div className="text-center max-w-4xl mx-auto mb-16">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight">
                        Discover Your Next
                        <span className="block text-primary mt-2">Adventure</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-2xl mx-auto">
                        Your Journey, Our Passion. Explore the world with Classic Trip's expertly curated travel experiences.
                    </p>
                </div>

                {/* CTA Search Card */}
                <div className="w-full max-w-4xl bg-white rounded-2xl shadow-2xl p-6 sm:p-8">
                    <div className="flex flex-col md:flex-row gap-4 items-end">
                        {/* Destination Selector */}
                        <div className="flex-1 w-full">
                            <label className="block text-sm font-semibold text-gray-700 mb-2">
                                Select Your Destination
                            </label>
                            <div className="relative">
                                <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                                <select
                                    value={selectedDestination}
                                    onChange={(e) => setSelectedDestination(e.target.value)}
                                    className="w-full pl-11 pr-4 py-4 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-gray-700 font-medium appearance-none bg-white cursor-pointer"
                                >
                                    <option value="">Choose a destination...</option>
                                    {destinations.map((dest) => (
                                        <option key={dest.id} value={dest.link}>
                                            {dest.name} - {dest.country}
                                        </option>
                                    ))}
                                </select>
                            </div>
                        </div>

                        {/* Search Button */}
                        <button
                            onClick={handleSearch}
                            className="w-full md:w-auto px-8 py-4 bg-primary hover:bg-red-700 text-white font-bold rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                        >
                            <Search size={20} />
                            <span>Explore Now</span>
                        </button>
                    </div>

                    {/* Quick Stats */}
                    <div className="grid grid-cols-3 gap-4 mt-8 pt-6 border-t border-gray-200">
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">50+</div>
                            <div className="text-xs sm:text-sm text-gray-600 mt-1">Destinations</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">10K+</div>
                            <div className="text-xs sm:text-sm text-gray-600 mt-1">Happy Travelers</div>
                        </div>
                        <div className="text-center">
                            <div className="text-2xl sm:text-3xl font-bold text-primary">15+</div>
                            <div className="text-xs sm:text-sm text-gray-600 mt-1">Years Experience</div>
                        </div>
                    </div>
                </div>
            </div>

            {/* Scroll Indicator */}
            <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
                <div className="w-6 h-10 border-2 border-white rounded-full flex items-start justify-center p-2">
                    <div className="w-1 h-3 bg-white rounded-full"></div>
                </div>
            </div>
        </div>
    );
};

export default Hero;
