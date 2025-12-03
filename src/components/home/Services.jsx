import React from 'react';
import { FileText, Hotel, Plane, Car, Shield, Users, Coffee, Ship, Train, Briefcase, AlertTriangle, Bell } from 'lucide-react';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/data';

const iconMap = {
    FileText,
    Hotel,
    Plane,
    Car,
    Shield,
    Users,
    Coffee,
    Ship,
    Train,
    Briefcase,
    AlertTriangle,
    Bell
};

const Services = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Comprehensive travel solutions tailored to your needs. We handle everything
                        from planning to execution, ensuring a seamless journey.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {services.map((service) => {
                        const Icon = iconMap[service.icon];
                        return (
                            <ServiceCard
                                key={service.id}
                                icon={Icon}
                                name={service.name}
                                description={service.description}
                            />
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Services;
