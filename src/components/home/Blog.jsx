import React, { useRef } from 'react';
import { Calendar, User, ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { blogPosts } from '../../data/data';
import { useNavigate } from 'react-router-dom';

const Blog = () => {
    const navigate = useNavigate();
    const scrollContainerRef = useRef(null);

    const handleReadMore = (post) => {
        navigate(`/blog/${post.id}`);
    };

    const scroll = (direction) => {
        const container = scrollContainerRef.current;
        if (container) {
            const scrollAmount = 400;
            container.scrollBy({
                left: direction === 'left' ? -scrollAmount : scrollAmount,
                behavior: 'smooth'
            });
        }
    };

    return (
        <section id="blog" className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="flex justify-between items-center mb-12">
                    <div>
                        <h2 className="text-4xl font-bold text-gray-900 mb-4">
                            Travel <span className="text-primary">Insights</span>
                        </h2>
                        <p className="text-lg text-gray-600 max-w-2xl">
                            Expert tips, destination guides, and travel inspiration from our team of seasoned explorers.
                        </p>
                    </div>

                    <div className="flex items-center space-x-3">
                        {/* Navigation Arrows */}
                        <button
                            onClick={() => scroll('left')}
                            className="p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            aria-label="Scroll left"
                        >
                            <ChevronLeft size={20} />
                        </button>
                        <button
                            onClick={() => scroll('right')}
                            className="p-2 rounded-full bg-white border border-gray-300 hover:bg-primary hover:text-white hover:border-primary transition-all"
                            aria-label="Scroll right"
                        >
                            <ChevronRight size={20} />
                        </button>

                        {/* View All Button */}
                        <button
                            onClick={() => navigate('/blog')}
                            className="hidden md:flex items-center space-x-2 px-6 py-2 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
                        >
                            <span>View All</span>
                            <ArrowRight size={18} />
                        </button>
                    </div>
                </div>

                {/* Blog Slider */}
                <div
                    ref={scrollContainerRef}
                    className="flex gap-6 overflow-x-auto scrollbar-hide scroll-smooth pb-4"
                    style={{ scrollbarWidth: 'none', msOverflowStyle: 'none' }}
                >
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="flex-shrink-0 w-80 bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-hover transition-all duration-300 group cursor-pointer"
                        >
                            {/* Thumbnail */}
                            <div className="relative h-56 overflow-hidden">
                                <img
                                    src={post.image}
                                    alt={post.title}
                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                />
                                <div className="absolute top-4 left-4 bg-primary text-white px-3 py-1 rounded-full text-xs font-semibold">
                                    {post.category}
                                </div>
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-3 group-hover:text-primary transition-colors line-clamp-2">
                                    {post.title}
                                </h3>

                                {/* Meta Info */}
                                <div className="flex items-center space-x-4 text-sm text-gray-500 mb-4">
                                    <div className="flex items-center">
                                        <User size={14} className="mr-1" />
                                        <span>{post.author}</span>
                                    </div>
                                    <div className="flex items-center">
                                        <Calendar size={14} className="mr-1" />
                                        <span>{post.date}</span>
                                    </div>
                                </div>

                                <p className="text-gray-600 mb-4 line-clamp-3">
                                    {post.excerpt}
                                </p>

                                {/* Read More Link */}
                                <button
                                    onClick={() => handleReadMore(post)}
                                    className="flex items-center space-x-2 text-primary font-semibold hover:underline group-hover:translate-x-1 transition-transform"
                                >
                                    <span>Read More</span>
                                    <ArrowRight size={16} />
                                </button>
                            </div>
                        </article>
                    ))}
                </div>

                {/* Mobile View All Button */}
                <div className="md:hidden mt-6 text-center">
                    <button
                        onClick={() => navigate('/blog')}
                        className="inline-flex items-center space-x-2 px-8 py-3 bg-primary hover:bg-red-700 text-white font-semibold rounded-lg transition-all"
                    >
                        <span>View All</span>
                        <ArrowRight size={18} />
                    </button>
                </div>
            </div>

            <style jsx>{`
                .scrollbar-hide::-webkit-scrollbar {
                    display: none;
                }
            `}</style>
        </section>
    );
};

export default Blog;
