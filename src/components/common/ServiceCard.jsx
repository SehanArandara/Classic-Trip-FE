import React from 'react';

const ServiceCard = ({ icon: Icon, name, description }) => {
    return (
        <div className="bg-white rounded-xl p-5 border border-gray-200 hover:border-primary hover:shadow-hover transition-all duration-300 group cursor-pointer transform hover:-translate-y-1 h-full">
            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4 group-hover:bg-primary transition-colors">
                <Icon className="text-primary group-hover:text-white transition-colors" size={24} />
            </div>
            <h3 className="text-lg font-bold text-gray-900 mb-2">
                {name}
            </h3>
            <p className="text-sm text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
