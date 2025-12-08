import React from 'react';
import KSANavbar from './KSANavbar';
import Footer from '../common/Footer';
import Breadcrumb from '../common/Breadcrumb';
import KSAContact from './KSAContact';
import Testimonials from '../common/Testimonials';
import Blog from '../home/Blog';

import { ksaNavLinks } from '../../data/data';

const KSAPageLayout = ({ pageName, breadcrumbPath, hero, packages, services, navbar }) => {
    return (
        <div className="bg-gray-50 min-h-screen pt-32">
            {/* Header: Custom Navbar */}
            {navbar}

            {/* Breadcrumbs */}
            <Breadcrumb path={breadcrumbPath} theme="dark" className="!top-36" />

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
