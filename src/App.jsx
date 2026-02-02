import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KSALanding from './pages/KSALanding';
import GlobalPackages from './pages/GlobalPackages';
import VisitSaudi from './pages/VisitSaudi';
import PackageDetails from './pages/PackageDetails';
import BlogDetail from './pages/BlogDetail';
import BlogList from './pages/BlogList';
import Careers from './pages/Careers';
import CareerDetail from './pages/CareerDetail';
import Services from './pages/Services';
import KSAServicesPage from './pages/KSAServicesPage';
import GlobalPackagesServices from './pages/GlobalPackagesServices';
import VisitSaudiServices from './pages/VisitSaudiServices';
import CorporateMicePage from './pages/CorporateMicePage';
import KSADestinations from './pages/KSADestinations';
import KSASpecialOffers from './pages/KSASpecialOffers';
import SaudiExperiences from './pages/SaudiExperiences';
import SaudiEvents from './pages/SaudiEvents';
import SaudiSpiritual from './pages/SaudiSpiritual';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ksa" element={<KSALanding />} />
                <Route path="/ksa/globalPackages" element={<GlobalPackages />} />
                <Route path="/ksa/globalPackages/destinations" element={<KSADestinations />} />
                <Route path="/ksa/globalPackages/special-offers" element={<KSASpecialOffers />} />
                <Route path="/ksa/visit-saudi" element={<VisitSaudi />} />
                <Route path="/ksa/visit-saudi/experiences" element={<SaudiExperiences />} />
                <Route path="/ksa/visit-saudi/events" element={<SaudiEvents />} />
                <Route path="/ksa/visit-saudi/spiritual-journeys" element={<SaudiSpiritual />} />
                <Route path="/package/:id" element={<PackageDetails />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:id" element={<CareerDetail />} />
                <Route path="/services" element={<Services />} />
                <Route path="/ksa/services" element={<KSAServicesPage />} />
                <Route path="/ksa/globalPackages/services" element={<GlobalPackagesServices />} />
                <Route path="/ksa/visit-saudi/services" element={<VisitSaudiServices />} />
                <Route path="/ksa/globalPackages/corporate-mice" element={<CorporateMicePage />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
