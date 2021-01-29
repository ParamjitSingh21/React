import React from 'react'
import Header from './Header';
import './HomePage.css';
import Services from './Services';
import Portfolio from './Portfolio';
import Twitter from './Twitter';
import WhoIs from './WhoIs';
import Testimonials from './Testimonials';
import ContactForm from './ContactForm';


function HomePage() {
    return (
        <div>
            <Header />
            <Services />
            <Portfolio />
            <Twitter />
            <WhoIs />
            <Testimonials />
            <ContactForm />
        </div>
    )
}

export default HomePage
