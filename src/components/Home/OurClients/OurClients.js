import React from 'react';
import airbnb from '../../../images/logos/airbnb.png';
import google from '../../../images/logos/google.png';
import netflix from '../../../images/logos/netflix.png';
import slack from '../../../images/logos/slack.png';
import uber from '../../../images/logos/uber.png';
const OurClients = () => {
   
    return (
        <div className="d-flex justify-content-center m-4">
            <img style={{width: "100px"}} className="img-fluid m-3" src={airbnb} alt=""/>
            <img style={{width: "100px"}} className="img-fluid m-3" src={google} alt=""/>
            <img style={{width: "100px"}} className="img-fluid m-3" src={netflix} alt=""/>
            <img style={{width: "100px"}} className="img-fluid m-3" src={slack} alt=""/>
            <img style={{width: "100px"}} className="img-fluid m-3" src={uber} alt=""/>
        </div>
    );
};

export default OurClients;