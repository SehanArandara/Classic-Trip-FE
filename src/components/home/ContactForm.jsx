import React, { useState } from 'react';
import { Send, MapPin, Mail, User, MessageSquare } from 'lucide-react';
import { destinations } from '../../data/data';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        destination: '',
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
        console.log('Form submitted:', formData);
        // Future: Send to backend API
        alert('Thank you! We will contact you soon.');
        setFormData({ name: '', email: '', destination: '', message: '' });
    };

    return (
        <section id="contact" className="py-20 bg-gradient-to-br from-gray-900 to-gray-800 text-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: CTA Text */}
                    <div>
                        <h2 className="text-4xl md:text-5xl font-bold mb-6">
                            Plan Your <span className="text-primary">Dream Journey</span>
                        </h2>
                        <p className="text-lg text-gray-300 mb-8 leading-relaxed">
                            Ready to embark on your next adventure? Share your travel dreams with us,
                            and our expert team will craft a personalized itinerary just for you.
                        </p>

                        <div className="space-y-4">
                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <MapPin className="text-primary" size={24} />
                                </div>
                                <div>
                                    <div className="font-semibold">50+ Destinations</div>
                                    <div className="text-sm text-gray-400">Worldwide coverage</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <User className="text-primary" size={24} />
                                </div>
                                <div>
                                    <div className="font-semibold">Expert Consultants</div>
                                    <div className="text-sm text-gray-400">Personalized service</div>
                                </div>
                            </div>

                            <div className="flex items-center space-x-3">
                                <div className="w-12 h-12 bg-primary/20 rounded-lg flex items-center justify-center">
                                    <Send className="text-primary" size={24} />
                                </div>
                                <div>
                                    <div className="font-semibold">24/7 Support</div>
                                    <div className="text-sm text-gray-400">We're always here for you</div>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right: Contact Form */}
                    <div className="bg-white rounded-2xl p-8 shadow-2xl">
                        <h3 className="text-2xl font-bold text-gray-900 mb-6">Get in Touch</h3>

                        <form onSubmit={handleSubmit} className="space-y-5">
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
                                        placeholder="John Doe"
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
                                        placeholder="john@example.com"
                                    />
                                </div>
                            </div>

                            {/* Destination */}
                            <div>
                                <label className="block text-sm font-semibold text-gray-700 mb-2">
                                    Interested Destination
                                </label>
                                <div className="relative">
                                    <MapPin className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-400" size={18} />
                                    <select
                                        name="destination"
                                        value={formData.destination}
                                        onChange={handleChange}
                                        required
                                        className="w-full pl-11 pr-4 py-3 border-2 border-gray-300 rounded-lg focus:border-primary focus:outline-none text-gray-900 appearance-none bg-white cursor-pointer"
                                    >
                                        <option value="">Select a destination...</option>
                                        {destinations.map((dest) => (
                                            <option key={dest.id} value={dest.name}>
                                                {dest.name}
                                            </option>
                                        ))}
                                    </select>
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

export default ContactForm;
