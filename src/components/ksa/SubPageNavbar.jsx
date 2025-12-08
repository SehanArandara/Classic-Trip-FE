import React from 'react';
import DualNavbar from '../common/DualNavbar';
import Navbar from '../home/Navbar';
import { ksaNavLinks, globalPackagesSecondaryNav, visitSaudiSecondaryNav } from '../../data/data';
import { Link } from 'react-router-dom';

const SubPageNavbar = ({ pageType }) => {
    // Top Bar: KSA Navigation (Main Nav for this level)
    const MainNav = (
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-12 flex items-center justify-between text-sm font-medium">
            <div className="flex items-center space-x-6">
                {ksaNavLinks.map((link) => (
                    <Link
                        key={link.name}
                        to={link.href}
                        className="hover:text-gray-200 transition-colors"
                    >
                        {link.name}
                    </Link>
                ))}
            </div>
            <div className="text-xs opacity-80">KSA Portal</div>
        </div>
    );

    // Sub Bar: Page Specific Navigation
    const secondaryLinks = pageType === 'global' ? globalPackagesSecondaryNav : visitSaudiSecondaryNav;

    const SecondaryNav = (
        <Navbar
            links={secondaryLinks}
            isStatic={true}
            customClass="!bg-transparent !shadow-none !static"
        />
    );

    return <DualNavbar mainNav={MainNav} secondaryNav={SecondaryNav} />;
};

export default SubPageNavbar;
