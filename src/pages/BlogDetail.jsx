import React, { useEffect } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import Navbar from '../components/home/Navbar';
import Footer from '../components/common/Footer';
import Breadcrumb from '../components/common/Breadcrumb';
import { blogPosts } from '../data/data';
import { Calendar, User, ArrowRight, Clock, Share2, Facebook, Twitter, Linkedin } from 'lucide-react';

const BlogDetail = () => {
    const { id } = useParams();
    const navigate = useNavigate();

    const blog = blogPosts.find(b => b.id === parseInt(id));

    useEffect(() => {
        window.scrollTo(0, 0);
    }, [id]);

    if (!blog) {
        return (
            <div className="min-h-screen flex items-center justify-center">
                <div className="text-center">
                    <h2 className="text-2xl font-bold text-gray-900 mb-4">Blog Post Not Found</h2>
                    <Link to="/" className="text-primary hover:underline">Return to Home</Link>
                </div>
            </div>
        );
    }

    // Get related blogs (exclude current blog)
    const relatedBlogs = blogPosts.filter(b => b.id !== blog.id).slice(0, 3);

    return (
        <div className="bg-white min-h-screen">
            <Navbar />

            {/* Hero Section */}
            <div className="relative h-[50vh] min-h-[400px] w-full">
                <div
                    className="absolute inset-0 bg-cover bg-center"
                    style={{ backgroundImage: `url(${blog.image})` }}
                >
                    <div className="absolute inset-0 bg-gradient-to-b from-black/60 to-black/40"></div>
                </div>
                <div className="absolute inset-0 flex flex-col justify-center items-center text-center px-4">
                    <div className="bg-primary text-white px-4 py-2 rounded-full text-sm font-semibold mb-4">
                        {blog.category}
                    </div>
                    <h1 className="text-3xl md:text-5xl font-bold text-white mb-4 max-w-4xl">
                        {blog.title}
                    </h1>
                    <div className="flex items-center space-x-6 text-white/90 text-sm md:text-base">
                        <div className="flex items-center">
                            <User size={18} className="mr-2" />
                            {blog.author}
                        </div>
                        <div className="flex items-center">
                            <Calendar size={18} className="mr-2" />
                            {blog.date}
                        </div>
                        <div className="flex items-center">
                            <Clock size={18} className="mr-2" />
                            5 min read
                        </div>
                    </div>
                </div>
            </div>

            {/* Breadcrumb */}
            <Breadcrumb
                path={[
                    { label: 'Blog', href: '/#blog' },
                    { label: blog.title, isActive: true }
                ]}
                theme="light"
            />

            {/* Content */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
                    {/* Main Content */}
                    <div className="lg:col-span-2">
                        <article className="prose prose-lg max-w-none">
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </article>

                        {/* Share Section */}
                        <div className="mt-12 pt-8 border-t border-gray-200">
                            <div className="flex items-center justify-between">
                                <h3 className="text-lg font-bold text-gray-900">Share this article</h3>
                                <div className="flex items-center space-x-3">
                                    <button className="p-3 rounded-full bg-blue-600 text-white hover:bg-blue-700 transition-colors">
                                        <Facebook size={20} />
                                    </button>
                                    <button className="p-3 rounded-full bg-sky-500 text-white hover:bg-sky-600 transition-colors">
                                        <Twitter size={20} />
                                    </button>
                                    <button className="p-3 rounded-full bg-blue-700 text-white hover:bg-blue-800 transition-colors">
                                        <Linkedin size={20} />
                                    </button>
                                    <button className="p-3 rounded-full bg-gray-200 text-gray-700 hover:bg-gray-300 transition-colors">
                                        <Share2 size={20} />
                                    </button>
                                </div>
                            </div>
                        </div>

                        {/* Author Bio */}
                        <div className="mt-8 p-6 bg-gray-50 rounded-xl">
                            <div className="flex items-start space-x-4">
                                <div className="w-16 h-16 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                                    <User size={32} className="text-primary" />
                                </div>
                                <div>
                                    <h4 className="text-lg font-bold text-gray-900 mb-1">About {blog.author}</h4>
                                    <p className="text-gray-600 text-sm leading-relaxed">
                                        {blog.author} is a travel expert and content creator with years of experience exploring destinations around the world. Passionate about sharing travel tips and inspiring others to discover new places.
                                    </p>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Sidebar */}
                    <div className="lg:col-span-1">
                        <div className="sticky top-32 space-y-8">
                            {/* Related Posts */}
                            <div className="bg-gray-50 rounded-xl p-6">
                                <h3 className="text-xl font-bold text-gray-900 mb-6">Related Articles</h3>
                                <div className="space-y-6">
                                    {relatedBlogs.map((relatedBlog) => (
                                        <article
                                            key={relatedBlog.id}
                                            onClick={() => navigate(`/blog/${relatedBlog.id}`)}
                                            className="group cursor-pointer"
                                        >
                                            <div className="relative h-40 rounded-lg overflow-hidden mb-3">
                                                <img
                                                    src={relatedBlog.image}
                                                    alt={relatedBlog.title}
                                                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                                                />
                                                <div className="absolute top-2 left-2 bg-primary text-white px-2 py-1 rounded-full text-xs font-semibold">
                                                    {relatedBlog.category}
                                                </div>
                                            </div>
                                            <h4 className="font-bold text-gray-900 group-hover:text-primary transition-colors line-clamp-2 mb-2">
                                                {relatedBlog.title}
                                            </h4>
                                            <div className="flex items-center text-xs text-gray-500 space-x-3">
                                                <span className="flex items-center">
                                                    <Calendar size={12} className="mr-1" />
                                                    {relatedBlog.date}
                                                </span>
                                            </div>
                                        </article>
                                    ))}
                                </div>
                            </div>

                            {/* CTA Box */}
                            <div className="bg-gradient-to-br from-primary to-red-700 rounded-xl p-6 text-white">
                                <h3 className="text-xl font-bold mb-3">Ready to Travel?</h3>
                                <p className="text-white/90 text-sm mb-4">
                                    Explore our curated packages and start planning your next adventure today!
                                </p>
                                <Link
                                    to="/ksa"
                                    className="block w-full bg-white text-primary font-bold py-3 rounded-lg text-center hover:bg-gray-100 transition-colors"
                                >
                                    View Packages
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />

            <style jsx>{`
                .blog-content h2 {
                    font-size: 1.75rem;
                    font-weight: 700;
                    color: #111827;
                    margin-top: 2rem;
                    margin-bottom: 1rem;
                }
                .blog-content p {
                    color: #4B5563;
                    line-height: 1.75;
                    margin-bottom: 1.5rem;
                }
                .blog-content h2:first-child {
                    margin-top: 0;
                }
            `}</style>
        </div>
    );
};

export default BlogDetail;
