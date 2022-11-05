import React, { Component } from 'react';

import Header from '../components/Header/Header';
import Hero from '../components/Hero/Hero';
import AboutUs from '../components/AboutUs/AboutUs';
import Artist from '../components/Artist/Artist';
import Roadmap from '../components/Roadmap/Roadmap';
import Faq from '../components/Faq/Faq';
import Footer from '../components/Footer/Footer';
import ModalSearch from '../components/Modal/ModalSearch';
import ModalMenu from '../components/Modal/ModalMenu';
import Scrollup from '../components/Scrollup/Scrollup';

class Home extends Component {
    render() {
        return (
            <div className="main">
                <Header />
                <Hero />  
                <AboutUs />  
                <Artist />       
                <Roadmap />   
                <Faq />                                                                           
                <Footer />
                <ModalSearch />
                <ModalMenu />
                <Scrollup />
            </div>
        );
    }
}

export default Home;