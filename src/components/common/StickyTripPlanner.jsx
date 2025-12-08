import React, { useState } from 'react';
import { Send, Calendar, Users, MapPin, DollarSign, Sparkles, CheckCircle } from 'lucide-react';

const StickyTripPlanner = ({ pageType = 'global' }) => {
    const [formData, setFormData] = useState({
        destination: '',
        travelDates: '',
        travelers: '1',
        budget: '',
        interests: [],
        name: '',
        contact: ''
    });
    const [isSubmitted, setIsSubmitted] = useState(false);

    const handleInputChange = (field, value) => {
        setFormData({ ...formData, [field]: value });
    };

    const handleInterestToggle = (interest) => {
        const current = formData.interests;
        const updated = current.includes(interest)
            ? current.filter(i => i !== interest)
            : [...current, interest];
        setFormData({ ...formData, interests: updated });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log('Form Submitted:', formData);
        setIsSubmitted(true);
    };

    const interestsOptions = pageType === 'global'
        ? ['Adventure', 'Culture', 'Relaxation', 'Shopping', 'Food', 'Nature']
        : ['History', 'Desert', 'Culture', 'Beach', 'Mountains', 'City'];

    const budgetOptions = pageType === 'global'
        ? ['SAR 5k-10k', 'SAR 10k-20k', 'SAR 20k-50k', 'SAR 50k+']
        : ['SAR 2k-5k', 'SAR 5k-10k', 'SAR 10k-20k', 'SAR 20k+'];

    if (isSubmitted) {
        return (
            <div className="bg-white rounded-2xl shadow-xl p-8 text-center border border-gray-100 sticky top-24">
                <div className="w-16 h-16 bg-green-100 text-green-500 rounded-full flex items-center justify-center mx-auto mb-4">
                    <CheckCircle size={32} />
                </div>
                <h3 className="text-2xl font-bold text-gray-900 mb-2">Request Received!</h3>
                <p className="text-gray-600 mb-6">
                    Our travel experts will craft your perfect {pageType === 'global' ? 'global' : 'Saudi'} itinerary and contact you shortly.
                </p>
                <button
                    onClick={() => { setIsSubmitted(false); setFormData({ ...formData, destination: '', interests: [] }); }}
                    className="text-primary font-semibold hover:underline"
                >
                    Plan another trip
                </button>
            </div>
        );
    }

    return (
        <div className="bg-white rounded-2xl shadow-xl border border-gray-100 overflow-hidden sticky top-24">
            <div className="bg-primary p-6 text-white">
                <h3 className="text-xl font-bold flex items-center gap-2">
                    <Sparkles size={20} />
                    Plan Your Dream Trip
                </h3>
                <p className="text-white/80 text-sm mt-1">
                    {pageType === 'global' ? 'Explore the world with us!' : 'Discover the wonders of Saudi!'}
                </p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 space-y-4">
                {/* Destination */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">
                        {pageType === 'global' ? 'Where to?' : 'Destination'}
                    </label>
                    <div className="relative">
                        <MapPin size={18} className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="text"
                            required
                            placeholder={pageType === 'global' ? "e.g., Paris, Bali..." : "e.g., Riyadh, Al Ula..."}
                            value={formData.destination}
                            onChange={(e) => handleInputChange('destination', e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Travel Dates */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Travel Dates</label>
                    <div className="relative">
                        <Calendar size={18} className="absolute left-3 top-3 text-gray-400" />
                        <input
                            type="date"
                            required
                            value={formData.travelDates}
                            onChange={(e) => handleInputChange('travelDates', e.target.value)}
                            className="w-full pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                        />
                    </div>
                </div>

                {/* Travelers & Budget */}
                <div className="grid grid-cols-2 gap-4">
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Travelers</label>
                        <div className="relative">
                            <Users size={18} className="absolute left-3 top-3 text-gray-400" />
                            <select
                                value={formData.travelers}
                                onChange={(e) => handleInputChange('travelers', e.target.value)}
                                className="w-full pl-10 pr-2 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none bg-white"
                            >
                                <option>1</option>
                                <option>2</option>
                                <option>3-5</option>
                                <option>6+</option>
                            </select>
                        </div>
                    </div>
                    <div>
                        <label className="block text-sm font-medium text-gray-700 mb-1">Budget</label>
                        <div className="relative">
                            <DollarSign size={18} className="absolute left-3 top-3 text-gray-400" />
                            <select
                                value={formData.budget}
                                onChange={(e) => handleInputChange('budget', e.target.value)}
                                className="w-full pl-10 pr-2 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none appearance-none bg-white"
                            >
                                <option value="">Select</option>
                                {budgetOptions.map(opt => <option key={opt} value={opt}>{opt}</option>)}
                            </select>
                        </div>
                    </div>
                </div>

                {/* Interests */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">Interests</label>
                    <div className="flex flex-wrap gap-2">
                        {interestsOptions.map(interest => (
                            <button
                                key={interest}
                                type="button"
                                onClick={() => handleInterestToggle(interest)}
                                className={`text-xs px-3 py-1.5 rounded-full border transition-all ${formData.interests.includes(interest)
                                        ? 'bg-primary text-white border-primary'
                                        : 'bg-gray-50 text-gray-600 border-gray-200 hover:border-primary/50'
                                    }`}
                            >
                                {interest}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Name */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Your Name</label>
                    <input
                        type="text"
                        required
                        placeholder="John Doe"
                        value={formData.name}
                        onChange={(e) => handleInputChange('name', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                </div>

                {/* Contact */}
                <div>
                    <label className="block text-sm font-medium text-gray-700 mb-1">Phone / Email</label>
                    <input
                        type="text"
                        required
                        placeholder="+966... or email@example.com"
                        value={formData.contact}
                        onChange={(e) => handleInputChange('contact', e.target.value)}
                        className="w-full px-4 py-2 border border-gray-200 rounded-lg focus:ring-2 focus:ring-primary/20 focus:border-primary outline-none transition-all"
                    />
                </div>

                {/* Submit Button */}
                <button
                    type="submit"
                    className="w-full bg-primary text-white py-3 rounded-xl font-bold hover:bg-red-700 transition-colors shadow-lg shadow-primary/30 flex items-center justify-center gap-2 mt-4"
                >
                    Submit Request <Send size={16} />
                </button>
            </form>
        </div>
    );
};

export default StickyTripPlanner;
