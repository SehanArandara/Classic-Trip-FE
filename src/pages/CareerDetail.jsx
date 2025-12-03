import React, { useState, useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import { jobPositions } from '../data/data';
import { MapPin, Briefcase, Clock, Calendar, Check, Upload, Mail, Phone, User, FileText, ArrowRight } from 'lucide-react';

const CareerDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const [showApplicationForm, setShowApplicationForm] = useState(false);
    const [formData, setFormData] = useState({
        fullName: '',
        email: '',
        phone: '',
        coverLetter: '',
        resume: null
    });
    const [fileName, setFileName] = useState('');

    const job = jobPositions.find(j => j.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!job) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Position Not Found</h2>
                    <Link to="/careers" className="text-primary hover:underline">Return to Careers</Link>
                </div>
            </div>
        );
    }

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({
            ...prev,
            [name]: value
        }));
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file) {
            setFormData(prev => ({
                ...prev,
                resume: file
            }));
            setFileName(file.name);
        }
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Application submitted:', formData);
        // Here you would typically send the data to your backend
        alert('Application submitted successfully! We will contact you soon.');
        setShowApplicationForm(false);
        setFormData({
            fullName: '',
            email: '',
            phone: '',
            coverLetter: '',
            resume: null
        });
        setFileName('');
    };

    // Get related jobs (same department, exclude current)
    const relatedJobs = jobPositions
        .filter(j => j.department === job.department && j.id !== job.id && j.status === 'open')
        .slice(0, 3);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary to-red-700 py-16">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="flex items-center justify-between mb-6">
                        <span className={`inline-flex items-center px-4 py-2 rounded-full text-sm font-semibold ${job.status === 'open'
                                ? 'bg-green-100 text-green-800'
                                : 'bg-gray-100 text-gray-800'
                            }`}>
                            {job.status === 'open' ? 'Open Position' : 'Position Closed'}
                        </span>
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4">{job.title}</h1>
                    <div className="flex flex-wrap items-center gap-6 text-white/90 text-sm md:text-base">
                        <div className="flex items-center">
                            <Briefcase size={20} className="mr-2" />
                            {job.department}
                        </div>
                        <div className="flex items-center">
                            <MapPin size={20} className="mr-2" />
                            {job.location}
                        </div>
                        <div className="flex items-center">
                            <Clock size={20} className="mr-2" />
                            {job.type}
                        </div>
                        <div className="flex items-center">
                            <Calendar size={20} className="mr-2" />
                            Posted {job.postedDate}
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <Breadcrumb
                path={[
                    { label: 'Careers', href: '/careers' },
                    { label: job.title, isActive: true }
                ]}
                theme="light"
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2 space-y-8">
                        {/* Job Description */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Job Description</h2>
                            <p className="text-gray-600 leading-relaxed text-lg">
                                {job.description}
                            </p>
                        </section>

                        {/* Responsibilities */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Key Responsibilities</h2>
                            <ul className="space-y-3">
                                {job.responsibilities.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="text-green-500 mr-3 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Requirements */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Requirements</h2>
                            <ul className="space-y-3">
                                {job.requirements.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="text-primary mr-3 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Benefits */}
                        <section>
                            <h2 className="text-2xl font-bold text-gray-900 mb-4">Benefits</h2>
                            <ul className="space-y-3">
                                {job.benefits.map((item, index) => (
                                    <li key={index} className="flex items-start">
                                        <Check className="text-blue-500 mr-3 flex-shrink-0 mt-1" size={20} />
                                        <span className="text-gray-600">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </section>

                        {/* Application Form */}
                        {showApplicationForm && job.status === 'open' && (
                            <section className="bg-gray-50 rounded-xl p-8 border border-gray-200">
                                <h2 className="text-2xl font-bold text-gray-900 mb-6">Apply for this Position</h2>
                                <form onSubmit={handleSubmit} className="space-y-6">
                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Full Name *
                                        </label>
                                        <div className="relative">
                                            <User className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="text"
                                                name="fullName"
                                                value={formData.fullName}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="John Doe"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Email Address *
                                        </label>
                                        <div className="relative">
                                            <Mail className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="email"
                                                name="email"
                                                value={formData.email}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="john@example.com"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Phone Number *
                                        </label>
                                        <div className="relative">
                                            <Phone className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                                            <input
                                                type="tel"
                                                name="phone"
                                                value={formData.phone}
                                                onChange={handleInputChange}
                                                required
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="+966 XX XXX XXXX"
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Cover Letter *
                                        </label>
                                        <div className="relative">
                                            <FileText className="absolute left-3 top-3 text-gray-400" size={20} />
                                            <textarea
                                                name="coverLetter"
                                                value={formData.coverLetter}
                                                onChange={handleInputChange}
                                                required
                                                rows={6}
                                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                                placeholder="Tell us why you're a great fit for this role..."
                                            />
                                        </div>
                                    </div>

                                    <div>
                                        <label className="block text-sm font-medium text-gray-700 mb-2">
                                            Upload Resume/CV *
                                        </label>
                                        <div className="relative">
                                            <input
                                                type="file"
                                                id="resume"
                                                onChange={handleFileChange}
                                                accept=".pdf,.doc,.docx"
                                                required
                                                className="hidden"
                                            />
                                            <label
                                                htmlFor="resume"
                                                className="flex items-center justify-center w-full px-4 py-4 border-2 border-dashed border-gray-300 rounded-lg cursor-pointer hover:border-primary hover:bg-gray-50 transition-colors"
                                            >
                                                <Upload className="mr-2 text-gray-400" size={20} />
                                                <span className="text-gray-600">
                                                    {fileName || 'Click to upload your resume (PDF, DOC, DOCX)'}
                                                </span>
                                            </label>
                                        </div>
                                    </div>

                                    <div className="flex items-center space-x-4">
                                        <button
                                            type="submit"
                                            className="flex-1 bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                                        >
                                            <span>Submit Application</span>
                                            <ArrowRight size={20} />
                                        </button>
                                        <button
                                            type="button"
                                            onClick={() => setShowApplicationForm(false)}
                                            className="px-6 py-4 border border-gray-300 text-gray-700 font-semibold rounded-lg hover:bg-gray-50 transition-colors"
                                        >
                                            Cancel
                                        </button>
                                    </div>
                                </form>
                            </section>
                        )}
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-6">
                            {/* Apply Button */}
                            {job.status === 'open' && !showApplicationForm && (
                                <div className="bg-white rounded-xl shadow-xl border border-gray-100 p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Interested in this role?</h3>
                                    <button
                                        onClick={() => setShowApplicationForm(true)}
                                        className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all shadow-lg hover:shadow-xl transform hover:-translate-y-0.5 flex items-center justify-center space-x-2"
                                    >
                                        <span>Apply Now</span>
                                        <ArrowRight size={20} />
                                    </button>
                                    <p className="text-xs text-gray-500 mt-3 text-center">
                                        We'll review your application and get back to you soon.
                                    </p>
                                </div>
                            )}

                            {/* Job Details */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-lg font-bold text-gray-900 mb-4">Job Details</h3>
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Experience Required</p>
                                        <p className="font-semibold text-gray-900">{job.experience}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Employment Type</p>
                                        <p className="font-semibold text-gray-900">{job.type}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Department</p>
                                        <p className="font-semibold text-gray-900">{job.department}</p>
                                    </div>
                                    <div>
                                        <p className="text-sm text-gray-500 mb-1">Location</p>
                                        <p className="font-semibold text-gray-900">{job.location}</p>
                                    </div>
                                </div>
                            </div>

                            {/* Related Jobs */}
                            {relatedJobs.length > 0 && (
                                <div className="bg-gray-50 rounded-xl p-6">
                                    <h3 className="text-lg font-bold text-gray-900 mb-4">Related Positions</h3>
                                    <div className="space-y-4">
                                        {relatedJobs.map((relatedJob) => (
                                            <div
                                                key={relatedJob.id}
                                                onClick={() => navigate(`/careers/${relatedJob.id}`)}
                                                className="group cursor-pointer"
                                            >
                                                <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors mb-1">
                                                    {relatedJob.title}
                                                </h4>
                                                <p className="text-sm text-gray-600">{relatedJob.location}</p>
                                            </div>
                                        ))}
                                    </div>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div>
    );
};

export default CareerDetail;
