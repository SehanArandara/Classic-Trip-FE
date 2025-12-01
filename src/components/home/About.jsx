import React from 'react';
import { Award, Users, Globe, TrendingUp } from 'lucide-react';

const About = () => {
    const highlights = [
        {
            icon: Award,
            title: "Award-Winning Service",
            description: "Recognized globally for excellence in travel"
        },
        {
            icon: Users,
            title: "Expert Team",
            description: "Dedicated professionals with years of experience"
        },
        {
            icon: Globe,
            title: "Global Network",
            description: "Partnerships across 50+ countries worldwide"
        },
        {
            icon: TrendingUp,
            title: "Trusted by Thousands",
            description: "Over 10,000 satisfied travelers annually"
        }
    ];

    return (
        <section id="about" className="py-20 bg-white">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                <div className="grid md:grid-cols-2 gap-12 items-center">
                    {/* Left: Text Content */}
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-6">
                            About <span className="text-primary">Classic Trip</span>
                        </h2>
                        <p className="text-lg text-gray-600 mb-6 leading-relaxed">
                            For over 15 years, Classic Trip has been crafting unforgettable travel experiences
                            for adventurers, families, and business travelers alike. We believe that every journey
                            should be as unique as the traveler embarking on it.
                        </p>
                        <p className="text-lg text-gray-600 mb-8 leading-relaxed">
                            From visa assistance to luxury accommodations, from guided tours to seamless
                            transportation—we handle every detail so you can focus on creating memories that last a lifetime.
                        </p>

                        {/* Highlights Grid */}
                        <div className="grid grid-cols-2 gap-6">
                            {highlights.map((item, index) => {
                                const Icon = item.icon;
                                return (
                                    <div key={index} className="flex items-start space-x-3">
                                        <div className="flex-shrink-0">
                                            <div className="w-12 h-12 bg-primary/10 rounded-lg flex items-center justify-center">
                                                <Icon className="text-primary" size={24} />
                                            </div>
                                        </div>
                                        <div>
                                            <h3 className="font-semibold text-gray-900 mb-1">{item.title}</h3>
                                            <p className="text-sm text-gray-600">{item.description}</p>
                                        </div>
                                    </div>
                                );
                            })}
                        </div>
                    </div>

                    {/* Right: Image Collage */}
                    <div className="grid grid-cols-2 gap-4">
                        <div className="space-y-4">
                            <img
                                src="https://images.unsplash.com/photo-1469854523086-cc02fe5d8800?w=600&q=80"
                                alt="Travel destination"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1476514525535-07fb3b4ae5f1?w=600&q=80"
                                alt="Adventure travel"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                        <div className="space-y-4 mt-8">
                            <img
                                src="https://images.unsplash.com/photo-1530789253388-582c481c54b0?w=600&q=80"
                                alt="Cultural experience"
                                className="w-full h-48 object-cover rounded-lg shadow-lg"
                            />
                            <img
                                src="https://images.unsplash.com/photo-1507608616759-54f48f0af0ee?w=600&q=80"
                                alt="Beach paradise"
                                className="w-full h-64 object-cover rounded-lg shadow-lg"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
