import React from 'react';

const ServiceCard = ({ icon: Icon, name, description, onClick }) => {
    return (
        <div
            onClick={onClick}
            className={`bg-white rounded-xl p-4 border border-gray-200 hover:border-primary hover:shadow-hover transition-all duration-300 group ${onClick ? 'cursor-pointer' : 'cursor-default'} transform hover:-translate-y-1 h-full flex flex-col`}
        >
            <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center mb-3 group-hover:bg-primary transition-colors">
                <Icon className="text-primary group-hover:text-white transition-colors" size={20} />
            </div>
            <h3 className="text-base font-bold text-gray-900 mb-1">
                {name}
            </h3>
            <p className="text-xs text-gray-600 leading-relaxed mb-3 flex-grow">
                {description}
            </p>
            {onClick && (
                <div className="text-xs font-semibold text-primary flex items-center mt-auto">
                    Learn More <span className="ml-1">→</span>
                </div>
            )}
        </div>
    );
};

export default ServiceCard;
