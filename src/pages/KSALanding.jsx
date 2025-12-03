import React from 'react';
import Navbar from '../components/home/Navbar';
import Breadcrumb from '../components/common/Breadcrumb';
import KSAHero from '../components/ksa/KSAHero';
import PackageSlider from '../components/ksa/PackageSlider';
import KSAServices from '../components/ksa/KSAServices';
import Testimonials from '../components/common/Testimonials';
import KSAContact from '../components/ksa/KSAContact';
import Footer from '../components/common/Footer';
import { packages, ksaNavLinks } from '../data/data';

const KSALanding = () => {
    // Filter packages for sliders
    const globalPackages = packages.filter(pkg => pkg.subType === 'Global Packages');
    const saudiPackages = packages.filter(pkg => pkg.subType === 'Visit Saudi');

    return (
        <div className="KSALanding">
            <Navbar links={ksaNavLinks} />
            <Breadcrumb path={[{ label: 'KSA', isActive: true }]} theme="dark" />
            <KSAHero />

            {/* Global Holidays Section */}
            <PackageSlider
                title="Global Packages"
                packages={globalPackages}
                sectionId="global-packages"
                seeAllLink="/ksa/globalPackages"
            />

            {/* Visit Saudi Section */}
            <div className="bg-gray-50">
                <PackageSlider
                    title="Visit Saudi"
                    packages={saudiPackages}
                    sectionId="visit-saudi"
                    seeAllLink="/ksa/visit-saudi"
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
