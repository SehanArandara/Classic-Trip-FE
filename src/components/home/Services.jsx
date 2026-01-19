import { Plane, Globe, Hotel, Umbrella, Briefcase, Landmark } from 'lucide-react';
import ServiceCard from '../common/ServiceCard';
import { services } from '../../data/data';

const iconMap = {
    Plane,
    Globe,
    Hotel,
    Umbrella,
    Briefcase,
    Landmark
};

const Services = () => {
    return (
        <section id="services" className="py-12 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl font-bold text-gray-900 mb-3">
                        Our <span className="text-primary">Services</span>
                    </h2>
                    <p className="text-base text-gray-600 max-w-2xl mx-auto">
                        Comprehensive travel solutions tailored to your needs. We handle everything
                        from planning to execution, ensuring a seamless journey.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4">
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
