import React from 'react';
import { ArrowRight, MapPin } from 'lucide-react';
import { destinations } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const DestinationStrip = () => {
    const navigate = useNavigate();

    const handleDestinationClick = (destination) => {
        console.log('Selected destination:', destination.name);
        navigate(destination.link);
    };

    // Images for the cards (since they aren't in the data object yet, I'll map them here or use placeholders)
    const destinationImages = {
        "Classic Saudi": "https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80", // Riyadh/Saudi
        "Classic Dubai": "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800&q=80"  // Dubai
    };

    return (
        <section id="destinations" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our Global <span className="text-primary">Presence</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        We are expanding our footprint to bring you the best travel experiences.
                        Currently operating in these prime locations.
                    </p>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-5xl mx-auto">
                    {destinations.map((destination) => (
                        <div
                            key={destination.id}
                            onClick={() => handleDestinationClick(destination)}
                            className="group relative h-80 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500"
                        >
                            {/* Background Image */}
                            <div
                                className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                                style={{ backgroundImage: `url(${destinationImages[destination.name]})` }}
                            >
                                <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                            </div>

                            {/* Content */}
                            <div className="absolute inset-0 flex flex-col justify-end p-8">
                                <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                    <div className="flex items-center space-x-2 text-white/80 mb-2">
                                        <MapPin size={18} />
                                        <span className="text-sm font-medium uppercase tracking-wider">{destination.country}</span>
                                    </div>
                                    <h3 className="text-3xl font-bold text-white mb-4">
                                        {destination.name}
                                    </h3>
                                    <div className="flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                        <span>Explore Now</span>
                                        <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                    </div>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default DestinationStrip;
