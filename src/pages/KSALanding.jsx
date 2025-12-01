import React from 'react';
import Navbar from '../components/home/Navbar';
import KSABreadcrumb from '../components/ksa/KSABreadcrumb';
import KSAHero from '../components/ksa/KSAHero';
import PackageSlider from '../components/ksa/PackageSlider';
import KSAServices from '../components/ksa/KSAServices';
import Testimonials from '../components/common/Testimonials';
import KSAContact from '../components/ksa/KSAContact';
import Footer from '../components/common/Footer';
import { packages } from '../data/data';

import { ksaNavLinks } from '../data/data';

const KSALanding = () => {
    // Filter packages for sliders
    const globalPackages = packages.filter(pkg => pkg.type === 'global');
    const saudiPackages = packages.filter(pkg => pkg.type === 'visit-saudi');

    return (
        <div className="KSALanding">
            <Navbar links={ksaNavLinks} />
            <KSABreadcrumb />
            <KSAHero />

            {/* Global Holidays Section */}
            <PackageSlider
                title="Global Holidays"
                packages={globalPackages}
                sectionId="global-holidays"
            />

            {/* Visit Saudi Section */}
            <div className="bg-gray-50">
                <PackageSlider
                    title="Visit Saudi"
                    packages={saudiPackages}
                    sectionId="visit-saudi"
                />
            </div>

            <KSAServices />
            <Testimonials />
            <KSAContact />
            <Footer />
        </div>
    );
};

export default KSALanding;
