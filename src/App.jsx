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

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ksa" element={<KSALanding />} />
                <Route path="/ksa/globalPackages" element={<GlobalPackages />} />
                <Route path="/ksa/visit-saudi" element={<VisitSaudi />} />
                <Route path="/package/:id" element={<PackageDetails />} />
                <Route path="/blog" element={<BlogList />} />
                <Route path="/blog/:id" element={<BlogDetail />} />
                <Route path="/careers" element={<Careers />} />
                <Route path="/careers/:id" element={<CareerDetail />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
