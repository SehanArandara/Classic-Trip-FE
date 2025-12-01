import React from 'react';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
import DestinationStrip from '../components/home/DestinationStrip';
import About from '../components/home/About';
import Services from '../components/home/Services';
import FeaturedTrips from '../components/home/FeaturedTrips';
import Blog from '../components/home/Blog';
import Testimonials from '../components/common/Testimonials';
import ContactForm from '../components/home/ContactForm';
import Footer from '../components/common/Footer';

const Home = () => {
    return (
        <div className="Home">
            <Navbar />
            <Hero />
            <DestinationStrip />
            <About />
            <Services />
            <FeaturedTrips />
            <Blog />
            <Testimonials />
            <ContactForm />
            <Footer />
        </div>
    );
};

export default Home;
