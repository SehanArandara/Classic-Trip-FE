import React from 'react';
import KSAPageLayout from '../components/ksa/KSAPageLayout';
import SubPageHero from '../components/ksa/SubPageHero';
import KSAServices from '../components/ksa/KSAServices';
import { packages } from '../data/data';
import { MapPin, Clock, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StickyTripPlanner from '../components/common/StickyTripPlanner';
import SubPageNavbar from '../components/ksa/SubPageNavbar';

const PackageSlider = ({ title, description, packages, seeAllLink }) => {
    const scrollRef = React.useRef(null);

    const scroll = (direction) => {
        if (scrollRef.current) {
            const { scrollLeft, clientWidth } = scrollRef.current;
            const scrollTo = direction === 'left'
                ? scrollLeft - clientWidth / 1.5
                : scrollLeft + clientWidth / 1.5;
            scrollRef.current.scrollTo({ left: scrollTo, behavior: 'smooth' });
        }
    };

    return (
        <div className="space-y-6">
            {/* Header with Title and Buttons */}
            <div className="flex flex-col md:flex-row md:items-start justify-between gap-4">
                <div className="flex-grow">
                    <h2 className="text-3xl font-bold text-gray-900 mb-2">
                        {title}
                    </h2>
                    <p className="text-gray-600">{description}</p>
                </div>

                {/* Navigation Buttons Row - Only See All Button now */}
                <div className="flex items-center gap-4">
                    {seeAllLink && (
                        <Link
                            to={seeAllLink}
                            className="flex items-center space-x-2 px-6 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-all text-sm"
                        >
                            <span>See All</span>
                            <ArrowRight size={16} />
                        </Link>
                    )}
                </div>
            </div>

            {/* Slider Container */}
            <div className="relative group/slider">
                {/* Navigation Buttons - Positioned on sides */}
                <button
                    onClick={() => scroll('left')}
                    className="absolute left-2 top-[120px] -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 text-gray-900 hover:bg-primary hover:text-white transition-all shadow-xl border border-gray-100 hidden md:flex items-center justify-center opacity-70 group-hover/slider:opacity-100"
                    aria-label="Scroll left"
                >
                    <ChevronLeft size={24} />
                </button>

                <button
                    onClick={() => scroll('right')}
                    className="absolute right-2 top-[120px] -translate-y-1/2 z-10 p-3 rounded-full bg-white/90 text-gray-900 hover:bg-primary hover:text-white transition-all shadow-xl border border-gray-100 hidden md:flex items-center justify-center opacity-70 group-hover/slider:opacity-100"
                    aria-label="Scroll right"
                >
                    <ChevronRight size={24} />
                </button>
                {/* Scrollable Container */}
                <div
                    ref={scrollRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide pb-4 snap-x px-2"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {packages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="flex-shrink-0 w-[280px] md:w-[320px] bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col h-full snap-start"
                        >
                            <div className="relative h-48 overflow-hidden">
                                <img
                                    src={pkg.image}
                                    alt={pkg.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 right-4 bg-primary text-white px-3 py-1.5 rounded-full font-bold shadow-lg text-xs">
                                    {pkg.price}
                                </div>
                            </div>

                            <div className="p-5 flex flex-col flex-grow">
                                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary transition-colors line-clamp-1">
                                    {pkg.title}
                                </h3>

                                <div className="flex items-center text-gray-500 mb-2 text-xs">
                                    <MapPin size={14} className="mr-2" />
                                    <span>{pkg.destination}</span>
                                </div>

                                <div className="flex items-center text-gray-500 mb-4 text-xs">
                                    <Clock size={14} className="mr-2" />
                                    <span>{pkg.duration}</span>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-2 text-sm flex-grow">
                                    {pkg.description}
                                </p>

                                <Link
                                    to={`/package/${pkg.id}`}
                                    className="w-full flex items-center justify-center space-x-2 bg-gray-900 hover:bg-primary text-white font-semibold py-2.5 rounded-lg transition-colors mt-auto text-sm"
                                >
                                    <span>View Details</span>
                                    <ArrowRight size={16} />
                                </Link>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
            <style>{`.scrollbar-hide::-webkit-scrollbar { display: none; }`}</style>
        </div>
    );
};

const VisitSaudi = () => {
    const saudiPackages = packages.filter(pkg => pkg.subType === 'Visit Saudi');

    const scrollToPackages = () => {
        const element = document.getElementById('packages-grid');
        if (element) {
            element.scrollIntoView({ behavior: 'smooth' });
        }
    };

    const Hero = (
        <SubPageHero
            title={<>Visit <span className="text-primary">Saudi</span></>}
            subtitle="Discover the Kingdom's rich heritage, stunning landscapes, and modern marvels. From ancient Al Ula to the vibrant streets of Riyadh."
            image="https://images.unsplash.com/photo-1591608971362-f08b2a75731a?w=1920&q=80"
            onExploreClick={scrollToPackages}
        />
    );

    const sections = [
        {
            title: "Experiences",
            description: "Experience diverse landscapes and rich culture  in Saudi Arabia.",
            packages: saudiPackages.filter(pkg => pkg.ksaCategory === 'Discover Saudi Arabia'),
            seeAllLink: "/ksa/visit-saudi/experiences"
        },
        {
            title: "Events",
            description: "Discover a vibrant calendar of entertainment and events year-round.",
            packages: saudiPackages.filter(pkg => pkg.ksaCategory === 'Entertainment & Events'),
            seeAllLink: "/ksa/visit-saudi/events"
        },
        {
            title: "Spiritual Journeys",
            description: "Spiritual journeys and sacred experiences in the heart of the Kingdom.",
            packages: saudiPackages.filter(pkg => pkg.ksaCategory === 'Makkah, Madinah & Beyond'),
            seeAllLink: "/ksa/visit-saudi/spiritual-journeys"
        }
    ];

    const PackagesGrid = (
        <div id="packages-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Content - Packages */}
            <div className="lg:col-span-8 space-y-16 overflow-hidden">
                {sections.map((section, idx) => (
                    <div key={idx} className="scroll-mt-24" id={section.title.toLowerCase().replace(/,/g, '').replace(/\s+/g, '-')}>
                        <PackageSlider
                            title={section.title}
                            description={section.description}
                            packages={section.packages}
                            seeAllLink={section.seeAllLink}
                        />
                    </div>
                ))}
            </div>

            {/* Sidebar - Sticky Form */}
            <div className="lg:col-span-4 sticky top-24">
                <StickyTripPlanner pageType="saudi" />
            </div>
        </div>
    );

    return (
        <KSAPageLayout
            pageName="Visit Saudi"
            breadcrumbPath={[
                { label: 'KSA', href: '/ksa' },
                { label: 'Visit Saudi', isActive: true }
            ]}
            hero={Hero}
            packages={PackagesGrid}
            services={<KSAServices />}
            navbar={<SubPageNavbar pageType="saudi" />}
            pageType="visit-saudi"
        />
    );
};

export default VisitSaudi;
