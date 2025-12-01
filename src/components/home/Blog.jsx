import React from 'react';
import { Calendar, User, ArrowRight } from 'lucide-react';
import { blogPosts } from '../../data/data';

const Blog = () => {
    const handleReadMore = (post) => {
        console.log('Read more:', post.title);
        // Future: Navigate to blog post page
    };

    return (
        <section className="py-20 bg-gray-50">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
                {/* Section Header */}
                <div className="text-center mb-16">
                    <h2 className="text-4xl font-bold text-gray-900 mb-4">
                        Travel <span className="text-primary">Insights</span>
                    </h2>
                    <p className="text-lg text-gray-600 max-w-2xl mx-auto">
                        Expert tips, destination guides, and travel inspiration from our team of seasoned explorers.
                    </p>
                </div>

                {/* Blog Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {blogPosts.map((post) => (
                        <article
                            key={post.id}
                            className="bg-white rounded-xl overflow-hidden border border-gray-200 hover:shadow-hover transition-all duration-300 group cursor-pointer"
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
            </div>
        </section>
    );
};

export default Blog;
