import React from 'react';
import Header from '../Header/Header/Header';
import OurClients from '../OurClients/OurClients';
import Services from '../Services/Services';
import Portfolio from '../Portfolio/Portfolio';
import Reviews from '../Reviews/Reviews/Reviews';
import Footer from '../Footer/Footer';




const Home = () => {
    return (
        <div className="container">
          <Header></Header>
          <OurClients></OurClients>
          <Services></Services>
          <Portfolio></Portfolio>         
          <Reviews></Reviews>
          <Footer></Footer>
          
        </div>
    );
};

export default Home;