import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
import './OurClients.css'
const OurClients = () => {
   
    return (
            <section className="d-flex flex-column justify-content-around align-items-center flex-md-row mt-5 container">
            
            <img  className="clients" src={airbnb} alt=""/>
         
            
            <img  className="clients" src={google} alt=""/>
         
            
            <img  className="clients" src={netflix} alt=""/>
         
            
            <img  className="clients" src={slack} alt=""/>
         
            
            <img  className="clients" src={uber} alt=""/>
         
        </section>
    );
};

export default OurClients;