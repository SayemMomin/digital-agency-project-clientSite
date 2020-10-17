import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
const OurClients = () => {
   
    return (
            <section className="d-flex justify-content-center col m-4">
            <div className="d-flex justify-content-center col">
            <img style={{width: "100px"}} className="img-fluid m-3" src={airbnb} alt=""/>
            </div>
            <div className="d-flex justify-content-center col">
            <img style={{width: "100px"}} className="img-fluid m-3" src={google} alt=""/>
            </div>
            <div className="d-flex justify-content-center col">
            <img style={{width: "100px"}} className="img-fluid m-3" src={netflix} alt=""/>
            </div>
            <div className="d-flex justify-content-center col">
            <img style={{width: "100px"}} className="img-fluid m-3" src={slack} alt=""/>
            </div>
            <div className="d-flex justify-content-center col">
            <img style={{width: "100px"}} className="img-fluid m-3" src={uber} alt=""/>
            </div>
        </section>
    );
};

export default OurClients;