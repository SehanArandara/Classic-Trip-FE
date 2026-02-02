import React, { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

const ServiceCard = ({ icon: Icon, name, description, points = [] }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    return (
        <div
            className={`bg-white rounded-2xl p-6 border border-gray-100 hover:border-primary/20 hover:shadow-2xl transition-all duration-500 group relative overflow-hidden flex flex-col h-full ${isExpanded ? 'ring-2 ring-primary/10' : ''}`}
        >
            {/* Background Decoration */}
            <div className="absolute -right-4 -top-4 w-24 h-24 bg-primary/5 rounded-full blur-2xl group-hover:bg-primary/10 transition-colors duration-500" />

            <div className="relative z-10 flex flex-col h-full">
                <div className="w-12 h-12 bg-primary/10 rounded-xl flex items-center justify-center mb-5 group-hover:bg-primary group-hover:scale-110 transition-all duration-500 shadow-sm">
                    <Icon className="text-primary group-hover:text-white transition-colors" size={24} />
                </div>

                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors duration-300">
                    {name}
                </h3>

                <p className="text-sm text-gray-600 leading-relaxed mb-6">
                    {description}
                </p>

                {/* Points Section */}
                <div
                    className={`space-y-3 transition-all duration-500 ease-in-out overflow-hidden ${isExpanded ? 'max-h-60 opacity-100 mb-6' : 'max-h-0 opacity-0'
                        }`}
                >
                    <div className="pt-4 border-t border-gray-100">
                        <p className="text-xs font-bold text-gray-400 uppercase tracking-wider mb-3">Why Choose This Service?</p>
                        {points.map((point, index) => (
                            <div key={index} className="flex items-center space-x-2">
                                <CheckCircle2 className="text-primary flex-shrink-0" size={14} />
                                <span className="text-sm text-gray-700 font-medium">{point}</span>
                            </div>
                        ))}
                    </div>
                </div>

                <button
                    onClick={() => setIsExpanded(!isExpanded)}
                    className="mt-auto inline-flex items-center text-sm font-bold text-primary group/btn hover:text-red-700 transition-colors"
                >
                    <span className="relative">
                        {isExpanded ? 'Show Less' : 'Learn More'}
                        <span className="absolute -bottom-0.5 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover/btn:w-full" />
                    </span>
                    <span className={`ml-2 transform transition-transform duration-300 ${isExpanded ? 'rotate-180' : 'group-hover/btn:translate-x-1'}`}>
                        {isExpanded ? '↑' : '→'}
                    </span>
                </button>
            </div>
        </div>
    );
};

export default ServiceCard;
