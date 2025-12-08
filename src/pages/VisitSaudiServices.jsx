import React, { useEffect, useState } from 'react';
import SubPageNavbar from '../components/ksa/SubPageNavbar';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import { ksaServices } from '../data/data';
import {
    FileText, Hotel, Car, Shield, Briefcase, Landmark,
    ArrowRight, X, HelpCircle
} from 'lucide-react';

const VisitSaudiServices = () => {
    const [selectedService, setSelectedService] = useState(null);

    // Define iconMap explicitly
    const iconMap = {
        FileText,
        Hotel,
        Car,
        Shield,
        Briefcase,
        Landmark
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    // Using ksaServices for now
    const mainServices = ksaServices;
    const otherServices = [];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-32">
            <SubPageNavbar pageType="visit-saudi" />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&q=80"
                        alt="Visit Saudi Services Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                        Visit Saudi <span className="text-primary">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
                        Experience the Kingdom with our specialized local services and support.
                    </p>

                    {/* Breadcrumb positioned within Hero */}
                    <div className="flex justify-center animate-fade-in-up delay-200">
                        <Breadcrumb
                            path={[
                                { label: 'KSA', href: '/ksa' },
                                { label: 'Visit Saudi', href: '/ksa/visit-saudi' },
                                { label: 'Services', isActive: true }
                            ]}
                            theme="dark"
                            position="relative"
                            className="bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* Main Services Grid */}
            <div className="flex-grow py-20 px-4 sm:px-6 lg:px-8">
                <div className="max-w-7xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Local Expertise</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">From Umrah to desert adventures, we provide the support you need.</p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-20">
                        {mainServices.map((service) => {
                            const Icon = iconMap[service.icon] || HelpCircle;
                            return (
                                <div
                                    key={service.id}
                                    onClick={() => setSelectedService(service)}
                                    className="bg-white rounded-2xl p-8 shadow-lg hover:shadow-2xl transition-all duration-300 group border border-gray-100 hover:border-primary/20 flex flex-col cursor-pointer transform hover:-translate-y-1"
                                >
                                    <div className="w-16 h-16 bg-primary/5 rounded-2xl flex items-center justify-center mb-6 group-hover:bg-primary group-hover:scale-110 transition-all duration-300">
                                        <Icon className="text-primary group-hover:text-white transition-colors" size={32} />
                                    </div>

                                    <h3 className="text-2xl font-bold text-gray-900 mb-4 group-hover:text-primary transition-colors">
                                        {service.name}
                                    </h3>

                                    <p className="text-gray-600 leading-relaxed mb-6 flex-grow">
                                        {service.description}
                                    </p>

                                    <div className="flex items-center text-primary font-semibold group-hover:translate-x-2 transition-transform">
                                        <span className="mr-2">Learn More</span>
                                        <ArrowRight size={18} />
                                    </div>
                                </div>
                            );
                        })}
                    </div>
                </div>
            </div>

            {/* Service Detail Modal */}
            {selectedService && (
                <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/60 backdrop-blur-sm animate-fade-in">
                    <div
                        className="bg-white rounded-2xl w-full max-w-lg relative shadow-2xl animate-scale-up overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Modal Header */}
                        <div className="bg-primary p-6 flex items-center justify-between">
                            <div className="flex items-center space-x-4">
                                <div className="w-12 h-12 bg-white/20 rounded-xl flex items-center justify-center backdrop-blur-md">
                                    {(() => {
                                        const Icon = iconMap[selectedService.icon] || HelpCircle;
                                        return <Icon className="text-white" size={24} />;
                                    })()}
                                </div>
                                <h3 className="text-2xl font-bold text-white">
                                    {selectedService.name}
                                </h3>
                            </div>
                            <button
                                onClick={handleCloseModal}
                                className="text-white/80 hover:text-white hover:bg-white/20 p-2 rounded-full transition-all"
                            >
                                <X size={24} />
                            </button>
                        </div>

                        {/* Modal Content */}
                        <div className="p-8">
                            <p className="text-gray-600 text-lg leading-relaxed mb-6">
                                {selectedService.description}
                            </p>

                            <div className="bg-gray-50 rounded-xl p-6 border border-gray-100">
                                <h4 className="font-semibold text-gray-900 mb-3">Why Choose This Service?</h4>
                                <ul className="space-y-2">
                                    <li className="flex items-start text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                        Deep local knowledge and connections
                                    </li>
                                    <li className="flex items-start text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                        Dedicated on-ground support team
                                    </li>
                                    <li className="flex items-start text-sm text-gray-600">
                                        <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-2 flex-shrink-0" />
                                        Exclusive access to local experiences
                                    </li>
                                </ul>
                            </div>

                            <div className="mt-8 flex justify-end">
                                <button
                                    onClick={handleCloseModal}
                                    className="px-6 py-2.5 bg-gray-100 text-gray-700 font-semibold rounded-lg hover:bg-gray-200 transition-colors"
                                >
                                    Close
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            )}

            <Footer />
        </div>
    );
};

export default VisitSaudiServices;
