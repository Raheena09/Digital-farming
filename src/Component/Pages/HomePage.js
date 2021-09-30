import React from 'react';
import About from '../About';
import Banner from '../Banner';
import Nav from '../Common/Nav';
import Contact from '../Contact';
import Shop_Queries from '../Shop_Queries';

function HomePage() {
    return (
        <div>
            <Nav/>
            <Banner/>
            <About/>
            <Shop_Queries/>
            <Contact/>
        </div>
    )
}

export default HomePage
