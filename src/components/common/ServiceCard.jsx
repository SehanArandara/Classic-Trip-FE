import React from 'react';

const ServiceCard = ({ icon: Icon, name, description }) => {
    return (
        <div className="bg-white rounded-xl p-8 border border-gray-200 hover:border-primary hover:shadow-hover transition-all duration-300 group cursor-pointer transform hover:-translate-y-1">
            <div className="w-16 h-16 bg-primary/10 rounded-lg flex items-center justify-center mb-6 group-hover:bg-primary transition-colors">
                <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
            </div>
            <h3 className="text-xl font-bold text-gray-900 mb-3">
                {name}
            </h3>
            <p className="text-gray-600 leading-relaxed">
                {description}
            </p>
        </div>
    );
};

export default ServiceCard;
