import React, { useState } from 'react';
import { Send, Mail, User, MessageSquare, Phone, MapPin } from 'lucide-react';
import { ksaContactOptions } from '../../data/data';

const KSAContact = ({ pageType = 'home' }) => {
    const contactInfo = {
        'global': {
            phone: '+966 56 654 9488',
            email: 'holiday@classictripksa.com',
            address: 'Building No. 3141, Anas Ibn Malik Street\nAl Malqa District, Unit No. 8292\nRiyadh 13521 – Kingdom of Saudi Arabia'
        },
        'visit-saudi': {
            phone: '+966 56 635 6488',
            email: 'visitsaudi@classictripksa.com',
            address: 'Building No. 3141, Anas Ibn Malik Street\nAl Malqa District, Unit No. 8292\nRiyadh 13521 – Kingdom of Saudi Arabia'
        },
        'home': {
            phone: '+966 566 549 488',
            email: 'travel@classictripksa.com',
            address: 'Building No. 3141, Anas Ibn Malik Street\nAl Malqa District, Unit No. 8292\nRiyadh 13521 – Kingdom of Saudi Arabia'
        }
    };

    const currentContact = contactInfo[pageType] || contactInfo['home'];

    const [formData, setFormData] = useState({
        intent: '',
        name: '',
        email: '',
        phone: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('KSA Contact Form submitted:', formData);
        // Future: Send to backend API
        alert(`Thank you! We'll contact you about your ${formData.intent === 'visit-saudi' ? 'Visit Saudi' : 'Global Holiday'} inquiry.`);
        setFormData({ intent: '', name: '', email: '', phone: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: CTA Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Ready to Start Your <span className="text-primary">Journey?</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Whether you're planning a global adventure or exploring the wonders of Saudi Arabia,
                            our expert team is here to create the perfect itinerary for you.
                        </p>

                        <div className="space-y-6">
                            <div className="flex items-start space-x-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Phone className="text-primary" size={24} />
                                </div>
                                <div>
                                    <div className="font-semibold">Call Us</div>
                                    <div className="text-sm text-gray-400">{currentContact.phone}</div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <Mail className="text-primary" size={24} />
                                </div>
                                <div>
                                    <div className="font-semibold">Email Us</div>
                                    <div className="text-sm text-gray-400">{currentContact.email}</div>
                                </div>
                            </div>

                            <div className="flex items-start space-x-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center flex-shrink-0">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <div className="font-semibold">Visit Us</div>
                                    <div className="text-sm text-gray-400 max-w-sm whitespace-pre-line">{currentContact.address}</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
                            {/* Intent Selector */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-3">
                                    What are you interested in?
                                </label>
                                <div className="space-y-3">
                                    {ksaContactOptions.map((option) => (
                                        <label
                                            key={option.id}
                                            className="flex items-center space-x-3 cursor-pointer group"
                                        >
                                            <input
                                                type="radio"
                                                name="intent"
                                                value={option.id}
                                                checked={formData.intent === option.id}
                                                onChange={handleChange}
                                                required
                                                className="w-5 h-5 text-primary focus:ring-primary"
                                            />
                                            <span className="text-gray-700 group-hover:text-primary transition-colors">
                                                {option.label}
                                            </span>
                                        </label>
                                    ))}
                                </div>
                            </div>

                            {/* Name */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Name
                                </label>
                                <div className="relative">
                                    <User className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="text"
                                        name="name"
                                        value={formData.name}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-gray-900"
                                        placeholder="Ahmed Al-Saud"
                                    />
                                </div>
                            </div>

                            {/* Email */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Email Address
                                </label>
                                <div className="relative">
                                    <Mail className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="email"
                                        name="email"
                                        value={formData.email}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-gray-900"
                                        placeholder="ahmed@example.com"
                                    />
                                </div>
                            </div>

                            {/* Phone */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Phone Number
                                </label>
                                <div className="relative">
                                    <Phone className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <input
                                        type="tel"
                                        name="phone"
                                        value={formData.phone}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-gray-900"
                                        placeholder="+966 5X XXX XXXX"
                                    />
                                </div>
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Your Message
                                </label>
                                <div className="relative">
                                    <MessageSquare className="absolute left-3 top-3 text-gray-400" size={18} />
                                    <textarea
                                        name="message"
                                        value={formData.message}
                                        onChange={handleChange}
                                        required
                                        rows="4"
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-gray-900 resize-none"
                                        placeholder="Tell us about your travel plans..."
                                    ></textarea>
                                </div>
                            </div>

                            {/* Submit Button */}
                            <button
                                type="submit"
                                className="w-full bg-primary hover:bg-red-700 text-white font-bold py-4 rounded-lg transition-all duration-300 flex items-center justify-center space-x-2 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                            >
                                <Send size={20} />
                                <span>Send Message</span>
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default KSAContact;
