import React from 'react';
import { ArrowDown } from 'lucide-react';

const SubPageHero = ({ title, subtitle, image, onExploreClick }) => {
    return (
        <div className="relative h-[60vh] min-h-[500px] w-full overflow-hidden">
            {/* Background Image */}
            <div
                className="absolute inset-0 bg-cover bg-center bg-no-repeat"
                style={{ backgroundImage: `url(${image})` }}
            >
                <div className="absolute inset-0 bg-black/50"></div>
            </div>

            {/* Content */}
            <div className="relative h-full flex flex-col items-center justify-center text-center px-4 sm:px-6 lg:px-8">
                <h1 className="text-4xl md:text-6xl font-bold text-white mb-6">
                    {title}
                </h1>
                <p className="text-lg md:text-xl text-gray-200 max-w-3xl mb-10">
                    {subtitle}
                </p>
                <button
                    onClick={onExploreClick}
                    className="group px-8 py-4 bg-primary hover:bg-red-700 text-white font-bold rounded-xl transition-all duration-300 shadow-lg hover:shadow-primary/50 flex items-center space-x-2"
                >
                    <span>Explore Packages</span>
                    <ArrowDown className="group-hover:translate-y-1 transition-transform" size={20} />
                </button>
            </div>
        </div>
    );
};

export default SubPageHero;
