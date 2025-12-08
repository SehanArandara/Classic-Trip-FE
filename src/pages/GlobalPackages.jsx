import React from 'react';
import KSAPageLayout from '../components/ksa/KSAPageLayout';
import SubPageHero from '../components/ksa/SubPageHero';
import KSAServices from '../components/ksa/KSAServices';
import { packages } from '../data/data';
import { MapPin, Clock, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StickyTripPlanner from '../components/common/StickyTripPlanner';
import SubPageNavbar from '../components/ksa/SubPageNavbar';

const GlobalPackages = () => {
    const globalPackages = packages.filter(pkg => pkg.subType === 'Global Packages');

    const scrollToPackages = () => {
        const element = document.getElementById('packages-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const Hero = (
        <SubPageHero
            title={<>Global <span className="text-primary">Holidays</span></>}
            subtitle="Explore our curated collection of international destinations. From the Swiss Alps to the beaches of Bali, your next adventure awaits."
            image="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=1920&q=80"
            onExploreClick={scrollToPackages}
        />
    );

    const PackagesGrid = (
        <div id="packages-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Content - Packages */}
            <div className="lg:col-span-8">
                <div className="mb-8">
                    <h2 className="text-3xl font-bold text-gray-900 mb-4">
                        Featured <span className="text-primary">Destinations</span>
                    </h2>
                    <p className="text-gray-600">Handpicked international packages just for you</p>
                </div>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {globalPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group"
                        >
                            <div className="relative h-64 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-white px-4 py-2 rounded-full font-bold shadow-lg">
                                    {pkg.price}
                                </div>
                            </div>

                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors">
                                    {pkg.title}
                                </h3>

                                <div className="flex items-center text-gray-600 mb-2">
                                    <MapPin size={16} className="mr-2" />
                                    <span className="text-sm">{pkg.destination}</span>
                                </div>

                                <div className="flex items-center text-gray-600 mb-4">
                                    <Clock size={16} className="mr-2" />
                                    <span className="text-sm">{pkg.duration}</span>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-2 text-sm">
                                    {pkg.description}
                                </p>

                                <Link
                                    to={`/package/${pkg.id}`}
                                    className="w-full flex items-center justify-center space-x-2 bg-gray-900 hover:bg-primary text-white font-semibold py-3 rounded-lg transition-colors"
                                >
                                    <span>View Details</span>
                                    <ArrowRight size={18} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>

            {/* Sidebar - Sticky Form */}
            <div className="lg:col-span-4 sticky top-24">
                <StickyTripPlanner pageType="global" />
            </div>
        </div>
    );

    return (
        <KSAPageLayout
            pageName="Global Packages"
            breadcrumbPath={[
                { label: 'KSA', href: '/ksa' },
                { label: 'Global Packages', isActive: true }
            ]}
            hero={Hero}
            packages={PackagesGrid}
            services={<KSAServices />}
            navbar={<SubPageNavbar pageType="global" />}
        />
    );
};

export default GlobalPackages;
