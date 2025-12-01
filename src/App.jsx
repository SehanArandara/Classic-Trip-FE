import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import KSALanding from './pages/KSALanding';
import GlobalPackages from './pages/GlobalPackages';
import VisitSaudi from './pages/VisitSaudi';
import PackageDetails from './pages/PackageDetails';

function App() {
    return (
        <BrowserRouter>
            <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/ksa" element={<KSALanding />} />
                <Route path="/ksa/globalPackages" element={<GlobalPackages />} />
                <Route path="/ksa/visit-saudi" element={<VisitSaudi />} />
                <Route path="/package/:id" element={<PackageDetails />} />
            </Routes>
        </BrowserRouter>
    );
}

export default App;
