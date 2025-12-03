import React, { useState, useEffect, useRef } from 'react';
import { X, MessageCircle, Send, Calendar, Users, MapPin, Plane, Hotel, DollarSign, Sparkles, Compass } from 'lucide-react';

const TripPlannerWidget = ({ pageType = 'global' }) => {
    const [isOpen, setIsOpen] = useState(false);
    const [hasShownInitially, setHasShownInitially] = useState(false);
    const [currentStep, setCurrentStep] = useState(0);
    const [formData, setFormData] = useState({
        destination: '',
        travelDates: '',
        travelers: '1',
        budget: '',
        interests: [],
        accommodation: '',
        specialRequests: ''
    });
    const [showThankYou, setShowThankYou] = useState(false);
    const widgetRef = useRef(null);

    // Auto-open on page load (only once)
    useEffect(() => {
        if (!hasShownInitially) {
            const timer = setTimeout(() => {
                setIsOpen(true);
                setHasShownInitially(true);
            }, 2000);
            return () => clearTimeout(timer);
        }
    }, [hasShownInitially]);

    // Handle click outside to close
    useEffect(() => {
        const handleClickOutside = (event) => {
            if (widgetRef.current && !widgetRef.current.contains(event.target)) {
                setIsOpen(false);
            }
        };

        if (isOpen) {
            document.addEventListener('mousedown', handleClickOutside);
        }

        return () => {
            document.removeEventListener('mousedown', handleClickOutside);
        };
    }, [isOpen]);

    const steps = [
        {
            id: 'welcome',
            question: pageType === 'global'
                ? "✈️ Ready to explore the world? Let's plan your perfect global adventure!"
                : "🕌 Discover Saudi Arabia! Let's create your personalized Visit Saudi experience!",
            type: 'welcome'
        },
        {
            id: 'destination',
            question: pageType === 'global'
                ? "Where would you like to go? 🌍"
                : "Which Saudi destinations interest you? 🏜️",
            type: 'text',
            placeholder: pageType === 'global'
                ? "e.g., Paris, Bali, Switzerland..."
                : "e.g., Riyadh, Jeddah, Al Ula...",
            icon: MapPin
        },
        {
            id: 'travelDates',
            question: "When are you planning to travel? 📅",
            type: 'date',
            placeholder: "Select your travel dates",
            icon: Calendar
        },
        {
            id: 'travelers',
            question: "How many travelers? 👥",
            type: 'select',
            options: ['1', '2', '3-5', '6-10', '10+'],
            icon: Users
        },
        {
            id: 'budget',
            question: "What's your budget range? 💰",
            type: 'select',
            options: pageType === 'global'
                ? ['SAR 5,000 - 10,000', 'SAR 10,000 - 20,000', 'SAR 20,000 - 50,000', 'SAR 50,000+']
                : ['SAR 2,000 - 5,000', 'SAR 5,000 - 10,000', 'SAR 10,000 - 20,000', 'SAR 20,000+'],
            icon: DollarSign
        },
        {
            id: 'interests',
            question: "What interests you most? (Select all that apply) ✨",
            type: 'multiselect',
            options: pageType === 'global'
                ? ['Adventure & Sports', 'Culture & History', 'Beach & Relaxation', 'Shopping', 'Food & Cuisine', 'Nature & Wildlife']
                : ['Historical Sites', 'Desert Adventures', 'Cultural Experiences', 'Beach Resorts', 'Mountain Escapes', 'Modern Cities'],
            icon: Sparkles
        },
        {
            id: 'accommodation',
            question: "Preferred accommodation type? 🏨",
            type: 'select',
            options: ['5-Star Luxury', '4-Star Comfort', '3-Star Budget', 'Boutique Hotels', 'Resorts'],
            icon: Hotel
        },
        {
            id: 'specialRequests',
            question: "Any special requests or requirements? 📝",
            type: 'textarea',
            placeholder: "Tell us anything else we should know...",
            icon: Plane
        }
    ];

    const handleInputChange = (value) => {
        const currentStepData = steps[currentStep];
        if (currentStepData.type === 'multiselect') {
            const currentInterests = formData.interests || [];
            const newInterests = currentInterests.includes(value)
                ? currentInterests.filter(i => i !== value)
                : [...currentInterests, value];
            setFormData({ ...formData, interests: newInterests });
        } else {
            setFormData({ ...formData, [currentStepData.id]: value });
        }
    };

    const handleNext = () => {
        if (currentStep < steps.length - 1) {
            setCurrentStep(currentStep + 1);
        } else {
            handleSubmit();
        }
    };

    const handleBack = () => {
        if (currentStep > 0) {
            setCurrentStep(currentStep - 1);
        }
    };

    const handleSubmit = () => {
        console.log('Trip Plan Data:', formData);
        setShowThankYou(true);
        // Here you would typically send the data to your backend
        setTimeout(() => {
            setIsOpen(false);
            setShowThankYou(false);
            setCurrentStep(0);
            setFormData({
                destination: '',
                travelDates: '',
                travelers: '1',
                budget: '',
                interests: [],
                accommodation: '',
                specialRequests: ''
            });
        }, 3000);
    };

    const currentStepData = steps[currentStep];
    const Icon = currentStepData?.icon;

    return (
        <>
            {/* Floating Button */}
            {!isOpen && (
                <button
                    onClick={() => setIsOpen(true)}
                    className="fixed bottom-6 right-6 z-50 bg-gradient-to-r from-primary to-red-700 text-white p-4 rounded-full shadow-2xl hover:shadow-3xl transform hover:scale-110 transition-all duration-300 animate-bounce"
                >
                    <Compass size={28} />
                    <span className="absolute -top-1 -right-1 w-6 h-6 bg-green-500 rounded-full border-2 border-white flex items-center justify-center text-xs font-bold">
                        !
                    </span>
                </button>
            )}

            {/* Chat Widget */}
            {isOpen && (
                <div ref={widgetRef} className="fixed bottom-6 right-6 z-50 w-96 max-w-[calc(100vw-3rem)] bg-white rounded-2xl shadow-2xl overflow-hidden animate-slideInUp">
                    {/* Header */}
                    <div className="bg-gradient-to-r from-primary to-red-700 text-white p-4 flex items-center justify-between">
                        <div className="flex items-center space-x-3">
                            <div className="w-10 h-10 bg-white/20 rounded-full flex items-center justify-center">
                                <Sparkles size={20} />
                            </div>
                            <div>
                                <h3 className="font-bold">Trip Planner</h3>
                                <p className="text-xs text-white/80">Let's plan your journey!</p>
                            </div>
                        </div>
                        <button
                            onClick={() => setIsOpen(false)}
                            className="p-1 hover:bg-white/20 rounded-full transition-colors"
                        >
                            <X size={20} />
                        </button>
                    </div>

                    {/* Progress Bar */}
                    <div className="bg-gray-100 h-2">
                        <div
                            className="bg-gradient-to-r from-primary to-red-700 h-full transition-all duration-300"
                            style={{ width: `${((currentStep + 1) / steps.length) * 100}%` }}
                        />
                    </div>

                    {/* Content */}
                    <div className="p-6 h-96 overflow-y-auto">
                        {!showThankYou ? (
                            <>
                                {/* Question */}
                                <div className="mb-6">
                                    <div className="flex items-start space-x-3 mb-4">
                                        {Icon && (
                                            <div className="w-8 h-8 bg-primary/10 rounded-full flex items-center justify-center flex-shrink-0 mt-1">
                                                <Icon size={16} className="text-primary" />
                                            </div>
                                        )}
                                        <div className="bg-gray-100 rounded-2xl rounded-tl-none p-4 flex-1">
                                            <p className="text-gray-800 font-medium">{currentStepData.question}</p>
                                        </div>
                                    </div>

                                    {/* Input Fields */}
                                    {currentStepData.type === 'welcome' && (
                                        <div className="text-center py-8">
                                            <div className="text-6xl mb-4">
                                                {pageType === 'global' ? '✈️' : '🕌'}
                                            </div>
                                            <p className="text-gray-600 mb-6">
                                                Answer a few quick questions and we'll create a personalized itinerary just for you!
                                            </p>
                                        </div>
                                    )}

                                    {currentStepData.type === 'text' && (
                                        <input
                                            type="text"
                                            value={formData[currentStepData.id] || ''}
                                            onChange={(e) => handleInputChange(e.target.value)}
                                            placeholder={currentStepData.placeholder}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    )}

                                    {currentStepData.type === 'date' && (
                                        <input
                                            type="date"
                                            value={formData[currentStepData.id] || ''}
                                            onChange={(e) => handleInputChange(e.target.value)}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                                        />
                                    )}

                                    {currentStepData.type === 'select' && (
                                        <div className="space-y-2">
                                            {currentStepData.options.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleInputChange(option)}
                                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-left ${formData[currentStepData.id] === option
                                                        ? 'border-primary bg-primary/5 text-primary font-semibold'
                                                        : 'border-gray-200 hover:border-primary/50'
                                                        }`}
                                                >
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {currentStepData.type === 'multiselect' && (
                                        <div className="space-y-2">
                                            {currentStepData.options.map((option) => (
                                                <button
                                                    key={option}
                                                    onClick={() => handleInputChange(option)}
                                                    className={`w-full px-4 py-3 rounded-lg border-2 transition-all text-left ${formData.interests?.includes(option)
                                                        ? 'border-primary bg-primary/5 text-primary font-semibold'
                                                        : 'border-gray-200 hover:border-primary/50'
                                                        }`}
                                                >
                                                    <span className="mr-2">
                                                        {formData.interests?.includes(option) ? '✓' : '○'}
                                                    </span>
                                                    {option}
                                                </button>
                                            ))}
                                        </div>
                                    )}

                                    {currentStepData.type === 'textarea' && (
                                        <textarea
                                            value={formData[currentStepData.id] || ''}
                                            onChange={(e) => handleInputChange(e.target.value)}
                                            placeholder={currentStepData.placeholder}
                                            rows={4}
                                            className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent resize-none"
                                        />
                                    )}
                                </div>
                            </>
                        ) : (
                            <div className="text-center py-12">
                                <div className="text-6xl mb-4">🎉</div>
                                <h3 className="text-2xl font-bold text-gray-900 mb-2">Thank You!</h3>
                                <p className="text-gray-600 mb-4">
                                    We've received your trip preferences. Our travel experts will contact you soon with a personalized itinerary!
                                </p>
                                <div className="inline-flex items-center space-x-2 text-primary">
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce"></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.2s' }}></div>
                                    <div className="w-2 h-2 bg-primary rounded-full animate-bounce" style={{ animationDelay: '0.4s' }}></div>
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Footer */}
                    {!showThankYou && (
                        <div className="border-t border-gray-200 p-4 bg-gray-50">
                            <div className="flex items-center justify-between space-x-3">
                                {currentStep > 0 && (
                                    <button
                                        onClick={handleBack}
                                        className="px-4 py-2 text-gray-600 hover:text-gray-900 font-semibold transition-colors"
                                    >
                                        ← Back
                                    </button>
                                )}
                                <button
                                    onClick={handleNext}
                                    className="ml-auto flex items-center space-x-2 px-6 py-3 bg-gradient-to-r from-primary to-red-700 text-white font-bold rounded-lg hover:shadow-lg transition-all"
                                >
                                    <span>{currentStep === steps.length - 1 ? 'Submit' : currentStep === 0 ? "Let's Start!" : 'Next'}</span>
                                    <Send size={16} />
                                </button>
                            </div>
                            <p className="text-xs text-gray-500 mt-2 text-center">
                                Step {currentStep + 1} of {steps.length}
                            </p>
                        </div>
                    )}
                </div>
            )}

            <style jsx>{`
                @keyframes slideInUp {
                    from {
                        transform: translateY(100%);
                        opacity: 0;
                    }
                    to {
                        transform: translateY(0);
                        opacity: 1;
                    }
                }
                .animate-slideInUp {
                    animation: slideInUp 0.3s ease-out;
                }
            `}</style>
        </>
    );
};

export default TripPlannerWidget;
