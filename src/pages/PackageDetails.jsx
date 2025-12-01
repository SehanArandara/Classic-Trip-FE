import React, { useEffect } from 'react';
import { useParams, Link } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';
import { packages } from '../data/data';
import { MapPin, Clock, Calendar, Check, Star, ArrowRight, ChevronRight, Home } from 'lucide-react';

const PackageDetails = () => {
    const { id } = useParams();

    // Find package in the consolidated list
    const pkg = packages.find(p => p.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!pkg) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Package Not Found</h2>
                    <Link to="/ksa" className="text-primary hover:underline">Return to KSA Home</Link>
                </div>
            </div>
        );
    }

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[60vh] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${pkg.image})` }}
                >
                    <div className="absolute inset-0 bg-black/50"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <h1 className="text-4xl md:text-6xl font-bold text-white mb-4">{pkg.title}</h1>
                    <div className="flex items-center space-x-6 text-white/90 text-lg">
                        <div className="flex items-center">
                            <MapPin size={20} className="mr-2" />
                            {pkg.destination}
                        </div>
                        <div className="flex items-center">
                            <Clock size={20} className="mr-2" />
                            {pkg.duration}
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-4">
                    <div className="flex items-center space-x-2 text-sm text-gray-600">
                        <Link to="/" className="hover:text-primary"><Home size={16} /></Link>
                        <ChevronRight size={16} />
                        <Link to="/ksa" className="hover:text-primary">KSA</Link>
                        <ChevronRight size={16} />
                        <span className="text-gray-900 font-medium">{pkg.title}</span>
                    </div>
                </div>
            </div>

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-12">
                        {/* Overview */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Overview</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {pkg.description}. Immerse yourself in the local culture, explore hidden gems,
                                and create unforgettable memories. Our carefully curated itinerary ensures you
                                experience the very best of {pkg.destination}.
                            </p>
                        </section>

                        {/* Highlights */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Trip Highlights</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                                {pkg.highlights.map((highlight, index) => (
                                    <div key={index} className="flex items-start space-x-3 bg-gray-50 p-4 rounded-lg">
                                        <div className="bg-primary/10 p-2 rounded-full">
                                            <Star size={16} className="text-primary" />
                                        </div>
                                        <span className="text-gray-700 font-medium">{highlight}</span>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Itinerary (Mock) */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">Itinerary</h2>
                            <div className="space-y-8 border-l-2 border-primary/20 ml-3 pl-8 relative">
                                {[1, 2, 3].map((day) => (
                                    <div key={day} className="relative">
                                        <div className="absolute -left-[41px] top-0 w-6 h-6 rounded-full bg-primary border-4 border-white shadow-sm"></div>
                                        <h3 className="text-lg font-bold text-gray-900 mb-2">Day {day}: Exploration & Adventure</h3>
                                        <p className="text-gray-600">
                                            Start your day with a delicious breakfast before heading out to explore the local landmarks.
                                            Enjoy a guided tour of the city's most famous sites and end the day with a traditional dinner.
                                        </p>
                                    </div>
                                ))}
                            </div>
                        </section>

                        {/* Inclusions */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-6">What's Included</h2>
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-y-3">
                                {['Premium Accommodation', 'Daily Breakfast', 'Airport Transfers', 'Guided Tours', 'Entrance Fees', '24/7 Support'].map((item, index) => (
                                    <div key={index} className="flex items-center space-x-3 text-gray-700">
                                        <Check size={18} className="text-green-500" />
                                        <span>{item}</span>
                                    </div>
                                ))}
                            </div>
                        </section>
                    </div>

                    {/* Sidebar Booking Card */}
                    <div className="lg:col-span-1">
                        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 p-8 sticky top-32">
                            <div className="mb-8">
                                <span className="text-gray-500 text-sm block mb-1">Starting from</span>
                                <div className="flex items-baseline">
                                    <span className="text-4xl font-bold text-primary">{pkg.price}</span>
                                    <span className="text-gray-500 ml-2">/ person</span>
                                </div>
                            </div>

                            <form className="space-y-4">
                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Date</label>
                                    <div className="relative">
                                        <Calendar className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                                        <input type="date" className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent" />
                                    </div>
                                </div>

                                <div>
                                    <label className="block text-sm font-medium text-gray-700 mb-1">Guests</label>
                                    <select className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent">
                                        <option>1 Person</option>
                                        <option>2 People</option>
                                        <option>3 People</option>
                                        <option>4+ People</option>
                                    </select>
                                </div>

                                <button type="button" className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-xl transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2">
                                    <span>Book Now</span>
                                    <ArrowRight size={20} />
                                </button>
                            </form>

                            <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                                <p className="text-sm text-gray-500 mb-2">Need help?</p>
                                <a href="tel:+966112345678" className="text-gray-900 font-bold hover:text-primary transition-colors">
                                    +966 11 234 5678
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default PackageDetails;
