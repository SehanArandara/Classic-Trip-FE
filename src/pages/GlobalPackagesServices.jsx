import React, { useEffect, useState } from 'react';
import SubPageNavbar from '../components/ksa/SubPageNavbar';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import { ksaServices } from '../data/data';
import {
    Plane, Globe, Hotel, Umbrella, Briefcase, Landmark,
    ArrowRight, X, HelpCircle
} from 'lucide-react';

const GlobalPackagesServices = () => {
    const [selectedService, setSelectedService] = useState(null);

    // Define iconMap explicitly
    const iconMap = {
        Plane,
        Globe,
        Hotel,
        Umbrella,
        Briefcase,
        Landmark
    };

    useEffect(() => {
        window.scrollTo(0, 0);
    }, []);

    const handleCloseModal = () => {
        setSelectedService(null);
    };

    // Using ksaServices for now, but this could be a specific list for Global Packages
    const mainServices = ksaServices;
    const otherServices = [];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-32">
            <SubPageNavbar pageType="global" />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1527668752968-14dc70a27c95?w=1920&q=80"
                        alt="Global Services Hero"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-black/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-5xl md:text-6xl font-bold mb-6 animate-fade-in-up">
                        Global <span className="text-primary">Services</span>
                    </h1>
                    <p className="text-xl md:text-2xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
                        World-class travel services for your international adventures.
                    </p>

                    {/* Breadcrumb positioned within Hero */}
                    <div className="flex justify-center animate-fade-in-up delay-200">
                        <Breadcrumb
                            path={[
                                { label: 'KSA', href: '/ksa' },
                                { label: 'Global Packages', href: '/ksa/globalPackages' },
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
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Our Services</h2>
                        <p className="text-gray-600 max-w-2xl mx-auto">Premium services for global travelers.</p>
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

                    {/* Other Services Grid */}
                    {otherServices.length > 0 && (
                        <>
                            <div className="text-center mb-12">
                                <h2 className="text-2xl font-bold text-gray-900 mb-4">Additional Services</h2>
                                <p className="text-gray-600 max-w-2xl mx-auto">More ways we can help you with your journey.</p>
                            </div>
                            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                                {otherServices.map((service) => {
                                    const Icon = iconMap[service.icon] || HelpCircle;
                                    return (
                                        <div
                                            key={service.id}
                                            className="bg-gray-50 rounded-xl p-6 border border-gray-100 flex items-start hover:bg-white hover:shadow-md transition-all duration-300"
                                        >
                                            <div className="w-12 h-12 bg-white rounded-lg flex items-center justify-center mr-4 shadow-sm flex-shrink-0">
                                                <Icon className="text-gray-600" size={24} />
                                            </div>
                                            <div>
                                                <h3 className="text-lg font-bold text-gray-900 mb-2">
                                                    {service.name}
                                                </h3>
                                                <p className="text-sm text-gray-600 leading-relaxed">
                                                    {service.description}
                                                </p>
                                            </div>
                                        </div>
                                    );
                                })}
                            </div>
                        </>
                    )}
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
                                <h4 className="font-semibold text-gray-900 mb-3 tracking-wide uppercase text-xs">Why Choose This Service?</h4>
                                <ul className="space-y-3">
                                    {(selectedService.points || []).map((point, index) => (
                                        <li key={index} className="flex items-start text-sm text-gray-700 font-medium">
                                            <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                                            {point}
                                        </li>
                                    ))}
                                    {(!selectedService.points || selectedService.points.length === 0) && (
                                        <>
                                            <li className="flex items-start text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                                                Global network of partners
                                            </li>
                                            <li className="flex items-start text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                                                24/7 international support
                                            </li>
                                            <li className="flex items-start text-sm text-gray-600">
                                                <span className="w-1.5 h-1.5 bg-primary rounded-full mt-1.5 mr-3 flex-shrink-0" />
                                                Competitive global rates
                                            </li>
                                        </>
                                    )}
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

export default GlobalPackagesServices;
