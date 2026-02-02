import React, { useState, useMemo } from 'react';
import KSAPageLayout from '../components/ksa/KSAPageLayout';
import SubPageHero from '../components/ksa/SubPageHero';
import { packages } from '../data/data';
import { MapPin, Clock, ArrowRight, Search, ChevronLeft, ChevronRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import StickyTripPlanner from '../components/common/StickyTripPlanner';
import SubPageNavbar from '../components/ksa/SubPageNavbar';

const SaudiSpiritual = () => {
    const [searchQuery, setSearchQuery] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const packagesPerPage = 20;

    // Filter packages for 'Makkah, Madinah & Beyond' category
    const filteredPackages = useMemo(() => {
        return packages.filter(pkg =>
            pkg.subType === 'Visit Saudi' &&
            pkg.ksaCategory === 'Makkah, Madinah & Beyond' &&
            (pkg.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                pkg.destination.toLowerCase().includes(searchQuery.toLowerCase()))
        );
    }, [searchQuery]);

    // Pagination logic
    const totalPages = Math.ceil(filteredPackages.length / packagesPerPage);
    const indexOfLastPackage = currentPage * packagesPerPage;
    const indexOfFirstPackage = indexOfLastPackage - packagesPerPage;
    const currentPackages = filteredPackages.slice(indexOfFirstPackage, indexOfLastPackage);

    const handlePageChange = (pageNumber) => {
        setCurrentPage(pageNumber);
        window.scrollTo({ top: 500, behavior: 'smooth' });
    };

    const Hero = (
        <SubPageHero
            title={<>Spiritual <span className="text-secondary">Journeys</span></>}
            subtitle="Spiritual journeys and sacred experiences in the heart of the Kingdom. Perform Umrah with peace of mind and comfort."
            image="https://images.unsplash.com/photo-1591604466107-ec97de577aff?w=1920&q=80"
            onExploreClick={() => document.getElementById('packages-grid').scrollIntoView({ behavior: 'smooth' })}
        />
    );

    const PackagesContent = (
        <div id="packages-grid" className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-start">
            {/* Main Content */}
            <div className="lg:col-span-8">
                {/* Search Bar */}
                <div className="mb-8 relative">
                    <div className="relative">
                        <Search className="absolute left-4 top-1/2 transform -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search spiritual journeys..."
                            className="w-full pl-12 pr-4 py-4 bg-white border border-gray-200 rounded-2xl shadow-sm focus:ring-2 focus:ring-primary focus:border-transparent transition-all outline-none"
                            value={searchQuery}
                            onChange={(e) => {
                                setSearchQuery(e.target.value);
                                setCurrentPage(1);
                            }}
                        />
                    </div>
                </div>

                {/* Packages Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    {currentPackages.map((pkg) => (
                        <div
                            key={pkg.id}
                            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-xl transition-all duration-300 group flex flex-col h-full"
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

                {/* Pagination */}
                {totalPages > 1 && (
                    <div className="mt-12 flex justify-center items-center space-x-4">
                        <button
                            onClick={() => handlePageChange(currentPage - 1)}
                            disabled={currentPage === 1}
                            className="p-2 rounded-lg border border-gray-200 hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition-colors"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        {[...Array(totalPages)].map((_, i) => (
                            <button
                                key={i}
                                onClick={() => handlePageChange(i + 1)}
                                className={`w-10 h-10 rounded-lg font-semibold transition-colors ${currentPage === i + 1
                                        ? 'bg-primary text-white'
                                        : 'bg-white border border-gray-200 text-gray-600 hover:bg-gray-50'
                                    }`}
                            >
                                {i + 1}
                            </button>
                        ))}
                        <button
                            onClick={() => handlePageChange(currentPage + 1)}
                            disabled={currentPage === totalPages}
                            className="p-2 rounded-lg border border-gray-200 hover:bg-primary hover:text-white disabled:opacity-50 disabled:hover:bg-transparent disabled:hover:text-gray-400 transition-colors"
                        >
                            <ChevronRight size={20} />
                        </button>
                    </div>
                )}

                {filteredPackages.length === 0 && (
                    <div className="text-center py-20">
                        <p className="text-xl text-gray-500">No spiritual journeys found matching your search.</p>
                    </div>
                )}
            </div>

            {/* Sidebar */}
            <div className="lg:col-span-4 sticky top-24">
                <StickyTripPlanner pageType="saudi" />
            </div>
        </div>
    );

    return (
        <KSAPageLayout
            pageName="Spiritual Journeys"
            breadcrumbPath={[
                { label: 'KSA', href: '/ksa' },
                { label: 'Visit Saudi', href: '/ksa/visit-saudi' },
                { label: 'Spiritual Journeys', isActive: true }
            ]}
            hero={Hero}
            packages={PackagesContent}
            services={null}
            showBlog={false}
            showTestimonials={false}
            navbar={<SubPageNavbar pageType="visit-saudi" />}
            pageType="visit-saudi"
        />
    );
};

export default SaudiSpiritual;
