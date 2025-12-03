import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import { blogPosts } from '../data/data';
import { Calendar, User, ArrowRight, Search } from 'lucide-react';

const BlogList = () => {
    const navigate = useNavigate();
    const [searchTerm, setSearchTerm] = useState('');
    const [selectedCategory, setSelectedCategory] = useState('All');

    // Get unique categories
    const categories = ['All', ...new Set(blogPosts.map(post => post.category))];

    // Filter blogs
    const filteredBlogs = blogPosts.filter(blog => {
        const matchesSearch = blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
            blog.excerpt.toLowerCase().includes(searchTerm.toLowerCase());
        const matchesCategory = selectedCategory === 'All' || blog.category === selectedCategory;
        return matchesSearch && matchesCategory;
    });

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative bg-gradient-to-br from-primary to-red-700 py-20">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
                    <h1 className="text-4xl md:text-5xl font-bold text-white mb-4">
                        Travel <span className="text-white/90">Insights</span>
                    </h1>
                    <p className="text-lg text-white/90 max-w-2xl mx-auto">
                        Expert tips, destination guides, and travel inspiration from our team of seasoned explorers.
                    </p>
                </div>
            </div>

            {/* Breadcrumb */}
            <Breadcrumb
                path={[
                    { label: 'Blog', isActive: true }
                ]}
                theme="light"
            />

            {/* Filters Section */}
            <div className="bg-gray-50 border-b border-gray-200">
                <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6">
                    <div className="flex flex-col md:flex-row gap-4 items-center justify-between">
                        {/* Search */}
                        <div className="relative w-full md:w-96">
                            <Search className="absolute left-3 top-1/2 -translate-y-1/2 text-gray-400" size={20} />
                            <input
                                type="text"
                                placeholder="Search articles..."
                                value={searchTerm}
                                onChange={(e) => setSearchTerm(e.target.value)}
                                className="w-full pl-10 pr-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-primary focus:border-transparent"
                            />
                        </div>

                        {/* Category Filter */}
                        <div className="flex items-center space-x-2 overflow-x-auto pb-2 md:pb-0 w-full md:w-auto">
                            {categories.map((category) => (
                                <button
                                    key={category}
                                    onClick={() => setSelectedCategory(category)}
                                    className={`px-4 py-2 rounded-lg font-semibold whitespace-nowrap transition-all ${selectedCategory === category
                                            ? 'bg-primary text-white'
                                            : 'bg-white text-gray-700 hover:bg-gray-100 border border-gray-300'
                                        }`}
                                >
                                    {category}
                                </button>
                            ))}
                        </div>
                    </div>

                    {/* Results Count */}
                    <div className="mt-4 text-sm text-gray-600">
                        Showing {filteredBlogs.length} {filteredBlogs.length === 1 ? 'article' : 'articles'}
                    </div>
                </div>
            </div>

            {/* Blog Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                {filteredBlogs.length > 0 ? (
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                        {filteredBlogs.map((post) => (
                            <article
                                key={post.id}
                                onClick={() => navigate(`/blog/${post.id}`)}
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
                                    <div className="flex items-center space-x-2 text-primary font-semibold hover:underline group-hover:translate-x-1 transition-transform">
                                        <span>Read More</span>
                                        <ArrowRight size={16} />
                                    </div>
                                </div>
                            </article>
                        ))}
                    </div>
                ) : (
                    <div className="text-center py-20">
                        <div className="text-gray-400 mb-4">
                            <Search size={64} className="mx-auto" />
                        </div>
                        <h3 className="text-2xl font-bold text-gray-900 mb-2">No articles found</h3>
                        <p className="text-gray-600">Try adjusting your search or filter to find what you're looking for.</p>
                    </div>
                )}
            </div>

            <Footer />
        </div>
    );
};

export default BlogList;
