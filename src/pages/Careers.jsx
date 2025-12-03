import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import { jobPositions } from '../data/data';
import { Search, MapPin, Briefcase, Clock, Calendar, ArrowRight } from 'lucide-react';

const Careers = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');

    // Filter only open positions and by search term
    const filteredJobs = jobPositions.filter(job => {
        const matchesSearch = job.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.department.toLowerCase().includes(searchTerm.toLowerCase()) ||
            job.location.toLowerCase().includes(searchTerm.toLowerCase());
        const isOpen = job.status === 'open';
        return matchesSearch && isOpen;
    });

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary to-red-700 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Join Our <span className="text-white/90">Team</span>
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto mb-8">
                        Build your career with Classic Trip and help create unforgettable travel experiences for people around the world.
                    </p>
                    <div className="flex items-center justify-center space-x-4 text-white/90 text-sm">
                        <div className="flex items-center">
                            <Briefcase size={18} className="mr-2" />
                            <span>{filteredJobs.length} Open Positions</span>
                        </div>
                        <div className="hidden md:flex items-center">
                            <MapPin size={18} className="mr-2" />
                            <span>Multiple Locations</span>
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <Breadcrumb
                path={[
                    { label: 'Careers', isActive: true }
                ]}
                theme="light"
            />

            {/* Search Section */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="relative max-w-2xl mx-auto">
                        <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                        <input
                            type="text"
                            placeholder="Search by job title, department, or location..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                            className="w-full pl-12 pr-4 py-4 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent text-lg"
                        />
                    </div>
                    <div className="mt-4 text-center text-sm text-gray-600">
                        Showing {filteredJobs.length} open {filteredJobs.length === 1 ? 'position' : 'positions'}
                    </div>
                </div>
            </div>

            {/* Job Listings */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {filteredJobs.length > 0 ? (
                    <div className="space-y-6">
                        {filteredJobs.map((job) => (
                            <div
                                key={job.id}
                                onClick={() => navigate(`/careers/${job.id}`)}
                                className="bg-white border border-gray-200 rounded-xl p-6 hover:shadow-hover transition-all duration-300 cursor-pointer group"
                            >
                                <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                                    <div className="flex-1">
                                        <div className="flex items-start justify-between mb-3">
                                            <div>
                                                <h3 className="text-2xl font-bold text-gray-900 group-hover:text-primary transition-colors mb-2">
                                                    {job.title}
                                                </h3>
                                                <div className="flex flex-wrap items-center gap-4 text-sm text-gray-600">
                                                    <div className="flex items-center">
                                                        <Briefcase size={16} className="mr-2" />
                                                        <span>{job.department}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <MapPin size={16} className="mr-2" />
                                                        <span>{job.location}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Clock size={16} className="mr-2" />
                                                        <span>{job.type}</span>
                                                    </div>
                                                    <div className="flex items-center">
                                                        <Calendar size={16} className="mr-2" />
                                                        <span>Posted {job.postedDate}</span>
                                                    </div>
                                                </div>
                                            </div>
                                            <div className="ml-4 flex-shrink-0">
                                                <span className="inline-flex items-center px-3 py-1 rounded-full text-xs font-semibold bg-green-100 text-green-800">
                                                    Open
                                                </span>
                                            </div>
                                        </div>

                                        <p className="text-gray-600 mb-4 line-clamp-2">
                                            {job.description}
                                        </p>

                                        <div className="flex items-center justify-between">
                                            <div className="text-sm text-gray-500">
                                                <span className="font-semibold">Experience:</span> {job.experience}
                                            </div>
                                            <button className="flex items-center space-x-2 text-primary font-semibold hover:underline group-hover:translate-x-1 transition-transform">
                                                <span>View Details</span>
                                                <ArrowRight size={16} />
                                            </button>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-gray-400 mb-4">
                            <Search size={64} className="mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No open positions found</h3>
                        <p className="text-gray-600">Try adjusting your search or check back later for new opportunities.</p>
                    </div>
                )}
            </div>

            {/* Why Join Us Section */}
            <div className="bg-gray-50 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-12">
                        <h2 className="text-3xl font-bold text-gray-900 mb-4">Why Join Classic Trip?</h2>
                        <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                            We offer more than just a job - we offer a career in an exciting and growing industry.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <Briefcase className="text-primary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Career Growth</h3>
                            <p className="text-gray-600">
                                Continuous learning opportunities and clear career progression paths.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <MapPin className="text-primary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Travel Benefits</h3>
                            <p className="text-gray-600">
                                Exclusive travel discounts and opportunities to explore the world.
                            </p>
                        </div>

                        <div className="bg-white p-6 rounded-xl border border-gray-200">
                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center mb-4">
                                <Clock className="text-primary" size={24} />
                            </div>
                            <h3 className="text-xl font-bold text-gray-900 mb-2">Work-Life Balance</h3>
                            <p className="text-gray-600">
                                Flexible working arrangements and generous time-off policies.
                            </p>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default Careers;
