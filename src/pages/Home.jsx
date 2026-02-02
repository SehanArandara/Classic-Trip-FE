import React from 'react';
import Navbar from '../components/home/Navbar';
import Hero from '../components/home/Hero';
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
            <Navbar logoType="ctrip" />
            <Hero />
            <About />
            <Services />
            <FeaturedTrips />
            <Blog />
            <Testimonials />
            <ContactForm />
            <Footer logoType="ctrip" />
        </div>
    );
};

export default Home;
