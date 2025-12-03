import React from 'react';
import Navbar from '../home/Navbar';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import KSAContact from './KSAContact';
import Testimonials from '../common/Testimonials';
import Blog from '../home/Blog';

import { ksaNavLinks } from '../../data/data';

const KSAPageLayout = ({ pageName, breadcrumbPath, hero, packages, services }) => {
    return (
        <div className="bg-gray-50 min-h-screen">
            {/* Header: Main Logo (in Navbar) */}
            <Navbar links={ksaNavLinks} />

            {/* Breadcrumbs */}
            <Breadcrumb path={breadcrumbPath} theme="dark" />

            {/* Hero */}
            {hero}

            {/* Packages Grid */}
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
                {packages}
            </div>

            {/* Services */}
            {services}

            {/* Blogs */}
            <Blog />

            {/* Testimonials */}
            <Testimonials />

            {/* CTA Banner */}
            <KSAContact />

            <Footer />
        </div>
    );
};

export default KSAPageLayout;
