import React, { useEffect, useState } from 'react';
import { useLocation } from 'react-router-dom';
import SubPageNavbar from '../components/ksa/SubPageNavbar';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import {
    Users, Briefcase, Building2, Globe, Phone, Mail,
    User, MessageSquare, Send, CheckCircle, ArrowRight,
    Calendar, MapPin, Headphones, Plane
} from 'lucide-react';

const CorporateMicePage = () => {
    const location = useLocation();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        phone: '',
        company: '',
        inquiryType: 'mice',
        message: ''
    });
    const [isSubmitting, setIsSubmitting] = useState(false);
    const [isSubmitted, setIsSubmitted] = useState(false);

    useEffect(() => {
        // Scroll to hash if present
        if (location.hash) {
            const element = document.getElementById(location.hash.slice(1));
            if (element) {
                setTimeout(() => {
                    element.scrollIntoView({ behavior: 'smooth', block: 'start' });
                }, 100);
            }
        } else {
            window.scrollTo(0, 0);
        }
    }, [location]);

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData(prev => ({ ...prev, [name]: value }));
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setIsSubmitting(true);

        // Simulate form submission
        await new Promise(resolve => setTimeout(resolve, 1500));

        console.log('Form submitted:', formData);
        setIsSubmitting(false);
        setIsSubmitted(true);

        // Reset form after 3 seconds
        setTimeout(() => {
            setIsSubmitted(false);
            setFormData({
                name: '',
                email: '',
                phone: '',
                company: '',
                inquiryType: 'mice',
                message: ''
            });
        }, 3000);
    };

    const miceFeatures = [
        { icon: Calendar, title: 'Event Planning', desc: 'Full-service event coordination from concept to execution' },
        { icon: MapPin, title: 'Venue Selection', desc: 'Access to premium venues worldwide' },
        { icon: Users, title: 'Group Travel', desc: 'Seamless logistics for groups of any size' },
        { icon: Globe, title: 'Global Reach', desc: 'Services available in 50+ countries' }
    ];

    const corporateFeatures = [
        { icon: Plane, title: 'Transport', desc: 'Flight bookings, transfers, and car rentals' },
        { icon: Building2, title: 'Accommodation', desc: 'Curated hotels for business travelers' },
        { icon: Headphones, title: '24/7 Support', desc: 'Round-the-clock helpline for travelers' },
        { icon: Briefcase, title: 'Travel Management', desc: 'Complete corporate travel solutions' }
    ];

    return (
        <div className="min-h-screen bg-gray-50 flex flex-col pt-32">
            <SubPageNavbar pageType="global" />

            {/* Hero Section */}
            <div className="relative h-[60vh] min-h-[500px] flex items-center justify-center overflow-hidden">
                <div className="absolute inset-0">
                    <img
                        src="https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=1920&q=80"
                        alt="Corporate & MICE Travel"
                        className="w-full h-full object-cover"
                    />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-black/50" />
                </div>

                <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center text-white">
                    <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold mb-6 animate-fade-in-up">
                        Corporate & <span className="text-primary">MICE</span> Travel
                    </h1>
                    <p className="text-lg md:text-xl text-gray-200 max-w-3xl mx-auto mb-8 animate-fade-in-up delay-100">
                        Elevate your business travel with world-class solutions tailored to your corporate objectives.
                    </p>

                    <div className="flex justify-center animate-fade-in-up delay-200">
                        <Breadcrumb
                            path={[
                                { label: 'KSA', href: '/ksa' },
                                { label: 'Global Packages', href: '/ksa/globalPackages' },
                                { label: 'Corporate & MICE', isActive: true }
                            ]}
                            theme="dark"
                            position="relative"
                            className="bg-transparent"
                        />
                    </div>
                </div>
            </div>

            {/* MICE Section */}
            <section id="mice" className="py-20 bg-white scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Content */}
                        <div>
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                                <Users className="w-4 h-4 mr-2" />
                                MICE Services
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                Meetings, Incentives, Conferences & Exhibitions
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                Elevate your business gatherings with our specialized MICE (Meetings, Incentives, Conferences, and Exhibitions) services. From venue selection to group travel and on-site logistics, we ensure seamless, impactful experiences tailored to your corporate objectives—anywhere in the world.
                            </p>

                            <div className="bg-gradient-to-r from-primary to-red-600 text-white p-6 rounded-2xl mb-8">
                                <h3 className="text-xl font-bold mb-2">Plan Your MICE Program Now</h3>
                                <p className="text-white/90">Let us make your business occasions unforgettable!</p>
                            </div>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {miceFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-gray-50 rounded-xl hover:bg-gray-100 transition-colors">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                            <p className="text-sm text-gray-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>

                        {/* Image */}
                        <div className="relative">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1505373877841-8d25f7d46678?w=800&q=80"
                                    alt="MICE Event"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -left-6 bg-white p-6 rounded-2xl shadow-xl">
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                                        <Globe className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-gray-900">50+</p>
                                        <p className="text-gray-600">Countries Covered</p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Corporate Section */}
            <section id="corporate" className="py-20 bg-gray-50 scroll-mt-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="grid lg:grid-cols-2 gap-16 items-center">
                        {/* Image */}
                        <div className="relative order-2 lg:order-1">
                            <div className="aspect-[4/3] rounded-2xl overflow-hidden shadow-2xl">
                                <img
                                    src="https://images.unsplash.com/photo-1556761175-5973dc0f32e7?w=800&q=80"
                                    alt="Corporate Travel"
                                    className="w-full h-full object-cover"
                                />
                            </div>
                            {/* Floating Card */}
                            <div className="absolute -bottom-6 -right-6 bg-white p-6 rounded-2xl shadow-xl">
                                <div className="flex items-center space-x-4">
                                    <div className="w-14 h-14 bg-primary rounded-xl flex items-center justify-center">
                                        <Headphones className="w-7 h-7 text-white" />
                                    </div>
                                    <div>
                                        <p className="text-3xl font-bold text-gray-900">24/7</p>
                                        <p className="text-gray-600">Support Available</p>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Content */}
                        <div className="order-1 lg:order-2">
                            <div className="inline-flex items-center px-4 py-2 bg-primary/10 rounded-full text-primary font-semibold text-sm mb-6">
                                <Briefcase className="w-4 h-4 mr-2" />
                                Corporate Travel
                            </div>
                            <h2 className="text-4xl font-bold text-gray-900 mb-6">
                                World-Class Corporate Travel Management
                            </h2>
                            <p className="text-lg text-gray-600 leading-relaxed mb-8">
                                From transport, accommodation, local services and helpline support, we are ready to support you any way we can! We provide world-class corporate travel management services, backed by our expertise in the travel and tourism industry. We focus on your corporate travel, so you can focus on your business!
                            </p>

                            {/* Features Grid */}
                            <div className="grid grid-cols-2 gap-4">
                                {corporateFeatures.map((feature, index) => (
                                    <div key={index} className="flex items-start space-x-3 p-4 bg-white rounded-xl hover:shadow-md transition-all">
                                        <div className="w-10 h-10 bg-primary/10 rounded-lg flex items-center justify-center flex-shrink-0">
                                            <feature.icon className="w-5 h-5 text-primary" />
                                        </div>
                                        <div>
                                            <h4 className="font-semibold text-gray-900">{feature.title}</h4>
                                            <p className="text-sm text-gray-600">{feature.desc}</p>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* Call to Action / Contact Form Section */}
            <section id="contact" className="py-20 bg-white">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                    <div className="bg-gradient-to-br from-gray-900 to-gray-800 rounded-3xl overflow-hidden shadow-2xl">
                        <div className="grid lg:grid-cols-2">
                            {/* Left Side - Info */}
                            <div className="p-10 lg:p-16 text-white">
                                <h2 className="text-3xl lg:text-4xl font-bold mb-6">
                                    Ready to Elevate Your Business Travel?
                                </h2>
                                <p className="text-gray-300 text-lg mb-8">
                                    Fill in the form and our team will get back to you within 24 hours to discuss your corporate travel needs.
                                </p>

                                <div className="space-y-6">
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                            <Phone className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Call Us</p>
                                            <p className="text-lg font-semibold">+966 XX XXX XXXX</p>
                                        </div>
                                    </div>
                                    <div className="flex items-center space-x-4">
                                        <div className="w-12 h-12 bg-primary/20 rounded-xl flex items-center justify-center">
                                            <Mail className="w-6 h-6 text-primary" />
                                        </div>
                                        <div>
                                            <p className="text-gray-400 text-sm">Email Us</p>
                                            <p className="text-lg font-semibold">corporate@classictrip.com</p>
                                        </div>
                                    </div>
                                </div>

                                {/* Decorative Elements */}
                                <div className="mt-12 flex space-x-4">
                                    <div className="w-20 h-1 bg-primary rounded-full"></div>
                                    <div className="w-10 h-1 bg-primary/50 rounded-full"></div>
                                    <div className="w-5 h-1 bg-primary/30 rounded-full"></div>
                                </div>
                            </div>

                            {/* Right Side - Form */}
                            <div className="bg-white p-10 lg:p-16">
                                {isSubmitted ? (
                                    <div className="h-full flex flex-col items-center justify-center text-center">
                                        <div className="w-20 h-20 bg-green-100 rounded-full flex items-center justify-center mb-6">
                                            <CheckCircle className="w-10 h-10 text-green-600" />
                                        </div>
                                        <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                        <p className="text-gray-600">We've received your inquiry and will contact you shortly.</p>
                                    </div>
                                ) : (
                                    <form onSubmit={handleSubmit} className="space-y-6">
                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Full Name *
                                                </label>
                                                <div className="relative">
                                                    <User className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="name"
                                                        value={formData.name}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="John Doe"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Email Address *
                                                </label>
                                                <div className="relative">
                                                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="email"
                                                        name="email"
                                                        value={formData.email}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="john@company.com"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div className="grid sm:grid-cols-2 gap-6">
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Phone Number *
                                                </label>
                                                <div className="relative">
                                                    <Phone className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="tel"
                                                        name="phone"
                                                        value={formData.phone}
                                                        onChange={handleInputChange}
                                                        required
                                                        placeholder="+966 XX XXX XXXX"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>
                                            <div>
                                                <label className="block text-sm font-medium text-gray-700 mb-2">
                                                    Company (Optional)
                                                </label>
                                                <div className="relative">
                                                    <Building2 className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                                                    <input
                                                        type="text"
                                                        name="company"
                                                        value={formData.company}
                                                        onChange={handleInputChange}
                                                        placeholder="Your Company"
                                                        className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all"
                                                    />
                                                </div>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Inquiry Type *
                                            </label>
                                            <div className="grid grid-cols-2 gap-4">
                                                <label className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.inquiryType === 'mice' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                                                    <input
                                                        type="radio"
                                                        name="inquiryType"
                                                        value="mice"
                                                        checked={formData.inquiryType === 'mice'}
                                                        onChange={handleInputChange}
                                                        className="sr-only"
                                                    />
                                                    <Users className={`w-5 h-5 mr-2 ${formData.inquiryType === 'mice' ? 'text-primary' : 'text-gray-400'}`} />
                                                    <span className={`font-medium ${formData.inquiryType === 'mice' ? 'text-primary' : 'text-gray-600'}`}>MICE</span>
                                                </label>
                                                <label className={`flex items-center justify-center p-4 border-2 rounded-xl cursor-pointer transition-all ${formData.inquiryType === 'corporate' ? 'border-primary bg-primary/5' : 'border-gray-200 hover:border-gray-300'}`}>
                                                    <input
                                                        type="radio"
                                                        name="inquiryType"
                                                        value="corporate"
                                                        checked={formData.inquiryType === 'corporate'}
                                                        onChange={handleInputChange}
                                                        className="sr-only"
                                                    />
                                                    <Briefcase className={`w-5 h-5 mr-2 ${formData.inquiryType === 'corporate' ? 'text-primary' : 'text-gray-400'}`} />
                                                    <span className={`font-medium ${formData.inquiryType === 'corporate' ? 'text-primary' : 'text-gray-600'}`}>Corporate</span>
                                                </label>
                                            </div>
                                        </div>

                                        <div>
                                            <label className="block text-sm font-medium text-gray-700 mb-2">
                                                Message *
                                            </label>
                                            <div className="relative">
                                                <MessageSquare className="absolute left-4 top-4 w-5 h-5 text-gray-400" />
                                                <textarea
                                                    name="message"
                                                    value={formData.message}
                                                    onChange={handleInputChange}
                                                    required
                                                    rows={4}
                                                    placeholder="Tell us about your requirements..."
                                                    className="w-full pl-12 pr-4 py-3 border border-gray-300 rounded-xl focus:ring-2 focus:ring-primary focus:border-transparent transition-all resize-none"
                                                />
                                            </div>
                                        </div>

                                        <button
                                            type="submit"
                                            disabled={isSubmitting}
                                            className="w-full flex items-center justify-center space-x-2 bg-primary hover:bg-red-700 text-white font-semibold py-4 rounded-xl transition-all disabled:opacity-70 disabled:cursor-not-allowed"
                                        >
                                            {isSubmitting ? (
                                                <>
                                                    <div className="w-5 h-5 border-2 border-white/30 border-t-white rounded-full animate-spin"></div>
                                                    <span>Submitting...</span>
                                                </>
                                            ) : (
                                                <>
                                                    <span>Submit Inquiry</span>
                                                    <Send className="w-5 h-5" />
                                                </>
                                            )}
                                        </button>
                                    </form>
                                )}
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            <Footer />
        </div>
    );
};

export default CorporateMicePage;
