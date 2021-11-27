import React from 'react';
import About from '../../about/About';
import Banner from '../banner/Banner';
import Navigation from '../Navigation';
import Services from '../../services/Services'
import Footer from '../../footer/Footer';
import Holiday from '../../holiday/Holiday';
import Offers from '../../offers/Offers';

const Home = () => {
    return (
        <div>
           <Banner></Banner>
           <About></About>
           <Offers></Offers>
          
           <Services></Services>
           <Holiday></Holiday>
           <Footer></Footer>
        </div>
    );
};

export default Home;