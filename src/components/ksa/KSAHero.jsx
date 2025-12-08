import React from 'react';
import { Globe, MapPin, ArrowRight } from 'lucide-react';
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
        <div className="relative h-screen w-full overflow-hidden">
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
            <div className="relative h-full flex flex-col items-center justify-center px-4 sm:px-6 lg:px-8">
                {/* Main Headline */}
                <div className="text-center mb-12 max-w-5xl mx-auto">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 leading-tight drop-shadow-lg">
                        Welcome to
                        <span className="block text-primary mt-4">Classic Trip Saudi</span>
                    </h1>
                    <p className="text-lg sm:text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto font-light drop-shadow-md">
                        Your Gateway to Global Adventures & Saudi Wonders
                    </p>
                </div>

                {/* Dual CTA Cards */}
                <div className="w-full max-w-4xl grid grid-cols-1 md:grid-cols-2 gap-6 px-4">
                    {/* Global Packages Card */}
                    <div
                        onClick={() => handleCTAClick('global')}
                        className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=800&q=80)' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center space-x-2 text-primary mb-2">
                                    <Globe size={24} />
                                    <span className="text-sm font-medium uppercase tracking-wider text-gray-300">International</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Global Packages
                                </h3>
                                <div className="flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <span>Explore the World</span>
                                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Visit Saudi Card */}
                    <div
                        onClick={() => handleCTAClick('visit')}
                        className="group relative h-64 rounded-2xl overflow-hidden cursor-pointer shadow-lg hover:shadow-2xl transition-all duration-500 border border-white/20"
                    >
                        {/* Background Image */}
                        <div
                            className="absolute inset-0 bg-cover bg-center transition-transform duration-700 group-hover:scale-110"
                            style={{ backgroundImage: 'url(https://images.unsplash.com/photo-1586724237569-f3d0c1dee8c6?w=800&q=80)' }}
                        >
                            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-transparent opacity-80 group-hover:opacity-70 transition-opacity duration-300"></div>
                        </div>

                        {/* Content */}
                        <div className="absolute inset-0 flex flex-col justify-end p-8">
                            <div className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-500">
                                <div className="flex items-center space-x-2 text-primary mb-2">
                                    <MapPin size={24} />
                                    <span className="text-sm font-medium uppercase tracking-wider text-gray-300">Kingdom of Saudi Arabia</span>
                                </div>
                                <h3 className="text-3xl font-bold text-white mb-2">
                                    Visit Saudi
                                </h3>
                                <div className="flex items-center text-white font-semibold opacity-0 group-hover:opacity-100 transition-opacity duration-500 delay-100">
                                    <span>Discover the Kingdom</span>
                                    <ArrowRight size={20} className="ml-2 group-hover:translate-x-2 transition-transform" />
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default KSAHero;
