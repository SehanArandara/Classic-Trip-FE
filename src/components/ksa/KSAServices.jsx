import { Plane, Globe, Hotel, Umbrella, Briefcase, Landmark, HelpCircle } from 'lucide-react';
import ServiceCard from '../common/ServiceCard';
import { ksaServices } from '../../data/data';

const iconMap = {
    Plane,
    Globe,
    Hotel,
    Umbrella,
    Briefcase,
    Landmark
};

const KSAServices = () => {
    return (
        <section id="services" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Our <span className="text-primary">KSA Services</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Specialized services designed for travelers in Saudi Arabia.
                        From Umrah packages to corporate travel, we've got you covered.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {ksaServices.map((service) => {
                        const Icon = iconMap[service.icon] || HelpCircle;
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

export default KSAServices;
